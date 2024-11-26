import React, {Component} from 'react';
import cx from 'classnames';
import Preview from './Preview';
import {autobind} from '../util';
import {MainStore, EditorStoreType} from '../store/editor';
import {EditorManager, EditorManagerConfig, PluginClass} from '../manager';
import {reaction} from 'mobx';
import {RenderOptions, closeContextMenus, toast} from 'amis';
import {
  PluginEventListener,
  RendererPluginAction,
  IGlobalEvent
} from '../plugin';
import {reGenerateID} from '../util';
import {SubEditor} from './SubEditor';
import Breadcrumb from './Breadcrumb';
import {destroy, isAlive} from 'mobx-state-tree';
import {ScaffoldModal} from './ScaffoldModal';
import {PopOverForm} from './PopOverForm';
import {ContextMenuPanel} from './Panel/ContextMenuPanel';
import {LeftPanels} from './Panel/LeftPanels';
import {RightPanels} from './Panel/RightPanels';
import type {SchemaObject} from 'amis';
import type {VariableGroup, VariableOptions} from '../variable';
import type {EditorNodeType} from '../store/node';
import {MobileDevTool} from 'amis-ui';

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

export default class Editor extends Component<EditorProps> {
  readonly store: EditorStoreType;
  readonly manager: EditorManager;
  readonly mainRef = React.createRef<HTMLDivElement>();
  readonly mainPreviewRef = React.createRef<HTMLDivElement>();
  readonly mainPreviewBodyRef = React.createRef<any>();
  toDispose: Array<Function> = [];
  lastResult: any;
  curCopySchemaData: any;

  static defaultProps = {
    autoFocus: true
  };
  isInternalChange: boolean = false;

  constructor(props: EditorProps) {
    super(props);

    const {
      value,
      isSubEditor = false,
      onChange,
      showCustomRenderersPanel,
      superEditorData,
      hostManager,
      ...rest
    } = props;

    const config: EditorManagerConfig = {
      ...rest
    };
    this.store = MainStore.create(
      {
        isMobile: props.isMobile,
        theme: props.theme,
        toolbarMode: props.toolbarMode || 'default',
        noDialog: props.noDialog,
        isSubEditor,
        amisDocHost: props.amisDocHost,
        superEditorData,
        appLocale: props.appLocale,
        appCorpusData: props?.amisEnv?.replaceText,
        i18nEnabled: props?.i18nEnabled ?? false
      },
      config
    );
    this.store.setCtx(props.ctx);
    this.store.setSchema(value);
    if (showCustomRenderersPanel !== undefined) {
      this.store.setShowCustomRenderersPanel(showCustomRenderersPanel);
    }

    this.manager = new EditorManager(config, this.store, hostManager);


    if (!(props.isSubEditor && (window as any).editorStore)) {
      (window as any).editorStore = this.store;
    }


    document.addEventListener('keydown', this.handleKeyDown);

    window.addEventListener('message', this.handleMessage, false);

    this.toDispose.push(
      reaction(
        () => this.store.schemaRaw,
        (raw: any) => {
          this.lastResult = raw;

          if (this.isInternalChange) {
            return;
          }
          props.onChange(raw);
        }
      )
    );
    this.toDispose.push(
      this.manager.on('preview2editor', () => this.manager.rebuild())
    );

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleContextMenu = this.handleContextMenu.bind(this);
    this.getToolbarContainer = this.getToolbarContainer.bind(this);
  }

  componentDidMount() {
    const store = this.manager.store;
    if (this.props.isSubEditor) {
      // Wait for the sub-editor animation to end and reacquire the highlighted component position.
      setTimeout(() => {
        store.calculateHighlightBox(store.highlightNodes.map(node => node.id));
      }, 500);
    } else {
      this.manager.trigger('init', {
        data: this.manager
      });
    }
  }

