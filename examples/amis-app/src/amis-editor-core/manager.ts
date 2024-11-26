/**
 * @file puts some functional things in this to assist the compoennt/Editor.tsx component.
 * Editor non-UI related stuff should be placed here.
 */
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
  /** Priority, the value is an integer. When there are two Plugins with the same ID, the one with a larger number has a higher priority. */
  priority?: number;
  scene?: Array<string>;
}

const builtInPlugins: Array<
  PluginClass | [PluginClass, Record<string, any> | (() => Record<string, any>)]
> = [];

declare const window: Window & {AMISEditorCustomPlugins: any};

/**
 * Automatically load pre-registered custom plug-ins
 * Note: required by the new version of amis-widget[3.0.0]
 */
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

/**
 * Register Editor plug-in
 * Note: Supports overwriting original components, priority needs to be configured when registering new components.
 * @param editor
 */
export function registerEditorPlugin(klass: PluginClass) {
  // Process scene information on the plug-in
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
    // To be further optimized
    exsitedPluginIdx = builtInPlugins.findIndex(item => item === klass);
  }

  /** First add an ID to the newly added plugin */
  if (!~exsitedPluginIdx) {
    klass.id = klass.id || klass.name || guid();
  }

  /** Because of the inheritance relationship of classes, subclasses whose ID is not set will share the ID with the parent class. Only when priority is set will the same ID deduplication be performed. */
  if (klass.priority == null || !Number.isInteger(klass.priority)) {
    if (!~exsitedPluginIdx) {
      builtInPlugins.push(klass);
    } else {
      console.warn(
        `An exception occurred when registering the plug-in "${klass.id}". A plug-in with the same name already exists.：`,
        klass
      );
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

      /** Plug-ins with the same ID decide whether to update based on priority. */
      const currentPriority =
        current.priority && Number.isInteger(current.priority)
          ? current.priority
          : 0;

      if (klass.priority > currentPriority) {
        builtInPlugins.splice(exsitedPluginIdx, 1, klass);
      } else {
        console.warn(
          `An exception occurred when registering the plug-in "${klass.id}". A plug-in with the same name already exists.：`,
          klass
        );
      }
    }
  }
}

/**
 * Get the currently registered plug-ins.
 */
export function getEditorPlugins(options: any = {}) {
  const {scene = 'global'} = options;
  return builtInPlugins.filter(item =>
    (Array.isArray(item) ? item[0] : item).scene?.includes(scene)
  );
}

/**
 * Unregister plugin
 */
export function unRegisterEditorPlugin(id: string) {
  const idx = findIndex(builtInPlugins, item =>
    Array.isArray(item) ? item[0].id === id : item.id === id
  );
  ~idx && builtInPlugins.splice(idx, 1);
}

/**
 * Instantiated in component/Editor.tsx.
 * Auxiliary component/Editor.tsx to implement some non-UI related functions.
 */
export class EditorManager {
  readonly plugins: Array<PluginInterface>
  readonly env: RenderOptions
  toDispose: Array<() => void> = []
  readonly dnd: EditorDNDManager
  readonly id = guid()
  disableHover = false

  // Chrome requires https to support reading the clipboard, so it is implemented based on memory
  private clipboardData: string | undefined
  readonly hackIn: any

  //Broadcast event set
  readonly broadcasts: RendererPluginEvent[] = []
  //Plug-in event set
  readonly pluginEvents: PluginEvents = {}
  //Plug-in action set
  readonly pluginActions: PluginActions = {}

  dataSchema: DataSchema

  /** Variable management */
  readonly variableManager

  constructor(
    readonly config: EditorManagerConfig,
    readonly store: EditorStoreType,
    readonly parent?: EditorManager,
  ) {
    // The default env passed to the amis renderer
    this.env = {
      ...env, // 默认的 env 中带 jumpTo
      ...omit(config.amisEnv, "replaceText"), // 用户也可以设置自定义环境配置，用于覆盖默认的 env
      theme: config.theme,
    }
    this.env.beforeDispatchEvent = this.beforeDispatchEvent.bind(this, this.env.beforeDispatchEvent)
    this.hackIn = hackIn
    // Automatically load pre-registered custom components
    autoPreRegisterEditorCustomPlugins()

    /** Merge and deduplicate externally registered Plugins and builtInPlugins at the top level */
    const externalPlugins = (config?.plugins || []).forEach((external) => {
      if (Array.isArray(external) || !external.priority || !Number.isInteger(external.priority)) {
        return
      }

      const idx = builtInPlugins.findIndex(
        (builtIn) =>
          !Array.isArray(builtIn) &&
          !Array.isArray(external) &&
          builtIn.id === external.id &&
          builtIn?.prototype instanceof BasePlugin,
      )

      if (~idx) {
        const current = builtInPlugins[idx] as PluginClass
        const currentPriority = current.priority && Number.isInteger(current.priority) ? current.priority : 0
        /** Plugins with the same ID decide whether to replace the Plugin in Builtin based on priority. */
        if (external.priority > currentPriority) {
          builtInPlugins.splice(idx, 1)
        }
      }
    })



    this.plugins = (config.disableBultinPlugin ? [] : builtInPlugins) // List of plugins registered by the page designer
      .concat(this.normalizeScene(config?.plugins))
      .filter((p) => {
        p = Array.isArray(p) ? p[0] : p
        return config.disablePluginList
          ? typeof config.disablePluginList === "function"
            ? !config.disablePluginList(p.id || "", p)
            : !config.disablePluginList.includes(p.id || "unkown")
          : true
      })
      .map((Editor) => {
        let pluginOptions: Record<string, any> = {}
        if (Array.isArray(Editor)) {
          pluginOptions = typeof Editor[1] === "function" ? Editor[1]() : Editor[1]
          Editor = Editor[0]
        }

        const plugin = new Editor(this, pluginOptions) // Instantiate
        plugin.order = plugin.order ?? 0

        // Record action definition
        if (plugin.rendererName) {
          this.pluginEvents[plugin.rendererName] = plugin.events || []
          this.pluginActions[plugin.rendererName] = plugin.actions || []
        }

        return plugin
      })
      .sort((a, b) => a.order! - b.order!) // Sort by order【Ascending order】
    this.hackRenderers()
    this.dnd = new EditorDNDManager(this, store)
    this.dataSchema = new DataSchema(config.schemas || [])

    // Manually bind the method to ensure 'this' is correctly set
    this.panelChangeValue = this.panelChangeValue.bind(this);


    /** Initialize variable management */
    this.variableManager = new VariableManager(this.dataSchema, config?.variables, config?.variableOptions)

    this.toDispose.push(
      // The number of current node areas changes and the child renderer list is rebuilt.
      /*reaction(
        () => [
          store.activeContainerId,
          store.activeContainerId
            ? store
                .getNodeById(store.activeContainerId)
                ?.childRegions.map(region => region.key)
            : []
        ],
        ([id, regions]) => {
          if (id && regions?.length) {
            this.buildRenderers();
          }
        }
      ),*/

      // The selected node has changed, and the toolbar and panel will be rebuilt.
      reactionWithOldValue(
        () => store.activeId,
        async (id, oldValue) => {
          // If currently inserting, close first.
          this.store.insertId && this.store.closeInsertPanel()
          this.buildJSONSchemaUri()
          this.buildToolbars()
          await this.buildRenderers()
          this.buildPanels()
          scrollToActive(`[data-node-id="${id}"]`)

          this.trigger(
            "active",
            id
              ? ({
                  ...this.buildEventContext(id),
                  active: true,
                } as any)
              : {
                  id: oldValue,
                  active: false,
                },
          )
        },
      ),

      //Select changes and rebuild the panel
      reaction(
        () => store.selections.join(","),
        () => {
          this.buildPanels()
        },
      ),

      // Automatically fix configuration errors
      reaction(
        () => store.needPatch,
        (result) => {
          result && this.lazyPatchSchema()
        },
      ),

      // Add is-active class name to the currently highlighted region.
      reactionWithOldValue(
        () => ({ id: store.hoverId, region: store.hoverRegion }),
        (value, oldValue) => {
          const doc = store.getDoc()
          if (value.id && value.region) {
            doc
              .querySelector(`[data-region="${value.region}"][data-region-host="${value.id}"]`)
              ?.classList.add("is-region-active")
          } else if (oldValue?.id && oldValue?.region) {
            doc
              .querySelector(`[data-region="${oldValue.region}"][data-region-host="${oldValue.id}"]`)
              ?.classList.remove("is-region-active")
          }
        },
      ),
    )
  }

