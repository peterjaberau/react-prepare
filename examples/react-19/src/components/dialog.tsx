import * as dialog from "@ibrains-design/dialog"
import { useMachine, normalizeProps, Portal } from "@ibrains-design/react"
import { useId } from "react"

interface Props extends Omit<dialog.Context, "open.controlled" | "id"> {
  defaultOpen?: boolean
}

export function Dialog(props: Props) {
  const { open, defaultOpen, ...context } = props

  const [state, send] = useMachine(
    dialog.machine({
      id: useId(),
      open: open ?? defaultOpen,
    }),
    {
      context: {
        ...context,
        "open.controlled": open !== undefined,
        open,
      },
    },
  )

  const api = dialog.connect(state, send, normalizeProps)

  return (
    <>
      <button {...api.getTriggerProps()}>Open Dialog</button>
      {api.open && (
        <Portal>
          <div {...api.getBackdropProps()} />
          <div {...api.getPositionerProps()}>
            <div {...api.getContentProps()}>
              <h2 {...api.getTitleProps()}>Edit profile</h2>
              <p {...api.getDescriptionProps()}>Make changes to your profile here. Click save when you are done.</p>
              <div>
                <input placeholder="Enter name..." />
                <button>Save</button>
              </div>
              <button {...api.getCloseTriggerProps()}>Close</button>
            </div>
          </div>
        </Portal>
      )}
    </>
  )
}
