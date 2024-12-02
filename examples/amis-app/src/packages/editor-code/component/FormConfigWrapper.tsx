import React, { useEffect, useRef } from 'react';
import { JSONPipeOut } from '../util';
import { NodeWrapperProps } from './NodeWrapper';
import { Button } from 'antd';

interface FormConfigWrapperProps extends NodeWrapperProps {
  $$editor: any;
  $$node: any;
  $schema: any;
  store: any;
}

const FormConfigWrapper: React.FC<FormConfigWrapperProps> = (props) => {
  const { $$editor, $$node, $schema, store, ...rest } = props;
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const info = props.$$editor;
    let dom = info.wrapperResolve ? info.wrapperResolve(root) : root;

    (Array.isArray(dom) ? dom : dom ? [dom] : []).forEach(dom => {
      dom.classList.add('ae-Editor-form-config');
    });

    return () => {
      (Array.isArray(dom) ? dom : dom ? [dom] : []).forEach(dom => {
        dom.classList.remove('ae-Editor-form-config');
      });
    };
  }, [props.$$editor]);

  const markDom = (id: string) => {
    const root = rootRef.current;
    if (!root || !id) return;

    const info = props.$$editor;
    let dom = info.wrapperResolve ? info.wrapperResolve(root) : root;
    const schema = props.$$formSchema;
    schema &&
    (Array.isArray(dom) ? dom : dom ? [dom] : []).forEach(dom => {
      dom.setAttribute('data-editor-id', id);
      dom.classList.add('ae-Editor-form-config');
    });
  };

  let processedProps = JSONPipeOut(rest, false);

  if ($$editor.filterProps) {
    processedProps = $$editor.filterProps.call($$editor.plugin, processedProps, $$node);
  }

  const renderContent = () => {
    if ($$editor.renderRenderer) {
      return $$editor.renderRenderer.call(
        $$editor.plugin,
        {
          ...processedProps,
          store,
          $schema,
          $$editor,
          ...$$editor.wrapperProps,
          ref: rootRef
        },
        $$editor
      );
    }
    const Component = $$editor.renderer.component!;
    return (
      <Component
        {...processedProps}
        store={store}
        $schema={$schema}
        $$editor={$$editor}
        {...$$editor.wrapperProps}
        ref={rootRef}
      />
    );
  };

  return (
    <div ref={rootRef}>
      {renderContent()}
      <Button type="primary">Example Button</Button>
    </div>
  );
};

export default FormConfigWrapper;
