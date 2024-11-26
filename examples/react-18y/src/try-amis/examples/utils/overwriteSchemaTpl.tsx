import { remarkTpl } from "amis-editor"
import { getSchemaTpl, setSchemaTpl } from "amis-editor-core"

/** International component types */
enum I18nComptType {
  InputText = "input-text",
  Textarea = "textarea",
  TextareaFormula = "textarea-formula",
  RichText = "rich-text",
  ButtonLabel = "button-label",
}
/** Cache the rewritten tpl name */
const overwriteNames: { [propName: string]: boolean } = {}

/** Rewrite schema tpl */
const overwriteSchemaTpl = (name: string, i18nType = I18nComptType.InputText, options?: { [key: string]: any }) => {
  if (overwriteNames[name]) {
    throw new Error(name + "has been rewritten")
  }
  overwriteNames[name] = true

  const getType = () => {
    if (i18nType === I18nComptType.InputText) {
      return "input-text-i18n"
    }
    if (i18nType === I18nComptType.Textarea) {
      return "textarea-i18n"
    }
    return "input-text-i18n"
  }

  setSchemaTpl(
    name,
    getSchemaTpl(
      name,
      options
        ? options
        : {
            type: getType(),
          },
    ),
  )
}

overwriteSchemaTpl("label")
overwriteSchemaTpl("btnLabel")
overwriteSchemaTpl("placeholder")
overwriteSchemaTpl("startPlaceholder")
overwriteSchemaTpl("endPlaceholder")
overwriteSchemaTpl("option")
overwriteSchemaTpl("description", I18nComptType.Textarea)
overwriteSchemaTpl("pageTitle")
overwriteSchemaTpl("pageSubTitle", I18nComptType.Textarea)
overwriteSchemaTpl("tpl:rich-text", I18nComptType.RichText)
overwriteSchemaTpl("prefix")
overwriteSchemaTpl("suffix")
overwriteSchemaTpl("unit")
overwriteSchemaTpl("optionsTip")
overwriteSchemaTpl("tableCellRemark")
overwriteSchemaTpl("title")
overwriteSchemaTpl("caption")
overwriteSchemaTpl("imageCaption")
overwriteSchemaTpl("inputBody")
overwriteSchemaTpl("stepSubTitle")
overwriteSchemaTpl("stepDescription")
overwriteSchemaTpl("taskNameLabel")
overwriteSchemaTpl("operationLabel")
overwriteSchemaTpl("statusLabel")
overwriteSchemaTpl("remarkLabel")
overwriteSchemaTpl("inputArrayItem")
overwriteSchemaTpl("actionPrevLabel")
overwriteSchemaTpl("actionNextLabel")
overwriteSchemaTpl("actionNextSaveLabel")
overwriteSchemaTpl("actionFinishLabel")
overwriteSchemaTpl("imgCaption", I18nComptType.Textarea)
overwriteSchemaTpl("taskRemark", I18nComptType.Textarea)
overwriteSchemaTpl("tooltip", I18nComptType.Textarea)
overwriteSchemaTpl("anchorTitle")
overwriteSchemaTpl("avatarText")
overwriteSchemaTpl("cardTitle")
overwriteSchemaTpl("cardSubTitle")
overwriteSchemaTpl("cardsPlaceholder")
overwriteSchemaTpl("cardDesc", I18nComptType.Textarea)
overwriteSchemaTpl("imageTitle")
overwriteSchemaTpl("imageDesc", I18nComptType.Textarea)
overwriteSchemaTpl("fetchSuccess")
overwriteSchemaTpl("fetchFailed")
overwriteSchemaTpl("saveOrderSuccess")
overwriteSchemaTpl("saveOrderFailed")
overwriteSchemaTpl("quickSaveSuccess")
overwriteSchemaTpl("quickSaveFailed")
overwriteSchemaTpl("saveSuccess")
overwriteSchemaTpl("saveFailed")
overwriteSchemaTpl("validateFailed")
overwriteSchemaTpl("tablePlaceholder")
overwriteSchemaTpl("collapseOpenHeader")
overwriteSchemaTpl("matrixColumnLabel")
overwriteSchemaTpl("matrixRowLabel")
overwriteSchemaTpl("matrixRowTitle")
overwriteSchemaTpl("submitText")
overwriteSchemaTpl("tpl:btnLabel", I18nComptType.ButtonLabel)
overwriteSchemaTpl("switchOption")
overwriteSchemaTpl("createBtnLabel")
overwriteSchemaTpl("tableCellPlaceholder")
overwriteSchemaTpl("addOnLabel")
overwriteSchemaTpl("onText")
overwriteSchemaTpl("offText")
overwriteSchemaTpl("propertyTitle")
overwriteSchemaTpl("propertyLabel")
overwriteSchemaTpl("propertyContent")
overwriteSchemaTpl("draggableTip")
overwriteSchemaTpl("deleteConfirmText")
overwriteSchemaTpl("optionsLabel")
overwriteSchemaTpl("checkAllLabel")
overwriteSchemaTpl("name")
overwriteSchemaTpl("anchorNavTitle")

setSchemaTpl(
  "remark",
  remarkTpl({
    name: "remark",
    label: "Control prompt",
    labelRemark:
      "Display a prompt next to the input control. Note that the width of the control needs to be set, otherwise the prompt trigger icon will automatically wrap",
    i18nEnabled: true,
  }),
)

setSchemaTpl(
  "labelRemark",
  remarkTpl({
    name: "labelRemark",
    label: "Title prompt",
    labelRemark: "Show hint next to title",
    i18nEnabled: true,
  }),
)
