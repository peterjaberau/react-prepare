import { createProps } from "@ibrains-design/types"
import { createSplitProps } from "@ibrains-design/utils"
import type { UserDefinedContext } from "./signature-pad.types"

export const props = createProps<UserDefinedContext>()([
  "dir",
  "disabled",
  "drawing",
  "getRootNode",
  "id",
  "ids",
  "name",
  "onDraw",
  "onDrawEnd",
  "readOnly",
  "required",
  "translations",
])

export const splitProps = createSplitProps<Partial<UserDefinedContext>>(props)
