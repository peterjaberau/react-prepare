import { amisMachine  } from "./amisMachine.ts"
import { createActorContext } from "@xstate/react"


export const AmisMachineContext = createActorContext(amisMachine, {
  // inspect: (inpectionEvent) => {
  //   console.log(inpectionEvent)
  // },
})

export const AmisMachineProvider = ({ children }: any) => {
  return <AmisMachineContext.Provider>{children}</AmisMachineContext.Provider>
}
