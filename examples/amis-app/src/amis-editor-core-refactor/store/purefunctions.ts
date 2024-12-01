export const getFilteredSchema = ({ context }) => {
  let schema = context.schema;
  return filterSchemaForEditor(
    getEnv(context).schemaFilter?.(schema) ?? schema
  );
};

export const getFilteredSchemaForPreview = ({ context }) => {
  const schema = JSONPipeOut(context.schema);
  return getEnv(context).schemaFilter?.(schema, true) ?? schema;
};

export const isRootSchema = ({ context, event }) => {
  const { id } = event.value;
  const curSchema = getSchema({ context });
  return curSchema && curSchema.$$id === id;
};

export const getRootId = ({ context }) => {
  const curSchema = getSchema({ context });
  return curSchema?.$$id;
};

export const isHoved = ({ context, event }) => {
  const { id } = event.value;
  return id && context.hoverId === id;
};

export const isActive = ({ context, event }) => {
  const { id } = event.value;
  return (
    id &&
    !context.dragging &&
    !context.insertOrigId &&
    context.insertBeforeId !== id &&
    context.activeId === id
  );
};

export const isContextOn = ({ context, event }) => {
  const { id } = event.value;
  return id && context.contextId === id;
};

export const getActiveContainerId = ({ context }) => {
  if (!context.activeId) {
    return '';
  }

  let node = getNodeById({ context, event: { value: { id: context.activeId } } });

  while (node) {
    if (node.childRegions.length || node.info?.regions) {
      return node.id;
    }

    node = node.host;
  }

  return '';
};

export const isRegionHighlighted = ({ context, event }) => {
  const { id, region } = event.value;
  return (
    (!context.insertOrigId &&
      id === context.hoverId &&
      region === context.hoverRegion) ||
    (id === context.activeId && context.activeRegion === region) ||
    (id === context.dropId && context.dropRegion === region) ||
    (id === context.planDropId && context.planDropRegion === region)
  );
};

export const isRegionHighlightHover = ({ context, event }) => {
  const { id, region } = event.value;
  return id === context.hoverId && region === context.mouseMoveRegion;
};

export const isRegionActive = ({ context, event }) => {
  const { id, region } = event.value;
  return (
    isActive({ context, event }) ||
    id === context.dropId ||
    id === context.planDropId ||
    isRegionHighlighted({ context, event }) ||
    isRegionHighlightHover({ context, event })
  );
};

export const isRegionDragEnter = ({ context, event }) => {
  const { id, region } = event.value;
  return isRegionActive({ context, event }) && region === context.dropRegion;
};

export const getHighlightNodes = ({ context }) => {
  const nodes = [];

  if (
    context.hoverId &&
    !context.dragId &&
    !context.contextId &&
    (context.activeId !== context.hoverId || context.hoverRegion) &&
    !context.selections.includes(context.hoverId)
  ) {
    nodes.push(context.hoverId);
  }

  if (context.contextId) {
    nodes.push(context.contextId);
  }

  if (
    (context.activeId || context.selections.length) &&
    (!context.dragId || draggableContainer({ context, event: { value: { id: context.dragId } } })) &&
    !context.insertOrigId &&
    !context.insertId &&
    !(context.hoverId && context.hoverRegion)
  ) {
    context.activeId
      ? nodes.push(context.activeId)
      : nodes.push.apply(nodes, context.selections);
  }

  const curFreeContainerId = parentIsFreeContainer({ context, event: { value: { id: context.activeId } } });
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

  return nodes
    .filter((id, index, thelist) => id && index === thelist.indexOf(id))
    .map(id => getNodeById({ context, event: { value: { id } } }))
    .filter(node => node);
};

export const getNodeById = ({ context, event }) => {
  const { id, regionOrType } = event.value;
  return context.root.getNodeById(id, regionOrType);
};

export const getNodeByComponentId = ({ context, event }) => {
  const { id } = event.value;
  return context.root.getNodeByComponentId(id);
};

export const getActiveNodeInfo = ({ context }) => {
  return getNodeById({ context, event: { value: { id: context.activeId } } })?.info;
};

export const getSchema = ({ context, event }) => {
  const { id, idKey } = event.value;
  return id ? JSONGetById(context.schema, id, idKey) : context.schema;
};

export const getSchemaByPath = ({ context, event }) => {
  const { path } = event.value;
  return JSONGetByPath(context.schema, path);
};

export const getSchemaParentById = ({ context, event }) => {
  const { id, skipArray } = event.value;
  return JSONGetParentById(context.schema, id, skipArray);
};

export const getSchemaPath = ({ context, event }) => {
  const { id } = event.value;
  const paths = JSONGetPathById(context.schema, id);
  return Array.isArray(paths) ? paths.join('/') : '';
};

export const getSimpleSchema = ({ context, event }) => {
  const { curSchema } = event.value;
  return JSONPipeOut(curSchema);
};

export const getPanelKey = ({ context }) => {
  let panelKey = context.panelKey;

  if (panelKey === 'none') {
    return panelKey;
  }

  const panels = getPanels({ context });
  const isIn = find(panels, panel => panelKey && panel.key === panelKey);

  if (!isIn) {
    return panels[0]?.key || 'none';
  }

  return panelKey;
};

