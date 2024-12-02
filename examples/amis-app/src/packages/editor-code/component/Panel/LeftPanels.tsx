import React, { useState, useCallback } from 'react';
import { Tabs, Tooltip } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import cx from 'classnames';
import { DrawerPanel } from './DrawerPanel';
import { DrawerRendererPanel } from './DrawerRendererPanel';

interface LeftPanelsProps {
  store: any; // Adjust the type as needed
  manager: any; // Adjust the type as needed
  theme?: string;
}

const LeftPanels: React.FC<LeftPanelsProps> = ({ store, manager, theme }) => {
  const [isFixedStatus, setIsFixedStatus] = useState(false);
  const [leftPanelOpenStatus, setLeftPanelOpenStatus] = useState(store.leftPanelOpenStatus);
  const [panelKey, setPanelKey] = useState(store.getLeftPanelKey());

  const handleHidden = useCallback(() => {
    const nextStatus = !leftPanelOpenStatus;
    setLeftPanelOpenStatus(nextStatus);
    setPanelKey(nextStatus ? 'outline' : 'none');
  }, [leftPanelOpenStatus]);

  const handleFixed = useCallback(() => {
    setIsFixedStatus(!isFixedStatus);
  }, [isFixedStatus]);

  const handleSelect = useCallback((key: string) => {
    if (key) {
      setLeftPanelOpenStatus(true);
      setPanelKey(key);
    }
  }, []);

  const panels = store.getLeftPanels();
  const id = store.activeId;
  const node = store.getNodeById(id);
  const insertPanel = store.insertId && store.insertRegion && panels.find(p => p.key === 'insert');
  const insertRendererPanel = panels.find(p => p.key === 'insertRenderer');

  const renderPanel = (panel: any) => {
    return panel.render ? (
      panel.render({
        id,
        info: node?.info,
        path: node?.path,
        node: node,
        value: store.value,
        onChange: manager.panelChangeValue,
        store: store,
        manager: manager,
      })
    ) : panel.component ? (
      <panel.component
        node={node}
        key={panel.key}
        id={id}
        info={node?.info}
        path={node?.path}
        value={store.value}
        onChange={manager.panelChangeValue}
        store={store}
        manager={manager}
      />
    ) : null;
  };

  return (
    <>
      {panels.length > 0 && (
        <div
          className={cx(
            'editor-left-panel width-draggable',
            leftPanelOpenStatus ? '' : 'hidden-status',
            isFixedStatus ? 'fixed-status' : ''
          )}
        >
          <Tooltip title={isFixedStatus ? 'Disable Floating Mode' : 'Enable Floating Mode'} placement="right">
            <div className="editor-panel-btn" onClick={handleFixed}>
              {isFixedStatus ? <RightOutlined /> : <LeftOutlined />}
            </div>
          </Tooltip>
          <Tabs
            className="editorPanel-tabs"
            tabBarGutter={0}
            activeKey={panelKey}
            onChange={handleSelect}
            tabPosition="left"
          >
            {panels.map(panel => {
              return panel.key !== 'insert' && panel.key !== 'insertRenderer' ? (
                <Tabs.TabPane
                  tab={panel.title}
                  key={panel.key}
                  className={`editorPanel-tabs-pane ae-Editor-${panel.key}Pane`}
                >
                  {renderPanel(panel)}
                </Tabs.TabPane>
              ) : null;
            })}
          </Tabs>
          <div
            className={cx(
              'left-panel-arrow',
              leftPanelOpenStatus ? '' : 'hidden-status'
            )}
            onClick={handleHidden}
          ></div>
        </div>
      )}
      {isFixedStatus && (
        <div className="editor-left-panel-fixed-placeholder"></div>
      )}
      {/* Insert component panel (reuse existing component panel) */}
      <DrawerPanel
        store={store}
        manager={manager}
        node={node}
        panelItem={insertPanel}
        theme={theme}
      />
      <DrawerRendererPanel
        store={store}
        manager={manager}
        node={node}
        panelItem={insertRendererPanel}
        theme={theme}
      />
    </>
  );
};

export default LeftPanels;
