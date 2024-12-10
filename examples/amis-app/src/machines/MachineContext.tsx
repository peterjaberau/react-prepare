import { ActorRefFrom, createActor } from "xstate"
import { createContext } from "react"
import root from "./myRootMachine.ts"

const rootActor = createActor(root, {
  systemId: "root",
  inspect: (inpectionEvent) => {
    console.log(inpectionEvent)
  },
})
rootActor.start()

export const MachineContext = createContext<ActorRefFrom<typeof root> | undefined>(undefined)

export const MachineContextProvider = ({ children }: any) => {
  return <MachineContext.Provider value={rootActor}>{children}</MachineContext.Provider>
}
