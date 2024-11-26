/**
 * @file Flex common layout 1:1:1 three columns evenly divided
 */
import {FlexPluginBase} from "amis-editor/plugin/Layout/FlexPluginBase";

export default class Layout1_1_1 extends FlexPluginBase {
  name = 'Three columns evenly divided';
  isBaseComponent = false;
  pluginIcon = 'layout-3cols-plugin';
  description = 'Common layout: three columns evenly divided layout (layout container based on CSS Flex).';
  tags = ['Common layout'];
  order = 300;
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
      },
      {
        type: 'wrapper',
        size: 'xs',
        body: [],
        style: {
          flex: '1 1 auto',
          display: 'block',
          flexBasis: 'auto',
          flexGrow: 1
        }
      }
    ],
    alignItems: 'stretch'
  };
}
