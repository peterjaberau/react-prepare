import * as React from 'react';
import {AlertComponent, ToastComponent, ContextMenu} from 'amis';
// @ts-ignore
import AMisSchemaEditor from './Editor';
import {Link} from 'react-router-dom';
export default class AppEditor extends React.PureComponent {
    render() {
        // Note: If you need to use the antd theme, you also need to replace index.html with index-antd.html

        const curTheme = 'cxd'; // Use cxd theme by default
        return (
            <div className="Editor-Demo">
                <div id="headerBar" className="Editor-header">
                    <div className="Editor-title">
                        amis visual editor
                        <Link to="/basic">Panel template</Link>
                    </div>
                </div>
                <AMisSchemaEditor theme={curTheme} />
                <ToastComponent theme={curTheme} />
                <AlertComponent theme={curTheme} />
                <ContextMenu theme={curTheme} />
            </div>
        );
    }
}
