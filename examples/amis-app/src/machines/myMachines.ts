import { setup, fromPromise, assign, sendTo, fromCallback } from "xstate"
import {
  login,
  register,
  createEntry,
  deleteEntry,
  listEntries,
  updateEntry,
  logout,
  updateUser,
  updatePassword,
  listStories
} from "@/machines/helpers/api.ts"
import { data as groupedRenderersByKeyword } from "@/amis/_discover_/datasets/groupedRenderersByKeyword.ts"

export const loginMachine = setup({
  actors: {
    login: fromPromise(async ({ input }: any) => login(input)),
    register: fromPromise(async ({ input }: any) => register(input)),
  },
  actions: {
    authenticate: sendTo(
      ({ system }: any) => system.get("root"),
      ({ event }: any) => ({ type: "authenticate", params: event.output }),
    ),
  },
}).createMachine({
  id: "login",
  context: {
    statusMessage: null,
  },
  initial: "idle",
  states: {
    idle: {
      on: {
        login: {
          target: "logging-in",
          actions: assign({
            statusMessage: "Logging in...",
          }),
        },
        register: {
          target: "registering",
          actions: assign({
            statusMessage: "Registering...",
          }),
        },
      },
    },
    "logging-in": {
      invoke: {
        src: "login",
        input: ({ event }) => {
          return {
            username: event.username,
            password: event.password,
          }
        },
        onDone: {
          target: "idle",
          actions: { type: "authenticate" },
        },
        onError: {
          target: "idle",
          actions: assign({
            statusMessage: ({ event }: any) => event.error.message,
          }),
        },
      },
    },
    registering: {
      invoke: {
        src: "register",
        input: ({ event }: any) => ({ username: event.username, password: event.password }),
        onDone: {
          target: "idle",
          actions: { type: "authenticate" },
        },
        onError: {
          target: "idle",
          actions: assign({
            statusMessage: ({ event }: any) => event.error.message,
          }),
        },
      },
    },
  },
})

export const newEntryMachine = setup({
  actors: {
    createEntry: fromPromise(async ({ input }: any) => createEntry(input)),
    timer: fromCallback(({ sendBack, receive }: any) => {
      const interval = setInterval(() => {
        sendBack({
          type: "tick",
        })
      }, 1000)
      receive((event: any) => {
        if (event.type === "stop") {
          clearInterval(interval)
        }
      })
    }),
  },
}).createMachine({
  id: "newEntry",
  initial: "idle",
  context: {
    timerValue: 0,
    statusMessage: null,
  },
  states: {
    idle: {
      entry: [
        assign({
          timerValue: 0,
        }),
      ],
      on: {
        start: {
          target: "active",
        },
      },
    },
    active: {
      entry: [
        assign({
          statusMessage: null,
        }),
      ],
      invoke: {
        src: "timer",
        id: "timer",
      },
      on: {
        tick: {
          actions: assign({
            timerValue: ({ context }) => context.timerValue + 1,
          }),
        },
        pause: {
          target: "paused",
        },
        finish: {
          target: "finishing",
        },
      },
      exit: [
        sendTo("timer", {
          type: "stop",
        }),
      ],
    },
    paused: {
      on: {
        resume: {
          target: "active",
        },
        finish: {
          target: "finishing",
        },
      },
    },
    finishing: {
      entry: [
        assign({
          statusMessage: "Saving...",
        }),
      ],
      invoke: {
        src: "createEntry",
        input: ({ event, context }) => {
          const endTimestamp = Math.floor(Date.now() / 1000)
          return {
            description: event.description,
            start_time: `@${endTimestamp - context.timerValue}`,
            end_time: `@${endTimestamp}`,
          }
        },
        onDone: {
          target: "finished",
        },
        onError: {
          target: "paused",
          actions: assign({
            statusMessage: ({ event }: any) => event.error.message,
          }),
        },
      },
    },
    finished: {
      entry: [
        assign({
          statusMessage: "Time logged successfully",
        }),
        sendTo(({ system }) => system.get("entries"), {
          type: "refresh",
        }),
      ],
      after: {
        2000: {
          target: "idle",
          actions: assign({
            statusMessage: null,
          }),
        },
      },
    },
  },
})

