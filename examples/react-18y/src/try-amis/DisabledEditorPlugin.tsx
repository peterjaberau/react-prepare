import { registerEditorPlugin, BasePlugin } from 'amis-editor'
// import { RendererEventContext, SubRendererInfo, BasicSubRenderInfo, PluginInterface } from 'amis-editor';
import {
  RendererEventContext,
  SubRendererInfo,
  BasicSubRenderInfo,
} from 'amis-editor'
/**
 * Used to hide some unnecessary Editor components
 * Note: If you don’t know what preset components are in the current Editor, you can set a breakpoint here and take a look at the renderers in console.log.
 */

// Components that need to be hidden in the component panel
export const disabledRenderers = [
  'custom', //custom code
  'column-toggler', //Customize the display column
  'wrapper', //"wrapper"
  'plain', //"plain text"
  'pagination', //"pagination component"
  'hbox',
  'breadcrumb', //"breadcrumbs"
  'input-time-range', //"date range"
  'input-quarter-range', //"quarter range"
  'tree-select', //"Tree selection box"
  'static', //"static display box"
  'input-quarter', //"quarter"
  'input-month-range', //"month range"
  'group', //"form group"
  'formula', //"formula"
 'input-datetime-range', //"Date time range"
  'control', //"Form item container"
  'input-array', //"array input box"
  'log', //"log"
  'collapse', //"folder"
  'markdown',
  'code', //"code highlighting"
  'steps', //"step bar"
  'status', //"status display"
  'progress', //"Progress display"
  'timeline', //"timeline"
  'json', //"JSON display"
  'images', //"picture collection"
  'image', //"Picture display"
  'carousel', //"carousel"
  'sparkline', //"trend chart"
  'chart', //"chart"
  'table2', //"Table2"
  'cards', //"card list"
 'card2',
  'card',
  'avatar', //"avatar"
  'mapping', //"mapping"
  'list', //"list"
  'link', //"link"
  'icon', //"icon"
  'qrcode', //"QR code"
  'iframe', //"iFrame"
  'property', //"property table"
  'each', //"Loop Each"
  'tasks', //"Asynchronous tasks"
  'video', //"video"
  'audio', //"audio"
  'web-component', //
  'table-view', //"table view"
  'wizard', //"wizard"
  'alert', //"prompt"
  'tooltip-wrapper', //"Text tip"
  'anchor-nav', //"anchor navigation"
  'nav', //"navigation"
  'button-group', //"Button group"
  'hidden', //"hidden field"
  'input-sub-form', //"Sub form item"
  'location-picker', //"Location location selection".
  'uuid',
  'input-repeat', //"Repeat cycle selection"
  'input-kv', //"KV key-value pair"
  'search-box', //"search box"
  'editor', //"code editor"
  'diff-editor', //"Diff editor"
  'input-rich-text', //"Rich text editor"
  'matrix-checkboxes', //"matrix switches"
  'input-table', //"Table edit box"
  'input-group', //"input group"
  'combo', //"Combo input"
  'fieldset', //"Fieldset"
 'condition-builder', //"Conditional component"
  'input-color', //"color box"
  'tabs-transfer', //"Combined shuttle"
  'transfer', //"shuttle"
  'input-city', //"City selection"
  'input-rating', //"rating"
  'input-range', //"slider"
  'switch', //"switch"
  'picker', //"List selection"
  'button-toolbar', //"Button toolbar"
  'list-select', //"list selection"
  'button-group-select', // "Button click"
  'input-tag', //"Tag selection"
  'input-tree', //"Tree selection box"
  'input-excel', //"Upload Excel"
  'input-image', //"Image upload"
  'input-file', //"File upload"
  'input-date-range', //"date range"
  'nested-select', //"cascading selector"
  'chained-select', //"Chained drop-down box"
 'service', //"Service Service"
  'tabs', //"tabs"
  'panel', //"Panel"
  'form', // form
  'collapse-group', //"collapse panel"
  'flex', //"floating container"
  'container', //"free container"
  'grid', //"Column"
  'input-url', //"URL input box"
  'input-password', //"Password box"
  'input-email',
  'crud', //"Add, delete, modify and check"
  'crud2', //"list"
  'input-number', // number box
  'select', // drop-down box
  'dropdown-button', // dropdown button
  'date', // date
  'datetime', // date display
  'time', // time display
]

export class ManagerEditorPlugin extends BasePlugin {
  order = 9999
  buildSubRenderers(
    _context: RendererEventContext,
    renderers: Array<SubRendererInfo>,
  ): BasicSubRenderInfo | Array<BasicSubRenderInfo> | void {
    // Update NPM custom component sorting and classification
    for (let index = 0, size = renderers.length; index < size; index++) {
      // Determine whether you need to hide Editor preset components
      const pluginRendererName = renderers[index].rendererName
      if (pluginRendererName && disabledRenderers.indexOf(pluginRendererName) > -1) {
        renderers[index].disabledRendererPlugin = true // updateStatus
      }
    }
  }
}

registerEditorPlugin(ManagerEditorPlugin)