export const getLeftPanelKey = ({ context }) => {
  let leftPanelKey = context.leftPanelKey;
  if (context.dragging) {
    return 'outline';
  } else if (leftPanelKey === 'none') {
    return leftPanelKey;
  }
  const panels = getLeftPanels({ context });
  const isIn = find(
    panels,
    panel => leftPanelKey && panel.key === leftPanelKey
  );

  if (!isIn) {
    return 'renderers';
  }
  return leftPanelKey;
};

export const getLeftPanels = ({ context }) => {
  return context.panels.filter(panel => panel.position === 'left');
};

export const getRightPanels = ({ context }) => {
  return context.panels.filter(
    panel => panel.position !== 'left' && panel.key !== 'contextmenu'
  );
};

export const getContextMenuPanel = ({ context }) => {
  return context.panels.find(panel => panel.key === 'contextmenu');
};

export const getPanels = ({ context }) => {
  const panels = [].concat(
    (getRightPanels({ context }) as any) || []
  );
  return panels.sort((a, b) => a.order - b.order);
};

export const getLeftPanels = ({ context }) => {
  const panels = [].concat(
    (getLeftPanels({ context }) as any) || []
  );

  if (context.insertId && context.insertRegion) {
    panels.push({
      key: 'insert',
      icon: 'fa fa-bolt',
      position: 'left',
      title: context.insertMode === 'replace' ? '变更' : '插入',
      component: InsertSubRendererPanel,
      order: 9999
    });
  }

  panels.push({
    key: 'insertRenderer',
    icon: 'fa fa-bolt',
    position: 'left',
    title: '插入组件面板',
    component: AvailableRenderersPanel,
    order: 9999
  });

  return panels.sort((a, b) => a.order - b.order);
};

export const getSortedToolbars = ({ context }) => {
  return context.toolbars
    .filter(
      toolbar =>
        toolbar.level !== 'secondary' && toolbar.level !== 'special'
    )
    .sort((a, b) => a.order - b.order);
};

export const getSortedSecondaryToolbars = ({ context }) => {
  return context.toolbars
    .filter(toolbar => toolbar.level === 'secondary')
    .sort((a, b) => a.order - b.order);
};

export const getSortedSpecialToolbars = ({ context }) => {
  return context.toolbars
    .filter(toolbar => toolbar.level === 'special')
    .sort((a, b) => a.order - b.order);
};

export const getValue = ({ context }) => {
  if (!context.activeId) {
    return undefined;
  }

  return getValueOf({ context, event: { value: { id: context.activeId } } });
};

export const getValueOf = ({ context, event }) => {
  const { id } = event.value;
  const schema = JSONGetById(context.schema, id);
  const data = JSONPipeOut(schema, false);
  return data;
};

export const getValueWithoutHiddenProps = ({ context }) => {
  if (!context.activeId) {
    return undefined;
  }

  const isSubEditor = context.isSubEditor;
  const isHiddenProps = getEnv(context).isHiddenProps;

  return JSONPipeOut(
    JSONGetById(context.schema, context.activeId),
    (key, props) => {
      if (isSubEditor && key === 'definitions') {
        return true;
      }

      if (typeof isHiddenProps === 'function') {
        return isHiddenProps(key, props);
      }

      return (
        (key.substring(0, 2) === '$$' &&
          typeof props === 'function') ||
        key.substring(0, 2) === '__'
      );
    }
  );
};

export const getOutline = ({ context }) => {
  return context.root.children;
};

export const getBcn = ({ context }) => {
  let bcn = [];

  if (context.activeId) {
    findTree(
      context.root.children,
      (item, index, leve, paths) => {
        if (item.id === context.activeId) {
          bcn = paths;
          return false;
        }
        return true;
      }
    );
  }

  return bcn.filter(item => !item.isSecondFactor);
};

export const getActivePath = ({ context }) => {
  return getNodePathById({ context, event: { value: { id: context.activeId } } });
};

export const getNodePathById = ({ context, event }) => {
  const { id } = event.value;
  let paths = [];
  if (!id) {
    return paths;
  }

  let iterator = (
    list,
    parents = []
  ) => {
    return list.every(node => {
      if (node.id === id) {
        paths = parents.concat(node);
        return false;
      } else if (node.children) {
        return iterator(node.children, parents.concat(node));
      }
      return true;
    });
  };

  iterator(context.root.children);

  return paths;
};

export const getDragging = ({ context }) => {
  if (draggableContainer({ context, event: { value: { id: context.dragId } } })) {
    return false;
  }
  return !!(context.dragId || context.dropId);
};

export const getNeedPatch = ({ context }) => {
  let hasUnPatched = (list) => {
    return list.some(node => {
      if (!node.patched && !node.isRegion) {
        return true;
      } else if (node.uniqueChildren.length) {
        return hasUnPatched(node.uniqueChildren);
      }

      return false;
    });
  };

  return hasUnPatched(context.root.children);
};

export const getSchemaRaw = ({ context }) => {
  return JSONPipeOut(context.schema);
};

