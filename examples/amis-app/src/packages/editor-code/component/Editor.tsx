import React, { useState, useEffect, useCallback } from 'react';
import cx from 'classnames';
import { Button, message } from 'antd';
import Preview from './Preview';
import { reGenerateID } from '../util';
import Breadcrumb from './Breadcrumb';
import { ScaffoldModal } from './ScaffoldModal';
import { PopOverForm } from './PopOverForm';
import { ContextMenuPanel } from './Panel/ContextMenuPanel';
import LeftPanels from './Panel/LeftPanels';
import RightPanels from './Panel/RightPanels';
import type { SchemaObject } from 'amis';
import type { VariableGroup, VariableOptions } from '../variable';
import type { EditorNodeType } from '../store/node';
import { MobileDevTool } from 'amis-ui';

export interface EditorProps {
  value: SchemaObject;
  onChange: (value: SchemaObject) => void;
  preview?: boolean;
  isMobile?: boolean;
  isSubEditor?: boolean;
  autoFocus?: boolean;
  className?: string;
  $schemaUrl?: string;
  schemas?: Array<any>;
  theme?: string;
  toolbarMode?: 'default' | 'mini';
  noDialog?: boolean;
  appLocale?: string;
  i18nEnabled?: boolean;
  showCustomRenderersPanel?: boolean;
  amisDocHost?: string;
  superEditorData?: any;
  withSuperDataSchema?: boolean;
  hostManager?: any;
  hostNode?: EditorNodeType;
  dataBindingChange?: (value: string, data: any, manager?: any) => void;
  schemaFilter?: (schema: any, isPreview?: boolean) => any;
  amisEnv?: any;
  ctx?: any;
  data?: any;
  disableBultinPlugin?: boolean;
  scene?: string;
  disablePluginList?: Array<string> | ((id: string, plugin: any) => boolean);
  plugins?: Array<any>;
  previewProps?: any;
  isHiddenProps?: (key: string) => boolean;
  actionOptions?: any;
  variables?: VariableGroup[];
  variableOptions?: VariableOptions;
  onUndo?: () => void;
  onRedo?: () => void;
  onSave?: () => void;
  onPreview?: (preview: boolean) => void;
  onFormulaEditorOpen?: (node: EditorNodeType, manager: any, ctx: Record<string, any>, host?: any) => Promise<void | boolean>;
  getHostNodeDataSchema?: () => Promise<any>;
  getAvaiableContextFields?: (node: EditorNodeType) => Promise<any>;
  readonly?: boolean;
}

const Editor: React.FC<EditorProps> = (props) => {
  const [schema, setSchema] = useState(props.value);
  const [isInternalChange, setIsInternalChange] = useState(false);
  const [curCopySchemaData, setCurCopySchemaData] = useState<any>(null);

  useEffect(() => {
    if (!isInternalChange) {
      props.onChange(schema);
    }
  }, [schema, isInternalChange, props]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (props.isSubEditor || props.readonly) {
      return;
    }

    if (e.key === 'z' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      if (e.shiftKey) {
        props.onRedo ? props.onRedo() : message.warning('Redo not implemented');
      } else {
        props.onUndo ? props.onUndo() : message.warning('Undo not implemented');
      }
    } else if (e.key === 's' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      props.onSave ? props.onSave() : message.warning('Save not implemented');
    } else if (e.key === 'c' && (e.metaKey || e.ctrlKey)) {
      setCurCopySchemaData(schema);
    } else if (e.key === 'v' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      if (curCopySchemaData) {
        setSchema(reGenerateID(curCopySchemaData));
      }
    }
  }, [props, schema, curCopySchemaData]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleContextMenu = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    // Handle context menu logic here
  }, []);

  return (
    <div className={cx('ae-Editor', { preview: props.preview }, props.className)}>
      <div className={cx('ae-Editor-inner', props.isMobile && 'ae-Editor-inner--mobile')} onContextMenu={handleContextMenu}>
        {!props.preview && !props.readonly && (
          <LeftPanels theme={props.theme} />
        )}

        <div className="ae-Main">
          {!props.preview && (
            <div className="ae-Header">
              <Breadcrumb />
              <div id="aeHeaderRightContainer" className="ae-Header-Right-Container"></div>
            </div>
          )}
          {props.isMobile && (
            <MobileDevTool />
          )}
          <Preview
            {...props.previewProps}
            editable={!props.preview}
            isMobile={props.isMobile}
            theme={props.theme}
            appLocale={props.appLocale}
            data={props.data}
            amisEnv={props.amisEnv}
            autoFocus={props.autoFocus}
            readonly={props.readonly}
          />
        </div>

        {!props.preview && (
          <RightPanels theme={props.theme} appLocale={props.appLocale} amisEnv={props.amisEnv} readonly={props.readonly} />
        )}

        {!props.preview && <ContextMenuPanel />}
      </div>

      <ScaffoldModal theme={props.theme} />
      <PopOverForm theme={props.theme} />
    </div>
  );
};

export default Editor;
