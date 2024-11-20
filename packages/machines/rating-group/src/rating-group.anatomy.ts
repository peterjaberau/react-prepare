import { createAnatomy } from "@ibrains-design/anatomy"

export const anatomy = createAnatomy("rating-group").parts("root", "label", "item", "control")
export const parts = anatomy.build()
