import {FlexPluginBase} from "amis-editor/plugin/Layout/FlexPluginBase";

export default class Layout_fixed extends FlexPluginBase {
name = 'suspended container';
  isBaseComponent = false;
  pluginIcon = 'layout-fixed-plugin';
  description = 'Common layout: floating container (layout container based on CSS Flex). ';
  tags = ['Common layouts'];
  order = -1;
  scaffold: any = {
    type: 'container',
    size: 'xs',
    body: [],
    style: {
      position: 'fixed',
      inset: 'auto 50px 50px auto',
      zIndex: 10,
      minWidth: '80px',
      minHeight: '80px'
    },
    originPosition: 'right-bottom'
  };
}
