import {FlexPluginBase} from "amis-editor/plugin/Layout/FlexPluginBase";

export default class Layout1_2_v4 extends FlexPluginBase {
name = 'Classic layout';
  isBaseComponent = false;
  pluginIcon = 'layout-3-1-plugin';
  description = 'Common layout: classic layout (layout container based on CSS Flex). ';
  tags = ['Common layouts'];
  order = 307;
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
              position: 'static',
              overflowX: 'auto',
              overflowY: 'auto',
              margin: '0',
              flex: '1 1 auto',
              flexGrow: 1,
              flexBasis: 'auto'
            },
            alignItems: 'stretch',
            direction: 'column',
            justify: 'center',
            isFixedHeight: false,
            isFixedWidth: false
          }
        ],
        style: {
          flex: '1 1 auto',
          overflowX: 'auto',
          margin: '0',
          maxWidth: 'auto',
          overflowY: 'auto',
          position: 'static',
          minWidth: 'auto',
          width: 'auto',
          maxHeight: 'auto',
          minHeight: '300px'
        },
        direction: 'row',
        justify: 'flex-start',
        alignItems: 'stretch',
        isFixedHeight: false,
        isFixedWidth: false
      }
    ],
    direction: 'column',
    justify: 'center',
    alignItems: 'stretch'
  };
}
