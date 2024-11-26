import {
  render,
  toast,
  resolveRenderer,
  Modal,
  Icon,
  resizeSensor,
  Spinner
} from 'amis';
import React, {Component} from 'react';
import cx from 'classnames';
import {autobind, guid, noop, reactionWithOldValue} from '../util';
import {clearStoresCache, RenderOptions} from 'amis-core';
import type {Schema} from 'amis';
import {EditorStoreType} from '../store/editor';
import {observer} from 'mobx-react';
import {findDOMNode} from 'react-dom';
import {EditorManager} from '../manager';
import HighlightBox from './HighlightBox';
import RegionHighlightBox from './RegionHLBox';
import {ErrorRenderer} from './base/ErrorRenderer';
import {isAlive} from 'mobx-state-tree';
import {findTree} from 'amis-core';
import BackTop from './base/BackTop';
import {reaction} from 'mobx';
import type {RendererConfig} from 'amis-core';
import IFramePreview from './IFramePreview';

export interface PreviewProps {
  theme?: string;
  appLocale?: string;
  amisEnv?: any;
  className?: string;
  editable?: boolean;
  isMobile?: boolean;
  store: EditorStoreType;
  manager: EditorManager;
  data?: any;
  autoFocus?: boolean;

  toolbarContainer?: () => any;

  readonly?: boolean;
  ref?: any;
}

export interface PreviewState {
  ready?: boolean;
}

@observer
export default class Preview extends Component<PreviewProps> {

  constructor(props: PreviewProps) {
    super(props);
    this.contentsRef = this.contentsRef.bind(this);
    this.handlePanelChange = this.handlePanelChange.bind(this);
    this.handeMouseDown = this.handeMouseDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleNavSwitch = this.handleNavSwitch.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handeMouseOver = this.handeMouseOver.bind(this);
    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleWidgetsDragEnter = this.handleWidgetsDragEnter.bind(this);
    this.getCurrentTarget = this.getCurrentTarget.bind(this);
    this.rendererResolver = this.rendererResolver.bind(this);
  }


  currentDom: HTMLElement | null = null;
  dialogReaction: any;
  env: RenderOptions = {
    ...this.props.manager.env,
    notify: (type, msg, conf) => {
      if (this.props.editable) {
        console.warn('[Notify]', type, msg);
        return;
      }

      toast[type]
        ? toast[type](msg, conf || (type === 'error' ? 'System error': 'System message'))
        : console.warn('[Notify]', type, msg);
    },
    theme: this.props.theme,
    session: `preview-${this.props.manager.id}`,
    rendererResolver: this.rendererResolver.bind(this)
  };

  doingSelection = false;

  componentDidMount() {
    this.currentDom = findDOMNode(this) as HTMLElement;

    if (this.currentDom) {
      this.currentDom.addEventListener('mouseleave', this.handleMouseLeave);
      this.currentDom.addEventListener('mousemove', this.handleMouseMove);
      this.currentDom.addEventListener('click', this.handleClick, true);
      this.currentDom.addEventListener('mouseover', this.handeMouseOver);
      this.currentDom.addEventListener('mousedown', this.handeMouseDown);
    }


    this.props.manager.on('after-update', this.handlePanelChange);
  }

  componentWillUnmount() {
    if (this.currentDom) {
      this.currentDom.removeEventListener('mouseleave', this.handleMouseLeave);
      this.currentDom.removeEventListener('mousemove', this.handleMouseMove);
      this.currentDom.removeEventListener('click', this.handleClick, true);
      this.currentDom.removeEventListener('mouseover', this.handeMouseOver);
      this.currentDom.removeEventListener('mousedown', this.handeMouseDown);
    }
    this.props.manager.off('after-update', this.handlePanelChange);
    this.dialogReaction?.();

    this.scrollLayer?.removeEventListener('scroll', this.handlePanelChange);

    setTimeout(() => clearStoresCache([this.env.session!]), 500);
  }

  unSensor?: () => void;
  layer?: HTMLDivElement;
  scrollLayer?: HTMLDivElement;

  contentsRef(ref: HTMLDivElement | null) {
    if (ref) {
      this.layer = ref.parentElement!.querySelector(
        '.ae-Preview-widgets'
      ) as HTMLDivElement;

      this.unSensor = resizeSensor(ref, this.handlePanelChange);
      if (this.props.isMobile) {
        ref = ref.firstChild as HTMLDivElement;
      }

      this.scrollLayer = ref as HTMLDivElement;
      this.scrollLayer.removeEventListener('scroll', this.handlePanelChange);
      this.scrollLayer.addEventListener('scroll', this.handlePanelChange);
      this.props.store.setLayer(this.layer);
    } else {
      delete this.scrollLayer;
      delete this.layer;
      this.unSensor?.();
      delete this.unSensor;
    }
  }


