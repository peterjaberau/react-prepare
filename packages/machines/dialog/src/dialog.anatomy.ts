import { createAnatomy } from "@ibrains-design/anatomy"

export const anatomy = createAnatomy("dialog").parts(
  "trigger",
  "backdrop",
  "positioner",
  "content",
  "title",
  "description",
  "closeTrigger",
)

export const parts = anatomy.build()
