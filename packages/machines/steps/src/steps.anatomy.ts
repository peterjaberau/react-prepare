import { createAnatomy } from "@ibrains-design/anatomy"

export const anatomy = createAnatomy("steps").parts(
  "root",
  "list",
  "item",
  "trigger",
  "indicator",
  "separator",
  "content",
  "nextTrigger",
  "prevTrigger",
  "progress",
)

export const parts = anatomy.build()
