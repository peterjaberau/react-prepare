import React, { useRef } from 'react';
import { NodeWrapper, NodeWrapperProps } from './NodeWrapper';
import { Schema } from 'amis';
import find from 'lodash/find';
import { RegionWrapper } from './RegionWrapper';

export interface ContainerWrapperProps extends NodeWrapperProps {
  render: (region: string, node: Schema, props: any) => React.ReactNode;
  submitText?: string;
}

const ContainerWrapper: React.FC<ContainerWrapperProps> = (props) => {
  const { render, $$editor, $$node, submitText, ...rest } = props;
  const ref = useRef<any>(null);

  const renderChild = (region: string, node: Schema, props: any) => {
    const child = render(region, node, props);

    if ($$node?.memberImmutable(region)) {
      return child;
    }

    const config = find(
      $$editor.regions,
      item => item.key === region && !item.matchRegion && !item.renderMethod
    );

    if (config) {
      const Region = config.wrapper || RegionWrapper;

      return (
        <Region
          key={props?.key}
          preferTag={config.preferTag}
          name={config.key}
          label={config.label}
          placeholder={config.placeholder}
          regionConfig={config}
          editorStore={$$editor.plugin.manager.store}
          wrapperResolve={config.wrapperResolve}
          manager={$$editor.plugin.manager}
          children={child}
          rendererName={$$editor.renderer.name}
          $$editor={$$editor}
          node={$$node}
        />
      );
    }

    return child;
  };

  const editorStore = $$editor.plugin.manager.store;
  const dynamicProps: any = {};

  if (
    $$editor.id &&
    (editorStore.isActive($$editor.id) || editorStore.dropId === $$editor.id) &&
    Array.isArray($$editor.regions)
  ) {
    $$editor.regions.forEach(({ key, optional }) => {
      if (optional || $$node?.memberImmutable(key)) {
        return;
      }

      let defaultRegion: any[] = [];
      // Special handling for form button groups to ensure default submit button is shown in edit mode
      if (key === 'actions' && (typeof submitText === 'undefined' || submitText)) {
        defaultRegion = [
          {
            type: 'submit',
            label: submitText || 'Submit',
            primary: true
          }
        ];
      }

      let region = Array.isArray(rest[key])
        ? rest[key]
        : rest[key]
          ? [rest[key]]
          : defaultRegion;

      if (!region.length) {
        region = region.concat();
        region.push({ children: () => null });
      }

      dynamicProps[key] = region;
    });
  }

  return (
    <NodeWrapper
      {...rest}
      {...dynamicProps}
      $$editor={$$editor}
      $$node={$$node}
      render={renderChild}
      ref={ref}
    />
  );
};

export default ContainerWrapper;
