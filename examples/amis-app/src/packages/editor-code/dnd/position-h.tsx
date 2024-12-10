/**
 * @file A simpler drag-and-drop mode, directly displaying a line at a specific position to inform the user of the drag-and-drop destination.
 * For example, moving columns in a Table, if we really need to move the dom, it might be fatal.
 */
import React, { useState, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { findIndex } from 'lodash';
import { DefaultDNDMode } from './default';
import { DNDModeInterface } from './interface';

interface PositionHDNDModeProps {
  dndContainer: HTMLElement;
  region: any;
}

const PositionHDNDMode: React.FC<PositionHDNDModeProps> = ({ dndContainer, region }) => {
  const [dropBeforeId, setDropBeforeId] = useState<string | null>(null);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ITEM',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: 'ITEM',
    hover(item: any, monitor) {
      const dragEl = item.dragElement;
      const regionRect = dndContainer.getBoundingClientRect();
      const list: Array<any> = Array.isArray(region.schema) ? region.schema : [];

      if (dragEl && dragEl.closest(`[data-region]`) === dndContainer) {
        const id = dragEl.getAttribute('data-editor-id')!;
        const idx = findIndex(list, (item: any) => item.$$id === id);
        if (~idx && list[idx + 1]) {
          setDropBeforeId(list[idx + 1].$$id);
        }

        if (dragEl.nextElementSibling) {
          const rect = dragEl.nextElementSibling.getBoundingClientRect();
          dragEl.style.cssText += `top: 0; left: ${rect.x - regionRect.x}px;`;
        } else {
          dragEl.style.cssText += `top: 0; left: 100%;`;
        }
      } else {
        dragEl.style.cssText += `top: 0; left: -999999%;`;
      }
    },
  }));

  useEffect(() => {
    // Cleanup or additional effects can be handled here
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div ref={drop} className={`dnd-container ${isDragging ? 'dragging' : ''}`}>
        {/* Render your draggable items here */}
      </div>
    </DndProvider>
  );
};

export default PositionHDNDMode;
