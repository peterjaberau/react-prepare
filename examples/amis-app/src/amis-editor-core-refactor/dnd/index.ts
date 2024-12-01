import find from "lodash/find"
import { isAlive } from "mobx-state-tree"
import { toast } from "amis"
import debounce from "lodash/debounce"
import { EditorManager } from "../manager"
import { DragEventContext, SubRendererInfo } from "../plugin"
import { EditorStoreType } from "../store/editor"
import { EditorNodeType } from "../store/node"
import { JSONGetById, autobind, reactionWithOldValue, unitFormula } from "../util"
import { DefaultDNDMode } from "./default"
import { DNDModeInterface } from "./interface"
import { PositionHDNDMode } from "./position-h"
import { FlexDNDMode } from "./flex"

const toastWarning = debounce((msg) => {
  toast.warning(msg)
}, 500)

export class EditorDNDManager {
  toDispose: Array<() => void> = []

  dndMode?: DNDModeInterface

  readonly dragGhost: HTMLElement

  dragEnterCount = 0

  dragElement?: HTMLElement

  dragImage?: HTMLElement

  lastX: number = 0
  lastY: number = 0
  curDragId: string = ''
  startX: number = 0
  startY: number = 0

  constructor(
    readonly manager: EditorManager,
    readonly store: EditorStoreType,
  ) {
    this.toDispose.push(
      reactionWithOldValue(() => (store.dragType === "schema" ? store.dragId : ""), this.updateDragElements),

      reactionWithOldValue(() => ({ id: store.dropId, region: store.dropRegion }), this.updateDropRegion),
    )

    this.dragGhost = document.createElement("div")
    this.dragGhost.classList.add("ae-DragGhost")
    this.dragGhost.classList.add("is-ghost")

    this.dragEnter = this.dragEnter.bind(this);
    this.dragOver = this.dragOver.bind(this);
    this.drop = this.drop.bind(this);
    this.dragLeave = this.dragLeave.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
    this.updateDragElements = this.updateDragElements.bind(this);
    this.updateDropRegion = this.updateDropRegion.bind(this);
  }

  createDragImage(id: string, node?: EditorNodeType) {
    const dragImage = document.createElement("div")
    dragImage.classList.add("ae-DragImage")

    dragImage.innerHTML = `<span>${node?.label || id}</span>`
    document.body.appendChild(dragImage)

    this.dragImage = dragImage
    return dragImage
  }

  disposeDragImage() {
    const dragImage = this.dragImage
    dragImage?.parentElement?.removeChild(dragImage)
    delete this.dragImage
  }

  switchToRegion(e: DragEvent, id: string, region: string): boolean {
    const store = this.store
    if (!id || !region || (store.dropId === id && store.dropRegion === region)) {
      return false
    }
    const node = store.getNodeById(id, region)!
    const config = node.regionInfo!

    const json = store.dragSchema

    if (config?.accept?.(json) === false || node.host?.memberImmutable(region)) {
      return false
    }

    const context: DragEventContext = {
      mode: store.dragMode as any,
      sourceType: store.dragType as any,
      sourceId: store.dragId,
      data: store.dragSchema,
      targetId: id,
      targetRegion: region,
    }

    const event = this.manager.trigger("dnd-accept", context)
    if (event.prevented) {
      return false
    }

    this.dndMode?.leave(e, this.dragGhost)
    this.dndMode?.dispose()

    store.setDropId(id, region)
    this.makeDNDModeInstance(node)
    this.dndMode?.enter(e, this.dragGhost!)
    store.calculateHighlightBox([id])
    return true
  }

  makeDNDModeInstance(region: EditorNodeType) {
    if (!region || !isAlive(region)) {
      return this.dndMode || null
    }
    const mode = region.regionInfo?.dndMode
    const regionNode = JSONGetById(this.store.schema, region.id)
    let Klass: new (dnd: EditorDNDManager, region: EditorNodeType, config: any) => DNDModeInterface = DefaultDNDMode

    if (mode === "position-h") {
      Klass = PositionHDNDMode
    }
    if (typeof mode === "function") {
      if (mode(regionNode) === "flex") {
        Klass = FlexDNDMode
      }
    }

    this.dndMode = new Klass(this, region, { regionNode })
    return this.dndMode
  }

  startDrag(id: string, e: DragEvent) {
    const node = this.store.getNodeById(id)!

    const dom = this.store.getDoc().querySelector(`[data-editor-id="${id}"]`)
    if (!node || !dom) {
      e.preventDefault()
      return
    }
    (e.target as HTMLElement)?.addEventListener("dragend", this.dragEnd as EventListener);

    this.lastX = e.clientX
    this.lastY = e.clientY

    if (this.manager.draggableContainer(node.id)) {
      this.curDragId = id
      this.startX = e.clientX
      this.startY = e.clientY
      return
    }

    this.dragElement = dom as HTMLElement

    e.dataTransfer!.effectAllowed = "move"
    e.dataTransfer!.setDragImage(this.createDragImage(id, node), 0, 0)
    e.dataTransfer!.setData(`dnd/ae-node-${id}`.toLowerCase(), ``)

    setTimeout(() => {
      this.store.setDragId(id)
      const region = node.parent

      this.switchToRegion(e, region.id, region.region)
    }, 4)
  }

