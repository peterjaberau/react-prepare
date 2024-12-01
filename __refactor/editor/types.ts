import type { SchemaObject } from 'amis';
import type { RenderOptions } from 'amis';
import type { VariableGroup, VariableOptions } from '../variable';
import type { EditorNodeType } from '../store/node';
import type { EditorManager } from '../manager';
import type { PluginClass } from '../manager';
import type { PluginEventListener, RendererPluginAction, IGlobalEvent } from '../plugin';

export interface EditorProps extends PluginEventListener {
  value: SchemaObject;
  onChange: (value: SchemaObject) => void;
  preview?: boolean;
  isMobile?: boolean;
  isSubEditor?: boolean;
  autoFocus?: boolean;
  className?: string;
  $schemaUrl?: string;
  schemas?: Array<any>;
  theme?: string;
  toolbarMode?: 'default' | 'mini';
  noDialog?: boolean;
  appLocale?: string;
  i18nEnabled?: boolean;
  showCustomRenderersPanel?: boolean;
  amisDocHost?: string;
  superEditorData?: any;
  withSuperDataSchema?: boolean;
  hostManager?: EditorManager;
  hostNode?: EditorNodeType;
  dataBindingChange?: (
    value: string,
    data: any,
    manager?: EditorManager
  ) => void;
  schemaFilter?: (schema: any, isPreview?: boolean) => any;
  amisEnv?: RenderOptions;
  ctx?: any;
  data?: any;
  disableBultinPlugin?: boolean;
  scene?: string;
  disablePluginList?:
    | Array<string>
    | ((id: string, plugin: PluginClass) => boolean);
  plugins?: Array<
    | PluginClass
    | [PluginClass, Record<string, any> | (() => Record<string, any>)]
  >;
  previewProps?: any;
  isHiddenProps?: (key: string) => boolean;
  actionOptions?: {
    showOldEntry?: boolean;
    actionTreeGetter?: (
      actionTree: RendererPluginAction[]
    ) => RendererPluginAction[];
    customActionGetter?: (manager: EditorManager) => {
      [propName: string]: RendererPluginAction;
    };
    globalEventGetter?: (manager: EditorManager) => IGlobalEvent[];
  };
  variables?: VariableGroup[];
  variableOptions?: VariableOptions;
  onUndo?: () => void;
  onRedo?: () => void;
  onSave?: () => void;
  onPreview?: (preview: boolean) => void;
  onFormulaEditorOpen?: (
    node: EditorNodeType,
    manager: EditorManager,
    ctx: Record<string, any>,
    host?: {
      node?: EditorNodeType;
      manager?: EditorManager;
    }
  ) => Promise<void | boolean>;
  getHostNodeDataSchema?: () => Promise<any>;
  getAvaiableContextFields?: (node: EditorNodeType) => Promise<any>;
  readonly?: boolean;
}
