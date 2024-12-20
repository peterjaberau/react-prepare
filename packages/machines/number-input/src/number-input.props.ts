import { createProps } from "@ibrains-design/types"
import { createSplitProps } from "@ibrains-design/utils"
import type { UserDefinedContext } from "./number-input.types"

export const props = createProps<UserDefinedContext>()([
  "allowMouseWheel",
  "allowOverflow",
  "clampValueOnBlur",
  "dir",
  "disabled",
  "focusInputOnChange",
  "form",
  "formatOptions",
  "getRootNode",
  "id",
  "ids",
  "inputMode",
  "invalid",
  "locale",
  "max",
  "min",
  "name",
  "onFocusChange",
  "onValueChange",
  "onValueInvalid",
  "pattern",
  "required",
  "readOnly",
  "spinOnPress",
  "step",
  "translations",
  "value",
])
export const splitProps = createSplitProps<Partial<UserDefinedContext>>(props)
