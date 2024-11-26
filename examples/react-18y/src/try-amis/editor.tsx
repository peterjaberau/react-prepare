import React, { useState, useEffect } from "react"
import { DesktopOutlined, MobileOutlined } from "@ant-design/icons"
import { alert, AlertComponent, confirm, SchemaObject, ToastComponent } from "amis"
import { Editor, ShortcutKey } from "amis-editor-core"
import { copy, fetcher, notify } from "./amisEnvUtils"
import "@/amis/styles/editor.scss"
import "amis-editor-core/lib/style.css";
import { disabledRenderers } from "@/try-amis/DisabledEditorPlugin.tsx";
import { getPageById } from "@/try-amis/db/pages.ts";

// import "@/amis/styles/cxd.css"
import "@/amis/styles/antd.css"

import "@/amis/styles/lib/helper.css"
import "@/amis/styles/lib/iconfont.css"

const AMISEditor: React.FC = () => {
  const [preview, setPreview] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [schema, setSchema] = useState({})

  useEffect(() => {
    async function fetchSchema() {
      const schema = await getPageById("0");
      setSchema(schema);
    }
    fetchSchema()
  }, [])

  // Current language
  const curLanguage = "en-US"

  async function save() {
    // Call the save interface
  }

  function onChange(value: SchemaObject) {
    setSchema(value)
  }

  return (
    <div className="Editor">
      <div className="Editor-header">
        <div className="Editor-title">amis visual editor</div>
        <div className="Editor-view-mode-group-container">
          <div className="Editor-view-mode-group">
            <div
              className={`Editor-view-mode-btn editor-header-icon ${!isMobile ? "is-active" : ""}`}
              onClick={() => {
                setIsMobile(false)
              }}
            >
              {/* PC mode */}
              <DesktopOutlined />
            </div>
            <div
              className={`Editor-view-mode-btn editor-header-icon ${isMobile ? "is-active" : ""}`}
              onClick={() => {
                setIsMobile(true)
              }}
            >
              {/*Mobile mode */}
              <MobileOutlined />
            </div>
          </div>
        </div>

        <div className="Editor-header-actions">
          {/* shortcut key */}
          <div className="shortcut-box">
            <ShortcutKey />
          </div>

          {/* Internationalization */}
          {/* <SelectLang key="SelectLang" />*/}

          <div
            className={`header-action-btn m-1 ${preview ? "primary" : ""}`}
            onClick={() => {
              setPreview(!preview)
            }}
          >
            {preview ? "Edit" : "Preview"}
          </div>
          {/* save */}
          {!preview && (
            <div className={`header-action-btn exit-btn`} onClick={save}>
              save
            </div>
          )}
        </div>
      </div>
      <ToastComponent theme={"antd"} key="toast" position={"top-center"} locale={curLanguage} />
      <AlertComponent theme={"antd"} key="alert" locale={curLanguage} />
      <div className="Editor-inner">
        <Editor
          theme={"antd"}
          preview={preview}
          isMobile={isMobile}

          value={schema as SchemaObject}
          onChange={onChange}
          onPreview={() => {
            setPreview(true)
          }}
          onSave={save}
          className="is-fixed"
          showCustomRenderersPanel={true}
            // isHiddenProps
            // onInit={onInit}
            // onSelectionChange
            // onPreventClick
            // onBuildToolbars
            // onBuildContextMenus
            // onBuildPanels
            // onDndAccept
            // afterResolveJsonSchema
            // beforeResolveJsonSchema
            // afterResolveEditorInfo
            // beforeResolveEditorInfo
            // afterDelete
            // beforeDelete
            // afterMove
            // afterReplace
            // beforeReplace
            // afterUpdate
            // beforeUpdate
            // afterInsert
            // beforeInsert
            // onInit
            // onActive
            // actionOptions
            // plugins
            disablePluginList={disabledRenderers}
            disableBultinPlugin={false}
          // schemaFilter
            // theme
            // schemas
            // className
            // $schemaUrl
            // isMobile
            // autoFocus
            // preview
            // onChange
            // value
            // onWidthChangeStart
            // onHeightChangeStart
            // onSizeChangeStart


          amisEnv={{
            fetcher,
            notify,
            alert,
            copy,
            confirm,
          }}
        />
      </div>
    </div>
  )
}

export default AMISEditor
