
import {reaction} from 'mobx';
import {isAlive} from 'mobx-state-tree';
import {parse, stringify} from 'json-ast-comments';
import debounce from 'lodash/debounce';
import findIndex from 'lodash/findIndex';
import omit from 'lodash/omit';
import {openContextMenus, toast, alert, DataScope, DataSchema} from 'amis';
import {getRenderers, RenderOptions, JSONTraverse} from 'amis-core';
import {
  PluginInterface,
  BasicPanelItem,
  RendererInfo,
  SubRendererInfo,
  BaseEventContext,
  createEvent,
  InsertEventContext,
  PluginEvent,
  BasicToolbarItem,
  RegionConfig,
  ContextMenuItem,
  ContextMenuEventContext,
  ChangeEventContext,
  ReplaceEventContext,
  RendererInfoResolveEventContext,
  EventContext,
  PluginEventFn,
  MoveEventContext,
  RendererJSONSchemaResolveEventContext,
  ScaffoldForm,
  SelectionEventContext,
  BuildPanelEventContext,
  DeleteEventContext,
  RendererPluginEvent,
  PluginEvents,
  PluginActions,
  BasePlugin
} from './plugin';
import {
  EditorStoreType,
  PopOverFormContext,
  SubEditorContext
} from './store/editor';
import {
  autobind,
  camelize,
  guid,
  reactionWithOldValue,
  reGenerateID,
  JsonGenerateID,
  isString,
  isObject,
  isLayoutPlugin,
  JSONPipeOut,
  scrollToActive,
  JSONPipeIn,
  generateNodeId,
  JSONGetNodesById
} from './util';
import {hackIn, makeSchemaFormRender, makeWrapper} from './component/factory';
import {env} from './env';
import {EditorNodeType} from './store/node';
import {EditorProps} from './component/Editor';
import {EditorDNDManager} from './dnd';
import {VariableManager} from './variable';

import type {IScopedContext} from 'amis';
import type {SchemaObject, SchemaCollection} from 'amis';
import type {RendererConfig} from 'amis-core';
import {loadAsyncRenderer} from 'amis-core';

export interface EditorManagerConfig
  extends Omit<EditorProps, 'value' | 'onChange'> {}

export interface PluginClass {
  new (manager: EditorManager, options?: any): PluginInterface;
  id?: string;

  priority?: number;
  scene?: Array<string>;
}

const builtInPlugins: Array<
  PluginClass | [PluginClass, Record<string, any> | (() => Record<string, any>)]
> = [];

declare const window: Window & {AMISEditorCustomPlugins: any};


export function autoPreRegisterEditorCustomPlugins() {
  if (window.AMISEditorCustomPlugins) {
    Object.keys(window.AMISEditorCustomPlugins).forEach(pluginName => {
      const curEditorPlugin = window.AMISEditorCustomPlugins[pluginName];
      if (curEditorPlugin) {
        registerEditorPlugin(curEditorPlugin);
      }
    });
  }
}


export function registerEditorPlugin(klass: PluginClass) {

  const scene = Array.from(new Set(['global'].concat(klass.scene || 'global')));
  klass.scene = scene;

  let exsitedPluginIdx: any = null;
  if (klass.prototype && klass.prototype.isNpmCustomWidget) {
    exsitedPluginIdx = builtInPlugins.findIndex(item =>
      Array.isArray(item)
        ? item[0].prototype.name === klass.prototype.name
        : item.prototype.name === klass.prototype.name
    );
  } else {

    exsitedPluginIdx = builtInPlugins.findIndex(item => item === klass);
  }


  if (!~exsitedPluginIdx) {
    klass.id = klass.id || klass.name || guid();
  }


  if (klass.priority == null || !Number.isInteger(klass.priority)) {
    if (!~exsitedPluginIdx) {
      builtInPlugins.push(klass);
    } else {
      console.warn(`注册插件「${klass.id}」异常，已存在同名插件：`, klass);
    }
  } else {
    exsitedPluginIdx = ~exsitedPluginIdx
      ? exsitedPluginIdx
      : builtInPlugins.findIndex(
          item =>
            !Array.isArray(item) &&
            item.id === klass.id &&
            item?.prototype instanceof BasePlugin
        );

    if (!~exsitedPluginIdx) {
      builtInPlugins.push(klass);
    } else {
      const current = builtInPlugins[exsitedPluginIdx] as PluginClass;


      const currentPriority =
        current.priority && Number.isInteger(current.priority)
          ? current.priority
          : 0;

      if (klass.priority > currentPriority) {
        builtInPlugins.splice(exsitedPluginIdx, 1, klass);
      } else {
        console.warn(`注册插件「${klass.id}」异常，已存在同名插件：`, klass);
      }
    }
  }
}


export function getEditorPlugins(options: any = {}) {
  const {scene = 'global'} = options;
  return builtInPlugins.filter(item =>
    (Array.isArray(item) ? item[0] : item).scene?.includes(scene)
  );
}


export function unRegisterEditorPlugin(id: string) {
  const idx = findIndex(builtInPlugins, item =>
    Array.isArray(item) ? item[0].id === id : item.id === id
  );
  ~idx && builtInPlugins.splice(idx, 1);
}


export class EditorManager {
  readonly plugins: Array<PluginInterface>;
  readonly env: RenderOptions;
  toDispose: Array<() => void> = [];
  readonly dnd: EditorDNDManager;
  readonly id = guid();
  disableHover = false;


  private clipboardData: string;
  readonly hackIn: any;


  readonly broadcasts: RendererPluginEvent[] = [];

  readonly pluginEvents: PluginEvents = {};

  readonly pluginActions: PluginActions = {};

  dataSchema: DataSchema;


  readonly variableManager;

