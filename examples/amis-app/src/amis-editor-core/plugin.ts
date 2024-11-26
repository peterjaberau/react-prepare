import omit from 'lodash/omit';
import {RegionWrapperProps} from './component/RegionWrapper';
import {makeAsyncLayer} from './component/AsyncLayer';
import {EditorManager} from './manager';
import {EditorStoreType} from './store/editor';
import {EditorNodeType} from './store/node';
// import {DNDModeInterface} from './dnd/interface';
// import {EditorDNDManager} from './dnd';
import React from 'react';
import {DiffChange} from './util';
import find from 'lodash/find';
import {RAW_TYPE_MAP} from './util';
import type {RendererConfig, Schema} from 'amis-core';
import type {MenuDivider, MenuItem} from 'amis-ui/lib/components/ContextMenu';
import type {BaseSchema, SchemaCollection} from 'amis';
import type {AsyncLayerOptions} from './component/AsyncLayer';
import type {SchemaType} from 'amis/lib/Schema';

export interface RegionConfig {
  key: string;

  label: string;

  placeholder?: string | JSX.Element;

  matchRegion?: (
    elem: JSX.Element | undefined | null,
    component: JSX.Element
  ) => boolean;

  renderMethod?: string;

  rendererName?: string;

  insertPosition?: 'outter' | 'inner';

  optional?: boolean;

  renderMethodOverride?: (
    regions: Array<RegionConfig>,
    insertRegion: (
      component: JSX.Element,
      dom: JSX.Element,
      regions: Array<RegionConfig>,
      info: RendererInfo,
      manager: EditorManager
    ) => JSX.Element
  ) => Function;

  preferTag?: string;

  wrapper?: React.ComponentType<RegionWrapperProps>;

  wrapperResolve?: (dom: HTMLElement) => HTMLElement;

  modifyGhost?: (ghost: HTMLElement, schema?: any) => void;

  dndMode?:
    | 'default'
    | 'position-h'
    | 'position-v'
    | 'flex'
    | ((node: any) => string | undefined);

  accept?: (json: any) => boolean;
}

export interface VRendererConfig {
  panelIcon?: string;
  panelTitle?: string;

  panelControls?: Array<any>;
  panelDefinitions?: any;

  panelJustify?: boolean;

  panelControlsCreator?: (context: BaseEventContext) => Array<any>;
  panelBody?: Array<any>;
  panelBodyCreator?: (context: BaseEventContext) => Array<any>;

  regions?: {
    [propName: string]: RegionConfig;
  };
}

export interface RendererScaffoldInfo {
  name: string;

  icon?: string;

  pluginIcon?: string;

  searchKeywords?: string;

  description?: string;

  docLink?: string;

  previewSchema?: any;

  tags?: string | Array<string>;

  type?: string;
  scaffold?: any;
}

export interface RendererInfo extends RendererScaffoldInfo {
  scaffolds?: Array<Partial<RendererScaffoldInfo>>;

  rendererName?: string;

  $schema?: string;

  isBaseComponent?: boolean;

  isListComponent?: boolean;

  disabledRendererPlugin?: boolean;

  regions?: Array<RegionConfig>;

  notHighlight?: boolean;

  patchContainers?: Array<string>;

  overrideTargetRendererName?: string;

  overrides?: {
    [propName: string]: Function;
  };

  vRendererConfig?: VRendererConfig;

  wrapperResolve?: (dom: HTMLElement) => HTMLElement | Array<HTMLElement>;

  wrapperProps?: any;

  filterProps?: (props: any, node: EditorNodeType) => any;

  renderRenderer?: (props: any, info: RendererInfo) => JSX.Element;

  multifactor?: boolean;

  scaffoldForm?: ScaffoldForm;

  id: string;
  type: string;
  plugin: PluginInterface;
  extraPlugin?: PluginInterface;
  renderer: RendererConfig;
  schemaPath: string;

  editable?: boolean;
  removable?: boolean;
  draggable?: boolean;
  movable?: boolean;
  replaceable?: boolean;
  duplicatable?: boolean;
  memberImmutable?: boolean | Array<string>;
  typeMutable?: boolean;

  hostId?: string;
  memberIndex?: number;

  tipName?: string;

  sharedContext?: Record<string, any>;
  dialogTitle?: string;
  dialogType?: string;
  getSubEditorVariable?: (
    schema?: any
  ) => Array<{label: string; children: any}>;
}

