import { createProps } from "@ibrains-design/types"
import { createSplitProps } from "@ibrains-design/utils"
import type { UserDefinedContext } from "./time-picker.types"

export const props = createProps<UserDefinedContext>()([
  "dir",
  "disabled",
  "disableLayer",
  "getRootNode",
  "id",
  "ids",
  "locale",
  "max",
  "min",
  "name",
  "onFocusChange",
  "onOpenChange",
  "onValueChange",
  "open.controlled",
  "open",
  "placeholder",
  "positioning",
  "readOnly",
  "steps",
  "value",
  "allowSeconds",
])

export const splitProps = createSplitProps<Partial<UserDefinedContext>>(props)