  constructor(
    readonly config: EditorManagerConfig,
    readonly store: EditorStoreType,
    readonly parent?: EditorManager
  ) {

    this.env = {
      ...env,
      ...omit(config.amisEnv, 'replaceText'),
      theme: config.theme
    };
    this.env.beforeDispatchEvent = this.beforeDispatchEvent.bind(
      this,
      this.env.beforeDispatchEvent
    );
    this.hackIn = hackIn;

    autoPreRegisterEditorCustomPlugins();


    const externalPlugins = (config?.plugins || []).forEach(external => {
      if (
        Array.isArray(external) ||
        !external.priority ||
        !Number.isInteger(external.priority)
      ) {
        return;
      }

      const idx = builtInPlugins.findIndex(
        builtIn =>
          !Array.isArray(builtIn) &&
          !Array.isArray(external) &&
          builtIn.id === external.id &&
          builtIn?.prototype instanceof BasePlugin
      );

      if (~idx) {
        const current = builtInPlugins[idx] as PluginClass;
        const currentPriority =
          current.priority && Number.isInteger(current.priority)
            ? current.priority
            : 0;

        if (external.priority > currentPriority) {
          builtInPlugins.splice(idx, 1);
        }
      }
    });

    this.plugins = (config.disableBultinPlugin ? [] : builtInPlugins)
      .concat(this.normalizeScene(config?.plugins))
      .filter(p => {
        p = Array.isArray(p) ? p[0] : p;
        return config.disablePluginList
          ? typeof config.disablePluginList === 'function'
            ? !config.disablePluginList(p.id || '', p)
            : !config.disablePluginList.includes(p.id || 'unkown')
          : true;
      })
      .map(Editor => {
        let pluginOptions: Record<string, any> = {};
        if (Array.isArray(Editor)) {
          pluginOptions =
            typeof Editor[1] === 'function' ? Editor[1]() : Editor[1];
          Editor = Editor[0];
        }

        const plugin = new Editor(this, pluginOptions);
        plugin.order = plugin.order ?? 0;


        if (plugin.rendererName) {
          this.pluginEvents[plugin.rendererName] = plugin.events || [];
          this.pluginActions[plugin.rendererName] = plugin.actions || [];
        }

        return plugin;
      })
      .sort((a, b) => a.order! - b.order!);
    this.hackRenderers();
    this.dnd = new EditorDNDManager(this, store);
    this.dataSchema = new DataSchema(config.schemas || []);


    this.variableManager = new VariableManager(
      this.dataSchema,
      config?.variables,
      config?.variableOptions
    );

    this.toDispose.push(




      reactionWithOldValue(
        () => store.activeId,
        async (id, oldValue) => {

          this.store.insertId && this.store.closeInsertPanel();
          this.buildJSONSchemaUri();
          this.buildToolbars();
          await this.buildRenderers();
          this.buildPanels();
          scrollToActive(`[data-node-id="${id}"]`);

          this.trigger(
            'active',
            id
              ? ({
                  ...this.buildEventContext(id),
                  active: true
                } as any)
              : {
                  id: oldValue,
                  active: false
                }
          );
        }
      ),


      reaction(
        () => store.selections.join(','),
        () => {
          this.buildPanels();
        }
      ),


      reaction(
        () => store.needPatch,
        result => {
          result && this.lazyPatchSchema();
        }
      ),


      reactionWithOldValue(
        () => ({id: store.hoverId, region: store.hoverRegion}),
        (value, oldValue) => {
          const doc = store.getDoc();
          if (value.id && value.region) {
            doc
              .querySelector(
                `[data-region="${value.region}"][data-region-host="${value.id}"]`
              )
              ?.classList.add('is-region-active');
          } else if (oldValue?.id && oldValue?.region) {
            doc
              .querySelector(
                `[data-region="${oldValue.region}"][data-region-host="${oldValue.id}"]`
              )
              ?.classList.remove('is-region-active');
          }
        }
      )
    );
  }

  normalizeScene(
    plugins?: Array<
      | PluginClass
      | [PluginClass, Record<string, any> | (() => Record<string, any>)]
    >
  ): (
    | PluginClass
    | [PluginClass, Record<string, any> | (() => Record<string, any>)]
  )[] {
    return (
      plugins?.map(klass => {
        let options;
        if (Array.isArray(klass)) {
          options = klass[1];
          klass = klass[0];
        }


        const scene = Array.from(
          new Set(['global'].concat(klass.scene || 'global'))
        );
        klass.scene = scene;
        return options ? [klass, options] : klass;
      }) || []
    );
  }


  dynamicAddPlugin(pluginName: string) {
    if (!pluginName) {
      return;
    }

    if (
      this.plugins.some((plugin: any) => plugin && plugin.name === pluginName)
    ) {
      console.warn(`[amis-editor]当前已有${pluginName}插件`);
      return;
    }
    let newPluginClass: any = builtInPlugins.find(
      (Plugin: any) => Plugin.prototype && Plugin.prototype.name === pluginName
    );

    if (!newPluginClass && window.AMISEditorCustomPlugins) {
      newPluginClass = window.AMISEditorCustomPlugins[pluginName];
    }
    if (newPluginClass) {
      const newPlugin = new newPluginClass(this);
      newPlugin.order = newPlugin.order ?? 0;
      this.plugins.push(newPlugin);

      this.plugins.sort((a, b) => a.order! - b.order!);


      if (newPlugin.rendererName) {
        this.pluginEvents[newPlugin.rendererName] = newPlugin.events || [];
        this.pluginActions[newPlugin.rendererName] = newPlugin.actions || [];
      }

      this.buildRenderers();
    }
  }


  buildRenderersAndPanels() {
    setTimeout(async () => {
      const {store} = this;
      if (!store.activeId && store?.schema?.$$id) {

        await this.buildRenderers();
        this.buildPanels(store.schema.$$id);
      }
    }, 200);
  }


  buildEventContext(idOrNode: string | EditorNodeType) {
    const node =
      typeof idOrNode === 'string'
        ? this.store.getNodeById(idOrNode)!
        : idOrNode;
    const schema = this.store.getSchema(node.id);
    return {
      node,
      id: node.id,
      info: node.info!,
      path: node.path,
      schemaPath: node.schemaPath,
      schema,
      data: ''
    };
  }


  buildJSONSchemaUri() {
    const id = this.store.activeId;
    let jsonschemaUri = '';

    if (id) {
      const context: RendererJSONSchemaResolveEventContext =
        this.buildEventContext(id);

      const event = this.trigger('before-resolve-json-schema', context);
      jsonschemaUri = event.context.data;
      if (!event.prevented) {
        this.plugins.forEach(editor => {
          if (jsonschemaUri) {
            return;
          }

          const result = editor.buildJSONSchema?.(context);

          if (result) {
            jsonschemaUri = result;
          }
        });

        context.data = jsonschemaUri;
        const event = this.trigger('after-resolve-json-schema', context);
        jsonschemaUri = event.data;
      }
    }

    this.store.setJSONSchemaUri(jsonschemaUri);
  }