export type BasicRendererInfo = Omit<
  RendererInfo,
  'id' | 'type' | 'plugin' | 'renderer' | 'schemaPath'
>;

export interface PopOverForm {
  title?: string;

  body: Array<any>;

  controls?: Array<any>;
}

export interface ScaffoldForm extends PopOverForm {
  stepsBody?: boolean;

  canSkip?: boolean;
  mode?:
    | 'normal'
    | 'horizontal'
    | 'inline'
    | {
        mode: string;
        horizontal: any;
      };

  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  initApi?: any;
  api?: any;
  actions?: any[];

  validate?: (
    values: any,
    formStore: any
  ) =>
    | void
    | {[propName: string]: string}
    | Promise<void | {[propName: string]: string}>;

  pipeIn?: (value: any) => any;

  pipeOut?: (value: any) => any;

  canRebuild?: boolean;
}

export interface SubRendererInfo extends RendererScaffoldInfo {
  isBaseComponent?: boolean;

  rendererName?: string;

  scaffoldForm?: ScaffoldForm;

  disabledRendererPlugin?: boolean;

  plugin: PluginInterface;
  parent: RendererInfo;
  id: string;
  order: number;
}

export type BasicSubRenderInfo = Omit<
  SubRendererInfo,
  'plugin' | 'parent' | 'id' | 'order'
> &
  Partial<Pick<SubRendererInfo, 'order'>>;

export interface ToolbarItem {
  label?: string;
  id?: string;
  order: number;
  level?: 'primary' | 'secondary' | 'special';
  className?: string;
  draggable?: boolean;
  onDragStart?: (e: any) => void;
  icon?: string;
  iconSvg?: string;
  onClick?: (e: any) => void;
  tooltip?: string;
  placement?: 'top' | 'bottom' | 'right' | 'left';
}

export type BasicToolbarItem = Partial<ToolbarItem>;

export type ContextMenuItem = MenuItem | MenuDivider;

export interface PanelProps {
  id?: string;
  info?: RendererInfo;
  path?: string;
  node?: EditorNodeType;
  value: BaseSchema;
  onChange: (value: BaseSchema, diff?: Array<DiffChange>) => void;
  store: EditorStoreType;
  manager: EditorManager;
  popOverContainer?: () => HTMLElement | void;
  readonly?: boolean;
}

export interface PanelItem {
  nodeId?: string;
  key: string;
  icon: string;
  pluginIcon?: string;
  title: string | JSX.Element;
  component?: React.ComponentType<PanelProps | any>;
  order: number;
  position?: 'left' | 'right';
  render?: (props: PanelProps) => JSX.Element;
  menus?: Array<any>;
}

export type BasicPanelItem = Omit<PanelItem, 'order'> &
  Partial<Pick<PanelItem, 'order'>>;

export interface EventContext {
  data?: any;
  [propName: string]: any;
}

export interface BaseEventContext extends EventContext {
  node: EditorNodeType;
  id: string;
  info: RendererInfo;
  path: string;
  schema: any;
  schemaPath: string;
  secondFactor?: boolean;
}

export interface RendererInfoResolveEventContext extends EventContext {
  renderer: RendererConfig;
  path: string;
  schema: any;
  schemaPath: string;
  data?: RendererInfo;
}

export interface RendererJSONSchemaResolveEventContext
  extends BaseEventContext {
  data: string;
}

export interface IGlobalEvent {
  label: string;
  name: string;
  description: string;
  mapping: Array<{
    key: string;
    type: string;
  }>;
}

export interface ContextMenuEventContext extends BaseEventContext {
  region: string;
  selections: Array<BaseEventContext>;
  data: Array<ContextMenuItem>;
}

export interface SelectionEventContext extends BaseEventContext {
  selections: Array<BaseEventContext>;
  data: Array<string>;
}

export interface RendererEventContext extends BaseEventContext {
  region?: string;
}

export interface ActiveEventContext extends Partial<BaseEventContext> {
  active?: boolean;
}

export interface DeleteEventContext extends BaseEventContext {
  data?: Array<string>;
}

export interface InsertEventContext extends BaseEventContext {
  region: string;
  beforeId?: string;
  index: number;
  data: any;
  subRenderer?: SubRendererInfo | RendererInfo;
  dragInfo?: {
    id: string;
    type: string;
    data: any;
    position?: string;
  };
}

