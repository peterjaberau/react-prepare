import React, { useState, useEffect } from 'react';
import { Tabs, Input, Icon } from 'antd';
import cx from 'classnames';
import DialogList from './DialogList';

const { TabPane } = Tabs;

function OutlinePanel({ store, manager }) {
  const [curSearchElemKey, setCurSearchElemKey] = useState('');
  const [dragging, setDragging] = useState(false);

  const handleClick = (e) => {
    const id = e.currentTarget.getAttribute('data-node-id');
    const region = e.currentTarget.getAttribute('data-node-region');

    if (region) {
      if (store.activeId === id && store.activeRegion === region) {
        store.setActiveId(id);
      } else {
        store.setActiveId(id, region);
      }
    } else {
      store.setActiveId(id);
    }
  };

  const handleEnter = (e) => {
    const id = e.currentTarget.getAttribute('data-node-id');
    const region = e.currentTarget.getAttribute('data-node-region');
    store.setHoverId(id, region);
  };

  const handleTabChange = (key) => {
    if (key) {
      store.changeOutlineTabsKey(key);
    }
  };

  const handleDragStart = (e) => {
    const id = e.currentTarget.getAttribute('data-node-id');
    if (id) {
      manager.startDrag(id, e);
    }
  };

  const handleDragEnter = (e) => {
    const dom = e.target.closest(`[data-node-id][data-node-region]`);
    if (!dom) return;
    e.preventDefault();
    const id = dom.getAttribute('data-node-id');
    const region = dom.getAttribute('data-node-region');
    if (id && region) {
      manager.dnd.switchToRegion(e.nativeEvent, id, region);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    manager.dnd.drop(e.nativeEvent);
  };

  const handleSearchElemKeyChange = (e) => {
    setCurSearchElemKey(e.target.value);
  };

  const clearSearchElemKey = () => {
    setCurSearchElemKey('');
  };

  const renderTitleByKeyword = (rendererTitle, curSearchTitle) => {
    if (curSearchTitle && rendererTitle.includes(curSearchTitle)) {
      const keywordStartIndex = rendererTitle.indexOf(curSearchTitle);
      const keywordEndIndex = keywordStartIndex + curSearchTitle.length;
      return (
        <span>
          {rendererTitle.substring(0, keywordStartIndex)}
          <span className="has-keywords">{curSearchTitle}</span>
          {rendererTitle.substring(keywordEndIndex)}
        </span>
      );
    } else {
      return rendererTitle;
    }
  };

  const renderItem = (option, index, type, indent = 0) => {
    const children = option.singleRegion
      ? option.uniqueChildren[0].uniqueChildren
      : option.uniqueChildren;

    const hasChildren = children.length;

    return (
      <li
        style={{ '--indent': indent }}
        className={cx('ae-Outline-node', {
          'is-folded': option.folded,
          'is-active':
            (store.activeId === option.id && !option.region) ||
            (option.isRegion &&
              store.dropId === option.id &&
              store.dropRegion === option.region) ||
            (option.isRegion &&
              store.activeId === option.id &&
              store.activeRegion === option.region),
          'is-region': option.isRegion,
          'is-hover': !option.isRegion && store.isContextOn(option.id),
          'has-children': hasChildren,
        })}
        key={index}
      >
        <a
          onClick={handleClick}
          onMouseEnter={handleEnter}
          data-node-id={option.id}
          data-node-region={option.region}
          draggable={option.draggable}
          onDragStart={handleDragStart}
        >
          {hasChildren ? (
            <span
              onClick={option.toggleFold}
              className={cx('ae-Outline-expander ae-Outline-node-icon', {
                'is-folded': option.folded,
              })}
              data-node-id={option.id}
              data-node-region={option.region}
            >
              <Icon type="down" />
            </span>
          ) : (
            <span className={cx('ae-Outline-textIndent')}></span>
          )}
          <span className="ae-Outline-node-text">
            {option.isCommonConfig
              ? `${option.label}-[Common Config]`
              : option.isFormConfig
                ? `${option.label}-[Form Config]`
                : renderTitleByKeyword(
                  getDialogNodeLabel(option, type),
                  curSearchElemKey
                )}
          </span>
        </a>
        {hasChildren ? (
          <ul className="ae-Outline-sublist">
            {children.map((option, index) =>
              renderItem(option, index, type, indent + 1)
            )}
          </ul>
        ) : null}
      </li>
    );
  };

  const getDialogNodeLabel = (option, type) => {
    if (!type) {
      return option.label;
    } else {
      return getDialogLabel(option, true, 'dialogTitle');
    }
  };

  const getDialogLabel = (option, isNode, title = 'title') => {
    let rendererTitle = '';
    if (isNode) {
      rendererTitle = option.label;
    }
    if (option.type === 'dialog' || option.type === 'drawer') {
      if (!isNode || (isNode && !option.region)) {
        const titleStr = option[title];
        if (option.type === 'drawer') {
          rendererTitle = `${titleStr || 'Drawer'} (Drawer)`;
        } else {
          if (option.dialogType === 'confirm') {
            rendererTitle = `${titleStr || 'Confirm Dialog'} (Confirm Dialog)`;
          } else {
            rendererTitle = `${titleStr || 'Dialog'} (Dialog)`;
          }
        }
      }
    }
    return rendererTitle;
  };

  return (
    <div className="ae-Outline-panel">
      <div className="panel-header">View Structure</div>
      <Tabs
        className="ae-outline-tabs"
        onChange={handleTabChange}
        activeKey={store.outlineTabsKey || 'component-outline'}
      >
        <TabPane tab="Component Outline" key="component-outline">
          <Input
            className="editor-InputSearch"
            value={curSearchElemKey}
            onChange={handleSearchElemKeyChange}
            placeholder="Search page elements"
            suffix={
              curSearchElemKey ? (
                <Icon type="close" onClick={clearSearchElemKey} />
              ) : (
                <Icon type="search" />
              )
            }
          />
          <hr className="margin-top" />
          <div
            className={cx('ae-Outline', 'hoverShowScrollBar', {
              'ae-Outline--draging': dragging,
            })}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDrop={handleDrop}
          >
            {dragging ? (
              <div className="ae-Outline-tip">
                Press function keys during drag to switch containers, or drag into the following areas to switch
              </div>
            ) : null}

            {store.outline.length ? (
              dragging ? (
                <div className="ae-Outline-drop">
                  {store.outline.map((option, index) =>
                    renderDropItem(option, index)
                  )}
                </div>
              ) : (
                <ul className="ae-Outline-list">
                  {store.outline.map((option, index) =>
                    renderItem(option, index)
                  )}
                </ul>
              )
            ) : (
              <div>Loading, please wait...</div>
            )}
          </div>
        </TabPane>
        {!store.isSubEditor && !store.noDialog && (
          <TabPane tab="Dialog List" key="dialog-outline">
            <DialogList manager={manager} store={store} classnames={cx} />
          </TabPane>
        )}
      </Tabs>
    </div>
  );
}

export default OutlinePanel;