  buildToolbars() {
    const id = this.store.activeId;
    const toolbars: Array<BasicToolbarItem> = [];

    if (id) {
      const commonContext = this.buildEventContext(id);
      this.plugins.forEach(editor => {
        const context: BaseEventContext = {
          ...commonContext
        };
        editor.buildEditorToolbar?.(context, toolbars);
      });

      this.trigger('build-toolbars', {
        ...commonContext,
        data: toolbars
      });
    }

    this.store.setActiveToolbars(
      toolbars.map(item => ({
        ...item,
        order: item.order || 0,
        id: guid()
      }))
    );
  }

  collectPanels(
    node: EditorNodeType,
    triggerEvent = false,
    secondFactor = false
  ) {
    let panels: Array<BasicPanelItem> = [];

    if (node) {
      const context: BuildPanelEventContext = {
        ...this.buildEventContext(node),
        secondFactor,
        data: panels,
        selections: this.store.selections.map(item =>
          this.buildEventContext(item)
        )
      };


      this.plugins.forEach(editor => {
        editor.buildEditorPanel?.(context, panels);
      });

      triggerEvent && this.trigger('build-panels', context);
      panels = context.data || panels;
      if (context.changeLeftPanelKey) {

        this.store.changeLeftPanelKey(context.changeLeftPanelKey);
      }
    }

    return panels;
  }

  buildPanels(curRendererId?: string) {
    let id = curRendererId || this.store.activeId;
    let panels: Array<BasicPanelItem> = [];

    if (!id && this.store?.filteredSchema) {
      id = this.store?.filteredSchema.$$id;
    }

    if (id || this.store.selections.length) {
      id = id || this.store.selections[0];
      const node = this.store.getNodeById(id);
      panels = node ? this.collectPanels(node, true) : panels;
    }

    this.store.setPanels(
      panels.map(item => ({
        ...item,
        order: item.order || 0
      }))
    );
  }

  async collectRenderers(
    region?: string,
    activeContainerId: string = this.store.activeContainerId
  ) {
    const subRenderers: Array<SubRendererInfo> = [];

    let id = activeContainerId;

    if (!id && this.store?.schema) {
      id = this.store?.schema.$$id;
    }

    if (!id) {
      return subRenderers;
    }

    const node = this.store.getNodeById(id);

    if (!node) {
      return subRenderers;
    }

    const schema = this.store.getSchema(id);
    const contxt = {
      node,
      id: node.id,
      info: node.info!,
      path: node.path,
      schemaPath: node.schemaPath,
      schema,
      region
    };
    let asyncUpdateCompPlugins = [];

    for (let index = 0, size = this.plugins.length; index < size; index++) {
      const pluginItem = this.plugins[index];
      let subRenderer = await pluginItem.buildSubRenderers?.(
        contxt,
        subRenderers,
        getRenderers()
      );
      if (subRenderer) {
        (Array.isArray(subRenderer) ? subRenderer : [subRenderer]).forEach(
          item =>
            subRenderers.push({
              ...item,
              id: guid(),
              plugin: pluginItem,
              parent: node.info!,
              order: item.order || 0
            })
        );
      }

      if (pluginItem.asyncUpdateCustomSubRenderersInfo) {
        asyncUpdateCompPlugins.push(pluginItem);
      }
    }

    if (asyncUpdateCompPlugins.length) {
      for (let i = 0, len = asyncUpdateCompPlugins.length; i < len; i++) {
        const asyncUpdateCompPlugin = asyncUpdateCompPlugins[i];

        await asyncUpdateCompPlugin.asyncUpdateCustomSubRenderersInfo?.(
          contxt,
          subRenderers,
          getRenderers()
        );
      }
    }


    return subRenderers.filter(renderer => !renderer.disabledRendererPlugin);
  }

  async buildRenderers(region?: string) {
    const curRenderers = await this.collectRenderers(region);
    this.store.setSubRenderers(curRenderers);
    this.store.changeSubRendererRegion(region || '');
  }

  async rebuild() {
    await this.buildRenderers();
    this.buildToolbars();
    this.buildPanels();
  }


  updateConfigPanel(pluginType?: string) {
    const {activeId, getSchema, getNodeById} = this.store;
    let curPluginType = pluginType;

    if (!curPluginType && this.store.activeId) {

      const curSchema = getSchema(activeId);
      curPluginType = curSchema.type;
    }

    if (curPluginType && this.store.activeId) {
      const panels = this.store.panels.concat();
      const curNode = getNodeById(activeId);
      if (curPluginType && curNode) {

        const curPlugin = this.plugins.find(
          item => item.rendererName === curPluginType
        );

        panels.splice(
          panels.findIndex(item => item.key === 'config'),
          1
        );

        const context: BuildPanelEventContext = {
          ...this.buildEventContext(curNode),
          data: panels,
          selections: this.store.selections.map(item =>
            this.buildEventContext(item)
          )
        };
        if (curPlugin) {

          curPlugin.buildEditorPanel?.(context, panels);
          this.store.setPanels(
            panels.map(item => ({
              ...item,
              order: item.order || 0
            }))
          );
        }
      }
    }
  }


  switchToRegion(region: string) {
    if (!this.store.activeId) {
      return;
    }
    this.buildRenderers(region);
  }


  async showInsertPanel(
    region: string,
    id: string = this.store.activeId,
    preferTag?: string,
    mode: 'insert' | 'replace' = 'insert',
    originId: string = '',
    beforeId?: string
  ) {
    if (typeof preferTag === 'undefined' && id) {
      const node = this.store.getNodeById(id);
      preferTag = node?.info?.regions?.find(
        child => child.key === region
      )?.preferTag;
    }
    const curRenderers = await this.collectRenderers(region, id);
    this.store.setInsertRenderers(curRenderers);
    this.store.setInsertRegion(region, id, preferTag, mode, originId, beforeId);
  }


  showReplacePanel(id: string, preferTag?: string) {
    const node = this.store.getNodeById(id);
    const region: EditorNodeType = node?.parent;

    if (!node || !region || !region.isRegion || !region.parent) {
      return;
    }

    const host: EditorNodeType = region.parent!;
    this.showInsertPanel(region.region, host.id, preferTag, 'replace', node.id);
  }


