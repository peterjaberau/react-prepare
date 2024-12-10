import { createMachine, assign, setup, fromPromise } from "xstate"
import { Ok } from "ts-results"
import { appStoriesMachine } from "@/machines/appMachines.ts"
import { navigationItems } from "./data.ts"

export const routerMachine = setup({
  types: {
    context: {} as any,
    events: {} as any,
  },
  actions: {
    setAvailableNavigations: assign({
      availableNavigations: (_, event: any) => event.data,
    }),
  },
  actors: {
    loadNavigation: fromPromise(async ({ input }: any) => {
      await new Promise((resolve: any) => setTimeout(resolve, 1_00))
      return new Ok(navigationItems)
    }),
    stories: appStoriesMachine,
  },
  guards: {},
}).createMachine({
  id: "router-machine",
  initial: "idle",
  context: {
    availableRoutes: [],
    availableNavigations: [],
  },
  states: {
    idle: {
      invoke: {
        src: "loadNavigation",
        id: "loadNavigation",
        onDone: {
          target: "ready",
          actions: "setAvailableNavigations",
        },
      },
    },
    ready: {
      on: {
        HOME: "home",
      },
    },
  },
})
