/**
 * @file Flex common layout 1:2
 */
import {FlexPluginBase} from "amis-editor/plugin/Layout/FlexPluginBase";

export default class Layout1_2 extends FlexPluginBase {
  name = '1:2 layout';
  isBaseComponent = false;
  pluginIcon = 'layout-2cols-plugin';
  description = 'Common layout: 1:2 layout (layout container based on CSS Flex). ';
  tags = ['Common layouts'];
  order = 201;
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
          flexGrow: 2,
          display: 'block'
        }
      }
    ],
    alignItems: 'stretch'
  };
}
