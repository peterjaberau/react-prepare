import { createAnatomy } from "@ibrains-design/anatomy"

export const anatomy = createAnatomy("splitter").parts("root", "panel", "resizeTrigger")

export const parts = anatomy.build()
