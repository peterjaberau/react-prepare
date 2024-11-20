import { createProps } from "@ibrains-design/types"
import { createSplitProps } from "@ibrains-design/utils"
import type { UserDefinedContext } from "./editable.types"

export const props = createProps<UserDefinedContext>()([
  "activationMode",
  "autoResize",
  "dir",
  "disabled",
  "finalFocusEl",
  "form",
  "getRootNode",
  "id",
  "ids",
  "invalid",
  "maxLength",
  "name",
  "onEditChange",
  "onFocusOutside",
  "onInteractOutside",
  "onPointerDownOutside",
  "onValueChange",
  "onValueCommit",
  "onValueRevert",
  "placeholder",
  "readOnly",
  "required",
  "selectOnFocus",
  "edit",
  "edit.controlled",
  "submitMode",
  "translations",
  "value",
])

export const splitProps = createSplitProps<Partial<UserDefinedContext>>(props)
