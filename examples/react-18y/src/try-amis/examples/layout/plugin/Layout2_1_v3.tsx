import {FlexPluginBase} from "amis-editor/plugin/Layout/FlexPluginBase";

export default class Layout2_1_v3 extends FlexPluginBase {
name = 'Left two, right one';
  isBaseComponent = false; // Display in custom component panel
  pluginIcon = 'layout-2-1-plugin';
  description = 'Common layout: two on the left and one on the right (layout container based on CSS Flex). ';
  tags = ['Common layouts'];
  order = 306;
  scaffold: any = {
    type: 'flex',
    className: 'p-1',
    items: [
      {
        type: 'flex',
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
        style: {
          flex: '1 1 auto'
        },
        alignItems: 'stretch',
        direction: 'column',
        justify: 'center'
      },
      {
        type: 'wrapper',
        size: 'xs',
        body: [],
        style: {
          flex: '0 0 auto',
          flexBasis: '250px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'stretch'
        }
      }
    ],
    style: {
      overflowX: 'auto',
      margin: '0',
      maxWidth: 'auto',
      height: '350px',
      overflowY: 'auto'
    },
    direction: 'row',
    justify: 'center',
    alignItems: 'stretch',
    isFixedHeight: true
  };
}
