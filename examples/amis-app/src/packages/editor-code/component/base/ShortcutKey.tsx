import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { CloseOutlined, KeyOutlined } from '@ant-design/icons';

export interface ShortcutKeyProps {
  title?: string;
  size?: string;
  closeOnEsc?: boolean;
  closeOnOutside?: boolean;
  ShortcutKeyList?: Array<ShortcutKeyItem>;
}

interface ShortcutKeyItem {
  title: string;
  letters: Array<string>;
  tooltip?: string;
}

const defaultShortcutKeyList: ShortcutKeyItem[] = [
  { title: 'Copy', letters: ['⌘', 'c'], tooltip: 'Copy the selected element' },
  { title: 'Paste', letters: ['⌘', 'v'], tooltip: 'Paste the copied element' },
  { title: 'Cut', letters: ['⌘', 'x'], tooltip: 'Cut the selected element' },
  { title: 'Undo', letters: ['⌘', 'z'], tooltip: 'Undo the last action' },
  { title: 'Redo', letters: ['⌘', 'Shift', 'z'], tooltip: 'Redo the last undone action' },
  { title: 'Save', letters: ['⌘', 's'], tooltip: 'Save all current actions' },
  { title: 'Preview/Edit', letters: ['⌘', 'p'], tooltip: 'Toggle preview mode' },
  { title: 'Delete', letters: ['Delete'], tooltip: 'Delete the current node' },
  { title: 'Delete', letters: ['Backspace'], tooltip: 'Delete the current node' },
  { title: 'Move Up', letters: ['⌘', '↑'], tooltip: 'Move the current node up' },
  { title: 'Move Down', letters: ['⌘', '↓'], tooltip: 'Move the current node down' }
];

const ShortcutKey: React.FC<ShortcutKeyProps> = ({
                                                   title = 'Available Shortcuts',
                                                   size = 'small',
                                                   closeOnEsc = true,
                                                   closeOnOutside = true,
                                                   ShortcutKeyList = defaultShortcutKeyList
                                                 }) => {
  const [visible, setVisible] = useState(false);

  const showShortcutKeyModal = () => setVisible(true);
  const closeShortcutKeyModal = () => setVisible(false);

  return (
    <>
      <Button
        type="primary"
        icon={<KeyOutlined />}
        onClick={showShortcutKeyModal}
        title="Click to view available shortcuts"
      >
        Shortcuts
      </Button>
      <Modal
        title={title}
        visible={visible}
        onCancel={closeShortcutKeyModal}
        footer={null}
        width={size === 'small' ? 300 : 600}
        maskClosable={closeOnOutside}
        keyboard={closeOnEsc}
      >
        <div className="shortcut-list">
          {ShortcutKeyList.length > 0 ? (
            ShortcutKeyList.map((shortcutKey, index) => (
              <div className="shortcut-item" key={index}>
                <div className="shortcut-title" title={shortcutKey.tooltip}>
                  {shortcutKey.title}
                </div>
                <div className="shortcut-letters">
                  {shortcutKey.letters.map((letter) => (
                    <span className="shortcut-letter" key={letter}>
                      {letter}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <span>No shortcuts available</span>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ShortcutKey;