  showRendererPanel(tag?: string, msg?: string) {
    this.store.showRendererPanel(tag, msg);
  }

  readonly listeners: Array<{
    type: string;
    fn: PluginEventFn;
  }> = [];

  on(event: string, fn: PluginEventFn) {
    this.listeners.push({
      type: event,
      fn
    });
    return () => this.off(event, fn);
  }

  off(event: string, fn: PluginEventFn) {
    const idx = findIndex(this.listeners, item => {
      return item.type === event && item.fn === fn;
    });

    if (~idx) {
      this.listeners.splice(idx, 1);
    }
  }


  trigger<T extends EventContext>(type: string, context: T): PluginEvent<T> {
    const event = createEvent(type, context);
    const method = camelize(
      /^(?:before|after)/.test(type) ? type : `on-${type}`
    );
    const listeners = this.listeners.filter(item => item.type === type);

    this.plugins.forEach(
      plugin =>
        (plugin as any)[method] &&
        listeners.push({
          type,
          fn: (plugin as any)[method].bind(plugin)
        })
    );

    if ((this.config as any)[method]) {
      listeners.push({
        fn: (this.config as any)[method],
        type
      });
    }

    let promises: Array<Promise<any>> = [];
    listeners.some(listener => {
      const ret = listener.fn.call(null, event);

      if (ret === false) {
        event.preventDefault();
        event.stopPropagation();
      } else if (ret?.then) {
        promises.push(ret);
      } else if (ret !== void 0) {
        event.setData(ret);
      }

      return event.stoped;
    });

    if (promises.length) {
      event.pending = Promise.all(promises);
    }

    return event;
  }


  async addElem(
    rendererIdOrSchema: string | any,
    reGenerateId?: boolean,
    activeChild: boolean = true
  ) {
    if (!rendererIdOrSchema) {
      return;
    }
    let rendererId: string = '';
    let schemaData;

    if (isString(rendererIdOrSchema)) {
      rendererId = rendererIdOrSchema.toString();
    } else if (isObject(rendererIdOrSchema)) {
      schemaData = rendererIdOrSchema;
    }

    const store = this.store;
    let subRenderer;
    let curActiveId = store.activeId;
    let node = store.getNodeById(curActiveId)!;

    if (rendererId) {

      subRenderer = store.getSubRendererById(rendererId);


      const curElemStyle = subRenderer?.scaffold?.style || {};
      if (curElemStyle.position === 'fixed') {
        curActiveId = store.getRootId();
        node = store.getNodeById(curActiveId)!;
      }
    }

    if (!subRenderer && !schemaData) {

      return;
    }

    if (!node) {
      toast.warning('请先选择一个元素作为插入的位置。');
      return;
    }

    const curElemSchema = schemaData || subRenderer?.scaffold;
    const isSpecialLayout = this.isSpecialLayout(curElemSchema);























    const parentNode = node.parent as EditorNodeType;


    let nextId = null;
    let regionNodeId = null;
    let regionNodeRegion = null;

    if (store.activeRegion) {
      regionNodeId = curActiveId;
      regionNodeRegion = store.activeRegion;
    } else if (node.schema.columns && node.type !== 'grid') {

      regionNodeId = curActiveId;
      regionNodeRegion = 'columns';
    } else if (node.schema.items && isLayoutPlugin(node.schema)) {

      regionNodeId = curActiveId;
      regionNodeRegion = 'items';
    } else if (node.schema.body) {

      regionNodeId = curActiveId;
      regionNodeRegion = 'body';
    } else if (parentNode) {

      regionNodeId = parentNode.id;
      regionNodeRegion = parentNode.region;


      if (!parentNode.region && parentNode.schema.body) {

        regionNodeRegion = 'body';
      } else if (!parentNode.region && parentNode.schema.items) {
        regionNodeRegion = 'items';
      } else if (
        !parentNode.region &&
        !parentNode.schema.body &&
        !parentNode.schema.items
      ) {

        toast.warning('当前节点不允许追加新组件。');
        return;
      }

      const parent = store.getSchemaParentById(curActiveId);
      let beforeId = -1;
      parent.some((item: any, index: number) => {
        let result = false;
        if (item?.$$id === curActiveId) {
          beforeId = index;
          result = true;
        }
        return result;
      });
      nextId = parent[beforeId + 1]?.$$id;
    } else {

      regionNodeId = curActiveId;
      regionNodeRegion = 'body';
    }

    let value = schemaData;

    if (subRenderer && !schemaData) {
      value =
        subRenderer.scaffold ||
        ({
          type: subRenderer.type
        } as SchemaObject);

      if (subRenderer.scaffoldForm) {
        value = await this.scaffold(subRenderer.scaffoldForm, value);
      }
    }

    const child = this.addChild(
      regionNodeId,
      regionNodeRegion,
      value,
      nextId,
      subRenderer || node.info,
      undefined,
      reGenerateId
    );
    if (child && activeChild) {

      setTimeout(() => {
        store.setActiveId(child.$$id);
      }, 100);
    }
  }


  canAppendSiblings() {
    const store = this.store;
    const id = store.activeId;
    const node = store.getNodeById(id)!;
    const regionNode = node.parent as EditorNodeType;
    if (!node || !regionNode || !regionNode.schema) {
      return false;
    } else if (regionNode.memberImmutable('')) {
      return false;
    } else if (
      regionNode.schema.body ||
      (regionNode.schema.type === 'flex' && regionNode.schema.items) ||
      node.schema.columns
    ) {
      return true;
    }
    return false;
  }


