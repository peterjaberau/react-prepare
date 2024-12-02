import React from "react"
import { Space, Collapse, Typography, Button } from "antd"
import { RightOutlined } from "@ant-design/icons"
import { DndContext, useSensor, useSensors, PointerSensor, KeyboardSensor } from "@dnd-kit/core"
import { SortableContext, sortableKeyboardCoordinates, useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

const { Panel } = Collapse
const { Text } = Typography

type PanelProps = {
  groupedRenderers: {
    [propName: string]: Array<any>
  }
  className?: string
  isHasPluginIcon: boolean
}

const DraggableItem = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  )
}

const RenderersPanel: React.FC<PanelProps> = ({ groupedRenderers, className, isHasPluginIcon }) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const grouped = groupedRenderers || {}
  const keys = Object.keys(grouped)

  return (
    <DndContext sensors={sensors}>
      <Space direction="vertical">
        <Space direction="vertical">
          {keys.length ? (
            keys.map((tag, index) => {
              const items = grouped[tag]
              if (!items || !items.length) {
                return null
              }
              return (
                <React.Fragment key={tag}>
                  <Collapse key={`${tag}-head`} size={'small'} onChange={(event: any) => console.log(event)}>
                    <Panel header={tag} key={tag}>
                      <SortableContext items={items.map((item) => `${index}_${item.id}`)}>
                        <Space direction="vertical">
                          {items.map((item: any) => {
                            const key = `${index}_${item.id}`
                            return (
                              <DraggableItem key={key} id={key}>
                                <Space
                                  key={key}
                                  draggable
                                  data-id={key}
                                  data-dnd-type="subrenderer"
                                  data-dnd-id={item.id}
                                  data-dnd-data={JSON.stringify(item.scaffold || { type: item.type })}
                                >
                                  <Button data-dnd-id={item.id} icon={isHasPluginIcon && <RightOutlined />} onClick={() => console.log(item)}>
                                    {item.name}
                                  </Button>
                                </Space>
                              </DraggableItem>
                            )
                          })}
                        </Space>
                      </SortableContext>
                    </Panel>
                  </Collapse>
                </React.Fragment>
              )
            })
          ) : (
            <Text>No available components are found, you can change the keyword to continue searching.</Text>
          )}
        </Space>
      </Space>
    </DndContext>
  )
}

export default RenderersPanel

