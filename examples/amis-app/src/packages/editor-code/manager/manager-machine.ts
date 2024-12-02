import { createMachine, fromPromise, fromCallback } from 'xstate';

// Define the context for the machine
interface EditorManagerContext {
  plugins: Array<PluginInterface>;
  env: RenderOptions;
  clipboardData: string;
  hackIn: any;
  broadcasts: RendererPluginEvent[];
  pluginEvents: PluginEvents;
  pluginActions: PluginActions;
  dataSchema: DataSchema;
  variableManager: VariableManager;
  // Add other necessary context properties
}

// Define the events for the machine
type EditorManagerEvent =
  | { type: 'REGISTER_PLUGIN'; plugin: PluginClass }
  | { type: 'UNREGISTER_PLUGIN'; id: string }
  | { type: 'ADD_ELEM'; rendererIdOrSchema: string | any }
  | { type: 'MOVE_UP' }
  | { type: 'MOVE_DOWN' }
  | { type: 'DELETE'; ids: string | Array<string> }
  | { type: 'COPY'; id: string }
  | { type: 'PASTE'; id: string }
// Add other necessary events

// Define the machine
const editorManagerMachine = createMachine<EditorManagerContext, EditorManagerEvent>({
  id: 'editorManager',
  initial: 'idle',
  context: {
    plugins: [],
    env: {}, // Initialize with default or passed values
    clipboardData: '',
    hackIn: null,
    broadcasts: [],
    pluginEvents: {},
    pluginActions: {},
    dataSchema: new DataSchema([]),
    variableManager: new VariableManager(new DataSchema([]), [], {}),
    // Initialize other context properties
  },
  states: {
    idle: {
      on: {
        "REGISTER_PLUGIN": {
          "actions": ["registerPlugin"]
        },
        "UNREGISTER_PLUGIN": {
          "actions": ["unregisterPlugin"]
        },
        "ADD_ELEM": {
          "actions": ["addElem"]
        },
        "MOVE_UP": {
          "actions": ["moveUp"]
        },
        "MOVE_DOWN": {
          "actions": ["moveDown"]
        },
        "DELETE": {
          "actions": ["delete"]
        },
        "COPY": {
          "actions": ["copy"]
        },
        "PASTE": {
          "actions": ["paste"]
        },
        "INSERT": {
          "actions": ["insert"]
        },
        "REPLACE": {
          "actions": ["replace"]
        },
        "DUPLICATE": {
          "actions": ["duplicate"]
        },
        "CUT": {
          "actions": ["cut"]
        },
        "TOGGLE_SELECTION": {
          "actions": ["toggleSelection"]
        },
        "SET_SELECTION": {
          "actions": ["setSelection"]
        },
        "START_DRAG": {
          "actions": ["startDrag"]
        },
        "SHOW_INSERT_PANEL": {
          "actions": ["showInsertPanel"]
        },
        "SHOW_REPLACE_PANEL": {
          "actions": ["showReplacePanel"]
        },
        "SHOW_RENDERER_PANEL": {
          "actions": ["showRendererPanel"]
        },
        "OPEN_CONTEXT_MENU": {
          "actions": ["openContextMenu"]
        },
        "CLOSE_CONTEXT_MENU": {
          "actions": ["closeContextMenu"]
        },
        "BUILD_RENDERERS": {
          "actions": ["buildRenderers"]
        },
        "BUILD_PANELS": {
          "actions": ["buildPanels"]
        },
        "BUILD_TOOLBARS": {
          "actions": ["buildToolbars"]
        },
        "UPDATE_CONFIG_PANEL": {
          "actions": ["updateConfigPanel"]
        },
        "SWITCH_TO_REGION": {
          "actions": ["switchToRegion"]
        },
        "OPEN_CONFIG_PANEL": {
          "actions": ["openConfigPanel"]
        },
        "OPEN_CODE_PANEL": {
          "actions": ["openCodePanel"]
        },
        "DISPOSE": {
          "actions": ["dispose"]
        }
      }
    }
    // Define other states if necessary
  }
}, {
  actions: {

      registerPlugin: assign(({ context, event }) => {
        // Logic for registering a plugin
      }),
      unregisterPlugin: assign(({ context, event }) => {
        // Logic for unregistering a plugin
      }),
      addElem: assign(({ context, event }) => {
        // Logic for adding an element
      }),
      moveUp: assign(({ context, event }) => {
        // Logic for moving an element up
      }),
      moveDown: assign(({ context, event }) => {
        // Logic for moving an element down
      }),
      delete: assign(({ context, event }) => {
        // Logic for deleting an element
      }),
      copy: assign(({ context, event }) => {
        // Logic for copying an element
      }),
      paste: assign(({ context, event }) => {
        // Logic for pasting an element
      }),
      insert: assign(({ context, event }) => {
        // Logic for inserting an element
      }),
      replace: assign(({ context, event }) => {
        // Logic for replacing an element
      }),
      duplicate: assign(({ context, event }) => {
        // Logic for duplicating an element
      }),
      cut: assign(({ context, event }) => {
        // Logic for cutting an element
      }),
      toggleSelection: assign(({ context, event }) => {
        // Logic for toggling selection
      }),
      setSelection: assign(({ context, event }) => {
        // Logic for setting selection
      }),
      startDrag: assign(({ context, event }) => {
        // Logic for starting a drag operation
      }),
      showInsertPanel: assign(({ context, event }) => {
        // Logic for showing the insert panel
      }),
      showReplacePanel: assign(({ context, event }) => {
        // Logic for showing the replace panel
      }),
      showRendererPanel: assign(({ context, event }) => {
        // Logic for showing the renderer panel
      }),
      openContextMenu: assign(({ context, event }) => {
        // Logic for opening a context menu
      }),
      closeContextMenu: assign(({ context, event }) => {
        // Logic for closing a context menu
      }),
      buildRenderers: assign(({ context, event }) => {
        // Logic for building renderers
      }),
      buildPanels: assign(({ context, event }) => {
        // Logic for building panels
      }),
      buildToolbars: assign(({ context, event }) => {
        // Logic for building toolbars
      }),
      updateConfigPanel: assign(({ context, event }) => {
        // Logic for updating the config panel
      }),
      switchToRegion: assign(({ context, event }) => {
        // Logic for switching to a region
      }),
      openConfigPanel: assign(({ context, event }) => {
        // Logic for opening the config panel
      }),
      openCodePanel: assign(({ context, event }) => {
        // Logic for opening the code panel
      }),
      dispose: assign(({ context, event }) => {
        // Logic for disposing resources
      })
    },
  actors: {
    registerPlugin: fromCallback(({ sendBack, receive }) => {
      // Logic for registering a plugin
      receive((event) => {
        if (event.type === 'REGISTER_PLUGIN') {
          // Handle plugin registration
          sendBack({ type: 'PLUGIN_REGISTERED' });
        }
      });
    }),
    unregisterPlugin: fromCallback(({ sendBack, receive }) => {
      // Logic for unregistering a plugin
      receive((event) => {
        if (event.type === 'UNREGISTER_PLUGIN') {
          // Handle plugin unregistration
          sendBack({ type: 'PLUGIN_UNREGISTERED' });
        }
      });
    }),
    addElem: fromPromise(async ({ context, event }) => {
      // Logic for adding an element
      return new Promise((resolve) => {
        // Simulate async operation
        setTimeout(() => {
          resolve({ type: 'ELEM_ADDED' });
        }, 1000);
      });
    }),
    moveUp: fromTransition(
      (state, event) => {
        if (event.type === 'MOVE_UP') {
          // Logic for moving an element up
          return { ...state, moved: true };
        }
        return state;
      },
      { moved: false }
    ),
    moveDown: fromTransition(
      (state, event) => {
        if (event.type === 'MOVE_DOWN') {
          // Logic for moving an element down
          return { ...state, moved: true };
        }
        return state;
      },
      { moved: false }
    ),
    delete: fromCallback(({ sendBack, receive }) => {
      // Logic for deleting an element
      receive((event) => {
        if (event.type === 'DELETE') {
          // Handle deletion
          sendBack({ type: 'DELETED' });
        }
      });
    }),
    copy: fromCallback(({ sendBack, receive }) => {
      // Logic for copying an element
      receive((event) => {
        if (event.type === 'COPY') {
          // Handle copy
          sendBack({ type: 'COPIED' });
        }
      });
    }),
    paste: fromPromise(async ({ context, event }) => {
      // Logic for pasting an element
      return new Promise((resolve) => {
        // Simulate async operation
        setTimeout(() => {
          resolve({ type: 'PASTED' });
        }, 1000);
      });
    }),
    insert: fromPromise(async ({ context, event }) => {
      // Logic for inserting an element
      return new Promise((resolve) => {
        // Simulate async operation
        setTimeout(() => {
          resolve({ type: 'INSERTED' });
        }, 1000);
      });
    }),
    replace: fromPromise(async ({ context, event }) => {
      // Logic for replacing an element
      return new Promise((resolve) => {
        // Simulate async operation
        setTimeout(() => {
          resolve({ type: 'REPLACED' });
        }, 1000);
      });
    }),
    duplicate: fromCallback(({ sendBack, receive }) => {
      // Logic for duplicating an element
      receive((event) => {
        if (event.type === 'DUPLICATE') {
          // Handle duplication
          sendBack({ type: 'DUPLICATED' });
        }
      });
    }),
    cut: fromCallback(({ sendBack, receive }) => {
      // Logic for cutting an element
      receive((event) => {
        if (event.type === 'CUT') {
          // Handle cut
          sendBack({ type: 'CUT' });
        }
      });
    }),
    toggleSelection: fromCallback(({ sendBack, receive }) => {
      // Logic for toggling selection
      receive((event) => {
        if (event.type === 'TOGGLE_SELECTION') {
          // Handle toggle
          sendBack({ type: 'SELECTION_TOGGLED' });
        }
      });
    }),
    setSelection: fromCallback(({ sendBack, receive }) => {
      // Logic for setting selection
      receive((event) => {
        if (event.type === 'SET_SELECTION') {
          // Handle set selection
          sendBack({ type: 'SELECTION_SET' });
        }
      });
    }),
    startDrag: fromCallback(({ sendBack, receive }) => {
      // Logic for starting a drag operation
      receive((event) => {
        if (event.type === 'START_DRAG') {
          // Handle drag start
          sendBack({ type: 'DRAG_STARTED' });
        }
      });
    }),
    showInsertPanel: fromCallback(({ sendBack, receive }) => {
      // Logic for showing the insert panel
      receive((event) => {
        if (event.type === 'SHOW_INSERT_PANEL') {
          // Handle show insert panel
          sendBack({ type: 'INSERT_PANEL_SHOWN' });
        }
      });
    }),
    showReplacePanel: fromCallback(({ sendBack, receive }) => {
      // Logic for showing the replace panel
      receive((event) => {
        if (event.type === 'SHOW_REPLACE_PANEL') {
          // Handle show replace panel
          sendBack({ type: 'REPLACE_PANEL_SHOWN' });
        }
      });
    }),
    showRendererPanel: fromCallback(({ sendBack, receive }) => {
      // Logic for showing the renderer panel
      receive((event) => {
        if (event.type === 'SHOW_RENDERER_PANEL') {
          // Handle show renderer panel
          sendBack({ type: 'RENDERER_PANEL_SHOWN' });
        }
      });
    }),
    openContextMenu: fromCallback(({ sendBack, receive }) => {
      // Logic for opening a context menu
      receive((event) => {
        if (event.type === 'OPEN_CONTEXT_MENU') {
          // Handle open context menu
          sendBack({ type: 'CONTEXT_MENU_OPENED' });
        }
      });
    }),
    closeContextMenu: fromCallback(({ sendBack, receive }) => {
      // Logic for closing a context menu
      receive((event) => {
        if (event.type === 'CLOSE_CONTEXT_MENU') {
          // Handle close context menu
          sendBack({ type: 'CONTEXT_MENU_CLOSED' });
        }
      });
    }),
    buildRenderers: fromPromise(async ({ context, event }) => {
      // Logic for building renderers
      return new Promise((resolve) => {
        // Simulate async operation
        setTimeout(() => {
          resolve({ type: 'RENDERERS_BUILT' });
        }, 1000);
      });
    }),
    buildPanels: fromPromise(async ({ context, event }) => {
      // Logic for building panels
      return new Promise((resolve) => {
        // Simulate async operation
        setTimeout(() => {
          resolve({ type: 'PANELS_BUILT' });
        }, 1000);
      });
    }),
    buildToolbars: fromPromise(async ({ context, event }) => {
      // Logic for building toolbars
      return new Promise((resolve) => {
        // Simulate async operation
        setTimeout(() => {
          resolve({ type: 'TOOLBARS_BUILT' });
        }, 1000);
      });
    }),
    updateConfigPanel: fromCallback(({ sendBack, receive }) => {
      // Logic for updating the config panel
      receive((event) => {
        if (event.type === 'UPDATE_CONFIG_PANEL') {
          // Handle update config panel
          sendBack({ type: 'CONFIG_PANEL_UPDATED' });
        }
      });
    }),
    switchToRegion: fromCallback(({ sendBack, receive }) => {
      // Logic for switching to a region
      receive((event) => {
        if (event.type === 'SWITCH_TO_REGION') {
          // Handle switch to region
          sendBack({ type: 'REGION_SWITCHED' });
        }
      });
    }),
    openConfigPanel: fromCallback(({ sendBack, receive }) => {
      // Logic for opening the config panel
      receive((event) => {
        if (event.type === 'OPEN_CONFIG_PANEL') {
          // Handle open config panel
          sendBack({ type: 'CONFIG_PANEL_OPENED' });
        }
      });
    }),
    openCodePanel: fromCallback(({ sendBack, receive }) => {
      // Logic for opening the code panel
      receive((event) => {
        if (event.type === 'OPEN_CODE_PANEL') {
          // Handle open code panel
          sendBack({ type: 'CODE_PANEL_OPENED' });
        }
      });
    }),
    dispose: fromCallback(({ sendBack, receive }) => {
      // Logic for disposing resources
      receive((event) => {
        if (event.type === 'DISPOSE') {
          // Handle dispose
          sendBack({ type: 'DISPOSED' });
        }
      });
    })
  });

export default editorManagerMachine;




const buildJSONSchemaUri = ({ activeId, plugins, }) => {
  const id = this.store.activeId;
  let jsonschemaUri = '';

  if (id) {
    const context: RendererJSONSchemaResolveEventContext =
      buildEventContext(id);

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

export function normalizeScene(
  plugins?: Array<
    PluginClass | [PluginClass, Record<string, any> | (() => Record<string, any>)]
  >
): Array<PluginClass | [PluginClass, Record<string, any> | (() => Record<string, any>)]> {
  return (
    plugins?.map(klass => {
      let options;
      if (Array.isArray(klass)) {
        options = klass[1];
        klass = klass[0];
      }

      const scene = Array.from(new Set(['global'].concat(klass.scene || 'global')));
      klass.scene = scene;
      return options ? [klass, options] : klass;
    }) || []
  );
}

export function dynamicAddPlugin(
  manager: EditorManager,
  pluginName: string
) {
  if (!pluginName) {
    return;
  }

  if (manager.plugins.some((plugin: PluginInterface) => plugin && plugin.name === pluginName)) {
    console.warn(`[amis-editor]当前已有${pluginName}插件`);
    return;
  }

  let newPluginClass: PluginClass | undefined = manager.builtInPlugins.find(
    (Plugin: any) => Plugin.prototype && Plugin.prototype.name === pluginName
  );

  if (!newPluginClass && window.AMISEditorCustomPlugins) {
    newPluginClass = window.AMISEditorCustomPlugins[pluginName];
  }

  if (newPluginClass) {
    const newPlugin = new newPluginClass(manager);
    newPlugin.order = newPlugin.order ?? 0;
    manager.plugins.push(newPlugin);

    manager.plugins.sort((a, b) => a.order! - b.order!);

    if (newPlugin.rendererName) {
      manager.pluginEvents[newPlugin.rendererName] = newPlugin.events || [];
      manager.pluginActions[newPlugin.rendererName] = newPlugin.actions || [];
    }

    manager.buildRenderers();
  }
}

export function buildRenderersAndPanels(manager: EditorManager) {
  setTimeout(async () => {
    const { store } = manager;
    if (!store.activeId && store?.schema?.$$id) {
      await manager.buildRenderers();
      manager.buildPanels(store.schema.$$id);
    }
  }, 200);
}

export function buildEventContext(
  store: EditorStoreType,
  idOrNode: string | EditorNodeType
) {
  const node = typeof idOrNode === 'string' ? store.getNodeById(idOrNode)! : idOrNode;
  const schema = store.getSchema(node.id);
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

export function buildJSONSchemaUri(manager: EditorManager) {
  const id = manager.store.activeId;
  let jsonschemaUri = '';

  if (id) {
    const context: RendererJSONSchemaResolveEventContext = manager.buildEventContext(id);

    const event = manager.trigger('before-resolve-json-schema', context);
    jsonschemaUri = event.context.data;
    if (!event.prevented) {
      manager.plugins.forEach(editor => {
        if (jsonschemaUri) {
          return;
        }

        const result = editor.buildJSONSchema?.(context);

        if (result) {
          jsonschemaUri = result;
        }
      });

      context.data = jsonschemaUri;
      const event = manager.trigger('after-resolve-json-schema', context);
      jsonschemaUri = event.data;
    }
  }

  manager.store.setJSONSchemaUri(jsonschemaUri);
}

export function buildToolbars(
  store: EditorStoreType,
  plugins: Array<PluginInterface>
) {
  const id = store.activeId;
  const toolbars: Array<BasicToolbarItem> = [];

  if (id) {
    const commonContext = buildEventContext(store, id);
    plugins.forEach(editor => {
      const context: BaseEventContext = {
        ...commonContext
      };
      editor.buildEditorToolbar?.(context, toolbars);
    });

    trigger('build-toolbars', {
      ...commonContext,
      data: toolbars
    });
  }

  store.setActiveToolbars(
    toolbars.map(item => ({
      ...item,
      order: item.order || 0,
      id: guid()
    }))
  );
}

export function collectPanels(
  store: EditorStoreType,
  plugins: Array<PluginInterface>,
  node: EditorNodeType,
  triggerEvent = false,
  secondFactor = false
): Array<BasicPanelItem> {
  let panels: Array<BasicPanelItem> = [];

  if (node) {
    const context: BuildPanelEventContext = {
      ...buildEventContext(store, node),
      secondFactor,
      data: panels,
      selections: store.selections.map(item => buildEventContext(store, item))
    };

    plugins.forEach(editor => {
      editor.buildEditorPanel?.(context, panels);
    });

    triggerEvent && trigger('build-panels', context);
    panels = context.data || panels;
    if (context.changeLeftPanelKey) {
      store.changeLeftPanelKey(context.changeLeftPanelKey);
    }
  }

  return panels;
}


export function buildPanels(
  store: EditorStoreType,
  plugins: Array<PluginInterface>,
  curRendererId?: string
) {
  let id = curRendererId || store.activeId;
  let panels: Array<BasicPanelItem> = [];

  if (!id && store?.filteredSchema) {
    id = store?.filteredSchema.$$id;
  }

  if (id || store.selections.length) {
    id = id || store.selections[0];
    const node = store.getNodeById(id);
    panels = node ? collectPanels(store, plugins, node, true) : panels;
  }

  store.setPanels(
    panels.map(item => ({
      ...item,
      order: item.order || 0
    }))
  );
}

export async function collectRenderers(
  store: EditorStoreType,
  plugins: Array<PluginInterface>,
  region?: string,
  activeContainerId: string = store.activeContainerId
): Promise<Array<SubRendererInfo>> {
  const subRenderers: Array<SubRendererInfo> = [];

  let id = activeContainerId;

  if (!id && store?.schema) {
    id = store?.schema.$$id;
  }

  if (!id) {
    return subRenderers;
  }

  const node = store.getNodeById(id);

  if (!node) {
    return subRenderers;
  }

  const schema = store.getSchema(id);
  const context = {
    node,
    id: node.id,
    info: node.info!,
    path: node.path,
    schemaPath: node.schemaPath,
    schema,
    region
  };
  let asyncUpdateCompPlugins = [];

  for (let index = 0, size = plugins.length; index < size; index++) {
    const pluginItem = plugins[index];
    let subRenderer = await pluginItem.buildSubRenderers?.(
      context,
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
        context,
        subRenderers,
        getRenderers()
      );
    }
  }

  return subRenderers.filter(renderer => !renderer.disabledRendererPlugin);
}

export async function buildRenderers(
  store: EditorStoreType,
  plugins: Array<PluginInterface>,
  region?: string
) {
  const curRenderers = await collectRenderers(store, plugins, region);
  store.setSubRenderers(curRenderers);
  store.changeSubRendererRegion(region || '');
}

export async function rebuild(
  store: EditorStoreType,
  plugins: Array<PluginInterface>
) {
  await buildRenderers(store, plugins);
  buildToolbars(store, plugins);
  buildPanels(store, plugins);
}

export function updateConfigPanel(
  store: EditorStoreType,
  plugins: Array<PluginInterface>,
  pluginType?: string
) {
  const { activeId, getSchema, getNodeById } = store;
  let curPluginType = pluginType;

  if (!curPluginType && activeId) {
    const curSchema = getSchema(activeId);
    curPluginType = curSchema.type;
  }

  if (curPluginType && activeId) {
    const panels = store.panels.concat();
    const curNode = getNodeById(activeId);
    if (curPluginType && curNode) {
      const curPlugin = plugins.find(
        item => item.rendererName === curPluginType
      );

      panels.splice(
        panels.findIndex(item => item.key === 'config'),
        1
      );

      const context: BuildPanelEventContext = {
        ...buildEventContext(store, curNode),
        data: panels,
        selections: store.selections.map(item =>
          buildEventContext(store, item)
        )
      };
      if (curPlugin) {
        curPlugin.buildEditorPanel?.(context, panels);
        store.setPanels(
          panels.map(item => ({
            ...item,
            order: item.order || 0
          }))
        );
      }
    }
  }
}

export function switchToRegion(
  store: EditorStoreType,
  plugins: Array<PluginInterface>,
  region: string
) {
  if (!store.activeId) {
    return;
  }
  buildRenderers(store, plugins, region);
}


export async function showInsertPanel(
  store: EditorStoreType,
  plugins: Array<PluginInterface>,
  region: string,
  id: string = store.activeId,
  preferTag?: string,
  mode: 'insert' | 'replace' = 'insert',
  originId: string = '',
  beforeId?: string
) {
  if (typeof preferTag === 'undefined' && id) {
    const node = store.getNodeById(id);
    preferTag = node?.info?.regions?.find(
      child => child.key === region
    )?.preferTag;
  }
  const curRenderers = await collectRenderers(store, plugins, region, id);
  store.setInsertRenderers(curRenderers);
  store.setInsertRegion(region, id, preferTag, mode, originId, beforeId);
}


export function showReplacePanel(
  store: EditorStoreType,
  id: string,
  preferTag?: string
) {
  const node = store.getNodeById(id);
  const region: EditorNodeType = node?.parent;

  if (!node || !region || !region.isRegion || !region.parent) {
    return;
  }

  const host: EditorNodeType = region.parent!;
  showInsertPanel(store, [], region.region, host.id, preferTag, 'replace', node.id);
}


export function showRendererPanel(
  store: EditorStoreType,
  tag?: string,
  msg?: string
) {
  store.showRendererPanel(tag, msg);
}


export const listeners: Array<{
  type: string;
  fn: PluginEventFn;
}> = [];

export function on(
  listeners: Array<{ type: string; fn: PluginEventFn }>,
  event: string,
  fn: PluginEventFn
) {
  listeners.push({
    type: event,
    fn
  });
  return () => off(listeners, event, fn);
}

export function off(
  listeners: Array<{ type: string; fn: PluginEventFn }>,
  event: string,
  fn: PluginEventFn
) {
  const idx = findIndex(listeners, item => {
    return item.type === event && item.fn === fn;
  });

  if (~idx) {
    listeners.splice(idx, 1);
  }
}

export function trigger<T extends EventContext>(
  plugins: Array<any>,
  config: any,
  listeners: Array<{ type: string; fn: PluginEventFn }>,
  type: string,
  context: T
): PluginEvent<T> {
  const event = createEvent(type, context);
  const method = camelize(/^(?:before|after)/.test(type) ? type : `on-${type}`);
  const eventListeners = listeners.filter(item => item.type === type);

  plugins.forEach(
    plugin =>
      (plugin as any)[method] &&
      eventListeners.push({
        type,
        fn: (plugin as any)[method].bind(plugin)
      })
  );

  if (config[method]) {
    eventListeners.push({
      fn: config[method],
      type
    });
  }

  let promises: Array<Promise<any>> = [];
  eventListeners.some(listener => {
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


export async function addElem(
  store: EditorStoreType,
  rendererIdOrSchema: string | any,
  reGenerateId: boolean = true,
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
  const isSpecialLayout = isSpecialLayout(curElemSchema);

  // Logic to determine where to insert the element
  // ...

  const child = addChild(
    store,
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


export function canAppendSiblings(store: EditorStoreType): boolean {
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



export async function appendSiblingSchema(
  store: EditorStoreType,
  rendererSchema: Object,
  beforeInsert?: boolean,
  disabledAutoSelectInsertElem?: boolean,
  reGenerateId?: boolean
) {
  if (!rendererSchema) {
    return;
  }

  const id = store.activeId;
  const node = store.getNodeById(id)!;
  if (!node) {
    toast.warning('请先选择一个元素作为插入的位置。');
    return;
  }
  const regionNode = node.parent as EditorNodeType;

  // Logic to determine where to insert the sibling
  // ...

  const child = addChild(
    store,
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


export async function insert(store: EditorStoreType) {
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
    value = await scaffold(subRenderer.scaffoldForm, value);
  }
  const child = addChild(store, id, region, value, beforeId, subRenderer);
  if (child) {
    store.closeInsertPanel();
    setTimeout(() => {
      store.setActiveId(child.$$id);
    }, 100);
  }
}

export async function replace(store: EditorStoreType) {
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
    value = await scaffold(subRenderer.scaffoldForm, value);
  }

  if (replaceChild(store, id, value, subRenderer, region)) {
    store.closeInsertPanel();
    setTimeout(() => {
      rebuild(store, []);
    }, 4);
  }
}

export function isFlexContainer(store: EditorStoreType, id: string): boolean {
  return store.isFlexContainer(id);
}

export function isFlexItem(store: EditorStoreType, id: string): boolean {
  return store.isFlexItem(id);
}

export function isFlexColumnItem(store: EditorStoreType, id: string): boolean {
  return store.isFlexColumnItem(id);
}

export function isSpecialLayout(curSchema: any): boolean {
  const curSchemaStyle = curSchema?.style || {};
  return (
    curSchemaStyle?.position === 'fixed' ||
    curSchemaStyle?.position === 'absolute'
  );
}

export function draggableContainer(store: EditorStoreType, id: string): boolean {
  return store.draggableContainer(id);
}

export function updateContainerStyleByDrag(
  store: EditorStoreType,
  dragId: string,
  dx: number,
  dy: number
) {
  store.updateContainerStyleByDrag(dragId, dx, dy);
}


export function getEditorInfo(
  store: EditorStoreType,
  plugins: Array<any>,
  config: any,
  renderer: RendererConfig,
  path: string,
  schema: any
): RendererInfo | null | undefined {
  let info: RendererInfo | null = null;

  const schemaPath = schema.$$id ? store.getSchemaPath(schema.$$id) : '';
  const context: RendererInfoResolveEventContext = {
    renderer,
    path,
    schemaPath,
    schema
  };

  const event = trigger(plugins, config, [], 'before-resolve-editor-info', context);

  if (event.prevented) {
    return event.context.data;
  }

  plugins.some(editor => {
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

  const afterEvent = trigger(plugins, config, [], 'after-resolve-editor-info', {
    ...context,
    data: info
  });

  return afterEvent.context.data;
}


export function panelChangeValue(
  store: EditorStoreType,
  plugins: Array<any>,
  config: any,
  value: any,
  diff?: any,
  changeFilter?: (schema: any, value: any, id: string, diff?: any) => any,
  id = store.activeId
) {
  const context: ChangeEventContext = {
    ...buildEventContext(store, id),
    value,
    diff
  };

  const event = trigger(plugins, config, [], 'before-update', context);
  if (event.prevented) {
    return;
  }

  store.changeValue(value, diff, changeFilter, id);

  trigger(plugins, config, [], 'after-update', {
    ...context,
    schema: context.node.schema
  });
}


export function openSubEditor(
  store: EditorStoreType,
  config: SubEditorContext,
  parent?: EditorManager
) {
  if (
    ['dialog', 'drawer', 'confirmDialog'].includes(config.value.type) &&
    parent
  ) {
    let currentParent: EditorManager | undefined = parent;
    const id = config.value.$$originId || config.value.$$id;
    while (currentParent) {
      if (currentParent.store.schema.$$id === id) {
        toast.warning('所选弹窗已经被打开，不能多次打开');
        return;
      }

      currentParent = currentParent.parent;
    }
  }
  store.openSubEditor(config);
}


export function openContextMenu(
  store: EditorStoreType,
  plugins: Array<any>,
  id: string,
  region: string,
  info: { x: number; y: number }
) {
  let menus: Array<ContextMenuItem> = [];
  const commonContext = buildEventContext(store, id);
  const context: ContextMenuEventContext = {
    ...commonContext,
    selections: store.selections.map(item => buildEventContext(store, item)),
    region,
    data: menus
  };

  menus = buildContextMenus(store, plugins, context);

  if (!menus.length) {
    return;
  }

  store.setContextId(id);
  openContextMenus(
    {
      x: info.x,
      y: info.y
    },
    menus,
    ctx => ctx.state.isOpened && store.setContextId('')
  );
}

export function buildContextMenus(
  store: EditorStoreType,
  plugins: Array<any>,
  context: ContextMenuEventContext
): Array<ContextMenuItem> {
  plugins.forEach(editor => {
    editor.buildEditorContextMenu?.(context, context.data);
  });

  trigger(plugins, {}, [], 'build-context-menus', context);

  return context.data;
}


export function closeContextMenu() {
  // Logic to close the context menu, if any
}

export function moveUp(
  store: EditorStoreType,
  plugins: Array<any>,
  config: any
) {
  if (!store.activeId) {
    return;
  }

  const node = store.getNodeById(store.activeId)!;
  const regionNode = node.parent;
  const host = node.host;

  const commonContext = buildEventContext(store, host);
  const context: MoveEventContext = {
    ...commonContext,
    sourceId: node.id,
    direction: 'up',
    beforeId: node.prevSibling?.id,
    region: regionNode.region,
    regionNode: regionNode
  };

  const event = trigger(plugins, config, [], 'before-move', context);
  if (!event.prevented) {
    store.moveUp(context);

    trigger(plugins, config, [], 'after-move', context);
    trigger(plugins, config, [], 'after-update', context);
  }
}

export function moveDown(
  store: EditorStoreType,
  plugins: Array<any>,
  config: any
) {
  if (!store.activeId) {
    return;
  }

  const node = store.getNodeById(store.activeId)!;
  const regionNode = node.parent;
  const host = node.host;

  const commonContext = buildEventContext(store, host);
  const context: MoveEventContext = {
    ...commonContext,
    sourceId: node.id,
    direction: 'down',
    beforeId: node.nextSibling?.nextSibling?.id,
    region: regionNode.region,
    regionNode: regionNode
  };

  const event = trigger(plugins, config, [], 'before-move', context);
  if (!event.prevented) {
    store.moveDown(context);

    trigger(plugins, config, [], 'after-move', context);
    trigger(plugins, config, [], 'after-update', context);
  }
}

export function del(
  store: EditorStoreType,
  plugins: Array<any>,
  config: any,
  ids: string | Array<string>
) {
  if (!ids || !ids.length) {
    return;
  }
  const id = Array.isArray(ids) ? ids[0] : ids;

  const context: DeleteEventContext = {
    ...buildEventContext(store, id),
    data: Array.isArray(ids) ? ids.concat() : []
  };

  const event = trigger(plugins, config, [], 'before-delete', context);
  if (!event.prevented) {
    Array.isArray(context.data) && context.data.length
      ? store.delMulti(context.data)
      : store.del(context);
    trigger(plugins, config, [], 'after-delete', context);
  }
}

export function duplicate(store: EditorStoreType, id: string | Array<string>) {
  store.duplicate(id);
}

export function copy(store: EditorStoreType, id: string, toastText: string = '已复制') {
  const json = store.getValueOf(id);
  const clipboardData = stringify(json);
  toast.info('配置项' + toastText);
  return clipboardData;
}


export function cut(store: EditorStoreType, id: string) {
  const clipboardData = copy(store, id, '已剪切');
  del(store, [], {}, id);
  return clipboardData;
}

export async function paste(store: EditorStoreType, clipboardData: string, id: string, region?: string) {
  if (!clipboardData) {
    alert('剪切板内容为空');
    return;
  }
  const json = reGenerateID(parse(clipboardData));
  if (region) {
    addChild(store, id, region, json);
    return;
  }
  if (replaceChild(store, id, json)) {
    setTimeout(() => {
      store.highlightNodes.forEach(node => {
        node.calculateHighlightBox();
      });
      updateConfigPanel(store, [], json.type);
    });
  }
}

export function reGenerateNodeDuplicateID(store: EditorStoreType, types: Array<string> = []) {
  const node = store.getNodeById(store.activeId);
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

  let idRefs: { [propKey: string]: string } = {};

  JSONTraverse(schema, (value: any, key: string, host: any) => {
    const isNodeIdFormat = typeof value === 'string' && value.indexOf('u:') === 0;
    if (key === 'id' && isNodeIdFormat && host) {
      let sameNodes = JSONGetNodesById(store.schema, value, 'id');
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
      const isNodeIdFormat = typeof value === 'string' && value.indexOf('u:') === 0;
      if (key === 'componentId' && isNodeIdFormat && idRefs[value]) {
        host.componentId = idRefs[value];
      }
      return value;
    });
    replaceChild(store, node.id, schema);
  }
}

export function emptyRegion(store: EditorStoreType, id: string, region: string) {
  store.emptyRegion(id, region);

  setTimeout(() => {
    if (!store.activeId || !store.getNodeById(store.activeId)) {
      store.setActiveId(id);
    }
  }, 100);
}


export function addChild(
  store: EditorStoreType,
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
  reGenerateId: boolean = true
): any | null {
  let index: number = -1;
  const commonContext = buildEventContext(store, id);

  let curChildJson = JSONPipeIn(json, reGenerateId);

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

  const event = trigger([], {}, [], 'before-insert', context);
  if (!event.prevented) {
    const child = store.insertSchema(event);
    trigger([], {}, [], 'after-insert', context);
    return child;
  }

  return null;
}

export function move(
  store: EditorStoreType,
  plugins: Array<any>,
  config: any,
  id: string,
  region: string,
  sourceId: string,
  beforeId?: string,
  dragInfo?: any
): boolean {
  const context: MoveEventContext = {
    ...buildEventContext(store, id),
    beforeId,
    region: region,
    sourceId,
    dragInfo
  };

  const event = trigger(plugins, config, [], 'before-move', context);
  if (!event.prevented) {
    store.moveSchema(event);

    trigger(plugins, config, [], 'after-move', context);
    return true;
  }

  return false;
}

export function replaceChild(
  store: EditorStoreType,
  id: string,
  json: any,
  subRenderer?: SubRendererInfo | RendererInfo,
  region?: string,
  reGenerateId: boolean = true
): boolean {
  let curJson = JSONPipeIn(json, reGenerateId);

  const context: ReplaceEventContext = {
    ...buildEventContext(store, id),
    data: { ...curJson },
    subRenderer,
    region
  };
  const event = trigger([], {}, [], 'before-replace', context);

  if (!event.prevented && event.context.data) {
    store.replaceChild(id, event.context.data);
    trigger([], {}, [], 'after-replace', context);
    return true;
  }

  return false;
}

export function setActiveId(store: EditorStoreType, id: string) {
  store.setActiveId(id);
}

export function openConfigPanel(store: EditorStoreType, id: string) {
  if (store.activeId !== id) {
    store.setActiveId(id);
  }

  store.changePanelKey('config');
}

export function openCodePanel(store: EditorStoreType, id: string) {
  if (store.activeId !== id) {
    store.setActiveId(id);
  }

  store.changePanelKey('code');
}

export function toggleSelection(store: EditorStoreType, id: string) {
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
  setSelection(store, selections, id);
}


export function setSelection(store: EditorStoreType, selections: Array<string>, id: string = selections[0]) {
  const commonContext = buildEventContext(store, id);
  const context: SelectionEventContext = {
    ...commonContext,
    selections: selections.map(item => buildEventContext(store, item)),
    data: selections
  };

  const event = trigger([], {}, [], 'selection-change', context);
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

export function startDrag(dnd: EditorDNDManager, id: string, e: React.DragEvent) {
  e.persist();
  dnd.startDrag(id, e.nativeEvent);
}

export async function scaffold(form: any, value: any): Promise<SchemaObject> {
  const scaffoldFormData = form.pipeIn ? await form.pipeIn(value) : value;

  return new Promise(resolve => {
    form.store.openScaffoldForm({
      ...form,
      value: scaffoldFormData,
      callback: resolve
    });
  });
}

export async function reScaffold(store: EditorStoreType, id: string, form: ScaffoldForm, value: any) {
  const replaceWith = await scaffold(form, value);
  replaceChild(store, id, replaceWith);
}

export const lazyPatchSchema = debounce(patchSchema, 250, {
  leading: false,
  trailing: true
});


let patching = false;
let patchingInvalid = false;

export function patchSchema(store: EditorStoreType, force = false) {
  if (patching) {
    patchingInvalid = true;
    return;
  }
  patching = true;
  patchingInvalid = false;
  const batch: Array<{ id: string; value: any }> = [];
  const ids = new Map();
  let patchList = (list: Array<EditorNodeType>) => {
    list.forEach((node: EditorNodeType) => {
      if (node.uniqueChildren && node.uniqueChildren.length) {
        patchList(node.uniqueChildren);
      }

      if (isAlive(node) && !node.isRegion) {
        const schema = node.schema;
        node.patch(
          store,
          force,
          (id, value) => batch.unshift({ id, value }),
          ids
        );
        node.schemaPath && ids.set(schema.id, node.schemaPath);
      }
    });
  };

  patchList(store.root.children);
  store.batchChangeValue(batch);
  patching = false;
  patchingInvalid && patchSchema(store, force);
}


export async function hackRenderers(
  store: EditorStoreType,
  plugins: Array<any>,
  hackIn: any,
  renderers = getRenderers()
) {
  const toHackList: Array<{
    renderer: RendererConfig;
    regions?: Array<RegionConfig>;
    overrides?: any;
  }> = [];

  await Promise.all(renderers.map(renderer => loadAsyncRenderer(renderer)));

  renderers.forEach(renderer => {
    const applicablePlugins = plugins.filter(
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

    applicablePlugins.forEach(plugin => {
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
  toHackList.forEach(({ regions, renderer, overrides }) =>
    hackIn(renderer, regions, overrides)
  );

  store.markReady();
}


export function makeWrapper(
  manager: any,
  info: RendererInfo,
  render: RendererConfig
): any {
  return makeWrapper(manager, info, render);
}


export function makeSchemaFormRender(
  manager: any,
  schema: {
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
  }
) {
  return makeSchemaFormRender(manager, schema);
}


export function onHeightChangeStart(
  trigger: any,
  e: MouseEvent,
  ctx: {
    dom: HTMLElement;
    node: EditorNodeType;
    resizer: HTMLElement;
  }
) {
  return trigger('height-change-start', {
    ...ctx,
    nativeEvent: e
  });
}

export function onSizeChangeStart(
  trigger: any,
  e: MouseEvent,
  ctx: {
    dom: HTMLElement;
    node: EditorNodeType;
    resizer: HTMLElement;
    store: EditorStoreType;
  }
) {
  return trigger('size-change-start', {
    ...ctx,
    nativeEvent: e
  });
}


export function openNodePopOverForm(store: EditorStoreType, id: string | EditorNodeType) {
  const node = typeof id === 'string' ? store.getNodeById(id) : id;
  if (
    !node ||
    (!node.info?.plugin?.popOverBody &&
      !node.info?.plugin?.popOverBodyCreator)
  ) {
    return;
  }
  const plugin = node.info.plugin!;
  const context: PopOverFormContext = {
    node,
    body: plugin.popOverBodyCreator
      ? plugin.popOverBodyCreator(buildEventContext(store, node))
      : plugin.popOverBody!,
    value: store.getValueOf(node.id),
    callback: (value: any, diff?: any) => panelChangeValue(store, [], {}, value, diff),
    target: () =>
      document.querySelector(`[data-hlbox-id="${node.id}"]`) as HTMLElement
  };
  store.openPopOverForm(context);
}


export function addBroadcast(broadcasts: RendererPluginEvent[], event: RendererPluginEvent) {
  broadcasts.push(event);
}

export function removeBroadcast(broadcasts: RendererPluginEvent[], id: string) {
  const idx = findIndex(broadcasts, item => item.eventName === id);
  broadcasts.splice(idx, 1);
}


export async function getContextSchemas(
  store: EditorStoreType,
  dataSchema: any,
  id: string | EditorNodeType,
  withoutSuper = false
) {
  const node = typeof id === 'string' ? store.getNodeById(id) : id;
  if (!node) {
    return [];
  }

  let scope: DataScope | void = undefined;
  let from = node;
  let region = node;
  const trigger = node;

  for (const key in dataSchema.idMap) {
    if (/\-currentRow$/.test(key)) {
      dataSchema.removeScope(key);
    }
  }

  while (!scope && from) {
    const nodeId = from.info?.id;
    const type = from.info?.type;
    scope = dataSchema.hasScope(`${nodeId}-${type}`)
      ? dataSchema.getScope(`${nodeId}-${type}`)
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
    const scopeNode = store.getNodeById(nodeId, type);

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
            : { $id: `${scopeNode!.id}-${scopeNode!.type}` })
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
      const node = store.getNodeById(id, type);
      if (node) {
        const tmpSchema = await node?.info?.plugin?.buildDataSchemas?.(
          node,
          region,
          trigger
        );
        if (tmpSchema) {
          const jsonschema = {
            ...tmpSchema,
            ...(tmpSchema?.$id ? {} : { $id: `${node!.id}-${node!.type}` })
          };
          scope.removeSchema(jsonschema.$id);
          scope.addSchema(jsonschema);
        }
      }
    }
  }

  const nearestScopeId =
    Object.keys(dataSchema.idMap).find(
      key =>
        /\-currentRow$/.test(key) &&
        !dataSchema.idMap[key].children?.length
    ) || nearestScope?.id;

  if (nearestScopeId) {
    dataSchema.switchTo(nearestScopeId);
  }

  if (node.info.isListComponent) {
    let lastScope = listScope[listScope.length - 1];
    dataSchema.switchTo(lastScope.parent!);
  }

  return withoutSuper
    ? dataSchema.current.schemas
    : dataSchema.getSchemas();
}


export async function getAvailableContextFields(
  store: EditorStoreType,
  dataSchema: any,
  node: EditorNodeType
): Promise<any> {
  if (!node) {
    return;
  }

  let scope: DataScope | void = undefined;
  let from = node;
  let region = node;

  while (!scope && from) {
    scope = dataSchema.hasScope(`${from.id}-${from.type}`)
      ? dataSchema.getScope(`${from.id}-${from.type}`)
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
    if (!from && store.isSubEditor) {
      return store.config?.getAvaiableContextFields?.(node);
    }
    return from?.info.plugin.getAvailableContextFields?.(from, node);
  }

  while (scope) {
    const [id] = scope.id.split('-');
    const type = scope.id.substring(id.length + 1);
    const scopeNode = store.getNodeById(id, type);

    if (scopeNode && !scopeNode.info?.isListComponent) {
      return scopeNode?.info.plugin.getAvailableContextFields?.(
        scopeNode,
        node
      );
    }

    scope = scope.parent;
  }
}


export function beforeDispatchEvent(
  originHook: any,
  e: any,
  component: any,
  scoped: IScopedContext,
  data: any,
  broadcasts?: any,
  store: EditorStoreType
) {
  originHook?.(e, component, scoped, data, broadcasts);

  const id = component.props.$$id || component.props.$$editor?.id;
  if (id) {
    const node = store.getNodeById(id, component.props.type);
    node?.info?.plugin?.rendererBeforeDispatchEvent?.(
      node,
      e,
      JSONPipeOut(data)
    );
  }
}


export function dispose(
  store: EditorStoreType,
  plugins: Array<any>,
  listeners: Array<{ type: string; fn: PluginEventFn }>,
  broadcasts: Array<any>,
  lazyPatchSchema: any,
  dnd: any
) {
  trigger(plugins, {}, [], 'dispose', {
    data: store
  });
  delete store.parent;
  store.toDispose.forEach(fn => fn());
  store.toDispose = [];
  plugins.forEach(p => p.dispose?.());
  plugins.splice(0, plugins.length);
  listeners.splice(0, listeners.length);
  broadcasts.splice(0, broadcasts.length);
  lazyPatchSchema.cancel();
  dnd.dispose();
}
