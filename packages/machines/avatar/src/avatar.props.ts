import { createProps } from "@ibrains-design/types"
import { createSplitProps } from "@ibrains-design/utils"
import type { UserDefinedContext } from "./avatar.types"

export const props = createProps<UserDefinedContext>()(["dir", "id", "ids", "onStatusChange", "getRootNode"])
export const splitProps = createSplitProps<Partial<UserDefinedContext>>(props)
