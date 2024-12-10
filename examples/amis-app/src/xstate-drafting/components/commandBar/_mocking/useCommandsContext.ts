import { CommandsContext } from "./CommandBarProvider.tsx"

export const useCommandsContext = () => {
  const commandBarActor = CommandsContext.useActorRef()
  const commandBarState = CommandsContext.useSelector((state) => state)
  return {
    commandBarSend: commandBarActor.send,
    commandBarState,
  }
}
