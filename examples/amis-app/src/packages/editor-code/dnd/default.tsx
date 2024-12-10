/**
 * Default drag-and-drop mode implementation.
 */
import React, { useState, useEffect, useCallback } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { renderThumbToGhost } from '../component/factory';
import { EditorNodeType } from '../store/node';
import { translateSchema } from '../util';
import { animation } from 'amis';
import { findIndex } from 'lodash';
import { EditorDNDManager } from '.';

interface DefaultDNDModeProps {
  dnd: EditorDNDManager;
  region: EditorNodeType;
}

const DefaultDNDMode: React.FC<DefaultDNDModeProps> = ({ dnd, region }) => {
  const [dndContainer, setDndContainer] = useState<HTMLElement | null>(null);
  const [dropBeforeId, setDropBeforeId] = useState<string | undefined>(undefined);
  const [exchangePosition, setExchangePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = dnd.store
      .getDoc()
      .querySelector(
        `[data-region="${region.region}"][data-region-host="${region.id}"]`
      ) as HTMLElement;
    setDndContainer(container);
  }, [dnd, region]);

  const [{ isDragging }, dragRef] = useDrag({
    type: 'ITEM',
    item: { id: region.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'ITEM',
    hover(item: any, monitor) {
      const dragIndex = item.index;
      const hoverIndex = region.id;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = dndContainer!.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      setExchangePosition({ x: clientOffset!.x, y: clientOffset!.y });
      item.index = hoverIndex;
    },
  });

  const handleEnter = useCallback((e: DragEvent, ghost: HTMLElement) => {
    const dragEl = dnd.dragElement;
    if (dragEl && dragEl.closest('[data-region]') === dndContainer) {
      const list: Array<any> = Array.isArray(region.schema) ? region.schema : [];
      const child = getChild(dndContainer!, dragEl);
      const id = dragEl.getAttribute('data-editor-id')!;
      const idx = findIndex(list, (item: any) => item.$$id === id);
      if (~idx && list[idx + 1]) {
        setDropBeforeId(list[idx + 1].$$id);
      }
      dndContainer!.insertBefore(ghost, child);

      let innerHTML = dragEl.outerHTML
        .replace('ae-is-draging', '')
        .replace(/\bdata\-editor\-id=(?:'.+?'|".+?")/g, '');
      ghost.innerHTML = innerHTML;
    } else {
      const manager = dnd.manager;
      const store = manager.store;
      renderThumbToGhost(
        ghost,
        region,
        translateSchema(store.dragSchema),
        manager
      );
      dndContainer!.appendChild(ghost);
    }
  }, [dnd, dndContainer, region]);

  const handleLeave = useCallback((e: DragEvent, ghost: HTMLElement) => {
    dndContainer!.removeChild(ghost);
  }, [dndContainer]);

  const handleOver = useCallback((e: DragEvent, ghost: HTMLElement) => {
    const target = getTarget(e);
    const wrapper = dndContainer;
    const elemSchema = region.schema;
    const list: Array<any> = Array.isArray(elemSchema) ? elemSchema : [];
    const dx = e.clientX - exchangePosition.x;
    const dy = e.clientY - exchangePosition.y;
    const vertical = Math.abs(dy) > Math.abs(dx);
    const manager = dnd.manager;
    const store = manager.store;

    if (target && !animation.animating) {
      const targetId = target.getAttribute('data-editor-id')!;
      const targetChild = getChild(wrapper!, target!);
      const idx = findIndex(list, (item: any) => item.$$id === targetId);

      const originIdx = Array.prototype.indexOf.call(wrapper!.children, ghost);
      const targetIdx = Array.prototype.indexOf.call(
        wrapper!.children,
        targetChild
      );

      if (
        ~originIdx &&
        originIdx > targetIdx &&
        (!exchangePosition.y || (vertical ? dy < 0 : dx < 0))
      ) {
        setExchangePosition({ x: e.clientX, y: e.clientY });
        setDropBeforeId(list[idx]?.$$id);

        if (originIdx !== targetIdx - 1) {
          animation.capture(wrapper!);
          wrapper!.insertBefore(ghost, targetChild);
          animation.animateAll(store.calculateHighlightBox);
        }
      } else if (
        ~originIdx &&
        originIdx < targetIdx &&
        (!exchangePosition.y || (vertical ? dy > 0 : dx > 0))
      ) {
        setExchangePosition({ x: e.clientX, y: e.clientY });

        if (list[idx + 1]) {
          setDropBeforeId(list[idx + 1]?.$$id);
        } else {
          setDropBeforeId(undefined);
        }

        if (originIdx !== targetIdx + 1) {
          animation.capture(wrapper!);
          wrapper!.insertBefore(ghost, targetChild.nextSibling);
          animation.animateAll(store.calculateHighlightBox);
        }
      }
    }

    if (ghost.parentNode !== wrapper) {
      setDropBeforeId(undefined);
      animation.capture(wrapper!);
      wrapper!.appendChild(ghost);
      animation.animateAll(store.calculateHighlightBox);
    }
  }, [dndContainer, exchangePosition, region, dnd]);

  const getTarget = (e: DragEvent) => {
    let target = (e.target as HTMLElement).closest(
      '[data-editor-id]'
    ) as HTMLElement;

    while (target) {
      const region = target.parentElement?.closest('[data-region]');

      if (region === dndContainer) {
        const renderer = target.getAttribute('data-renderer');
        if (renderer === 'grid') {
          return target.parentElement;
        } else {
          return target;
        }
      }

      target =
        (target.parentElement?.closest('[data-editor-id]') as HTMLElement) ||
        null;
    }

    return null;
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

  return (
    <div ref={dropRef}>
    <div ref={dragRef} style={{ opacity: isDragging ? 0.5 : 1 }}>
  {/* Render your component here */}
  </div>
  </div>
);
};

export default DefaultDNDMode;
