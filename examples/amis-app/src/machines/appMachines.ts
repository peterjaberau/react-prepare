import { assign, fromPromise, setup } from "xstate"
import { listStories } from "@/machines/helpers/api.ts"


export const appStoriesMachine = setup({
  actors: {
    getStories: fromPromise(async ({ input }: any) => listStories(input)),
  },
}).createMachine({
  id: "entries",
  initial: "loading",
  context: {
    stories: [],
    statusMessage: null,
    itemStatusMessage: {},
  },
  states: {
    loading: {
      invoke: {
        src: "getStories",
        input: ({ context }: any) => ({ scope: '' }),
        onDone: {
          target: "idle",
          actions: assign(({ event }: any) => ({
            stories: event.output,
            statusMessage: event.output.length === 0 ? "No stories found" : null,
          })),
        },
        onError: {
          target: "idle",
          actions: assign({
            statusMessage: ({ event }: any) => event.error.message,
          }),
        },
      },
    },
    idle: {
      on: {
        filter: {
          target: "loading",
          actions: assign(({ event }: any) => ({
            filter: { scope: '', },
          })),
        },
        refresh: {
          target: "loading",
        },
      },
    },
  },
})
