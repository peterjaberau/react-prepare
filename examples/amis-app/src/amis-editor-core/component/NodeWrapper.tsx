import { RendererProps, isObject } from "amis-core"
import { observer } from "mobx-react"
import { isAlive } from "mobx-state-tree"
import React from "react"
import { findDOMNode } from "react-dom"
import merge from "lodash/merge"
import omit from "lodash/omit"
import { RendererInfo } from "../plugin"
import { EditorNodeType } from "../store/node"
import { autobind, isEmpty } from "../util"

export interface NodeWrapperProps extends RendererProps {
  $$editor: RendererInfo
  $$node?: EditorNodeType
}

@observer
export class NodeWrapper extends React.Component<NodeWrapperProps> {
  omitMockProps = ["id", "$$id", "enable", "maxDisplayRows"]
  ref: any

  constructor(props: NodeWrapperProps) {
    super(props)
    this.refFn = this.refFn.bind(this)
  }

  componentDidMount() {
    this.markDom(this.props.$$editor.id)

    const node = this.props.$$node
    node &&
      requestAnimationFrame(() => {
        ;() => isAlive(node) && node.calculateHighlightBox()
      })
  }

  componentDidUpdate(prevProps: NodeWrapperProps) {
    this.markDom(this.props.$$editor.id)
  }

  getWrappedInstance() {
    return this.ref
  }

  refFn(ref: any) {
    this.ref = ref
  }

  markDom(id: string) {
    const root = findDOMNode(this) as HTMLElement

    if (!root || !id) {
      return
    }

    const info = this.props.$$editor
    const visible = this.props.$$visible !== false && this.props.$$hidden !== true
    let dom = info.wrapperResolve ? info.wrapperResolve(root) : root
    ;(Array.isArray(dom) ? dom : dom ? [dom] : []).forEach((dom) => {
      dom.setAttribute("data-editor-id", id)
      dom.setAttribute("name", this.props.id)
      dom.setAttribute("data-visible", visible ? "" : "false")
      dom.setAttribute("data-hide-text", visible ? "" : "<Hidden state>")

      if (info.regions) {
        dom.setAttribute("data-container", "")
      } else {
        dom.removeAttribute("data-container")
      }
    })
    info.plugin?.markDom?.(dom, this.props)
  }

  render() {
    let { $$editor, $$node, store, ...rest } = this.props
    const renderer = $$editor.renderer

    if ($$editor.filterProps) {
      rest = $$editor.filterProps.call($$editor.plugin, rest, $$node as any)
    }

    const mockProps = omit(rest?.editorSetting?.mock, this.omitMockProps)

    if (isObject(mockProps) && !isEmpty(mockProps)) {
      rest = merge(rest, mockProps)
    }

    if ($$editor.renderRenderer) {
      return $$editor.renderRenderer.call(
        $$editor.plugin,
        {
          ...rest,
          store,
          ...$$node?.state,
          $$editor,
          ...$$editor.wrapperProps,
          ref: this.refFn,
        },
        $$editor,
      )
    }
    const Component = renderer.component!

    const supportRef =
      Component.prototype?.isReactComponent || (Component as any).$$typeof === Symbol.for("react.forward_ref")

    return (
      <Component
        {...rest}
        store={store}
        {...$$node?.state}
        $$editor={$$editor}
        {...$$editor.wrapperProps}
        ref={supportRef ? this.refFn : undefined}
      />
    )
  }
}
