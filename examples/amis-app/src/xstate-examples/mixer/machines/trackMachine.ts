import {
  type ActorRef,
  type Snapshot,
  assertEvent,
  assign,
  createMachine, createEmptyActor, type ActorRefFrom,
} from "xstate"
import { useSelector } from "@xstate/react"
import { mixerActor } from "./mixerMachine.ts"

const INITIAL_TRACK_VOLUME = 20

export const trackMachine = createMachine(
  {
    id: 'track',
    context: ({ input }: any) => ({
      id: input.id,
      muted: false,
      parent: input.parent,
      volume: INITIAL_TRACK_VOLUME,
    }),
    initial: 'idle',
    states: {
      idle: {
        on: {
          'track.deleteTrack': {
            actions: ['deleteTrack'],
          },
          'track.setVolume': {
            actions: ['setVolume'],
          },
          'track.toggleMuted': {
            actions: ['toggleMuted'],
          },
        },
      },
    },
  },
  {
    actions: {
      deleteTrack: ({ context }: any) =>
        context.parent.send({ type: 'mixer.deleteTrack', id: context.id }),
      setVolume: assign(({ event }) => {
        assertEvent(event, 'track.setVolume')
        return {
          volume: event.volume,
        }
      }),
      toggleMuted: assign(({ context }: any) => ({
        muted: !context.muted,
      })),
    },
  },
)





export const useTrack = (trackRef: string) => {
  const trackActor = useSelector(mixerActor, (snapshot: any) =>
    snapshot.context.trackRefs.find((ref: any) => ref.id === trackRef),
  )
  const emptyActor = createEmptyActor() as ActorRefFrom<typeof trackMachine>

  // Although the spawned machines will always be available when we use this logic, React doesn't know it so we provide fallbacks for everything we make available
  return {
    muted: trackActor
      ? useSelector(trackActor, (snapshot: any) => snapshot.context.muted)
      : true,
    send: trackActor ? trackActor.send : emptyActor.send,
    volume: trackActor
      ? useSelector(trackActor, (snapshot: any) => snapshot.context.volume)
      : 0,
  }
}
