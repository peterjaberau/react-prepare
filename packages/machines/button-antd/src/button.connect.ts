import type { NormalizeProps, PropTypes } from "@ibrains-design/types"
import { dom } from "./button.dom"
import type { MachineApi, Send, State } from "./button.types"
import {parts} from "./button.anatomy";

export function connect<T extends PropTypes>(state: State, send: Send, normalize: NormalizeProps<T>): MachineApi<T> {
  const disabled = state.context.isDisabled
  return {

    disabled: disabled,

    getRootProps() {
      return normalize.element({
        ...parts.root.attrs,
        dir: state.context.dir,
        id: dom.getRootId(state.context),
      })
    },

    getFallbackProps() {
      return normalize.element({
        ...parts.fallback.attrs,
        dir: state.context.dir,
        id: dom.getFallbackId(state.context),
      })
    },
  }
}
