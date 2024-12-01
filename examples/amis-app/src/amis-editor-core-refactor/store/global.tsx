import { assign, setup, fromPromise, enqueueActions } from "xstate"
import { createActorContext } from "@xstate/react"
import { Ok, Result } from "ts-results"
import invariant from "tiny-invariant"
import { getPageById } from "@/amis/db/pages.ts"
import { EditorManager } from "@/amis-editor-core-refactor"

const defaultConfig = {
  manager: undefined,
  ready: false,
  isMobile: false,
  isSubEditor: false,
  amisDocHost: "#",
  root: {
    id: "root",
    label: "Root",
  },
  theme: "cxd",
  toolbarMode: "default",
  noDialog: false,
  hoverId: "",
  hoverRegion: "",
  activeId: "",
  activeRegion: "",
  mouseMoveRegion: "",
  selections: [],
  contextId: "",
  dragMode: "move", //'move' | 'copy'
  dragId: "",
  dragType: "",
  dragSchema: null,
  dropId: "",
  dropRegion: "",
  planDropId: "",
  planDropRegion: "",
  insertId: "",
  insertRegion: "",
  insertRenderers: [],
  insertRenderersKeywords: "",
  insertTag: "all",
  insertSelected: "",
  insertMode: "insert", //'insert' | 'replace'
  insertOrigId: "",
  insertBeforeId: "",
  showInsertRenderer: false,
  schema: null,
  versionId: 0,
  schemaHistory: [],
  toolbars: [],
  panels: [],
  showCustomRenderersPanel: false,
  renderersTabsKey: "base-renderers",
  outlineTabsKey: "component-outline",
  subRenderers: [],
  subRenderersKeywords: "",
  subRenderersTag: "",
  subRendererRegion: "",
  customRenderersKeywords: "",
  customRenderersTag: "",
  panelKey: "",
  leftPanelKey: "",
  leftPanelOpenStatus: true,
  jsonSchemaUri: "",
  scaffoldForm: null,
  scaffoldFormStep: 0,
  scaffoldStepManipulated: false,
  scaffoldFormBuzy: false,
  scaffoldError: "",
  popOverForm: null,
  subEditorContext: null,
  superEditorData: null,
  calculateStarted: false,
  targetNames: [],
  i18nEnabled: false,
  appLocale: "en-US",
  appCorpusData: {},
  appLocaleState: 0,
}

