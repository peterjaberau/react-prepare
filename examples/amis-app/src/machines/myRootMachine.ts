import history from "history/browser"
import { getUser, listStories } from "@/machines/helpers/api.ts"
import { routeConfigs } from "@/stories/helpers/initialConfigs.ts"
import { setup, spawnChild, sendTo, assign, fromPromise, fromCallback } from 'xstate';
import {
  customizeUserMachine,
  loginMachine,
  changePasswordMachine,
  profileMachine,
  entriesMachine,
  newEntryMachine,
  storiesMachine,
} from "@/machines/myMachines.ts"
import { Ok } from "ts-results"


const rootMachine = setup({
  actions: {},
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
          href: '/right-panel',
          external: false
        },
        {
          type: 'link',
          text: 'Renderers Panel',
          href: '/renderers-panel',
          external: false
        }
      ]);
    }),
    getUser: fromPromise(getUser),
    history: fromCallback(({ sendBack, receive }: any) => {
      history.listen(({ location }: any) => {
        sendBack({
          type: 'locationChanged',
          location
        });
      });
      receive((event: any) => {
        if (event.type === 'getLocation') {
          sendBack({
            type: 'locationChanged',
            location: history.location
          });
        }
        if (event.type === 'pushLocation') {
          history.push(event.location);
        }
        if (event.type === 'replaceLocation') {
          history.push(event.location);
        }
      });
    }),
    customizeUser: customizeUserMachine,
    login: loginMachine,
    changePassword: changePasswordMachine,
    profile: profileMachine,
    // entries: entriesMachine,
    newEntry: newEntryMachine,
    stories: storiesMachine

  },
  guards: {
    isNewEntryRoute: ({ event }) => {
      return event.location.pathname === routeConfigs.newEntry;
    },
    isProfileRoute: ({ event }) => {
      return event.location.pathname === routeConfigs.profile;
    }
  },
}).createMachine({
  id: "root",
  entry: [spawnChild("history", { id: "history" })],
  initial: 'initializing',
  context: {
    navigations: [],
    // editorParts: [],
    // currentPart: undefined,
    userData: {
      id: 1,
      username: 'peterjaberau',
      avatar_character: 'p',
      avatar_background: null
    } as any
  } as any,
  states: {
    'unknown': {
      invoke: {
        src: 'getUser',
        onDone: {
          target: 'authenticated',
          actions: assign({
            userData: ({ event }: any) => ({
              id: 1,
              username: 'peterjaberau',
              avatar_character: 'p',
              avatar_background: null
            })
          })
        },
        onError: {
          target: 'unauthenticated'
        }
      }
    },

    'authenticated': {
      invoke: {
        src: 'stories',
        id: 'stories',
        systemId: 'stories'
      },
      initial: 'unknown',
      states: {
        'unknown': {
          entry: [
            sendTo('history', { type: 'getLocation' })
          ]
        },
        'stories': {},
        'newEntry': {
          invoke: {
            src: 'newEntry',
            id: 'newEntry'
          }
        },
        'profile': {
          invoke: [
            {
              src: 'profile',
              id: 'profile'
            },
            {
              src: 'customizeUser',
              id: 'customizeUser',
              input: ({ context }) => ({
                userId: context.userData.id,
                username: context.userData.username,
                avatar_character: context.userData.avatar_character,
                avatar_background: context.userData.avatar_background
              })
            },
            {
              src: 'changePassword',
              id: 'changePassword',
              input: ({ context }) => ({
                username: context.userData.username
              })
            }
          ]
        }
      },
      on: {
        'locationChanged': [
          {
            target: '.newEntry',
            guard: 'isNewEntryRoute'
          },
          {
            target: '.profile',
            guard: 'isProfileRoute'
          },
          {
            target: '.stories'
          }
        ],
        'pushRoute': {
          actions: sendTo('history', ({ event }: any) => ({
            type: 'pushLocation',
            location: routeConfigs[event.route]
          }))
        },
        navigate: {
          actions: sendTo('history', ({ event }) => ({
            type: 'pushLocation',
            location: event.href
          }))
        },
        'unauthenticate': {
          target: 'unauthenticated'
        }
      }
    },

    'unauthenticated': {
      initial: 'login',
      states: {
        'login': {
          entry: [
            sendTo('history', {
              type: 'replaceLocation',
              location: routeConfigs.login
            })
          ],
          invoke: {
            src: loginMachine,
            id: 'login'
          } as any
        }
      },
      on: {
        authenticate: {
          target: 'authenticated',
          actions: assign({
            userData:({ event }) => ({
              id: 1,
              username: 'peterjaberau',
              avatar_character: 'p',
              avatar_background: null
              // id: event.params.id,
              // username: event.params.username,
              // avatar_character: event.params.avatar_character,
              // avatar_background: event.params.avatar_background
            })
          })
        }
      }
    }

  },
})

export default rootMachine