export const getSubRenderersByOrder = ({ context }) => {
  return context.subRenderers
    .filter(renderer =>
      !renderer.disabledRendererPlugin && context.showCustomRenderersPanel
        ? renderer.isBaseComponent
        : true
    )
    .sort((a, b) => a.order - b.order);
};

export const getCustomRenderersByOrder = ({ context }) => {
  return context.subRenderers
    .filter(
      renderer =>
        !renderer.disabledRendererPlugin && !renderer.isBaseComponent
    )
    .sort((a, b) => a.order - b.order);
};

export const groupedRenderersByKeyword = ({ context, event }) => {
  const { _subRenderers, keywords } = event.value;
  const subRenderers = _subRenderers;
  const grouped = {};

  const searchMap = new Map();
  matchSorter(subRenderers, keywords, {
    keys: ['name', 'description', 'scaffold.type', 'searchKeywords']
  }).forEach(item => {
    searchMap.set(item.id, item);
  });

  subRenderers.forEach(item => {
    if (searchMap.has(item.id)) {
      const tags = Array.isArray(item.tags)
        ? item.tags
        : item.tags
          ? [item.tags]
          : ['未分类'];

      tags.forEach(tag => {
        if (!grouped[tag]) {
          grouped[tag] = [];
        }
        grouped[tag].push(item);
      });
    }
  });

  return grouped;
};

export const groupedSubRenderersByKeyword = ({ context, event }) => {
  const { _subRenderers, keywords } = event.value;
  const subRenderers = _subRenderers || getSubRenderersByOrder({ context });
  return groupedRenderersByKeyword({ context, event: { value: { _subRenderers: subRenderers, keywords } } });
};

export const getGroupedSubRenderers = ({ context }) => {
  if (context.subRenderersTag) {
    const grouped = {};
    const groupedSubRenderers = groupedSubRenderersByKeyword({ context });
    const curTagSubRenderers = groupedSubRenderers[context.subRenderersTag];
    if (curTagSubRenderers) {
      grouped[context.subRenderersTag] = curTagSubRenderers;
    }
    return grouped;
  } else {
    return groupedSubRenderersByKeyword(
      { context, event: { value: { _subRenderers: getSubRenderersByOrder({ context }), keywords: context.subRenderersKeywords } } }
    );
  }
};

export const groupedCustomRenderersByKeyword = ({ context, event }) => {
  const { _subRenderers, keywords } = event.value;
  const subRenderers = _subRenderers || getCustomRenderersByOrder({ context });
  return groupedRenderersByKeyword({ context, event: { value: { _subRenderers: subRenderers, keywords } } });
};

export const getGroupedCustomRenderers = ({ context }) => {
  if (context.customRenderersTag) {
    const grouped = {};
    const groupedCustomRenderers = groupedCustomRenderersByKeyword({ context });
    const curTagCustomRenderers =
      groupedCustomRenderers[context.customRenderersTag];
    if (curTagCustomRenderers) {
      grouped[context.customRenderersTag] = curTagCustomRenderers;
    }
    return grouped;
  } else {
    return groupedCustomRenderersByKeyword(
      { context, event: { value: { _subRenderers: getCustomRenderersByOrder({ context }), keywords: context.customRenderersKeywords } } }
    );
  }
};

export const getSubRendererById = ({ context, event }) => {
  const { id } = event.value;
  return find(context.subRenderers || [], item => item.id === id);
};

export const getGroupedInsertRenderers = ({ context }) => {
  const grouped = {
    ['全部']: []
  };
  const keywords = context.insertRenderersKeywords;
  const r = new RegExp(stringRegExp(keywords), 'i');

  context.insertRenderers
    .concat()
    .sort((a, b) => a.order - b.order)
    .forEach(item => {
      if (
        !keywords ||
        r.test(item.name) ||
        r.test(item.description) ||
        r.test(item.scaffold?.type) ||
        r.test(item.searchKeywords)
      ) {
        const tags = Array.isArray(item.tags)
          ? item.tags
          : item.tags
            ? [item.tags]
            : ['未分类'];

        tags.forEach(tag => {
          if (!grouped[tag]) {
            grouped[tag] = [];
          }
          grouped[tag].push(item);
        });
      }
    });

  return grouped;
};

export const getSelectedInsertRendererInfo = ({ context }) => {
  return find(
    context.insertRenderers,
    item => item.id === context.insertSelected
  );
};

export const getSubEditorSlotPath = ({ context }) => {
  const slot = context.subEditorContext?.slot;

  if (!slot) {
    return '';
  }

  let paths = [];
  let resolve = (
    value,
    prefixPaths = []
  ) => {
    if (
      value &&
      typeof value === 'object' &&
      !Array.isArray(value) &&
      value.$$id
    ) {
      paths = prefixPaths.concat(value.$$id);
      return true;
    } else if (isPlainObject(value)) {
      return Object.keys(value).every(key =>
        resolve(value[key], prefixPaths.concat(key))
      );
    } else if (value === '$$') {
      paths = prefixPaths;
      return true;
    }

    return false;
  };

  resolve(slot);

  return paths.length ? paths.join('/') : '';
};

