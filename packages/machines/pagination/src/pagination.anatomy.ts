import { createAnatomy } from "@ibrains-design/anatomy"

export const anatomy = createAnatomy("pagination").parts("root", "item", "ellipsis", "prevTrigger", "nextTrigger")

export const parts = anatomy.build()
