import React, { useEffect, useRef, useState } from "react";
import { createMachine, createActor } from "xstate";
import type { EventObject, StateMachine, StateValue } from "xstate";
import type {
  Flow,
  PageApi,
  Cancel,
  GoBack,
  Submit,
  Context,
  PropertiesOrFactory,
  StatePageMapEntry,
  FlowWindowStateTransition,
  IFlowSnapshot,
  IPersistedFlowState,
} from "./flowHelper.ts";

interface FlowWindowProps {
  flow: Flow<any, any>;
  persistence: IPersistedFlowState;
  shellApi?: any;
}

export const FlowWindow: React.FC<FlowWindowProps> = ({ flow, persistence, shellApi }) => {
  const [runningFlow, setRunningFlow] = useState<any>(undefined);
  const [pageContext, setPageContext] = useState<any>(undefined);
  const [currentPageMapEntry, setCurrentPageMapEntry] = useState<StatePageMapEntry<any> | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState<any>(undefined);
  const [currentPageProps, setCurrentPageProps] = useState<Record<string, unknown>>({});
  const [lastStateTransition, setLastStateTransition] = useState<FlowWindowStateTransition<any, any> | undefined>(
    undefined
  );
  const pageContainerRef = useRef<HTMLDivElement>(null);

  const pageApi: PageApi = {
    submit: () => {
      runningFlow?.send({
        type: "Submit",
        context: pageContext,
      });
    },
    goBack: () => {
      runningFlow?.send({
        type: "GoBack",
      });
    },
    cancel: () => {
      runningFlow?.send({
        type: "Cancel",
      });
    },
    send: (event: any) => {
      runningFlow?.send(event);
    },
  };

  const copyContext = (context: any) => ({
    ...context,
    persistent: JSON.parse(JSON.stringify(context.persistent)),
    volatile: JSON.parse(JSON.stringify(context.volatile)),
    shell: shellApi,
  });

  const stateToString = (state: any): string => {
    if (typeof state === "string") {
      return state;
    }
    const queue = Object.keys(state);
    const stringRepresentation: string[] = [];

    while (queue.length > 0) {
      const key = queue.shift();
      if (key) {
        stringRepresentation.push(key);
        const value = state[key];
        if (typeof value === "string") {
          stringRepresentation.push(value);
        } else if (typeof value === "object") {
          queue.push(...Object.keys(value));
        }
      }
    }

    return stringRepresentation.join(".");
  };

  const onPageSend = (event: CustomEvent<Record<string, unknown> & { type: string }>): void => {
    if (!runningFlow) {
      throw new Error(
        `Flow ${flow.id} is not running but received event ${event.type} from page ${currentPageMapEntry}`
      );
    }
    if (event.detail.type === "Cancel" && event.detail.flowId === flow.id) {
      runningFlow.stop();
      return;
    }
    runningFlow.send(event.detail);
  };

  const isComplexEntry = (
    entry: any
  ): entry is StatePageMapEntry<any> & {
    properties?: PropertiesOrFactory<any>;
    component: any;
    on?: Record<string, (event: any) => void>;
  } => !!entry.component;

  const subscribeToPageEvents = (stateViewMapEntry: StatePageMapEntry<any>, page: any, context: any): void => {
    if (!isComplexEntry(stateViewMapEntry) || typeof stateViewMapEntry.on !== "function") {
      useEffect(() => {
        const handleSend = (event: CustomEvent) => onPageSend(event);
        page.addEventListener("send", handleSend);
        return () => {
          page.removeEventListener("send", handleSend);
        };
      }, [page, onPageSend]);
      return;
    }

    const eventHandlers = stateViewMapEntry.on(context, pageApi, shellApi);
    for (let onKey in eventHandlers) {
      useEffect(() => {
        const handler = eventHandlers[onKey];
        const handleEvent = (e: any) => handler(e);
        page.addEventListener(onKey, handleEvent);
        return () => {
          page.removeEventListener(onKey, handleEvent);
        };
      }, [page, eventHandlers, onKey]);
    }
    useEffect(() => {
      const handleSend = (event: CustomEvent) => onPageSend(event);
      page.addEventListener("send", handleSend);
      return () => {
        page.removeEventListener("send", handleSend);
      };
    }, [page, onPageSend]);
  };

  const mountPage = (stateViewMapEntry: StatePageMapEntry<any>, context: any): any => {
    let nextComponent: any;
    if (isComplexEntry(stateViewMapEntry)) {
      let newPageProps: Record<string, unknown>;
      if (typeof stateViewMapEntry.properties === "function") {
        newPageProps = {
          ...currentPageProps,
          ...stateViewMapEntry.properties(context, pageApi),
        };
      } else {
        newPageProps = { ...currentPageProps, ...(stateViewMapEntry.properties ?? {}) };
      }

      if (currentPage?.constructor === stateViewMapEntry.component) {
        currentPage.$set(newPageProps);
        return currentPage;
      }

      if (currentPage) {
        // React handles unmounting automatically
      }
      if (typeof stateViewMapEntry.component === 'function') {
        nextComponent = React.createElement(stateViewMapEntry.component, newPageProps);
      } else {
        nextComponent = new stateViewMapEntry.component({
          target: pageContainerRef.current,
          props: newPageProps,
        });
      }
    } else if (typeof stateViewMapEntry === "function") {
      if (currentPage?.constructor === stateViewMapEntry) {
        return currentPage;
      }

      if (currentPage) {
        // React handles unmounting automatically
      }
      // @ts-ignore
      nextComponent = new stateViewMapEntry({
        target: pageContainerRef.current,
        props: currentPageProps,
      });
    } else {
      throw new Error("Page container is undefined");
    }

    subscribeToPageEvents(stateViewMapEntry, nextComponent, context);

    return nextComponent;
  };

  const onStateTransition = (state: any): void => {
    const nextContext = copyContext(state.context);
    const nextPageKey = stateToString(state.value);
    const nextPageMapEntry = flow.pages[nextPageKey];

    if (state.done) {
      persistence.delete();
    } else {
      persistence.store({
        state: state.value,
        persistentContext: nextContext.persistent,
      });
    }

    persistence.commit();

    setLastStateTransition({
      final: !!state.done,
      flowId: flow.id,
      state: state.value,
      event: state.event,
      context: state.context,
    });

    if (!!state.done && shellApi) {
      shellApi.stoppedFlow(flow.id, lastStateTransition);
    }

    if (!nextPageMapEntry) {
      return;
    }

    setCurrentPageProps({
      ...currentPageProps,
      context: nextContext,
      api: pageApi,
    });

    setCurrentPage(mountPage(nextPageMapEntry, nextContext));
    setPageContext(nextContext);
  };

  const createInitialContext = (
    snapshot: IFlowSnapshot | undefined,
    stateMachineDefinition: any
  ): Context & { shell: any } => ({
    persistent: {
      ...(stateMachineDefinition.context?.persistent ?? {}),
      ...snapshot?.persistentContext,
    },
    volatile: stateMachineDefinition.context?.volatile ?? {},
    data: stateMachineDefinition.context?.data ?? {},
    errors: stateMachineDefinition.context?.errors ?? {},
    shell: shellApi,
  });

  const runFlow = (): void => {
    const snapshot = persistence.restore();
    const initialContext = createInitialContext(snapshot, flow.stateMachine);

    const machine = createMachine(flow.stateMachine.withContext(initialContext));
    const actor = createActor(machine, {
      id: flow.id,
    });

    actor.subscribe({
      next: onStateTransition,
    });
    actor.start();

    setRunningFlow(actor);
  };

  useEffect(() => {
    if (runningFlow && runningFlow.id !== flow.id) {
      runningFlow.stop();
      setRunningFlow(undefined);
    }
    if (pageContainerRef.current && !runningFlow && flow) {
      runFlow();
    }

    return () => {
      if (runningFlow) {
        runningFlow.stop();
      }
      if (currentPage) {
        // React handles unmounting automatically
      }
    };
  }, [flow, runningFlow]);

  return <div ref={pageContainerRef}></div>;
};