  normalizeScene(
    plugins?: Array<PluginClass | [PluginClass, Record<string, any> | (() => Record<string, any>)]>,
  ): (PluginClass | [PluginClass, Record<string, any> | (() => Record<string, any>)])[] {
    return (
      plugins?.map((klass) => {
        let options
        if (Array.isArray(klass)) {
          options = klass[1]
          klass = klass[0]
        }

        // Process scene information on the plug-in
        const scene = Array.from(new Set(["global"].concat(klass.scene || "global")))
        klass.scene = scene
        return options ? [klass, options] : klass
      }) || []
    )
  }

  // Dynamic registration plugin
  dynamicAddPlugin(pluginName: string) {
    if (!pluginName) {
      return
    }
    // Duplicate name plug-in detection (to avoid repeated registration)
    if (this.plugins.some((plugin: any) => plugin && plugin.name === pluginName)) {
      console.warn(`[amis-editor] currently has ${pluginName} plug-in`)
      return
    }
    let newPluginClass: any = builtInPlugins.find(
      (Plugin: any) => Plugin.prototype && Plugin.prototype.name === pluginName,
    )
    // Support postMessage indirect dynamic registration of custom components
    if (!newPluginClass && window.AMISEditorCustomPlugins) {
      newPluginClass = window.AMISEditorCustomPlugins[pluginName]
    }
    if (newPluginClass) {
      const newPlugin = new newPluginClass(this) // Instantiate once
      newPlugin.order = newPlugin.order ?? 0
      this.plugins.push(newPlugin)
      //reorder
      this.plugins.sort((a, b) => a.order! - b.order!) // Sort by order [ascending order]

      //Record action definition
      if (newPlugin.rendererName) {
        this.pluginEvents[newPlugin.rendererName] = newPlugin.events || []
        this.pluginActions[newPlugin.rendererName] = newPlugin.actions || []
      }

      this.buildRenderers()
    }
  }

  // When initializing for the first time, add component materials and panel loading logic to prevent the left and right panels from being empty when autoFocus is false.
  buildRenderersAndPanels() {
    setTimeout(async () => {
      const { store } = this
      if (!store.activeId && store?.schema?.$$id) {
        //Use root node id by default
        await this.buildRenderers()
        this.buildPanels(store.schema.$$id)
      }
    }, 200)
  }

  //Build the current node context
  buildEventContext(idOrNode: string | EditorNodeType) {
    const node = typeof idOrNode === "string" ? this.store.getNodeById(idOrNode)! : idOrNode
    const schema = this.store.getSchema(node.id)
    return {
      node,
      id: node.id,
      info: node.info!,
      path: node.path,
      schemaPath: node.schemaPath,
      schema,
      data: "",
    }
  }

  /**
   * Build JSONSchema Uri so it can be edited in code mode.
   */
  buildJSONSchemaUri() {
    const id = this.store.activeId
    let jsonschemaUri = ""

    if (id) {
      const context: RendererJSONSchemaResolveEventContext = this.buildEventContext(id)

      const event = this.trigger("before-resolve-json-schema", context)
      jsonschemaUri = event.context.data
      if (!event.prevented) {
        this.plugins.forEach((editor) => {
          if (jsonschemaUri) {
            return
          }

          const result = editor.buildJSONSchema?.(context)

          if (result) {
            jsonschemaUri = result
          }
        })

        context.data = jsonschemaUri
        const event = this.trigger("after-resolve-json-schema", context)
        jsonschemaUri = event.data
      }
    }

    this.store.setJSONSchemaUri(jsonschemaUri)
  }

  buildToolbars() {
    const id = this.store.activeId
    const toolbars: Array<BasicToolbarItem> = []

    if (id) {
      const commonContext = this.buildEventContext(id)
      this.plugins.forEach((editor) => {
        const context: BaseEventContext = {
          ...commonContext,
        }
        editor.buildEditorToolbar?.(context, toolbars)
      })

      this.trigger("build-toolbars", {
        ...commonContext,
        data: toolbars,
      })
    }

    this.store.setActiveToolbars(
      toolbars.map((item) => ({
        ...item,
        order: item.order || 0,
        id: guid(),
      })),
    )
  }

  collectPanels(node: EditorNodeType, triggerEvent = false, secondFactor = false) {
    let panels: Array<BasicPanelItem> = []

    if (node) {
      const context: BuildPanelEventContext = {
        ...this.buildEventContext(node),
        secondFactor,
        data: panels,
        selections: this.store.selections.map((item) => this.buildEventContext(item)),
      }

      // Generate property configuration panel
      this.plugins.forEach((editor) => {
        editor.buildEditorPanel?.(context, panels)
      })

      triggerEvent && this.trigger("build-panels", context)
      panels = context.data || panels
      if (context.changeLeftPanelKey) {
        // Change left active panel
        this.store.changeLeftPanelKey(context.changeLeftPanelKey)
      }
    }

    return panels
  }

  buildPanels(curRendererId?: string) {
    let id = curRendererId || this.store.activeId
    let panels: Array<BasicPanelItem> = []

    if (!id && this.store?.filteredSchema) {
      id = this.store?.filteredSchema.$$id // The root node id is used by default
    }

    if (id || this.store.selections.length) {
      id = id || this.store.selections[0]
      const node = this.store.getNodeById(id)
      panels = node ? this.collectPanels(node, true) : panels
    }

    this.store.setPanels(
      panels.map((item) => ({
        ...item,
        order: item.order || 0,
      })),
    )
  }

