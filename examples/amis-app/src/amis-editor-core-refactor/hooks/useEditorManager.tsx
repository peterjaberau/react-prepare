import { useEffect } from 'react';
import { EditorManager } from '../manager';


export const useEditorManager = (
  config: any,
  store: any,
  hostManager?: any
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
}
