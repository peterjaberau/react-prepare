import { createActorContext } from "@xstate/react"
import { commandBarMachine } from "./commandBarMachine.ts"

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
    </CommandsContext.Provider>
  )
}
