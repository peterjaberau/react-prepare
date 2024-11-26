/**
 * @file Flex common layout 1:2:3
 */
import {FlexPluginBase} from "amis-editor/plugin/Layout/FlexPluginBase";

export default class Layout1_2_3 extends FlexPluginBase {
  name = '1:2:3 three columns';
  isBaseComponent = false;
  pluginIcon = 'layout-3cols-plugin';
  description = 'Common layout: 1:2:3 three-column layout (layout container based on CSS Flex). ';
  tags = ['Common layouts'];
  order = 301;
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
      },
      {
        type: 'wrapper',
        size: 'xs',
        body: [],
        style: {
          flex: '1 1 auto',
          display: 'block',
          flexBasis: 'auto',
          flexGrow: 3
        }
      }
    ],
    alignItems: 'stretch'
  };
}
