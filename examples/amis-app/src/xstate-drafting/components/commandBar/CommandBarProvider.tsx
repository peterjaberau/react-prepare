import { useEffect } from "react"
import { createActorContext } from "@xstate/react"
import { commandBarMachine } from "@/xstate-drafting/machines/commandBarMachine.ts"
// import { editorManager } from 'lib/singletons'

export const CommandsContext = createActorContext(
  commandBarMachine.provide({
    guards: {
      "Command has no arguments": ({ context }: any) => {
        return !context.selectedCommand?.args || Object.keys(context.selectedCommand?.args).length === 0
      },
      "All arguments are skippable": ({ context }: any) => {
        return Object.values(context.selectedCommand!.args!).every((argConfig: any) => argConfig.skip)
      },
    },
  }),
)

export const CommandBarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CommandsContext.Provider>
      {children}
      {/*<CommandBarProviderInner>{children}</CommandBarProviderInner>*/}
    </CommandsContext.Provider>
  )
}
// function CommandBarProviderInner({ children }: { children: React.ReactNode }) {
//   const commandBarActor = CommandsContext.useActorRef()
//
//   useEffect(() => {
//     editorManager.setCommandBarSend(commandBarActor.send)
//   })
//
//   return children
// }
