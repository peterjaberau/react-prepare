import { createProps } from "@ibrains-design/types"
import { createSplitProps } from "@ibrains-design/utils"
import type { ItemProps, UserDefinedContext } from "./radio-group.types"

export const props = createProps<UserDefinedContext>()([
  "dir",
  "disabled",
  "form",
  "getRootNode",
  "id",
  "ids",
  "name",
  "onValueChange",
  "orientation",
  "readOnly",
  "value",
])
export const splitProps = createSplitProps<Partial<UserDefinedContext>>(props)

export const itemProps = createProps<ItemProps>()(["value", "disabled", "invalid"])
export const splitItemProps = createSplitProps<ItemProps>(itemProps)
