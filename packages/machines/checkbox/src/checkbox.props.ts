import { createProps } from "@ibrains-design/types"
import { createSplitProps } from "@ibrains-design/utils"
import type { UserDefinedContext } from "./checkbox.types"

export const props = createProps<UserDefinedContext>()([
  "checked",
  "dir",
  "disabled",
  "form",
  "getRootNode",
  "id",
  "ids",
  "invalid",
  "name",
  "onCheckedChange",
  "readOnly",
  "required",
  "value",
])
export const splitProps = createSplitProps<Partial<UserDefinedContext>>(props)
