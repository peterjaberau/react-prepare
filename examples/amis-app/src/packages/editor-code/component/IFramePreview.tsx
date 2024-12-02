import React, { useEffect, useRef, useCallback, useState } from 'react';
import { Frame, useFrame } from 'react-frame-component';
import { Button } from 'antd'; // Example of using antd
import { CloseOutlined } from '@ant-design/icons'; // Example of using antd icons
import { resizeSensor } from 'amis';

interface IFramePreviewProps {
  editable?: boolean;
  autoFocus?: boolean;
  env: any;
  data?: any;
  appLocale?: string;
}

const IFramePreview: React.FC<IFramePreviewProps> = ({
                                                       editable,
                                                       autoFocus,
                                                       env,
                                                       data,
                                                       appLocale,
                                                       ...rest
                                                     }) => {
  const [iframeContent, setIframeContent] = useState('');
  const dialogMountRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'))
      .map(el => el.outerHTML)
      .join('');
    const initialContent = `<!DOCTYPE html><html><head>${styles}</head><body><div class="ae-IFramePreview AMISCSSWrapper"></div></body></html>`;
    setIframeContent(initialContent);
  }, []);

  useEffect(() => {
    if (autoFocus) {
      setTimeout(() => {
        // Logic to set active ID or perform actions after a delay
      }, 350);
    } else {
      // Logic to build renderers and panels
    }
  }, [autoFocus]);

  const iframeRefFunc = useCallback((iframe: HTMLIFrameElement) => {
    iframeRef.current = iframe;
    // Logic to set iframe in store if needed
  }, []);

  const getModalContainer = useCallback(() => {
    // Logic to get modal container
    return document.body;
  }, []);

  const isMobile = useCallback(() => {
    return true;
  }, []);

  const getDialogMountRef = useCallback(() => {
    return dialogMountRef.current;
  }, []);

  const iframeContentDidMount = useCallback(() => {
    const body = iframeRef.current?.contentWindow?.document.body;
    body?.classList.add('is-modalOpened');
    body?.classList.add('ae-PreviewIFrameBody');
  }, []);

  return (
    <Frame
      className={'ae-PreviewIFrame'}
      initialContent={iframeContent}
      ref={iframeRefFunc}
      contentDidMount={iframeContentDidMount}
    >
      <InnerComponent editable={editable} />
      <div ref={dialogMountRef} className="ae-Dialog-preview-mount-node">
        {/* Render logic here */}
        <InnerSvgSpirit />
      </div>
    </Frame>
  );
};

const InnerComponent: React.FC<{ editable?: boolean }> = ({ editable }) => {
  const { document: doc } = useFrame();
  const editableRef = useRef(editable);

  const handleMouseLeave = useCallback(() => {
    // Logic to handle mouse leave
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Logic to handle mouse move
  }, []);

  const handleBodyClick = useCallback(() => {
    // Logic to close context menus
  }, []);

  const handleClick = useCallback((e: MouseEvent) => {
    // Logic to handle click
  }, []);

  const handeMouseOver = useCallback((e: MouseEvent) => {
    if (editableRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, []);

  const syncIframeHeight = useCallback(() => {
    const iframe = iframeRef.current!;
    iframe.style.cssText += `height: ${doc!.body.offsetHeight}px`;
  }, [doc]);

  useEffect(() => {
    // Logic to set document in store
    const layer = doc?.querySelector('.frame-content') as HTMLElement;

    doc!.addEventListener('click', handleBodyClick);
    layer!.addEventListener('mouseleave', handleMouseLeave);
    layer!.addEventListener('mousemove', handleMouseMove);
    layer!.addEventListener('click', handleClick, true);
    layer!.addEventListener('mouseover', handeMouseOver);

    const unSensor = resizeSensor(doc!.body, () => {
      syncIframeHeight();
    });
    syncIframeHeight();

    return () => {
      doc!.removeEventListener('click', handleBodyClick);
      layer!.removeEventListener('mouseleave', handleMouseLeave);
      layer!.removeEventListener('mousemove', handleMouseMove);
      layer!.removeEventListener('click', handleClick);
      layer!.removeEventListener('mouseover', handeMouseOver);

      // Logic to reset document in store
      unSensor();
    };
  }, [doc, handleBodyClick, handleMouseLeave, handleMouseMove, handleClick, handeMouseOver, syncIframeHeight]);

  useEffect(() => {
    doc
      ?.querySelector('body>div:first-child')
      ?.classList.toggle('is-editing', editable);
    editableRef.current = editable;
  }, [editable, doc]);

  return null;
};

const InnerSvgSpirit: React.FC = () => {
  // @ts-ignore Using platform variable
  let spiriteIcons = window.spiriteIcons;
  if (spiriteIcons) {
    return (
      <div
        id="amis-icon-manage-mount-node"
        style={{ display: 'none' }}
        dangerouslySetInnerHTML={{ __html: spiriteIcons }}
      ></div>
    );
  } else {
    return null;
  }
};

export default IFramePreview;
