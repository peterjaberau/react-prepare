import React, { useState } from 'react';
import { Drawer } from 'antd';
import { EditorManager } from '../../manager';
import { EditorStoreType } from '../../store/editor';
import { EditorNodeType } from '../../store/node';

export interface PanelsProps {
  store: EditorStoreType;
  manager: EditorManager;
  node: EditorNodeType | undefined;
  panelItem: any;
  theme?: string;
}

const DrawerRendererPanel: React.FC<PanelsProps> = ({ store, manager, node, panelItem, theme }) => {
  const [showInsertRenderer, setShowInsertRenderer] = useState(store.showInsertRenderer);

  const handleClose = () => {
    setShowInsertRenderer(false);
    store.closeInsertRendererPanel();
  };

  return (
    <Drawer
      placement="left"
      size="medium"
      theme={theme}
      visible={showInsertRenderer}
      onClose={handleClose}
      className="ae-InsertRendererPanel-drawer"
      bodyStyle={{ padding: 0 }}
    >
      {panelItem.title && (
        <div className="ae-drawer-title">{panelItem.title}</div>
      )}
      {panelItem && panelItem.component ? (
        <panelItem.component
          key={panelItem.key}
          id={store.activeId}
          info={node?.info}
          path={node?.path}
          value={store.value}
          onChange={manager.panelChangeValue}
          store={store}
          manager={manager}
        />
      ) : null}
    </Drawer>
  );
};

export default DrawerRendererPanel;
