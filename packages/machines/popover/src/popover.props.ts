import { createProps } from "@ibrains-design/types"
import { createSplitProps } from "@ibrains-design/utils"
import type { UserDefinedContext } from "./popover.types"

export const props = createProps<UserDefinedContext>()([
  "autoFocus",
  "closeOnEscape",
  "closeOnInteractOutside",
  "dir",
  "getRootNode",
  "id",
  "ids",
  "initialFocusEl",
  "modal",
  "onEscapeKeyDown",
  "onFocusOutside",
  "onInteractOutside",
  "onOpenChange",
  "onPointerDownOutside",
  "open.controlled",
  "open",
  "persistentElements",
  "portalled",
  "positioning",
])

export const splitProps = createSplitProps<Partial<UserDefinedContext>>(props)
