import * as pinInput from "@ibrains-design/pin-input"
import { normalizeProps, useMachine } from "@ibrains-design/react"
import { useId } from "react"

export function PinInput(props: any) {
  const [state, send] = useMachine(pinInput.machine({ id: useId() }), {
    context: props.controls,
  })

  const api = pinInput.connect(state, send, normalizeProps)

  return (
    <div>
      <div {...api.getRootProps()}>
        {[1, 2, 3].map((_, index) => (
          <input key={index} {...api.getInputProps({ index })} />
        ))}
      </div>
      <button onClick={api.clearValue}>Clear</button>
    </div>
  )
}