  async collectRenderers(region?: string, activeContainerId: string = this.store.activeContainerId) {
    const subRenderers: Array<SubRendererInfo> = []

    let id = activeContainerId

    if (!id && this.store?.schema) {
      id = this.store?.schema.$$id // The root node id is used by default
    }

    if (!id) {
      return subRenderers
    }

    const node = this.store.getNodeById(id)

    if (!node) {
      return subRenderers
    }

    const schema = this.store.getSchema(id)
    const contxt = {
      node,
      id: node.id,
      info: node.info!,
      path: node.path,
      schemaPath: node.schemaPath,
      schema,
      region,
    }
    let asyncUpdateCompPlugins = []
    // The purpose of changing to for here is to solve the asynchronous problem
    for (let index = 0, size = this.plugins.length; index < size; index++) {
      const pluginItem = this.plugins[index]
      let subRenderer = await pluginItem.buildSubRenderers?.(contxt, subRenderers, getRenderers())
      if (subRenderer) {
        ;(Array.isArray(subRenderer) ? subRenderer : [subRenderer]).forEach((item) =>
          subRenderers.push({
            ...item,
            id: guid(),
            plugin: pluginItem,
            parent: node.info!,
            order: item.order || 0,
          }),
        )
      }
      // Preset components and NPM custom components are required to update classification and sorting
      if (pluginItem.asyncUpdateCustomSubRenderersInfo) {
        asyncUpdateCompPlugins.push(pluginItem)
      }
    }

    if (asyncUpdateCompPlugins.length) {
      for (let i = 0, len = asyncUpdateCompPlugins.length; i < len; i++) {
        const asyncUpdateCompPlugin = asyncUpdateCompPlugins[i]

        await asyncUpdateCompPlugin.asyncUpdateCustomSubRenderersInfo?.(contxt, subRenderers, getRenderers())
      }
    }

    // Filter out hidden components
    return subRenderers.filter((renderer) => !renderer.disabledRendererPlugin)
  }

  async buildRenderers(region?: string) {
    const curRenderers = await this.collectRenderers(region)
    this.store.setSubRenderers(curRenderers)
    this.store.changeSubRendererRegion(region || "")
  }

  async rebuild() {
    await this.buildRenderers()
    this.buildToolbars()
    this.buildPanels()
  }

  /**
   * Refresh the property configuration panel
   * Note 1: Required when changing component types, and required for form editor entity binding;
   * Note 2: Only applicable to the new version of the attribute configuration panel (there is only one first-level attribute configuration panel);
   * Note 3: It is recommended to give priority to using the currently selected component ID (this.store.activeId) to update the property configuration panel;
   * @param pluginType component type
   */
  updateConfigPanel(pluginType?: string) {
    const { activeId, getSchema, getNodeById } = this.store
    let curPluginType = pluginType

    if (!curPluginType && this.store.activeId) {
      // 当 When pluginType is empty, get the type field of the currently selected component.
      const curSchema = getSchema(activeId)
      curPluginType = curSchema.type
    }

    if (curPluginType && this.store.activeId) {
      const panels = this.store.panels.concat()
      const curNode = getNodeById(activeId)
      if (curPluginType && curNode) {
        // Get the current plugin
        const curPlugin = this.plugins.find((item) => item.rendererName === curPluginType)
        // Delete the current property configuration panel
        panels.splice(
          panels.findIndex((item) => item.key === "config"),
          1,
        )

        const context: BuildPanelEventContext = {
          ...this.buildEventContext(curNode),
          data: panels,
          selections: this.store.selections.map((item) => this.buildEventContext(item)),
        }
        if (curPlugin) {
          // Regenerate the property configuration panel of the current component
          curPlugin.buildEditorPanel?.(context, panels)
          this.store.setPanels(
            panels.map((item) => ({
              ...item,
              order: item.order || 0,
            })),
          )
        }
      }
    }
  }

  /**
   * Click on the available components panel, and the components that can be inserted may be different in different areas.
   * @param region key of region
   */
  switchToRegion(region: string) {
    if (!this.store.activeId) {
      return
    }
    this.buildRenderers(region)
  }

  /**
   * Show insert panel
   * @param region
   * @param preferTag
   */
  async showInsertPanel(
    region: string,
    id: string = this.store.activeId,
    preferTag?: string,
    mode: "insert" | "replace" = "insert",
    originId: string = "",
    beforeId?: string,
  ) {
    if (typeof preferTag === "undefined" && id) {
      const node = this.store.getNodeById(id)
      preferTag = node?.info?.regions?.find((child) => child.key === region)?.preferTag
    }
    const curRenderers = await this.collectRenderers(region, id)
    this.store.setInsertRenderers(curRenderers)
    this.store.setInsertRegion(region, id, preferTag, mode, originId, beforeId)
  }

  /**
   *Display component replacement panel
   * @param region
   * @param preferTag
   */
  showReplacePanel(id: string, preferTag?: string) {
    const node = this.store.getNodeById(id)
    const region: EditorNodeType = node?.parent

    if (!node || !region || !region.isRegion || !region.parent) {
      return
    }

    const host: EditorNodeType = region.parent!
    this.showInsertPanel(region.region, host.id, preferTag, "replace", node.id)
  }

  /** Display the left component panel (mainly used in the properties panel) */
  showRendererPanel(tag?: string, msg?: string) {
    this.store.showRendererPanel(tag, msg)
  }

  readonly listeners: Array<{
    type: string
    fn: PluginEventFn
  }> = []

  on(event: string, fn: PluginEventFn) {
    this.listeners.push({
      type: event,
      fn,
    })
    return () => this.off(event, fn)
  }

  off(event: string, fn: PluginEventFn) {
    const idx = findIndex(this.listeners, (item) => {
      return item.type === event && item.fn === fn
    })

    if (~idx) {
      this.listeners.splice(idx, 1)
    }
  }

  /**
   * Dispatch events.
   * @param type
   * @param context
   */
  trigger<T extends EventContext>(type: string, context: T): PluginEvent<T> {
    const event = createEvent(type, context)
    const method = camelize(/^(?:before|after)/.test(type) ? type : `on-${type}`)
    const listeners = this.listeners.filter((item) => item.type === type)

    this.plugins.forEach(
      (plugin) =>
        (plugin as any)[method] &&
        listeners.push({
          type,
          fn: (plugin as any)[method].bind(plugin),
        }),
    )

    if ((this.config as any)[method]) {
      listeners.push({
        fn: (this.config as any)[method],
        type,
      })
    }

    let promises: Array<Promise<any>> = []
    listeners.some((listener) => {
      const ret = listener.fn.call(null, event)

      if (ret === false) {
        event.preventDefault()
        event.stopPropagation()
      } else if (ret?.then) {
        promises.push(ret)
      } else if (ret !== void 0) {
        event.setData(ret)
      }

      return event.stoped
    })

    if (promises.length) {
      event.pending = Promise.all(promises)
    }

    return event
  }