  async appendSiblingSchema(
    rendererSchema: Object,
    beforeInsert?: boolean,
    disabledAutoSelectInsertElem?: boolean,
    reGenerateId?: boolean
  ) {
    if (!rendererSchema) {
      return;
    }

    const store = this.store;
    const id = store.activeId;
    const node = store.getNodeById(id)!;
    if (!node) {
      toast.warning('请先选择一个元素作为插入的位置。');
      return;
    }
    const regionNode = node.parent as EditorNodeType;


    let nextId = null;
    let regionNodeId = null;
    let regionNodeRegion = null;

    if (regionNode) {

      regionNodeId = regionNode.id;
      regionNodeRegion = regionNode.region;


      if (!regionNode.region && regionNode.schema.body) {

        regionNodeRegion = 'body';
      } else if (
        !regionNode.region &&
        regionNode.schema?.type === 'flex' &&
        regionNode.schema.items
      ) {

        regionNodeRegion = 'items';
      } else if (!regionNode.region && !regionNode.schema.body) {

        toast.warning('当前节点不允许追加新组件。');
        return;
      }

      const parent = store.getSchemaParentById(id);
      let beforeId = -1;
      parent.some((item: any, index: number) => {
        let result = false;
        if (item.$$id === id) {
          beforeId = index;
          result = true;
        }
        return result;
      });
      nextId = parent[beforeInsert ? beforeId : beforeId + 1]?.$$id;

      const child = this.addChild(
        regionNodeId,
        regionNodeRegion,
        rendererSchema,
        nextId,
        node.info,
        {
          id: store.dragId,
          type: store.dragType,
          data: store.dragSchema
        },
        reGenerateId
      );
      if (child && !disabledAutoSelectInsertElem) {

        setTimeout(() => {
          store.setActiveId(child.$$id);
        }, 100);
      }
    }
  }


  async insert() {
    const store = this.store;
    const subRenderer = store.selectedInsertRendererInfo;
    if (!subRenderer) {
      return;
    }

    const id = store.insertId;
    const region = store.insertRegion;
    const beforeId = store.insertBeforeId;
    let value =
      subRenderer.scaffold ||
      ({
        type: subRenderer.type
      } as SchemaObject);

    if (subRenderer.scaffoldForm) {
      value = await this.scaffold(subRenderer.scaffoldForm, value);
    }
    const child = this.addChild(id, region, value, beforeId, subRenderer);
    if (child) {
      store.closeInsertPanel();

      setTimeout(() => {
        store.setActiveId(child.$$id);
      }, 100);
    }
  }


  async replace() {
    const store = this.store;
    const subRenderer = store.selectedInsertRendererInfo;

    if (!subRenderer) {
      return;
    }

    const id = store.insertOrigId;
    let value = subRenderer.scaffold || {
      type: subRenderer.type
    };
    const region = store.insertRegion;

    if (subRenderer.scaffoldForm) {
      value = await this.scaffold(subRenderer.scaffoldForm, value);
    }

    if (this.replaceChild(id, value, subRenderer, region)) {
      store.closeInsertPanel();



      setTimeout(() => {
        this.rebuild();
      }, 4);
    }
  }


  isFlexContainer(id: string) {
    return this.store.isFlexContainer(id);
  }


  isFlexItem(id: string) {
    return this.store.isFlexItem(id);
  }

  isFlexColumnItem(id: string) {
    return this.store.isFlexColumnItem(id);
  }


  isSpecialLayout(curSchema: any) {
    const curSchemaStyle = curSchema?.style || {};
    if (
      curSchemaStyle?.position === 'fixed' ||
      curSchemaStyle?.position === 'absolute'
    ) {
      return true;
    }
    return false;
  }


  draggableContainer(id: string) {
    return this.store.draggableContainer(id);
  }


  updateContainerStyleByDrag(dragId: string, dx: number, dy: number) {
    this.store.updateContainerStyleByDrag(dragId, dx, dy);
  }


  getEditorInfo(
    renderer: RendererConfig,
    path: string,
    schema: any
  ): RendererInfo | null | undefined {
    let info: RendererInfo | null = null;

    const schemaPath = schema.$$id ? this.store.getSchemaPath(schema.$$id) : '';
    const context: RendererInfoResolveEventContext = {
      renderer,
      path,
      schemaPath,
      schema
    };

    const event = this.trigger('before-resolve-editor-info', context);

    if (event.prevented) {
      return event.context.data;
    }

    this.plugins.some(editor => {

      const result = editor.getRendererInfo?.(context);

      if (result) {
        info = {
          id: schema.$$id,
          ...result,
          type: schema.type,
          plugin: editor,
          renderer: renderer,
          dialogTitle:
            schema.type === 'dialog' || schema.type === 'drawer'
              ? schema.title
              : '',
          dialogType: schema.dialogType,
          schemaPath
        };
        return true;
      }

      return false;
    });

    const afterEvent = this.trigger('after-resolve-editor-info', {
      ...context,
      data: info
    });

    return afterEvent.context.data;
  }


  @autobind
  panelChangeValue(
    value: any,
    diff?: any,
    changeFilter?: (schema: any, value: any, id: string, diff?: any) => any,
    id = this.store.activeId
  ) {
    const store = this.store;
    const context: ChangeEventContext = {
      ...this.buildEventContext(id),
      value,
      diff
    };

    const event = this.trigger('before-update', context);
    if (event.prevented) {
      return;
    }

    store.changeValue(value, diff, changeFilter, id);

    this.trigger('after-update', {
      ...context,
      schema: context.node.schema
    });
  }


  openSubEditor(config: SubEditorContext) {
    if (
      ['dialog', 'drawer', 'confirmDialog'].includes(config.value.type) &&
      this.parent
    ) {
      let parent: EditorManager | undefined = this.parent;
      const id = config.value.$$originId || config.value.$$id;
      while (parent) {
        if (parent.store.schema.$$id === id) {
          toast.warning('所选弹窗已经被打开，不能多次打开');
          return;
        }

        parent = parent.parent;
      }
    }
    this.store.openSubEditor(config);
  }


  openContextMenu(
    id: string,
    region: string,
    info: {
      x: number;
      y: number;
    }
  ) {
    let menus: Array<ContextMenuItem> = [];
    const commonContext = this.buildEventContext(id);
    const context: ContextMenuEventContext = {
      ...commonContext,
      selections: this.store.selections.map(item =>
        this.buildEventContext(item)
      ),
      region,
      data: menus
    };

    menus = this.buildContextMenus(context);

    if (!menus.length) {
      return;
    }

    this.store.setContextId(id);
    openContextMenus(
      {
        x: info.x,
        y: info.y
      },
      menus,
      ctx => ctx.state.isOpened && this.store.setContextId('')
    );
  }


  buildContextMenus(context: ContextMenuEventContext) {
    this.plugins.forEach(editor => {
      editor.buildEditorContextMenu?.(context, context.data);
    });

    this.trigger('build-context-menus', context);

    return context.data;
  }

  closeContextMenu() {}


