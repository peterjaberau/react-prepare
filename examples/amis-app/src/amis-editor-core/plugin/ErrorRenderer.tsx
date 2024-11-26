import {registerEditorPlugin} from '../manager';
import {BasePlugin} from '../plugin';

export class ErrorRendererPlugin extends BasePlugin {
  static scene = ['layout'];
  order = -9999;


  rendererName = 'error';


  name = 'Error';
  isBaseComponent = true;
}

registerEditorPlugin(ErrorRendererPlugin);
