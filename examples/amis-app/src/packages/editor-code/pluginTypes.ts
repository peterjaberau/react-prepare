import { RegionWrapperProps } from "./component/RegionWrapper"
import { EditorManager } from "./manager"
import { EditorStoreType } from "./store/editor"
import { EditorNodeType } from "./store/node"
import React from "react"
import { DiffChange } from "./util"
import type { RendererConfig, Schema } from "amis-core"
import type { MenuDivider, MenuItem } from "amis-ui/lib/components/ContextMenu"
import type { BaseSchema, SchemaCollection } from "amis"
import type { AsyncLayerOptions } from "./component/AsyncLayer"
import { BasePlugin } from "./plugin"

export interface RegionConfig {

  key: string


  label: string


  placeholder?: string | JSX.Element


  matchRegion?: (elem: JSX.Element | undefined | null, component: JSX.Element) => boolean


  renderMethod?: string


  rendererName?: string


  insertPosition?: "outter" | "inner"


  optional?: boolean


  renderMethodOverride?: (
    regions: Array<RegionConfig>,
    insertRegion: (
      component: JSX.Element,
      dom: JSX.Element,
      regions: Array<RegionConfig>,
      info: RendererInfo,
      manager: EditorManager,
    ) => JSX.Element,
  ) => Function


  preferTag?: string


  wrapper?: React.ComponentType<RegionWrapperProps>


  wrapperResolve?: (dom: HTMLElement) => HTMLElement


  modifyGhost?: (ghost: HTMLElement, schema?: any) => void


  dndMode?:
    | "default"
    | "position-h"
    | "position-v"
    | "flex"

    | ((node: any) => string | undefined)


  accept?: (json: any) => boolean
}

export interface VRendererConfig {

  panelIcon?: string
  panelTitle?: string

  panelControls?: Array<any>
  panelDefinitions?: any


  panelJustify?: boolean


  panelControlsCreator?: (context: BaseEventContext) => Array<any>
  panelBody?: Array<any>
  panelBodyCreator?: (context: BaseEventContext) => Array<any>


  regions?: {
    [propName: string]: RegionConfig
  }
}

export interface RendererScaffoldInfo {

  name: string


  icon?: string

  pluginIcon?: string


  searchKeywords?: string


  description?: string


  docLink?: string


  previewSchema?: any


  tags?: string | Array<string>


  type?: string
  scaffold?: any
}


export interface RendererInfo extends RendererScaffoldInfo {
  scaffolds?: Array<Partial<RendererScaffoldInfo>>

  rendererName?: string


  $schema?: string

  isBaseComponent?: boolean


  isListComponent?: boolean

  disabledRendererPlugin?: boolean


  regions?: Array<RegionConfig>


  notHighlight?: boolean


  patchContainers?: Array<string>


  overrideTargetRendererName?: string


  overrides?: {
    [propName: string]: Function
  }


  vRendererConfig?: VRendererConfig


  wrapperResolve?: (dom: HTMLElement) => HTMLElement | Array<HTMLElement>


  wrapperProps?: any


  filterProps?: (props: any, node: EditorNodeType) => any


  renderRenderer?: (props: any, info: RendererInfo) => JSX.Element


  multifactor?: boolean


  scaffoldForm?: ScaffoldForm


  id: string
  type: string
  plugin: PluginInterface
  extraPlugin?: PluginInterface
  renderer: RendererConfig
  schemaPath: string


  editable?: boolean
  removable?: boolean
  draggable?: boolean
  movable?: boolean
  replaceable?: boolean
  duplicatable?: boolean
  memberImmutable?: boolean | Array<string>
  typeMutable?: boolean


  hostId?: string
  memberIndex?: number

  tipName?: string

  sharedContext?: Record<string, any>
  dialogTitle?: string
  dialogType?: string
  getSubEditorVariable?: (schema?: any) => Array<{ label: string; children: any }>
}

export type BasicRendererInfo = Omit<RendererInfo, "id" | "type" | "plugin" | "renderer" | "schemaPath">

export interface PopOverForm {
  title?: string


