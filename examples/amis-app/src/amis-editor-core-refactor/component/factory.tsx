import { render, RendererProps } from "amis"
import { isAlive } from "mobx-state-tree"
import React, { useContext, useEffect, useRef, useCallback } from "react"
import { NodeWrapper } from "./NodeWrapper"
import { PanelProps, RegionConfig, RendererInfo } from "../plugin"
import groupBy from "lodash/groupBy"
import { RegionWrapper } from "./RegionWrapper"
import find from "lodash/find"
import { ContainerWrapper } from "./ContainerWrapper"
import { observer } from "mobx-react"
import { EditorNodeContext, EditorNodeType } from "../store/node"
import { EditorManager } from "../manager"
import flatten from "lodash/flatten"
import { render as reactRender, unmountComponentAtNode } from "react-dom"
import { autobind } from "core-decorators"
import { JSONGetById, JSONUpdate, appTranslate } from "../util"
import { ErrorBoundary } from "amis-core"
import { CommonConfigWrapper } from "./CommonConfigWrapper"
import type { Schema } from "amis"
import type { DataScope } from "amis-core"
import type { RendererConfig } from "amis-core"
import type { SchemaCollection } from "amis"
import { SchemaFrom } from "./base/SchemaForm"
import memoize from "lodash/memoize"
import { FormConfigWrapper } from "./FormConfigWrapper"

// Create Node Store and build it into a tree
export function makeWrapper(manager: EditorManager, info: RendererInfo, rendererConfig: RendererConfig) {
  type Props = RendererProps & {
    $$id: string
  }
  const store = manager.store
  const renderer = rendererConfig.component!

  @observer
  class Wrapper extends React.Component<Props> {
    static displayName = renderer.displayName
    static propsList = ((renderer && renderer.propsList) || []).concat([
      "$$id",
      // '$$editor'
    ])
    static contextType = EditorNodeContext
    editorNode?: EditorNodeType
    scopeId?: string

    UNSAFE_componentWillMount() {
      const parent: EditorNodeType = (this.context as any) || store.root
      if (!info.id) {
        return
      }

      this.editorNode = parent.addChild({
        id: info.id,
        type: info.type,
        label: info.name,
        isCommonConfig: !!this.props.$$commonSchema,
        isFormConfig: !!this.props.$$formSchema,
        path: this.props.$path,
        schemaPath: info.schemaPath,
        dialogTitle: info.dialogTitle,
        dialogType: info.dialogType,
        info,
        getData: () => this.props.data,
      })

      this.editorNode!.setRendererConfig(rendererConfig)

      if (
        (rendererConfig.storeType || info.isListComponent) &&
        !manager.dataSchema.hasScope(`${info.id}-${info.type}`)
      ) {
        let from = parent
        let closestScope: DataScope | undefined = undefined
        while (from && !closestScope) {
          if (from === store.root) {
            closestScope = manager.dataSchema.getScope("root")
          } else if (manager.dataSchema.hasScope(`${from.id}-${from.type}`)) {
            closestScope = manager.dataSchema.getScope(`${from.id}-${from.type}`)
          }

          from = from.parentId === "root" ? store.root : from.parent
        }

        if (closestScope) {
          manager.dataSchema.switchTo(closestScope.id)
        } else {
          throw new Error("程序错误")
        }

        this.scopeId = `${info.id}-${info.type}`
        manager.dataSchema.addScope([], this.scopeId)
        if (info.name) {
          const nodeSchema = manager.store.getNodeById(info.id)?.schema
          const tag = appTranslate(nodeSchema?.title ?? nodeSchema?.name)
          manager.dataSchema.current.tag = `${info.name}${tag && typeof tag === "string" ? ` : ${tag}` : ""}`
          manager.dataSchema.current.group = "组件上下文"
        }
      }
    }

    componentDidUpdate(prevProps: Props) {
      const props = this.props

      if (this.editorNode && props.$$commonSchema !== prevProps.$$commonSchema) {
        this.editorNode.updateIsCommonConfig(!!this.props.$$commonSchema)
      }

      if (this.editorNode && props.$$formSchema !== prevProps.$$formSchema) {
        this.editorNode.updateIsFormConfig(!!this.props.$$formSchema)
      }
    }

    componentWillUnmount() {
      if (this.editorNode && isAlive(this.editorNode)) {
        const parent: EditorNodeType = (this.context as any) || store.root
        parent.removeChild(this.editorNode)
      }

      if (this.scopeId) {
        manager.dataSchema.removeScope(this.scopeId)
      }
    }

    @autobind
    wrapperRef(raw: any) {
      let ref = raw
      while (ref?.getWrappedInstance) {
        ref = ref.getWrappedInstance()
      }

      if (ref && !ref.props) {
        Object.defineProperty(ref, "props", {
          get: () => this.props,
        })
      } else if (!ref && raw) {
        ref = {}
        Object.defineProperty(ref, "props", {
          get: () => this.props,
        })
      }

      if (this.editorNode && isAlive(this.editorNode)) {
        this.editorNode.setComponent(ref)

        info.plugin?.componentRef?.(this.editorNode, ref)
      }
    }

    @autobind
    renderChild(region: string, node: Schema, props: any) {
      const { render } = this.props

      if (node?.$$id) {
        props = props || {}
        props.key = `${props.key}-${node.$$id}`
      }

      return render(region, node, { ...props, $$editor: info })
    }

    render() {
      const { $$id, ...rest } = this.props

      const Wrapper = this.props.$$commonSchema
        ? CommonConfigWrapper
        : this.props.$$formSchema
          ? FormConfigWrapper
          : info.regions
            ? ContainerWrapper
            : NodeWrapper
      return (
        <EditorNodeContext.Provider value={this.editorNode || (this.context as any)}>
          <ErrorBoundary
            customErrorMsg={`拦截到${info.type}渲染错误`}
            fallback={() => {
              return (
                <div className="renderer-error-boundary">
                  {info?.type}
                  渲染发生错误，详细错误信息请查看控制台输出。
                </div>
              )
            }}
          >
            <Wrapper
              {...rest}
              render={this.renderChild as any}
              $$editor={info}
              $$node={this.editorNode}
              ref={this.wrapperRef}
            />
          </ErrorBoundary>
        </EditorNodeContext.Provider>
      )
    }
  }

  return Wrapper as any
}

