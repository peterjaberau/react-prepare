import { useEffect } from 'react';
import { EditorManager } from '../../manager';
import type { EditorStoreType } from '../../store/editor';

export const useEditorManager = (
  config: any,
  store: EditorStoreType,
  hostManager?: EditorManager
) => {
  const manager = new EditorManager(config, store, hostManager);

  useEffect(() => {
    const disposePreviewReaction = manager.on('preview2editor', () =>
      manager.rebuild()
    );

    return () => {
      disposePreviewReaction();
      manager.dispose();
    };
  }, []);

  return manager;
};
