import React, { useEffect, useRef } from 'react';
import { merge, omit } from 'lodash';
import { RendererProps, isObject } from 'amis-core';
import { RendererInfo } from '../plugin';
import { EditorNodeType } from '../store/node';
import { isEmpty } from '../util';
import { Button } from 'antd'; // Example of using Ant Design

export interface NodeWrapperProps extends RendererProps {
  $$editor: RendererInfo; // Current node information (info)
  $$node?: EditorNodeType; // Virtual DOM node information
}

const NodeWrapper: React.FC<NodeWrapperProps> = (props) => {
  const { $$editor, $$node, ...rest } = props;
  const ref = useRef<any>(null);

  // Properties to omit when merging mock configurations
  const omitMockProps = ['id', '$$id', 'enable', 'maxDisplayRows'];

  useEffect(() => {
    markDom($$editor.id);

    if ($$node) {
      requestAnimationFrame(() => {
        if (isAlive($$node)) {
          $$node.calculateHighlightBox();
        }
      });
    }
  }, [$$editor.id, $$node]);

  const markDom = (id: string) => {
    const root = ref.current;

    if (!root || !id) {
      return;
    }

    const info = props.$$editor;
    const visible = props.$$visible !== false && props.$$hidden !== true;
    let dom = info.wrapperResolve ? info.wrapperResolve(root) : root;
    (Array.isArray(dom) ? dom : dom ? [dom] : []).forEach(dom => {
      dom.setAttribute('data-editor-id', id);
      dom.setAttribute('name', props.id);
      dom.setAttribute('data-visible', visible ? '' : 'false');
      dom.setAttribute('data-hide-text', visible ? '' : '<Hidden State>');

      if (info.regions) {
        dom.setAttribute('data-container', '');
      } else {
        dom.removeAttribute('data-container');
      }
    });
    info.plugin?.markDom?.(dom, props);
  };

  // Store might have circular references, cannot call JSONPipeOut
  let { store, ...restProps } = rest;
  const renderer = $$editor.renderer;

  if ($$editor.filterProps) {
    restProps = $$editor.filterProps.call($$editor.plugin, restProps, $$node);
  }

  const mockProps = omit(restProps?.editorSetting?.mock, omitMockProps);

  // Automatically merge mock data
  if (isObject(mockProps) && !isEmpty(mockProps)) {
    restProps = merge(restProps, mockProps);
  }

  if ($$editor.renderRenderer) {
    return $$editor.renderRenderer.call(
      $$editor.plugin,
      {
        ...restProps,
        store,
        ...$$node?.state,
        $$editor,
        ...$$editor.wrapperProps,
        ref
      },
      $$editor
    );
  }

  const Component = renderer.component!;

  const supportRef =
    Component.prototype?.isReactComponent ||
    (Component as any).$$typeof === Symbol.for('react.forward_ref');

  return (
    <Component
      {...restProps}
      store={store}
      {...$$node?.state}
      $$editor={$$editor}
      {...$$editor.wrapperProps}
      ref={supportRef ? ref : undefined}
    />
  );
};

export default NodeWrapper;