function replaceDialogtoRef(schema: Schema, dialogId: string, dialogRefsName: string) {
  let replacedSchema = schema
  const dialog = JSONGetById(schema, dialogId)
  if (dialog) {
    replacedSchema = JSONUpdate(schema, dialogId, { $ref: dialogRefsName }, true)
  }
  return replacedSchema
}

export function makeSchemaFormRender(
  manager: EditorManager,
  schema: {
    body?: SchemaCollection
    controls?: Array<any>
    definitions?: any
    api?: any
    submitOnChange?: boolean
    justify?: boolean
    panelById?: string
    formKey?: string
    pipeIn?: (value: any) => any
    pipeOut?: (value: any) => any
  },
) {
  const env = { ...manager.env, session: "schema-form" }
  const filterBody = memoize((body) => (body ? flatten(Array.isArray(body) ? body : [body]) : undefined))

  return ({ value, onChange, popOverContainer, id, store, node, readonly }: PanelProps) => {
    const ctx = { ...manager.store.ctx }

    if (schema?.panelById && schema?.panelById !== node?.id) {
      return <></>
    }

    if (id) {
      Object.defineProperty(ctx, "__props__", {
        get: () => {
          const node = store.getNodeById(id)
          return node?.getComponent()?.props || {}
        },
      })
    }

    const curFormKey = `${id}-${node?.type}${schema.formKey ? "-" : ""}${schema.formKey ? schema.formKey : ""}`

    const body = filterBody(schema.body)
    const controls = filterBody(schema.controls)

    return (
      <SchemaFrom
        key={curFormKey}
        propKey={curFormKey}
        api={schema.api}
        definitions={schema.definitions}
        body={body}
        controls={controls}
        value={value}
        ctx={ctx}
        pipeIn={schema.pipeIn}
        pipeOut={schema.pipeOut}
        submitOnChange={schema.submitOnChange}
        onChange={onChange}
        env={env}
        popOverContainer={popOverContainer}
        node={node}
        manager={manager}
        justify={schema.justify}
        readonly={readonly}
      />
    )
  }
}