export interface ReplaceEventContext extends BaseEventContext {
  data: any;
  subRenderer?: SubRendererInfo | RendererInfo;
  region?: string;
}

export interface MoveEventContext extends BaseEventContext {
  region: string;
  sourceId: string;
  beforeId?: string;
  direction?: 'up' | 'down';
}

export interface ChangeEventContext extends BaseEventContext {
  value: any;
  readonly diff: Array<DiffChange>;
}

export interface DragEventContext extends EventContext {
  mode: 'move' | 'copy';
  sourceType: 'schema' | 'subrenderer' | string;
  sourceId: string;
  data: any;

  targetId?: string;
  targetRegion?: string;
}

export interface BuildPanelEventContext extends BaseEventContext {
  data: Array<BasicPanelItem>;
  selections: Array<BaseEventContext>;
}

export interface PreventClickEventContext extends EventContext {
  data: MouseEvent;
}

export interface ResizeMoveEventContext extends EventContext {
  data: Object;
  nativeEvent: MouseEvent;
  dom: HTMLElement;
  resizer: HTMLElement;
  node: EditorNodeType;
  store: EditorStoreType;
}

export interface AfterBuildPanelBody extends EventContext {
  data: SchemaCollection;
  plugin: BasePlugin;
  context: BaseEventContext;
}

export type PluginEvent<T, P = any> = {
  context: T;
  type: string;
  preventDefault: () => void;
  stopPropagation: () => void;
  setData: (data: P) => void;

  prevented?: boolean;
  stoped?: boolean;

  pending?: Promise<any>;

  data?: P;

  value?: any;
};

export type PluginEventFn = (e: PluginEvent<EventContext>) => any;

export function createEvent<T extends EventContext>(
  type: string,
  context: T
): PluginEvent<T> {
  const event = {
    context,
    type,
    prevented: false,
    stoped: false,
    preventDefault() {
      event.prevented = true;
    },
    stopPropagation() {
      event.stoped = true;
    },
    get data() {
      return event.context.data;
    },
    setData(data: any) {
      event.context.data = data;
    }
  };

  return event;
}
export interface PluginEventListener {
  onInit?: (
    event: PluginEvent<
      EventContext & {
        data: EditorManager;
      }
    >
  ) => void;

  onActive?: (event: PluginEvent<ActiveEventContext>) => void;

  beforeInsert?: (event: PluginEvent<InsertEventContext>) => false | void;
  afterInsert?: (event: PluginEvent<InsertEventContext>) => void;

  beforeUpdate?: (event: PluginEvent<ChangeEventContext>) => false | void;
  afterUpdate?: (event: PluginEvent<ChangeEventContext>) => void;

  beforeReplace?: (event: PluginEvent<ReplaceEventContext>) => false | void;
  afterReplace?: (event: PluginEvent<ReplaceEventContext>) => void;

  beforeMove?: (event: PluginEvent<MoveEventContext>) => false | void;
  afterMove?: (event: PluginEvent<MoveEventContext>) => void;

  beforeDelete?: (event: PluginEvent<DeleteEventContext>) => false | void;
  afterDelete?: (event: PluginEvent<DeleteEventContext>) => void;

  beforeResolveEditorInfo?: (
    event: PluginEvent<RendererInfoResolveEventContext>
  ) => false | void;
  afterResolveEditorInfo?: (
    event: PluginEvent<RendererInfoResolveEventContext>
  ) => void;

  beforeResolveJsonSchema?: (
    event: PluginEvent<RendererJSONSchemaResolveEventContext>
  ) => false | void;
  afterResolveJsonSchema?: (
    event: PluginEvent<RendererJSONSchemaResolveEventContext>
  ) => void;

  onDndAccept?: (event: PluginEvent<DragEventContext>) => false | void;

  onBuildPanels?: (event: PluginEvent<BuildPanelEventContext>) => void;

  onBuildContextMenus?: (event: PluginEvent<ContextMenuEventContext>) => void;

  onBuildToolbars?: (event: PluginEvent<BaseEventContext>) => void;

  onSelectionChange?: (event: PluginEvent<SelectionEventContext>) => void;

  onPreventClick?: (
    event: PluginEvent<PreventClickEventContext>
  ) => false | void;