  dragEnter(e: DragEvent) {
    const store = this.store
    this.dragEnterCount++
    const activeId = store.activeId

    if (activeId) {
      const curNode = store.getNodeById(activeId)
      if (!curNode) {
        toastWarning("请先选择一个元素作为插入的位置。")
        return
      }
    } else {
      toastWarning("请先选择一个元素作为插入的位置。")
      return
    }

    if (store.dragId || this.dragEnterCount !== 1) {
      return
    }

    const types = e.dataTransfer!.types
    if (types.length > 0) {
      for (let i = types.length - 1; i >= 0; i--) {
        if (/^dnd-dom\/(.*)$/.test(types[i])) {
          const selector = RegExp.$1
          const dom = document.querySelector(selector)
          if (dom) {
            dom.addEventListener("dragend", this.dragEnd as EventListener)
            const id = dom.getAttribute("data-dnd-id")!
            const type = dom.getAttribute("data-dnd-type")!
            const dataRaw = dom.getAttribute("data-dnd-data")
            const schema = dataRaw
              ? JSON.parse(dataRaw)
              : {
                  type: "tpl",
                  tpl: "Unknown",
                }
            store.setDragId(id, "copy", type, schema)
            const containerId = store.activeContainerId

            if (containerId) {
              const node = store.getNodeById(containerId)
              if (node?.childRegions.length) {
                let slotIndex = 0
                node.childRegions.forEach((regionItem: any, index: number) => {
                  if (regionItem.region) {
                    slotIndex = index
                  }
                })
                this.switchToRegion(e, node.id, node.childRegions[slotIndex].region)
              }
            }
            break
          }
        }
      }
    }

    if (this.curDragId && this.manager.draggableContainer(this.curDragId)) {
      const curNode = store.getNodeById(activeId)
      if (curNode) {
        const parentNode = curNode.parentId ? store.getNodeById(curNode.parentId) : undefined
        if (parentNode?.schema?.isFreeContainer) {
          store.setDropId(curNode.parentId, "body")
        }
      }
      return
    }
  }

  dragOver(e: DragEvent) {
    const store = this.store
    const target = e.target as HTMLElement
    e.preventDefault()

    const dx = e.clientX - this.lastX
    const dy = e.clientY - this.lastY
    const d = Math.max(Math.abs(dx), Math.abs(dy))

    if (d > 0 && this.curDragId && this.manager.draggableContainer(this.curDragId)) {
      const doc = store.getDoc()
      const parentDoc = parent?.window.document

      let dragHlBoxItem = doc.querySelector(`[data-hlbox-id='${this.curDragId}']`) as HTMLElement

      if (store.isMobile && !dragHlBoxItem && parentDoc) {
        dragHlBoxItem = parentDoc.querySelector(`[data-hlbox-id='${this.curDragId}']`) as HTMLElement
      }

      if (dragHlBoxItem) {
        const hlBoxInset = dragHlBoxItem.style.inset || "auto"
        const hlBoxInsetArr = hlBoxInset.split(" ")
        const hlBInset = {
          top: dragHlBoxItem.style.top || hlBoxInsetArr[0] || "auto",
          right: dragHlBoxItem.style.right || hlBoxInsetArr[1] || "auto",
          bottom: dragHlBoxItem.style.bottom || hlBoxInsetArr[2] || hlBoxInsetArr[0] || "auto",
          left: dragHlBoxItem.style.left || hlBoxInsetArr[3] || hlBoxInsetArr[1] || "auto",
        }
        dragHlBoxItem.style.inset = `${hlBInset.top !== "auto" ? unitFormula(hlBInset.top, dy) : "auto"} ${
          hlBInset.right !== "auto" ? unitFormula(hlBInset.right, -dx) : "auto"
        } ${hlBInset.bottom !== "auto" ? unitFormula(hlBInset.bottom, -dy) : "auto"} ${
          hlBInset.left !== "auto" ? unitFormula(hlBInset.left, dx) : "auto"
        }`
      }

      const dragContainerItem = doc.querySelector(`[data-editor-id='${this.curDragId}']`) as HTMLElement

      if (dragContainerItem) {
        const curInset = dragContainerItem.style.inset || "auto"
        const insetArr = curInset.split(" ")
        const inset = {
          top: insetArr[0] || "auto",
          right: insetArr[1] || "auto",
          bottom: insetArr[2] || insetArr[0] || "auto",
          left: insetArr[3] || insetArr[1] || "auto",
        }
        dragContainerItem.style.inset = `${
          inset.top !== "auto" ? unitFormula(inset.top, dy) : "auto"
        } ${inset.right !== "auto" ? unitFormula(inset.right, -dx) : "auto"} ${
          inset.bottom !== "auto" ? unitFormula(inset.bottom, -dy) : "auto"
        } ${inset.left !== "auto" ? unitFormula(inset.left, dx) : "auto"}`
      }
      this.lastX = e.clientX
      this.lastY = e.clientY
      return
    }

    if (!store.dropId || !target) {
      return
    }

    const curRegion = target.closest(`[data-region][data-region-host]`)
    const hostId = curRegion?.getAttribute("data-region-host")
    const region = curRegion?.getAttribute("data-region")
    const containerElem = target.closest("[data-editor-id][data-container]")
    const containerId = containerElem?.getAttribute("data-editor-id")

    const isMetaPressed = e.ctrlKey || e.metaKey || e.altKey

    if (isMetaPressed) {
      if (region && hostId && containerElem!.contains(curRegion)) {
        store.setPlanDropId(hostId, region)
      } else if (containerId) {
        store.setPlanDropId(containerId, "")
      }
      return
    }

    if (d < 5) {
      return
    }

    this.lastX = e.clientX
    this.lastY = e.clientY

    if (store.dropId === hostId && region && region !== store.dropRegion) {
      this.switchToRegion(e, store.dropId, region)
      return
    }

    store.setPlanDropId("", "")
    this.dndMode?.over(e, this.dragGhost!)
  }

