/**
 * @file Virtual renderer, meaning there is no actual renderer, but a fake one for editing purposes.
 */
import React, { useContext, useEffect } from 'react';
import { RendererInfo } from '../plugin';
import { EditorNodeContext, EditorNodeType } from '../store/node';

export interface VRendererProps extends RendererInfo {
  path: string;
  data?: any;
  widthMutable?: boolean;
  children?: React.ReactNode;
}

const VRenderer: React.FC<VRendererProps> = ({ path, data, widthMutable, children, ...info }) => {
  const parent = useContext(EditorNodeContext) as EditorNodeType;
  const [editorNode, setEditorNode] = React.useState<EditorNodeType | null>(null);

  useEffect(() => {
    const node = parent.addChild({
      id: info.id,
      type: info.type,
      label: info.name,
      path: path,
      schemaPath: info.schemaPath,
      info: info,
      getData: () => data,
      widthMutable,
      memberIndex: info.memberIndex
    });
    setEditorNode(node);

    return () => {
      if (node && isAlive(node)) {
        parent.removeChild(node);
      }
    };
  }, [parent, path, data, widthMutable, info]);

  useEffect(() => {
    if (editorNode) {
      markDom(editorNode.id);
    }
  }, [editorNode]);

  /**
   * Add some markers
   */
  const markDom = (id: string) => {
    const root = document.querySelector(`[data-editor-id="${id}"]`) as HTMLElement;

    if (!root) {
      return;
    }

    const info = editorNode?.info!;
    let dom = info.wrapperResolve ? info.wrapperResolve(root) : root;
    (Array.isArray(dom) ? dom : dom ? [dom] : []).forEach(dom =>
      dom.setAttribute('data-editor-id', id)
    );
  };

  return (
    <EditorNodeContext.Provider value={editorNode}>
      {children}
    </EditorNodeContext.Provider>
  );
};

export default VRenderer;