  moveUp() {
    const store = this.store;
    if (!store.activeId) {
      return;
    }

    const node = store.getNodeById(store.activeId)!;
    const regionNode = node.parent;
    const host = node.host;

    const commonContext = this.buildEventContext(host);
    const context: MoveEventContext = {
      ...commonContext,
      sourceId: node.id,
      direction: 'up',
      beforeId: node.prevSibling?.id,
      region: regionNode.region,
      regionNode: regionNode
    };

    const event = this.trigger('before-move', context);
    if (!event.prevented) {
      store.moveUp(context);

      this.trigger('after-move', context);
      this.trigger('after-update', context);
    }
  }


  moveDown() {
    const store = this.store;
    if (!store.activeId) {
      return;
    }

    const node = store.getNodeById(store.activeId)!;
    const regionNode = node.parent;
    const host = node.host;

    const commonContext = this.buildEventContext(host);
    const context: MoveEventContext = {
      ...commonContext,
      sourceId: node.id,
      direction: 'down',
      beforeId: node.nextSibling?.nextSibling?.id,
      region: regionNode.region,
      regionNode: regionNode
    };

    const event = this.trigger('before-move', context);
    if (!event.prevented) {
      store.moveDown(context);

      this.trigger('after-move', context);
      this.trigger('after-update', context);
    }
  }


  del(ids: string | Array<string>) {
    if (!ids || !ids.length) {
      return;
    }
    const id = Array.isArray(ids) ? ids[0] : ids;

    const context: DeleteEventContext = {
      ...this.buildEventContext(id),
      data: Array.isArray(ids) ? ids.concat() : []
    };

    const event = this.trigger('before-delete', context);
    if (!event.prevented) {
      Array.isArray(context.data) && context.data.length
        ? this.store.delMulti(context.data)
        : this.store.del(context);
      this.trigger('after-delete', context);
    }
  }


  duplicate(id: string | Array<string>) {
    this.store.duplicate(id);
  }


  copy(id: string, toastText: string = '已复制') {
    const json = this.store.getValueOf(id);
    this.clipboardData = stringify(json);
    toast.info('配置项' + toastText);
  }


  cut(id: string) {
    this.copy(id, '已剪切');
    this.del(id);
  }


  async paste(id: string, region?: string) {
    if (!this.clipboardData) {
      alert('剪切板内容为空');
      return;
    }
    const json = reGenerateID(parse(this.clipboardData));
    if (region) {
      this.addChild(id, region, json);
      return;
    }
    if (this.replaceChild(id, json)) {
      setTimeout(() => {
        this.store.highlightNodes.forEach(node => {
          node.calculateHighlightBox();
        });
        this.updateConfigPanel(json.type);
      });
    }
  }


  reGenerateNodeDuplicateID(types: Array<string> = []) {
    const node = this.store.getNodeById(this.store.activeId);
    if (!node) {
      return;
    }
    let schema = node.schema;
    let changed = false;


    let tags = node.info?.plugin?.tags || [];
    if (!Array.isArray(tags)) {
      tags = [tags];
    }
    if (types.length && !tags.some(tag => types.includes(tag))) {
      return;
    }


    let idRefs: {[propKey: string]: string} = {};


    JSONTraverse(schema, (value: any, key: string, host: any) => {
      const isNodeIdFormat =
        typeof value === 'string' && value.indexOf('u:') === 0;
      if (key === 'id' && isNodeIdFormat && host) {
        let sameNodes = JSONGetNodesById(this.store.schema, value, 'id');
        if (sameNodes && sameNodes.length > 1) {
          let newId = generateNodeId();
          idRefs[value] = newId;
          host[key] = newId;
          changed = true;
        }
      }
      return value;
    });

    if (changed) {

      JSONTraverse(schema, (value: any, key: string, host: any) => {
        const isNodeIdFormat =
          typeof value === 'string' && value.indexOf('u:') === 0;
        if (key === 'componentId' && isNodeIdFormat && idRefs[value]) {
          host.componentId = idRefs[value];
        }
        return value;
      });
      this.replaceChild(node.id, schema);
    }
  }


  emptyRegion(id: string, region: string) {
    this.store.emptyRegion(id, region);

    setTimeout(() => {

      if (
        !this.store.activeId ||
        !this.store.getNodeById(this.store.activeId)
      ) {
        this.store.setActiveId(id);
      }
    }, 100);
  }


  addChild(
    id: string,
    region: string,
    json: any,
    beforeId?: string,
    subRenderer?: SubRendererInfo | RendererInfo,
    dragInfo?: {
      id: string;
      type: string;
      data: any;
      position?: string;
    },
    reGenerateId?: boolean
  ): any | null {
    const store = this.store;
    let index: number = -1;
    const commonContext = this.buildEventContext(id);


    let curChildJson = JSONPipeIn(json, reGenerateId ?? true);

    if (beforeId) {
      const arr = commonContext.schema[region];
      if (Array.isArray(arr)) {
        index = findIndex(arr, (item: any) => item?.$$id === beforeId);
      }
    }

    const context: InsertEventContext = {
      ...commonContext,
      beforeId: beforeId,
      index,
      region: region,
      data: curChildJson,
      subRenderer,
      dragInfo
    };

    const event = this.trigger('before-insert', context);
    if (!event.prevented) {
      const child = store.insertSchema(event);
      this.trigger('after-insert', context);
      return child;
    }

    return null;
  }


  move(
    id: string,
    region: string,
    sourceId: string,
    beforeId?: string,
    dragInfo?: any
  ): boolean {
    const store = this.store;

    const context: MoveEventContext = {
      ...this.buildEventContext(id),
      beforeId,
      region: region,
      sourceId,
      dragInfo
    };

    const event = this.trigger('before-move', context);
    if (!event.prevented) {
      store.moveSchema(event);

      this.trigger('after-move', context);
      return true;
    }

    return false;
  }


  replaceChild(
    id: string,
    json: any,
    subRenderer?: SubRendererInfo | RendererInfo,
    region?: string,
    reGenerateId?: boolean
  ): boolean {

    let curJson = JSONPipeIn(json, reGenerateId ?? true);

    const context: ReplaceEventContext = {
      ...this.buildEventContext(id),
      data: {...curJson},
      subRenderer,
      region
    };
    const event = this.trigger('before-replace', context);

    if (!event.prevented && event.context.data) {
      this.store.replaceChild(id, event.context.data);
      this.trigger('after-replace', context);
      return true;
    }

    return false;
  }

