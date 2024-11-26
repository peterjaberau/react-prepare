import {FlexPluginBase} from "amis-editor/plugin/Layout/FlexPluginBase";

export default class Layout1_2_v3 extends FlexPluginBase {
name = 'Left one, right two';
  isBaseComponent = false;
  pluginIcon = 'layout-1-2-plugin';
  description = 'Common layout: one on the left and two on the right (layout container based on CSS Flex). ';
  tags = ['Common layouts'];
  order = 304;
  scaffold: any = {
    type: 'flex',
    className: 'p-1',
    items: [
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
      },
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
          flex: '1 1 auto',
          margin: '0'
        },
        alignItems: 'stretch',
        direction: 'column',
        justify: 'center'
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
