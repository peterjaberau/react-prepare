import React, { useEffect, useState } from 'react';
import { ConfigProvider } from 'antd';
import classNames from 'classnames';
import Preview from './Preview';
import SubEditor from './SubEditor';
import ScaffoldModal from './ScaffoldModal';
import { BaseEventContext, BasicPanelItem, PluginEvent } from '../plugin';

interface MiniEditorProps {
  preview: boolean;
  className?: string;
  theme?: any;
  data?: any;
  isMobile?: boolean;
  autoFocus?: boolean;
  previewProps?: any;
  appLocale?: string;
}

const MiniEditor: React.FC<MiniEditorProps> = ({
                                                 preview,
                                                 className,
                                                 theme,
                                                 data,
                                                 isMobile,
                                                 autoFocus,
                                                 previewProps,
                                                 appLocale
                                               }) => {
  const [panels, setPanels] = useState<Array<BasicPanelItem>>([]);

  useEffect(() => {
    const handleBuildPanels = (event: PluginEvent<BaseEventContext>) => {
      // Since MiniEditor does not display panels, clear all collected panels.
      if (Array.isArray(event.context.data)) {
        setPanels([]);
      }
    };

    // Assuming manager is a global or context-based event manager
    manager.on('build-panels', handleBuildPanels);

    return () => {
      manager.off('build-panels', handleBuildPanels);
    };
  }, []);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    // Handle context menu logic here
  };

  return (
    <ConfigProvider theme={theme}>
      <div
        className={classNames('ae-Editor', { preview }, className)}
      >
        <div className="ae-Editor-inner" onContextMenu={handleContextMenu}>
          <div className="ae-Main">
            <Preview
              {...previewProps}
              isMobile={isMobile}
              editable={!preview}
              theme={theme}
              data={data}
              autoFocus={autoFocus}
              appLocale={appLocale}
            />
          </div>
        </div>

        <SubEditor theme={theme} />
        <ScaffoldModal theme={theme} />
      </div>
    </ConfigProvider>
  );
};

export default MiniEditor;
