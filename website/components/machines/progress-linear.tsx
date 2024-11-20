import * as progress from "@ibrains-design/progress"
import { normalizeProps, useMachine } from "@ibrains-design/react"
import { useId } from "react"

export function ProgressLinear(props: any) {
  const [state, send] = useMachine(progress.machine({ id: useId() }), {
    context: props.controls,
  })

  const api = progress.connect(state, send, normalizeProps)

  return (
    <div>
      <div {...api.getRootProps()}>
        <div {...api.getLabelProps()}>Upload progress</div>
        <div {...api.getTrackProps()}>
          <div {...api.getRangeProps()} />
        </div>
        <div {...api.getValueTextProps()}>{api.valueAsString}</div>
      </div>

      <div>
        <button onClick={() => api.setValue((api.value ?? 0) - 20)}>
          Decrease
        </button>

        <button onClick={() => api.setValue((api.value ?? 0) + 20)}>
          Increase
        </button>

        <button onClick={() => api.setValue(null)}>Indeterminate</button>
      </div>
    </div>
  )
}
