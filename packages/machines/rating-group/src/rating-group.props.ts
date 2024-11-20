import { createProps } from "@ibrains-design/types"
import { createSplitProps } from "@ibrains-design/utils"
import type { ItemProps, UserDefinedContext } from "./rating-group.types"

export const props = createProps<UserDefinedContext>()([
  "allowHalf",
  "autoFocus",
  "count",
  "dir",
  "disabled",
  "form",
  "getRootNode",
  "id",
  "ids",
  "name",
  "onHoverChange",
  "onValueChange",
  "required",
  "readOnly",
  "translations",
  "value",
])
export const splitProps = createSplitProps<Partial<UserDefinedContext>>(props)

export const itemProps = createProps<ItemProps>()(["index"])
export const splitItemProps = createSplitProps<ItemProps>(itemProps)
