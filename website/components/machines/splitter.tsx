import { normalizeProps, useMachine } from "@ibrains-design/react"
import * as splitter from "@ibrains-design/splitter"
import { useId } from "react"

export function Splitter(props: any) {
  const context = props.controls
  const [state, send] = useMachine(
    splitter.machine({
      id: useId(),
      size: [
        { id: "a", size: 50 },
        { id: "b", size: 50 },
      ],
    }),
    { context },
  )

  const api = splitter.connect(state, send, normalizeProps)

  return (
    <div {...api.getRootProps()}>
      <div {...api.getPanelProps({ id: "a" })}>
        <p>A</p>
      </div>
      <div {...api.getResizeTriggerProps({ id: "a:b" })} />
      <div {...api.getPanelProps({ id: "b" })}>
        <p>B</p>
      </div>
    </div>
  )
}
