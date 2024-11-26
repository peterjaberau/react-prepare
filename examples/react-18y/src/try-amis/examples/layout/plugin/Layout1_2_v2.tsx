import {FlexPluginBase} from "amis-editor/plugin/Layout/FlexPluginBase";

export default class Layout1_2_v2 extends FlexPluginBase {
name = 'One to two';
  isBaseComponent = false;
  pluginIcon = 'layout-1with2-plugin';
  description = 'Common layout: one-to-two layout (layout container based on CSS Flex). ';
  tags = ['Common layouts'];
  order = 303;
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
          flexBasis: '100px',
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
          padding: 0
        },
        alignItems: 'stretch'
      }
    ],
    style: {
      overflowX: 'auto',
      margin: '0',
      maxWidth: 'auto',
      height: '350px',
      overflowY: 'auto'
    },
    direction: 'column',
    justify: 'center',
    alignItems: 'stretch',
    isFixedHeight: true
  };
}
