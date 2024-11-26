import React from 'react';
import {PanelProps} from '../../plugin';
import {autobind} from '../../util';
import AMisCodeEditor from './AMisCodeEditor';

export default class CodeEditorPanel extends React.Component<PanelProps> {

  constructor(props: PanelProps) {
    super(props);
    this.handleCodePaste = this.handleCodePaste.bind(this);
  }


  handleCodePaste(e: any) {
    setTimeout(() => {
      this.props.manager.patchSchema(true);


      if (
        e?.languageId === 'json' &&
        e.range?.startColumn === 1 &&
        e.range?.startLineNumber === 1 &&
        e.range?.endColumn === 2 &&
        e.range?.endLineNumber > 1
      ) {
        this.props.manager.reGenerateNodeDuplicateID(['布局容器', '展示']);
      }
    }, 500);
  }

  render() {
    const {onChange, manager, store} = this.props;

    return (
      <div className="ae-CodePanel">
        <div className="panel-header">Source code</div>
        <div className="ae-CodePanel-content">
          <AMisCodeEditor
            value={store.valueWithoutHiddenProps}
            onChange={onChange}
            $schema={store.jsonSchemaUri}
            $schemaUrl={manager.config.$schemaUrl}
            onPaste={this.handleCodePaste}
          />
        </div>
      </div>
    );
  }
}
