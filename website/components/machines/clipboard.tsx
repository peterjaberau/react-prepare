import * as clipboard from "@ibrains-design/clipboard"
import { normalizeProps, useMachine } from "@ibrains-design/react"
import { useId } from "react"
import { HiCheck, HiOutlineClipboard } from "react-icons/hi"

type Props = {
  controls: {
    value: string
    timeout: number
  }
}

export function Clipboard(props: Props) {
  const [state, send] = useMachine(clipboard.machine({ id: useId() }), {
    context: props.controls,
  })

  const api = clipboard.connect(state, send, normalizeProps)

  return (
    <div {...api.getRootProps()}>
      <label {...api.getLabelProps()}>Copy this link</label>
      <div {...api.getControlProps()}>
        <input {...api.getInputProps()} />
        <button {...api.getTriggerProps()}>
          {api.copied ? <HiCheck /> : <HiOutlineClipboard />}
        </button>
      </div>
    </div>
  )
}