  onWidthChangeStart?: (
    event: PluginEvent<
      ResizeMoveEventContext,
      {
        onMove(e: MouseEvent): void;
        onEnd(e: MouseEvent): void;
      }
    >
  ) => void;

  onHeightChangeStart?: (
    event: PluginEvent<
      ResizeMoveEventContext,
      {
        onMove(e: MouseEvent): void;
        onEnd(e: MouseEvent): void;
      }
    >
  ) => void;

  onSizeChangeStart?: (
    event: PluginEvent<
      ResizeMoveEventContext,
      {
        onMove(e: MouseEvent): void;
        onEnd(e: MouseEvent): void;
      }
    >
  ) => void;
}

export interface PluginInterface
  extends Partial<BasicRendererInfo>,
    Partial<BasicSubRenderInfo>,
    PluginEventListener {
  readonly manager: EditorManager;

  order?: number;

  scene?: Array<string>;

  withDataSource?: boolean;

  rendererName?: string;

  panelIcon?: string;
  panelTitle?: string;

  disabledRendererPlugin?: boolean;

  panelControls?: Array<any>;
  panelBody?: Array<any>;
  panelDefinitions?: any;
  panelApi?: any;
  panelSubmitOnChange?: boolean;

  notRenderFormZone?: boolean;

  events?: RendererPluginEvent[] | ((schema: any) => RendererPluginEvent[]);

  actions?: RendererPluginAction[];

  panelJustify?: boolean;

  async?: AsyncLayerOptions;

  dragMode?: string;

  getAvailableContextFields?: (
    scopeNode: EditorNodeType,

    target: EditorNodeType,

    region?: EditorNodeType
  ) => Promise<SchemaCollection | void>;

  panelFormPipeOut?: (value: any, oldValue: any) => any;

  panelControlsCreator?: (context: BaseEventContext) => Array<any>;
  panelBodyCreator?: (context: BaseEventContext) => SchemaCollection;

  panelBodyAsyncCreator?: (
    context: BaseEventContext
  ) => Promise<SchemaCollection>;

  popOverBody?: Array<any>;
  popOverBodyCreator?: (context: BaseEventContext) => Array<any>;

  getRendererInfo?: (
    context: RendererInfoResolveEventContext
  ) => BasicRendererInfo | void;

  buildJSONSchema?: (
    context: RendererJSONSchemaResolveEventContext
  ) => void | string;

  buildEditorToolbar?: (
    context: BaseEventContext,
    toolbars: Array<BasicToolbarItem>
  ) => void;

  buildEditorContextMenu?: (
    context: ContextMenuEventContext,
    menus: Array<ContextMenuItem>
  ) => void;

  buildEditorPanel?: (
    context: BuildPanelEventContext,
    panels: Array<BasicPanelItem>
  ) => void;

  buildSubRenderers?: (
    context: RendererEventContext,
    subRenderers: Array<SubRendererInfo>,
    renderers: Array<RendererConfig>
  ) =>
    | BasicSubRenderInfo
    | Array<BasicSubRenderInfo>
    | void
    | Promise<BasicSubRenderInfo | Array<BasicSubRenderInfo> | void>;

  asyncUpdateCustomSubRenderersInfo?: (
    context: RendererEventContext,
    subRenderers: Array<SubRendererInfo>,
    renderers: Array<RendererConfig>
  ) => void;

  markDom?: (dom: HTMLElement | Array<HTMLElement>, props: any) => void;

  buildDataSchemas?: (
    node: EditorNodeType,
    region?: EditorNodeType,
    trigger?: EditorNodeType,
    parent?: EditorNodeType
  ) => any | Promise<any>;

  rendererBeforeDispatchEvent?: (
    node: EditorNodeType,
    e: any,
    data: any
  ) => void;

  patchSchema?: (
    schema: Schema,
    renderer: RendererConfig,
    props?: any
  ) => Schema | void;

  dispose?: () => void;

  componentRef?: (node: EditorNodeType, ref: any) => void;
}

export interface RendererPluginEvent {
  eventName: string;
  eventLabel: string;
  description?: string;
  defaultShow?: boolean;
  isBroadcast?: boolean;
  owner?: string;
  dataSchema?: any[] | ((manager: EditorManager) => any[]);
  strongDesc?: string;
}

