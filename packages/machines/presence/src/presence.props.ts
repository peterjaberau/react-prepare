import { createProps } from "@ibrains-design/types"
import type { UserDefinedContext } from "./presence.types"

export const props = createProps<UserDefinedContext>()(["onExitComplete", "present", "immediate"])
