import { createProps } from "@ibrains-design/types"
import { createSplitProps } from "@ibrains-design/utils"
import type { UserDefinedContext } from "./qr-code.types"

export const props = createProps<UserDefinedContext>()(["ids", "value", "id", "encoding", "dir", "getRootNode"])

export const splitProps = createSplitProps<Partial<UserDefinedContext>>(props)
