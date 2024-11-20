import { createProps } from "@ibrains-design/types"
import { createSplitProps } from "@ibrains-design/utils"
import type { ContentProps, TriggerProps, UserDefinedContext } from "./tabs.types"

export const props = createProps<UserDefinedContext>()([
  "activationMode",
  "composite",
  "dir",
  "getRootNode",
  "id",
  "ids",
  "loopFocus",
  "onFocusChange",
  "onValueChange",
  "orientation",
  "translations",
  "deselectable",
  "value",
])

export const splitProps = createSplitProps<Partial<UserDefinedContext>>(props)

export const triggerProps = createProps<TriggerProps>()(["disabled", "value"])
export const splitTriggerProps = createSplitProps<TriggerProps>(triggerProps)

export const contentProps = createProps<ContentProps>()(["value"])
export const splitContentProps = createSplitProps<ContentProps>(contentProps)
