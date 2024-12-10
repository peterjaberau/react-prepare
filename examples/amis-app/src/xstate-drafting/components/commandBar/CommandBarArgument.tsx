import CommandArgOptionInput from './CommandArgOptionInput'
import CommandBarBasicInput from './CommandBarBasicInput'
import CommandBarSelectionInput from './CommandBarSelectionInput'
import { useCommandsContext } from '@/xstate-drafting/hooks/useCommandsContext'
import CommandBarHeader from './CommandBarHeader'
import CommandBarTextareaInput from './CommandBarTextareaInput'

function CommandBarArgument({ stepBack }: { stepBack: () => void }) {
  const { commandBarState, commandBarSend } = useCommandsContext()
  const {
    context: { currentArgument },
  }: any = commandBarState

  function onSubmit(data: unknown) {
    if (!currentArgument) return

    commandBarSend({
      type: 'Submit argument',
      data: {
        [currentArgument.name]: data,
      },
    } as any)
  }

  return (
    currentArgument && (
      <CommandBarHeader>
        <ArgumentInput
          arg={currentArgument}
          stepBack={stepBack}
          onSubmit={onSubmit}
        />
      </CommandBarHeader>
    )
  )
}

export default CommandBarArgument

function ArgumentInput({
  arg,
  stepBack,
  onSubmit,
}: {
  arg: any & { name: string }
  stepBack: () => void
  onSubmit: (event: any) => void
}) {
  switch (arg.inputType) {
    case 'options':
      return (
        <CommandArgOptionInput
          arg={arg}
          argName={arg.name}
          stepBack={stepBack}
          onSubmit={onSubmit}
          placeholder="Select an option"
        />
      )
    case 'boolean':
      return (
        <CommandArgOptionInput
          arg={{
            ...arg,
            inputType: 'options',
            options: [
              { name: 'On', value: true },
              { name: 'Off', value: false },
            ],
          }}
          argName={arg.name}
          stepBack={stepBack}
          onSubmit={onSubmit}
          placeholder="Select an option"
        />
      )
    case 'selection':
      return (
        <CommandBarSelectionInput
          arg={arg}
          stepBack={stepBack}
          onSubmit={onSubmit}
        />
      )
    case 'text':
      return (
        <CommandBarTextareaInput
          arg={arg}
          stepBack={stepBack}
          onSubmit={onSubmit}
        />
      )
    default:
      return (
        <CommandBarBasicInput
          arg={arg}
          stepBack={stepBack}
          onSubmit={onSubmit}
        />
      )
  }
}
