import { createProps } from "@ibrains-design/types"
import { createSplitProps } from "@ibrains-design/utils"
import type { UserDefinedContext } from "./collapsible.types"

export const props = createProps<UserDefinedContext>()([
  "dir",
  "disabled",
  "getRootNode",
  "id",
  "ids",
  "onExitComplete",
  "onOpenChange",
  "open.controlled",
  "open",
])
export const splitProps = createSplitProps<Partial<UserDefinedContext>>(props)
