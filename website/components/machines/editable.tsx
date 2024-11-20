import * as editable from "@ibrains-design/editable"
import { normalizeProps, useMachine } from "@ibrains-design/react"
import { useId } from "react"

export function Editable(props: any) {
  const [state, send] = useMachine(editable.machine({ id: useId() }), {
    context: props.controls,
  })

  const api = editable.connect(state, send, normalizeProps)

  return (
    <div {...api.getRootProps()}>
      <div {...api.getAreaProps()}>
        <input {...api.getInputProps()} />
        <span {...api.getPreviewProps()} />
      </div>

      <div>
        {!api.editing && <button {...api.getEditTriggerProps()}>Edit</button>}
        {api.editing && (
          <div>
            <button {...api.getSubmitTriggerProps()}>Save</button>
            <button {...api.getCancelTriggerProps()}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  )
}
