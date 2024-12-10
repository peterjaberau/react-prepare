import React, { useState, useEffect, useCallback } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { renderThumbToGhost } from '../component/factory';
import { EditorNodeType } from '../store/node';
import { translateSchema } from '../util';
import { findIndex, findLastIndex, find } from 'lodash';

const className = 'PushHighlight';
const ITEM_TYPE = 'FLEX_ITEM';

interface FlexDNDModeProps {
  dnd: any; // Replace with actual type
  region: EditorNodeType;
  config: any;
}

const FlexDNDMode: React.FC<FlexDNDModeProps> = ({ dnd, region, config }) => {
  const [dndContainer, setDndContainer] = useState<HTMLElement | null>(null);
  const [dropBeforeId, setDropBeforeId] = useState<string | undefined>();
  const [position, setPosition] = useState<'top' | 'bottom' | 'left' | 'right' | undefined>();
  const [dragNode, setDragNode] = useState<any>();
  const [dragId, setDragId] = useState<string>('');
  const [store, setStore] = useState<any>(null);
  const maxRolLength = config.regionNode.maxRolLength || 4;

  useEffect(() => {
    const container = dnd.store
      .getDoc()
      .querySelector(
        `[data-region="${region.region}"][data-region-host="${region.id}"]`
      ) as HTMLElement;
    setDndContainer(container);
  }, [dnd, region]);

  const [{ isOver }, drop] = useDrop({
    accept: ITEM_TYPE,
    drop: (item, monitor) => {
      // Handle drop logic
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const [{ isDragging }, drag] = useDrag({
    type: ITEM_TYPE,
    item: { id: dragId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const enter = useCallback((e: DragEvent, ghost: HTMLElement) => {
    const dragEl = dnd.dragElement;
    const list = Array.isArray(region.schema) ? region.schema : [];
    const manager = dnd.manager;
    setStore(manager.store);

    if (list.length === 0) {
      if (dragEl && dragEl.closest('[data-region]') === dndContainer) {
        const child = getChild(dndContainer, dragEl);
        dndContainer?.insertBefore(ghost, child);
        let innerHTML = dragEl.outerHTML
          .replace('ae-is-draging', '')
          .replace(/\bdata\-editor\-id=(?:'.+?'|".+?")/g, '');
        ghost.innerHTML = innerHTML;
      } else {
        renderThumbToGhost(
          ghost,
          region,
          translateSchema(store.dragSchema),
          manager
        );
        dndContainer?.appendChild(ghost);
      }
    } else {
      ghost.innerHTML = '';
      dndContainer?.appendChild(ghost);
    }
    setDragId(store.dragId);
    setDragNode(
      find(list, (item: any) => item.$$id === dragId) || store.dragSchema
    );
  }, [dnd, region, dndContainer, store, dragId]);

  const leave = useCallback((e: DragEvent, ghost: HTMLElement) => {
    dndContainer?.removeChild(ghost);
    clearGhostStyle(ghost);
  }, [dndContainer]);

  const over = useCallback((e: DragEvent, ghost: HTMLElement) => {
    const { isMobile } = store;
    const colTarget = (e.target as HTMLElement).closest('[role="flex-col"]');
    const wrapper = dndContainer;
    const elemSchema = region.schema;
    const { x: wx, y: wy } = wrapper.getBoundingClientRect();
    const list: Array<any> = Array.isArray(elemSchema) ? elemSchema : [];
    clearGhostStyle(ghost);

    if (colTarget && list.length) {
      const { width, height, x, y } = colTarget.getBoundingClientRect();
      const cx = e.clientX;
      const cy = e.clientY;
      const w = width / 8;
      const h = height / 2;

      const target = getTarget(colTarget);
      const targetId = target.getAttribute('data-editor-id')!;
      const targetIndex = findIndex(
        list,
        (item: any) => item.$$id === targetId
      );
      const targetRow = list[targetIndex].row;
      const targetRowLen = list.filter(
        (item: any) => item.row === targetRow
      ).length;
      const canRL =
        dragId !== targetId &&
        dragNode?.$$dragMode !== 'hv' &&
        list[targetIndex]?.$$dragMode !== 'hv' &&
        (targetRowLen < maxRolLength || dragNode?.row === targetRow) &&
        !isMobile;

      if (cx < x + w && canRL) {
        ghost.classList.add(`ae-${className}-left`);
        ghost.style.left = x - wx + 'px';
        ghost.style.top = y - wy + 'px';
        ghost.style.height = height + 'px';
        setDropBeforeId(targetId);
        setPosition('left');
      } else if (cx > x + 7 * w && canRL) {
        ghost.classList.add(`ae-${className}-right`);
        ghost.style.left = x - wx + width + 'px';
        ghost.style.top = y - wy + 'px';
        ghost.style.height = height + 'px';
        setDropBeforeId(
          list[
            list[targetIndex + 1]?.$$id === dragId
              ? targetIndex + 2
              : targetIndex + 1
            ]?.$$id
        );
        setPosition('right');
      } else if (cy < y + h) {
        if (
          store.isMobile &&
          (dragNode?.$$dragMode !== 'hv' ||
            list[targetIndex]?.$$dragMode !== 'hv') &&
          list[targetIndex].row === list[targetIndex - 1]?.row
        ) {
          setPosition(undefined);
          setDropBeforeId(undefined);
          return;
        }

        ghost.classList.add(`ae-${className}-top`);
        ghost.style.width = '100%';
        ghost.style.top = y - wy + 'px';

        if (store.isMobile) {
          setDropBeforeId(targetId);
        } else {
          const beforeIndex = findIndex(
            list,
            (item: any) => item.row === targetRow
          );
          const index =
            list[beforeIndex]?.$$id === dragId
              ? beforeIndex + 1
              : beforeIndex;
          setDropBeforeId(list[index]?.$$id);
        }
        setPosition('top');
      } else {
        if (
          store.isMobile &&
          (dragNode?.$$dragMode !== 'hv' ||
            list[targetIndex]?.$$dragMode !== 'hv') &&
          list[targetIndex].row === list[targetIndex + 1]?.row
        ) {
          setPosition(undefined);
          setDropBeforeId(undefined);
          return;
        }
        ghost.classList.add(`ae-${className}-bottom`);
        ghost.style.width = '100%';
        ghost.style.top = y - wy + height + 'px';
        if (store.isMobile) {
          setDropBeforeId(list[targetIndex + 1]?.$$id);
        } else {
          const lastIndex = findLastIndex(
            list,
            (item: any) => item.row === targetRow
          );
          const index =
            list[lastIndex + 1]?.$$id === dragId
              ? lastIndex + 2
              : lastIndex + 1;
          setDropBeforeId(list[index]?.$$id);
        }
        setPosition('bottom');
      }
    } else {
      setDropBeforeId(undefined);
      if (list.length) {
        const rows = wrapper.querySelectorAll('[role="flex-row"]');
        const lastRow = rows[rows.length - 1];
        const { y, height } = lastRow.getBoundingClientRect();
        ghost.classList.add(`ae-${className}-bottom`);
        ghost.style.width = '100%';
        ghost.style.top = y - wy + height + 'px';
      }
      setPosition('bottom');
    }
  }, [dndContainer, store, dragId, dragNode, maxRolLength]);

  const clearGhostStyle = (ghost: HTMLElement) => {
    ghost.style.left = '';
    ghost.style.top = '';
    ghost.style.right = '';
    ghost.style.bottom = '';
    ghost.style.width = '';
    ghost.style.height = '';
    ghost.classList.remove(`ae-${className}-left`);
    ghost.classList.remove(`ae-${className}-right`);
    ghost.classList.remove(`ae-${className}-top`);
    ghost.classList.remove(`ae-${className}-bottom`);
  };

  const getTarget = (col: Element | null) => {
    let target = col?.querySelector('[data-editor-id]') as HTMLElement;
    return target;
  };

  const getChild = (dom: HTMLElement, descend: HTMLElement) => {
    let child = descend;

    while (child) {
      if (child.parentElement === dom) {
        break;
      }

      child = child.parentElement!;
    }

    return child;
  };

  const getDropBeforeId = () => {
    return dropBeforeId;
  };

  const getDropPosition = () => {
    return position;
  };

  const interruptionDrop = () => {
    if (!dropBeforeId && !position) {
      return true;
    }
    return false;
  };

  return (
    <div ref={drop}>
      {/* Render your component UI here */}
    </div>
  );
};

export default FlexDNDMode;
