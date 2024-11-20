import { createProps } from "@ibrains-design/types"
import type { ItemProps, UserDefinedContext } from "./accordion.types"
import { createSplitProps } from "@ibrains-design/utils"

export const props = createProps<UserDefinedContext>()([
  "collapsible",
  "dir",
  "disabled",
  "getRootNode",
  "id",
  "ids",
  "multiple",
  "onFocusChange",
  "onValueChange",
  "orientation",
  "value",
])
export const splitProps = createSplitProps<Partial<UserDefinedContext>>(props)

export const itemProps = createProps<ItemProps>()(["value", "disabled"])
export const splitItemProps = createSplitProps<ItemProps>(itemProps)
