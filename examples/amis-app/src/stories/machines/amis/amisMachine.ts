import { setup, spawnChild, sendTo, assign, fromPromise, fromCallback } from 'xstate';
import { Ok } from "ts-results"
import { initialContext, plugins, pluginActions, pluginEvents, tpls } from "./amisConfig.ts"
import { AmisGetRenderers } from "@/stories/components/amis-docs/AmisGetRenderers.tsx"
import { getRenderers } from 'amis';

export const amisMachine = setup({
  types: {
    context: {} as any,
    events: {} as any,
  },
  actions: {
    connectToComponent:assign(({ context, event }: any) => {
      console.log("connectToComponent------", event)
      const connectedComponent = context.plugins.find((plugin: any) => plugin.rendererName === event.rendererName)
      const connectedEvents = context.pluginEvents?.[event.rendererName]
      const connectedActions = context.pluginActions?.[event.rendererName]

      console.log("connectToComponent-After-----", {
        connectedComponent: connectedComponent,
        connectedEvents: connectedEvents,
        connectedActions: connectedActions,
      })

      const result = {
        connectedComponent: {
          ...connectedComponent,
          events: connectedEvents,
          actions: connectedActions,
        },
      }

      context.connectedComponent = result.connectedComponent
      console.log("connectToComponent-After-Result-----", result)

      //
      //
      // return {
      //   connectedComponent: {
      //     ...connectedComponent,
      //     events: connectedEvents,
      //     actions: connectedActions,
      //   },
      // }
    }),

    setValue:assign(({ context, event }: any) => {
      // console.log("setValue------", event)
      // console.log("setValueContext------", { renderers: event.output.val })
      return {
        renderers: event.output.val,
      }
    }),
    setPluginsValue:assign(({ context, event }: any) => {
      return {
        ...context,
        ...event.output.val,
      }
    }),

    setTemplatesValue:assign(({ context, event }: any) => {
      console.log("setTemplatesValue------", event)
      return {
        tpls: event.output.val.tpls,
      }
    }),

  },
  actors: {
    getRenderersActor: fromPromise(async ({ input }: any) => {
      await new Promise((resolve: any) => setTimeout(resolve, 1_00));
      return new Ok(getRenderers());
    }),
    getPlugins: fromPromise(async ({ input }: any) => {
      await new Promise((resolve: any) => setTimeout(resolve, 1_00));
      return new Ok({
        plugins: plugins,
        pluginEvents: pluginEvents,
        pluginActions: pluginActions
      });
    }),
    getTemplates: fromPromise(async ({ input }: any) => {
      await new Promise((resolve: any) => setTimeout(resolve, 1_00));
      return new Ok({
        tpls: tpls
      });
    }),
  },
  guards: {},
}).createMachine({
  id: "amis-machine",
  initial: 'gettingRenderers',
  context: {
    connectedComponent: {
      rendererName: null,
    },
    plugins: [],
    pluginEvents: {},
    pluginActions: {},
    tpls: {},
    ...initialContext,
  } as any,
  states: {
    gettingRenderers: {
      invoke: {
        src: "getRenderersActor",
        id: "getRenderersActor",
        onDone: {
          target: "gettingPlugins",
          actions: "setValue",
        },
      },
    },

    gettingPlugins: {
      invoke: {
        src: "getPlugins",
        id: "getPlugins",
        onDone: {
          target: "gettingTemplates",
          actions: "setPluginsValue",
        },
      },
    },

    gettingTemplates: {
      invoke: {
        src: "getTemplates",
        id: "getTemplates",
        onDone: {
          target: "ready",
          actions: "setTemplatesValue",
        },
      },
    },

    ready: {
      on: {
        CONNECT_TO_COMPONENT: {
          target: "ready",
          actions: "connectToComponent",

        },
        INCOMING_EVENT: {
          actions: "setValue",
        },
      },
    },
  },
});
