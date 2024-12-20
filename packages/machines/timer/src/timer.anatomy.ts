import { createAnatomy } from "@ibrains-design/anatomy"

export const anatomy = createAnatomy("timer").parts(
  "root",
  "area",
  "control",
  "item",
  "itemValue",
  "itemLabel",
  "actionTrigger",
  "separator",
)

export const parts = anatomy.build()
