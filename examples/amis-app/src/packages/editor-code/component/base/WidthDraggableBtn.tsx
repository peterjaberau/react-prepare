import React from 'react';
import { useDrag, DragSourceMonitor } from 'react-dnd';
import cx from 'classnames';

interface WidthDraggableProps {
  isLeftDragIcon?: boolean;
  className?: any;
}

export const WidthDraggableBtn: React.FC<WidthDraggableProps> = ({ isLeftDragIcon, className }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'WIDTH_DRAGGABLE',
    item: { type: 'WIDTH_DRAGGABLE' },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={cx(
        'width-draggable-icon',
        className,
        isLeftDragIcon ? 'leftBtn' : '',
        { 'dragging': isDragging }
      )}
      style={{ cursor: 'move' }}
    >
    </div>
  );
};

