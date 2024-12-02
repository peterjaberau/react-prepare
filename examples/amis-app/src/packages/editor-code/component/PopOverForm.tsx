import React, { useState, useEffect } from 'react';
import { Button, Popover, Spin } from 'antd';
import { EditorManager } from '../manager';
import { EditorStoreType } from '../store/editor';
import { diff } from '../util';
import { createObject } from 'amis-core';

export interface PopOverFormProps {
  store: EditorStoreType;
  manager: EditorManager;
  theme?: string;
}

const PopOverForm: React.FC<PopOverFormProps> = ({ store, manager, theme }) => {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    if (store.popOverForm) {
      setFormData(store.popOverForm.value);
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [store.popOverForm]);

  const handleFinish = (newValue: any) => {
    const popOverFormContext = store.popOverForm!;
    popOverFormContext.callback?.(
      newValue,
      diff(popOverFormContext.value, newValue)
    );
    setVisible(false);
  };

  const buildSchema = () => {
    const popOverFormContext = store.popOverForm!;
    return {
      type: 'form',
      wrapWithPanel: false,
      mode: 'normal',
      wrapperComponent: 'div',
      body: popOverFormContext.body,
      submitOnChange: true,
      autoFocus: true,
      onFinished: handleFinish
    };
  };

  return (
    <Popover
      content={
        store.popOverForm ? (
          render(
            buildSchema(),
            {
              data: createObject(store.ctx, formData),
              node: store.popOverForm.node,
              manager
            },
            {
              ...manager.env,
              session: 'popover-form',
              theme: theme
            }
          )
        ) : (
          <Spin />
        )
      }
      title="Form"
      trigger="click"
      visible={visible}
      onVisibleChange={setVisible}
    >
      <Button type="primary">Open Form</Button>
    </Popover>
  );
};

export default PopOverForm;