export const entriesMachine = setup({
  actors: {
    getEntries: fromPromise(async ({ input }: any) => listEntries(input)),
    updateEntry: fromPromise(async ({ input }: any) => updateEntry(input)),
    deleteEntry: fromPromise(async ({ input }: any) => deleteEntry(input)),
  },
}).createMachine({
  id: "entries",
  initial: "loading",
  context: {
    groupedEntries: [],
    totalDuration: 0,
    statusMessage: null,
    filter: {
      startDate: null,
      endDate: null,
    },
    itemStatusMessage: {},
  },
  states: {
    loading: {
      invoke: {
        src: "getEntries",
        input: ({ context }: any) => ({
          from: '',
          to: '',
        }),
        onDone: {
          target: "idle",
          actions: assign(({ event }: any) => {
            console.log(event)
            return {
              groupedEntries: event.output,
              statusMessage: event.output.length === 0 ? "No entries found" : null,
            }
          }),
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
            filter: {
              startDate: event.startDate,
              endDate: event.endDate,
            },
          })),
        },
        refresh: {
          target: "loading",
        },
        updateEntry: {
          target: "updating-entry",
        },
        deleteEntry: {
          target: "deleting-entry",
        },
      },
    },
    "updating-entry": {
      entry: [
        assign({
          itemStatusMessage: ({ event }: any) => ({
            [event.id]: "Saving...",
          }),
        }),
      ],
      invoke: {
        src: "updateEntry",
        input: ({ event }: any) => event.updatedEntry,
        onDone: {
          target: "loading",
          actions: assign({
            itemStatusMessage: ({ event }: any) => ({
              [event.updatedEntry.id]: null,
            }),
          }),
        },
        onError: {
          target: "idle",
          actions: assign({
            statusMessage: ({ event }: any) => event.error.message,
          }),
        },
      },
    },
    "deleting-entry": {
      entry: [
        assign({
          itemStatusMessage: ({ event }: any) => ({
            [event.entryId]: "Deleting...",
          }),
        }),
      ],
      invoke: {
        src: "deleteEntry",
        input: ({ event }: any) => event.entryId,
        onDone: {
          target: "loading",
          actions: assign({
            itemStatusMessage: ({ event }: any) => ({
              [event.id]: null,
            }),
          }),
        },
        onError: {
          target: "idle",
          actions: assign({
            statusMessage: ({ event }: any) => event.error.message,
          }),
        },
      },
    },
  },
})

export const profileMachine = setup({
  actors: {
    logout: fromPromise(logout),
  },
}).createMachine({
  id: "profile",
  initial: "idle",
  states: {
    idle: {
      on: {
        logout: {
          target: "logging-out",
        },
      },
    },
    "logging-out": {
      invoke: {
        src: "logout",
        onDone: {
          target: "idle",
          actions: sendTo(({ system }: any) => system.get("root"), { type: "unauthenticate" }),
        },
        onError: {
          target: "idle",
        },
      },
    },
  },
})

export const customizeUserMachine = setup({
  actors: {
    updateUser: fromPromise(async ({ input }: any) => updateUser(input)),
  },
}).createMachine({
  id: "customizeUser",
  initial: "idle",
  context: ({ input }: any) => ({
    userId: input.userId,
    username: input.username,
    avatar_background: input.avatar_background,
    avatar_character: input.avatar_character,
    statusMessage: null,
  }),
  states: {
    idle: {
      on: {
        changeAvatarCharacter: {
          actions: assign(({ event }) => ({
            avatar_character: event.value,
          })),
        },
        changeAvatarBackground: {
          actions: assign(({ event }) => ({
            avatar_background: event.value,
          })),
        },
        changeUsername: {
          actions: assign(({ event }) => ({
            username: event.value,
          })),
        },
        save: {
          target: "saving",
        },
      },
    },
    saving: {
      entry: [
        assign({
          statusMessage: "Saving...",
        }),
      ],
      invoke: [
        {
          src: "updateUser",
          input: ({ context }) => ({
            id: context.userId,
            username: context.username,
            avatar_character: context.avatar_character,
            avatar_background: context.avatar_background,
          }),
          onDone: {
            target: "idle",
            actions: [
              assign({
                statusMessage: "Profile updated",
              }),
              sendTo(
                ({ system }) => system.get("root"),
                ({ context }) => ({
                  type: "updateUserData",
                  params: {
                    username: context.username,
                    avatar_character: context.avatar_character,
                    avatar_background: context.avatar_background,
                  },
                }),
              ),
            ],
          },
          onError: {
            target: "idle",
            actions: assign({
              statusMessage: ({ event }: any) => event.error.message,
            }),
          },
        },
      ],
    },
  },
})