  /**
   * Insert or append new elements to the currently selected element
   * @param rendererIdOrSchema
   * Note: You can add new elements based on the renderer ID or add new elements based on existing schema fragments.
   */
  async addElem(rendererIdOrSchema: string | any, reGenerateId?: boolean, activeChild: boolean = true) {
    if (!rendererIdOrSchema) {
      return
    }
    let rendererId: string = "" // Used to record the renderer ID
    let schemaData // Used to record existing schema data

    if (isString(rendererIdOrSchema)) {
      rendererId = rendererIdOrSchema.toString()
    } else if (isObject(rendererIdOrSchema)) {
      schemaData = rendererIdOrSchema
    }

    const store = this.store
    let subRenderer
    let curActiveId = store.activeId
    let node = store.getNodeById(curActiveId)! // Insert the currently selected node by default

    if (rendererId) {
      //When there is rendererId, get the renderer information
      subRenderer = store.getSubRendererById(rendererId)

      // Click to add a floating container to directly insert the root node of the current page.
      const curElemStyle = subRenderer?.scaffold?.style || {}
      if (curElemStyle.position === "fixed") {
        curActiveId = store.getRootId()
        node = store.getNodeById(curActiveId)! // Insert the currently selected node by default
      }
    }

    if (!subRenderer && !schemaData) {
      // When both renderer information and schemaData are empty, no processing will be done
      return
    }

    if (!node) {
      toast.warning("Please select an element as the insertion position first.")
      return
    }

    const curElemSchema = schemaData || subRenderer?.scaffold
    const isSpecialLayout = this.isSpecialLayout(curElemSchema)

    //Do not replace the container directly
    // if (
    // (node.type === 'wrapper' || node.type === 'container') &&
    // node.schema?.body?.length === 0 &&
    // curElemSchema?.type === 'flex' &&
    // !node.schema?.isFreeContainer &&
    // !isSpecialLayout
    // ) {
    // // Improved layout capabilities: Click to insert a new element. When the wrapper is empty and inserted into the layout container, it will automatically be replaced to avoid excessive levels.
    // this.replaceChild(
    // curActiveId,
    // curElemSchema,
    //subRenderer,
    // store.insertRegion,
    // reGenerateId
    // );
    // setTimeout(() => {
    // this.updateConfigPanel();
    // }, 0);
    // return;
    // }

    const parentNode = node.parent as EditorNodeType // Parent node

    //Insert the fields required for new elements
    let nextId = null
    let regionNodeId = null
    let regionNodeRegion = null

    if (store.activeRegion) {
      regionNodeId = curActiveId
      regionNodeRegion = store.activeRegion
    } else if (node.schema.columns && node.type !== "grid") {
      // Table containers such as crud and table
      regionNodeId = curActiveId
      regionNodeRegion = "columns"
    } else if (node.schema.items && isLayoutPlugin(node.schema)) {
      //The current node is a layout container node
      regionNodeId = curActiveId
      regionNodeRegion = "items"
    } else if (node.schema.body) {
      //The current node is a container node
      regionNodeId = curActiveId
      regionNodeRegion = "body"
    } else if (parentNode) {
      // There is a parent node
      regionNodeId = parentNode.id
      regionNodeRegion = parentNode.region

      // Consider special cases, such as "form item container"
      if (!parentNode.region && parentNode.schema.body) {
        //Insert into the body of the parent node by default
        regionNodeRegion = "body"
      } else if (!parentNode.region && parentNode.schema.items) {
        regionNodeRegion = "items"
      } else if (!parentNode.region && !parentNode.schema.body && !parentNode.schema.items) {
        //Other special situations will not be considered for the time being, and prompts will be given.
        toast.warning("The current node does not allow appending new components.")
        return
      }

      const parent = store.getSchemaParentById(curActiveId) // Get the parent node
      let beforeId = -1
      parent.some((item: any, index: number) => {
        let result = false
        if (item?.$$id === curActiveId) {
          beforeId = index
          result = true
        }
        return result
      })
      nextId = parent[beforeId + 1]?.$$id // ID of the next node (required when appending)
    } else {
      // The root node is currently selected and is inserted into the body by default.
      regionNodeId = curActiveId
      regionNodeRegion = "body"
    }

    let value = schemaData

    if (subRenderer && !schemaData) {
      value =
        subRenderer.scaffold ||
        ({
          type: subRenderer.type,
        } as SchemaObject)

      if (subRenderer.scaffoldForm) {
        value = await this.scaffold(subRenderer.scaffoldForm, value)
      }
    }

    const child = this.addChild(
      regionNodeId,
      regionNodeRegion,
      value,
      nextId,
      subRenderer || node.info,
      undefined, // It is not drag and drop, and there is no need to transmit drag and drop information.
      reGenerateId,
    )
    if (child && activeChild) {
      // mobx Modifying data is asynchronous
      setTimeout(() => {
        store.setActiveId(child.$$id)
      }, 100)
    }
  }

  /**
   * Determine whether the current node can add sibling nodes
   */
  canAppendSiblings() {
    const store = this.store
    const id = store.activeId
    const node = store.getNodeById(id)! // Currently selected node
    const regionNode = node.parent as EditorNodeType // parent node
    if (!node || !regionNode || !regionNode.schema) {
      return false
    } else if (regionNode.memberImmutable("")) {
      return false
    } else if (
      regionNode.schema.body ||
      (regionNode.schema.type === "flex" && regionNode.schema.items) ||
      node.schema.columns
    ) {
      return true
    }
    return false
  }

  /**
   * Append a new schema to the currently selected element
   * Note: Currently mainly used in copy & paste shortcut function keys
   * @param rendererSchema
   */
  async appendSiblingSchema(
    rendererSchema: Object,
    beforeInsert?: boolean,
    disabledAutoSelectInsertElem?: boolean,
    reGenerateId?: boolean,
  ) {
    if (!rendererSchema) {
      return
    }

    const store = this.store
    const id = store.activeId
    const node = store.getNodeById(id)! // Currently selected node
    if (!node) {
      toast.warning("Please select an element as the insertion position first.")
      return
    }
    const regionNode = node.parent as EditorNodeType // parent node

    //Insert the fields required for new elements
    let nextId = null
    let regionNodeId = null
    let regionNodeRegion = null
    if (regionNode) {
      // Parent node exists
      regionNodeId = regionNode.id
      regionNodeRegion = regionNode.region

      // Consider special cases, such as "form item container"
      if (!regionNode.region && regionNode.schema.body) {
        //Insert into the body of the parent node by default
        regionNodeRegion = "body"
      } else if (!regionNode.region && regionNode.schema?.type === "flex" && regionNode.schema.items) {
        // flex layout container
        regionNodeRegion = "items"
      } else if (!regionNode.region && !regionNode.schema.body) {
        //Other special situations will not be considered for the time being, and prompts will be given.
        toast.warning("The current node does not allow appending new components.")
        return
      }

      const parent = store.getSchemaParentById(id) // Get parent node
      let beforeId = -1
      parent.some((item: any, index: number) => {
        let result = false
        if (item.$$id === id) {
          beforeId = index
          result = true
        }
        return result
      })
      nextId = parent[beforeInsert ? beforeId : beforeId + 1]?.$$id // The ID of the next node (required when appending)

      const child = this.addChild(
        regionNodeId,
        regionNodeRegion,
        rendererSchema,
        nextId,
        node.info,
        {
          id: store.dragId,
          type: store.dragType,
          data: store.dragSchema,
        },
        reGenerateId,
      )
      if (child && !disabledAutoSelectInsertElem) {
        // mobx Modifying data is asynchronous
        setTimeout(() => {
          store.setActiveId(child.$$id)
        }, 100)
      }
    }
  }

