import { assign, setup } from "xstate";
import { createActorContext } from "@xstate/react";

const defaultConfig = {
  string: "",
  number: 0,
  boolean: false,
  object: {},
  array: [],
};

export const globalLogic = {
  id: "global-machine",
  initial: "idle",
  context: {
    ...defaultConfig,
  },
  states: {
    idle: {
      always: {
        target: "ready",
        actions: "init",
      },
    },
    ready: {
      on: {
        update: {
          actions: "update",
          target: "ready",
        },
        reset: {
          actions: "reset",
          target: "ready",
        },
        handle: {
          actions: ["handle"],
          target: "ready",
        },
        delete: {
          actions: ["delete"],
          target: "ready",
        },
        create: {
          actions: ["create"],
          target: "ready",
        },
        read: {
          actions: ["read"],
          target: "ready",
        },
      },
    },
  },
} as any;

export const globalMachine = setup({
  types: {
    context: {} as any,
    events: {} as any,
    schema: {} as any,
  } as any,
  actions: {
    init: assign(({ context, event }) => {
      console.log("action.init", event, context);
      return {
        ...context,
        ...defaultConfig,
      };
    }),
    update: assign(({ context, event }) => {
      console.log("action.update", event, context);
      context.string = event?.string;
      // context.mode = context.mode === "normal" ? "dev" : "normal";
    }),
    reset: assign(() => {
      console.log("action.reset");
      // reset the context to the default values
      return defaultConfig;
    }),
    handle: assign(({ context, event }) => {
      console.log("action.handle", event, context);
    }),
    delete: assign(() => {
      console.log("action.delete");
    }),
    create: assign(() => {
      console.log("action.create");
    }),
    read: assign(() => {
      console.log("action.read");
    }),
  },
  actors: {},
}).createMachine({
  ...globalLogic,
  context: ({ input }: any) => ({
    ...globalLogic?.context,
    input,
  }),
});

export const GlobalContext = createActorContext(globalMachine, {
  inspect: (inspectionEvent) => {
    console.log(inspectionEvent);
  },
});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};

export const useGlobalManager = () => {
  const actor = GlobalContext.useActorRef();
  const state = GlobalContext.useSelector((state: any) => state);

  return {
    actor: actor,
    state: state,
    selector: state.context.string,
    isSelector: state.context.string === state.context.number,
  };
};