export const EditorLogic = {
  id: "editor-machine",
  initial: "idle",
  context: {
    ...defaultConfig,
  },
  states: {
    idle: {
      always: {
        target: "ready",
        actions: "init",
      },
    },
    ready: {
      on: {
        onContextInit: {
          actions: enqueueActions(({ context, event, enqueue, check }: any) => {
            const { ctx, manager } = event.value;

            enqueue.raise({ type: "setCtx", value: ctx }),
            enqueue("setSchema")
            enqueue("setShowCustomRenderersPanel")
            enqueue.assign(() => {
              const { config, actor, hostManager } = event.value;
              context.manager = new EditorManager(config, actor, hostManager)
            })
          }),
          target: "ready",
        },

        onFetchSchema: {
          target: "fetchingSchema",
        },

        onSetContext: {
          actions: "setCtx",
          target: "ready",
        },


        preview2editor: {
          target: "rebuilding",
        },


        "ev.mark.ready": {
          actions: "markReady",
          target: "ready",
        },
        "ev.set.layer": {
          actions: "setLayer",
          target: "ready",
        },
        "ev.get.layer": {
          actions: "getLayer",
          target: "ready",
        },
        "ev.set.doc": {
          actions: "setDoc",
          target: "ready",
        },
        "ev.get.doc": {
          actions: "getDoc",
          target: "ready",
        },
        "ev.set.iframe": {
          actions: "setIframe",
          target: "ready",
        },
        "ev.get.iframe": {
          actions: "getIframe",
          target: "ready",
        },
        "ev.set.is.mobile": {
          actions: "setIsMobile",
          target: "ready",
        },
        "ev.set.ctx": {
          actions: "setCtx",
          target: "ready",
        },
        "ev.set.theme": {
          actions: "setTheme",
          target: "ready",
        },
        "ev.set.is.sub.editor": {
          actions: "setIsSubEditor",
          target: "ready",
        },
        "ev.set.show.custom.renderers.panel": {
          actions: "setShowCustomRenderersPanel",
          target: "ready",
        },
        "ev.set.schema": {
          actions: "setSchema",
          target: "ready",
        },
        "ev.insert.schema": {
          actions: "insertSchema",
          target: "ready",
        },
        "ev.move.schema": {
          actions: "moveSchema",
          target: "ready",
        },
        "ev.set.active.id": {
          actions: "setActiveId",
          target: "ready",
        },
        "ev.set.active.id.by.component.id": {
          actions: "setActiveIdByComponentId",
          target: "ready",
        },
        "ev.set.selections": {
          actions: "setSelections",
          target: "ready",
        },
        "ev.clear.selection": {
          actions: "clearSelection",
          target: "ready",
        },
        "ev.set.hover.id": {
          actions: "setHoverId",
          target: "ready",
        },
        "ev.set.mouse.move.region": {
          actions: "setMouseMoveRegion",
          target: "ready",
        },
        "ev.set.insert.id": {
          actions: "setInsertId",
          target: "ready",
        },
        "ev.set.context.id": {
          actions: "setContextId",
          target: "ready",
        },
        "ev.set.drag.id": {
          actions: "setDragId",
          target: "ready",
        },
        "ev.set.drop.id": {
          actions: "setDropId",
          target: "ready",
        },
        "ev.set.plan.drop.id": {
          actions: "setPlanDropId",
          target: "ready",
        },
        "ev.set.active.toolbars": {
          actions: "setActiveToolbars",
          target: "ready",
        },
        "ev.set.panels": {
          actions: "setPanels",
          target: "ready",
        },
        "ev.set.sub.renderers": {
          actions: "setSubRenderers",
          target: "ready",
        },
        "ev.change.sub.renderers.keywords": {
          actions: "changeSubRenderersKeywords",
          target: "ready",
        },
        "ev.change.sub.renderers.tag": {
          actions: "changeSubRenderersTag",
          target: "ready",
        },
        "ev.reset.sub.renderers.keywords": {
          actions: "resetSubRenderersKeywords",
          target: "ready",
        },
        "ev.change.custom.renderers.keywords": {
          actions: "changeCustomRenderersKeywords",
          target: "ready",
        },
        "ev.change.custom.renderers.tag": {
          actions: "changeCustomRenderersTag",
          target: "ready",
        },
        "ev.reset.custom.renderers.keywords": {
          actions: "resetCustomRenderersKeywords",
          target: "ready",
        },
        "ev.change.sub.renderer.region": {
          actions: "changeSubRendererRegion",
          target: "ready",
        },
        "ev.change.panel.key": {
          actions: "changePanelKey",
          target: "ready",
        },
        "ev.change.left.panel.key": {
          actions: "changeLeftPanelKey",
          target: "ready",
        },
        "ev.change.renderers.tabs.key": {
          actions: "changeRenderersTabsKey",
          target: "ready",
        },
        "ev.change.outline.tabs.key": {
          actions: "changeOutlineTabsKey",
          target: "ready",
        },
        "ev.change.left.panel.open.status": {
          actions: "changeLeftPanelOpenStatus",
          target: "ready",
        },
        "ev.show.renderer.panel": {
          actions: "showRendererPanel",
          target: "ready",
        },
        "ev.change.value": {
          actions: "changeValue",
          target: "ready",
        },
        "ev.definition.onchange.value": {
          actions: "definitionOnchangeValue",
          target: "ready",
        },
        "ev.change.value.by.id": {
          actions: "changeValueById",
          target: "ready",
        },
        "ev.batch.change.value": {
          actions: "batchChangeValue",
          target: "ready",
        },
        "ev.update.container.style.by.drag": {
          actions: "updateContainerStyleByDrag",
          target: "ready",
        },
        "ev.move.up": {
          actions: "moveUp",
          target: "ready",
        },
        "ev.move.down": {
          actions: "moveDown",
          target: "ready",
        },
        "ev.del": {
          actions: "del",
          target: "ready",
        },
        "ev.del.multi": {
          actions: "delMulti",
          target: "ready",
        },
        "ev.duplicate": {
          actions: "duplicate",
          target: "ready",
        },
        "ev.empty.region": {
          actions: "emptyRegion",
          target: "ready",
        },
        "ev.replace.child": {
          actions: "replaceChild",
          target: "ready",
        },
        "ev.set.insert.region": {
          actions: "setInsertRegion",
          target: "ready",
        },
        "ev.close.insert.panel": {
          actions: "closeInsertPanel",
          target: "ready",
        },
        "ev.show.insert.renderer.panel": {
          actions: "showInsertRendererPanel",
          target: "ready",
        },
        "ev.close.insert.renderer.panel": {
          actions: "closeInsertRendererPanel",
          target: "ready",
        },
        "ev.set.insert.renderers": {
          actions: "setInsertRenderers",
          target: "ready",
        },
        "ev.change.insert.renderers.keywords": {
          actions: "changeInsertRenderersKeywords",
          target: "ready",
        },
        "ev.reset.insert.renderers.keywords": {
          actions: "resetInsertRenderersKeywords",
          target: "ready",
        },
        "ev.set.insert.tag": {
          actions: "setInsertTag",
          target: "ready",
        },
        "ev.set.insert.selected": {
          actions: "setInsertSelected",
          target: "ready",
        },
        "ev.set.json.schema.uri": {
          actions: "setJSONSchemaUri",
          target: "ready",
        },
        "ev.add.modal": {
          actions: "addModal",
          target: "ready",
        },
        "ev.count.modal.action.refs": {
          actions: "countModalActionRefs",
          target: "ready",
        },
        "ev.remove.modal": {
          actions: "removeModal",
          target: "ready",
        },
        "ev.update.modal": {
          actions: "updateModal",
          target: "ready",
        },
        "ev.open.sub.editor": {
          actions: "openSubEditor",
          target: "ready",
        },
        "ev.confirm.sub.editor": {
          actions: "confirmSubEditor",
          target: "ready",
        },
        "ev.close.sub.editor": {
          actions: "closeSubEditor",
          target: "ready",
        },
        "ev.sub.editor.on.change": {
          actions: "subEditorOnChange",
          target: "ready",
        },
        "ev.undo.sub.editor": {
          actions: "undoSubEditor",
          target: "ready",
        },
        "ev.redo.sub.editor": {
          actions: "redoSubEditor",
          target: "ready",
        },
        "ev.sub.editor.ref": {
          actions: "subEditorRef",
          target: "ready",
        },
        "ev.get.sub.editor.ref": {
          actions: "getSubEditorRef",
          target: "ready",
        },
        "ev.open.scaffold.form": {
          actions: "openScaffoldForm",
          target: "ready",
        },
        "ev.close.scaffold.form": {
          actions: "closeScaffoldForm",
          target: "ready",
        },
        "ev.set.scaffold.buzy": {
          actions: "setScaffoldBuzy",
          target: "ready",
        },
        "ev.set.scaffold.step": {
          actions: "setScaffoldStep",
          target: "ready",
        },
        "ev.set.scaffold.step.manipulated": {
          actions: "setScaffoldStepManipulated",
          target: "ready",
        },
        "ev.set.scaffold.error": {
          actions: "setScaffoldError",
          target: "ready",
        },
        "ev.update.scaffold.data": {
          actions: "updateScaffoldData",
          target: "ready",
        },
        "ev.open.pop.over.form": {
          actions: "openPopOverForm",
          target: "ready",
        },
        "ev.close.pop.over.form": {
          actions: "closePopOverForm",
          target: "ready",
        },
        "ev.active.highlight.nodes": {
          actions: "activeHighlightNodes",
          target: "ready",
        },
        "ev.de.active.highlight.nodes": {
          actions: "deActiveHighlightNodes",
          target: "ready",
        },
        "ev.calculate.highlight.box": {
          actions: "calculateHighlightBox",
          target: "ready",
        },
        "ev.reset.highlight.box": {
          actions: "resetHighlightBox",
          target: "ready",
        },
        "ev.update.target.name": {
          actions: "updateTargetName",
          target: "ready",
        },
        "ev.traceable.set.schema": {
          actions: "traceableSetSchema",
          target: "ready",
        },
        "ev.undo": {
          actions: "undo",
          target: "ready",
        },
        "ev.redo": {
          actions: "redo",
          target: "ready",
        },
        "ev.auto.select.root": {
          actions: "autoSelectRoot",
          target: "ready",
        },
        "ev.reset.history": {
          actions: "resetHistory",
          target: "ready",
        },
        "ev.apply.patches": {
          actions: "applyPatches",
          target: "ready",
        },
        "ev.update.app.locale.state": {
          actions: "updateAppLocaleState",
          target: "ready",
        },
        "ev.set.app.locale": {
          actions: "setAppLocale",
          target: "ready",
        },
        "ev.set.app.corpus.data": {
          actions: "setAppCorpusData",
          target: "ready",
        },
        "ev.before.destroy": {
          actions: "beforeDestroy",
          target: "ready",
        },

      },
    },
    intializing: {
      on: {
        InitializingStarted: {
          target: "intializing",
          action: "startInitializer",
        },
        InitializingCompleted: {
          target: "intializing",
          action: "completeInitializer",
        },
      }

    },

    fetchingSchema: {
      invoke: {
        src: "fetchSchema",
        onDone: {
          // guard: ({ event }) => event.output.ok === true,
          target: "ready",
          actions: "setFetchedSchema",
        },
        onError: {
          target: "ready",
        },
      },
    },
    rebuilding: {
      invoke: {
        src: "rebuild",
        onDone: {
          // guard: ({ event }) => event.output.ok === true,
          target: "ready",
        },
        onError: {
          target: "ready",
        },
      },
    }
  },
} as any

