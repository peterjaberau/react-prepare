import { createAnatomy } from "@ibrains-design/anatomy"

export const anatomy = createAnatomy("switch").parts("root", "label", "control", "thumb")
export const parts = anatomy.build()
