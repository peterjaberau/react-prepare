import React from 'react';
import Breadcrumb from '../Breadcrumb';
import { useEditor } from '../context/EditorContext';

export const EditorHeader: React.FC = () => {
  const { store, manager } = useEditor();

  return (
    <div className="ae-Header">
      <Breadcrumb store={store} manager={manager} />
      <div
        id="aeHeaderRightContainer"
        className="ae-Header-Right-Container"
      />
    </div>
  );
};