export const getSubEditorValue = ({ context }) => {
  if (context.subEditorContext) {
    return context.subEditorContext.slot
      ? {
        ...mapObject(context.subEditorContext.slot, function (value) {
          return value;
        }),
        isSlot: true
      }
      : context.subEditorContext.value;
  }

  return undefined;
};

export const getCanUndo = ({ context }) => {
  const idx = context.schemaHistory.findIndex(
    item => item.versionId === context.versionId
  );
  return idx !== 0;
};

export const getCanRedo = ({ context }) => {
  const idx = context.schemaHistory.findIndex(
    item => item.versionId === context.versionId
  );
  return idx < context.schemaHistory.length - 1;
};

export const isFlexContainer = ({ context, event }) => {
  const { id } = event.value;
  const activeId = id ?? context.activeId;
  const curSchema = JSONGetById(context.schema, activeId);
  return curSchema?.style?.display === 'flex' || curSchema?.style?.display === 'inline-flex';
};

export const isFlexItem = ({ context, event }) => {
  const { id } = event.value;
  const activeId = id ?? context.activeId;
  const parentSchema = JSONGetParentById(context.schema, activeId, true);
  return parentSchema?.type === 'flex' || parentSchema?.style?.display === 'flex' || parentSchema?.style?.display === 'inline-flex';
};

export const isFlexColumnItem = ({ context, event }) => {
  const { id } = event.value;
  const activeId = id ?? context.activeId;
  const parentSchema = JSONGetParentById(context.schema, activeId, true);
  const isFlexItem = parentSchema?.type === 'flex' || parentSchema?.style?.display === 'flex' || parentSchema?.style?.display === 'inline-flex';
  const isFlexColumn = parentSchema?.direction === 'column' || parentSchema?.direction === 'column-reverse' || parentSchema?.style?.flexDirection === 'column' || parentSchema?.style?.flexDirection === 'column-reverse';
  return isFlexItem && isFlexColumn;
};

export const draggableContainer = ({ context, event }) => {
  const { id } = event.value;
  const activeId = id || context.activeId;
  const curSchema = JSONGetById(context.schema, activeId);
  const curSchemaStyle = curSchema?.style || {};
  return curSchemaStyle?.position === 'fixed' || curSchemaStyle?.position === 'absolute';
};

export const parentIsFreeContainer = ({ context, event }) => {
  const { id } = event.value;
  const activeId = id ?? context.activeId;
  const curNode = context.getNodeById(activeId);
  const parentNode = curNode?.parent;
  if (!parentNode) {
    return false;
  }
  const curSchema = JSONGetById(context.schema, parentNode.id);
  return curSchema?.isFreeContainer ? parentNode.id : false;
};

export const getSuperEditorData = ({ context }) => {
  return context.superEditorData || {};
};

export const getComponentTreeSource = ({ context }) => {
  return mapTree(
    context.root.children ?? [],
    (item) => {
      const schema = item.id ? JSONGetById(context.schema, item.id) : context.schema;
      let cmptLabel = '';
      const itemLabel = appTranslate(item?.label);
      const schemaLabel = appTranslate(schema?.label);
      const schemaTitle = appTranslate(schema?.title);
      if (item?.region) {
        cmptLabel = itemLabel;
      } else {
        const labelPrefix = item.type !== 'cell' ? `<${itemLabel}>` : `<column>`;
        cmptLabel = `${labelPrefix}${schemaLabel ?? schemaTitle ?? itemLabel}`;
      }
      cmptLabel = cmptLabel ?? itemLabel;
      return {
        id: item.id,
        label: cmptLabel,
        value: schema?.id ?? item.id,
        type: schema?.type ?? item.type,
        schema,
        disabled: !!item.region,
        visible: item.region ? !!item?.children.length : true,
        children: item?.children
      };
    },
    1,
    true
  );
};

export const getScaffoldData = ({ context }) => {
  return createObject(context.ctx, {
    ...(context.scaffoldForm?.value || {}),
    __step: context.scaffoldFormStep
  });
};

export const getModals = ({ context }) => {
  const schema = context.schema;
  const modals = getModals(schema);
  return modals;
};

export const getModalOptions = ({ context }) => {
  return context.modals.map((modal) => {
    return {
      label: `${modal.editorSetting?.displayName || modal.title || 'Unnamed pop-up window'}`,
      tip: modal.actionType === 'confirmDialog' ? 'Confirmation box' : modal.type === 'drawer' ? 'Drawer pop-up' : 'pop-up window',
      value: modal.$$id,
      $$ref: modal.$$ref
    };
  });
};



/* Actions */

export const setLayer = ({ context, event }) => {
  const { value } = event;
  context.layer = value;
  return { layer: context.layer };
};

export const getLayer = ({ context }) => {
  return { layer: context.layer };
};

export const setDoc = ({ context, event }) => {
  const { value } = event;
  context.doc = value;
  return { doc: context.doc };
};

export const getDoc = ({ context }) => {
  return { doc: context.doc };
};

export const setIframe = ({ context, event }) => {
  const { value } = event;
  context.iframe = value;
  return { iframe: context.iframe };
};

