import * as React from "react"
import {JSONGetById} from '../util';
import FlexLayoutMachine from './flex';

const DefaultLayout: React.FC = ({ children }: any) => {
  return (
    <div>
      {children}
    </div>
  );
};

function getLayoutInstance(schema: any, region: any) {
  if (!region) {
    return DefaultLayout;
  }
  const mode = region?.regionInfo?.dndMode;
  const regionNode = JSONGetById(schema, region?.id);
  if (typeof mode === 'function' && mode(regionNode) === 'flex') {
    return FlexLayoutMachine;
  }
  return DefaultLayout;
}
