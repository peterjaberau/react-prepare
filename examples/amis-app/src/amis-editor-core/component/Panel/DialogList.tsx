import {ClassNamesFn} from 'amis-core';
import {observer} from 'mobx-react';
import React from 'react';
import {EditorStoreType} from '../../store/editor';
import {
  JSONGetById,
  modalsToDefinitions,
  reGenerateID,
  translateSchema
} from '../../util';
import {Button, Icon, ListMenu, PopOverContainer, confirm} from 'amis';
import {EditorManager} from '../../manager';
import cloneDeep from 'lodash/cloneDeep';

export interface DialogListProps {
  classnames: ClassNamesFn;
  store: EditorStoreType;
  manager: EditorManager;
}

export default observer(function DialogList({
  classnames: cx,
  store,
  manager
}: DialogListProps) {
  const modals = store.modals.filter(item => !item.disabled);

  const handleAddDialog = React.useCallback(() => {
    const modal = {
      type: 'dialog',
      title: 'dialog',
      definitions: modalsToDefinitions(store.modals),
      body: [
        {
          type: 'tpl',
          tpl: 'Pop-up content'
        }
      ]
    };

    manager.openSubEditor({
      title: 'Edit modal',
      value: modal,
      onChange: ({definitions, ...modal}: any, diff: any) => {
        store.addModal(modal, definitions);
      }
    });
  }, []);

  const handleEditDialog = React.useCallback((event: React.UIEvent<any>) => {
    const index = parseInt(event.currentTarget.getAttribute('data-index')!, 10);
    const modal = store.modals[index];
    const modalId = modal.$$id!;
    manager.openSubEditor({
      title: 'Edit modal',
      value: {
        type: 'dialog',
        ...(modal as any),
        definitions: modalsToDefinitions(store.modals, {}, modal)
      },
      onChange: ({definitions, ...modal}: any, diff: any) => {
        store.updateModal(modalId, modal, definitions);
      }
    });
  }, []);

  const handleDelDialog = React.useCallback(
    async (event: React.UIEvent<any>) => {
      event.stopPropagation();
      event.preventDefault();

      const index = parseInt(
        event.currentTarget
          .closest('[data-index]')!
          .getAttribute('data-index')!,
        10
      );
      const dialog = store.modals[index];
      const refsCount = store.countModalActionRefs(dialog.$$id!);

      const confirmed = await confirm(
        refsCount
          ? `The current pop-up window has been associated with ${refsCount} events. After deletion, the configured event actions will be deleted together.。`
          : '',
        `Confirm deletion modal「${dialog.editorSetting?.displayName || dialog.title}」？`
      );

      if (confirmed) {
        store.removeModal(dialog.$$id!);
      }
    },
    []
  );

  const handleCopyDialog = React.useCallback((event: React.UIEvent<any>) => {
    event.stopPropagation();
    event.preventDefault();

    const index = parseInt(
      event.currentTarget.closest('[data-index]')!.getAttribute('data-index')!,
      10
    );
    let dialog = cloneDeep(store.modals[index]);
    dialog = reGenerateID(dialog);

    store.addModal({
      ...dialog,
      title: `${dialog.title} - copy`,
      editorSetting: {
        ...dialog.editorSetting,
        displayName: dialog.editorSetting?.displayName
          ? `${dialog.editorSetting?.displayName} - 复制`
          : ''
      }
    });
  }, []);

  return (
    <div className={cx('ae-DialogList-wrap', 'hoverShowScrollBar')}>
      <Button size="sm" level="enhance" block onClick={handleAddDialog}>
        新增弹窗
      </Button>
      {modals.length ? (
        <ul className="ae-DialogList">
          {modals.map((modal, index) => (
            <li
              className="ae-DialogList-item"
              data-index={index}
              key={modal.$$id || index}
              onClick={handleEditDialog}
            >
              <span>
                {`${
                  modal.editorSetting?.displayName ||
                  modal.title ||
                  '未命名弹窗'
                }`}
              </span>
              <a onClick={handleCopyDialog} className="ae-DialogList-iconBtn">
                <Icon className="icon" icon="copy" />
              </a>
              <a onClick={handleDelDialog} className="ae-DialogList-iconBtn">
                <Icon className="icon" icon="trash" />
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="ae-DialogList-placeholder">暂无弹窗</div>
      )}
    </div>
  );
});