export const getIframe = ({ context }) => {
  return { iframe: context.iframe };
};

export const setIsMobile = ({ context, event }) => {
  const { value } = event;
  context.isMobile = !!value;
  return { isMobile: context.isMobile };
};

export const setCtx = ({ context, event }) => {
  let { value } = event;
  if (value?.__super) {
    value = extractObjectChain(value).reduce((acc, key) => {
      acc[key] = value[key];
      return acc;
    }, {});
  }
  context.ctx = value;
  return { ctx: context.ctx };
};

export const setTheme = ({ context, event }) => {
  const { value } = event;
  context.theme = value;
  return { theme: context.theme };
};

export const setIsSubEditor = ({ context, event }) => {
  const { isSubEditor } = event;
  context.isSubEditor = isSubEditor;
  return { isSubEditor: context.isSubEditor };
};

export const setShowCustomRenderersPanel = ({ context, event }) => {
  const { showCustomRenderersPanel } = event;
  context.showCustomRenderersPanel = showCustomRenderersPanel;
  return { showCustomRenderersPanel: context.showCustomRenderersPanel };
};

export const setSchema = ({ context, event }) => {
  const { json } = event;
  const newSchema = JSONPipeIn(json || {});
  if (context.schema && Object.keys(context.schema).length > 1) {
    context.schema = { ...context.schema, ...newSchema };
  } else {
    context.schema = newSchema;
  }
  context.schemaHistory = [{ versionId: 0, schema: context.schema }];
  context.versionId = 0;
  return { schema: context.schema, schemaHistory: context.schemaHistory, versionId: context.versionId };
};


export const insertSchema = ({ context, event }) => {
  const { id, region, data, beforeId } = event.context;
  const parent = JSONGetById(context.schema, id);

  if (!parent) {
    return;
  }

  const node = context.getNodeById(id, region);
  const LayoutInstance = getLayoutInstance(context.schema, node);
  const { beforeInsert, afterInsert } = LayoutInstance;

  if (beforeInsert) {
    event.context = beforeInsert(event.context, context);
  }

  const child = JSONPipeIn(data);

  if (parent.isFreeContainer) {
    child.style = {
      position: 'absolute',
      inset: '10px auto auto 10px'
    };

    if (needDefaultWidth(child.type)) {
      child.style.width = '300px';
    }
  }

  const arr = Array.isArray(parent[region])
    ? parent[region].concat()
    : parent[region]
      ? [parent[region]]
      : [];

  if (beforeId) {
    const idx = findIndex(arr, item => item?.$$id === beforeId);
    if (~idx) {
      arr.splice(idx, 0, child);
    } else {
      arr.push(child);
    }
  } else {
    arr.push(child);
  }

  event.context.data = child;
  event.context.regionList = arr;

  if (afterInsert) {
    event.context = afterInsert(event.context, context);
  }

  context.traceableSetSchema(
    JSONUpdate(context.schema, id, {
      [region]: event.context.regionList
    })
  );

  if (child?.$$id) {
    setTimeout(() => {
      context.setActiveId(child.$$id);
    }, 0);
  }

  return child;
};

export const moveSchema = ({ context, event }) => {
  const { sourceId, beforeId, region, id } = event.context;
  let schema = context.schema;

  if (sourceId === beforeId) {
    return;
  }

  const node = context.getNodeById(id, region);
  const LayoutInstance = getLayoutInstance(context.schema, node);
  const { beforeMove, afterMove } = LayoutInstance;

  if (beforeMove) {
    event.context = beforeMove(event.context, context);
  }

  const source = JSONGetById(schema, sourceId);
  schema = JSONDelete(schema, sourceId, undefined, true);

  const json = JSONGetById(schema, id);
  let origin = json[region];
  origin = Array.isArray(origin)
    ? origin.concat()
    : origin
      ? [origin]
      : [];

  if (beforeId) {
    const idx = findIndex(origin, item => item.$$id === beforeId);
    if (!~idx) {
      throw new Error('Position error, target position not found');
    }
    origin.splice(idx, 0, source);
  } else {
    origin.push(source);
  }

  event.context.regionList = origin;

  if (afterMove) {
    event.context = afterMove(event.context, context);
  }

  context.traceableSetSchema(
    JSONUpdate(schema, id, {
      [region]: event.context.regionList
    })
  );
};

export const setActiveId = ({ context, event }) => {
  const { id, region = '', selections = [], onEditorActive = true } = event;
  const node = id ? context.getNodeById(id) : undefined;

  if (node?.clickable === false || (id && !node)) {
    return;
  }

  context.activeId = id;
  context.activeRegion = region;
  context.selections = selections;

  const schema = context.getSchema(id);

  if (onEditorActive) {
    window.onEditorActive?.(schema);
  }
};

export const setActiveIdByComponentId = ({ context, event }) => {
  const { id } = event;
  const node = context.getNodeByComponentId(id);
  if (node) {
    context.setActiveId(node.id, node.region, [], false);
    context.closeSubEditor();
  } else {
    const modals = context.modals;
    const modalSchema = find(modals, modal => modal.id === id);
    if (modalSchema) {
      context.openSubEditor({
        value: modalSchema,
        title: 'Popup Preview',
        onChange: (value) => {}
      });
    } else {
      const subEditorRef = context.getSubEditorRef();
      if (subEditorRef) {
        // Handle subEditorRef logic if needed
      }
    }
  }
};

