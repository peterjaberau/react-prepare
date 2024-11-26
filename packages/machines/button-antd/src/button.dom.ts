import { createScope } from "@ibrains-design/dom-query"
import type { MachineContext as Ctx } from "./button.types"

export const dom = createScope({
  getRootId: (ctx: Ctx) => ctx.ids?.root ?? `button:${ctx.id}`,
  getFallbackId: (ctx: Ctx) => ctx.ids?.fallback ?? `button:${ctx.id}:fallback`,

  getRootEl: (ctx: Ctx) => dom.getById(ctx, dom.getRootId(ctx)),
})
