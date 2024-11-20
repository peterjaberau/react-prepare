import * as numberInput from "@ibrains-design/number-input"
import { normalizeProps, useMachine } from "@ibrains-design/react"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { useId } from "react"

export function NumberInput(props: any) {
  const [state, send] = useMachine(
    numberInput.machine({ id: useId(), ...props.defaultContext }),
    {
      context: props.controls,
    },
  )

  const api = numberInput.connect(state, send, normalizeProps)

  return (
    <div {...api.getRootProps()}>
      <label {...api.getLabelProps()}>Enter number:</label>
      <div>
        <input {...api.getInputProps()} />
        <div>
          <button {...api.getIncrementTriggerProps()}>
            <BiChevronUp />
          </button>
          <button {...api.getDecrementTriggerProps()}>
            <BiChevronDown />
          </button>
        </div>
      </div>
    </div>
  )
}