  readonly unReaction: () => void = reactionWithOldValue(
    () => [this.getHighlightNodes(), this.props.store.activeId] as any,
    ([ids], oldValue) => {
      const store = this.props.store;
      // requestAnimationFrame(() => {
      //   this.calculateHighlightBox(ids);
      // });
      store.activeHighlightNodes(ids);
      let oldIds = oldValue?.[0];

      if (Array.isArray(oldIds)) {
        oldIds = oldIds.filter(id => !~ids.indexOf(id));
        store.deActiveHighlightNodes(oldIds);
        // store.resetHighlightBox(oldIds);
      }
    }
  );

  handlePanelChange() {
    if (this.layer && this.scrollLayer) {
      requestAnimationFrame(() => {
        this.layer!.style.cssText += `transform: translate(0, -${
          this.scrollLayer!.scrollTop
        }px);`;
      });
    }

    requestAnimationFrame(() =>
      this.calculateHighlightBox(this.getHighlightNodes())
    );
  }

  getHighlightNodes(): any[] {
    const store = this.props.store;
    return store.highlightNodes.map(item => item.id) as any[];
  }

  calculateHighlightBox(ids: Array<string>) {
    const store = this.props.store;
    this.layer && store.calculateHighlightBox(ids);
  }

  handeMouseDown(e: MouseEvent) {
    const isLeftButton =
      (e.button === 1 && window.event !== null) || e.button === 0;
    if (!this.props.editable || !isLeftButton || e.defaultPrevented) return;

    if (
      e.defaultPrevented ||
      (e.target as HTMLElement)?.closest('[draggable]')
    ) {
      return;
    }

    const dom = this.layer as HTMLElement;
    if (!dom) {
      return;
    }

    let cursor: HTMLDivElement | null = null;
    const rect = dom.getBoundingClientRect();
    const startX = e.pageX;
    const startY = e.pageY;
    const x = startX - rect.left;
    const y = startY - rect.top;

    let onMove = (e: MouseEvent) => {
      if (!cursor) {
        cursor = document.createElement('div');
        cursor.classList.add('ae-Editor-selectionCursor');
        dom.appendChild(cursor);
      }

      this.doingSelection = true;
      const w = e.pageX - startX;
      const h = e.pageY - startY;
      cursor.style.cssText = `left: ${x + Math.min(w, 0)}px; top: ${
        y + Math.min(h, 0)
      }px; width: ${Math.abs(w)}px; height: ${Math.abs(h)}px;`;
    };
    let onUp = (e: MouseEvent) => {
      this.doingSelection = false;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      cursor && dom.removeChild(cursor);

      const w = e.pageX - startX;
      const h = e.pageY - startY;
      const rect = {
        x: x + Math.min(w, 0),
        y: y + Math.min(h, 0),
        w: Math.abs(w),
        h: Math.abs(h)
      };

      if (rect.w < 10 && rect.h < 10) {
        return;
      }


      let captureClick = (e: MouseEvent) => {
        window.removeEventListener('click', captureClick, true);
        e.preventDefault();
        e.stopPropagation();
      };
      window.addEventListener('click', captureClick, true);
      setTimeout(
        () => window.removeEventListener('click', captureClick, true),
        350
      );

      this.doSelection(rect);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }


  doSelection(rect: {x: number; y: number; w: number; h: number}) {
    const layer = this.layer;
    const dom = findDOMNode(this) as HTMLElement;
    if (!layer || !dom) {
      return;
    }

    const selections: Array<HTMLElement> = [];
    const layerRect = layer.getBoundingClientRect();
    const frameRect = {
      left: rect.x + layerRect.left,
      top: rect.y + layerRect.top,
      width: rect.w,
      height: rect.h,
      right: rect.x + layerRect.left + rect.w,
      bottom: rect.y + layerRect.top + rect.h
    };
    const nodes = dom.querySelectorAll(`[data-editor-id]`);
    [].slice.apply(nodes).forEach((node: HTMLElement) => {
      if (selections.some(container => container.contains(node))) {
        return;
      }

      const nodeRect = node.getBoundingClientRect();


      if (
        frameRect.left <= nodeRect.left &&
        frameRect.top <= nodeRect.top &&
        frameRect.right >= nodeRect.right &&
        frameRect.bottom >= nodeRect.bottom
      ) {
        ~selections.indexOf(node) || selections.push(node);
      }
    });
    const ids = selections
      .map(item => item.getAttribute('data-editor-id')!)
      .filter((id: string, idx, list) => list.indexOf(id) === idx);
    ids.length && this.props.manager.setSelection(ids);
  }

  handleClick(e: MouseEvent) {
    const store = this.props.store;
    const target = (e.target as HTMLElement).closest(`[data-editor-id]`);

    if ((e.target as HTMLElement).closest('.ae-editor-action-btn')) {

      return;
    }

    if (e.defaultPrevented) {
      e.stopPropagation();
      return;
    }

    if (target) {
      const curActiveId = target.getAttribute('data-editor-id');
      let curRegion: string = '';


      const targetRegion = (e.target as HTMLElement).closest(
        `[data-region-host]`
      );
      if (targetRegion) {

        const curRegionId = targetRegion.getAttribute('data-region-host');
        if (
          curRegionId &&
          curRegionId === curActiveId &&
          targetRegion.getAttribute('data-region')
        ) {

          curRegion = targetRegion.getAttribute('data-region')!;
        }
      }

      e.metaKey
        ? this.props.manager.toggleSelection(curActiveId!)
        : store.setActiveId(curActiveId!, curRegion);
    }

    if (!this.layer?.contains(e.target as HTMLElement) && this.props.editable) {

      const event = this.props.manager.trigger('prevent-click', {
        data: e
      });

      if (!event.prevented && !event.stoped) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }

  handleNavSwitch(id: string) {
    const store = this.props.store;
    store.setActiveId(id);
  }

  handleMouseMove(e: MouseEvent) {
    if (this.doingSelection || this.props.manager.disableHover) {
      return;
    }

    const store = this.props.store;
    const dom = e.target as HTMLElement;

    if (this.layer?.contains(dom)) {
      return;
    }

    if ((e.target as HTMLElement).closest('.ignore-hover-elem')) {

      return;
    }

    const target = dom.closest(`[data-editor-id]`);

    if (target) {
      const curHoverId = target.getAttribute('data-editor-id');
      let curHoverRegion: string = '';


      const targetRegion = (e.target as HTMLElement).closest(
        `[data-region-host]`
      );
      if (targetRegion) {

        const curRegionId = targetRegion.getAttribute('data-region-host');
        if (
          curRegionId &&
          curRegionId === curHoverId &&
          targetRegion.getAttribute('data-region')
        ) {

          curHoverRegion = targetRegion.getAttribute('data-region')!;
        }
      }

      store.setMouseMoveRegion(curHoverRegion);
      store.setHoverId(curHoverId!);
    }
  }

  handleMouseLeave() {
    const store = this.props.store;
    store.setMouseMoveRegion('');
    store.setHoverId('');
  }

  handeMouseOver(e: MouseEvent) {
    if (this.props.editable) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  handleDragEnter(e: React.DragEvent) {
    if (!this.props.editable) {

      return;
    }
    const manager = this.props.manager;
    manager.dnd.dragEnter(e.nativeEvent);
  }

  handleDragLeave(e: React.DragEvent) {
    if (!this.props.editable) {
      return;
    }
    const manager = this.props.manager;
    manager.dnd.dragLeave(e.nativeEvent);
  }

  handleDragOver(e: React.DragEvent) {
    if (!this.props.editable) {
      return;
    }
    const manager = this.props.manager;
    manager.dnd.dragOver(e.nativeEvent);
  }

  handleDrop(e: React.DragEvent) {
    if (!this.props.editable) {
      return;
    }
    const manager = this.props.manager;
    manager.dnd.drop(e.nativeEvent);
  }

  handleWidgetsDragEnter(e: React.DragEvent) {
    const target = e.target as HTMLElement;
    const dom = target.closest(`[data-node-id][data-node-region].region-tip`);

    if (!dom) {
      return;
    }

    e.preventDefault();
    const manager = this.props.manager;
    const id = dom.getAttribute('data-node-id')!;
    const region = dom.getAttribute('data-node-region')!;

    id && region && manager.dnd.switchToRegion(e.nativeEvent, id, region);
  }

  getCurrentTarget() {
    const isMobile = this.props.isMobile;
    if (isMobile) {
      // @ts-ignore
      return this.currentDom.querySelector(
        '.ae-Preview-inner'
      ) as HTMLDivElement;
    } else {
      // @ts-ignore
      return this.currentDom.querySelector(
        '.ae-Preview-body'
      ) as HTMLDivElement;
    }
  }

  rendererResolver(path: string, schema: Schema, props: any) {
    const {editable, manager} = this.props;

    let renderer: RendererConfig = resolveRenderer(path, schema)!;
    if (editable === false) {
      return renderer;
    }

    renderer = renderer || {
      name: 'error',
      test: () => true,
      component: ErrorRenderer
    };

    let info = manager.getEditorInfo(renderer!, path, schema);

    info &&
      (renderer = {
        ...renderer,
        component: manager.makeWrapper(info, renderer)
      });

    return renderer;
  }

  render() {
    const {
      className,
      editable,
      store,
      manager,
      amisEnv,
      theme,
      isMobile,
      autoFocus,
      toolbarContainer,
      appLocale,
      ref,
      ...rest
    } = this.props;

    const env = {
      ...this.env,
      ...amisEnv
    };

    return (
      <div
        id="editor-preview-body"
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
        className={cx(
          'ae-Preview',
          'AMISCSSWrapper',
          className,
          isMobile ? 'is-mobile-body' : 'is-pc-body'
        )}
        ref={ref}
      >
        <div
          key={
           isMobile
              ? 'mobile-body'
              : 'pc-body'
          }
          className={cx(
            'ae-Preview-body',
            className,
            editable ? 'is-edting' : '',
            isMobile ? 'is-mobile' : 'is-pc hoverShowScrollBar'
          )}
          ref={this.contentsRef}
        >
          <div className="ae-Preview-inner">
            {!store.ready ? (
              <div className="ae-Preview-loading">
                <Spinner overlay size="lg" />
              </div>
            ) : isMobile ? (
              <IFramePreview
                {...rest}
                key="mobile"
                editable={editable}
                store={store}
                env={env}
                manager={manager}
                autoFocus={autoFocus}
                appLocale={appLocale}
              ></IFramePreview>
            ) : (
              <SmartPreview
                {...rest}
                editable={editable}
                autoFocus={autoFocus}
                store={store}
                env={env}
                manager={manager}
                key="pc"
                appLocale={appLocale}
              />
            )}
          </div>
          {this.currentDom && (
            <BackTop
              key={isMobile ? 'mobile-back-up' : 'pc-back-up'}
              className="ae-editor-action-btn"
              target={this.getCurrentTarget.bind(this)}
              onClick={(e: any) => {
                console.log(e);
              }}
            >
              <Icon icon="back-up" className="back-top-icon" />
            </BackTop>
          )}
        </div>

        <div
          onDragEnter={this.handleWidgetsDragEnter}
          className="ae-Preview-widgets"
          id="aePreviewHighlightBox"
        >
          {store.highlightNodes.map(node => (
            <HighlightBox
              node={node}
              key={node.id}
              store={store}
              id={node.id}
              title={node.label}
              toolbarContainer={toolbarContainer}
              onSwitch={this.handleNavSwitch}
              manager={manager}
              readonly={this.props.readonly}
            >
              {node.childRegions.map(region =>
                !node.memberImmutable(region.region) &&
                !this.props.readonly &&
                store.isRegionActive(region.id, region.region) ? (
                  <RegionHighlightBox
                    manager={manager}
                    key={region.region}
                    store={store}
                    node={region}
                    id={region.id}
                    name={region.region}
                    title={region.label}
                    preferTag={region.preferTag}
                    isOnlyChildRegion={node.childRegions.length === 1}
                  />
                ) : null
              )}
            </HighlightBox>
          ))}
        </div>
      </div>
    );
  }
}


export interface SmartPreviewProps {
  editable?: boolean;
  autoFocus?: boolean;
  store: EditorStoreType;
  env: any;
  data?: any;
  manager: EditorManager;

  appLocale?: string;
}
@observer
class SmartPreview extends React.Component<SmartPreviewProps> {

  constructor(props: SmartPreviewProps) {
    super(props);
    this.getDialogMountRef = this.getDialogMountRef.bind(this);
  }


  dialogMountRef: React.RefObject<HTMLDivElement> = React.createRef();

  componentDidMount() {
    const store = this.props.store;

    if (this.props.autoFocus) {


      setTimeout(() => {
        if (isAlive(store)) {
          const first = findTree(
            store.outline,
            item => !item.isRegion && item.clickable
          );
          if (first && isAlive(store)) {
            let region = first.childRegions.find(
              (item: any) => item.region === 'body'
            )?.region;
            region =
              region ?? first.childRegions.find((i: any) => i.region)?.region;
            store.setActiveId(first.id, region);
          }
        }
      }, 350);
    } else {
      this.props.manager.buildRenderersAndPanels();
    }
  }

  componentDidUpdate(prevProps: SmartPreviewProps) {
    const props = this.props;

    if (props.editable !== prevProps.editable) {
      if (props.editable) {

        this.props.manager.trigger('preview2editor', {
          data: this.props.manager
        });
      }
    }
  }

  getDialogMountRef() {
    return this.dialogMountRef.current;
  }

  render() {
    const {editable, store, appLocale, autoFocus, env, data, manager, ...rest} =
      this.props;

    return (

      <div ref={this.dialogMountRef} className="ae-Dialog-preview-mount-node">
        {render(
          editable ? store.filteredSchema : store.filteredSchemaForPreview,
          {
            ...rest,
            key: editable ? 'edit-mode' : 'preview-mode',
            theme: env.theme,
            data: data,
            context: store.ctx,
            locale: appLocale,
            editorDialogMountNode: this.getDialogMountRef
          },
          env
        )}
      </div>
    );
  }
}
