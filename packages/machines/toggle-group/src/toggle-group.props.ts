import { createProps } from "@ibrains-design/types"
import { createSplitProps } from "@ibrains-design/utils"
import type { ItemProps, UserDefinedContext } from "./toggle-group.types"

export const props = createProps<UserDefinedContext>()([
  "dir",
  "disabled",
  "getRootNode",
  "id",
  "ids",
  "loopFocus",
  "multiple",
  "onValueChange",
  "orientation",
  "rovingFocus",
  "value",
])

export const splitProps = createSplitProps<Partial<UserDefinedContext>>(props)

export const itemProps = createProps<ItemProps>()(["value", "disabled"])

export const splitItemProps = createSplitProps<ItemProps>(itemProps)
