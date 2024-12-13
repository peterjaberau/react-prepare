import { EditorProps } from './component/Editor';
import { EditorManager } from './manager';
import { PluginInterface } from './pluginTypes.ts';
import { guid } from './util';
import { BasePlugin } from './plugin.ts';
import findIndex from 'lodash/findIndex';

export interface EditorManagerConfig
  extends Omit<EditorProps, 'value' | 'onChange'> {}

export interface PluginClass {
  new (manager: EditorManager, options?: any): PluginInterface;
  id?: string;

  priority?: number;
  scene?: Array<string>;
}

const builtInPlugins: Array<
  PluginClass | [PluginClass, Record<string, any> | (() => Record<string, any>)]
> = [];

declare const window: Window & {AMISEditorCustomPlugins: any};


export function autoPreRegisterEditorCustomPlugins() {
  if (window.AMISEditorCustomPlugins) {
    Object.keys(window.AMISEditorCustomPlugins).forEach(pluginName => {
      const curEditorPlugin = window.AMISEditorCustomPlugins[pluginName];
      if (curEditorPlugin) {
        registerEditorPlugin(curEditorPlugin);
      }
    });
  }
}


export function registerEditorPlugin(klass: PluginClass) {

  const scene = Array.from(new Set(['global'].concat(klass.scene || 'global')));
  klass.scene = scene;

  let exsitedPluginIdx: any = null;
  if (klass.prototype && klass.prototype.isNpmCustomWidget) {
    exsitedPluginIdx = builtInPlugins.findIndex(item =>
      Array.isArray(item)
        ? item[0].prototype.name === klass.prototype.name
        : item.prototype.name === klass.prototype.name
    );
  } else {

    exsitedPluginIdx = builtInPlugins.findIndex(item => item === klass);
  }


  if (!~exsitedPluginIdx) {
    klass.id = klass.id || klass.name || guid();
  }


  if (klass.priority == null || !Number.isInteger(klass.priority)) {
    if (!~exsitedPluginIdx) {
      builtInPlugins.push(klass);
    } else {
      console.warn(`注册插件「${klass.id}」异常，已存在同名插件：`, klass);
    }
  } else {
    exsitedPluginIdx = ~exsitedPluginIdx
      ? exsitedPluginIdx
      : builtInPlugins.findIndex(
        item =>
          !Array.isArray(item) &&
          item.id === klass.id &&
          item?.prototype instanceof BasePlugin
      );

    if (!~exsitedPluginIdx) {
      builtInPlugins.push(klass);
    } else {
      const current = builtInPlugins[exsitedPluginIdx] as PluginClass;


      const currentPriority =
        current.priority && Number.isInteger(current.priority)
          ? current.priority
          : 0;

      if (klass.priority > currentPriority) {
        builtInPlugins.splice(exsitedPluginIdx, 1, klass);
      } else {
        console.warn(`注册插件「${klass.id}」异常，已存在同名插件：`, klass);
      }
    }
  }
}


export function getEditorPlugins(options: any = {}) {
  const {scene = 'global'} = options;
  return builtInPlugins.filter(item =>
    (Array.isArray(item) ? item[0] : item).scene?.includes(scene)
  );
}


export function unRegisterEditorPlugin(id: string) {
  const idx = findIndex(builtInPlugins, item =>
    Array.isArray(item) ? item[0].id === id : item.id === id
  );
  ~idx && builtInPlugins.splice(idx, 1);
}