  async drop(e: DragEvent) {
    const store = this.store
    if (this.curDragId && this.manager.draggableContainer(this.curDragId)) {
      const dx = e.clientX - this.startX
      const dy = e.clientY - this.startY
      this.manager.updateContainerStyleByDrag(this.curDragId, dx, dy)

      this.curDragId = ""
      this.store.setDropId("")
      return
    }

    if (!store.dropId) {
      return
    }

    const beforeId = this.dndMode?.getDropBeforeId()
    const position = this.dndMode?.getDropPosition?.()

    if (this.dndMode?.interruptionDrop?.()) {
      return
    }
    if (store.dragMode === "move") {
      this.manager.move(store.dropId, store.dropRegion, store.dragId, beforeId, { position })
    } else if (store.dragMode === "copy") {
      let schema = store.dragSchema
      const dropId = store.dropId
      const dropRegion = store.dropRegion
      let subRenderer: SubRendererInfo | undefined = undefined

      if (store.dragType === "subrenderer") {
        subRenderer = find(store.subRenderers, (r) => r.id === store.dragId)
        if (subRenderer?.scaffoldForm) {
          schema = await this.manager.scaffold(subRenderer.scaffoldForm, schema)
        }
      }

      this.manager.addChild(
        dropId,
        dropRegion,
        schema,
        beforeId,
        subRenderer,
        {
          id: store.dragId,
          type: store.dragType,
          data: store.dragSchema,
          position: position,
        },
        false,
      )
    }
  }

  dragLeave(e: DragEvent) {
    this.dragEnterCount--
  }

  dragEnd(e: DragEvent) {
    e.target?.removeEventListener("dragend", this.dragEnd as EventListener)

    this.dndMode?.leave(e, this.dragGhost!)
    delete this.dndMode

    this.dragGhost.innerHTML = ""
    this.store.setDragId("")
    this.store.setDropId("")
    this.store.setPlanDropId("", "")
    this.disposeDragImage()
    this.dragEnterCount = 0
  }

  updateDragElements(dragId: string) {
    if (dragId && this.manager.draggableContainer(dragId)) {
      return
    }
    if (dragId) {
      ;[].slice
        .call(this.store.getDoc().querySelectorAll(`[data-editor-id="${dragId}"]`))
        .forEach((elem: HTMLElement) => elem.classList.add("ae-is-draging"))
    } else {
      ;[].slice
        .call(this.store.getDoc().querySelectorAll(`.ae-is-draging`))
        .forEach((elem: HTMLElement) => elem.classList.remove("ae-is-draging"))
    }
  }

  updateDropRegion(value: { id: string; region: string }, oldValue?: { id: string; region: string }) {
    if (this.store.dragId && this.manager.draggableContainer(this.store.dragId)) {
      return
    }
    if (oldValue?.id && oldValue.region) {
      this.store
        .getDoc()
        .querySelector(`[data-region="${oldValue.region}"][data-region-host="${oldValue.id}"]`)
        ?.classList.remove("is-dragenter")
    }

    if (value.id && value.region) {
      this.store
        .getDoc()
        .querySelector(`[data-region="${value.region}"][data-region-host="${value.id}"]`)
        ?.classList.add("is-dragenter")
    }
  }

  dispose() {
    this.disposeDragImage()
    this.toDispose.forEach((fn) => fn())
    this.toDispose = []
  }
}
