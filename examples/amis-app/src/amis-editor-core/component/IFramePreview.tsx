import { observer } from "mobx-react"
import { EditorStoreType } from "../store/editor"
import React, { memo } from "react"
import { EditorManager } from "../manager"
import Frame, { useFrame } from "react-frame-component"
import { closeContextMenus, findTree, render, resizeSensor } from "amis"
import { autobind } from "core-decorators";
import { isAlive } from "mobx-state-tree"

export interface IFramePreviewProps {
  editable?: boolean
  autoFocus?: boolean
  store: EditorStoreType
  env: any
  data?: any
  manager: EditorManager

  appLocale?: string
}
@observer
export default class IFramePreview extends React.Component<IFramePreviewProps> {
  initialContent: string = '';
  dialogMountRef: React.RefObject<HTMLDivElement> = React.createRef();
  iframeRef: HTMLIFrameElement | null = null;
  constructor(props: IFramePreviewProps) {
    super(props);

    const styles = [].slice
        .call(document.querySelectorAll('link[rel="stylesheet"], style'))
        .map((el: any) => {
          return el.outerHTML;
        });
    styles.push(
        `<style>body {height:auto !important;min-height:100%;overflow-y:auto !important;display: flex;flex-direction: column;}</style>`
    );

    this.initialContent = `<!DOCTYPE html><html><head>${styles.join(
        ''
    )}</head><body><div class="ae-IFramePreview AMISCSSWrapper"></div></body></html>`;
  }

  componentDidMount() {
    if (this.props.autoFocus) {


      const store = this.props.manager.store;
      setTimeout(() => {
        if (isAlive(store)) {
          const first = findTree(
              store.outline,
              item => !item.isRegion && item.clickable
          );

          first && store.setActiveId(first.id);
        }
      }, 350);
    } else {
      this.props.manager.buildRenderersAndPanels();
    }
  }

  @autobind
  iframeRefFunc(iframe: any) {
    const store = this.props.store;
    this.iframeRef = iframe;
    isAlive(store) && store.setIframe(iframe);
  }

  @autobind
  getModalContainer() {
    const store = this.props.store;
    return store.getDoc().body;
  }

  @autobind
  isMobile() {
    return true;
  }

  @autobind
  getDialogMountRef() {
    return this.dialogMountRef.current;
  }

  @autobind
  iframeContentDidMount() {
    const body = this.iframeRef?.contentWindow?.document.body;
    body?.classList.add('is-modalOpened');
    body?.classList.add('ae-PreviewIFrameBody');
  }

  render() {
    const {editable, store, appLocale, autoFocus, env, data, manager, ...rest} =
        this.props;

    return (
        <Frame
            className={'ae-PreviewIFrame'}
            initialContent={this.initialContent}
            ref={this.iframeRefFunc}
            contentDidMount={this.iframeContentDidMount}
        >
          <InnerComponent store={store} editable={editable} manager={manager} />
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
                {
                  ...env,
                  session: `${env.session}-iframe-preview`,
                  useMobileUI: true,
                  isMobile: this.isMobile,
                  getModalContainer: this.getModalContainer
                }
            )}
            <InnerSvgSpirit />
          </div>
        </Frame>
    );
  }
}

function InnerComponent({
  store,
  editable,
  manager,
}: {
  store: EditorStoreType
  editable?: boolean
  manager: EditorManager
}) {
  // Hook returns iframe's window and document instances from Frame context
  const { document: doc } = useFrame()
  const editableRef = React.useRef(editable)

  const handleMouseLeave = React.useCallback(() => {
    store.setHoverId("")
  }, [])

  const handleMouseMove = React.useCallback((e: MouseEvent) => {
    const dom = e.target as HTMLElement
    const target = dom.closest(`[data-editor-id]`)

    if (target) {
      store.setHoverId(target.getAttribute("data-editor-id")!)
    }
  }, [])

  const handleBodyClick = React.useCallback(() => {
    closeContextMenus()
  }, [])

  const handleClick = React.useCallback((e: MouseEvent) => {
    const target = (e.target as HTMLElement).closest(`[data-editor-id]`)
    closeContextMenus()

    if (e.defaultPrevented) {
      return
    }

    if (target) {
      store.setActiveId(target.getAttribute("data-editor-id")!)
    }

    if (editableRef.current) {
      const event = manager.trigger("prevent-click", {
        data: e,
      })

      if (!event.prevented && !event.stoped) {
        e.preventDefault()
        e.stopPropagation()
      }
    }
  }, [])

  const handeMouseOver = React.useCallback((e: MouseEvent) => {
    if (editableRef.current) {
      e.preventDefault()
      e.stopPropagation()
    }
  }, [])

  const syncIframeHeight = React.useCallback(() => {
    const iframe = manager.store.getIframe()!
    iframe.style.cssText += `height: ${doc!.body.offsetHeight}px`
  }, [])

  React.useEffect(() => {
    store.setDoc(doc)
    const layer = doc?.querySelector(".frame-content") as HTMLElement

    doc!.addEventListener("click", handleBodyClick)
    layer!.addEventListener("mouseleave", handleMouseLeave)
    layer!.addEventListener("mousemove", handleMouseMove)
    layer!.addEventListener("click", handleClick, true)
    layer!.addEventListener("mouseover", handeMouseOver)

    const unSensor = resizeSensor(doc!.body, () => {
      syncIframeHeight()
    })
    syncIframeHeight()

    return () => {
      doc!.removeEventListener("click", handleBodyClick)
      layer!.removeEventListener("mouseleave", handleMouseLeave)
      layer!.removeEventListener("mousemove", handleMouseMove)
      layer!.removeEventListener("click", handleClick)
      layer!.removeEventListener("mouseover", handeMouseOver)

      store.setDoc(document)
      unSensor()
    }
  }, [doc])

  React.useEffect(() => {
    doc?.querySelector("body>div:first-child")?.classList.toggle("is-edting", editable)
    editableRef.current = editable
  }, [editable])

  return null
}

const InnerSvgSpirit = memo(() => {
  // @ts-ignore 这里取的是平台的变量
  let spiriteIcons = window.spiriteIcons
  if (spiriteIcons) {
    return (
      <div
        id="amis-icon-manage-mount-node"
        style={{ display: "none" }}
        dangerouslySetInnerHTML={{ __html: spiriteIcons }}
      ></div>
    )
  } else {
    return null
  }
})
