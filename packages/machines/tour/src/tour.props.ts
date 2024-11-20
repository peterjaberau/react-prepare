import { createProps } from "@ibrains-design/types"
import { createSplitProps } from "@ibrains-design/utils"
import type { UserDefinedContext } from "./tour.types"

export const props = createProps<UserDefinedContext>()([
  "closeOnEscape",
  "closeOnInteractOutside",
  "dir",
  "getRootNode",
  "id",
  "ids",
  "keyboardNavigation",
  "onFocusOutside",
  "onInteractOutside",
  "onPointerDownOutside",
  "onStatusChange",
  "onStepChange",
  "preventInteraction",
  "spotlightOffset",
  "spotlightRadius",
  "stepId",
  "steps",
  "translations",
])

export const splitProps = createSplitProps<Partial<UserDefinedContext>>(props)
