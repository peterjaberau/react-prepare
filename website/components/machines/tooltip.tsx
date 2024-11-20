import { normalizeProps, useMachine, Portal } from "@ibrains-design/react"
import * as tooltip from "@ibrains-design/tooltip"
import { useId } from "react"

type TooltipProps = {
  controls: {}
}
export function Tooltip(props: TooltipProps) {
  const [state, send] = useMachine(tooltip.machine({ id: useId() }), {
    context: props.controls,
  })

  const api = tooltip.connect(state, send, normalizeProps)

  return (
    <>
      <button {...api.getTriggerProps()}>Hover me</button>
      <Portal>
        {api.open && (
          <div {...api.getPositionerProps()}>
            <div {...api.getContentProps()}>
              <div {...api.getArrowProps()}>
                <div {...api.getArrowTipProps()} />
              </div>
              Tooltip
            </div>
          </div>
        )}
      </Portal>
    </>
  )
}
