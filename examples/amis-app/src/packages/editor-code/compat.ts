/**
 * 兼容 1.x 里面的注册渲染器的方法。
 */
import {EditorManager, registerEditorPlugin} from './manager';
import {BasePlugin} from './plugin';
import { createMachine, createActor, assign } from 'xstate';

interface RendererContext {
  rendererName: string;
  name: string;
  description?: string;
  scaffold?: any;
  previewSchema?: any;
  panelTitle?: string;
  panelControls?: Array<any>;
}

interface RendererConfig {
  name: string;
  description?: string;
  type?: string;
  previewSchema?: any;
  scaffold?: any;
}

/**
 * 旧版本注册渲染器编辑器的方法。
 *
 * @deprecated
 * @param rendererName
 * @param config
 */
export function createRendererEditorActor(
  rendererName: string,
  config: RendererConfig
) {
  const rendererMachine = createMachine<RendererContext>({
    id: 'rendererEditor',
    initial: 'idle',
    context: {
      rendererName,
      name: config.name,
      description: config.description,
      scaffold: config.scaffold ?? { type: config.type },
      previewSchema: config.previewSchema ?? config.scaffold,
      panelTitle: undefined,
      panelControls: undefined,
    },
    states: {
      idle: {
        on: {
          INITIALIZE: {
            target: 'active',
            actions: assign((context, event) => {
              const settingsSchema = event.settingsSchema;
              return {
                panelTitle: settingsSchema?.title,
                panelControls: settingsSchema?.body,
              };
            }),
          },
        },
      },
      active: {
        // Define other states and transitions as needed
      },
    },
  });

  return createActor(rendererMachine);
}

/**
 * 为了兼容旧版的注册方法
 * @deprecated
 */
export class BasicEditor extends BasePlugin {
  tipName?: string;
  settingsSchema?: {
    title: string;
    body: Array<any>;
  };
}
