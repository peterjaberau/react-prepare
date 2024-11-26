import React from 'react';
import {Modal, Icon} from 'amis';
import cx from 'classnames';
import {autobind} from '../../util';

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

export interface ShortcutKeyStates {
  visible: boolean;
}

const ShortcutKeyList = [
  {
    title: 'Copy',
    letters: ['⌘', 'c'],
    tooltip: 'Copy the currently selected element'
  },
  {
    title: 'Paste',
    letters: ['⌘', 'v'],
    // eslint-disable-next-line
    tooltip: 'Insert the copied element into the currently selected node'
  },
  {
    title: 'Cut',
    letters: ['⌘', 'x'],
    tooltip: 'Cut currently selected element'
  },
  {
    title: 'Undo',
    letters: ['⌘', 'z'],
    tooltip: 'Revert the last undone operation'
  },
  {
    title: 'Redo',
    letters: ['⌘', 'Shift', 'z'],
    tooltip: 'Revert the last undone operation'
  },
  {
    title: 'Save',
    letters: ['⌘', 's'],
    tooltip: 'Save all current operations'
  },
  {
    title: 'Preview/Edit',
    letters: ['⌘', 'p'],
    tooltip: 'Turn on/off preview mode'
  },
  {
    title: 'Delete',
    letters: ['Delete'],
    tooltip: 'Delete current node'
  },
  {
    title: 'Delete',
    letters: ['Backspace'],
    tooltip: 'Delete current node'
  },
  {
    title: 'Move up',
    letters: ['⌘', '↑'],
    tooltip: 'Move current node up'
  },
  {
    title: 'Move down',
    letters: ['⌘', '↓'],
    tooltip: 'Move current node down'
  }
];

export default class ShortcutKey extends React.Component<
  ShortcutKeyProps,
  ShortcutKeyStates
> {
  constructor(props: any) {
    super(props);

    this.state = {
      visible: false
    };

    this.closeShortcutKeyModal = this.closeShortcutKeyModal.bind(this);
    this.showShortcutKeyModal = this.showShortcutKeyModal.bind(this);
  }

  closeShortcutKeyModal() {
    this.setState({
      visible: false
    });
  }

  showShortcutKeyModal() {
    this.setState({
      visible: true
    });
  }

  render() {
    const {title, size, closeOnEsc, closeOnOutside} = this.props;
    const curShortcutKeyList = this.props.ShortcutKeyList || ShortcutKeyList;

    return (
      <>
        <div
          className="shortcut-icon-btn"
          editor-tooltip="点击查看当前可用快捷键"
          tooltip-position="bottom"
        >
          <Icon icon="editor-shortcut" onClick={this.showShortcutKeyModal} />
        </div>
        <Modal
          size={size || 'xs'}
          show={this.state.visible}
          closeOnEsc={closeOnEsc ?? true}
          closeOnOutside={closeOnOutside ?? true}
          onHide={this.closeShortcutKeyModal}
          contentClassName="shortcut-list-modal"
        >
          <div className="shortcut-modal-header">
            <div className="shortcut-modal-title">
              {title || '当前可用快捷键'}
            </div>
            <Icon
              icon="close"
              className="shortcut-modal-icon"
              onClick={this.closeShortcutKeyModal}
            />
          </div>
          <div className="shortcut-modal-body">
            {curShortcutKeyList && curShortcutKeyList.length > 0 && (
              <div className="shortcut-list">
                {curShortcutKeyList.map(
                  (shortcutKey: ShortcutKeyItem, index: number) => {
                    return (
                      <div className="shortcut-item" key={index}>
                        {shortcutKey.tooltip && (
                          <div
                            className="shortcut-title"
                            editor-tooltip={shortcutKey.tooltip}
                          >
                            {shortcutKey.title}
                          </div>
                        )}
                        {!shortcutKey.tooltip && (
                          <div className="shortcut-title">
                            {shortcutKey.title}
                          </div>
                        )}
                        <div className="shortcut-letters">
                          {shortcutKey.letters.map((letter: string) => {
                            return (
                              <div className="shortcut-letter" key={letter}>
                                {letter}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            )}
            {!curShortcutKeyList ||
              (curShortcutKeyList.length === 0 && <span>暂无快捷键</span>)}
          </div>
        </Modal>
      </>
    );
  }
}
