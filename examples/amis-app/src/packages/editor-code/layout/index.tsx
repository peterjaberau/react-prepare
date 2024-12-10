import React from 'react';
import { useTheme } from 'antd';
import { EditorNodeType } from '../store/node';
import { JSONGetById } from '../util';
import DefaultLayout from './default';
import FlexLayout from './flex';
import { LayoutInterface } from './interface';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const getLayoutComponent = (
  schema: any,
  region: EditorNodeType
): React.FC<LayoutInterface> => {
  if (!region) {
    return DefaultLayout;
  }
  const mode = region?.regionInfo?.dndMode;
  const regionNode = JSONGetById(schema, region?.id);
  let Component = DefaultLayout;
  if (typeof mode === 'function') {
    if (mode(regionNode) === 'flex') {
      Component = FlexLayout;
    }
  }
  return Component;
};

const LayoutProvider: React.FC<{ schema: any; region: EditorNodeType }> = ({
                                                                             schema,
                                                                             region,
                                                                           }) => {
  const theme = useTheme();
  const LayoutComponent = getLayoutComponent(schema, region);

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ background: theme.colorBgContainer }}>
        <LayoutComponent />
      </div>
    </DndProvider>
  );
};

export default LayoutProvider;