  componentDidUpdate(prevProps: EditorProps) {
    const props = this.props;

    if (props.value !== prevProps.value && props.value !== this.lastResult) {
      this.isInternalChange = true;
      this.store.setSchema(props.value);
      this.isInternalChange = false;
    }

    if (props.isMobile !== prevProps.isMobile) {
      this.store.setIsMobile(props.isMobile);
    }

    if (props.ctx !== prevProps.ctx) {
      this.store.setCtx(props.ctx);
    }

    if (props.appLocale !== prevProps.appLocale) {
      this.store.setAppLocale(props.appLocale);
    }

    if (props?.amisEnv?.replaceText !== prevProps?.amisEnv?.replaceText) {
      this.store.setAppCorpusData(props?.amisEnv?.replaceText);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('message', this.handleMessage);
    this.toDispose.forEach(fn => fn());
    this.toDispose = [];
    this.manager.dispose();
    setTimeout(() => destroy(this.store), 4);
  }


  handleKeyDown(e: KeyboardEvent) {

    if (this.props.isSubEditor) {

      return;
    }

    if (this.props.readonly) {
      return;
    }

    const manager = this.manager;
    const store = manager.store;

    if (
      (e.target as HTMLElement).tagName === 'BODY' &&
      (e.key === 'z' || e.key === 'Z') &&
      (e.metaKey || e.ctrlKey) &&
      e.shiftKey
    ) {
      e.preventDefault();
      this.redo();
      return;
    } else if (
      (e.target as HTMLElement).tagName === 'BODY' &&
      (e.key === 'z' || e.key === 'Z') &&
      (e.metaKey || e.ctrlKey)
    ) {
      e.preventDefault();
      this.undo();
      return;
    } else if (
      (e.target as HTMLElement).tagName === 'BODY' &&
      (e.key === 's' || e.key === 'S') &&
      (e.metaKey || e.ctrlKey)
    ) {
      e.preventDefault();
      this.save();
      return;
    } else if (
      (e.target as HTMLElement).tagName === 'BODY' &&
      (e.key === 'c' || e.key === 'C') &&
      (e.metaKey || e.ctrlKey)
    ) {

      this.copy();
      return;
    } else if (
      (e.target as HTMLElement).tagName === 'BODY' &&
      (e.key === 'v' || e.key === 'V') &&
      (e.metaKey || e.ctrlKey)
    ) {
      e.preventDefault();
      if (this.curCopySchemaData) {
        this.paste();
      }
      return;
    } else if (
      (e.target as HTMLElement).tagName === 'BODY' &&
      e.key === 'x' &&
      (e.metaKey || e.ctrlKey)
    ) {
      e.preventDefault();

      if (this.store.activeId) {
        const node = store.getNodeById(this.store.activeId);
        if (node && store.activeRegion) {
          toast.warning('区域节点不允许剪切。');
        } else if (store.isRootSchema(this.store.activeId)) {
          toast.warning('根节点不允许剪切。');
        } else if (node && node.moveable) {
          this.copy();
          this.manager.del(this.store.activeId);
        } else {
          toast.warning('当前元素不允许剪切。');
        }
      }
    } else if (
      (e.target as HTMLElement).tagName === 'BODY' &&
      e.key === 'p' &&
      (e.metaKey || e.ctrlKey)
    ) {

      e.preventDefault();
      this.preview();
    } else if (
      (e.target as HTMLElement).tagName === 'BODY' &&
      e.key === 'ArrowUp' &&
      (e.metaKey || e.ctrlKey)
    ) {
      e.preventDefault();

      if (this.store.activeId) {
        const node = store.getNodeById(this.store.activeId);
        if (node && node.canMoveUp) {
          this.manager.moveUp();
        } else {
          toast.warning('当前元素不能向上移动');
        }
      }
    } else if (
      (e.target as HTMLElement).tagName === 'BODY' &&
      e.key === 'ArrowDown' &&
      (e.metaKey || e.ctrlKey)
    ) {
      e.preventDefault();

      if (this.store.activeId) {
        const node = store.getNodeById(this.store.activeId);
        if (node && node.canMoveDown) {
          this.manager.moveDown();
        } else {
          toast.warning('当前元素不能向下移动');
        }
      }
    } else if (
      (e.target as HTMLElement).tagName === 'BODY' &&
      (e.key === 'Backspace' || e.key === 'Delete')
    ) {
      e.preventDefault();

      if (this.store.activeId) {
        const node = store.getNodeById(this.store.activeId);
        if (
          node &&
          store.activeRegion &&
          node.info?.regions &&
          node.info.regions.length > 1
        ) {
          toast.warning('区域节点不可以直接删除。');
        } else if (store.isRootSchema(this.store.activeId)) {
          toast.warning('根节点不允许删除。');
        } else if (node && (node.removable || node.removable === undefined)) {
          this.manager.del(this.store.activeId);
        } else {
          toast.warning('当前元素不允许删除。');
        }
      }
      return;
    }
  }

  handleMessage(event: any) {
    if (!event.data) {
      return;
    }

    if (
      event.data.type === 'amis-widget-register-event' &&
      event.data.editorPluginName
    ) {
      console.info(
        '[amis-editor] Dynamic response：',
        event.data.editorPluginName
      );
      this.manager.dynamicAddPlugin(event.data.editorPluginName);
    }
  }


  async handleContextMenu(e: React.MouseEvent<HTMLElement>) {
    e.persist();
    await closeContextMenus();
    let targetId: string = '';
    let region = '';


    if (this.store.activeId) {
      targetId = (e.target as HTMLElement)
        .closest(`[data-editor-id="${this.store.activeId}"]`)
        ?.getAttribute('data-editor-id')!;
    } else if (this.store.selections.length) {
      targetId = (e.target as HTMLElement)
        .closest(
          this.store.selections
            .map(item => `[data-editor-id="${item}"]`)
            .join(',')
        )
        ?.getAttribute('data-editor-id')!;
    }


    if (!targetId) {
      targetId = (e.target as HTMLElement)
        .closest('[data-editor-id]')
        ?.getAttribute('data-editor-id')!;
    }


    if (!targetId) {
      const node = (e.target as HTMLElement).closest(
        '[data-node-id]'
      ) as HTMLElement;
      targetId = node?.getAttribute('data-node-id')!;

      if (!targetId) {
        return;
      }

      region = node.getAttribute('data-node-region')!;
    }

    e.preventDefault();
    e.stopPropagation();
    const manager = this.manager;
    let offsetX = 0;
    let offsetY = 0;


    if ((e.target as HTMLElement).ownerDocument !== document) {
      const rect = manager.store.getIframe()!.getBoundingClientRect();
      offsetX = rect.left;
      offsetY = rect.top;
    }

    manager.openContextMenu(targetId, region, {
      x: window.scrollX + e.clientX + offsetX,
      y: window.scrollY + e.clientY + offsetY
    });
  }

  canUndo() {
    return this.store.canUndo;
  }

  canRedo() {
    return this.store.canRedo;
  }

  undo() {
    if (this.props.onUndo) {
      this.props.onUndo();
    } else {
      this.store.undo();
    }
  }

  redo() {
    if (this.props.onRedo) {
      this.props.onRedo();
    } else {
      this.store.redo();
    }
  }


  save() {
    if (this.props.onSave) {
      this.props.onSave();
    }
  }

  preview() {
    if (this.props.onPreview) {
      this.props.onPreview(!this.props.preview);
    }
  }


  copy() {
    if (this.store.activeId) {
      this.curCopySchemaData = this.store.getSchema(this.store.activeId);
    }
  }


  paste() {
    if (this.store.activeId && this.curCopySchemaData) {
      if (!this.curCopySchemaData) {

        return;
      }
      const curSimpleSchema = this.store.getSimpleSchema(
        this.curCopySchemaData
      );
      if (this.store.activeId === this.curCopySchemaData.$$id) {

        this.manager.appendSiblingSchema(reGenerateID(curSimpleSchema), false);
      } else {
        this.manager.addElem(reGenerateID(curSimpleSchema), false);
      }
    }
  }

  getToolbarContainer() {
    return this.mainRef.current;
  }

  render() {
    const {
      preview,
      isMobile,
      className,
      theme,
      appLocale,
      data,
      previewProps,
      autoFocus,
      isSubEditor,
      amisEnv,
      readonly
    } = this.props;

    return (
      <div
        ref={this.mainRef}
        className={cx(
          'ae-Editor',
          {
            preview: preview
          },
          className
        )}
      >
        <div
          className={cx(
            'ae-Editor-inner',
            isMobile && 'ae-Editor-inner--mobile'
          )}
          onContextMenu={this.handleContextMenu}
        >
          {!preview && !readonly && (
            <LeftPanels
              store={this.store}
              manager={this.manager}
              theme={theme}
            />
          )}

          <div className="ae-Main" ref={this.mainPreviewRef}>
            {!preview && (
              <div className="ae-Header">
                <Breadcrumb store={this.store} manager={this.manager} />
                <div
                  id="aeHeaderRightContainer"
                  className="ae-Header-Right-Container"
                ></div>
              </div>
            )}
            {isMobile && (
              <MobileDevTool
                container={this.mainPreviewRef.current}
                previewBody={this.mainPreviewBodyRef.current?.currentDom}
              />
            )}
            <Preview
              {...previewProps}
              editable={!preview}
              isMobile={isMobile}
              store={this.store}
              manager={this.manager}
              theme={theme}
              appLocale={appLocale}
              data={data}
              amisEnv={amisEnv}
              autoFocus={autoFocus}
              toolbarContainer={this.getToolbarContainer}
              readonly={readonly}
              ref={this.mainPreviewBodyRef}
            ></Preview>
          </div>

          {!preview && (
            <RightPanels
              store={this.store}
              manager={this.manager}
              theme={theme}
              appLocale={appLocale}
              amisEnv={amisEnv}
              readonly={readonly}
            />
          )}

          {!preview && <ContextMenuPanel store={this.store} />}
        </div>

        <SubEditor
          store={this.store}
          manager={this.manager}
          theme={theme}
          amisEnv={amisEnv}
          readonly={readonly}
        />
        <ScaffoldModal
          store={this.store}
          manager={this.manager}
          theme={theme}
        />
        <PopOverForm store={this.store} manager={this.manager} theme={theme} />
      </div>
    );
  }
}
