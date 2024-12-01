import { useEffect, useCallback } from 'react';
import { EditorManager } from '../../manager';

export const useMessageHandler = (manager: EditorManager) => {
  const handleMessage = useCallback((event: MessageEvent) => {
    if (!event.data) {
      return;
    }

    if (
      event.data.type === 'amis-widget-register-event' &&
      event.data.editorPluginName
    ) {
      console.info(
        '[amis-editor] Dynamic response：',
        event.data.editorPluginName
      );
      manager.dynamicAddPlugin(event.data.editorPluginName);
    }
  }, [manager]);

  useEffect(() => {
    window.addEventListener('message', handleMessage, false);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [handleMessage]);
};
