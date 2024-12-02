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

const DrawerPanel: React.FC<PanelsProps> = ({ store, manager, node, panelItem, theme }) => {
  const [visible, setVisible] = useState(!!panelItem);

  const handleClose = () => {
    setVisible(false);
    store.closeInsertPanel();
  };

  return (
    <Drawer
      placement="left"
      size="medium"
      theme={theme}
      visible={visible}
      onClose={handleClose}
      className="ae-InsertPanel-drawer"
    >
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

export default DrawerPanel;
