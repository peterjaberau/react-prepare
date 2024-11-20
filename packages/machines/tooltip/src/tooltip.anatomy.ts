import { createAnatomy } from "@ibrains-design/anatomy"

export const anatomy = createAnatomy("tooltip").parts("trigger", "arrow", "arrowTip", "positioner", "content")
export const parts = anatomy.build()