export const EditorMachine = setup({
  types: {
    context: {} as any,
    events: {} as any,
    schema: {} as any,
  } as any,
  actions: {
    // setInitial: assign(({ context, event }) => {
    //   invariant(event.output.ok === true);
    //   return {
    //     ...context,
    //     ...event.output.val,
    //   }
    // }),
    init: assign(({ context, event }) => {
      console.log("init", context)
      return {
        ...context,
        ...defaultConfig,
      }
    }),







    syncViews: assign(({ context }) => {}),
    markReady: assign(() => {
      return {
        ready: true,
      }
    }),
    setLayer: assign(({ context, event }) => {
      context.layer = event.value
    }),
    getLayer: ({ context }) => {
      return context.layer
    },
    setDoc: assign(({ context, event }) => {
      context.doc = event.value
    }),
    getDoc: ({ context }) => {
      return context.doc
    },
    setIframe: assign(({ context, event }) => {
      context.iframe = event.value
    }),
    getIframe: ({ context }) => {
      return context.iframe
    },
    setIsMobile: assign(({ context, event }) => {
      context.isMobile = event.value
    }),

    // Done
    setCtx: assign(({ context, event }) => {
      context.ctx = { ...event.value }
    }),

    // TODO
    setTheme: assign(({ context, event }) => {
      context.theme = event.value
    }),

    // TODO
    setIsSubEditor: assign(({ context, event }) => {
      context.isSubEditor = event.value
    }),

    // Done
    setShowCustomRenderersPanel: assign(({ context, event }) => {
      const { showCustomRenderersPanel = false } = event.value;
      context.showCustomRenderersPanel = showCustomRenderersPanel
    }),

    setFetchedSchema: assign(({ context, event }) => {
      console.log("setFetchedSchema", event.output.val)
      context.schema = event.output.val
    }),

    // Done
    setSchema: assign(({ context, event }) => {
      const { schema } = event.value
      context.schema = schema
    }),

    insertSchema: assign(({ context, event }) => {
      // Insert schema logic here
    }),
    moveSchema: assign(({ context, event }) => {
      // Move schema logic here
    }),
    setActiveId: assign(({ context, event }) => {
      context.activeId = event.value
    }),
    setSelections: assign(({ context, event }) => {
      context.selections = event.value
    }),
    clearSelection: assign(({ context }) => {
      context.selections = []
    }),
    setHoverId: assign(({ context, event }) => {
      context.hoverId = event.value
    }),
    setMouseMoveRegion: assign(({ context, event }) => {
      context.mouseMoveRegion = event.value
    }),
    setInsertId: assign(({ context, event }) => {
      context.insertId = event.value
    }),
    setContextId: assign(({ context, event }) => {
      context.contextId = event.value
    }),
    setDragId: assign(({ context, event }) => {
      context.dragId = event.value
    }),
    setDropId: assign(({ context, event }) => {
      context.dropId = event.value
    }),
    setPlanDropId: assign(({ context, event }) => {
      context.planDropId = event.value
    }),
    setActiveToolbars: assign(({ context, event }) => {
      context.toolbars = event.value
    }),
    setPanels: assign(({ context, event }) => {
      context.panels = event.value
    }),
    setSubRenderers: assign(({ context, event }) => {
      context.subRenderers = event.value
    }),
    changeSubRenderersKeywords: assign(({ context, event }) => {
      context.subRenderersKeywords = event.value
    }),
    changeSubRenderersTag: assign(({ context, event }) => {
      context.subRenderersTag = event.value
    }),
    resetSubRenderersKeywords: assign(({ context }) => {
      context.subRenderersKeywords = ""
    }),
    changeCustomRenderersKeywords: assign(({ context, event }) => {
      context.customRenderersKeywords = event.value
    }),
    changeCustomRenderersTag: assign(({ context, event }) => {
      context.customRenderersTag = event.value
    }),
    resetCustomRenderersKeywords: assign(({ context }) => {
      context.customRenderersKeywords = ""
    }),
    changeSubRendererRegion: assign(({ context, event }) => {
      context.subRendererRegion = event.value
    }),
    changePanelKey: assign(({ context, event }) => {
      context.panelKey = event.value
    }),
    changeLeftPanelKey: assign(({ context, event }) => {
      context.leftPanelKey = event.value
    }),
    changeRenderersTabsKey: assign(({ context, event }) => {
      context.renderersTabsKey = event.value
    }),
    changeOutlineTabsKey: assign(({ context, event }) => {
      context.outlineTabsKey = event.value
    }),
    changeLeftPanelOpenStatus: assign(({ context, event }) => {
      context.leftPanelOpenStatus = event.value
    }),
    showRendererPanel: assign(({ context, event }) => {
      context.showRendererPanel = event.value
    }),
    changeValue: assign(({ context, event }) => {
      context.value = event.value
    }),
    definitionOnchangeValue: assign(({ context, event }) => {
      context.definitionOnchangeValue = event.value
    }),
    changeValueById: assign(({ context, event }) => {
      context.changeValueById = event.value
    }),
    batchChangeValue: assign(({ context, event }) => {
      context.batchChangeValue = event.value
    }),
    updateContainerStyleByDrag: assign(({ context, event }) => {
      context.updateContainerStyleByDrag = event.value
    }),
    moveUp: assign(({ context, event }) => {
      context.moveUp = event.value
    }),
    moveDown: assign(({ context, event }) => {
      context.moveDown = event.value
    }),
    del: assign(({ context, event }) => {
      context.del = event.value
    }),
    delMulti: assign(({ context, event }) => {
      context.delMulti = event.value
    }),
    duplicate: assign(({ context, event }) => {
      context.duplicate = event.value
    }),
    emptyRegion: assign(({ context, event }) => {
      context.emptyRegion = event.value
    }),
    replaceChild: assign(({ context, event }) => {
      context.replaceChild = event.value
    }),
    setInsertRegion: assign(({ context, event }) => {
      context.setInsertRegion = event.value
    }),
    closeInsertPanel: assign(({ context }) => {
      context.closeInsertPanel = true
    }),
    showInsertRendererPanel: assign(({ context }) => {
      context.showInsertRendererPanel = true
    }),
    closeInsertRendererPanel: assign(({ context }) => {
      context.closeInsertRendererPanel = true
    }),
    setInsertRenderers: assign(({ context, event }) => {
      context.insertRenderers = event.value
    }),
    changeInsertRenderersKeywords: assign(({ context, event }) => {
      context.insertRenderersKeywords = event.value
    }),
    resetInsertRenderersKeywords: assign(({ context }) => {
      context.insertRenderersKeywords = ""
    }),
    setInsertTag: assign(({ context, event }) => {
      context.insertTag = event.value
    }),
    setInsertSelected: assign(({ context, event }) => {
      context.insertSelected = event.value
    }),
    setJSONSchemaUri: assign(({ context, event }) => {
      context.jsonSchemaUri = event.value
    }),
    addModal: assign(({ context, event }) => {
      context.addModal = event.value
    }),
    countModalActionRefs: assign(({ context, event }) => {
      context.countModalActionRefs = event.value
    }),
    removeModal: assign(({ context, event }) => {
      context.removeModal = event.value
    }),
    updateModal: assign(({ context, event }) => {
      context.updateModal = event.value
    }),
    openSubEditor: assign(({ context, event }) => {
      context.openSubEditor = event.value
    }),
    confirmSubEditor: assign(({ context, event }) => {
      context.confirmSubEditor = event.value
    }),
    closeSubEditor: assign(({ context }) => {
      context.closeSubEditor = true
    }),
    subEditorOnChange: assign(({ context, event }) => {
      context.subEditorOnChange = event.value
    }),
    undoSubEditor: assign(({ context }) => {
      context.undoSubEditor = true
    }),
    redoSubEditor: assign(({ context }) => {
      context.redoSubEditor = true
    }),
    subEditorRef: assign(({ context, event }) => {
      context.subEditorRef = event.value
    }),
    getSubEditorRef: assign(({ context }) => {
      return context.subEditorRef
    }),
    openScaffoldForm: assign(({ context, event }) => {
      context.openScaffoldForm = event.value
    }),
    closeScaffoldForm: assign(({ context }) => {
      context.closeScaffoldForm = true
    }),
    setScaffoldBuzy: assign(({ context, event }) => {
      context.setScaffoldBuzy = event.value
    }),
    setScaffoldStep: assign(({ context, event }) => {
      context.setScaffoldStep = event.value
    }),
    setScaffoldStepManipulated: assign(({ context, event }) => {
      context.setScaffoldStepManipulated = event.value
    }),
    setScaffoldError: assign(({ context, event }) => {
      context.setScaffoldError = event.value
    }),
    updateScaffoldData: assign(({ context, event }) => {
      context.updateScaffoldData = event.value
    }),
    openPopOverForm: assign(({ context, event }) => {
      context.openPopOverForm = event.value
    }),
    closePopOverForm: assign(({ context }) => {
      context.closePopOverForm = true
    }),
    activeHighlightNodes: assign(({ context, event }) => {
      context.activeHighlightNodes = event.value
    }),
    deActiveHighlightNodes: assign(({ context, event }) => {
      context.deActiveHighlightNodes = event.value
    }),
    calculateHighlightBox: assign(({ context, event }) => {
      context.calculateHighlightBox = event.value
    }),
    resetHighlightBox: assign(({ context, event }) => {
      context.resetHighlightBox = event.value
    }),
    updateTargetName: assign(({ context }) => {
      context.updateTargetName = true
    }),
    traceableSetSchema: assign(({ context, event }) => {
      context.traceableSetSchema = event.value
    }),
    undo: assign(({ context }) => {
      context.undo = true
    }),
    redo: assign(({ context }) => {
      context.redo = true
    }),
    autoSelectRoot: assign(({ context }) => {
      context.autoSelectRoot = true
    }),
    resetHistory: assign(({ context }) => {
      context.resetHistory = true
    }),
    applyPatches: assign(({ context, event }) => {
      context.applyPatches = event.value
    }),
    updateAppLocaleState: assign(({ context }) => {
      context.updateAppLocaleState = true
    }),
    setAppLocale: assign(({ context, event }) => {
      context.setAppLocale = event.value
    }),
    setAppCorpusData: assign(({ context, event }) => {
      context.setAppCorpusData = event.value
    }),
    beforeDestroy: assign(({ context }) => {
      context.beforeDestroy = true
    }),
  },
  actors: {
    fetchSchema: fromPromise(async () => {
      await new Promise((resolve: any) => setTimeout(resolve, 1_00))
      return new Ok(getPageById("1"))
    }),
    viewsInitializer: fromPromise(async () => {
      await new Promise((resolve: any) => setTimeout(resolve, 1_00))
      return new Ok("viewsInitializer")
    }),

    rebuild: fromPromise(async () => {

    }),

    collectRenderers: fromPromise(async () => {

    }),

  },
}).createMachine({
  ...EditorLogic,
  context: ({ input }: any) => ({
    ...EditorLogic?.context,
    input,
  }),
})

export const EditorContext = createActorContext(EditorMachine, {
  inspect: (inspectionEvent) => {
    console.log(inspectionEvent)
  },
})

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  return <EditorContext.Provider>{children}</EditorContext.Provider>
}

export const useEditorMachine = () => {
  const actor = EditorContext.useActorRef()
  const state = EditorContext.useSelector((state: any) => state)

  return {
    actor: actor,
    state: state,
  }
}
