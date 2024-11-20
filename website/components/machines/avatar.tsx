import * as avatar from "@ibrains-design/avatar"
import { normalizeProps, useMachine } from "@ibrains-design/react"
import { useId } from "react"

export function Avatar(props: { controls: { src: string; name: string } }) {
  const { src, name } = props.controls

  const [state, send] = useMachine(avatar.machine({ id: useId() }))
  const api = avatar.connect(state, send, normalizeProps)

  const initial = name
    .split(" ")
    .map((s) => s[0])
    .join("")

  return (
    <>
      <main className="avatar">
        <div {...api.getRootProps()}>
          <div {...api.getFallbackProps()}>
            <div>{initial}</div>
          </div>
          <img
            alt={name}
            referrerPolicy="no-referrer"
            src={src}
            {...api.getImageProps()}
          />
        </div>
      </main>
    </>
  )
}
