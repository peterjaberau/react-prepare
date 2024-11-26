import { createProps } from "@ibrains-design/types"
import { createSplitProps } from "@ibrains-design/utils"
import type { UserDefinedContext } from "./button.types"

export const props = createProps<UserDefinedContext>()(["id", "dir", "getRootNode", "disabled", "text"])
export const splitProps = createSplitProps<Partial<UserDefinedContext>>(props)