  /**
   * Used by the insertion panel to insert the currently selected node into the currently selected node container.。
   * @param position
   */
  async insert() {
    const store = this.store
    const subRenderer = store.selectedInsertRendererInfo
    if (!subRenderer) {
      return
    }

    const id = store.insertId
    const region = store.insertRegion
    const beforeId = store.insertBeforeId // Insert the selected component in the component panel
    let value =
      subRenderer.scaffold ||
      ({
        type: subRenderer.type,
      } as SchemaObject)

    if (subRenderer.scaffoldForm) {
      value = await this.scaffold(subRenderer.scaffoldForm, value)
    }
    const child = this.addChild(id, region, value, beforeId, subRenderer)
    if (child) {
      store.closeInsertPanel()
      // mobx Modifying data is asynchronous
      setTimeout(() => {
        store.setActiveId(child.$$id)
      }, 100)
    }
  }

  /**
   * Replacement component type for use with insert panels.
   * @param position
   */
  async replace() {
    const store = this.store
    const subRenderer = store.selectedInsertRendererInfo

    if (!subRenderer) {
      return
    }

    const id = store.insertOrigId
    let value = subRenderer.scaffold || {
      type: subRenderer.type,
    }
    const region = store.insertRegion

    if (subRenderer.scaffoldForm) {
      value = await this.scaffold(subRenderer.scaffoldForm, value)
    }

    if (this.replaceChild(id, value, subRenderer, region)) {
      store.closeInsertPanel()

      // There is a slight delay in updating the outline, and when regenerating, the information in the outline is read.
      // So a delay is needed
      setTimeout(() => {
        this.rebuild()
      }, 4)
    }
  }

  /**
   * Determine whether the current element is positioned as a flex container
   */
  isFlexContainer(id: string) {
    return this.store.isFlexContainer(id)
  }

  /**
   * Determine whether the current element is a flex layout subcontainer
   * Note: In order to add additional layout-related configuration items
   */
  isFlexItem(id: string) {
    return this.store.isFlexItem(id)
  }
  isFlexColumnItem(id: string) {
    return this.store.isFlexColumnItem(id)
  }

  // Determine whether it is a special layout element: absolute layout or fixed layout
  isSpecialLayout(curSchema: any) {
    const curSchemaStyle = curSchema?.style || {}
    if (curSchemaStyle?.position === "fixed" || curSchemaStyle?.position === "absolute") {
      return true
    }
    return false
  }

  /**
   * Determine whether the current element is a special layout element (fixed, absolute)
   * Note: To support dragging position
   */
  draggableContainer(id: string) {
    return this.store.draggableContainer(id)
  }

  /**
   * Update the position of special layout elements (fixed, absolute)
   */
  updateContainerStyleByDrag(dragId: string, dx: number, dy: number) {
    this.store.updateContainerStyleByDrag(dragId, dx, dy)
  }

  /**
   * The entrance is in Preview, used to obtain the editor information corresponding to the renderer.
   * After getting this information, it will wrap a layer where the original renderer is rendered, and create a highlight box to display when clicking or hovering.
   * @param renderer amis element renderer, such as { type: 'audio', component: 'xxx renderer'}
   * @param path node path
   * @param schema node schema data
   */
  getEditorInfo(renderer: RendererConfig, path: string, schema: any): RendererInfo | null | undefined {
    let info: RendererInfo | null = null
    /** Get the data path of the current node in the page schema based on the node's unique id */
    const schemaPath = schema.$$id ? this.store.getSchemaPath(schema.$$id) : ""
    const context: RendererInfoResolveEventContext = {
      renderer,
      path,
      schemaPath,
      schema,
    }

    const event = this.trigger("before-resolve-editor-info", context)

    if (event.prevented) {
      return event.context.data
    }

    this.plugins.some((editor) => {
      /** Obtain key information from the renderer schema of amis-editor */
      const result = editor.getRendererInfo?.(context)

      if (result) {
        info = {
          id: schema.$$id,
          ...result,
          type: schema.type,
          plugin: editor,
          renderer: renderer,
          dialogTitle: schema.type === "dialog" || schema.type === "drawer" ? schema.title : "",
          dialogType: schema.dialogType,
          schemaPath,
        }
        return true
      }

      return false
    })

    const afterEvent = this.trigger("after-resolve-editor-info", {
      ...context,
      data: info,
    })

    return afterEvent.context.data
  }

  /**
   * The reason why the panel's configuration modification method does not call store.changeValue directly is because
   * There is also event logic here, and some logic can be written in the plug-in.
   * @param value
   * @param diff
   */
  @autobind
  panelChangeValue(
    value: any,
    diff?: any,
    changeFilter?: (schema: any, value: any, id: string, diff?: any) => any,
    id = this.store.activeId,
  ) {
    const store = this.store
    const context: ChangeEventContext = {
      ...this.buildEventContext(id),
      value,
      diff,
    }

    const event = this.trigger("before-update", context)
    if (event.prevented) {
      return
    }

    store.changeValue(value, diff, changeFilter, id)

    this.trigger("after-update", {
      ...context,
      schema: context.node.schema, // schema is new because it has been modified
    })
  }

  /**
   * Open a sub-editor, such as a pop-up box or something. There is no way to directly edit the editor, so you need to use a new editor in the pop-up window to edit.
   * @param config
   */
  openSubEditor(config: SubEditorContext) {
    if (["dialog", "drawer", "confirmDialog"].includes(config.value.type) && this.parent) {
      let parent: EditorManager | undefined = this.parent
      const id = config.value.$$originId || config.value.$$id
      while (parent) {
        if (parent.store.schema.$$id === id) {
          toast.warning("The selected pop-up window has been opened and cannot be opened multiple times")
          return
        }

        parent = parent.parent
      }
    }
    this.store.openSubEditor(config)
  }

  /**
   * Open the right-click menu of the corresponding node.
   * @param id
   * @param region
   * @param info
   */
  openContextMenu(
    id: string,
    region: string,
    info: {
      x: number
      y: number
    },
  ) {
    let menus: Array<ContextMenuItem> = []
    const commonContext = this.buildEventContext(id)
    const context: ContextMenuEventContext = {
      ...commonContext,
      selections: this.store.selections.map((item) => this.buildEventContext(item)),
      region,
      data: menus,
    }

    menus = this.buildContextMenus(context)

    if (!menus.length) {
      return
    }

    this.store.setContextId(id)
    openContextMenus(
      {
        x: info.x,
        y: info.y,
      },
      menus,
      (ctx) => ctx.state.isOpened && this.store.setContextId(""),
    )
  }

  // Generate right-click menu content
  buildContextMenus(context: ContextMenuEventContext) {
    this.plugins.forEach((editor) => {
      editor.buildEditorContextMenu?.(context, context.data)
    })

    this.trigger("build-context-menus", context)

    return context.data
  }

  closeContextMenu() {}

