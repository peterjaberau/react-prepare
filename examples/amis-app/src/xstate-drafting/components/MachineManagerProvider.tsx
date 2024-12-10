import { createContext, useEffect, useState } from 'react'

// import { engineCommandManager } from 'lib/singletons'
import { CommandsContext } from './commandBar/CommandBarProvider'
import { components } from '@/xstate-drafting/lib/machine-api'
import { reportRejection } from '@/xstate-drafting/utils/trap'
import { toSync } from '@/xstate-drafting/utils/misc.ts'

export interface MachineManager {
  machines: any[]
  machineApiIp: string | null
  currentMachine: any | null
  noMachinesReason: () => string | undefined
  setCurrentMachine: (
    m: any | null
  ) => void
}

export const MachineManagerContext = createContext<MachineManager>({
  machines: [],
  machineApiIp: null,
  currentMachine: null,
  setCurrentMachine: (
    _: any | null
  ) => {},
  noMachinesReason: () => undefined,
})

export const MachineManagerProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [machines, setMachines] = useState<any>([])
  const [machineApiIp, setMachineApiIp] = useState<string | null>(null)
  const [currentMachine, setCurrentMachine] = useState<
    any | null
  >(null)

  const commandBarActor = CommandsContext.useActorRef()

  // Get the reason message for why there are no machines.
  const noMachinesReason = (): string | undefined => {
    if (machines.length > 0) {
      return undefined
    }

    if (machineApiIp === null) {
      return 'Machine API server was not discovered'
    }

    return 'Machine API server was discovered, but no machines are available'
  }


  // Update engineCommandManager's copy of this data.
  useEffect(() => {
    const machineManagerNext = {
      machines,
      machineApiIp,
      currentMachine,
      noMachinesReason,
      setCurrentMachine,
    }


    commandBarActor.send({
      type: 'Set machine manager',
      data: machineManagerNext,
    })
  }, [machines, machineApiIp, currentMachine])

  return (
    <MachineManagerContext.Provider
      value={{
        machines,
        machineApiIp,
        currentMachine,
        setCurrentMachine,
        noMachinesReason,
      }}
    >
      {' '}
      {children}{' '}
    </MachineManagerContext.Provider>
  )
}
