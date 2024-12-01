import React, { useRef, useEffect } from 'react';
import cx from 'classnames';
import { reaction } from 'mobx';
import { destroy } from 'mobx-state-tree';
import { SubEditor } from './SubEditor';
import { ScaffoldModal } from './ScaffoldModal';
import { PopOverForm } from './PopOverForm';
import { ContextMenuPanel } from './Panel/ContextMenuPanel';
import { LeftPanels } from './Panel/LeftPanels';
import { RightPanels } from './Panel/RightPanels';
import { EditorProvider } from './context/EditorContext';
import { EditorHeader } from './components/EditorHeader';
import { EditorContent } from './components/EditorContent';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { useMessageHandler } from './hooks/useMessageHandler';
import { useContextMenu } from './hooks/useContextMenu';
import { useEditorStore } from './hooks/useEditorStore';
import { useEditorManager } from './hooks/useEditorManager';
import type { EditorProps } from './types';

const Editor: React.FC<EditorProps> = ({
                                         value,
                                         onChange,
                                         preview,
                                         isMobile,
                                         isSubEditor = false,
                                         autoFocus = true,
                                         className,
                                         showCustomRenderersPanel,
                                         superEditorData,
                                         hostManager,
                                         theme,
                                         appLocale,
                                         data,
                                         previewProps,
                                         amisEnv,
                                         readonly,
                                         onUndo,
                                         onRedo,
                                         onSave,
                                         onPreview,
                                         ...rest
                                       }) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const mainPreviewRef = useRef<HTMLDivElement>(null);
  const mainPreviewBodyRef = useRef<any>(null);

  // Initialize store and manager
  const [store, isInternalChange] = useEditorStore({
    value,
    onChange,
    isMobile,
    theme,
    isSubEditor,
    superEditorData,
    appLocale,
    amisEnv,
    ctx: rest.ctx,
    showCustomRenderersPanel,
    ...rest
  });

  const manager = useEditorManager(rest, store, hostManager);

  // Set up keyboard shortcuts
  useKeyboardShortcuts({
    manager,
    store,
    isSubEditor,
    readonly,
    onUndo,
    onRedo,
    onSave,
    onPreview,
    preview
  });

  // Set up message handler
  useMessageHandler(manager);

  // Set up context menu
  const handleContextMenu = useContextMenu(manager, store);

  // Set up schema reaction
  useEffect(() => {
    const disposeReaction = reaction(
      () => store.schemaRaw,
      (raw: any) => {
        if (!isInternalChange) {
          onChange(raw);
        }
      }
    );

    return () => {
      disposeReaction();
      setTimeout(() => destroy(store), 4);
    };
  }, []);

  // Handle component mount
  useEffect(() => {
    if (isSubEditor) {
      setTimeout(() => {
        store.calculateHighlightBox(store.highlightNodes.map(node => node.id));
      }, 500);
    } else {
      manager.trigger('init', { data: manager });
    }
  }, []);

  const getToolbarContainer = () => mainRef.current;

  return (
    <EditorProvider
      store={store}
      manager={manager}
      theme={theme}
      appLocale={appLocale}
      amisEnv={amisEnv}
      readonly={readonly}
    >
      <div
        ref={mainRef}
        className={cx('ae-Editor', { preview }, className)}
      >
        <div
          className={cx('ae-Editor-inner', isMobile && 'ae-Editor-inner--mobile')}
          onContextMenu={handleContextMenu}
        >
          {!preview && !readonly && (
            <LeftPanels store={store} manager={manager} theme={theme} />
          )}

          <div className="ae-Main" ref={mainPreviewRef}>
            {!preview && <EditorHeader />}
            <EditorContent
              ref={mainPreviewBodyRef}
              preview={preview}
              isMobile={isMobile}
              data={data}
              autoFocus={autoFocus}
              previewProps={previewProps}
              toolbarContainer={getToolbarContainer}
            />
          </div>

          {!preview && (
            <RightPanels
              store={store}
              manager={manager}
              theme={theme}
              appLocale={appLocale}
              amisEnv={amisEnv}
              readonly={readonly}
            />
          )}

          {!preview && <ContextMenuPanel store={store} />}
        </div>

        <SubEditor
          store={store}
          manager={manager}
          theme={theme}
          amisEnv={amisEnv}
          readonly={readonly}
        />
        <ScaffoldModal store={store} manager={manager} theme={theme} />
        <PopOverForm store={store} manager={manager} theme={theme} />
      </div>
    </EditorProvider>
  );
};

export default Editor;
