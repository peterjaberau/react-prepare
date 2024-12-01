import React, { forwardRef } from 'react';
import { MobileDevTool } from 'amis-ui';
import Preview from '../Preview';
import { useEditor } from '../context/EditorContext';

interface EditorContentProps {
  preview?: boolean;
  isMobile?: boolean;
  data?: any;
  autoFocus?: boolean;
  previewProps?: any;
  toolbarContainer: () => HTMLDivElement | null;
}

export const EditorContent = forwardRef<any, EditorContentProps>(({
                                                                    preview,
                                                                    isMobile,
                                                                    data,
                                                                    autoFocus = true,
                                                                    previewProps,
                                                                    toolbarContainer
                                                                  }, ref) => {
  const { store, manager, theme, appLocale, amisEnv, readonly } = useEditor();

  return (
    <>
      {isMobile && (
        <MobileDevTool
          container={ref?.current}
          previewBody={(ref as any)?.current?.currentDom}
        />
      )}
      <Preview
        {...previewProps}
        editable={!preview}
        isMobile={isMobile}
        store={store}
        manager={manager}
        theme={theme}
        appLocale={appLocale}
        data={data}
        amisEnv={amisEnv}
        autoFocus={autoFocus}
        toolbarContainer={toolbarContainer}
        readonly={readonly}
        ref={ref}
      />
    </>
  );
});
