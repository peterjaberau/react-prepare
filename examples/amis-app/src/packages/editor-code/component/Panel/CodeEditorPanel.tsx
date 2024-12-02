import React, { useCallback } from 'react';
import { PanelProps } from '../../plugin';
import AMisCodeEditor from './AMisCodeEditor';
import { Card } from 'antd';

const CodeEditorPanel: React.FC<PanelProps> = ({ onChange, manager, store }) => {
  const handleCodePaste = useCallback((e: any) => {
    setTimeout(() => {
      manager.patchSchema(true);

      // Check if the entire component is pasted, and regenerate duplicate IDs for specified component types
      if (
        e?.languageId === 'json' &&
        e.range?.startColumn === 1 &&
        e.range?.startLineNumber === 1 &&
        e.range?.endColumn === 2 &&
        e.range?.endLineNumber > 1
      ) {
        manager.reGenerateNodeDuplicateID(['Layout Container', 'Display']);
      }
    }, 500);
  }, [manager]);

  return (
    <Card title="Source Code" className="ae-CodePanel">
      <AMisCodeEditor
        value={store.valueWithoutHiddenProps}
        onChange={onChange}
        $schema={store.jsonSchemaUri}
        $schemaUrl={manager.config.$schemaUrl}
        onPaste={handleCodePaste}
      />
    </Card>
  );
};

export default CodeEditorPanel;
