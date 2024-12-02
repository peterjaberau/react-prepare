import React, { useState, useEffect, useCallback } from 'react';
import { Button, Modal, Form } from 'antd';
import { EditorManager } from '../manager';
import { EditorStoreType } from '../store/editor';
import { render } from 'amis';
import { createObject, RenderOptions } from 'amis-core';
import Editor from './Editor';
import omit from 'lodash/omit';

interface SubEditorProps {
  store: EditorStoreType;
  manager: EditorManager;
  theme?: string;
  amisEnv?: RenderOptions;
  readonly?: boolean;
}

const SubEditor: React.FC<SubEditorProps> = ({ store, manager, theme, amisEnv, readonly }) => {
  const [subEditorContext, setSubEditorContext] = useState(store.subEditorContext);

  useEffect(() => {
    setSubEditorContext(store.subEditorContext);
  }, [store.subEditorContext]);

  const afterResolveEditorInfo = useCallback((event) => {
    const context = event.context;
    const slot = subEditorContext?.slot;

    if (!slot) {
      if (context.data && !context.schemaPath && subEditorContext?.memberImmutable) {
        context.data.memberImmutable = subEditorContext?.memberImmutable;
      }
      return;
    }
    const slotPath = store.subEditorSlotPath;

    if (!~context.schemaPath.indexOf(slotPath) && context.data) {
      context.data.editable = false;
      context.data.memberImmutable = !Array.isArray(subEditorContext?.value);

      if (!context.data.memberImmutable) {
        context.data.name = 'Container';
      }
    } else if (context.schemaPath === slotPath && context.data) {
      if (!Array.isArray(subEditorContext?.value)) {
        context.data.movable = false;
        context.data.removable = false;
      }

      context.data.typeMutable = subEditorContext?.typeMutable;
    }
  }, [subEditorContext, store.subEditorSlotPath]);

  const handleBuildPanels = useCallback((event) => {
    const context = event.context;
    const slot = subEditorContext?.slot;

    if (!slot) {
      return;
    }

    if (!!context.info.memberImmutable) {
      const panels = context.data.concat();
      context.data.splice(0, context.data.length);
      const renderersPanel = panels.filter(r => r.key !== 'renderers');
      renderersPanel && context.data.push(...renderersPanel);
      context.changeLeftPanelKey = 'outline';
    }
  }, [subEditorContext]);

  const buildSchema = () => {
    const config = manager.config;
    let superEditorData: any = store.superEditorData;
    if (!!subEditorContext) {
      superEditorData = createObject(store.superEditorData, subEditorContext?.data);
    }
    const variables: any = manager.config?.variables || [];

    return {
      size: 'full',
      title: subEditorContext?.title,
      onClose: store.closeSubEditor,
      onConfirm: store.confirmSubEditor,
      body: subEditorContext
        ? {
          type: 'form',
          mode: 'normal',
          wrapWithPanel: false,
          wrapperComponent: 'div',
          onValidate: async (value: any) => {
            const result = await subEditorContext?.validate?.(value);
            if (result) {
              return {
                schema: result
              };
            }
            return;
          },
          onChange: store.subEditorOnChange,
          body: [
            {
              name: 'schema',
              asFormItem: true,
              children: ({ value, onChange }: { value: any; onChange: (value: any) => void; }) => (
                <Editor
                  autoFocus
                  value={value}
                  onChange={onChange}
                  data={subEditorContext?.data}
                  hostManager={manager}
                  hostNode={subEditorContext?.hostNode}
                  superEditorData={superEditorData}
                  schemaFilter={manager.config.schemaFilter}
                  theme={manager.env.theme}
                  afterResolveEditorInfo={afterResolveEditorInfo}
                  onBuildPanels={handleBuildPanels}
                  isMobile={store.isMobile}
                  isSubEditor={true}
                  ctx={store.ctx}
                  schemas={manager.config?.schemas}
                  variables={variables}
                  amisEnv={amisEnv || config.amisEnv}
                  appLocale={config.appLocale}
                  i18nEnabled={config.i18nEnabled}
                  plugins={config.plugins}
                  actionOptions={config.actionOptions}
                  showCustomRenderersPanel={store.showCustomRenderersPanel ?? true}
                  isHiddenProps={config.isHiddenProps}
                  $schemaUrl={config.$schemaUrl}
                  onFormulaEditorOpen={async (node, subEditormanager, data) => {
                    const fn = manager?.config?.onFormulaEditorOpen;

                    if (fn && typeof fn === 'function') {
                      return fn(node, subEditormanager, data, {
                        node: subEditorContext?.hostNode,
                        manager: manager
                      });
                    }
                    return;
                  }}
                  getHostNodeDataSchema={async () => {
                    await manager.getContextSchemas(manager.store.activeId);
                    return manager.dataSchema;
                  }}
                  getAvaiableContextFields={node => manager.getAvailableContextFields(node)}
                  readonly={readonly}
                />
              )
            },
            readonly && {
              type: 'button',
              label: 'Return to Editor',
              className: 'subEditor-container-back',
              onClick: () => store.closeSubEditor()
            }
          ].filter(Boolean)
        }
        : {
          type: 'tpl',
          tpl: 'Loading...'
        },
      actions: [
        [
          {
            children: subEditorContext ? (
              <div className="ae-DialogToolbar">
                <Button
                  type="button"
                  data-tooltip="Undo"
                  data-position="top"
                  disabled={!subEditorContext.canUndo}
                  onClick={store.undoSubEditor}
                >
                  <i className="fa fa-undo" />
                </Button>
                <Button
                  type="button"
                  data-tooltip="Redo"
                  data-position="top"
                  disabled={!subEditorContext.canRedo}
                  onClick={store.redoSubEditor}
                >
                  <i className="fa fa-rotate-right" />
                </Button>
              </div>
            ) : null
          },
          {
            type: 'submit',
            label: 'Save',
            level: 'primary'
          },
          {
            type: 'button',
            label: 'Cancel',
            actionType: 'close'
          }
        ]
      ],
      closeOnEsc: false,
      bodyClassName: 'ae-dialog subEditor-dialog'
    };
  };

  if (!subEditorContext) {
    return null;
  }

  return render(
    {
      type: readonly ? 'container' : 'dialog',
      className: readonly ? 'subEditor-container' : 'subEditor-dialog',
      ...buildSchema()
    },
    {
      show: !!subEditorContext,
      data: {
        schema: store.subEditorValue
      }
    },
    {
      ...omit(manager.env, 'replaceText'),
      session: 'editor-dialog',
      theme: theme
    }
  );
};

export default SubEditor;