  setActiveId(id: string) {
    this.store.setActiveId(id);
  }


  openConfigPanel(id: string) {
    const store = this.store;

    if (store.activeId !== id) {
      store.setActiveId(id);
    }

    store.changePanelKey('config');
  }


  openCodePanel(id: string) {
    const store = this.store;

    if (store.activeId !== id) {
      store.setActiveId(id);
    }

    store.changePanelKey('code');
  }

  toggleSelection(id: string) {
    const store = this.store;
    let selections = store.selections.concat();

    if (!selections.length && store.activeId) {
      selections.push(store.activeId);
    }

    const idx = selections.indexOf(id);

    if (!~idx) {
      selections.push(id);
    } else {
      selections.splice(idx, 1);
    }
    this.setSelection(selections, id);
  }

  setSelection(selections: Array<string>, id: string = selections[0]) {
    const store = this.store;
    const commonContext = this.buildEventContext(id);
    const context: SelectionEventContext = {
      ...commonContext,
      selections: selections.map(item => this.buildEventContext(item)),
      data: selections
    };

    const event = this.trigger('selection-change', context);
    if (event.prevented) {
      return;
    }
    selections = context.data;

    if (selections.length === 1) {
      store.setActiveId(selections[0]);
    } else {
      store.setSelections(selections);
    }
  }

  startDrag(id: string, e: React.DragEvent) {
    e.persist();
    this.dnd.startDrag(id, e.nativeEvent);
  }

  async scaffold(form: any, value: any): Promise<SchemaObject> {
    const scaffoldFormData = form.pipeIn ? await form.pipeIn(value) : value;

    return new Promise(resolve => {
      this.store.openScaffoldForm({
        ...form,
        value: scaffoldFormData,
        callback: resolve
      });
    });
  }

  async reScaffold(id: string, form: ScaffoldForm, value: any) {
    const replaceWith = await this.scaffold(form, value);
    this.replaceChild(id, replaceWith);
  }


  async reScaffoldV2(id: string) {
    const commonContext = this.buildEventContext(id);
    const scaffoldForm = commonContext.info?.scaffoldForm;
    const curSchema = commonContext.schema;
    const replaceWith = await this.scaffold(scaffoldForm, curSchema);
    this.replaceChild(id, replaceWith);
  }


  lazyPatchSchema = debounce(this.patchSchema.bind(this), 250, {
    leading: false,
    trailing: true
  });

  patching = false;
  patchingInvalid = false;
  patchSchema(force = false) {
    if (this.patching) {
      this.patchingInvalid = true;
      return;
    }
    this.patching = true;
    this.patchingInvalid = false;
    const batch: Array<{id: string; value: any}> = [];
    const ids = new Map();
    let patchList = (list: Array<EditorNodeType>) => {

      list.forEach((node: EditorNodeType) => {
        if (node.uniqueChildren && node.uniqueChildren.length) {
          patchList(node.uniqueChildren);
        }

        if (isAlive(node) && !node.isRegion) {
          const schema = node.schema;
          node.patch(
            this.store,
            force,
            (id, value) => batch.unshift({id, value}),
            ids
          );
          node.schemaPath && ids.set(schema.id, node.schemaPath);
        }
      });
    };

    patchList(this.store.root.children);
    this.store.batchChangeValue(batch);
    this.patching = false;
    this.patchingInvalid && this.patchSchema(force);
  }


  async hackRenderers(renderers = getRenderers()) {
    const toHackList: Array<{
      renderer: RendererConfig;
      regions?: Array<RegionConfig>;
      overrides?: any;
    }> = [];

    await Promise.all(renderers.map(renderer => loadAsyncRenderer(renderer)));

    renderers.forEach(renderer => {
      const plugins = this.plugins.filter(
        plugin =>
          (Array.isArray(plugin?.regions) &&
            plugin.regions.some(
              region =>
                region.renderMethod &&
                (region.rendererName ?? plugin.rendererName) === renderer.name
            )) ||
          (plugin.overrides &&
            (plugin.overrideTargetRendererName ?? plugin.rendererName) ===
              renderer.name)
      );

      plugins.forEach(plugin => {
        const complexRegions = plugin.regions?.filter(
          region =>
            region.renderMethod &&
            (region.rendererName ?? plugin.rendererName) === renderer.name
        );

        complexRegions?.length &&
          toHackList.push({
            renderer,
            regions: complexRegions
          });

        if (
          plugin.overrides &&
          (plugin.overrideTargetRendererName ?? plugin.rendererName) ===
            renderer.name
        ) {
          toHackList.push({
            renderer,
            overrides: plugin.overrides
          });
        }
      });
    });
    toHackList.forEach(({regions, renderer, overrides}) =>
      this.hackIn(renderer, regions, overrides)
    );

    this.store.markReady();
  }


  makeWrapper(info: RendererInfo, render: RendererConfig): any {
    return makeWrapper(this, info, render);
  }


  makeSchemaFormRender(schema: {
    body?: SchemaCollection;
    controls?: Array<any>;
    definitions?: any;
    api?: any;
    submitOnChange?: boolean;
    justify?: boolean;
    panelById?: string;
    formKey?: string;
    pipeIn?: (value: any) => any;
    pipeOut?: (value: any) => any;
  }) {
    return makeSchemaFormRender(this, schema);
  }

  onWidthChangeStart(
    e: MouseEvent,
    ctx: {
      dom: HTMLElement;
      node: EditorNodeType;
      resizer: HTMLElement;
    }
  ) {
    return this.trigger('width-change-start', {
      ...ctx,
      nativeEvent: e
    });
  }

  onHeightChangeStart(
    e: MouseEvent,
    ctx: {
      dom: HTMLElement;
      node: EditorNodeType;
      resizer: HTMLElement;
    }
  ) {
    return this.trigger('height-change-start', {
      ...ctx,
      nativeEvent: e
    });
  }

  onSizeChangeStart(
    e: MouseEvent,
    ctx: {
      dom: HTMLElement;
      node: EditorNodeType;
      resizer: HTMLElement;
      store: EditorStoreType;
    }
  ) {
    return this.trigger('size-change-start', {
      ...ctx,
      nativeEvent: e
    });
  }

