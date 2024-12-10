import { ActorRefFrom, createActor } from "xstate"
import { createContext } from "react"
import appRootMachine from "./appRootMachine.ts"

const appRootActor = createActor(appRootMachine, {
  systemId: "app-root-machine",
  inspect: (inpectionEvent) => {
    console.log(inpectionEvent)
  },
})
appRootActor.start()

export const AppMachineContext = createContext<ActorRefFrom<typeof appRootMachine> | undefined>(undefined)

export const AppMachineContextProvider = ({ children }: any) => {
  return <AppMachineContext.Provider value={appRootActor}>{children}</AppMachineContext.Provider>
}
