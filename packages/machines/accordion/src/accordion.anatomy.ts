import { createAnatomy } from "@ibrains-design/anatomy"

export const anatomy = createAnatomy("accordion").parts("root", "item", "itemTrigger", "itemContent", "itemIndicator")
export const parts = anatomy.build()
