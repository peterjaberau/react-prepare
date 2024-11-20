import { normalizeProps, useMachine } from "@ibrains-design/react"
import * as timer from "@ibrains-design/timer"
import { useId } from "react"

export function TimerCountdown() {
  const [state, send] = useMachine(
    timer.machine({
      id: useId(),
      countdown: true,
      autoStart: true,
      startMs: timer.parse({ days: 2, seconds: 10 }),
    }),
  )

  const api = timer.connect(state, send, normalizeProps)

  return (
    <div {...api.getRootProps()}>
      <div {...api.getAreaProps()}>
        <div {...api.getItemProps({ type: "days" })}>
          {api.formattedTime.days}
        </div>
        <div {...api.getSeparatorProps()}>:</div>
        <div {...api.getItemProps({ type: "hours" })}>
          {api.formattedTime.hours}
        </div>
        <div {...api.getSeparatorProps()}>:</div>
        <div {...api.getItemProps({ type: "minutes" })}>
          {api.formattedTime.minutes}
        </div>
        <div {...api.getSeparatorProps()}>:</div>
        <div {...api.getItemProps({ type: "seconds" })}>
          {api.formattedTime.seconds}
        </div>
      </div>

      <div {...api.getControlProps()}>
        <button {...api.getActionTriggerProps({ action: "pause" })}>
          Pause
        </button>
        <button {...api.getActionTriggerProps({ action: "resume" })}>
          Resume
        </button>
      </div>
    </div>
  )
}