  openNodePopOverForm(id: string | EditorNodeType) {
    const node = typeof id === 'string' ? this.store.getNodeById(id) : id;
    if (
      !node ||
      (!node.info?.plugin?.popOverBody &&
        !node.info?.plugin?.popOverBodyCreator)
    ) {
      return;
    }
    const plugin = node.info.plugin!;
    const store = this.store;
    const context: PopOverFormContext = {
      node,
      body: plugin.popOverBodyCreator
        ? plugin.popOverBodyCreator(this.buildEventContext(node))
        : plugin.popOverBody!,
      value: store.getValueOf(node.id),
      callback: this.panelChangeValue,
      target: () =>
        document.querySelector(`[data-hlbox-id="${node.id}"]`) as HTMLElement
    };
    store.openPopOverForm(context);
  }


  addBroadcast(event: RendererPluginEvent) {
    this.broadcasts.push(event);
  }


  removeBroadcast(id: string) {
    const idx = findIndex(this.broadcasts, item => item.eventName === id);
    this.broadcasts.splice(idx, 1);
  }


  async getContextSchemas(id: string | EditorNodeType, withoutSuper = false) {
    const node = typeof id === 'string' ? this.store.getNodeById(id) : id;
    if (!node) {
      return [];
    }

    let scope: DataScope | void = undefined;
    let from = node;
    let region = node;
    const trigger = node;


    for (const key in this.dataSchema.idMap) {
      if (/\-currentRow$/.test(key)) {
        this.dataSchema.removeScope(key);
      }
    }


    while (!scope && from) {
      const nodeId = from.info?.id;
      const type = from.info?.type;
      scope = this.dataSchema.hasScope(`${nodeId}-${type}`)
        ? this.dataSchema.getScope(`${nodeId}-${type}`)
        : undefined;
      from = from.parent;
      if (from?.isRegion) {
        region = from;
      }
    }

    let nearestScope;
    let listScope = [];


    while (scope) {
      const [nodeId] = scope.id.split('-');
      const type = scope.id.replace(`${nodeId}-`, '');
      const scopeNode = this.store.getNodeById(nodeId, type);


      if (!nearestScope && scopeNode && !scopeNode.isSecondFactor) {
        nearestScope = scope;
      }
      if (scopeNode) {
        const tmpSchema = await scopeNode?.info?.plugin?.buildDataSchemas?.(
          scopeNode,
          region,
          trigger
        );

        if (tmpSchema) {
          const jsonschema = {
            ...tmpSchema,
            ...(tmpSchema?.$id
              ? {}
              : {$id: `${scopeNode!.id}-${scopeNode!.type}`})
          };
          scope.removeSchema(jsonschema.$id);
          scope.addSchema(jsonschema);
        }


        if (scopeNode?.info?.isListComponent) {
          listScope.unshift(scope);


          if (nodeId === id) {
            nearestScope = scope.parent;
          }
        }
      }

      scope = withoutSuper ? undefined : scope.parent;
    }


    if (listScope.length > 1) {
      for (let scope of listScope) {
        const [id, type] = scope.id.split('-');
        const node = this.store.getNodeById(id, type);
        if (node) {
          const tmpSchema = await node?.info?.plugin?.buildDataSchemas?.(
            node,
            region,
            trigger
          );
          if (tmpSchema) {
            const jsonschema = {
              ...tmpSchema,
              ...(tmpSchema?.$id ? {} : {$id: `${node!.id}-${node!.type}`})
            };
            scope.removeSchema(jsonschema.$id);
            scope.addSchema(jsonschema);
          }
        }
      }
    }


    const nearestScopeId =
      Object.keys(this.dataSchema.idMap).find(
        key =>
          /\-currentRow$/.test(key) &&
          !this.dataSchema.idMap[key].children?.length
      ) || nearestScope?.id;

    if (nearestScopeId) {
      this.dataSchema.switchTo(nearestScopeId);
    }


    if (node.info.isListComponent) {
      let lastScope = listScope[listScope.length - 1];
      this.dataSchema.switchTo(lastScope.parent!);
    }

    return withoutSuper
      ? this.dataSchema.current.schemas
      : this.dataSchema.getSchemas();
  }


  async getAvailableContextFields(node: EditorNodeType): Promise<any> {
    if (!node) {
      return;
    }

    let scope: DataScope | void = undefined;
    let from = node;
    let region = node;


    while (!scope && from) {
      scope = this.dataSchema.hasScope(`${from.id}-${from.type}`)
        ? this.dataSchema.getScope(`${from.id}-${from.type}`)
        : undefined;


      if (!scope) {
        if (['combo', 'input-table'].includes(from?.info?.type)) {
          break;
        }
      }

      from = from.parent;
      if (from?.isRegion) {
        region = from;
      }
    }

    if (!scope) {

      if (!from && this.store.isSubEditor) {
        return this.config?.getAvaiableContextFields?.(node);
      }
      return from?.info.plugin.getAvailableContextFields?.(from, node);
    }

    while (scope) {
      const [id] = scope.id.split('-');
      const type = scope.id.substring(id.length + 1);
      const scopeNode = this.store.getNodeById(id, type);

      if (scopeNode && !scopeNode.info?.isListComponent) {
        return scopeNode?.info.plugin.getAvailableContextFields?.(
          scopeNode,
          node
        );
      }

      scope = scope.parent;
    }
  }

  beforeDispatchEvent(
    originHook: any,
    e: any,
    component: any,
    scoped: IScopedContext,
    data: any,
    broadcasts?: any
  ) {
    originHook?.(e, component, scoped, data, broadcasts);

    const id = component.props.$$id || component.props.$$editor?.id;
    if (id) {
      const node = this.store.getNodeById(id, component.props.type);
      node?.info?.plugin?.rendererBeforeDispatchEvent?.(
        node,
        e,
        JSONPipeOut(data)
      );
    }
  }


  dispose() {

    this.trigger('dispose', {
      data: this
    });
    delete (this as any).parent;
    this.toDispose.forEach(fn => fn());
    this.toDispose = [];
    this.plugins.forEach(p => p.dispose?.());
    this.plugins.splice(0, this.plugins.length);
    this.listeners.splice(0, this.listeners.length);
    this.broadcasts.splice(0, this.broadcasts.length);
    this.lazyPatchSchema.cancel();
    this.dnd.dispose();
  }
}