export function hackIn(renderer: RendererConfig, regions?: Array<RegionConfig>, overrides?: any) {
  let rawComponent: any = renderer.Renderer
  while (rawComponent.ComposedComponent) {
    rawComponent = rawComponent.ComposedComponent
  }

  const prototype: any = rawComponent.prototype

  if (Array.isArray(regions)) {
    const grouped = groupBy(regions, (item) => item.renderMethod)

    Object.keys(grouped).forEach((key) => {
      if (prototype[`__${key}`] || !prototype[key]) {
        return
      }

      const regions = grouped[key]
      const customRenderCreator = regions[0]?.renderMethodOverride

      prototype[`__${key}`] = prototype[key]
      prototype[key] = (function (origin, fn) {
        if (typeof origin !== "function") {
          return origin
        }

        return function (this: any) {
          const prev = this.super
          this.super = origin.bind(this)
          const result = fn.apply(this, arguments)
          this.super = prev
          return result
        }
      })(
        prototype[`__${key}`],
        customRenderCreator?.(regions.concat(), insertRegion) ||
          function (this: any, ...args: any[]) {
            const info: RendererInfo = this.props.$$editor
            const dom = this.super.apply(this, args)

            if (
              info &&
              (!this.props.$$commonSchema || !this.props.$$formSchema) &&
              Array.isArray(info.regions) &&
              regions.every((region) => find(info.regions!, (c) => c.key === region.key))
            ) {
              const regionsCopy = regions.map((r) => {
                const i = find(
                  info.regions,
                  (c) => c.key === r.key && (!r.rendererName || r.rendererName === c.rendererName),
                )

                if (i) {
                  return {
                    ...r,
                    label: i.label,
                    preferTag: i.preferTag,
                  }
                }

                return r
              })

              return insertRegion(this, dom, regionsCopy, info, info.plugin.manager)
            }

            return dom
          },
      )
    })
  } else if (overrides) {
    Object.keys(overrides).forEach((key) => {
      if (prototype[`__${key}`] || typeof prototype[key] !== "function") {
        return
      }

      prototype[`__${key}`] = prototype[key]
      prototype[key] = (function (origin, fn) {
        if (typeof origin !== "function") {
          return origin
        }

        return function (this: any) {
          const prev = this.super
          this.super = origin.bind(this)
          const result = fn.apply(this, arguments)
          this.super = prev
          return result
        }
      })(prototype[`__${key}`], overrides[key])
    })
  }
}

function getMatchedRegion(
  component: JSX.Element,
  dom: JSX.Element,
  regions: Array<RegionConfig>,
): [RegionConfig | undefined, number] {
  let index = -1
  let resolved: RegionConfig | undefined = undefined

  regions.some((item, i) => {
    if (item.matchRegion!(dom, component)) {
      index = i
      resolved = item
      return true
    }
    return false
  })

  return [resolved, index]
}

