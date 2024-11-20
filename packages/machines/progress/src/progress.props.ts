import { createProps } from "@ibrains-design/types"
import { createSplitProps } from "@ibrains-design/utils"
import type { UserDefinedContext } from "./progress.types"

export const props = createProps<UserDefinedContext>()([
  "dir",
  "getRootNode",
  "id",
  "ids",
  "max",
  "min",
  "orientation",
  "translations",
  "value",
])

export const splitProps = createSplitProps<Partial<UserDefinedContext>>(props)
