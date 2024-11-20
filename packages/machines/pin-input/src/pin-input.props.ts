import { createProps } from "@ibrains-design/types"
import { createSplitProps } from "@ibrains-design/utils"
import type { UserDefinedContext } from "./pin-input.types"

export const props = createProps<UserDefinedContext>()([
  "autoFocus",
  "blurOnComplete",
  "dir",
  "disabled",
  "form",
  "getRootNode",
  "id",
  "ids",
  "invalid",
  "mask",
  "name",
  "onValueChange",
  "onValueComplete",
  "onValueInvalid",
  "otp",
  "readOnly",
  "pattern",
  "placeholder",
  "required",
  "selectOnFocus",
  "translations",
  "type",
  "value",
])

export const splitProps = createSplitProps<Partial<UserDefinedContext>>(props)
