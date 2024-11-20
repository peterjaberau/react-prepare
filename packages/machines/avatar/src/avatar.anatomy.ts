import { createAnatomy } from "@ibrains-design/anatomy"

export const anatomy = createAnatomy("avatar").parts("root", "image", "fallback")

export const parts = anatomy.build()
