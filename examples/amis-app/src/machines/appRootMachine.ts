import { setup, spawnChild, sendTo, assign, fromPromise, fromCallback } from 'xstate';
import {
  appStoriesMachine,
} from "@/machines/appMachines.ts"
import { Ok } from "ts-results"


const appRootMachine = setup({
  types: {
    context: {} as any,
    events: {} as any,
  },
  actions: {
    setNavigations: assign({
      navigations: (_, event: any) => event.data
    }),
  },
  actors: {
    loadNavigation: fromPromise(async ({ input }: any) => {
      await new Promise((resolve: any) => setTimeout(resolve, 1_00));
      return new Ok([
        {
          type: 'link',
          text: 'Stories',
          href: '/stories',
          external: false
        },
        {
          type: 'link',
          text: 'Right Panel',
          href: '/stories/components/right-panel',
          external: false
        },
        {
          type: 'link',
          text: 'Renderers Panel',
          href: '/stories/components/renderers-panel',
          external: false
        },
        {
          type: 'link',
          text: 'Google',
          href: 'https://wwww.google.com',
          external: true
        }
      ]);
    }),
    stories: appStoriesMachine

  },
  guards: {

  },
}).createMachine({
  id: "app-root-machine",
  initial: 'initializing',
  context: {
    navigations: [],
  } as any,
  states: {
    initializing: {
      on: {
        INIT_NAVIGATION_LOAD: {
          target: "navigationLoading"
        }
      }
    },
    ready: {
      on: {
        START: {
          target: "ready"
        }
      }
    },
    navigationLoading: {
      invoke: {
        id: "loadNavigation",
        src: "loadNavigation",
        input: {},
        onDone: {
          target: "ready",
          actions: ["setNavigations"]
        },
        onError: {
          target: "ready"
        }
      },
    },
  },
})

export default appRootMachine
