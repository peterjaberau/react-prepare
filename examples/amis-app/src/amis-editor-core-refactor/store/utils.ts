export const getRootId = (context) => {
  const curSchema = context.getSchema();
  return { rootId: curSchema?.$$id };
};

export const isHoved = (context, event) => {
  const { id } = event.value;
  return { isHoved: id && context.hoverId === id };
};

export const isActive = (context, event) => {
  const { id } = event.value;
  return {
    isActive: id &&
      !context.dragging &&
      !context.insertOrigId &&
      context.insertBeforeId !== id &&
      context.activeId === id
  };
};

export const isContextOn = (context, event) => {
  const { id } = event.value;
  return { isContextOn: id && context.contextId === id };
};

export const getActiveContainerId = (context) => {
  if (!context.activeId) {
    return { activeContainerId: '' };
  }

  let node = context.getNodeById(context.activeId);

  while (node) {
    if (node.childRegions.length || node.info?.regions) {
      // ...
    }
    node = node.host;
  }

  return { activeContainerId: '' };
};

export const isRegionHighlighted = (context, event) => {
  const { id, region } = event.value;
  return {
    isRegionHighlighted: !context.insertOrigId && /* ... */
  };
};

export const isRegionHighlightHover = (context, event) => {
  const { id, region } = event.value;
  return { isRegionHighlightHover: id === context.hoverId && region === context.mouseMoveRegion };
};

export const isRegionActive = (context, event) => {
  const { id, region } = event.value;
  return {
    isRegionActive: context.isActive(id) ||
      id === context.dropId ||
      id === context.planDropId ||
      context.isRegionHighlighted(id, region) ||
      context.isRegionHighlightHover(id, region)
  };
};

export const isRegionDragEnter = (context, event) => {
  const { id, region } = event.value;
  return { isRegionDragEnter: context.isRegionActive(id, region) && region === context.dropRegion };
};

export const getHighlightNodes = (context) => {
  const nodes = [];

  if (/* ... */) {
    // ...
  }

  if (context.contextId) {
    nodes.push(context.contextId);
  }

  if (/* ... */) {
    // ...
  }

  const curFreeContainerId = context.parentIsFreeContainer(context.activeId);
  if (curFreeContainerId) {
    nodes.push(curFreeContainerId);
  }

  if (context.insertMode === 'insert' && context.insertId) {
    nodes.push(context.insertId);
  }

  context.insertOrigId && nodes.push(context.insertOrigId);
  context.dropId && nodes.push(context.dropId);
  context.planDropId && nodes.push(context.planDropId);
  context.insertBeforeId && nodes.push(context.insertBeforeId);

  return {
    highlightNodes: nodes
      .filter((id, index, thelist) => id && index === thelist.indexOf(id))
      .map(id => context.getNodeById(id))
      .filter(node => node)
  };
};

export const getNodeById = (context, event) => {
  const { id, regionOrType } = event.value;
  return { node: context.root.getNodeById(id, regionOrType) };
};

export const getNodeByComponentId = (context, event) => {
  const { id } = event.value;
  return { node: context.root.getNodeByComponentId(id) };
};

export const getActiveNodeInfo = (context) => {
  return { activeNodeInfo: context.getNodeById(context.activeId)?.info };
};

export const getSchema = (context, event) => {
  const { id, idKey } = event.value;
  return { schema: id ? context.JSONGetById(context.schema, id, idKey) : context.schema };
};

export const getSchemaByPath = (context, event) => {
  const { path } = event.value;
  return { schema: context.JSONGetByPath(context.schema, path) };
};

export const getSchemaParentById = (context, event) => {
  const { id, skipArray } = event.value;
  return { schemaParent: context.JSONGetParentById(context.schema, id, skipArray) };
};

export const getSchemaPath = (context, event) => {
  const { id } = event.value;
  const paths = context.JSONGetPathById(context.schema, id);
  return { schemaPath: Array.isArray(paths) ? paths.join('/') : '' };
};

export const getSimpleSchema = (context, event) => {
  const { curSchema } = event.value;
  return { simpleSchema: context.JSONPipeOut(curSchema) };
};

export const getPanelKey = (context) => {
  let panelKey = context.panelKey;

  if (panelKey === 'none') {
    return { panelKey };
  }

  const panels = context.getPanels();
  const isIn = panels.find(panel => panelKey && panel.key === panelKey);

  if (!isIn) {
    return { panelKey: panels[0]?.key || 'none' };
  }

  return { panelKey };
};

