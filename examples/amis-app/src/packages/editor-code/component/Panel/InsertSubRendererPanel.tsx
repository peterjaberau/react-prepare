import React, { useState, useEffect } from 'react';
import { Button, Input, List, Typography } from 'antd';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { RendererThumb } from '../RendererThumb';

const { Title, Text } = Typography;

export const InsertSubRendererPanel: React.FC<PanelProps> = ({ store, manager }) => {
  const [insertTag, setInsertTag] = useState(store.insertTag || 'All');
  const [insertSelected, setInsertSelected] = useState(store.insertSelected);
  const [keywords, setKeywords] = useState(store.insertRenderersKeywords);

  useEffect(() => {
    setInsertTag(store.insertTag || 'All');
    setInsertSelected(store.insertSelected);
  }, [store.insertTag, store.insertSelected]);

  const handleLeftClick = (tag: string) => {
    setInsertTag(tag);
    store.setInsertTag(tag);
  };

  const handleClick = (id: string) => {
    setInsertSelected(id);
    store.setInsertSelected(id);
  };

  const handleDoubleClick = (id: string) => {
    setInsertSelected(id);
    store.setInsertSelected(id);
    store.insertMode === 'replace' ? manager.replace() : manager.insert();
  };

  const handleInsert = () => {
    manager.insert();
  };

  const handleReplace = () => {
    manager.replace();
  };

  const handleCancel = () => {
    store.closeInsertPanel();
  };

  const handleKeywordsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeywords(value);
    store.changeInsertRenderersKeywords(value);
  };

  const resetKeywords = () => {
    setKeywords('');
    store.resetInsertRenderersKeywords();
  };

  const info = store.getNodeById(store.insertId)?.info!;
  const regionLabel = info.regions.find(region => region.key === store.insertRegion)?.label;
  const grouped = store.groupedInsertRenderers;
  const keys = Object.keys(grouped);
  const list = grouped[insertTag] || grouped['All'];

  return (
    <div className="ae-InsertPanel">
      <Title level={4}>
        {store.insertMode === 'replace' ? 'Change Component Type' : `Insert Selected Component to ${info.name} > ${regionLabel}`}
      </Title>

      <div className="m-b-xs">
        <Input
          className="editor-InputSearch"
          value={keywords}
          onChange={handleKeywordsChange}
          placeholder="Enter keywords to filter components"
          suffix={keywords ? <CloseOutlined onClick={resetKeywords} /> : <SearchOutlined />}
        />
      </div>

      <div className="ae-RenderersPicker-list">
        <List
          dataSource={keys}
          renderItem={key => (
            <List.Item className={insertTag === key ? 'is-active' : ''}>
              <a onClick={() => handleLeftClick(key)}>{key}</a>
            </List.Item>
          )}
        />
        <div className="ae-RenderersPicker-content">
          {Array.isArray(list) && list.length ? (
            <List
              dataSource={list}
              renderItem={item => (
                <List.Item
                  className={insertSelected === item.id ? 'is-active' : ''}
                  onClick={() => handleClick(item.id)}
                  onDoubleClick={() => handleDoubleClick(item.id)}
                >
                  <RendererThumb
                    theme={manager.env.theme}
                    env={manager.env}
                    schema={item.previewSchema || { type: 'tpl', tpl: 'Cannot preview' }}
                  />
                  <div className="ae-RenderersPicker-info">
                    <Title level={5}>{item.name}</Title>
                    <Text>{item.description}</Text>
                    {item.docLink && (
                      <a target="_blank" href={store.amisDocHost + item.docLink}>
                        <span>Details</span>
                      </a>
                    )}
                  </div>
                </List.Item>
              )}
            />
          ) : (
            <div>No available components, maybe try switching containers.</div>
          )}
        </div>
      </div>
      <div className="ae-InsertPanel-footer">
        <Button
          type="primary"
          onClick={store.insertMode === 'replace' ? handleReplace : handleInsert}
          disabled={!insertSelected}
        >
          {store.insertMode === 'replace' ? 'Replace' : 'Insert'}
        </Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </div>
    </div>
  );
};