  /**
   * Move the currently selected node up
   */
  moveUp() {
    const store = this.store
    if (!store.activeId) {
      return
    }

    const node = store.getNodeById(store.activeId)!
    const regionNode = node.parent
    const host = node.host

    const commonContext = this.buildEventContext(host)
    const context: MoveEventContext = {
      ...commonContext,
      sourceId: node.id,
      direction: "up",
      beforeId: node.prevSibling?.id,
      region: regionNode.region,
      regionNode: regionNode,
    }

    const event = this.trigger("before-move", context)
    if (!event.prevented) {
      store.moveUp(context)
      // this.buildToolbars();
      this.trigger("after-move", context)
      this.trigger("after-update", context)
    }
  }

  /**
   * Move the currently selected node down
   */
  moveDown() {
    const store = this.store
    if (!store.activeId) {
      return
    }

    const node = store.getNodeById(store.activeId)!
    const regionNode = node.parent
    const host = node.host

    const commonContext = this.buildEventContext(host)
    const context: MoveEventContext = {
      ...commonContext,
      sourceId: node.id,
      direction: "down",
      beforeId: node.nextSibling?.nextSibling?.id,
      region: regionNode.region,
      regionNode: regionNode,
    }

    const event = this.trigger("before-move", context)
    if (!event.prevented) {
      store.moveDown(context)
      // this.buildToolbars();
      this.trigger("after-move", context)
      this.trigger("after-update", context)
    }
  }

  /**
   * Delete node
   */
  del(ids: string | Array<string>) {
    if (!ids || !ids.length) {
      return
    }
    const id = Array.isArray(ids) ? ids[0] : ids

    const context: DeleteEventContext = {
      ...this.buildEventContext(id),
      data: Array.isArray(ids) ? ids.concat() : [],
    }

    const event = this.trigger("before-delete", context)
    if (!event.prevented) {
      Array.isArray(context.data) && context.data.length ? this.store.delMulti(context.data) : this.store.del(context)
      this.trigger("after-delete", context)
    }
  }

  /**
   * Duplicate node
   * @param id
   */
  duplicate(id: string | Array<string>) {
    this.store.duplicate(id)
  }

  /**
   * Copy node configuration
   * @param id
   */
  copy(id: string, toastText: string = "Copied") {
    const json = this.store.getValueOf(id)
    this.clipboardData = stringify(json)
    toast.info("configuration item" + toastText)
  }

  /**
   * Cut the current node and copy the configuration to the clipboard.
   * @param id
   */
  cut(id: string) {
    this.copy(id, "Cut")
    this.del(id)
  }

  /**
   * Apply paste on the node.
   * @param id
   * @param region
   */
  async paste(id: string, region?: string) {
    if (!this.clipboardData) {
      alert("Clipboard content is empty")
      return
    }
    const json = reGenerateID(parse(this.clipboardData))
    if (region) {
      this.addChild(id, region, json)
      return
    }
    if (this.replaceChild(id, json)) {
      setTimeout(() => {
        this.store.highlightNodes.forEach((node) => {
          node.calculateHighlightBox()
        })
        this.updateConfigPanel(json.type)
      })
    }
  }

  /**
   * Regenerate the duplicate ID of the current node
   */
  reGenerateNodeDuplicateID(types: Array<string> = []) {
    const node = this.store.getNodeById(this.store.activeId)
    if (!node) {
      return
    }
    let schema = node.schema
    let changed = false

    //Support filtering certain types of components by type
    let tags = node.info?.plugin?.tags || []
    if (!Array.isArray(tags)) {
      tags = [tags]
    }
    if (types.length && !tags.some((tag) => types.includes(tag))) {
      return
    }

    // Record the mapping relationship between the old and new IDs of components to facilitate replacement of event actions within the current component.
    let idRefs: { [propKey: string]: string } = {}

    // If there are multiple duplicate components, regenerate the ID
    JSONTraverse(schema, (value: any, key: string, host: any) => {
      const isNodeIdFormat = typeof value === "string" && value.indexOf("u:") === 0
      if (key === "id" && isNodeIdFormat && host) {
        let sameNodes = JSONGetNodesById(this.store.schema, value, "id")
        if (sameNodes && sameNodes.length > 1) {
          let newId = generateNodeId()
          idRefs[value] = newId
          host[key] = newId
          changed = true
        }
      }
      return value
    })

    if (changed) {
      //Replace the possible IDs in the event actions in the current component
      JSONTraverse(schema, (value: any, key: string, host: any) => {
        const isNodeIdFormat = typeof value === "string" && value.indexOf("u:") === 0
        if (key === "componentId" && isNodeIdFormat && idRefs[value]) {
          host.componentId = idRefs[value]
        }
        return value
      })
      this.replaceChild(node.id, schema)
    }
  }

  /**
   * Clear area
   * @param id
   * @param region
   */
  emptyRegion(id: string, region: string) {
    this.store.emptyRegion(id, region)

    setTimeout(() => {
      // If there is no currently selected element, the current element is automatically selected.
      if (!this.store.activeId || !this.store.getNodeById(this.store.activeId)) {
        this.store.setActiveId(id)
      }
    }, 100)
  }

  /**
   * Add a child, return the node if successful, and return null if failed.
   * @param id target component id
   * @param region target component region
   * @param json
   * @param position
   */
  addChild(
    id: string,
    region: string,
    json: any,
    beforeId?: string,
    subRenderer?: SubRendererInfo | RendererInfo,
    dragInfo?: {
      id: string
      type: string
      data: any
      position?: string
    },
    reGenerateId?: boolean,
  ): any | null {
    const store = this.store
    let index: number = -1
    const commonContext = this.buildEventContext(id)

    // Fill in the id. Some scaffolds generate complex layouts, etc., and the id is automatically filled in.
    let curChildJson = JSONPipeIn(json, reGenerateId ?? true)

    if (beforeId) {
      const arr = commonContext.schema[region]
      if (Array.isArray(arr)) {
        index = findIndex(arr, (item: any) => item?.$$id === beforeId)
      }
    }

    const context: InsertEventContext = {
      ...commonContext,
      beforeId: beforeId,
      index,
      region: region,
      data: curChildJson,
      subRenderer,
      dragInfo,
    }

    const event = this.trigger("before-insert", context)
    if (!event.prevented) {
      const child = store.insertSchema(event)
      this.trigger("after-insert", context)
      return child
    }

    return null
  }

  /**
   *Mobile node
   * @param id target component id
   * @param region target component region
   * @param sourceId moved node id
   * @param beforeId Which node to move to
   */
  move(id: string, region: string, sourceId: string, beforeId?: string, dragInfo?: any): boolean {
    const store = this.store

    const context: MoveEventContext = {
      ...this.buildEventContext(id),
      beforeId,
      region: region,
      sourceId,
      dragInfo,
    }

    const event = this.trigger("before-move", context)
    if (!event.prevented) {
      store.moveSchema(event)

      this.trigger("after-move", context)
      return true
    }

    return false
  }

