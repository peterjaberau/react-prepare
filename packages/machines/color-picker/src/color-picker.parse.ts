import { parseColor, type Color } from "@ibrains-design/color-utils"

export const parse = (colorString: string): Color => {
  return parseColor(colorString)
}
