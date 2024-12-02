import React, { useState, useEffect } from 'react';
import { Modal, Button, Steps, Spin, message } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

interface SubEditorProps {
  store: any; // Define a more specific type if possible
  manager: any; // Define a more specific type if possible
  theme?: string;
}

const ScaffoldModal: React.FC<SubEditorProps> = ({ store, manager, theme }) => {
  const [scaffoldData, setScaffoldData] = useState(store.scaffoldData);
  const [scaffoldFormStep, setScaffoldFormStep] = useState(0);
  const [scaffoldFormBuzy, setScaffoldFormBuzy] = useState(false);
  const [scaffoldError, setScaffoldError] = useState<string | null>(null);

  useEffect(() => {
    setScaffoldData(store.scaffoldData);
  }, [store.scaffoldData]);

  const handleConfirm = async (values: any) => {
    try {
      const pipeOutFunc = store.scaffoldForm?.pipeOut;
      let newValues = { ...store.scaffoldForm?.value, ...values };

      if (pipeOutFunc && typeof pipeOutFunc === 'function') {
        const mapped = await pipeOutFunc(newValues);
        newValues = { ...mapped };
      }

      store.scaffoldForm?.callback(newValues);
      store.closeScaffoldForm();
      store.scaffoldForm?.stepsBody && setScaffoldFormStep(0);
    } catch (error) {
      message.error('An error occurred during confirmation.');
    }
  };

  const handleConfirmClick = async () => {
    try {
      setScaffoldFormBuzy(true);
      // Simulate form submission
      const values = {}; // Replace with actual form values
      await handleConfirm(values);
    } catch (error) {
      console.error(error);
      setScaffoldError('An error occurred.');
    } finally {
      setScaffoldFormBuzy(false);
      setScaffoldFormStep(0);
    }
  };

  const handleCancelClick = () => {
    store.closeScaffoldForm();
    setScaffoldFormStep(0);
  };

  const goToNextStep = () => {
    setScaffoldFormStep((prevStep) => prevStep + 1);
  };

  const goToPrevStep = () => {
    setScaffoldFormStep((prevStep) => prevStep - 1);
  };

  const scaffoldFormContext = store.scaffoldForm;
  const isStepBody = !!scaffoldFormContext?.stepsBody;
  const canSkip = !!scaffoldFormContext?.canSkip;
  const isLastStep = isStepBody && scaffoldFormStep === scaffoldFormContext!.body.length - 1;
  const isFirstStep = isStepBody && scaffoldFormStep === 0;

  return (
    <Modal
      visible={!!scaffoldFormContext}
      title={scaffoldFormContext?.title}
      onCancel={handleCancelClick}
      footer={null}
      className="ae-scaffoldForm-Modal"
      closable={!scaffoldFormBuzy}
    >
      <div className="Modal-header">
        {!scaffoldFormBuzy && (
          <Button
            icon={<CloseOutlined />}
            onClick={handleCancelClick}
            className="Modal-close"
          />
        )}
        <div className="Modal-title">{scaffoldFormContext?.title}</div>
      </div>
      <div className="Modal-body">
        {scaffoldFormContext ? (
          <div>
            {/* Render form or steps here */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="Modal-footer">
        {scaffoldFormBuzy || scaffoldError ? (
          <div className="Dialog-info">
            <Spin size="small" spinning={scaffoldFormBuzy} />
            {scaffoldError && <span className="Dialog-error">{scaffoldError}</span>}
          </div>
        ) : null}
        {isStepBody && canSkip && isFirstStep && (
          <Button onClick={handleConfirmClick} disabled={scaffoldFormBuzy}>
            Skip Wizard
          </Button>
        )}
        {isStepBody && !isFirstStep && (
          <Button onClick={goToPrevStep} disabled={scaffoldFormBuzy}>
            Previous
          </Button>
        )}
        {isStepBody && !isLastStep && (
          <Button onClick={goToNextStep} disabled={scaffoldFormBuzy}>
            Next
          </Button>
        )}
        {(!isStepBody || isLastStep) && (
          <Button onClick={handleConfirmClick} disabled={scaffoldFormBuzy}>
            Confirm
          </Button>
        )}
        <Button onClick={handleCancelClick}>Cancel</Button>
      </div>
    </Modal>
  );
};

export default ScaffoldModal;
