import React, { useEffect, useRef, useState, useCallback } from 'react';
import { render, toast, resolveRenderer } from 'amis';
import { Spin, message } from 'antd';
import classNames from 'classnames';
import { findDOMNode } from 'react-dom';
import { EditorManager } from '../manager';
import HighlightBox from './HighlightBox';
import RegionHighlightBox from './RegionHLBox';
import { ErrorRenderer } from './base/ErrorRenderer';
import BackTop from './base/BackTop';
import IFramePreview from './IFramePreview';

export interface PreviewProps {
  theme?: string;
  appLocale?: string;
  amisEnv?: any;
  className?: string;
  editable?: boolean;
  isMobile?: boolean;
  store: any; // Replace with appropriate type
  manager: EditorManager;
  data?: any;
  autoFocus?: boolean;
  toolbarContainer?: () => any;
  readonly?: boolean;
}

const Preview: React.FC<PreviewProps> = ({
                                           theme,
                                           appLocale,
                                           amisEnv,
                                           className,
                                           editable,
                                           isMobile,
                                           store,
                                           manager,
                                           data,
                                           autoFocus,
                                           toolbarContainer,
                                           readonly
                                         }) => {
  const [ready, setReady] = useState(false);
  const [highlightNodes, setHighlightNodes] = useState<string[]>([]);
  const layerRef = useRef<HTMLDivElement | null>(null);
  const scrollLayerRef = useRef<HTMLDivElement | null>(null);

  const env = {
    ...manager.env,
    notify: (type: string, msg: string, conf: any) => {
      if (editable) {
        console.warn('[Notify]', type, msg);
        return;
      }
      toast[type]
        ? toast[type](msg, conf || (type === 'error' ? 'System Error' : 'System Message'))
        : console.warn('[Notify]', type, msg);
    },
    theme,
    session: `preview-${manager.id}`,
    rendererResolver: useCallback((path: string, schema: any, props: any) => {
      let renderer = resolveRenderer(path, schema) || {
        name: 'error',
        test: () => true,
        component: ErrorRenderer
      };
      const info = manager.getEditorInfo(renderer, path, schema);
      if (info) {
        renderer = {
          ...renderer,
          component: manager.makeWrapper(info, renderer)
        };
      }
      return renderer;
    }, [manager])
  };

  useEffect(() => {
    const currentDom = findDOMNode(layerRef.current) as HTMLElement;
    if (currentDom) {
      currentDom.addEventListener('mouseleave', handleMouseLeave);
      currentDom.addEventListener('mousemove', handleMouseMove);
      currentDom.addEventListener('click', handleClick, true);
      currentDom.addEventListener('mouseover', handleMouseOver);
      currentDom.addEventListener('mousedown', handleMouseDown);
      manager.on('after-update', handlePanelChange);
    }

    return () => {
      if (currentDom) {
        currentDom.removeEventListener('mouseleave', handleMouseLeave);
        currentDom.removeEventListener('mousemove', handleMouseMove);
        currentDom.removeEventListener('click', handleClick, true);
        currentDom.removeEventListener('mouseover', handleMouseOver);
        currentDom.removeEventListener('mousedown', handleMouseDown);
        manager.off('after-update', handlePanelChange);
      }
    };
  }, [manager]);

  const handlePanelChange = useCallback(() => {
    if (layerRef.current && scrollLayerRef.current) {
      requestAnimationFrame(() => {
        layerRef.current!.style.cssText += `transform: translate(0, -${scrollLayerRef.current!.scrollTop}px);`;
      });
    }
    requestAnimationFrame(() => calculateHighlightBox(getHighlightNodes()));
  }, []);

  const getHighlightNodes = useCallback(() => {
    return store.highlightNodes.map((item: any) => item.id);
  }, [store]);

  const calculateHighlightBox = useCallback((ids: string[]) => {
    if (layerRef.current) {
      store.calculateHighlightBox(ids);
    }
  }, [store]);

  const handleMouseLeave = useCallback(() => {
    store.setMouseMoveRegion('');
    store.setHoverId('');
  }, [store]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (manager.disableHover) {
      return;
    }
    const dom = e.target as HTMLElement;
    if (layerRef.current?.contains(dom)) {
      return;
    }
    const target = dom.closest(`[data-editor-id]`);
    if (target) {
      const curHoverId = target.getAttribute('data-editor-id');
      let curHoverRegion = '';
      const targetRegion = (e.target as HTMLElement).closest(`[data-region-host]`);
      if (targetRegion) {
        const curRegionId = targetRegion.getAttribute('data-region-host');
        if (curRegionId && curRegionId === curHoverId && targetRegion.getAttribute('data-region')) {
          curHoverRegion = targetRegion.getAttribute('data-region')!;
        }
      }
      store.setMouseMoveRegion(curHoverRegion);
      store.setHoverId(curHoverId!);
    }
  }, [manager, store]);

  const handleClick = useCallback((e: MouseEvent) => {
    const target = (e.target as HTMLElement).closest(`[data-editor-id]`);
    if (target) {
      const curActiveId = target.getAttribute('data-editor-id');
      let curRegion = '';
      const targetRegion = (e.target as HTMLElement).closest(`[data-region-host]`);
      if (targetRegion) {
        const curRegionId = targetRegion.getAttribute('data-region-host');
        if (curRegionId && curRegionId === curActiveId && targetRegion.getAttribute('data-region')) {
          curRegion = targetRegion.getAttribute('data-region')!;
        }
      }
      e.metaKey ? manager.toggleSelection(curActiveId!) : store.setActiveId(curActiveId!, curRegion);
    }
    if (!layerRef.current?.contains(e.target as HTMLElement) && editable) {
      const event = manager.trigger('prevent-click', { data: e });
      if (!event.prevented && !event.stoped) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }, [editable, manager, store]);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    if (editable) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, [editable]);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    const isLeftButton = (e.button === 1 && window.event !== null) || e.button === 0;
    if (!editable || !isLeftButton || e.defaultPrevented) return;
    if (e.defaultPrevented || (e.target as HTMLElement)?.closest('[draggable]')) {
      return;
    }
    const dom = layerRef.current as HTMLElement;
    if (!dom) {
      return;
    }
    let cursor: HTMLDivElement | null = null;
    const rect = dom.getBoundingClientRect();
    const startX = e.pageX;
    const startY = e.pageY;
    const x = startX - rect.left;
    const y = startY - rect.top;
    const onMove = (e: MouseEvent) => {
      if (!cursor) {
        cursor = document.createElement('div');
        cursor.classList.add('ae-Editor-selectionCursor');
        dom.appendChild(cursor);
      }
      const w = e.pageX - startX;
      const h = e.pageY - startY;
      cursor.style.cssText = `left: ${x + Math.min(w, 0)}px; top: ${y + Math.min(h, 0)}px; width: ${Math.abs(w)}px; height: ${Math.abs(h)}px;`;
    };
    const onUp = (e: MouseEvent) => {
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
      const captureClick = (e: MouseEvent) => {
        window.removeEventListener('click', captureClick, true);
        e.preventDefault();
        e.stopPropagation();
      };
      window.addEventListener('click', captureClick, true);
      setTimeout(() => window.removeEventListener('click', captureClick, true), 350);
      doSelection(rect);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }, [editable]);

  const doSelection = useCallback((rect: { x: number; y: number; w: number; h: number }) => {
    const dom = findDOMNode(layerRef.current) as HTMLElement;
    if (!layerRef.current || !dom) {
      return;
    }
    const selections: Array<HTMLElement> = [];
    const layerRect = layerRef.current.getBoundingClientRect();
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
    ids.length && manager.setSelection(ids);
  }, [manager]);

  return (
    <div
      id="editor-preview-body"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={classNames(
        'ae-Preview',
        'AMISCSSWrapper',
        className,
        isMobile ? 'is-mobile-body' : 'is-pc-body'
      )}
      ref={layerRef}
    >
      <div
        key={isMobile ? 'mobile-body' : 'pc-body'}
        className={classNames(
          'ae-Preview-body',
          className,
          editable ? 'is-editing' : '',
          isMobile ? 'is-mobile' : 'is-pc hoverShowScrollBar'
        )}
        ref={scrollLayerRef}
      >
        <div className="ae-Preview-inner">
          {!ready ? (
            <div className="ae-Preview-loading">
              <Spin size="large" />
            </div>
          ) : isMobile ? (
            <IFramePreview
              editable={editable}
              store={store}
              env={env}
              manager={manager}
              autoFocus={autoFocus}
              appLocale={appLocale}
            />
          ) : (
            <SmartPreview
              editable={editable}
              autoFocus={autoFocus}
              store={store}
              env={env}
              manager={manager}
              appLocale={appLocale}
            />
          )}
        </div>
        {layerRef.current && (
          <BackTop
            className="ae-editor-action-btn"
            target={() => scrollLayerRef.current}
            onClick={(e: any) => {
              console.log(e);
            }}
          >
            <Icon icon="back-up" className="back-top-icon" />
          </BackTop>
        )}
      </div>

      <div
        onDragEnter={handleWidgetsDragEnter}
        className="ae-Preview-widgets"
        id="aePreviewHighlightBox"
      >
        {highlightNodes.map(node => (
          <HighlightBox
            node={node}
            key={node.id}
            store={store}
            id={node.id}
            title={node.label}
            toolbarContainer={toolbarContainer}
            onSwitch={handleNavSwitch}
            manager={manager}
            readonly={readonly}
          >
            {node.childRegions.map(region =>
              !node.memberImmutable(region.region) &&
              !readonly &&
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
};

export default Preview;
