import { createMachine } from "@ibrains-design/core"
import { compact } from "@ibrains-design/utils"
import type { MachineContext, MachineState, UserDefinedContext } from "./button.types"

export function machine(userContext: UserDefinedContext) {
  const ctx = compact(userContext)
  return createMachine<MachineContext, MachineState>(
      {
        id: "button",
        initial: "ready",

        context: {
          disabled: false,
          ...ctx,
          text: "button",
        },

        computed: {
          isDisabled: (ctx: any) => ctx.disabled || ctx.fieldsetDisabled,
        },

        watch: {
          disabled: "removeFocusIfNeeded",
        },


        states: {
          ready: {},
        },
      },
      {
        guards: {
        },
        actions: {

        }
      }
  )
}
