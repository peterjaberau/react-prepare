/**
 * @file Flex common layout 1:1 equally divided
 */
import {FlexPluginBase} from "amis-editor/plugin/Layout/FlexPluginBase";

export default class Layout1_1 extends FlexPluginBase {
  name = 'Evenly divided left and right';
  isBaseComponent = false;
  pluginIcon = 'layout-2cols-plugin';
  description = 'Common layout: evenly distributed left and right layout (layout container based on CSS Flex).';
  tags = ['Common layouts'];
  order = 200;
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
          flexGrow: 1,
          display: 'block'
        }
      }
    ],
    alignItems: 'stretch'
  };
}
