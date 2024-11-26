import React from "react"
import { EditorManager } from "../manager"
import { EditorStoreType } from "../store/editor"
import { render, Modal, getTheme, Icon, Spinner, Button } from "amis"
import { observer } from "mobx-react"
import { autobind, isObject } from "../util"

export interface SubEditorProps {
  store: EditorStoreType
  manager: EditorManager
  theme?: string
}

@observer
export class ScaffoldModal extends React.Component<SubEditorProps> {
  constructor(props: SubEditorProps) {
    super(props)
    this.handleConfirm = this.handleConfirm.bind(this)
    this.scopeRef = this.scopeRef.bind(this)
    this.goToNextStep = this.goToNextStep.bind(this)
    this.goToPrevStep = this.goToPrevStep.bind(this)
    this.handleConfirmClick = this.handleConfirmClick.bind(this)
    this.handleCancelClick = this.handleCancelClick.bind(this)
  }

  async handleConfirm([values]: any) {
    const store = this.props.store
    const pipeOutFunc = store.scaffoldForm?.pipeOut

    values = {
      ...store.scaffoldForm?.value,
      ...values,
    }

    if (pipeOutFunc && typeof pipeOutFunc === "function") {
      const mapped = await pipeOutFunc(values)

      values = {
        ...mapped,
      }
    }

    store.scaffoldForm?.callback(values)
    store.closeScaffoldForm()
    store.scaffoldForm?.stepsBody && store.setScaffoldStep(0)
  }

  buildSchema() {
    const { store } = this.props
    const scaffoldFormContext = store.scaffoldForm!

    let body = scaffoldFormContext.controls ?? scaffoldFormContext.body
    if (scaffoldFormContext.stepsBody) {
      body = [
        {
          type: "steps",
          name: "__step",
          className: "ae-Steps",
          steps: body.map((step, index) => ({
            title: step.title,
            value: index,
            iconClassName: "ae-Steps-Icon",
          })),
        },
        ...body.map((step, index) => ({
          type: "container",
          visibleOn: `__step === ${index}`,
          body: step.body,
        })),
      ]
    }

    let layout: object
    if (isObject(scaffoldFormContext.mode)) {
      layout = scaffoldFormContext.mode as object
    } else {
      layout = {
        mode: scaffoldFormContext.mode || "normal",
      }
    }

    return {
      type: "form",
      wrapWithPanel: false,
      initApi: scaffoldFormContext.initApi,
      api: scaffoldFormContext.api,
      ...layout,
      wrapperComponent: "div",
      [scaffoldFormContext.controls ? "controls" : "body"]: body,
    }
  }

  amisScope: any

  scopeRef(scoped: any) {
    this.amisScope = scoped
  }

  goToNextStep() {
    const store = this.props.store
    const form = this.amisScope?.getComponents()[0].props.store
    const step = store.scaffoldFormStep + 1
    form.setValueByName("__step", step)

    store.updateScaffoldData(form?.data, true)

    store.setScaffoldStep(step)

    store.setScaffoldStepManipulated(true)
  }

  goToPrevStep() {
    const store = this.props.store
    const form = this.amisScope?.getComponents()[0].props.store
    const step = store.scaffoldFormStep - 1
    form.setValueByName("__step", step)
    store.updateScaffoldData(form?.data, true)

    store.setScaffoldStep(step)
  }

  async handleConfirmClick() {
    const form = this.amisScope?.getComponents()[0]

    if (!form) {
      return
    }
    const { store } = this.props

    try {
      store.setScaffoldBuzy(true)

      const values = await form.doAction(
        {
          type: "submit",
        },
        form.props.data,
        true,
      )

      await this.handleConfirm([values])
    } catch (e: any) {
      console.log(e.stack)
      store.setScaffoldError(e.message)
    }

    store.setScaffoldBuzy(false)
    store.setScaffoldStep(0)
  }

  handleCancelClick() {
    this.props.store.closeScaffoldForm()
    this.props.store.setScaffoldStep(0)
  }

  render() {
    const { store, theme, manager } = this.props
    const scaffoldFormContext = store.scaffoldForm
    const cx = getTheme(theme || "cxd").classnames
    const isStepBody = !!scaffoldFormContext?.stepsBody
    const canSkip = !!scaffoldFormContext?.canSkip
    const isLastStep = isStepBody && store.scaffoldFormStep === scaffoldFormContext!.body.length - 1
    const isFirstStep = isStepBody && store.scaffoldFormStep === 0

    return (
      <Modal
        theme={theme}
        size={scaffoldFormContext?.size || "md"}
        contentClassName={scaffoldFormContext?.className}
        show={!!scaffoldFormContext}
        onHide={this.handleCancelClick}
        className="ae-scaffoldForm-Modal :AMISCSSWrapper"
        closeOnEsc={!store.scaffoldFormBuzy}
      >
        <div className={cx("Modal-header")}>
          {!store.scaffoldFormBuzy ? (
            <a data-position="left" onClick={this.handleCancelClick} className={cx("Modal-close")}>
              <Icon icon="close" className="icon" />
            </a>
          ) : null}
          <div className={cx("Modal-title")}>{scaffoldFormContext?.title}</div>
        </div>
        <div className={cx("Modal-body")}>
          {scaffoldFormContext ? (
            render(
              this.buildSchema(),
              {
                data: store.scaffoldData,
                onValidate: scaffoldFormContext.validate,
                scopeRef: this.scopeRef,
                manager,
              },
              {
                ...manager.env,
                session: "scaffold-dialog",
                theme: theme,
              },
            )
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <div className={cx("Modal-footer")}>
          {store.scaffoldFormBuzy || store.scaffoldError ? (
            <div className={cx("Dialog-info")} key="info">
              <Spinner size="sm" key="info" show={store.scaffoldFormBuzy} />
              {store.scaffoldError ? <span className={cx("Dialog-error")}>{store.scaffoldError}</span> : null}
            </div>
          ) : null}
          {isStepBody && canSkip && isFirstStep && (
            <Button onClick={this.handleConfirmClick} disabled={store.scaffoldFormBuzy}>
              Skip Wizard
            </Button>
          )}
          {isStepBody && !isFirstStep && (
            <Button level="primary" onClick={this.goToPrevStep} disabled={store.scaffoldFormBuzy}>
              Previous
            </Button>
          )}
          {isStepBody && !isLastStep && (
            <Button level="primary" onClick={this.goToNextStep} disabled={store.scaffoldFormBuzy}>
              Next
            </Button>
          )}
          {(!isStepBody || isLastStep) && (
            <Button level="primary" onClick={this.handleConfirmClick} disabled={store.scaffoldFormBuzy}>
              Confirm
            </Button>
          )}
          <Button onClick={this.handleCancelClick}>Cancel</Button>
        </div>
      </Modal>
    )
  }
}