export const getLeftPanelKey = (context) => {
  let leftPanelKey = context.leftPanelKey;
  if (context.dragging) {
    return { leftPanelKey: 'outline' };
  } else if (leftPanelKey === 'none') {
    // ...
  }
  const panels = context.getLeftPanels();
  const isIn = panels.find(panel => leftPanelKey && panel.key === leftPanelKey);

  if (!isIn) {
    return { leftPanelKey: 'renderers' };
  }
  return { leftPanelKey };
};

export const getLeftPanels = (context) => {
  return { leftPanels: context.panels.filter(panel => panel.position === 'left') };
};

export const getRightPanels = (context) => {
  return { rightPanels: context.panels.filter(panel => panel.position !== 'left' && panel.key !== 'contextmenu') };
};

export const getContextMenuPanel = (context) => {
  return { contextMenuPanel: context.panels.find(panel => panel.key === 'contextmenu') };
};

export const getPanels = (context) => {
  const panels = [].concat(context.getRightPanels() || []);
  return { panels: panels.sort((a, b) => a.order - b.order) };
};

export const getSortedToolbars = (context) => {
  return { sortedToolbars: context.toolbars.sort((a, b) => a.order - b.order) };
};

export const getSortedSecondaryToolbars = (context) => {
  return { sortedSecondaryToolbars: context.toolbars.filter(toolbar => toolbar.position === 'secondary').sort((a, b) => a.order - b.order) };
};

export const getSortedSpecialToolbars = (context) => {
  return { sortedSpecialToolbars: context.toolbars.filter(toolbar => toolbar.position === 'special').sort((a, b) => a.order - b.order) };
};

export const getValue = (context) => {
  if (!context.activeId) {
    return { value: undefined };
  }

  return { value: context.getValueOf(context.activeId) };
};

export const getValueOf = (context, event) => {
  const { id } = event.value;
  const schema = context.JSONGetById(context.schema, id);
  const data = context.JSONPipeOut(schema, false);
  return { value: data };
};

export const getValueWithoutHiddenProps = (context) => {
  if (!context.activeId) {
    return { value: undefined };
  }

  const isSubEditor = context.isSubEditor;
  const isHiddenProps = context.getEnv(context).isHiddenProps;

  return { value: context.JSONPipeOut(context.getValueOf(context.activeId), isSubEditor, isHiddenProps) };
};

export const getOutline = (context) => {
  return { outline: context.root.children };
};

export const getBcn = (context) => {
  let bcn = [];

  if (context.activeId) {
    let node = context.getNodeById(context.activeId);

    while (node) {
      // ...
    }
  }

  return { bcn: bcn.filter(item => !item.isSecondFactor) };
};

export const getActivePath = (context) => {
  return { activePath: context.getNodePathById(context.activeId) };
};

export const getNodePathById = (context, event) => {
  const { id } = event.value;
  let paths = [];
  if (!id) {
    return { paths };
  }

  let iterator = (children) => {
    for (let i = 0; i < children.length; i++) {
      // ...
    }
  };

  iterator(context.root.children);

  return { paths };
};

export const getDragging = (context) => {
  if (context.draggableContainer(context.dragId)) {
    return { dragging: !!(context.dragId || context.dropId) };
  }
  return { dragging: false };
};

export const getNeedPatch = (context) => {
  let hasUnPatched = (list) => {
    for (let i = 0; i < list.length; i++) {
      // ...
    }
    return false;
  };

  return { needPatch: hasUnPatched(context.root.children) };
};

export const getSchemaRaw = (context) => {
  return { schemaRaw: context.JSONPipeOut(context.schema) };
};

export const getSubRenderersByOrder = (context) => {
  return { subRenderersByOrder: context.subRenderers.sort((a, b) => a.order - b.order) };
};

export const getCustomRenderersByOrder = (context) => {
  return { customRenderersByOrder: context.customRenderers.sort((a, b) => a.order - b.order) };
};

export const groupedRenderersByKeyword = (context, event) => {
  const { keyword } = event.value;
  const grouped = {};
  const r = new RegExp(context.stringRegExp(keyword), 'i');

  context.subRenderers.forEach(renderer => {
    if (r.test(renderer.name)) {
      // ...
    }
  });

  return { groupedRenderers: grouped };
};

export const groupedSubRenderersByKeyword = (context, event) => {
  const { keyword } = event.value;
  const grouped = {};
  const r = new RegExp(context.stringRegExp(keyword), 'i');

  context.subRenderers.forEach(renderer => {
    if (r.test(renderer.name)) {
      // ...
    }
  });

  return { groupedSubRenderers: grouped };
};

