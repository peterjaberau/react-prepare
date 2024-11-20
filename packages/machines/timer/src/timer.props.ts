import { createProps } from "@ibrains-design/types"
import { createSplitProps } from "@ibrains-design/utils"
import type { UserDefinedContext } from "./timer.types"

export const props = createProps<UserDefinedContext>()([
  "autoStart",
  "countdown",
  "getRootNode",
  "id",
  "ids",
  "interval",
  "onComplete",
  "onTick",
  "startMs",
  "targetMs",
])

export const splitProps = createSplitProps<Partial<UserDefinedContext>>(props)
