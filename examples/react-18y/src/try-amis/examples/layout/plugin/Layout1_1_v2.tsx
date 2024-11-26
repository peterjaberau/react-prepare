/**
 * @file Flex common layout top and bottom layout
 */
import {FlexPluginBase} from "amis-editor/plugin/Layout/FlexPluginBase";

export default class Layout1_1_v2 extends FlexPluginBase {
  name = 'top and bottom layout';
  isBaseComponent = false;
  pluginIcon = 'layout-2row-plugin';
  description = 'Common layout: top and bottom layout (layout container based on CSS Flex). ';
  tags = ['Common layouts'];
  order = 203;
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
      }
    ],
    direction: 'column',
    justify: 'center',
    alignItems: 'stretch'
  };
}