export interface RendererPluginAction {
  actionType?: string;
  actionLabel?: string;
  description?: string;
  schema?: any;
  supportComponents?: string[] | string;
  innerArgs?: string[];
  descDetail?: (info: any, context: any, props: any) => string | JSX.Element;
  outputVarDataSchema?: any | any[];
  actions?: SubRendererPluginAction[];
  children?: RendererPluginAction[];
}

export interface SubRendererPluginAction
  extends Pick<
    RendererPluginAction,
    'actionType' | 'innerArgs' | 'descDetail'
  > {}

export interface PluginEvents {
  [propName: string]:
    | RendererPluginEvent[]
    | ((schema: any) => RendererPluginEvent[]);
}

export interface PluginActions {
  [propName: string]: RendererPluginAction[];
}

export abstract class BasePlugin implements PluginInterface {
  constructor(readonly manager: EditorManager) {}

  static scene = ['global'];

  name?: string;
  rendererName?: string;

  getRendererInfo({
    renderer,
    schema
  }: RendererInfoResolveEventContext): BasicRendererInfo | void {
    const plugin: PluginInterface = this;

    if (
      schema.$$id &&
      plugin.name &&
      plugin.rendererName &&
      plugin.rendererName === renderer.name
    ) {
      let curPluginName = plugin.name;
      if (schema?.isFreeContainer) {
        curPluginName = '自由容器';
      } else if (schema?.isSorptionContainer) {
        curPluginName = '吸附容器';
      }

      return {
        name: curPluginName,
        regions: plugin.regions,
        patchContainers: plugin.patchContainers,

        vRendererConfig: plugin.vRendererConfig,
        wrapperProps: plugin.wrapperProps,
        wrapperResolve: plugin.wrapperResolve,
        filterProps: plugin.filterProps,
        $schema: plugin.$schema,
        renderRenderer: plugin.renderRenderer,
        multifactor: plugin.multifactor,
        scaffoldForm: plugin.scaffoldForm,
        disabledRendererPlugin: plugin.disabledRendererPlugin,
        isBaseComponent: plugin.isBaseComponent,
        isListComponent: plugin.isListComponent,
        rendererName: plugin.rendererName,
        memberImmutable: plugin.memberImmutable,
        getSubEditorVariable: plugin.getSubEditorVariable
      };
    }
  }

  buildEditorPanel(
    context: BuildPanelEventContext,
    panels: Array<BasicPanelItem>
  ) {
    const plugin: PluginInterface = this;
    const store = this.manager.store;

    if (!store.activeId || context.selections.length) {
      return;
    }

    if (
      !context.info.hostId &&
      (plugin.panelControls ||
        plugin.panelControlsCreator ||
        plugin.panelBody ||
        plugin.panelBodyCreator ||
        plugin.panelBodyAsyncCreator) &&
      context.info.plugin === this
    ) {
      const enableAsync = !!(
        plugin.panelBodyAsyncCreator &&
        typeof plugin.panelBodyAsyncCreator === 'function'
      );
      const body = plugin.panelBodyAsyncCreator
        ? plugin.panelBodyAsyncCreator(context)
        : plugin.panelBodyCreator
        ? plugin.panelBodyCreator(context)
        : plugin.panelBody!;

      this.manager.trigger('after-build-panel-body', {
        context,
        data: body,
        plugin
      });

      const baseProps = {
        definitions: plugin.panelDefinitions,
        submitOnChange: plugin.panelSubmitOnChange,
        api: plugin.panelApi,
        controls: plugin.panelControlsCreator
          ? plugin.panelControlsCreator(context)
          : plugin.panelControls!,
        justify: plugin.panelJustify,
        panelById: store.activeId,
        pipeOut: plugin.panelFormPipeOut?.bind?.(plugin)
      };

      panels.push({
        key: 'config',
        icon: plugin.panelIcon || plugin.icon || 'fa fa-cog',
        pluginIcon: plugin.pluginIcon,
        title: plugin.panelTitle || '设置',
        render: enableAsync
          ? makeAsyncLayer(async () => {
              const panelBody = await (body as Promise<SchemaCollection>);

              return this.manager.makeSchemaFormRender({
                ...baseProps,
                body: panelBody
              } as any);
            }, omit(plugin.async, 'enable'))
          : this.manager.makeSchemaFormRender({
              ...baseProps,
              body: body as SchemaCollection
            } as any)
      });
    } else if (
      context.info.plugin === this &&
      context.info.hostId &&
      (plugin.vRendererConfig?.panelControls ||
        plugin.vRendererConfig?.panelControlsCreator ||
        plugin.vRendererConfig?.panelBody ||
        plugin.vRendererConfig?.panelBodyCreator)
    ) {
      panels.push({
        key: context.info.multifactor ? 'vconfig' : 'config',
        icon: plugin.vRendererConfig.panelIcon || 'fa fa-cog',
        title: plugin.vRendererConfig.panelTitle || '设置',
        render: this.manager.makeSchemaFormRender({
          submitOnChange: plugin.panelSubmitOnChange,
          api: plugin.panelApi,
          definitions: plugin.vRendererConfig.panelDefinitions,
          controls: plugin.vRendererConfig.panelControlsCreator
            ? plugin.vRendererConfig.panelControlsCreator(context)
            : plugin.vRendererConfig.panelControls!,
          body: plugin.vRendererConfig.panelBodyCreator
            ? plugin.vRendererConfig.panelBodyCreator(context)
            : plugin.vRendererConfig.panelBody!,
          justify: plugin.vRendererConfig.panelJustify,
          panelById: store.activeId
        })
      });
    }

    if (context.info.plugin === this && context.info.multifactor) {
      const sameIdChild: EditorNodeType = context.node.sameIdChild;

      if (sameIdChild) {
        const subPanels = this.manager.collectPanels(sameIdChild, false, true);
        subPanels.forEach(panel => {
          if (panel.key === 'config' || panel.key === 'vconfig') {
            panels.push({
              ...panel,
              key: `sub-${panel.key}`,
              icon: sameIdChild.info?.plugin?.icon || panel.icon
            });
          }
        });
      }
    }
  }

