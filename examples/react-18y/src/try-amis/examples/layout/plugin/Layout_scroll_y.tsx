import {FlexPluginBase} from "amis-editor/plugin/Layout/FlexPluginBase";

export default class Layout_scroll_y extends FlexPluginBase {
name = 'y-axis scrolling container';
  isBaseComponent = false;
  pluginIcon = 'layout-3row-plugin';
  description = 'y-axis scrolling container: a layout container based on CSS Flex. ';
  order = 504;
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
          flexBasis: '60px',
          display: 'block',
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
          flexBasis: '60px',
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
          flexBasis: '60px',
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
          flexBasis: '60px',
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
          flexBasis: '60px',
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
          flexBasis: '60px',
          display: 'block',
          position: 'static',
          minWidth: 'auto',
          minHeight: 'auto'
        }
      }
    ],
    direction: 'column',
    justify: 'flex-start',
    alignItems: 'stretch',
    style: {
      position: 'static',
      minHeight: 'auto',
      maxWidth: 'auto',
      minWidth: 'auto',
      height: '200px',
      width: 'auto',
      overflowX: 'auto',
      overflowY: 'scroll',
      margin: '0'
    },
    isFixedHeight: true,
    isFixedWidth: false
  };
}
