import { useCallback } from 'react';
import { closeContextMenus } from 'amis';
import { EditorManager } from '../../manager';
import { EditorStoreType } from '../../store/editor';

export const useContextMenu = (manager: EditorManager, store: EditorStoreType) => {
  return useCallback(async (e: React.MouseEvent<HTMLElement>) => {
    e.persist();
    await closeContextMenus();
    let targetId: string = '';
    let region = '';

    if (store.activeId) {
      targetId = (e.target as HTMLElement)
        .closest(`[data-editor-id="${store.activeId}"]`)
        ?.getAttribute('data-editor-id')!;
    } else if (store.selections.length) {
      targetId = (e.target as HTMLElement)
        .closest(
          store.selections
            .map(item => `[data-editor-id="${item}"]`)
            .join(',')
        )
        ?.getAttribute('data-editor-id')!;
    }

    if (!targetId) {
      targetId = (e.target as HTMLElement)
        .closest('[data-editor-id]')
        ?.getAttribute('data-editor-id')!;
    }

    if (!targetId) {
      const node = (e.target as HTMLElement).closest(
        '[data-node-id]'
      ) as HTMLElement;
      targetId = node?.getAttribute('data-node-id')!;

      if (!targetId) {
        return;
      }

      region = node.getAttribute('data-node-region')!;
    }

    e.preventDefault();
    e.stopPropagation();

    let offsetX = 0;
    let offsetY = 0;

    if ((e.target as HTMLElement).ownerDocument !== document) {
      const rect = manager.store.getIframe()!.getBoundingClientRect();
      offsetX = rect.left;
      offsetY = rect.top;
    }

    manager.openContextMenu(targetId, region, {
      x: window.scrollX + e.clientX + offsetX,
      y: window.scrollY + e.clientY + offsetY
    });
  }, [manager, store]);
};
