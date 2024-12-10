import {
  type ActorRefFrom,
  assertEvent,
  assign, createActor,
  createMachine,
  enqueueActions,
} from "xstate"
import { trackMachine } from './trackMachine'
import { useSelector } from "@xstate/react"


const INITIAL_NUMBER_OF_TRACKS = 4
const MAXIMUM_NUMBER_OF_TRACKS = 16


export const mixerMachine = createMachine(
  {
    id: 'mixer',
    context: ({ self, spawn }) => ({
      trackRefs: [...Array(INITIAL_NUMBER_OF_TRACKS)].map((_, index) =>
        spawn(trackMachine, {
          input: { id: `track${index}`, parent: self },
        }),
      ),
    }),
    initial: 'idle',
    states: {
      idle: {
        on: {
          ['mixer.addTrack']: {
            actions: ['addTrack'],
            guard: 'maximumTracksNotReached',
          },
          ['mixer.clearTracks']: {
            actions: ['clearTracks'],
          },
          ['mixer.deleteTrack']: {
            actions: ['deleteTrack'],
          },
        },
      },
    },
  },
  {
    actions: {
      addTrack: assign({
        trackRefs: ({ context, self, spawn }) =>
          context.trackRefs.concat(
            spawn(trackMachine, {
              input: {
                id: `track${Date.now()}`,
                parent: self,
              },
            }),
          ),
      }),
      clearTracks: enqueueActions(({ context, enqueue }) => {
        context.trackRefs.map((trackRef: any) => enqueue.stopChild(trackRef.id))
        enqueue.assign({
          trackRefs: [],
        })
      }),
      deleteTrack: enqueueActions(({ context, event, enqueue }) => {
        assertEvent(event, 'mixer.deleteTrack')
        enqueue.assign({
          trackRefs: context.trackRefs.filter(
            (trackRef: any) => trackRef.getSnapshot().context.id !== event.id,
          ),
        })
        enqueue.stopChild(event.id)
      }),
    },
    guards: {
      maximumTracksNotReached: ({ context }: any) =>
        context.trackRefs.length < MAXIMUM_NUMBER_OF_TRACKS,
    },
  },
)




export const useMixer = () => ({
  trackRefs: useSelector(mixerActor, (snapshot: any) => snapshot.context.trackRefs),
  trackCount: useSelector(
    mixerActor,
    (snapshot) => snapshot.context.trackRefs.length,
  ),
  send: mixerActor.send,
})


export const mixerActor = createActor(mixerMachine)

mixerActor.start()
mixerActor.subscribe((snapshot) => {
  console.log(snapshot.value)
})