export const setSelections = ({ context, event }) => {
  const { ids } = event;
  context.activeId = '';
  context.activeRegion = '';
  context.selections = ids ? ids.concat() : [];
};

export const clearSelection = ({ context }) => {
  context.selections = [];
};

export const setHoverId = ({ context, event }) => {
  const { id, region } = event;
  const node = id ? context.getNodeById(id) : undefined;

  if (node?.clickable === false) {
    return;
  }

  context.hoverId = id;
  context.hoverRegion = region || '';
};

export const setMouseMoveRegion = ({ context, event }) => {
  const { region } = event;
  context.mouseMoveRegion = region;
};

export const setInsertId = ({ context, event }) => {
  const { id } = event;
  context.insertId = id;
};

export const setContextId = ({ context, event }) => {
  const { id } = event;
  context.contextId = id;
};

export const setDragId = ({ context, event }) => {
  const { id, mode = 'move', type = 'schema', schema } = event;
  context.dragId = id;
  context.dragMode = mode;
  context.dragType = type;
  context.dragSchema = schema || (id ? context.getSchema(id) : null);
};

export const setDropId = ({ context, event }) => {
  const { id, region = '' } = event;
  context.dropId = id;
  context.dropRegion = region;
  context.planDropId = '';
  context.planDropRegion = '';
};

export const setPlanDropId = ({ context, event }) => {
  const { id, region } = event;
  context.planDropId = id;
  context.planDropRegion = region;
};

export const setActiveToolbars = ({ context, event }) => {
  const { activeToolbars } = event;
  context.toolbars = activeToolbars;
};

export const setPanels = ({ context, event }) => {
  const { panels } = event;
  context.panels = panels;
};

export const setSubRenderers = ({ context, event }) => {
  const { renderers } = event;
  context.subRenderers = renderers;
};

export const changeSubRenderersKeywords = ({ context, event }) => {
  const { keywords } = event;
  context.subRenderersKeywords = keywords;
  context.subRenderersTag = '';
};

export const changeSubRenderersTag = ({ context, event }) => {
  const { tag } = event;
  context.subRenderersKeywords = '';
  context.subRenderersTag = tag;
};

export const resetSubRenderersKeywords = ({ context }) => {
  context.subRenderersKeywords = '';
  context.subRenderersTag = '';
};

export const changeCustomRenderersKeywords = ({ context, event }) => {
  const { keywords } = event;
  context.customRenderersKeywords = keywords;
  context.customRenderersTag = '';
};

export const changeCustomRenderersTag = ({ context, event }) => {
  const { tag } = event;
  context.customRenderersKeywords = '';
  context.customRenderersTag = tag;
};

export const resetCustomRenderersKeywords = ({ context }) => {
  context.customRenderersKeywords = '';
  context.customRenderersTag = '';
};

export const changeSubRendererRegion = ({ context, event }) => {
  const { region } = event;
  context.subRendererRegion = region;
};

export const changePanelKey = ({ context, event }) => {
  const { key } = event;
  if (key !== context.getPanelKey()) {
    context.panelKey = key;
  }
};

export const changeLeftPanelKey = ({ context, event }) => {
  const { key } = event;
  if (key === 'insert' || context.panelKey === 'insert') {
    // Handle insert logic if needed
  }

  if (key !== context.getLeftPanelKey()) {
    context.leftPanelKey = key;
  }
};

export const changeRenderersTabsKey = ({ context, event }) => {
  const { key } = event;
  if (key !== context.renderersTabsKey) {
    context.renderersTabsKey = key;
  }
};

export const changeOutlineTabsKey = ({ context, event }) => {
  const { key } = event;
  if (key !== context.outlineTabsKey) {
    context.outlineTabsKey = key;
  }
};

export const changeLeftPanelOpenStatus = ({ context, event }) => {
  const { isOpenStatus } = event;
  if (isOpenStatus !== context.leftPanelOpenStatus) {
    context.leftPanelOpenStatus = isOpenStatus;
  }
};

export const showRendererPanel = ({ context, event }) => {
  const { tag, msg } = event;
  if ('renderers' !== context.getLeftPanelKey()) {
    // Handle renderer panel logic if needed
  }

  context.renderersTabsKey = 'base-renderers';
  if (tag) {
    // Handle tag logic if needed
  }
  context.changeLeftPanelOpenStatus(true);
};

export const changeValue = ({ context, event }) => {
  // Handle change value logic if needed
};

export const definitionOnchangeValue = ({ context, event }) => {
  const { value, diff } = event;
  context.changeValueById(context.getRootId(), value, diff);
};

export const changeValueById = ({ context, event }) => {
  const { id, value, diff, changeFilter } = event;
  const origin = JSONGetById(context.schema, id);

  if (!origin) {
    return;
  }

  if (diff) {
    // Handle diff logic if needed
  }
};