  body: Array<any>


  controls?: Array<any>
}

export interface ScaffoldForm extends PopOverForm {

  stepsBody?: boolean

  canSkip?: boolean
  mode?:
    | "normal"
    | "horizontal"
    | "inline"
    | {
    mode: string
    horizontal: any
  }

  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full"
  className?: string
  initApi?: any
  api?: any
  actions?: any[]

  validate?: (
    values: any,
    formStore: any,
  ) => void | { [propName: string]: string } | Promise<void | { [propName: string]: string }>


  pipeIn?: (value: any) => any


  pipeOut?: (value: any) => any


  canRebuild?: boolean
}


export interface SubRendererInfo extends RendererScaffoldInfo {

  isBaseComponent?: boolean

  rendererName?: string

  scaffoldForm?: ScaffoldForm

  disabledRendererPlugin?: boolean


  plugin: PluginInterface
  parent: RendererInfo
  id: string
  order: number
}

export type BasicSubRenderInfo = Omit<SubRendererInfo, "plugin" | "parent" | "id" | "order"> &
  Partial<Pick<SubRendererInfo, "order">>


export interface ToolbarItem {
  label?: string
  id?: string
  order: number
  level?: "primary" | "secondary" | "special"
  className?: string
  draggable?: boolean
  onDragStart?: (e: any) => void
  icon?: string
  iconSvg?: string
  onClick?: (e: any) => void
  tooltip?: string
  placement?: "top" | "bottom" | "right" | "left"
}

export type BasicToolbarItem = Partial<ToolbarItem>

export type ContextMenuItem = MenuItem | MenuDivider


export interface PanelProps {
  id?: string
  info?: RendererInfo
  path?: string
  node?: EditorNodeType
  value: BaseSchema
  onChange: (value: BaseSchema, diff?: Array<DiffChange>) => void
  store: EditorStoreType
  manager: EditorManager
  popOverContainer?: () => HTMLElement | void
  readonly?: boolean
}


export interface PanelItem {
  nodeId?: string
  key: string
  icon: string
  pluginIcon?: string
  title: string | JSX.Element
  component?: React.ComponentType<PanelProps | any>
  order: number
  position?: "left" | "right"
  render?: (props: PanelProps) => JSX.Element
  menus?: Array<any>
}

export type BasicPanelItem = Omit<PanelItem, "order"> & Partial<Pick<PanelItem, "order">>

export interface EventContext {
  data?: any
  [propName: string]: any
}


export interface BaseEventContext extends EventContext {
  node: EditorNodeType
  id: string
  info: RendererInfo
  path: string
  schema: any
  schemaPath: string
  secondFactor?: boolean
}

export interface RendererInfoResolveEventContext extends EventContext {
  renderer: RendererConfig
  path: string
  schema: any
  schemaPath: string
  data?: RendererInfo
}

export interface RendererJSONSchemaResolveEventContext extends BaseEventContext {
  data: string
}

export interface IGlobalEvent {
  label: string
  name: string
  description: string
  mapping: Array<{
    key: string
    type: string
  }>
}

export interface ContextMenuEventContext extends BaseEventContext {
  region: string
  selections: Array<BaseEventContext>
  data: Array<ContextMenuItem>
}

export interface SelectionEventContext extends BaseEventContext {
  selections: Array<BaseEventContext>
  data: Array<string>
}

export interface RendererEventContext extends BaseEventContext {
  region?: string
}

export interface ActiveEventContext extends Partial<BaseEventContext> {
  active?: boolean
}

export interface DeleteEventContext extends BaseEventContext {
  data?: Array<string>
}

export interface InsertEventContext extends BaseEventContext {
  region: string
  beforeId?: string
  index: number
  data: any
  subRenderer?: SubRendererInfo | RendererInfo
  dragInfo?: {
    id: string
    type: string
    data: any
    position?: string
  }
}

export interface ReplaceEventContext extends BaseEventContext {
  data: any
  subRenderer?: SubRendererInfo | RendererInfo
  region?: string
}

