import { createAnatomy } from "@ibrains-design/anatomy"

export const anatomy = createAnatomy("carousel").parts(
  "root",
  "viewport",
  "itemGroup",
  "item",
  "nextTrigger",
  "prevTrigger",
  "indicatorGroup",
  "indicator",
)

export const parts = anatomy.build()
