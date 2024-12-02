/**
 * @file AsyncLayer.tsx
 * @desc Asynchronous Loading Layer
 */
import React from 'react';
import { Spin } from 'antd';

export interface AsyncLayerOptions {
  fallback?: React.ReactNode;
}

export const makeAsyncLayer = (
  schemaBuilderFn: () => Promise<any>,
  options?: AsyncLayerOptions
) => {
  const { fallback } = options || {};
  const LazyComponent = React.lazy(async () => {
    const schemaFormRender = await schemaBuilderFn();

    return {
      default: (...props: any[]) => <>{schemaFormRender(...props)}</>
    };
  });

  return (props: any) => (
    <React.Suspense
      fallback={
        fallback && React.isValidElement(fallback) ? (
          fallback
        ) : (
          <Spin
            spinning
            size="small"
            tip="Loading configuration panel"
            className="flex"
          />
        )
      }
    >
      <LazyComponent {...props} />
    </React.Suspense>
  );
};