export const changePasswordMachine = setup({
  actors: {
    updatePassword: fromPromise(async ({ input }: any) => updatePassword(input)),
  },
}).createMachine({
  id: "changePassword",
  initial: "idle",
  context: ({ input }: any) => ({
    username: input.username,
    statusMessage: null,
  }),
  states: {
    idle: {
      on: {
        save: {
          target: "saving",
        },
      },
    },
    saving: {
      entry: [
        assign({
          statusMessage: "Saving...",
        }),
      ],
      invoke: [
        {
          src: "updatePassword",
          input: ({ context, event }) => ({
            username: context.username,
            password: event.password,
            newPassword: event.newPassword,
          }),
          onDone: {
            target: "idle",
            actions: assign({
              statusMessage: "Password updated",
            }),
          },
          onError: {
            target: "idle",
            actions: assign({
              statusMessage: ({ event }: any) => event.error.message,
            }),
          },
        },
      ],
    },
  },
})

export const storiesMachine = setup({
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


export const rightPanelMachine = setup({
  actions: {},
  actors: {},
}).createMachine({
  id: "rightPanel",
  context: {
    metadata: {
      title: "Right Panel",
    },
    properties: {
      style: { height: "300px" },
      readonly: false,
      activePanelKey: [],
    },
    preview: {},
    schema: {},
  },
  initial: "idle",
  states: {
    idle: {
      on: {
        onAddPanel: {
          target: "idle",
        },
      },
    },
  },
})

export const renderersPanelMachine = setup({
  actions: {
    setGroupedRenderers: assign({
      properties: ({ context, event }: any) => ({
        ...context.properties,
        groupedRenderers: event.groupedRenderers,
      }),
    }),
    setErrorStatus: assign({
      info: ({ event }: any) => ({
        statusMessage: event.error.message,
      }),
    }),
  },
  actors: {
    getEntries: fromPromise(async ({ input }: any) => groupedRenderersByKeyword),
  },
}).createMachine({
  id: "renderersPanel",
  context: {
    metadata: {
      title: "Renderers Panel",
    },
    properties: {
      searchRendererType: "renderer",
      groupedRenderers: {},
    },
    preview: {},
    schema: {
      store: "any",
      manager: "any",
      groupedRenderers: {
        type: "object",
        properties: {
          propName: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: "string",
                name: "string",
                plugin: {
                  type: "object",
                  properties: {
                    rendererName: "string",
                  },
                },
                scaffold: "object",
                icon: "string",
              },
            },
          },
        },
      },
      searchRendererType: "string",
      className: "string",
      testIdBuilder: "any",
      noop: "function",
      isHasPluginIcon: "function",
    },
    info: {
      statusMessage: undefined,
    }
  },
  initial: "idle",
  states: {
    idle: {
      on: {
        onLoad: {
          target: "loading",
        },
      },
    },
    loading: {
      invoke: {
        src: "getEntries",
        // input: ({ context }: any) => ({
        //   properties: context.properties
        // }),
        onDone: {
          target: "idle",
          actions: ["setGroupedRenderers"],
        },
        onError: {
          target: "idle",
          actions: ["setErrorStatus"],
        },
      },
    },
  },
})