  buildSubRenderers(
    context: RendererEventContext,
    subRenderers: Array<SubRendererInfo>,
    renderers: Array<RendererConfig>
  ): BasicSubRenderInfo | Array<BasicSubRenderInfo> | void {
    const plugin: PluginInterface = this;

    if (Array.isArray(plugin.scaffolds)) {
      return plugin.scaffolds.map(scaffold => ({
        name: (scaffold.name ?? plugin.name)!,
        icon: scaffold.icon ?? plugin.icon,
        pluginIcon: plugin.pluginIcon,
        description: scaffold.description ?? plugin.description,
        previewSchema: scaffold.previewSchema ?? plugin.previewSchema,
        tags: scaffold.tags ?? plugin.tags,
        docLink: scaffold.docLink ?? plugin.docLink,
        type: scaffold.type ?? plugin.type,
        scaffold: scaffold.scaffold ?? plugin.scaffold,
        scaffoldForm: plugin.scaffoldForm,
        disabledRendererPlugin: plugin.disabledRendererPlugin,
        isBaseComponent: plugin.isBaseComponent,
        rendererName: plugin.rendererName
      }));
    } else if (plugin.name && plugin.description) {
      return {
        searchKeywords: plugin.searchKeywords,
        name: plugin.name,
        icon: plugin.icon,
        description: plugin.description,
        previewSchema: plugin.previewSchema,
        tags: plugin.tags,
        docLink: plugin.docLink,
        type: plugin.type,
        scaffold: plugin.scaffold,
        scaffoldForm: plugin.scaffoldForm,
        disabledRendererPlugin: plugin.disabledRendererPlugin,
        isBaseComponent: plugin.isBaseComponent,
        pluginIcon: plugin.pluginIcon,
        rendererName: plugin.rendererName
      };
    }
  }

  renderPlaceholder(text: string, key?: any, style?: any) {
    return React.createElement('div', {
      key,
      className: 'wrapper-sm b-a b-light m-b-sm',
      style: style,
      children: React.createElement('span', {
        className: 'text-muted',
        children: text
      })
    });
  }

  getPlugin(rendererNameOrKlass: string | typeof BasePlugin) {
    return find(this.manager.plugins, plugin =>
      typeof rendererNameOrKlass === 'string'
        ? plugin.rendererName === rendererNameOrKlass
        : plugin instanceof rendererNameOrKlass
    );
  }

