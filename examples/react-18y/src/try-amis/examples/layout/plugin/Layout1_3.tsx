/**
 * @file Flex 常见布局 1:3
 */
import {FlexPluginBase} from "amis-editor/plugin/Layout/FlexPluginBase";

export default class Layout1_3 extends FlexPluginBase {
name = '1:3 layout';
  isBaseComponent = false;
  pluginIcon = 'layout-2cols-plugin';
  description = 'Common layout: 1:3 layout (layout container based on CSS Flex). ';
  tags = ['Common layouts'];
  order = 202;
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
          display: 'block'
        }
      },
      {
        type: 'wrapper',
        size: 'xs',
        body: [],
        style: {
          flex: '1 1 auto',
          flexBasis: 'auto',
          flexGrow: 3,
          display: 'block'
        }
      }
    ],
    alignItems: 'stretch'
  };
}
