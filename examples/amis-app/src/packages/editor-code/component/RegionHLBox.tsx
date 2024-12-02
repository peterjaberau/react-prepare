import React, { useState, useCallback } from 'react';
import { Button, Tooltip } from 'antd';
import { ClearOutlined } from '@ant-design/icons';

export const AddBTNSvg = `<svg viewBox="0 0 12 12">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
  <g id="plus" fill="currentColor" fill-rule="nonzero">
    <polygon points="6.6 6.6 6.6 12 5.4 12 5.4 6.6 0 6.6 0 5.4 5.4 5.4 5.4 0 6.6 0 6.6 5.4 12 5.4 12 6.6"></polygon>
  </g>
</g>
</svg>`;

export interface HighlightBoxProps {
  id: string;
  name: string;
  title: string;
  isOnlyChildRegion: boolean;
  node: { x: number; y: number; w: number; h: number; host: { info: { renderer: { name: string } } } };
  manager: { emptyRegion: (id: string, name: string) => void };
}

const HighlightBox: React.FC<HighlightBoxProps> = ({
                                                     id,
                                                     name,
                                                     title,
                                                     isOnlyChildRegion,
                                                     node,
                                                     manager
                                                   }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [isDragEnter, setIsDragEnter] = useState(false);

  const handleClick = useCallback(() => {
    manager.emptyRegion(id, name);
  }, [id, name, manager]);

  const dx = node.x - node.host.info.renderer.name;
  const dy = node.y - node.host.info.renderer.name;

  return (
    <div
      data-renderer={node.host.info.renderer.name}
      data-region={name}
      className={`ae-Editor-rhlbox ${isDragEnter ? 'is-dragenter' : ''} ${
        isOnlyChildRegion || isHighlighted ? 'is-highlight' : ''
      }`}
      style={{
        width: node.w,
        height: node.h,
        borderWidth: `${Math.max(0, dy)}px ${Math.max(
          0,
          node.host.info.renderer.name - dx - node.w
        )}px ${Math.max(0, node.host.info.renderer.name - dy - node.h)}px ${Math.max(0, dx)}px`
      }}
    >
      <div
        data-node-id={id}
        data-node-region={name}
        className={`region-tip ${isOnlyChildRegion ? 'is-only-child-region' : ''} ignore-hover-elem`}
      >
        <span className="region-text">{title}</span>
        <span className="margin-space">|</span>
        <Tooltip title="Click to clear the current area" placement="bottom">
          <Button
            type="text"
            icon={<ClearOutlined />}
            onClick={handleClick}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default HighlightBox;
