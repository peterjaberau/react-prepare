import { createProps } from "@ibrains-design/types"
import { createSplitProps } from "@ibrains-design/utils"
import type { UserDefinedContext } from "./floating-panel.types"

export const props = createProps<UserDefinedContext>()([
  "allowOverflow",
  "closeOnEscape",
  "dir",
  "disabled",
  "draggable",
  "getAnchorPosition",
  "getBoundaryEl",
  "getRootNode",
  "gridSize",
  "id",
  "ids",
  "lockAspectRatio",
  "maxSize",
  "minSize",
  "onOpenChange",
  "onPositionChange",
  "onPositionChangeEnd",
  "onSizeChange",
  "onSizeChangeEnd",
  "onStageChange",
  "open",
  "persistRect",
  "position",
  "resizable",
  "strategy",
  "size",
])

export const splitProps = createSplitProps<Partial<UserDefinedContext>>(props)
