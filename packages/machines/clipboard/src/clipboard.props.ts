import { createProps } from "@ibrains-design/types"
import type { IndicatorProps, UserDefinedContext } from "./clipboard.types"
import { createSplitProps } from "@ibrains-design/utils"

export const props = createProps<UserDefinedContext>()([
  "getRootNode",
  "id",
  "ids",
  "value",
  "timeout",
  "onStatusChange",
])
export const contextProps = createSplitProps<UserDefinedContext>(props)

export const indicatorProps = createProps<IndicatorProps>()(["copied"])
export const splitIndicatorProps = createSplitProps<IndicatorProps>(indicatorProps)
