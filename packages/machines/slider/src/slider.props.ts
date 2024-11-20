import { createProps } from "@ibrains-design/types"
import { createSplitProps } from "@ibrains-design/utils"
import type { ThumbProps, UserDefinedContext } from "./slider.types"

export const props = createProps<UserDefinedContext>()([
  "aria-label",
  "aria-labelledby",
  "dir",
  "disabled",
  "form",
  "getAriaValueText",
  "getRootNode",
  "id",
  "ids",
  "invalid",
  "max",
  "min",
  "minStepsBetweenThumbs",
  "name",
  "onFocusChange",
  "onValueChange",
  "onValueChangeEnd",
  "orientation",
  "origin",
  "readOnly",
  "step",
  "thumbAlignment",
  "thumbAlignment",
  "thumbSize",
  "value",
])

export const splitProps = createSplitProps<Partial<UserDefinedContext>>(props)

export const thumbProps = createProps<ThumbProps>()(["index", "name"])
export const splitThumbProps = createSplitProps<ThumbProps>(thumbProps)