export const getGroupedSubRenderers = (context) => {
  if (context.subRenderersTag) {
    return context.groupedSubRenderersByKeyword({ value: { keyword: context.subRenderersTag } });
  }
  return context.groupedSubRenderersByKeyword({ value: { keyword: '' } });
};

export const groupedCustomRenderersByKeyword = (context, event) => {
  const { keyword } = event.value;
  const grouped = {};
  const r = new RegExp(context.stringRegExp(keyword), 'i');

  context.customRenderers.forEach(renderer => {
    if (r.test(renderer.name)) {
      // ...
    }
  });

  return { groupedCustomRenderers: grouped };
};

export const getGroupedCustomRenderers = (context) => {
  if (context.customRenderersTag) {
    return context.groupedCustomRenderersByKeyword({ value: { keyword: context.customRenderersTag } });
  }
  return context.groupedCustomRenderersByKeyword({ value: { keyword: '' } });
};

export const getSubRendererById = (context, event) => {
  const { id } = event.value;
  return { subRenderer: context.subRenderers.find(item => item.id === id) };
};

export const getGroupedInsertRenderers = (context) => {
  const grouped = {};
  const keywords = context.insertRenderersKeywords;
  const r = new RegExp(context.stringRegExp(keywords), 'i');

  context.insertRenderers.forEach(renderer => {
    if (r.test(renderer.name)) {
      // ...
    }
  });

  return { groupedInsertRenderers: grouped };
};

export const getSelectedInsertRendererInfo = (context) => {
  return { selectedInsertRendererInfo: context.insertRenderers.find(renderer => renderer.id === context.insertSelected) };
};

export const getSubEditorSlotPath = (context) => {
  const slot = context.subEditorContext?.slot;

  if (!slot) {
    return { subEditorSlotPath: '' };
  }

  let paths = [];
  let resolve = (slot) => {
    if (slot.parent) {
      // ...
    }
    paths.push(slot.name);
  };

  resolve(slot);

  return { subEditorSlotPath: paths.length ? paths.join('/') : '' };
};

export const getSubEditorValue = (context) => {
  if (context.subEditorContext) {
    return { subEditorValue: context.subEditorContext.value };
  }

  return { subEditorValue: undefined };
};

export const getCanUndo = (context) => {
  const idx = context.schemaHistory.findIndex(history => history.versionId === context.versionId);
  return { canUndo: idx !== 0 };
};

export const getCanRedo = (context) => {
  const idx = context.schemaHistory.findIndex(history => history.versionId === context.versionId);
  return { canRedo: idx < context.schemaHistory.length - 1 };
};

export const isFlexContainer = (context, event) => {
  const { id } = event.value;
  const activeId = id ?? context.activeId;
  const curSchema = context.getSchema(activeId);
  if (/* ... */) {
    // ...
  }
  return { isFlexContainer: false };
};

export const isFlexItem = (context, event) => {
  const { id } = event.value;
  const activeId = id ?? context.activeId;
  const parentSchema = context.getSchemaParentById(activeId, true);
  if (/* ... */) {
    // ...
  }
  return { isFlexItem: false };
};

export const isFlexColumnItem = (context, event) => {
  const { id } = event.value;
  const activeId = id ?? context.activeId;
  const parentSchema = context.getSchemaParentById(activeId, true);
  const isFlexItem = parentSchema && parentSchema.style && parentSchema.style.display === 'flex';
  const isFlexColumn = parentSchema && parentSchema.style && parentSchema.style.flexDirection === 'column';
  if (isFlexItem && isFlexColumn) {
    return { isFlexColumnItem: true };
  }
  return { isFlexColumnItem: false };
};

export const draggableContainer = (context, event) => {
  const { id } = event.value;
  const activeId = id || context.activeId;
  const curSchema = context.getSchema(activeId);
  const curSchemaStyle = curSchema?.style || {};
  if (/* ... */) {
    // ...
  }
  return { draggableContainer: false };
};

export const parentIsFreeContainer = (context, event) => {
  const { id } = event.value;
  const activeId = id ?? context.activeId;
  const curNode = context.getNodeById(activeId);
  const parentNode = curNode?.parent;
  if (!parentNode) {
    return { parentIsFreeContainer: false };
  }
  const curSchema = context.getSchema(parentNode.id);
  if (curSchema?.isFreeContainer) {
    return { parentIsFreeContainer: true };
  }
  return { parentIsFreeContainer: false };
};

export const getSuperEditorData = (context) => {
  return { superEditorData: context.superEditorData || {} };
};

export const getComponentTreeSource = (context) => {
  return { componentTreeSource: context.mapTree(context.root.children, /* ... */) };
};

