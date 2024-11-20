import { createAnatomy } from "@ibrains-design/anatomy"

export const anatomy = createAnatomy("slider").parts(
  "root",
  "label",
  "thumb",
  "valueText",
  "track",
  "range",
  "control",
  "markerGroup",
  "marker",
  "draggingIndicator",
)

export const parts = anatomy.build()