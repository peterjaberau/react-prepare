/* eslint-disable jsx-a11y/alt-text */
import * as qrCode from "@ibrains-design/qr-code"
import { normalizeProps, useMachine } from "@ibrains-design/react"
import { useId } from "react"

export function QrCode(props: any) {
  const [state, send] = useMachine(
    qrCode.machine({
      id: useId(),
      encoding: { ecc: "H" },
    }),
    {
      context: props.controls,
    },
  )

  const api = qrCode.connect(state, send, normalizeProps)

  return (
    <div {...api.getRootProps()}>
      <svg {...api.getFrameProps()}>
        <path {...api.getPatternProps()} />
      </svg>
      <div {...api.getOverlayProps()}>
        <img
          src="https://avatars.githubusercontent.com/u/54212428?s=88&v=4"
          alt=""
        />
      </div>
    </div>
  )
}
