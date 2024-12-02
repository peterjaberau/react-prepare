import React, { useContext, useEffect, useState } from 'react';
import { EditorManager } from '../manager';
import { RegionConfig, RendererInfo } from '../plugin';
import { needFillPlaceholder } from '../util';
import { EditorStoreType } from '../store/editor';
import { EditorNodeContext, EditorNodeType } from '../store/node';
import { Typography } from 'antd';

const { Text } = Typography;

export interface RegionWrapperProps {
  name: string;
  label: string;
  placeholder?: string | JSX.Element;
  preferTag?: string;
  wrapperResolve?: (dom: HTMLElement) => HTMLElement;
  editorStore: EditorStoreType;
  manager: EditorManager;
  rendererName?: string;
  regionConfig: RegionConfig;
  node?: EditorNodeType;
  $$editor?: RendererInfo;
  children?: React.ReactNode;
}

const RegionWrapper: React.FC<RegionWrapperProps> = (props) => {
  const parentNode = useContext(EditorNodeContext) as EditorNodeType;
  const [editorNode, setEditorNode] = useState<EditorNodeType | null>(null);

  useEffect(() => {
    let currentParentNode = parentNode;

    if (!currentParentNode && props.$$editor && props.$$editor.id) {
      const curContext = props.manager.store.getNodeById(props.$$editor.id);
      if (curContext) {
        currentParentNode = curContext;
      }
    }

    if (currentParentNode) {
      const newEditorNode = currentParentNode.addChild({
        id: currentParentNode.id,
        type: currentParentNode.type,
        label: props.label,
        path: `${currentParentNode.path}/${props.name}`,
        region: props.name,
        regionInfo: props.regionConfig,
        preferTag: props.preferTag
      });
      setEditorNode(newEditorNode);

      return () => {
        if (newEditorNode && currentParentNode) {
          currentParentNode.removeChild(newEditorNode);
        }
      };
    }
  }, [parentNode, props]);

  useEffect(() => {
    if (editorNode) {
      // Mark DOM logic can be replaced with state-based logic if needed
    }
  }, [editorNode, props.name, props.rendererName]);

  const isLayoutItem =
    props.rendererName === 'wrapper' || props.rendererName === 'container';
  const isNeedFillPlaceholder = needFillPlaceholder(props);

  return (
    <EditorNodeContext.Provider value={editorNode}>
      {props.children}
      <Text
        className={`ae-Region-placeholder ${
          isLayoutItem ? 'layout-content' : ''
        } ${isNeedFillPlaceholder ? 'fill-placeholder' : ''}`}
      >
        {props.placeholder || props.label}
      </Text>
    </EditorNodeContext.Provider>
  );
};

export default RegionWrapper;
