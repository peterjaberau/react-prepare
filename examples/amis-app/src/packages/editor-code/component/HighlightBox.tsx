import React, { useState, useCallback } from 'react';
import { Button, Tooltip } from 'antd';
import { Icon } from '@ant-design/icons';
import { EditorNodeType } from '../store/node';
import { EditorManager } from '../manager';

export interface HighlightBoxProps {
  node: EditorNodeType;
  id: string;
  className?: string;
  title: string;
  onSwitch?: (id: string) => void;
  manager: EditorManager;
  children?: React.ReactNode;
  readonly?: boolean;
}

const HighlightBox: React.FC<HighlightBoxProps> = ({
                                                     className,
                                                     id,
                                                     title,
                                                     children,
                                                     node,
                                                     onSwitch,
                                                     manager,
                                                     readonly
                                                   }) => {
  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = useCallback(() => {
    if (!manager.disableHover) {
      setIsHover(true);
    }
  }, [manager]);

  const handleMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  const handleDragStart = useCallback((e: React.DragEvent) => {
    if (!manager.disableHover) {
      manager.startDrag(id, e);
    }
  }, [id, manager]);

  const handleSwitch = useCallback((nodeId: string) => {
    onSwitch?.(nodeId);
  }, [onSwitch]);

  if (!node) {
    return <div />;
  }

  return (
    <div
      className={`highlight-box ${className} ${isActive ? 'active' : ''} ${isHover ? 'hover' : ''}`}
      style={{
        display: node.w && node.h ? 'block' : 'none',
        top: node.y,
        left: node.x,
        width: node.w,
        height: node.h
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      draggable={!readonly}
      onDragStart={handleDragStart}
    >
      {isActive && !readonly && (
        <div className="toolbar">
          {node.host && (
            <Tooltip title={node.host.label}>
              <Button onClick={() => handleSwitch(node.host.id)}>Parent</Button>
            </Tooltip>
          )}
          <Tooltip title={title}>
            <Button>Current</Button>
          </Tooltip>
          {node.firstChild && (
            <Tooltip title={node.firstChild.label}>
              <Button onClick={() => handleSwitch(node.firstChild.id)}>Child</Button>
            </Tooltip>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export default HighlightBox;