  buildDataSchemas(
    node: EditorNodeType,
    region?: EditorNodeType,
    trigger?: EditorNodeType,
    parent?: EditorNodeType
  ) {
    return {
      type: 'string',
      rawType: RAW_TYPE_MAP[node.schema.type as SchemaType] || 'string',
      title:
        typeof node.schema.label === 'string'
          ? node.schema.label
          : node.schema.name,
      originalValue: node.schema.value
    } as any;
  }

  getKeyAndName() {
    return {
      key: this.rendererName,
      name: this.name
    };
  }
}

export class LayoutBasePlugin extends BasePlugin {
  onActive(event: PluginEvent<ActiveEventContext>) {
    const context = event.context;

    if (context.info?.plugin !== this || !context.node) {
      return;
    }

    const node = context.node!;
    const curSchema = node.schema || {};

    if (curSchema.isFixedWidth) {
      node.setWidthMutable(true);
    }
    if (curSchema.isFixedHeight) {
      node.setHeightMutable(true);
    }
  }

  onWidthChangeStart(
    event: PluginEvent<
      ResizeMoveEventContext,
      {
        onMove(e: MouseEvent): void;
        onEnd(e: MouseEvent): void;
      }
    >
  ) {
    return this.onSizeChangeStart(event, 'horizontal');
  }

  onHeightChangeStart(
    event: PluginEvent<
      ResizeMoveEventContext,
      {
        onMove(e: MouseEvent): void;
        onEnd(e: MouseEvent): void;
      }
    >
  ) {
    return this.onSizeChangeStart(event, 'vertical');
  }

  onSizeChangeStart(
    event: PluginEvent<
      ResizeMoveEventContext,
      {
        onMove(e: MouseEvent): void;
        onEnd(e: MouseEvent): void;
      }
    >,
    direction: 'both' | 'vertical' | 'horizontal' = 'both'
  ) {
    const context = event.context;
    const node = context.node;
    const store = context.store;
    if (node.info?.plugin !== this) {
      return;
    }

    const resizer = context.resizer;
    const dom = context.dom;
    const doc = store.getDoc() || document;
    const frameRect = dom.parentElement!.getBoundingClientRect();
    const rect = dom.getBoundingClientRect();
    const startX = context.nativeEvent.pageX;
    const startY = context.nativeEvent.pageY;

    event.setData({
      onMove: (e: MouseEvent) => {
        const dy = e.pageY - startY;
        const dx = e.pageX - startX;
        const height = Math.max(50, rect.height + dy);
        const width = Math.max(100, Math.min(rect.width + dx, frameRect.width));
        const state: any = {
          width,
          height
        };

        const dragHlBoxItem = doc.querySelector(
          `[data-hlbox-id='${node.id}']`
        ) as HTMLElement;

        const dragContainerItem = doc.querySelector(
          `[data-editor-id='${node.id}']`
        ) as HTMLElement;

        if (direction === 'both') {
          resizer.setAttribute('data-value', `${width}px x ${height}px`);
          dragHlBoxItem.style.height = `${height}px`;
          dragHlBoxItem.style.width = `${width}px`;
          dragContainerItem.style.height = `${height}px`;
          dragContainerItem.style.width = `${width}px`;
        } else if (direction === 'vertical') {
          resizer.setAttribute('data-value', `${height}px`);
          dragHlBoxItem.style.height = `${height}px`;
          dragContainerItem.style.height = `${height}px`;
          delete state.width;
        } else {
          resizer.setAttribute('data-value', `${width}px`);
          dragHlBoxItem.style.width = `${width}px`;
          dragContainerItem.style.width = `${width}px`;
          delete state.height;
        }

        node.updateState(state);

        requestAnimationFrame(() => {
          node.calculateHighlightBox();
        });
      },
      onEnd: (e: MouseEvent) => {
        const dy = e.pageY - startY;
        const dx = e.pageX - startX;
        const height = Math.max(50, rect.height + dy);
        const width = Math.max(100, Math.min(rect.width + dx, frameRect.width));
        const state: any = {
          width,
          height
        };

        if (direction === 'vertical') {
          delete state.width;
        } else if (direction === 'horizontal') {
          delete state.height;
        }

        resizer.removeAttribute('data-value');
        node.updateSchemaStyle(state);
        requestAnimationFrame(() => {
          node.calculateHighlightBox();
        });
      }
    });
  }
}
