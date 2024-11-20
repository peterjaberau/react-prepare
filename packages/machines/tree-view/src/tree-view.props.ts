import { createProps } from "@ibrains-design/types"
import { createSplitProps } from "@ibrains-design/utils"
import type { NodeProps, UserDefinedContext } from "./tree-view.types"

export const props = createProps<UserDefinedContext>()([
  "ids",
  "collection",
  "dir",
  "expandedValue",
  "expandOnClick",
  "focusedValue",
  "getRootNode",
  "id",
  "onExpandedChange",
  "onFocusChange",
  "onSelectionChange",
  "selectedValue",
  "selectionMode",
  "typeahead",
])

export const splitProps = createSplitProps<Partial<UserDefinedContext>>(props)

export const itemProps = createProps<NodeProps>()(["node", "indexPath"])

export const splitItemProps = createSplitProps<NodeProps>(itemProps)
