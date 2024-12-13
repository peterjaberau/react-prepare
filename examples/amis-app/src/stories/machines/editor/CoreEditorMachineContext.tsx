import { coreEditorMachine  } from "./coreEditorMachine.ts"
import { createActorContext } from "@xstate/react"


export const CoreEditorMachineContext = createActorContext(coreEditorMachine, {
  inspect: (inpectionEvent) => {
    console.log(inpectionEvent)
  },
})

export const CoreEditorMachineProvider = ({ children }: any) => {
  return <CoreEditorMachineContext.Provider>{children}</CoreEditorMachineContext.Provider>
}