export const getScaffoldData = (context) => {
  return { scaffoldData: context.createObject(context.ctx, { id: context.guid(), type: 'page', body: [] }) };
};

export const getModals = (context) => {
  const schema = context.schema;
  const modals = context.getModals(schema);
  return { modals };
};

export const getModalOptions = (context) => {
  return { modalOptions: context.getModals().map((modal) => ({ label: modal.title, value: modal.$$id })) };
};

export const changeInsertRenderersKeywords = (context, event) => {
  return { insertRenderersKeywords: event.value.keywords };
};


/* Actions */
export const changeInsertRenderersKeywords = (context, event) => {
  const insertRenderersKeywords = event.value.keywords;
  return { insertRenderersKeywords };
};

export const resetInsertRenderersKeywords = () => {
  const insertRenderersKeywords = '';
  return { insertRenderersKeywords };
};

export const changeCustomRenderersKeywords = (context, event) => {
  const customRenderersKeywords = event.value.keywords;
  return { customRenderersKeywords };
};

export const resetCustomRenderersKeywords = () => {
  const customRenderersKeywords = '';
  return { customRenderersKeywords };
};

export const changeCustomRenderersTag = (context, event) => {
  const customRenderersTag = event.value.tag;
  return { customRenderersTag };
};

export const changeSubRendererRegion = (context, event) => {
  const subRendererRegion = event.value.region;
  return { subRendererRegion };
};

export const changePanelKey = (context, event) => {
  const panelKey = event.value.key;
  return { panelKey };
};

export const changeLeftPanelKey = (context, event) => {
  const leftPanelKey = event.value.key;
  return { leftPanelKey };
};

export const changeRenderersTabsKey = (context, event) => {
  const renderersTabsKey = event.value.key;
  return { renderersTabsKey };
};

export const changeOutlineTabsKey = (context, event) => {
  const outlineTabsKey = event.value.key;
  return { outlineTabsKey };
};

export const changeLeftPanelOpenStatus = (context, event) => {
  const leftPanelOpenStatus = event.value.status;
  return { leftPanelOpenStatus };
};

export const showRendererPanel = (context, event) => {
  const showInsertRenderer = event.value.show;
  return { showInsertRenderer };
};

export const changeValue = (context, event) => {
  const schema = event.value.schema;
  return { schema };
};

export const definitionOnchangeValue = (context, event) => {
  const schema = event.value.schema;
  return { schema };
};

export const changeValueById = (context, event) => {
  const { id, value } = event.value;
  const node = context.getNodeById(id);
  if (node) {
    node.value = value;
  }
  return { node };
};

export const batchChangeValue = (context, event) => {
  const { changes } = event.value;
  changes.forEach(change => {
    const node = context.getNodeById(change.id);
    if (node) {
      node.value = change.value;
    }
  });
  return { changes };
};

export const updateContainerStyleByDrag = (context, event) => {
  const { id, style } = event.value;
  const node = context.getNodeById(id);
  if (node) {
    node.style = style;
  }
  return { node };
};

export const moveUp = (context, event) => {
  const { id } = event.value;
  context.moveNodeUp(id);
  return { id };
};

export const moveDown = (context, event) => {
  const { id } = event.value;
  context.moveNodeDown(id);
  return { id };
};

export const del = (context, event) => {
  const { id } = event.value;
  context.deleteNode(id);
  return { id };
};

export const delMulti = (context, event) => {
  const { ids } = event.value;
  ids.forEach(id => context.deleteNode(id));
  return { ids };
};

export const duplicate = (context, event) => {
  const { id } = event.value;
  context.duplicateNode(id);
  return { id };
};

export const emptyRegion = (context, event) => {
  const { id, region } = event.value;
  const node = context.getNodeById(id);
  if (node) {
    node.emptyRegion(region);
  }
  return { node };
};

export const replaceChild = (context, event) => {
  const { id, child } = event.value;
  const node = context.getNodeById(id);
  if (node) {
    node.replaceChild(child);
  }
  return { node };
};

export const setInsertRegion = (context, event) => {
  const insertRegion = event.value.region;
  return { insertRegion };
};

export const closeInsertPanel = () => {
  const showInsertRenderer = false;
  return { showInsertRenderer };
};

export const showInsertRendererPanel = () => {
  const showInsertRenderer = true;
  return { showInsertRenderer };
};

export const closeInsertRendererPanel = () => {
  const showInsertRenderer = false;
  return { showInsertRenderer };
};

export const setInsertRenderers = (context, event) => {
  const insertRenderers = event.value.renderers;
  return { insertRenderers };
};