export const batchChangeValue = ({ context, event }) => {
  const { list } = event;
  context.traceableSetSchema(
    list.reduce((schema, item) => {
      // Handle batch change value logic if needed
    }, context.schema),
    true
  );
};

export const updateContainerStyleByDrag = ({ context, event }) => {
  const { dragId, dx, dy } = event;
  const curDragId = dragId || context.dragId;
  if (!curDragId) {
    return;
  }
  const curSchema = context.getSchema(curDragId);
  const curSchemaStyle = curSchema?.style || {};
  if (curSchemaStyle?.position === 'fixed' || curSchemaStyle?.position === 'absolute') {
    // Handle update container style by drag logic if needed
  }
};

export const moveUp = ({ context, event }) => {
  const { sourceId, regionNode, region, id } = event.context;
  if (!sourceId) {
    return;
  }
  const schema = JSONMoveUpById(context.schema, sourceId);
  const LayoutInstance = getLayoutInstance(context.schema, regionNode);

  if (LayoutInstance.afterMoveUp) {
    // Handle after move up logic if needed
  } else {
    // Handle else logic if needed
  }
};

export const moveDown = ({ context, event }) => {
  const { sourceId, regionNode, region, id } = event.context;
  if (!sourceId) {
    return;
  }
  const schema = JSONMoveDownById(context.schema, sourceId);
  const LayoutInstance = getLayoutInstance(context.schema, regionNode);

  if (LayoutInstance.afterMoveDown) {
    // Handle after move down logic if needed
  } else {
    // Handle else logic if needed
  }
};

export const del = ({ context, event }) => {
  const { id } = event.context;
  if (id === context.activeId) {
    // Handle active id logic if needed
  } else if (context.activeId) {
    // Handle else if logic if needed
  }

  const schema = JSONDelete(context.schema, id);

  const node = context.getNodeById(id);
  const LayoutInstance = getLayoutInstance(context.schema, node?.parent);

  if (LayoutInstance.afterDelete && node) {
    // Handle after delete logic if needed
  } else {
    // Handle else logic if needed
  }
};

export const delMulti = ({ context, event }) => {
  const { ids } = event.context;
  (Array.isArray(ids) ? ids : [ids]).forEach(id => {
    if (id === context.activeId) {
      // Handle active id logic if needed
    }
  });
  context.traceableSetSchema(
    ids.reduce((schema, id) => {
      // Handle reduce logic if needed
    }, context.schema)
  );
};

export const duplicate = ({ context, event }) => {
  const { id } = event.context;
  context.traceableSetSchema(
    (Array.isArray(id) ? id : [id]).reduce((schema, id) => {
      // Handle reduce logic if needed
    }, context.schema)
  );
};

export const emptyRegion = ({ context, event }) => {
  const { id, region } = event.context;
  context.traceableSetSchema(
    JSONUpdate(context.schema, id, {
      [region]: []
    })
  );
};

export const replaceChild = ({ context, event }) => {
  const { id, json } = event.context;
  context.traceableSetSchema(
    JSONUpdate(context.schema, id, JSONPipeIn(json), true)
  );
};

export const setInsertRegion = ({ context, event }) => {
  const { region, id = '', tag = '全部', mode = 'insert', originId = '', beforeId } = event;
  context.insertId = id;
  context.insertRegion = region;
  context.insertTag = tag;
  context.insertMode = mode;
  context.insertOrigId = originId;
  context.insertBeforeId = beforeId || '';
};

export const closeInsertPanel = ({ context }) => {
  context.insertOrigId = '';
  context.insertId = '';
  context.insertRegion = '';
  context.insertSelected = '';
  context.insertRenderersKeywords = '';
  context.insertBeforeId = '';
};

export const showInsertRendererPanel = ({ context }) => {
  context.showInsertRenderer = true;
};

export const closeInsertRendererPanel = ({ context }) => {
  context.showInsertRenderer = false;
};

export const setInsertRenderers = ({ context, event }) => {
  const { renderers } = event;
  context.insertRenderers = renderers;
};

export const changeInsertRenderersKeywords = ({ context, event }) => {
  const { keywords } = event;
  context.insertRenderersKeywords = keywords;
};

export const resetInsertRenderersKeywords = ({ context }) => {
  context.insertRenderersKeywords = '';
};

export const setInsertTag = ({ context, event }) => {
  const { tag } = event;
  context.insertTag = tag;
};

export const setInsertSelected = ({ context, event }) => {
  const { id } = event;
  context.insertSelected = id;
};

export const setJSONSchemaUri = ({ context, event }) => {
  const { schemaUri } = event;
  context.jsonSchemaUri = schemaUri;
};

export const addModal = ({ context, event }) => {
  const { modal, definitions } = event;
  const [schema] = addModal(context.schema, modal, definitions);
  context.traceableSetSchema(schema);
};

export const countModalActionRefs = ({ context, event }) => {
  const { id } = event;
  let count = 0;
  const host = JSONGetParentById(context.schema, id);

  if (host?.actionType) {
    return host.type ? 0 : 1;
  } else if (host !== context.schema.definitions) {
    // Handle else if logic if needed
  }

  const modalKey = Object.keys(host).find(key => host[key]?.$$id === id);
  JSONTraverse(context.schema, (value, key, host) => {
    if (/* condition */) {
      // Handle condition logic if needed
    }
    return value;
  });

  return count;
};

