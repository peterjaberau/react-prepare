import { useCallback, useEffect } from 'react';
import { toast } from 'amis';
import { EditorManager } from '../../manager';
import { EditorStoreType } from '../../store/editor';

interface UseKeyboardShortcutsProps {
  manager: EditorManager;
  store: EditorStoreType;
  isSubEditor?: boolean;
  readonly?: boolean;
  onUndo?: () => void;
  onRedo?: () => void;
  onSave?: () => void;
  onPreview?: (preview: boolean) => void;
  preview?: boolean;
}

export const useKeyboardShortcuts = ({
                                       manager,
                                       store,
                                       isSubEditor,
                                       readonly,
                                       onUndo,
                                       onRedo,
                                       onSave,
                                       onPreview,
                                       preview
                                     }: UseKeyboardShortcutsProps) => {
  const [curCopySchemaData, setCurCopySchemaData] = useState<any>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (isSubEditor || readonly) {
      return;
    }

    if ((e.target as HTMLElement).tagName !== 'BODY') {
      return;
    }

    const isMetaOrCtrl = e.metaKey || e.ctrlKey;

    if (isMetaOrCtrl && e.shiftKey && (e.key === 'z' || e.key === 'Z')) {
      e.preventDefault();
      onRedo?.() || store.redo();
    } else if (isMetaOrCtrl && (e.key === 'z' || e.key === 'Z')) {
      e.preventDefault();
      onUndo?.() || store.undo();
    } else if (isMetaOrCtrl && (e.key === 's' || e.key === 'S')) {
      e.preventDefault();
      onSave?.();
    } else if (isMetaOrCtrl && (e.key === 'c' || e.key === 'C')) {
      if (store.activeId) {
        setCurCopySchemaData(store.getSchema(store.activeId));
      }
    } else if (isMetaOrCtrl && (e.key === 'v' || e.key === 'V')) {
      e.preventDefault();
      handlePaste();
    } else if (isMetaOrCtrl && e.key === 'x') {
      e.preventDefault();
      handleCut();
    } else if (isMetaOrCtrl && e.key === 'p') {
      e.preventDefault();
      onPreview?.(!preview);
    } else if (isMetaOrCtrl && e.key === 'ArrowUp') {
      e.preventDefault();
      handleMoveUp();
    } else if (isMetaOrCtrl && e.key === 'ArrowDown') {
      e.preventDefault();
      handleMoveDown();
    } else if (e.key === 'Backspace' || e.key === 'Delete') {
      e.preventDefault();
      handleDelete();
    }
  }, [store, manager, curCopySchemaData]);

  const handlePaste = useCallback(() => {
    if (store.activeId && curCopySchemaData) {
      const curSimpleSchema = store.getSimpleSchema(curCopySchemaData);
      if (store.activeId === curCopySchemaData.$$id) {
        manager.appendSiblingSchema(reGenerateID(curSimpleSchema), false);
      } else {
        manager.addElem(reGenerateID(curSimpleSchema), false);
      }
    }
  }, [store, manager, curCopySchemaData]);

  const handleCut = useCallback(() => {
    if (store.activeId) {
      const node = store.getNodeById(store.activeId);
      if (node && store.activeRegion) {
        toast.warning('区域节点不允许剪切。');
      } else if (store.isRootSchema(store.activeId)) {
        toast.warning('根节点不允许剪切。');
      } else if (node && node.moveable) {
        setCurCopySchemaData(store.getSchema(store.activeId));
        manager.del(store.activeId);
      } else {
        toast.warning('当前元素不允许剪切。');
      }
    }
  }, [store, manager]);

  const handleMoveUp = useCallback(() => {
    if (store.activeId) {
      const node = store.getNodeById(store.activeId);
      if (node && node.canMoveUp) {
        manager.moveUp();
      } else {
        toast.warning('当前元素不能向上移动');
      }
    }
  }, [store, manager]);

  const handleMoveDown = useCallback(() => {
    if (store.activeId) {
      const node = store.getNodeById(store.activeId);
      if (node && node.canMoveDown) {
        manager.moveDown();
      } else {
        toast.warning('当前元素不能向下移动');
      }
    }
  }, [store, manager]);

  const handleDelete = useCallback(() => {
    if (store.activeId) {
      const node = store.getNodeById(store.activeId);
      if (
        node &&
        store.activeRegion &&
        node.info?.regions &&
        node.info.regions.length > 1
      ) {
        toast.warning('区域节点不可以直接删除。');
      } else if (store.isRootSchema(store.activeId)) {
        toast.warning('根节点不允许删除。');
      } else if (node && (node.removable || node.removable === undefined)) {
        manager.del(store.activeId);
      } else {
        toast.warning('当前元素不允许删除。');
      }
    }
  }, [store, manager]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return {
    curCopySchemaData,
    setCurCopySchemaData
  };
};
