import {FlexPluginBase} from "amis-editor/plugin/Layout/FlexPluginBase";

export default class Layout_scroll_x extends FlexPluginBase {
name = 'x-axis scrolling container';
  isBaseComponent = false;
  pluginIcon = 'layout-3cols-plugin';
  description = 'x-axis scrolling container: a layout container based on CSS Flex. ';
  order = 505;
  scaffold: any = {
    type: 'flex',
    className: 'p-1',
    items: [
      {
        type: 'container',
        size: 'xs',
        body: [],
        wrapperBody: false,
        style: {
          flex: '0 0 auto',
          flexBasis: '200px',
          display: 'block',
          position: 'static',
          minWidth: 'auto',
          minHeight: 'auto'
        }
      },
      {
        type: 'container',
        size: 'xs',
        body: [],
        wrapperBody: false,
        style: {
          flex: '0 0 auto',
          flexBasis: '200px',
          display: 'block',
          position: 'static',
          minWidth: 'auto',
          minHeight: 'auto'
        }
      },
      {
        type: 'container',
        size: 'xs',
        body: [],
        wrapperBody: false,
        style: {
          flex: '0 0 auto',
          display: 'block',
          position: 'static',
          minWidth: 'auto',
          minHeight: 'auto',
          flexBasis: '200px'
        }
      },
      {
        type: 'container',
        wrapperBody: false,
        size: 'xs',
        body: [],
        style: {
          flex: '0 0 auto',
          flexBasis: '200px',
          display: 'block',
          position: 'static',
          minWidth: 'auto',
          minHeight: 'auto'
        }
      },
      {
        type: 'container',
        size: 'xs',
        body: [],
        wrapperBody: false,
        style: {
          flex: '0 0 auto',
          flexBasis: '200px',
          display: 'block',
          position: 'static',
          minWidth: 'auto',
          minHeight: 'auto'
        }
      },
      {
        type: 'container',
        size: 'xs',
        body: [],
        wrapperBody: false,
        style: {
          flex: '0 0 auto',
          flexBasis: '200px',
          display: 'block',
          position: 'static',
          minWidth: 'auto',
          minHeight: 'auto'
        }
      },
      {
        type: 'container',
        size: 'xs',
        body: [],
        wrapperBody: false,
        style: {
          flex: '0 0 auto',
          flexBasis: '200px',
          display: 'block',
          position: 'static',
          minWidth: 'auto',
          minHeight: 'auto'
        }
      }
    ],
    direction: 'row',
    justify: 'flex-start',
    alignItems: 'stretch',
    style: {
      position: 'static',
      minHeight: 'auto',
      maxWidth: '1080px',
      minWidth: 'auto',
      height: '200px',
      overflowX: 'scroll',
      overflowY: 'scroll',
      margin: '0 auto'
    },
    isFixedHeight: true,
    isFixedWidth: false
  };

  onPreview2editor(event: any) {
    console.log('onPreview2editor-event:', event);
  }
}
