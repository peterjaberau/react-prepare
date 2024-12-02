import React, { useEffect } from 'react';
import { JSONPipeOut } from '../util';
import { NodeWrapperProps } from './NodeWrapper';
import { useTheme } from 'antd-style';

const CommonConfigWrapper: React.FC<NodeWrapperProps> = (props) => {
  const { $$editor, $$node, $schema, store, ...rest } = props;
  const theme = useTheme();

  useEffect(() => {
    return () => {
      const dom = resolveDom();
      dom.forEach((element) => {
        element.classList.remove('ae-Editor-common-config');
      });
    };
  }, []);

  const resolveDom = () => {
    const root = document.getElementById('root');
    if (!root) return [];
    const info = props.$$editor;
    const dom = info.wrapperResolve ? info.wrapperResolve(root) : root;
    return Array.isArray(dom) ? dom : dom ? [dom] : [];
  };

  const markDom = (id: string) => {
    if (!id) return;
    const dom = resolveDom();
    const schema = props.$$commonSchema;
    if (schema) {
      dom.forEach((element) => {
        element.setAttribute('data-editor-id', id);
        element.classList.add('ae-Editor-common-config');
      });
    }
  };

  let filteredProps = JSONPipeOut(rest, false);

  if ($$editor.filterProps) {
    filteredProps = $$editor.filterProps.call($$editor.plugin, filteredProps, $$node);
  }

  if ($$editor.renderRenderer) {
    return $$editor.renderRenderer.call(
      $$editor.plugin,
      {
        ...filteredProps,
        store,
        $schema,
        $$editor,
        ...$$editor.wrapperProps,
      },
      $$editor
    );
  }

  const Component = $$editor.renderer.component!;
  return (
    <Component
      {...filteredProps}
      store={store}
      $schema={$schema}
      $$editor={$$editor}
      {...$$editor.wrapperProps}
    />
  );
};

export default CommonConfigWrapper;
