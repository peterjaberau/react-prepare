import { useEffect } from 'react'
import { AnyStateMachine, Actor, StateFrom } from 'xstate'
import { createMachineCommand } from '../lib/createMachineCommand'
import { useCommandsContext } from './useCommandsContext'
import { getActorNextEvents } from '../utils/misc.ts'

export default function useStateMachineCommands({
  machineId,
  state,
  send,
  actor,
  commandBarConfig,
  allCommandsRequireNetwork = false,
  onCancel,
}: any) {
  const { commandBarSend } = useCommandsContext()

}
