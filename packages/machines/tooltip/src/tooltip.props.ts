import { createProps } from "@ibrains-design/types"
import { createSplitProps } from "@ibrains-design/utils"
import type { UserDefinedContext } from "./tooltip.types"

export const props = createProps<UserDefinedContext>()([
  "aria-label",
  "closeDelay",
  "closeOnEscape",
  "closeOnPointerDown",
  "closeOnScroll",
  "closeOnClick",
  "dir",
  "disabled",
  "getRootNode",
  "id",
  "ids",
  "interactive",
  "onOpenChange",
  "open.controlled",
  "open",
  "openDelay",
  "positioning",
])

export const splitProps = createSplitProps<Partial<UserDefinedContext>>(props)
