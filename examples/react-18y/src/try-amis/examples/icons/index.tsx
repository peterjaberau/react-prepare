/**
 * @file Built-in svg icons
 */

import { Icon, registerIcon } from "amis"

// @ts-ignore
import PCPreview from "./pc-preview.svg"
// @ts-ignore
import H5Preview from "./h5-preview.svg"
// @ts-ignore
registerIcon("pc-preview", PCPreview)
// @ts-ignore
registerIcon("h5-preview", H5Preview)

// @ts-ignore
import CorpusI18n from "./corpus-i18n.svg"
// @ts-ignore
registerIcon("corpus-i18n", CorpusI18n)

export { Icon }
