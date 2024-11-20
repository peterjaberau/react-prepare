import { createProps } from "@ibrains-design/types"
import { createSplitProps } from "@ibrains-design/utils"
import type { UserDefinedContext } from "./hover-card.types"

export const props = createProps<UserDefinedContext>()([
  "closeDelay",
  "dir",
  "getRootNode",
  "id",
  "ids",
  "onOpenChange",
  "open.controlled",
  "open",
  "openDelay",
  "positioning",
])

export const splitProps = createSplitProps<Partial<UserDefinedContext>>(props)