  /**
   * Replace node.
   * @param id
   * @param json
   */
  replaceChild(
    id: string,
    json: any,
    subRenderer?: SubRendererInfo | RendererInfo,
    region?: string,
    reGenerateId?: boolean,
  ): boolean {
    // Convert to normal json and add node id
    let curJson = JSONPipeIn(json, reGenerateId ?? true)

    const context: ReplaceEventContext = {
      ...this.buildEventContext(id),
      data: { ...curJson },
      subRenderer,
      region,
    }
    const event = this.trigger("before-replace", context)

    if (!event.prevented && event.context.data) {
      this.store.replaceChild(id, event.context.data)
      this.trigger("after-replace", context)
      return true
    }

    return false
  }

  setActiveId(id: string) {
    this.store.setActiveId(id)
  }

  /**
   * Open the editing panel of a node
   * @param id
   */
  openConfigPanel(id: string) {
    const store = this.store

    if (store.activeId !== id) {
      store.setActiveId(id)
    }

    store.changePanelKey("config")
  }

  /**
   * Open the code panel of a node
   * @param id
   */
  openCodePanel(id: string) {
    const store = this.store

    if (store.activeId !== id) {
      store.setActiveId(id)
    }

    store.changePanelKey("code")
  }

  toggleSelection(id: string) {
    const store = this.store
    let selections = store.selections.concat()

    if (!selections.length && store.activeId) {
      selections.push(store.activeId)
    }

    const idx = selections.indexOf(id)

    if (!~idx) {
      selections.push(id)
    } else {
      selections.splice(idx, 1)
    }
    this.setSelection(selections, id)
  }

  setSelection(selections: Array<string>, id: string = selections[0]) {
    const store = this.store
    const commonContext = this.buildEventContext(id)
    const context: SelectionEventContext = {
      ...commonContext,
      selections: selections.map((item) => this.buildEventContext(item)),
      data: selections,
    }

    const event = this.trigger("selection-change", context)
    if (event.prevented) {
      return
    }
    selections = context.data

    if (selections.length === 1) {
      store.setActiveId(selections[0])
    } else {
      store.setSelections(selections) // Multiple choice
    }
  }

  startDrag(id: string, e: React.DragEvent) {
    e.persist()
    this.dnd.startDrag(id, e.nativeEvent)
  }

  async scaffold(form: any, value: any): Promise<SchemaObject> {
    const scaffoldFormData = form.pipeIn ? await form.pipeIn(value) : value

    return new Promise((resolve) => {
      this.store.openScaffoldForm({
        ...form,
        value: scaffoldFormData,
        callback: resolve,
      })
    })
  }

  async reScaffold(id: string, form: ScaffoldForm, value: any) {
    const replaceWith = await this.scaffold(form, value)
    this.replaceChild(id, replaceWith)
  }

  // Get contextual data in real time based on element ID
  async reScaffoldV2(id: string) {
    const commonContext = this.buildEventContext(id)
    const scaffoldForm = commonContext.info?.scaffoldForm
    const curSchema = commonContext.schema
    const replaceWith = await this.scaffold(scaffoldForm, curSchema)
    this.replaceChild(id, replaceWith)
  }

  // 用来纠正一些错误的配置。
  lazyPatchSchema = debounce(this.patchSchema.bind(this), 250, {
    leading: false,
    trailing: true,
  })

  patching = false
  patchingInvalid = false
  patchSchema(force = false) {
    if (this.patching) {
      this.patchingInvalid = true
      return
    }
    this.patching = true
    this.patchingInvalid = false
    const batch: Array<{ id: string; value: any }> = []
    const ids = new Map()
    let patchList = (list: Array<EditorNodeType>) => {
      // 深度优先
      list.forEach((node: EditorNodeType) => {
        if (node.uniqueChildren && node.uniqueChildren.length) {
          patchList(node.uniqueChildren)
        }

        if (isAlive(node) && !node.isRegion) {
          const schema = node.schema
          node.patch(this.store, force, (id, value) => batch.unshift({ id, value }), ids)
          node.schemaPath && ids.set(schema.id, node.schemaPath)
        }
      })
    }

    patchList(this.store.root.children)
    this.store.batchChangeValue(batch)
    this.patching = false
    this.patchingInvalid && this.patchSchema(force)
  }

  /**
   * Hack the settings with special regions.
   */
  async hackRenderers(renderers = getRenderers()) {
    const toHackList: Array<{
      renderer: RendererConfig
      regions?: Array<RegionConfig>
      overrides?: any
    }> = []

    await Promise.all(renderers.map((renderer) => loadAsyncRenderer(renderer)))

    renderers.forEach((renderer) => {
      const plugins = this.plugins.filter(
        (plugin) =>
          (Array.isArray(plugin?.regions) &&
            plugin.regions.some(
              (region) => region.renderMethod && (region.rendererName ?? plugin.rendererName) === renderer.name,
            )) ||
          (plugin.overrides && (plugin.overrideTargetRendererName ?? plugin.rendererName) === renderer.name),
      )

      plugins.forEach((plugin) => {
        const complexRegions = plugin.regions?.filter(
          (region) => region.renderMethod && (region.rendererName ?? plugin.rendererName) === renderer.name,
        )

        complexRegions?.length &&
          toHackList.push({
            renderer,
            regions: complexRegions,
          })

        if (plugin.overrides && (plugin.overrideTargetRendererName ?? plugin.rendererName) === renderer.name) {
          toHackList.push({
            renderer,
            overrides: plugin.overrides,
          })
        }
      })
    })
    toHackList.forEach(({ regions, renderer, overrides }) => this.hackIn(renderer, regions, overrides))

    this.store.markReady()
  }

  /**
   * The entrance is in Preview, which is used to generate a shortcut toolbar including the element header.
   * @param info
   * @param render
   */
  makeWrapper(info: RendererInfo, render: RendererConfig): any {
    return makeWrapper(this, info, render)
  }

  /**
   * Used to generate property configuration panel.
   * @param schema
   */
  makeSchemaFormRender(schema: {
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
  }) {
    return makeSchemaFormRender(this, schema)
  }

  onWidthChangeStart(
    e: MouseEvent,
    ctx: {
      dom: HTMLElement
      node: EditorNodeType
      resizer: HTMLElement
    },
  ) {
    return this.trigger("width-change-start", {
      ...ctx,
      nativeEvent: e,
    })
  }

  onHeightChangeStart(
    e: MouseEvent,
    ctx: {
      dom: HTMLElement
      node: EditorNodeType
      resizer: HTMLElement
    },
  ) {
    return this.trigger("height-change-start", {
      ...ctx,
      nativeEvent: e,
    })
  }

  onSizeChangeStart(
    e: MouseEvent,
    ctx: {
      dom: HTMLElement
      node: EditorNodeType
      resizer: HTMLElement
      store: EditorStoreType
    },
  ) {
    return this.trigger("size-change-start", {
      ...ctx,
      nativeEvent: e,
    })
  }

