import { useContext } from "react"
import { MachineContext } from "./MachineContext.tsx"
import { useSelector } from "@xstate/react"

export const useRootMachine: any = () => {
  return useContext(MachineContext)
}

export const useChildMachine = (childId: any) => {
  const rootMachine = useRootMachine()
  return useSelector(rootMachine, (state: any) => state.children[childId])
}

export const useRootMachineState = (selector: any) => {
  const rootMachine = useRootMachine()
  return useSelector(rootMachine, selector)
}

export const useChildMachineState = (childId: any, selector: any) => {
  const machine = useChildMachine(childId)
  return useSelector(machine, selector)
}
