import React, { useState, useEffect, useCallback } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { message } from 'antd';
import { EditorManager } from '../manager';
import { DragEventContext, SubRendererInfo } from '../plugin';
import { EditorStoreType } from '../store/editor';
import { EditorNodeType } from '../store/node';
import { JSONGetById, unitFormula } from '../util';
import DefaultDNDMode from './default';
import PositionHDNDMode from './position-h';
import FlexDNDMode from './flex';

const toastWarning = (msg: string) => {
  message.warning(msg);
};

const EditorDNDManager: React.FC<{ manager: EditorManager; store: EditorStoreType }> = ({ manager, store }) => {
  const [dragEnterCount, setDragEnterCount] = useState(0);
  const [dragElement, setDragElement] = useState<HTMLElement | null>(null);
  const [dragImage, setDragImage] = useState<HTMLElement | null>(null);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [curDragId, setCurDragId] = useState<string | null>(null);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [dndMode, setDndMode] = useState<DNDModeInterface | null>(null);

  const createDragImage = useCallback((id: string, node?: EditorNodeType) => {
    const dragImage = document.createElement('div');
    dragImage.classList.add('ae-DragImage');
    dragImage.innerHTML = `<span>${node?.label || id}</span>`;
    document.body.appendChild(dragImage);
    setDragImage(dragImage);
    return dragImage;
  }, []);

  const disposeDragImage = useCallback(() => {
    if (dragImage) {
      dragImage.parentElement?.removeChild(dragImage);
      setDragImage(null);
    }
  }, [dragImage]);

  const switchToRegion = useCallback((e: DragEvent, id: string, region: string): boolean => {
    if (!id || !region || (store.dropId === id && store.dropRegion === region)) {
      return false;
    }
    const node = store.getNodeById(id, region)!;
    const config = node.regionInfo!;
    const json = store.dragSchema;

    if (config?.accept?.(json) === false || node.host?.memberImmutable(region)) {
      return false;
    }

    const context: DragEventContext = {
      mode: store.dragMode as any,
      sourceType: store.dragType as any,
      sourceId: store.dragId,
      data: store.dragSchema,
      targetId: id,
      targetRegion: region
    };

    const event = manager.trigger('dnd-accept', context);
    if (event.prevented) {
      return false;
    }

    dndMode?.leave(e, dragElement!);
    dndMode?.dispose();

    store.setDropId(id, region);
    makeDNDModeInstance(node);
    dndMode?.enter(e, dragElement!);
    store.calculateHighlightBox([id]);
    return true;
  }, [dndMode, dragElement, manager, store]);

  const makeDNDModeInstance = useCallback((region: EditorNodeType) => {
    if (!region || !isAlive(region)) {
      return dndMode || null;
    }
    const mode = region.regionInfo?.dndMode;
    const regionNode = JSONGetById(store.schema, region.id);
    let Klass: new (
      dnd: EditorDNDManager,
      region: EditorNodeType,
      config: any
    ) => DNDModeInterface = DefaultDNDMode;

    if (mode === 'position-h') {
      Klass = PositionHDNDMode;
    }
    if (typeof mode === 'function') {
      if (mode(regionNode) === 'flex') {
        Klass = FlexDNDMode;
      }
    }

    const instance = new Klass(this, region, { regionNode });
    setDndMode(instance);
    return instance;
  }, [dndMode, store.schema]);

  const startDrag = useCallback((id: string, e: DragEvent) => {
    const node = store.getNodeById(id)!;
    const dom = store.getDoc().querySelector(`[data-editor-id="${id}"]`);
    if (!node || !dom) {
      e.preventDefault();
      return;
    }
    e.target?.addEventListener('dragend', dragEnd);

    setLastPosition({ x: e.clientX, y: e.clientY });

    if (manager.draggableContainer(node.id)) {
      setCurDragId(id);
      setStartPosition({ x: e.clientX, y: e.clientY });
      return;
    }

    setDragElement(dom as HTMLElement);
    e.dataTransfer!.effectAllowed = 'move';
    e.dataTransfer!.setDragImage(createDragImage(id, node), 0, 0);
    e.dataTransfer!.setData(`dnd/ae-node-${id}`.toLowerCase(), ``);

    setTimeout(() => {
      store.setDragId(id);
      const region = node.parent;
      switchToRegion(e, region.id, region.region);
    }, 4);
  }, [createDragImage, manager, store, switchToRegion]);

  const dragEnter = useCallback((e: DragEvent) => {
    setDragEnterCount(prev => prev + 1);
    const activeId = store.activeId;

    if (activeId) {
      const curNode = store.getNodeById(activeId);
      if (!curNode) {
        toastWarning('Please select an element as the insertion position.');
        return;
      }
    } else {
      toastWarning('Please select an element as the insertion position.');
      return;
    }

    if (store.dragId || dragEnterCount !== 1) {
      return;
    }

    const types = e.dataTransfer!.types;
    if (types.length > 0) {
      for (let i = types.length - 1; i >= 0; i--) {
        if (/^dnd-dom\/(.*)$/.test(types[i])) {
          const selector = RegExp.$1;
          const dom = document.querySelector(selector);
          if (dom) {
            dom.addEventListener('dragend', dragEnd);
            const id = dom.getAttribute('data-dnd-id')!;
            const type = dom.getAttribute('data-dnd-type')!;
            const dataRaw = dom.getAttribute('data-dnd-data');
            const schema = dataRaw
              ? JSON.parse(dataRaw)
              : {
                type: 'tpl',
                tpl: 'Unknown'
              };
            store.setDragId(id, 'copy', type, schema);
            const containerId = store.activeContainerId;

            if (containerId) {
              const node = store.getNodeById(containerId);
              if (node?.childRegions.length) {
                let slotIndex = 0;
                node.childRegions.forEach((regionItem: any, index: number) => {
                  if (regionItem.region) {
                    slotIndex = index;
                  }
                });
                switchToRegion(
                  e,
                  node.id,
                  node.childRegions[slotIndex].region
                );
              }
            }
            break;
          }
        }
      }
    }

    if (curDragId && manager.draggableContainer(curDragId)) {
      const curNode = store.getNodeById(activeId);
      if (curNode) {
        const parentNode = curNode.parentId
          ? store.getNodeById(curNode.parentId)
          : undefined;
        if (parentNode?.schema?.isFreeContainer) {
          store.setDropId(curNode.parentId, 'body');
        }
      }
      return;
    }
  }, [curDragId, dragEnterCount, manager, store, switchToRegion]);

  const dragOver = useCallback((e: DragEvent) => {
    e.preventDefault();
    const dx = e.clientX - lastPosition.x;
    const dy = e.clientY - lastPosition.y;
    const d = Math.max(Math.abs(dx), Math.abs(dy));

    if (d > 0 && curDragId && manager.draggableContainer(curDragId)) {
      const doc = store.getDoc();
      const parentDoc = parent?.window.document;

      let dragHlBoxItem = doc.querySelector(
        `[data-hlbox-id='${curDragId}']`
      ) as HTMLElement;

      if (store.isMobile && !dragHlBoxItem && parentDoc) {
        dragHlBoxItem = parentDoc.querySelector(
          `[data-hlbox-id='${curDragId}']`
        ) as HTMLElement;
      }

      if (dragHlBoxItem) {
        const hlBoxInset = dragHlBoxItem.style.inset || 'auto';
        const hlBoxInsetArr = hlBoxInset.split(' ');
        const hlBInset = {
          top: dragHlBoxItem.style.top || hlBoxInsetArr[0] || 'auto',
          right: dragHlBoxItem.style.right || hlBoxInsetArr[1] || 'auto',
          bottom:
            dragHlBoxItem.style.bottom ||
            hlBoxInsetArr[2] ||
            hlBoxInsetArr[0] ||
            'auto',
          left:
            dragHlBoxItem.style.left ||
            hlBoxInsetArr[3] ||
            hlBoxInsetArr[1] ||
            'auto'
        };
        dragHlBoxItem.style.inset = `${
          hlBInset.top !== 'auto' ? unitFormula(hlBInset.top, dy) : 'auto'
        } ${
          hlBInset.right !== 'auto' ? unitFormula(hlBInset.right, -dx) : 'auto'
        } ${
          hlBInset.bottom !== 'auto'
            ? unitFormula(hlBInset.bottom, -dy)
            : 'auto'
        } ${
          hlBInset.left !== 'auto' ? unitFormula(hlBInset.left, dx) : 'auto'
        }`;
      }

      const dragContainerItem = doc.querySelector(
        `[data-editor-id='${curDragId}']`
      ) as HTMLElement;

      if (dragContainerItem) {
        const curInset = dragContainerItem.style.inset || 'auto';
        const insetArr = curInset.split(' ');
        const inset = {
          top: insetArr[0] || 'auto',
          right: insetArr[1] || 'auto',
          bottom: insetArr[2] || insetArr[0] || 'auto',
          left: insetArr[3] || insetArr[1] || 'auto'
        };
        dragContainerItem.style.inset = `${
          inset.top !== 'auto' ? unitFormula(inset.top, dy) : 'auto'
        } ${inset.right !== 'auto' ? unitFormula(inset.right, -dx) : 'auto'} ${
          inset.bottom !== 'auto' ? unitFormula(inset.bottom, -dy) : 'auto'
        } ${inset.left !== 'auto' ? unitFormula(inset.left, dx) : 'auto'}`;
      }
      setLastPosition({ x: e.clientX, y: e.clientY });
      return;
    }

    if (!store.dropId || !e.target) {
      return;
    }

    const curRegion = (e.target as HTMLElement).closest(`[data-region][data-region-host]`);
    const hostId = curRegion?.getAttribute('data-region-host');
    const region = curRegion?.getAttribute('data-region');
    const containerElem = (e.target as HTMLElement).closest('[data-editor-id][data-container]');
    const containerId = containerElem?.getAttribute('data-editor-id');

    const isMetaPressed = e.ctrlKey || e.metaKey || e.altKey;

    if (isMetaPressed) {
      if (region && hostId && containerElem!.contains(curRegion)) {
        store.setPlanDropId(hostId, region);
      } else if (containerId) {
        store.setPlanDropId(containerId, '');
      }
      return;
    }

    if (d < 5) {
      return;
    }

    setLastPosition({ x: e.clientX, y: e.clientY });

    if (store.dropId === hostId && region && region !== store.dropRegion) {
      switchToRegion(e, store.dropId, region);
      return;
    }

    store.setPlanDropId('', '');
    dndMode?.over(e, dragElement!);
  }, [curDragId, dndMode, dragElement, lastPosition, manager, store, switchToRegion]);

  const drop = useCallback(async (e: DragEvent) => {
    if (curDragId && manager.draggableContainer(curDragId)) {
      const dx = e.clientX - startPosition.x;
      const dy = e.clientY - startPosition.y;
      manager.updateContainerStyleByDrag(curDragId, dx, dy);
      setCurDragId(null);
      store.setDropId('');
      return;
    }

    if (!store.dropId) {
      return;
    }

    const beforeId = dndMode?.getDropBeforeId();
    const position = dndMode?.getDropPosition?.();

    if (dndMode?.interruptionDrop?.()) {
      return;
    }
    if (store.dragMode === 'move') {
      manager.move(
        store.dropId,
        store.dropRegion,
        store.dragId,
        beforeId,
        { position }
      );
    } else if (store.dragMode === 'copy') {
      let schema = store.dragSchema;
      const dropId = store.dropId;
      const dropRegion = store.dropRegion;
      let subRenderer: SubRendererInfo | undefined = undefined;

      if (store.dragType === 'subrenderer') {
        subRenderer = find(store.subRenderers, r => r.id === store.dragId);
        if (subRenderer?.scaffoldForm) {
          schema = await manager.scaffold(
            subRenderer.scaffoldForm,
            schema
          );
        }
      }

      manager.addChild(
        dropId,
        dropRegion,
        schema,
        beforeId,
        subRenderer,
        {
          id: store.dragId,
          type: store.dragType,
          data: store.dragSchema,
          position: position
        },
        false
      );
    }
  }, [curDragId, dndMode, manager, startPosition, store]);

  const dragLeave = useCallback(() => {
    setDragEnterCount(prev => prev - 1);
  }, []);

  const dragEnd = useCallback((e: DragEvent) => {
    e.target?.removeEventListener('dragend', dragEnd);

    dndMode?.leave(e, dragElement!);
    setDndMode(null);
    store.setDragId('');
    store.setDropId('');
    store.setPlanDropId('', '');
    disposeDragImage();
    setDragEnterCount(0);
  }, [dndMode, dragElement, disposeDragImage, store]);

  const updateDragElements = useCallback((dragId: string) => {
    if (dragId && manager.draggableContainer(dragId)) {
      return;
    }
    if (dragId) {
      [].slice
        .call(
          store.getDoc().querySelectorAll(`[data-editor-id="${dragId}"]`)
        )
        .forEach((elem: HTMLElement) => elem.classList.add('ae-is-draging'));
    } else {
      [].slice
        .call(store.getDoc().querySelectorAll(`.ae-is-draging`))
        .forEach((elem: HTMLElement) => elem.classList.remove('ae-is-draging'));
    }
  }, [manager, store]);

  const updateDropRegion = useCallback(
    (value: { id: string; region: string }, oldValue?: { id: string; region: string }) => {
      if (store.dragId && manager.draggableContainer(store.dragId)) {
        return;
      }
      if (oldValue?.id && oldValue.region) {
        store
          .getDoc()
          .querySelector(
            `[data-region="${oldValue.region}"][data-region-host="${oldValue.id}"]`
          )
          ?.classList.remove('is-dragenter');
      }

      if (value.id && value.region) {
        store
          .getDoc()
          .querySelector(
            `[data-region="${value.region}"][data-region-host="${value.id}"]`
          )
          ?.classList.add('is-dragenter');
      }
    },
    [manager, store]
  );

  useEffect(() => {
    // Add any necessary setup or cleanup logic here
    return () => {
      disposeDragImage();
    };
  }, [disposeDragImage]);

  return (
    <div>
      {/* Render your component UI here */}
    </div>
  );
};

export default EditorDNDManager;