export interface MoveEventContext extends BaseEventContext {
  region: string
  sourceId: string
  beforeId?: string
  direction?: "up" | "down"
}

export interface ChangeEventContext extends BaseEventContext {
  value: any
  readonly diff: Array<DiffChange>
}

export interface DragEventContext extends EventContext {
  mode: "move" | "copy"
  sourceType: "schema" | "subrenderer" | string
  sourceId: string
  data: any

  targetId?: string
  targetRegion?: string
}

export interface BuildPanelEventContext extends BaseEventContext {
  data: Array<BasicPanelItem>
  selections: Array<BaseEventContext>
}

export interface PreventClickEventContext extends EventContext {
  data: MouseEvent
}

export interface ResizeMoveEventContext extends EventContext {
  data: Object
  nativeEvent: MouseEvent
  dom: HTMLElement
  resizer: HTMLElement
  node: EditorNodeType
  store: EditorStoreType
}

export interface AfterBuildPanelBody extends EventContext {
  data: SchemaCollection
  plugin: BasePlugin
  context: BaseEventContext
}

export type PluginEvent<T, P = any> = {
  context: T
  type: string
  preventDefault: () => void
  stopPropagation: () => void
  setData: (data: P) => void

  prevented?: boolean
  stoped?: boolean

  pending?: Promise<any>

  data?: P

  value?: any
}

export type PluginEventFn = (e: PluginEvent<EventContext>) => any

export interface PluginEventListener {
  onInit?: (
    event: PluginEvent<
      EventContext & {
      data: EditorManager
    }
    >,
  ) => void

  onActive?: (event: PluginEvent<ActiveEventContext>) => void

  beforeInsert?: (event: PluginEvent<InsertEventContext>) => false | void
  afterInsert?: (event: PluginEvent<InsertEventContext>) => void

  beforeUpdate?: (event: PluginEvent<ChangeEventContext>) => false | void
  afterUpdate?: (event: PluginEvent<ChangeEventContext>) => void

  beforeReplace?: (event: PluginEvent<ReplaceEventContext>) => false | void
  afterReplace?: (event: PluginEvent<ReplaceEventContext>) => void

  beforeMove?: (event: PluginEvent<MoveEventContext>) => false | void
  afterMove?: (event: PluginEvent<MoveEventContext>) => void

  beforeDelete?: (event: PluginEvent<DeleteEventContext>) => false | void
  afterDelete?: (event: PluginEvent<DeleteEventContext>) => void

  beforeResolveEditorInfo?: (event: PluginEvent<RendererInfoResolveEventContext>) => false | void
  afterResolveEditorInfo?: (event: PluginEvent<RendererInfoResolveEventContext>) => void

  beforeResolveJsonSchema?: (event: PluginEvent<RendererJSONSchemaResolveEventContext>) => false | void
  afterResolveJsonSchema?: (event: PluginEvent<RendererJSONSchemaResolveEventContext>) => void

  onDndAccept?: (event: PluginEvent<DragEventContext>) => false | void

  onBuildPanels?: (event: PluginEvent<BuildPanelEventContext>) => void

  onBuildContextMenus?: (event: PluginEvent<ContextMenuEventContext>) => void

  onBuildToolbars?: (event: PluginEvent<BaseEventContext>) => void

  onSelectionChange?: (event: PluginEvent<SelectionEventContext>) => void

  onPreventClick?: (event: PluginEvent<PreventClickEventContext>) => false | void

  onWidthChangeStart?: (
    event: PluginEvent<
      ResizeMoveEventContext,
      {
        onMove(e: MouseEvent): void
        onEnd(e: MouseEvent): void
      }
    >,
  ) => void

  onHeightChangeStart?: (
    event: PluginEvent<
      ResizeMoveEventContext,
      {
        onMove(e: MouseEvent): void
        onEnd(e: MouseEvent): void
      }
    >,
  ) => void

  onSizeChangeStart?: (
    event: PluginEvent<
      ResizeMoveEventContext,
      {
        onMove(e: MouseEvent): void
        onEnd(e: MouseEvent): void
      }
    >,
  ) => void
}

