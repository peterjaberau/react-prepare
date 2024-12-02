import React, { useState, useCallback } from 'react';
import { Button, List, Modal, message } from 'antd';
import { CopyOutlined, DeleteOutlined } from '@ant-design/icons';
import cloneDeep from 'lodash/cloneDeep';
import { EditorStoreType } from '../../store/editor';
import { EditorManager } from '../../manager';
import { modalsToDefinitions, reGenerateID } from '../../util';

export interface DialogListProps {
  store: EditorStoreType;
  manager: EditorManager;
}

const DialogList: React.FC<DialogListProps> = ({ store, manager }) => {
  const [modals, setModals] = useState(() => store.modals.filter(item => !item.disabled));

  const handleAddDialog = useCallback(() => {
    const modal = {
      type: 'dialog',
      title: 'Untitled Dialog',
      definitions: modalsToDefinitions(store.modals),
      body: [
        {
          type: 'tpl',
          tpl: 'Dialog Content'
        }
      ]
    };

    manager.openSubEditor({
      title: 'Edit Dialog',
      value: modal,
      onChange: ({ definitions, ...modal }: any) => {
        store.addModal(modal, definitions);
        setModals(store.modals.filter(item => !item.disabled));
      }
    });
  }, [store, manager]);

  const handleEditDialog = useCallback((index: number) => {
    const modal = store.modals[index];
    const modalId = modal.$$id!;
    manager.openSubEditor({
      title: 'Edit Dialog',
      value: {
        type: 'dialog',
        ...modal,
        definitions: modalsToDefinitions(store.modals, {}, modal)
      },
      onChange: ({ definitions, ...modal }: any) => {
        store.updateModal(modalId, modal, definitions);
        setModals(store.modals.filter(item => !item.disabled));
      }
    });
  }, [store, manager]);

  const handleDelDialog = useCallback(async (index: number) => {
    const dialog = store.modals[index];
    const refsCount = store.countModalActionRefs(dialog.$$id!);

    Modal.confirm({
      title: `Confirm Delete Dialog "${dialog.editorSetting?.displayName || dialog.title}"?`,
      content: refsCount ? `This dialog is associated with ${refsCount} events. Deleting it will also remove these event actions.` : '',
      onOk: () => {
        store.removeModal(dialog.$$id!);
        setModals(store.modals.filter(item => !item.disabled));
        message.success('Dialog deleted successfully');
      }
    });
  }, [store]);

  const handleCopyDialog = useCallback((index: number) => {
    let dialog = cloneDeep(store.modals[index]);
    dialog = reGenerateID(dialog);

    store.addModal({
      ...dialog,
      title: `${dialog.title} - Copy`,
      editorSetting: {
        ...dialog.editorSetting,
        displayName: dialog.editorSetting?.displayName
          ? `${dialog.editorSetting?.displayName} - Copy`
          : ''
      }
    });
    setModals(store.modals.filter(item => !item.disabled));
    message.success('Dialog copied successfully');
  }, [store]);

  return (
    <div className="dialog-list-wrap">
      <Button type="primary" block onClick={handleAddDialog}>
        Add Dialog
      </Button>
      {modals.length ? (
        <List
          className="dialog-list"
          dataSource={modals}
          renderItem={(modal, index) => (
            <List.Item
              key={modal.$$id || index}
              actions={[
                <Button
                  icon={<CopyOutlined />}
                  onClick={() => handleCopyDialog(index)}
                />,
                <Button
                  icon={<DeleteOutlined />}
                  onClick={() => handleDelDialog(index)}
                />
              ]}
              onClick={() => handleEditDialog(index)}
            >
              {modal.editorSetting?.displayName || modal.title || 'Untitled Dialog'}
            </List.Item>
          )}
        />
      ) : (
        <div className="dialog-list-placeholder">No dialogs available</div>
      )}
    </div>
  );
};

export default DialogList;