export const removeModal = ({ context, event }) => {
  const { id } = event;
  let schema = context.schema;
  const host = JSONGetParentById(schema, id);
  if (host === schema.definitions) {
    // Handle definitions logic if needed
  } else {
    // Handle else logic if needed
  }
  context.traceableSetSchema(schema);
};

export const updateModal = ({ context, event }) => {
  const { id, modal, definitions } = event;
  let schema = context.schema;
  const parent = JSONGetParentById(schema, id);

  if (!parent) {
    // Handle parent not found logic if needed
  }

  const newModal = JSONPipeIn(modal);
  if (definitions && isPlainObject(definitions)) {
    // Handle definitions logic if needed
  }

  const newHostKey = /* logic to get new host key */;

  schema = JSONUpdate(schema, id, newModal, true);

  if (!parent.actionType) {
    // Handle actionType logic if needed
  }

  let refIds = [];
  // @ts-ignore
  // Handle refIds logic if needed

  if (refIds.length) {
    // Handle refIds length logic if needed
  }

  context.traceableSetSchema(schema);
};

export const openSubEditor = ({ context, event }) => {
  const { value, title, onChange, slot, data, validate, canUndo, canRedo, typeMutable, memberImmutable, props, hostNode } = event.context;
  const activeId = context.activeId;

  if (!activeId) {
    return;
  }

  context.subEditorContext = {
    value,
    title,
    onChange,
    slot,
    data,
    validate,
    canUndo,
    canRedo,
    typeMutable,
    memberImmutable,
    props,
    hostNode: context.getNodeById(activeId),
    data: createObject(context.ctx, data)
  };
};

export const confirmSubEditor = ({ context, event }) => {
  const { valueRaw } = event;
  const { onChange, slot } = context.subEditorContext;
  let value = valueRaw.schema;
  let originValue = valueRaw.__pristine?.schema || value;

  if (slot) {
    const slotPath = context.subEditorSlotPath;
    const dotPath = slotPath.replace(/(?:\/)/g, '.');
    value = getVariable(value, dotPath);
    originValue = getVariable(originValue, dotPath);

    if (Array.isArray(value) && value.length === 1 && !Array.isArray(originValue)) {
      value = value[0];
    }
  }

  onChange(value, onChange.length > 1 ? diff(originValue, value) : undefined);

  return { subEditorContext: undefined };
};

export const closeSubEditor = ({ context }) => {
  return { subEditorContext: undefined };
};


export const subEditorOnChange = ({ context }) => {
  if (!context.subEditor) {
    return;
  }

  return {
    ...context.subEditorContext!,
    canUndo: context.subEditor.canUndo(),
    canRedo: context.subEditor.canRedo()
  }
};



export const undoSubEditor = ({ context }) => {
  if (!context.subEditor) {
    return;
    }

  return context.subEditor.undo();
};

export const redoSubEditor = ({ context }) => {
  if (!context.subEditor) {
    return
  }
  return context.subEditor.redo()
};

export const subEditorRef = ({ context }) => {
  return context.subEditor.ref;
};

export const getSubEditorRef = ({ context }) => {
  return context.subEditor;
}

export const openScaffoldForm = ({ context }) => {
  const scaffoldForm = event.value.form;
  return {
    scaffoldForm: context,
    scaffoldStepManipulated: false,
  };
};

export const closeScaffoldForm = () => {
  return { scaffoldForm: undefined };
};

export const setScaffoldBuzy = ({ event }) => {
  return { scaffoldFormBuzy: !!event.value.value };
};

export const setScaffoldStep = ({ context, event }) => {
  return { scaffoldFormStep: event.value.value };
};

export const setScaffoldStepManipulated = ({ event }) => {
  return { scaffoldStepManipulated: event.value.manipulated };
};

export const setScaffoldError = ({ event }) => {
  const scaffoldError = event.value.error;
  return { scaffoldError:event.value.msg };
};

export const updateScaffoldData = (context, event) => {
  const scaffoldForm = { ...context.scaffoldForm, value: event.value.data };
  return { scaffoldForm };
};

export const openPopOverForm = (context, event) => {
  const { value } = event.value;
  if (context.scaffoldForm && value) {
    return {
      scaffoldForm: {
        ...context.scaffoldForm,
        value: replace ? value : { ...context.scaffoldForm.value, ...value }
      }
    }
  }
};



export const openPopOverForm= ({ context, event }) => {
  return { popOverForm: context };
};

export const closePopOverForm = () => {
  return { popOverForm: undefined };
};

export const activeHighlightNodes = ({ context, event }) => {

  const { ids } = event.value;

  ids.forEach(id => {
    const node = context.getNodeById(id);
    const target = node?.getTarget();

    if (target) {
      (Array.isArray(target) ? target : [target]).forEach(target =>
        // observer.observe(target)
      );
    }
    setTimeout(() => {
      return calculateHighlightBox(ids);
    }, 200);
  });
}


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

