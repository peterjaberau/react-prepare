import { createAnatomy } from "@ibrains-design/anatomy"

export const anatomy = createAnatomy("button").parts("root", "disabled", "block", "color", "size", "fallback")

export const parts = anatomy.build()
