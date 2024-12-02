/**
 * 显示可以作为 target 的名称列表
 */
import React, { useState } from 'react';
import { List, Typography } from 'antd';
import classNames from 'classnames';

interface TargetName {
  editorId: string;
  name: string;
  type: string;
}

interface TargetNamePanelProps {
  targetNames: TargetName[];
}

const TargetNamePanel: React.FC<TargetNamePanelProps> = ({ targetNames }) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoverId, setHoverId] = useState<string | null>(null);

  const handleClick = (editorId: string) => {
    setActiveId(editorId);
  };

  const handleEnter = (editorId: string) => {
    setHoverId(editorId);
  };

  return (
    <div className="ae-TargetName">
      <Typography.Text>
        When components like forms or lists have names, they will appear here for easy selection.
      </Typography.Text>
      <List
        className="ae-TargetName-list"
        dataSource={targetNames}
        renderItem={targetName => {
          const editorId = targetName.editorId;
          return (
            <List.Item
              className={classNames('ae-TargetName-node', {
                'is-active': activeId === editorId,
                'is-hover': hoverId === editorId
              })}
              onMouseEnter={() => handleEnter(editorId)}
              onClick={() => handleClick(editorId)}
              key={editorId}
            >
              <Typography.Text className="label label-info pull-right">
                {targetName.type}
              </Typography.Text>
              <Typography.Link>{targetName.name}</Typography.Link>
            </List.Item>
          );
        }}
      />
    </div>
  );
};

export default TargetNamePanel;