function insertRegion(
  component: JSX.Element,
  dom: JSX.Element,
  regions: Array<RegionConfig>,
  info: RendererInfo,
  manager: EditorManager,
): JSX.Element {
  if (info.memberImmutable === true) {
    return dom
  } else if (
    Array.isArray(info.memberImmutable) &&
    regions.every((reg) => (info.memberImmutable as Array<string>).includes(reg.key))
  ) {
    return dom
  }

  const rootRegion = find(regions, (r) => !r.matchRegion)

  if (rootRegion) {
    const Region = rootRegion.wrapper || RegionWrapper

    if (rootRegion.insertPosition === "inner" && React.isValidElement(dom)) {
      return React.cloneElement(dom as any, {
        children: (
          <Region
            key={rootRegion.key}
            preferTag={rootRegion.preferTag}
            name={rootRegion.key}
            label={rootRegion.label}
            placeholder={rootRegion.placeholder}
            regionConfig={rootRegion}
            editorStore={manager.store}
            manager={manager}
            children={(dom as any).props.children}
            wrapperResolve={rootRegion.wrapperResolve}
            rendererName={info.renderer.name}
          />
        ),
      })
    } else {
      return (
        <Region
          key={rootRegion.key}
          preferTag={rootRegion.preferTag}
          name={rootRegion.key}
          label={rootRegion.label}
          placeholder={rootRegion.placeholder}
          regionConfig={rootRegion}
          editorStore={manager.store}
          manager={manager}
          children={dom}
          wrapperResolve={rootRegion.wrapperResolve}
          rendererName={info.renderer.name}
        />
      )
    }
  } else if (regions.length) {
    const [resolved, index] = getMatchedRegion(component, dom, regions)

    if (resolved) {
      const Region = resolved.wrapper || RegionWrapper
      regions.splice(index, 1)

      if (resolved.insertPosition === "outter") {
        return (
          <Region
            key={resolved.key}
            preferTag={resolved.preferTag}
            name={resolved.key}
            label={resolved.label}
            placeholder={resolved.placeholder}
            regionConfig={resolved}
            editorStore={manager.store}
            manager={manager}
            children={dom}
            wrapperResolve={resolved.wrapperResolve}
          />
        )
      } else if (React.isValidElement(dom)) {
        const children = (dom.props as any).children

        return React.cloneElement(dom, {
          children: (
            <Region
              key={resolved.key}
              preferTag={resolved.preferTag}
              name={resolved.key}
              label={resolved.label}
              placeholder={resolved.placeholder}
              regionConfig={resolved}
              editorStore={manager.store}
              manager={manager}
              children={children}
              wrapperResolve={resolved.wrapperResolve}
            />
          ),
        } as any)
      }
    } else if (React.isValidElement(dom) && (dom.props as any).children) {
      let children: any = (dom.props as any).children

      if (Array.isArray(children)) {
        children = children.map((child) => insertRegion(component, child, regions, info, manager))
      } else {
        children = insertRegion(component, children, regions, info, manager) as any
      }

      return React.cloneElement(dom, {
        children,
      } as any)
    }
  }

  return dom
}

export function mapReactElement(
  dom: JSX.Element,
  iterator: (dom: JSX.Element, index?: number) => JSX.Element,
  index?: number,
) {
  if (!React.isValidElement(dom)) {
    return dom
  }

  let mapped = iterator(dom, index)

  if (mapped === dom && (dom.props as any).children) {
    const children = (dom.props as any).children
    if (Array.isArray(children)) {
      const childMapped: Array<any> = []
      let modified = false
      children.forEach((child: any, index: number) => {
        let mapped = mapReactElement(child, iterator, index)

        if (mapped !== child) {
          modified = true
          if (React.isValidElement(mapped) && !mapped.key) {
            mapped = React.cloneElement(mapped, { key: index })
          }
        }

        childMapped.push(mapped)
      })

      if (modified) {
        mapped = React.cloneElement(mapped, {
          children: childMapped,
        })
      }
    } else {
      const childMapped = mapReactElement(children, iterator, index)
      if (childMapped !== children) {
        mapped = React.cloneElement(mapped, {
          children: childMapped,
        })
      }
    }
  }

  return mapped
}

const thumbHost = document.createElement("div")
export function renderThumbToGhost(ghost: HTMLElement, region: EditorNodeType, schema: any, manager: EditorManager) {
  // bca-disable-next-line
  ghost.innerHTML = ""
  let path = ""
  const host = region.host!
  const component = host.getComponent()!
  const isForm = component?.renderControl && region.region === "body"

  try {
    reactRender(
      render(
        {
          children: ({ render }: any) => {
            return isForm
              ? render("", {
                  type: "form",
                  wrapWithPanel: false,
                  mode: component.props.mode,
                  body: [schema],
                })
              : render(region.region, schema)
          },
        } as any,
        {},
        {
          ...manager.env,
          theme: component?.props.theme || manager.env.theme,
          session: "ghost-thumb",
        },
        path,
      ),
      thumbHost,
    )
  } catch (e) {}

  /* bca-disable */
  const html = thumbHost.innerHTML || '<div class="wrapper-sm b-a b-light m-b-sm">拖入占位</div>'
  // bca-disable-line
  ghost.innerHTML = html
  /* bca-enable */

  unmountComponentAtNode(thumbHost)
  // bca-disable-next-line
  thumbHost.innerHTML = ""
}