export interface PluginInterface extends Partial<BasicRendererInfo>, Partial<BasicSubRenderInfo>, PluginEventListener {
  readonly manager: EditorManager

  order?: number

  scene?: Array<string>

  withDataSource?: boolean

  rendererName?: string

  panelIcon?: string
  panelTitle?: string

  disabledRendererPlugin?: boolean

  panelControls?: Array<any>
  panelBody?: Array<any>
  panelDefinitions?: any
  panelApi?: any
  panelSubmitOnChange?: boolean

  notRenderFormZone?: boolean

  events?: RendererPluginEvent[] | ((schema: any) => RendererPluginEvent[])

  actions?: RendererPluginAction[]

  panelJustify?: boolean

  async?: AsyncLayerOptions

  dragMode?: string

  getAvailableContextFields?: (
    scopeNode: EditorNodeType,

    target: EditorNodeType,

    region?: EditorNodeType,
  ) => Promise<SchemaCollection | void>

  panelFormPipeOut?: (value: any, oldValue: any) => any

  panelControlsCreator?: (context: BaseEventContext) => Array<any>
  panelBodyCreator?: (context: BaseEventContext) => SchemaCollection

  panelBodyAsyncCreator?: (context: BaseEventContext) => Promise<SchemaCollection>

  popOverBody?: Array<any>
  popOverBodyCreator?: (context: BaseEventContext) => Array<any>

  getRendererInfo?: (context: RendererInfoResolveEventContext) => BasicRendererInfo | void

  buildJSONSchema?: (context: RendererJSONSchemaResolveEventContext) => void | string

  buildEditorToolbar?: (context: BaseEventContext, toolbars: Array<BasicToolbarItem>) => void

  buildEditorContextMenu?: (context: ContextMenuEventContext, menus: Array<ContextMenuItem>) => void

  buildEditorPanel?: (context: BuildPanelEventContext, panels: Array<BasicPanelItem>) => void

  buildSubRenderers?: (
    context: RendererEventContext,
    subRenderers: Array<SubRendererInfo>,
    renderers: Array<RendererConfig>,
  ) =>
    | BasicSubRenderInfo
    | Array<BasicSubRenderInfo>
    | void
    | Promise<BasicSubRenderInfo | Array<BasicSubRenderInfo> | void>

  asyncUpdateCustomSubRenderersInfo?: (
    context: RendererEventContext,
    subRenderers: Array<SubRendererInfo>,
    renderers: Array<RendererConfig>,
  ) => void

  markDom?: (dom: HTMLElement | Array<HTMLElement>, props: any) => void

  buildDataSchemas?: (
    node: EditorNodeType,
    region?: EditorNodeType,
    trigger?: EditorNodeType,
    parent?: EditorNodeType,
  ) => any | Promise<any>

  rendererBeforeDispatchEvent?: (node: EditorNodeType, e: any, data: any) => void

  patchSchema?: (schema: Schema, renderer: RendererConfig, props?: any) => Schema | void

  dispose?: () => void

  componentRef?: (node: EditorNodeType, ref: any) => void
}

export interface RendererPluginEvent {
  eventName: string
  eventLabel: string
  description?: string
  defaultShow?: boolean
  isBroadcast?: boolean
  owner?: string
  dataSchema?: any[] | ((manager: EditorManager) => any[])
  strongDesc?: string
}

export interface RendererPluginAction {
  actionType?: string
  actionLabel?: string
  description?: string
  schema?: any
  supportComponents?: string[] | string
  innerArgs?: string[]
  descDetail?: (info: any, context: any, props: any) => string | JSX.Element
  outputVarDataSchema?: any | any[]
  actions?: SubRendererPluginAction[]
  children?: RendererPluginAction[]
}

export interface SubRendererPluginAction
  extends Pick<RendererPluginAction, "actionType" | "innerArgs" | "descDetail"> {}

export interface PluginEvents {
  [propName: string]: RendererPluginEvent[] | ((schema: any) => RendererPluginEvent[])
}

export interface PluginActions {
  [propName: string]: RendererPluginAction[]
}