  openNodePopOverForm(id: string | EditorNodeType) {
    const node = typeof id === "string" ? this.store.getNodeById(id) : id
    if (!node || (!node.info?.plugin?.popOverBody && !node.info?.plugin?.popOverBodyCreator)) {
      return
    }
    const plugin = node.info.plugin!
    const store = this.store
    const context: PopOverFormContext = {
      node,
      body: plugin.popOverBodyCreator ? plugin.popOverBodyCreator(this.buildEventContext(node)) : plugin.popOverBody!,
      value: store.getValueOf(node.id),
      callback: this.panelChangeValue,
      target: () => document.querySelector(`[data-hlbox-id="${node.id}"]`) as HTMLElement,
    }
    store.openPopOverForm(context)
  }

  /**
   * Update broadcast event set (haven't figured out how to store it yet)
   *
   * @param {string} key plugin name
   * @param {RendererEvent[]} events event set
   * @memberof EditorManager
   */
  addBroadcast(event: RendererPluginEvent) {
    this.broadcasts.push(event)
  }

  /**
   * Delete the specified broadcast (haven't figured out how to store it yet)
   *
   * @param {string} id
   * @memberof EditorManager
   */
  removeBroadcast(id: string) {
    const idx = findIndex(this.broadcasts, (item) => item.eventName === id)
    this.broadcasts.splice(idx, 1)
  }

  /**
   * Get context data structure
   * @param id
   */
  async getContextSchemas(id: string | EditorNodeType, withoutSuper = false) {
    const node = typeof id === "string" ? this.store.getNodeById(id) : id
    if (!node) {
      return []
    }

    let scope: DataScope | void = undefined
    let from = node
    let region = node
    const trigger = node

    // Delete the current row record scope and keep the original scope
    for (const key in this.dataSchema.idMap) {
      if (/\-currentRow$/.test(key)) {
        this.dataSchema.removeScope(key)
      }
    }

    // Find the data domain of the nearest layer
    while (!scope && from) {
      const nodeId = from.info?.id
      const type = from.info?.type
      scope = this.dataSchema.hasScope(`${nodeId}-${type}`) ? this.dataSchema.getScope(`${nodeId}-${type}`) : undefined
      from = from.parent
      if (from?.isRegion) {
        region = from
      }
    }

    let nearestScope
    let listScope = []

    // Update all context data in the component tree and declare them as the latest data
    while (scope) {
      const [nodeId] = scope.id.split("-")
      const type = scope.id.replace(`${nodeId}-`, "")
      const scopeNode = this.store.getNodeById(nodeId, type)

      // Take the parent component of the non-repeating component id as the main data field, such as CRUD, do not display the table, only display the addition, deletion, modification and query information, to avoid two copies of data in the variable panel
      if (!nearestScope && scopeNode && !scopeNode.isSecondFactor) {
        nearestScope = scope
      }
      if (scopeNode) {
        const tmpSchema = await scopeNode?.info?.plugin?.buildDataSchemas?.(scopeNode, region, trigger)

        if (tmpSchema) {
          const jsonschema = {
            ...tmpSchema,
            ...(tmpSchema?.$id ? {} : { $id: `${scopeNode!.id}-${scopeNode!.type}` }),
          }
          scope.removeSchema(jsonschema.$id)
          scope.addSchema(jsonschema)
        }

        // Record the order of components such as each list
        if (scopeNode?.info?.isListComponent) {
          listScope.unshift(scope)

          // If the current node is a list type node, the current scope is taken from the parent node
          if (nodeId === id) {
            nearestScope = scope.parent
          }
        }
      }

      scope = withoutSuper ? undefined : scope.parent
    }

    // When each list type is nested, it is necessary to obtain data from top to bottom and execute again
    if (listScope.length > 1) {
      for (let scope of listScope) {
        const [id, type] = scope.id.split("-")
        const node = this.store.getNodeById(id, type)
        if (node) {
          const tmpSchema = await node?.info?.plugin?.buildDataSchemas?.(node, region, trigger)
          if (tmpSchema) {
            const jsonschema = {
              ...tmpSchema,
              ...(tmpSchema?.$id ? {} : { $id: `${node!.id}-${node!.type}` }),
            }
            scope.removeSchema(jsonschema.$id)
            scope.addSchema(jsonschema)
          }
        }
      }
    }
    // When the current row exists, find the bottom layer (todo: do not consider the scenario of table set service + table for now)
    const nearestScopeId =
      Object.keys(this.dataSchema.idMap).find(
        (key) => /\-currentRow$/.test(key) && !this.dataSchema.idMap[key].children?.length,
      ) || nearestScope?.id

    if (nearestScopeId) {
      this.dataSchema.switchTo(nearestScopeId)
    }

    // If the current container is a list non-data component, the scope starts from the parent scope
    if (node.info.isListComponent) {
      let lastScope = listScope[listScope.length - 1]
      this.dataSchema.switchTo(lastScope.parent!)
    }

    return withoutSuper ? this.dataSchema.current.schemas : this.dataSchema.getSchemas()
  }

  /**
   * Get available context fields to be bound
   */
  async getAvailableContextFields(node: EditorNodeType): Promise<any> {
    if (!node) {
      return
    }

    let scope: DataScope | void = undefined
    let from = node
    let region = node

    // Find the nearest data domain
    while (!scope && from) {
      scope = this.dataSchema.hasScope(`${from.id}-${from.type}`)
        ? this.dataSchema.getScope(`${from.id}-${from.type}`)
        : undefined

      /** Combo and InputTable also have their own Scope */
      if (!scope) {
        if (["combo", "input-table"].includes(from?.info?.type)) {
          break
        }
      }

      from = from.parent
      if (from?.isRegion) {
        region = from
      }
    }

    if (!scope) {
      /** If in the sub-editor, continue to search in the upper editor, but this may be limited by the data mapping of the current layer */
      if (!from && this.store.isSubEditor) {
        return this.config?.getAvaiableContextFields?.(node)
      }
      return from?.info.plugin.getAvailableContextFields?.(from, node)
    }

    while (scope) {
      const [id] = scope.id.split("-")
      const type = scope.id.substring(id.length + 1) // replace(`${id}-`, '');
      const scopeNode = this.store.getNodeById(id, type)

      if (scopeNode && !scopeNode.info?.isListComponent) {
        return scopeNode?.info.plugin.getAvailableContextFields?.(scopeNode, node)
      }

      scope = scope.parent
    }
  }

  beforeDispatchEvent(originHook: any, e: any, component: any, scoped: IScopedContext, data: any, broadcasts?: any) {
    originHook?.(e, component, scoped, data, broadcasts)

    const id = component.props.$$id || component.props.$$editor?.id
    if (id) {
      const node = this.store.getNodeById(id, component.props.type)
      node?.info?.plugin?.rendererBeforeDispatchEvent?.(node, e, JSONPipeOut(data))
    }
  }

  /**
   * Destruction function
   */
  dispose() {
    // Some plugins need to be destroyed, relying on this event
    this.trigger("dispose", {
      data: this,
    })
    delete (this as any).parent
    this.toDispose.forEach((fn) => fn())
    this.toDispose = []
    this.plugins.forEach((p) => p.dispose?.())
    this.plugins.splice(0, this.plugins.length)
    this.listeners.splice(0, this.listeners.length)
    this.broadcasts.splice(0, this.broadcasts.length)
    this.lazyPatchSchema.cancel()
    this.dnd.dispose()
  }
}