/*

import React, { useState } from 'react';
import { Html, render, TestIdBuilder, TooltipWrapper } from 'amis';
import cx from 'classnames';
import { Icon } from '../../icons/index';
import SearchRendererPanel from '../base/SearchRendererPanel';
import SearchCustomRendererPanel from '../base/SearchCustomRendererPanel';
import { noop, isHasPluginIcon } from '../../util';
import { EditorStoreType } from '../../store/editor';
import { EditorManager } from '../../manager';
import { SubRendererInfo } from '../../plugin';

type PanelProps = {
  store: EditorStoreType;
  manager: EditorManager;
  groupedRenderers: {
    [propName: string]: Array<SubRendererInfo>;
  };
  searchRendererType: string;
  className?: string;
  testIdBuilder?: TestIdBuilder;
};

const RenderersPanel: React.FC<PanelProps> = ({
  store,
  manager,
  groupedRenderers,
  searchRendererType,
  className,
  testIdBuilder
}) => {
  const [toggleCollapseFolderStatus, setToggleCollapseFolderStatus] = useState(false);
  const curCollapseFolded: { [propName: string]: boolean } = {};

  const handleRegionFilterClick = (e: React.MouseEvent) => {
    let region = e.currentTarget.getAttribute('data-value')!;
    region = region === store.subRendererRegion ? '' : region;
    manager.switchToRegion(region);
  };

  const handleDragStart = (e: React.DragEvent, label: string) => {
    const current = e.currentTarget;
    const id = current.getAttribute('data-id')!;
    e.dataTransfer.setData(`dnd-dom/[data-id="${id}"]`, '');
  };

  const handleClick = (e: React.MouseEvent) => {
    const id = e.currentTarget.getAttribute('data-dnd-id')!;
    manager.addElem(id);
  };

  const changeCollapseFoldStatus = (tagKey: string, event: any) => {
    curCollapseFolded[tagKey] = !curCollapseFolded[tagKey];
    setToggleCollapseFolderStatus(!toggleCollapseFolderStatus);
    event.preventDefault();
    event.stopPropagation();
  };

  const renderThumb = (schema: any) => {
    return schema ? (
      render(
        schema,
        {
          onAction: noop
        },
        manager.env
      )
    ) : (
      <p>No preview available</p>
    );
  };

  const grouped = groupedRenderers || {};
  const keys = Object.keys(grouped);

  return (
    <div className={cx('ae-RendererList', className)}>
      {searchRendererType === 'renderer' && <SearchRendererPanel store={store} />}
      {searchRendererType === 'custom-renderer' && <SearchCustomRendererPanel store={store} />}
      <hr className="margin-top" />

      <div className="ae-RendererList-groupWrap hoverShowScrollBar">
        {keys.length ? (
          keys.map((tag, index) => {
            const items = grouped[tag];

            if (!items || !items.length) {
              return null;
            }

            return (
              <React.Fragment key={tag}>
                <div
                  key={`${tag}-head`}
                  className={'ae-RendererList-head collapse-header'}
                  onClick={(event: any) => changeCollapseFoldStatus(tag, event)}
                >
                  {tag}
                  <div
                    className={cx('expander-icon', {
                      'is-folded': !!curCollapseFolded[tag]
                    })}
                    title={!!curCollapseFolded[tag] ? 'Click to expand' : 'Click to collapse'}
                  >
                    <Icon icon="right-arrow-bold" />
                  </div>
                </div>
                <div
                  key={`${tag}-content`}
                  className={cx('ae-RendererList-group collapse-content', {
                    'is-folded': !!curCollapseFolded[tag]
                  })}
                >
                  {items.map((item: any) => {
                    const key = `${index}_${item.id}`;
                    const usePluginIcon = isHasPluginIcon(item);
                    const testid = `editor-renderer-${item.plugin.rendererName}`;

                    return (
                      <div
                        key={key}
                        className="ae-RendererList-item"
                        draggable
                        data-id={key}
                        data-dnd-type="subrenderer"
                        data-dnd-id={item.id}
                        data-dnd-data={JSON.stringify(item.scaffold || { type: item.type })}
                        onDragStart={(e: React.DragEvent) => handleDragStart(e, item.name)}
                        {...testIdBuilder?.getChild(testid).getTestId()}
                      >
                        <div
                          className="icon-box"
                          data-dnd-id={item.id}
                          title={`Click to add "${item.name}"`}
                          onClick={handleClick}
                        >
                          {usePluginIcon && <Icon icon={item.pluginIcon} />}
                          {!usePluginIcon && (
                            <i className={cx('fa-fw', item.icon || 'fa fa-circle-thin')} />
                          )}
                        </div>
                        <div
                          className="ae-RendererInfo"
                          data-dnd-id={item.id}
                          onClick={handleClick}
                        >
                          {item.name}
                        </div>
                        <TooltipWrapper
                          tooltipClassName="ae-RendererThumb"
                          trigger="hover"
                          rootClose={true}
                          placement="right"
                          tooltip={{
                            offset: [10, 0],
                            children: () => (
                              <div>
                                <div className="ae-Renderer-title">{item.name}</div>
                                {item.description || item.docLink ? (
                                  <div className="ae-Renderer-info">
                                    <Html html={item.description ? item.description : ''} />
                                    {item.docLink && (
                                      <a target="_blank" href={store.amisDocHost + item.docLink}>
                                        Details
                                      </a>
                                    )}
                                  </div>
                                ) : null}
                                <div className="ae-Renderer-preview">
                                  {renderThumb(item.previewSchema)}
                                </div>
                              </div>
                            )
                          }}
                        >
                          <div className="ae-RendererIcon">
                            <Icon icon="editor-help" className="icon" />
                          </div>
                        </TooltipWrapper>
                      </div>
                    );
                  })}
                </div>
              </React.Fragment>
            );
          })
        ) : (
          <span>No components found, try a different keyword.</span>
        )}
      </div>
    </div>
  );
};

export default RenderersPanel;



 */
