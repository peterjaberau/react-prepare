import React, { Component, useEffect, useRef, useState } from "react"
import cx from "classnames"
import Preview from "./Preview"
import { autobind } from "core-decorators"
import { MainStore, EditorStoreType } from "../store/editor"
import { EditorManager, EditorManagerConfig, PluginClass } from "../manager"
import { reaction } from "mobx"
import { RenderOptions, closeContextMenus, toast } from "amis"
import { PluginEventListener, RendererPluginAction, IGlobalEvent } from "../plugin"
import { reGenerateID } from "../util"
import { SubEditor } from "./SubEditor"
import Breadcrumb from "./Breadcrumb"
import { destroy, isAlive } from "mobx-state-tree"
import { ScaffoldModal } from "./ScaffoldModal"
import { PopOverForm } from "./PopOverForm"
import { ContextMenuPanel } from "./Panel/ContextMenuPanel"
import { LeftPanels } from "./Panel/LeftPanels"
import { RightPanels } from "./Panel/RightPanels"
import type { SchemaObject } from "amis"
import type { VariableGroup, VariableOptions } from "../variable"
import type { EditorNodeType } from "../store/node"
import { MobileDevTool } from "amis-ui"
import { useEditorMachine } from "@/amis-editor-core-refactor/store/global.tsx"
import { useEditorManager } from "../hooks/useEditorManager.tsx"

export interface EditorProps extends PluginEventListener {
  value: SchemaObject
  onChange: (value: SchemaObject) => void
  preview?: boolean
  isMobile?: boolean
  isSubEditor?: boolean
  autoFocus?: boolean
  className?: string
  $schemaUrl?: string
  schemas?: Array<any>
  theme?: string
  toolbarMode?: "default" | "mini"
  noDialog?: boolean
  appLocale?: string
  i18nEnabled?: boolean
  showCustomRenderersPanel?: boolean
  amisDocHost?: string
  superEditorData?: any
  withSuperDataSchema?: boolean
  hostManager?: EditorManager
  hostNode?: EditorNodeType
  dataBindingChange?: (value: string, data: any, manager?: EditorManager) => void
  schemaFilter?: (schema: any, isPreview?: boolean) => any
  amisEnv?: RenderOptions
  ctx?: any
  data?: any
  disableBultinPlugin?: boolean
  scene?: string
  disablePluginList?: Array<string> | ((id: string, plugin: PluginClass) => boolean)

  plugins?: Array<PluginClass | [PluginClass, Record<string, any> | (() => Record<string, any>)]>
  previewProps?: any
  isHiddenProps?: (key: string) => boolean
  actionOptions?: {
    showOldEntry?: boolean
    actionTreeGetter?: (actionTree: RendererPluginAction[]) => RendererPluginAction[]
    customActionGetter?: (manager: EditorManager) => {
      [propName: string]: RendererPluginAction
    }
    globalEventGetter?: (manager: EditorManager) => IGlobalEvent[]
  }

  variables?: VariableGroup[]
  variableOptions?: VariableOptions
  onUndo?: () => void
  onRedo?: () => void
  onSave?: () => void
  onPreview?: (preview: boolean) => void
  onFormulaEditorOpen?: (
    node: EditorNodeType,
    manager: EditorManager,
    ctx: Record<string, any>,
    host?: {
      node?: EditorNodeType
      manager?: EditorManager
    },
  ) => Promise<void | boolean>

  getHostNodeDataSchema?: () => Promise<any>
  getAvaiableContextFields?: (node: EditorNodeType) => Promise<any>
  readonly?: boolean
}

const Editor: React.FC<EditorProps> = (props) => {

  const [manager, setManager] = useState<EditorManager | null>(null)

  const mainRef = useRef<HTMLDivElement>(null);
  const mainPreviewRef = useRef<HTMLDivElement>(null);
  const mainPreviewBodyRef = useRef<any>(null);

  const { value, onChange, preview, isMobile, isSubEditor = false, autoFocus = true, className, showCustomRenderersPanel, superEditorData, hostManager, theme, appLocale, data, previewProps, amisEnv, readonly, onUndo, onRedo, onSave, onPreview, ...rest } = props

  const { state, actor } = useEditorMachine()

  const defaultProps = {
    autoFocus: true
  }
  const isInternalChange = false
  const config: EditorManagerConfig = {
    ...rest
  };


  const initialContext = {
    isMobile: isMobile,
    theme: theme,
    toolbarMode: props.toolbarMode || "default",
    noDialog: props.noDialog,
    isSubEditor,
    amisDocHost: props.amisDocHost,
    superEditorData,
    appLocale: appLocale,
    appCorpusData: props?.amisEnv?.replaceText,
    i18nEnabled: props?.i18nEnabled ?? false,
  }

  useEffect(() => {
    if (state.matches('ready')) {
      // actor.send({ type: 'onSetContext', value, initialContext })
      const payload = {
        ctx: initialContext,
        manager: { config: config, store: actor, hostManager: hostManager }
      }
      actor.send({ type: 'onContextInit', value, payload })
    }
  }, [])

  useEffect(() => {
    console.log('---hostManager---', hostManager)

    if (config && actor && hostManager && !manager) {
      setManager(useEditorManager(config, actor, hostManager));

      console.log('---manager---', manager)

    }
  }, []);



  return (
    <>
    editor refactored
    </>
  )
}

export default Editor
