import { createProps } from "@ibrains-design/types"
import { createSplitProps } from "@ibrains-design/utils"
import type { UserDefinedContext } from "./steps.types"

export const props = createProps<UserDefinedContext>()([
  "count",
  "dir",
  "getRootNode",
  "id",
  "ids",
  "linear",
  "onStepChange",
  "onStepComplete",
  "orientation",
  "step",
])

export const splitProps = createSplitProps<Partial<UserDefinedContext>>(props)