export const setInsertTag = (context, event) => {
  const insertTag = event.value.tag;
  return { insertTag };
};

export const setInsertSelected = (context, event) => {
  const insertSelected = event.value.selected;
  return { insertSelected };
};

export const setJSONSchemaUri = (context, event) => {
  const jsonSchemaUri = event.value.uri;
  return { jsonSchemaUri };
};

export const addModal = (context, event) => {
  const modal = event.value.modal;
  return { modal };
};

export const countModalActionRefs = (context, event) => {
  const count = context.countModalActionRefs(event.value.modal);
  return { count };
};

export const removeModal = (context, event) => {
  const modal = event.value.modal;
  return { modal };
};

export const updateModal = (context, event) => {
  const modal = event.value.modal;
  return { modal };
};

export const openSubEditor = (context, event) => {
  const subEditorContext = event.value.context;
  return { subEditorContext };
};

export const confirmSubEditor = (context, event) => {
  const subEditorContext = event.value.context;
  return { subEditorContext };
};

export const closeSubEditor = () => {
  const subEditorContext = undefined;
  return { subEditorContext };
};

export const subEditorOnChange = (context, event) => {
  const subEditorContext = { ...context.subEditorContext, value: event.value.value };
  return { subEditorContext };
};

export const undoSubEditor = (context) => {
  context.undoSubEditor();
  return { subEditorContext: context.subEditorContext };
};

export const redoSubEditor = (context) => {
  context.redoSubEditor();
  return { subEditorContext: context.subEditorContext };
};

export const subEditorRef = (context, event) => {
  const subEditorContext = { ...context.subEditorContext, ref: event.value.ref };
  return { subEditorContext };
};

export const getSubEditorRef = (context) => {
  return { subEditorContext: context.subEditorContext };
};

export const openScaffoldForm = (context, event) => {
  const scaffoldForm = event.value.form;
  return { scaffoldForm };
};

export const closeScaffoldForm = () => {
  const scaffoldForm = undefined;
  return { scaffoldForm };
};

export const setScaffoldBuzy = (context, event) => {
  const scaffoldFormBuzy = event.value.buzy;
  return { scaffoldFormBuzy };
};

export const setScaffoldStep = (context, event) => {
  const scaffoldFormStep = event.value.step;
  return { scaffoldFormStep };
};

export const setScaffoldStepManipulated = (context, event) => {
  const scaffoldStepManipulated = event.value.manipulated;
  return { scaffoldStepManipulated };
};

export const setScaffoldError = (context, event) => {
  const scaffoldError = event.value.error;
  return { scaffoldError };
};

export const updateScaffoldData = (context, event) => {
  const scaffoldForm = { ...context.scaffoldForm, value: event.value.data };
  return { scaffoldForm };
};

export const openPopOverForm = (context, event) => {
  const popOverForm = event.value.form;
  return { popOverForm };
};

export const closePopOverForm = () => {
  const popOverForm = undefined;
  return { popOverForm };
};

export const activeHighlightNodes = (context, event) => {
  const activeHighlightNodes = event.value.nodes;
  return { activeHighlightNodes };
};

export const deActiveHighlightNodes = () => {
  const activeHighlightNodes = [];
  return { activeHighlightNodes };
};

export const calculateHighlightBox = (context, event) => {
  const calculateHighlightBox = event.value.box;
  return { calculateHighlightBox };
};

export const resetHighlightBox = () => {
  const calculateHighlightBox = undefined;
  return { calculateHighlightBox };
};

export const updateTargetName = (context, event) => {
  const targetNames = event.value.names;
  return { targetNames };
};

export const traceableSetSchema = (context, event) => {
  const schema = event.value.schema;
  return { schema };
};

export const undo = (context) => {
  context.undo();
  return { schema: context.schema };
};

export const redo = (context) => {
  context.redo();
  return { schema: context.schema };
};

export const autoSelectRoot = (context) => {
  context.autoSelectRoot();
  return { activeId: context.activeId };
};

export const resetHistory = () => {
  const schemaHistory = [];
  return { schemaHistory };
};

export const applyPatches = (context, event) => {
  context.applyPatches(event.value.patches);
  return { schema: context.schema };
};

export const updateAppLocaleState = (context) => {
  const appLocaleState = context.appLocaleState + 1;
  return { appLocaleState };
};

export const setAppLocale = (context, event) => {
  const appLocale = event.value.locale;
  return { appLocale };
};

export const setAppCorpusData = (context, event) => {
  const appCorpusData = event.value.data;
  return { appCorpusData };
};

export const beforeDestroy = () => {
  return {};
};
