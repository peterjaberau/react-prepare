import React, { useState } from "react"
import { Collapse, Button } from "antd"
import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons"
import { Tabs } from "antd"

const { Panel } = Collapse

interface PanelItem {
  key: string
  title: string
  icon: React.ReactNode
  pluginIcon?: string
  render?: (props: any) => React.ReactNode
  component?: React.ComponentType<any>
}

interface RightPanelsProps {
  panels: PanelItem[]
  activePanelKey?: string
  onPanelChange?: (key: string) => void
  readonly?: boolean
}

const RightPanels: React.FC<RightPanelsProps> = ({ panels, activePanelKey, onPanelChange, readonly }) => {
  const [isFixedStatus, setIsFixedStatus] = useState(false)
  const [activeKey, setActiveKey] = useState(activePanelKey || panels[0]?.key)

  const handleFixed = () => {
    setIsFixedStatus(!isFixedStatus)
  }

  const handleSelect = (key: string | string[]) => {
    setActiveKey(key as string)
    if (onPanelChange) {
      onPanelChange(key as string)
    }
  }

  const renderPanel = (panel: PanelItem) => {
    return panel.render ? (
      panel.render({
        onChange: () => {},
        readonly,
      })
    ) : panel.component ? (
      <panel.component key={panel.key} onChange={() => {}} readonly={readonly} />
    ) : null
  }

  return panels.length > 0 ? (
    <div className={isFixedStatus ? "fixed" : ""}>
      <Button onClick={handleFixed}>{isFixedStatus ? "Turn off suspension mode" : "Turn on suspension mode"}</Button>
      <Tabs
        activeKey={activeKey}
        onChange={handleSelect}
        items={panels.map((panel) => ({
          key: panel.key,
          label: panel.title,
          icon: panel.pluginIcon ? panel.pluginIcon : panel.icon,
          children: renderPanel(panel)
        }))}
      />
    </div>
  ) : null
}

export default RightPanels

/*
import React, { useState, useCallback } from 'react';
import { Tabs } from 'antd';
import classNames from 'classnames';
import { EditorManager } from '../../manager';
import { EditorStoreType } from '../../store/editor';
import { Icon } from '../../icons/index';
import { PanelItem } from '../../plugin';
import WidthDraggableBtn from '../base/WidthDraggableBtn';

interface RightPanelsProps {
  store: EditorStoreType;
  manager: EditorManager;
  theme?: string;
  appLocale?: string;
  amisEnv?: any;
  readonly?: boolean;
}

const RightPanels: React.FC<RightPanelsProps> = ({
  store,
  manager,
  theme,
  readonly
}) => {
  const [isOpenStatus, setIsOpenStatus] = useState(true);
  const [isFixedStatus, setIsFixedStatus] = useState(false);

  const handleFixed = useCallback(() => {
    setIsFixedStatus(!isFixedStatus);
  }, [isFixedStatus]);

  const handleSelect = useCallback((key: string) => {
    store.changePanelKey(key);
  }, [store]);

  const handleHidden = useCallback(() => {
    setIsOpenStatus(!isOpenStatus);
  }, [isOpenStatus]);

  const handlePanelChangeValue = useCallback(
    (...args: Parameters<typeof manager.panelChangeValue>) => {
      manager.panelChangeValue(...args);
    },
    [manager]
  );

  const panels = store.getPanels();
  const id = store.activeId;
  const node = store.getNodeById(id);
  const panelKey = store.getPanelKey();

  const renderPanel = (panel: PanelItem) => {
    return panel.render ? (
      panel.render({
        id,
        info: node?.info,
        path: node?.path,
        node: node,
        value: store.value,
        onChange: handlePanelChangeValue,
        store: store,
        manager: manager,
        readonly
      })
    ) : panel.component ? (
      <panel.component
        node={node}
        key={panel.key}
        id={id}
        info={node?.info}
        path={node?.path}
        value={store.value}
        onChange={handlePanelChangeValue}
        store={store}
        manager={manager}
        readonly={readonly}
      />
    ) : null;
  };

  return panels.length > 0 ? (
    <div
      className={classNames(
        'editor-right-panel width-draggable',
        'AMISCSSWrapper',
        panels.length > 1 ? 'mul-tabs-panel' : '',
        isOpenStatus ? '' : 'hidden-status',
        isFixedStatus ? 'fixed-status' : ''
      )}
    >
      <div
        className="editor-panel-btn"
        title={isFixedStatus ? 'Disable floating mode' : 'Enable floating mode'}
      >
        <Icon
          icon={isFixedStatus ? 'editor-fixed' : 'editor-no-fixed'}
          className="panel-btn"
          onClick={handleFixed}
        />
      </div>
      <div className="editorPanel-inner">
        {panels.length === 1 ? (
          renderPanel(panels[0])
        ) : (
          <Tabs
            activeKey={panelKey}
            onChange={handleSelect}
            tabPosition="right"
            className="editorPanel-tabs"
          >
            {panels.map(panel => {
              const usePluginIcon = isHasPluginIcon(panel);
              return (
                <Tabs.TabPane
                  tab={
                    <span
                      className="editor-tab-icon"
                      title={panel.title}
                    >
                      {usePluginIcon && (
                        <Icon
                          icon={panel.pluginIcon}
                          className="pluginIcon"
                        />
                      )}
                      {!usePluginIcon && <i className={`fa ${panel.icon}`} />}
                    </span>
                  }
                  key={panel.key}
                  className={`editorPanel-tabs-pane ae-Editor-${panel.key}Pane`}
                >
                  {renderPanel(panel)}
                </Tabs.TabPane>
              );
            })}
          </Tabs>
        )}
      </div>
      <WidthDraggableBtn isLeftDragIcon={true} />
      <div
        className={classNames(
          'right-panel-arrow',
          isOpenStatus ? '' : 'hidden-status'
        )}
        onClick={handleHidden}
      ></div>
    </div>
  ) : null;
};

export default RightPanels;




 */
