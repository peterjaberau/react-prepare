import {FlexPluginBase} from "amis-editor/plugin/Layout/FlexPluginBase";

export default class Layout_fixed_bottom extends FlexPluginBase {
name = 'suction bottom container';
  isBaseComponent = false;
  pluginIcon = 'flex-container-plugin';
  description = 'Common layout: bottom container (layout container based on CSS Flex). ';
  tags = ['Common layouts'];
  order = 501;
  scaffold: any = {
    type: 'flex',
    className: 'p-1',
    items: [
      {
        type: 'wrapper',
        size: 'xs',
        body: [],
        style: {
          flex: '1 1 auto',
          flexBasis: 'auto',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'stretch'
        }
      },
      {
        type: 'wrapper',
        size: 'xs',
        body: [],
        style: {
          flex: '1 1 auto',
          flexBasis: 'auto',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'stretch'
        }
      },
      {
        type: 'wrapper',
        size: 'xs',
        body: [],
        style: {
          flex: '1 1 auto',
          flexBasis: 'auto',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'stretch'
        }
      }
    ],
    style: {
      position: 'fixed',
      inset: 'auto auto 0 0',
      zIndex: 2,
      width: '100%',
      overflowX: 'auto',
      margin: '0',
      overflowY: 'auto',
      height: 'auto'
    },
    isFixedWidth: true,
    direction: 'row',
    justify: 'center',
    alignItems: 'stretch',
    isFixedHeight: false,
    originPosition: 'right-bottom'
  };
}
