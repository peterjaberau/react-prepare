import { hasIcon, mapObject, utils } from "amis"
import type { PlainObject, Schema, SchemaNode } from "amis"
import { getGlobalData } from "amis-theme-editor-helper"
import { mapTree, isExpression, resolveVariableAndFilter, filterTree } from "amis-core"
import type { VariableItem } from "amis-ui"
import { isObservable, reaction } from "mobx"
import DeepDiff, { Diff } from "deep-diff"
import assign from "lodash/assign"
import cloneDeep from "lodash/cloneDeep"
import isPlainObject from "lodash/isPlainObject"
import isEqual from "lodash/isEqual"
import isNumber from "lodash/isNumber"
import debounce from "lodash/debounce"
import merge from "lodash/merge"
import { EditorModalBody } from "./store/editor"
import { filter } from "lodash"
import type { SchemaType } from "amis/lib/Schema"
import type { DialogSchema } from "amis/lib/renderers/Dialog"
import type { DrawerSchema } from "amis/lib/renderers/Drawer"

const {
  guid,
  omitControls,
  isObjectShallowModified,
  // isObject,
  cloneObject,
  anyChanged,
  noop,
  makeHorizontalDeeper,
  findIndex,
  isEmpty,
  eachTree,
  createObject,
} = utils

export {
  guid,
  isObjectShallowModified,
  // isObject,
  anyChanged,
  noop,
  makeHorizontalDeeper,
  omitControls,
  isEmpty,
  cloneObject,
  eachTree,
  createObject,
}

export let themeConfig: any = {}
export let themeOptionsData: any = {}
export let cssVars: any = {}

export function __uri(id: string) {
  return id
}

export function cleanUndefined(obj: any) {
  if (!isObject(obj)) {
    return obj
  }

  Object.keys(obj).forEach((key: string) => {
    const prop = obj[key]
    if (typeof prop === "undefined") {
      delete obj[key]
    }
  })

  return obj
}

let themeUselessPropKeys: Array<string> = []

/**
 * 把 schema 处理一下传给 Preview 去渲染
 * 给每个节点加个 $$id 这样方便编辑
 * @param obj
 */
export function JSONPipeIn(obj: any, reGenerateId = false, idMap: any = {}): any {
  if (Array.isArray(obj)) {
    let flag = false // 有必要时才去改变对象的引用
    const ret = obj.map((item) => {
      const patched = JSONPipeIn(item, reGenerateId, idMap)
      if (patched !== item) {
        flag = true
      }
      return patched
    })
    return flag ? ret : obj
  } else if (!isObject(obj) || obj.constructor !== Object) {
    if (typeof obj === "string") {
      Object.keys(idMap).forEach((oldId) => {
        const newId = idMap[oldId]
        obj = obj.replaceAll(oldId, newId)
      })
    }

    return obj
  }

  let toUpdate: any = {}
  let flag = false

  if (!obj.$$id) {
    flag = true
    toUpdate.$$id = guid()
  }

  if (
    themeUselessPropKeys.length > 2 &&
    obj[themeUselessPropKeys[0]] &&
    obj[themeUselessPropKeys[1]] &&
    obj[themeUselessPropKeys[2]]
  ) {
    flag = true
    themeUselessPropKeys.forEach((key) => {
      toUpdate[key] = undefined
    })
  }

  if (obj.type) {
    obj = style2ThemeCss(obj)

    obj = clearDirtyCssKey(obj)

    if (reGenerateId) {
      flag = true

      if ((!obj.__origin || obj.__origin !== "scaffold") && typeof obj.id === "string" && obj.id.startsWith("u:")) {
        const newId = generateNodeId()
        obj.id && (idMap[obj.id] = newId)
        toUpdate.id = newId
      }
    }
  }

  Object.keys(obj).forEach((key) => {
    let item = obj[key]
    let patched = JSONPipeIn(item, reGenerateId, idMap)

    if (patched !== item) {
      flag = true
      toUpdate[key] = patched
    }
  })

  if (flag) {
    obj = cleanUndefined({
      ...obj,
      ...toUpdate,
    })
  }

  return obj
}

export function JSONPipeOut(obj: any, filterHiddenProps?: boolean | ((key: string, prop: any) => boolean)) {
  if (Array.isArray(obj)) {
    let flag = false
    const ret: any = obj.map((item: any) => {
      const newItem = JSONPipeOut(item, filterHiddenProps)

      if (newItem !== item) {
        flag = true
      }

      return newItem
    })
    return flag ? ret : obj
  }
  if (!isPlainObject(obj)) {
    return obj
  }

  let flag = false
  let toUpdate: any = {}

  if (obj.$$id) {
    flag = true
    toUpdate.$$id = undefined
  }

  Object.keys(obj).forEach((key) => {
    let prop = obj[key]

    if (
      typeof filterHiddenProps === "function"
        ? filterHiddenProps(key, prop)
        : filterHiddenProps !== false && key.substring(0, 2) === "__"
    ) {
      toUpdate[key] = undefined
      flag = true
      return
    }

    let patched = JSONPipeOut(prop, filterHiddenProps)
    if (patched !== prop) {
      flag = true
      toUpdate[key] = patched
    }
  })

  flag &&
    (obj = cleanUndefined({
      ...obj,
      ...toUpdate,
    }))

  return obj
}

export function JSONGetByPath(json: any, paths: Array<string>, stacks?: Array<any>) {
  let target = json
  stacks && stacks.push(json)
  paths.forEach((key) => {
    target = target[key]
    stacks && stacks.push(target)
  })
  return target
}

export function JSONGetPathById(json: any, id: string, idKey: string = "$$id"): Array<string> | null {
  let paths: Array<string> = []
  let resolved: boolean = false
  let stack: Array<any> = [
    {
      path: ".",
      data: json,
    },
  ]

  while (stack.length) {
    let cur = stack.shift()
    let data = cur.data
    let path = cur.path

    if (data[idKey] === id) {
      resolved = true
      paths = path.split(".").filter((item: any) => item)
      break
    }

    Object.keys(data).forEach((key) => {
      let prop = data[key]

      if (Array.isArray(prop)) {
        prop.forEach((item, index) => {
          if (isObject(item)) {
            stack.push({
              data: item,
              path: `${path}.${key}.${index}`,
            })
          }
        })
      } else if (isObject(prop)) {
        stack.push({
          data: prop,
          path: `${path}.${key}`,
        })
      }
    })
  }

  return resolved ? paths : null
}

export function JSONGetById(json: any, id: string, idKey?: string): any {
  let paths = JSONGetPathById(json, id, idKey)
  if (paths === null) {
    return null
  }

  return JSONGetByPath(json, paths)
}

export function JSONGetNodesById(json: any, id: string, idKey: string = "$$id"): Array<any> {
  let result: Array<any> = []

  // @ts-ignore
  JSONTraverse(json, (value: any, key: string, host: any) => {
    if (key === idKey && value == id) {
      result.push(host)
    }
  })
  return result
}

export function JSONGetParentById(json: any, id: string, skipArray: boolean = false): any {
  const paths = JSONGetPathById(json, id)
  if (paths === null || !paths.length) {
    return null
  }

  let target = json
  let targets: Array<any> = [target]
  paths.pop()
  paths.forEach((key) => {
    target = target[key]
    targets.unshift(target)
  })

  while (skipArray && Array.isArray(targets[0])) {
    targets.shift()
  }

  return targets[0]
}

export function JSONUpdate(json: any, id: string, value: any, replace: boolean = false): any {
  let paths = JSONGetPathById(json, id)

  if (paths === null) {
    return json
  }

  let changes: Array<any> = []
  let target = JSONGetByPath(json, paths, changes)

  if (Array.isArray(value) && changes[changes.length - 2] && Array.isArray(changes[changes.length - 2])) {
    const idx = changes[changes.length - 2].indexOf(changes[changes.length - 1])
    changes[changes.length - 2] = changes[changes.length - 2].concat()
    changes[changes.length - 2].splice.apply(changes[changes.length - 2], [idx, 1].concat(value))
    changes.pop()
  } else {
    changes[changes.length - 1] = target = {
      ...(replace ? null : target),
      ...value,
      $$id: id,
    }
  }

  while (changes.length > 1) {
    let cur = changes.pop()

    if (Array.isArray(changes[changes.length - 1])) {
      changes[changes.length - 1] = changes[changes.length - 1].concat()
    } else {
      changes[changes.length - 1] = {
        ...changes[changes.length - 1],
      }
    }

    changes[changes.length - 1][paths[changes.length - 1]] = cur
  }

  return changes[0]
}

export function JSONDelete(json: any, id: string, pathsRef?: Array<string>, deleteIfEmpty?: boolean) {
  let paths = JSONGetPathById(json, id)

  if (paths === null) {
    return json
  }

  if (Array.isArray(pathsRef)) {
    pathsRef.push.apply(pathsRef, paths)
  }

  let key: string = paths.pop() as string
  let changes: Array<any> = []
  let target = JSONGetByPath(json, paths, changes)

  if (Array.isArray(target)) {
    changes[changes.length - 1] = target = target.concat()
    target.splice(key, 1)

    if (deleteIfEmpty && !target.length) {
      changes[changes.length - 1] = undefined
    }
  } else {
    changes[changes.length - 1] = target = {
      ...target,
    }
    delete target[key]
  }

  while (changes.length > 1) {
    let cur = changes.pop()

    if (Array.isArray(changes[changes.length - 1])) {
      changes[changes.length - 1] = changes[changes.length - 1].concat()
    } else {
      changes[changes.length - 1] = {
        ...changes[changes.length - 1],
      }
    }

    if (cur === void 0) {
      delete changes[changes.length - 1][paths[changes.length - 1]]
    } else {
      changes[changes.length - 1][paths[changes.length - 1]] = cur
    }
  }

  return changes[0]
}

export function JSONMerge(json: any, target: any) {
  if (!isObject(json) || !isObject(target)) {
    return target
  }

  if (!isObjectShallowModified(json, target)) {
    return json
  }

  let ret: any = {}

  json.$$id && (ret.$$id = json.$$id)
  Object.keys(target).forEach((key) => {
    if (Array.isArray(target[key]) && Array.isArray(json[key]) && target[key] !== json[key]) {
      ret[key] = target[key].map((item: any, index: number) => {
        return json[key][index] ? JSONMerge(json[key][index], item) : item
      })
    } else if (typeof json[key] === "undefined") {
      ret[key] = target[key]
    } else {
      ret[key] = JSONMerge(json[key], target[key])
    }
  })

  return ret
}

export function JSONChangeInArray(
  json: any,
  id: string,
  operation: (arr: Array<any>, node: any, index: number) => void,
) {
  const paths = JSONGetPathById(json, id)

  if (paths === null) {
    return json
  }

  let key: number = parseInt(paths.pop() as string, 10)
  let changes: Array<any> = []
  let target = JSONGetByPath(json, paths, changes)

  if (Array.isArray(target)) {
    changes[changes.length - 1] = target = target.concat()
    let node = target[key]
    operation(target, node, key)
  } else {
    return json
  }

  while (changes.length > 1) {
    let cur = changes.pop()

    if (Array.isArray(changes[changes.length - 1])) {
      changes[changes.length - 1] = changes[changes.length - 1].concat()
    } else {
      changes[changes.length - 1] = {
        ...changes[changes.length - 1],
      }
    }

    changes[changes.length - 1][paths[changes.length - 1]] = cur
  }

  return changes[0]
}

export function JSONCanMoveUp(json: any, id: string) {
  const parent = JSONGetParentById(json, id)

  if (!parent || !Array.isArray(parent)) {
    return false
  }

  const idx = findIndex(parent, (item) => item.$$id === id)
  return idx > 0
}

export function JSONMoveUpById(json: any, id: string) {
  return JSONChangeInArray(json, id, (arr: any[], node: any, index: number) => {
    if (index === 0) {
      return
    }
    arr.splice(index, 1)
    arr.splice(index - 1, 0, node)
  })
}

export function JSONCanMoveDown(json: any, id: string) {
  const parent = JSONGetParentById(json, id)

  if (!parent || !Array.isArray(parent)) {
    return false
  }

  const idx = findIndex(parent, (item) => item.$$id === id)
  return ~idx && idx < parent.length - 1
}

export function JSONMoveDownById(json: any, id: string) {
  return JSONChangeInArray(json, id, (arr: any[], node: any, index: number) => {
    if (index === arr.length - 1) {
      return
    }
    arr.splice(index, 1)
    arr.splice(index + 1, 0, node)
  })
}

export function JSONDuplicate(
  json: any,
  id: string,

  reIds: { [propKey: string]: string } = {},
) {
  return JSONChangeInArray(json, id, (arr: any[], node: any, index: number) => {
    const copy = JSONPipeIn(JSONPipeOut(node))
    arr.splice(index + 1, 0, reGenerateID(copy, reIds))
  })
}

export function reGenerateID(
  json: any,

  reIds: { [propKey: string]: string } = {},
) {
  const reComptIds: { [propKey: string]: string } = {}
  // @ts-ignore
  JSONTraverse(json, (value: any, key: string, host: any) => {
    const isNodeIdFormat = typeof value === "string" && value.indexOf("u:") === 0
    if ((key === "id" || key === "componentId") && isNodeIdFormat && host) {
      if (reIds[value]) {
        host[key] = reIds[value]
      } else if (reComptIds[value]) {
        host[key] = reComptIds[value]
        reIds[value] = reComptIds[value]
      } else {
        const newID = generateNodeId()
        host[key] = newID
        if (key === "id") {
          reIds[value] = newID
        } else if (key === "componentId") {
          reComptIds[value] = newID
        }
      }
    }

    return value
  })

  const resetComptIds: { [propKey: string]: string } = {}
  let needSecondTraverse = false
  Object.keys(reComptIds).forEach((uidKey: string) => {
    if (!reIds[uidKey]) {
      resetComptIds[reComptIds[uidKey]] = uidKey
      needSecondTraverse = true
    }
  })

  if (needSecondTraverse) {
    // @ts-ignore
    JSONTraverse(json, (value: any, key: string, host: any) => {
      const isNodeIdFormat = typeof value === "string" && value.indexOf("u:") === 0
      if (key === "componentId" && isNodeIdFormat && resetComptIds[value]) {
        host.componentId = resetComptIds[value]
      }
      return value
    })
  }
  return json
}

export function JsonGenerateID(json: any) {
  if (Object.isFrozen(json)) {
    return
  }
  if (Array.isArray(json)) {
    json.forEach((item: any) => JsonGenerateID(item))
  }
  if (!isObject(json) || isObservable(json)) {
    return
  }

  if (json.type && (!json.__origin || json.__origin !== "scaffold")) {
    json.id = generateNodeId()
  }

  Object.keys(json).forEach((key) => {
    let curElem = json[key]
    if (isObject(curElem) || Array.isArray(curElem)) {
      JsonGenerateID(curElem)
    }
  })
}

export function createElementFromHTML(htmlString: string): HTMLElement {
  const div = document.createElement("div")

  div.innerHTML = htmlString.trim()

  return div.firstChild as HTMLElement
}

export function deepFind(schema: any, keyValue: any, result: any = {}): any {
  if (schema?.$$commonSchema === keyValue || schema?.$$formSchema === keyValue) {
    result[keyValue] = schema
  } else if (isPlainObject(schema)) {
    Object.keys(schema).forEach((key) => {
      const value = schema[key]
      deepFind(value, keyValue, result)
    })
  } else if (Array.isArray(schema)) {
    schema.map((item) => deepFind(item, keyValue, result))
  }
  return result
}

export function filterSchemaForConfig(schema: any, valueWithConfig?: any): any {
  if (Array.isArray(schema)) {
    return schema.map((item) => filterSchemaForConfig(item, valueWithConfig))
  } else if (isPlainObject(schema)) {
    let mapped: any = {}
    let modified = false

    Object.keys(schema).forEach((key) => {
      const value = schema[key]
      const filtered = filterSchemaForConfig(value, valueWithConfig)

      if (schema.$$commonSchema || schema.$$formSchema) {
        mapped[key] && (mapped[key] = filtered)
      } else {
        mapped[key] = filtered
      }
      if (filtered !== value) {
        modified = true
      }

      if (key === "$$commonSchema" && !valueWithConfig) {
        schema = mapped = { $$commonSchema: value }
      } else if (key === "$$commonSchema" && valueWithConfig) {
        let config: any = deepFind(valueWithConfig, value)
        config[value] &&
          (schema = mapped =
            {
              ...config[value],
            })
      }

      if (key === "$$formSchema" && !valueWithConfig) {
        schema = mapped = { $$formSchema: value }
      } else if (key === "$$formSchema" && valueWithConfig) {
        let config: any = deepFind(valueWithConfig, value)
        config[value] &&
          (schema = mapped =
            {
              ...config[value],
            })
      }
    })
    return modified ? mapped : schema
  }

  return schema
}

export function filterSchemaForEditor(schema: any): any {
  if (Array.isArray(schema)) {
    return schema.map((item) => filterSchemaForEditor(item))
  }

  if (isPlainObject(schema)) {
    const mapped: any = {}
    let modified = false

    Object.keys(schema).forEach((key) => {
      const value = schema[key]
      if (~["visible", "visibleOn", "hidden", "hiddenOn", "toggled", "animations"].indexOf(key)) {
        key = `$$${key}`
        modified = true
      }
      const filtered = filterSchemaForEditor(value)
      mapped[key] = filtered

      if (filtered !== value) {
        modified = true
      }
    })
    return modified ? mapped : schema
  }

  return schema
}

export function blackList(list: Array<string>) {
  return (str: string) => !~list.indexOf(str)
}

export function sortByList(list: Array<string>, attr: string | Function) {
  let getter = attr ? (typeof attr === "function" ? attr : (item: any) => item[attr]) : (item: any) => item

  return (a: any, b: any) => {
    let left = list.indexOf(getter(a))
    let right = list.indexOf(getter(b))

    left = ~left ? left : 999999
    right = ~right ? right : 999999

    return left > right ? 1 : left === right ? 0 : -1
  }
}

export function persistGet(key: string, defaultValue?: any): any {
  let value: any = localStorage.getItem(`amis-editor-${key}`)

  if (value) {
    value = JSON.parse(value)
  }

  return value || defaultValue
}

export function persistSet(key: string, value: any) {
  value = JSON.stringify(value)
  localStorage.setItem(`amis-editor-${key}`, value)
}

export function normalizeId(id: string) {
  return id.replace(/\-[a-z0-9]+$/g, "")
}

export const autobind = utils.autobind

export function addDragingClass(el: HTMLElement) {
  while (el) {
    el.classList.add("ae-is-draging")

    el = el.parentElement as HTMLElement

    if (el?.hasAttribute("data-region")) {
      break
    }
  }
}

export function removeDragingClass(el: HTMLElement) {
  while (el) {
    el.classList.remove("ae-is-draging")

    el = el.parentElement as HTMLElement

    if (el?.hasAttribute("data-region")) {
      break
    }
  }
}

export function camelize(str: string) {
  return str.replace(/\W+(.)/g, function (match, chr) {
    return chr.toUpperCase()
  })
}

export const reactionWithOldValue = <T>(expression: () => T, effect: (newValue: T, oldValue?: T) => void) => {
  let oldValue: T
  return reaction(expression, (v) => {
    if (!isEqual(v, oldValue)) {
      effect(v, oldValue)
      oldValue = v
    }
  })
}

export function repeatArray<T>(child: T, count: number = 1): Array<T> {
  const arr: Array<T> = []

  while (count-- > 0) {
    arr.push(child)
  }

  return arr
}

export type DiffChange = Diff<any, any>

export function diff(
  left: any,
  right: any,
  prefilter?: (currentPath: Array<string>, key: string) => boolean,
): Array<DiffChange> | undefined {
  return DeepDiff.diff(left, right, prefilter)
}

export function patchDiff(left: any, changes: Array<DiffChange> | undefined) {
  if (!changes) {
    return left
  }

  return changes.reduce((target: any, change: DiffChange) => applyChange(target, left, change), left)
}

function applyChange(target: any, source: any, change: DiffChange) {
  if (target && Array.isArray(change?.path)) {
    target = target === source ? { ...target } : target

    const path = change.path.concat()

    if (change.kind !== "A") {
      path.pop()
    }

    path.reduce(
      ({ target, source }, key) => {
        const nextSource = source[key]
        let nextTarget = target[key]

        if (nextSource === nextTarget) {
          nextTarget = Array.isArray(nextTarget) ? nextTarget.concat() : { ...nextTarget }
          target[key] = nextTarget
        }

        return {
          source: nextSource,
          target: nextTarget,
        }
      },
      {
        target,
        source,
      },
    )

    DeepDiff.applyChange(target, source, change)
  }

  return target
}

export function JSONTraverse(
  json: any,
  mapper: (value: any, key: string | number, host: Object) => any,
  ignore?: (value: any, key: string | number) => boolean | void,
) {
  Object.keys(json).forEach((key) => {
    const value: any = json[key]
    if (ignore?.(value, key)) {
      return
    }
    if (isPlainObject(value) || Array.isArray(value)) {
      JSONTraverse(value, mapper, ignore)
    } else {
      mapper(value, key, json)
    }
  })
}

export type PanelSchemaObject = Schema

export const isNumeric = (value: any) => {
  return isNumber(value) || !isNaN(parseFloat(String(value).toString()))
}

export const string2CSSUnit = (value: any, unit: string = "px") => {
  return value ? (isNumeric(value) ? `${parseFloat(String(value).toString())}${unit}` : value) : undefined
}

export function isString(obj: any) {
  return Object.prototype.toString.call(obj).slice(8, -1) === "String"
}

export function isObject(curObj: any) {
  return Object.prototype.toString.call(curObj).slice(8, -1) === "Object"
}

export function jsonToJsonSchema(
  json: any = {},
  titleBuilder?: (type: string, key: string) => string,
  maxDepth: number = 3,
) {
  const jsonschema: any = {
    type: "object",
    properties: {},
  }

  isObservable(json) ||
    maxDepth <= 0 ||
    Object.keys(json).forEach((key) => {
      const value = json[key]
      const type = Array.isArray(value) ? "array" : typeof value

      if (~["string", "number"].indexOf(type)) {
        jsonschema.properties[key] = {
          type,
          title: titleBuilder?.(type, key) || key,
        }
      } else if (~["object", "array"].indexOf(type) && value) {
        jsonschema.properties[key] = {
          type,
          title: titleBuilder?.(type, key) || key,
          ...(type === "object"
            ? jsonToJsonSchema(value, titleBuilder, maxDepth - 1)
            : typeof value[0] === "object"
              ? { items: jsonToJsonSchema(value[0], titleBuilder, maxDepth - 1) }
              : {}),
        }
      } else {
        jsonschema.properties[key] = {
          type: "",
          title: titleBuilder?.(type, key) || key,
        }
      }
    })

  return jsonschema
}

export function generateNodeId() {
  return "u:" + guid()
}

export function isHasPluginIcon(plugin: any) {
  return plugin.pluginIcon && hasIcon(plugin.pluginIcon)
}

export function isLayoutPlugin(plugin: any) {
  return !!(plugin && plugin.type === "flex")
}

export function unitFormula(insetStr: string, offsetVal: number) {
  if (insetStr === "auto") {
    return "auto"
  }
  const insetNum = parseInt(insetStr)
  let curOffsetVal = offsetVal
  if (!isNumber(offsetVal)) {
    curOffsetVal = parseInt(offsetVal)
  }
  let insetUnit = insetStr.substring(insetNum.toString().length)
  if (!insetUnit) {
    insetUnit = "px"
  }
  const newOffsetVal = insetNum + curOffsetVal
  return `${newOffsetVal}${insetUnit}`
}

export function stringRegExp(keyword: string) {
  return keyword.replace(/[|\\{}()[\]^$+*?.]/g, "")
}

export function needDefaultWidth(elemType: string) {
  const needDefaultWidthElemType: Array<string> = [
    "divider",
    "crud2",
    "crud",
    "list",
    "picker",
    "table",
    "table-view",
    "grid",
    "cards",
    "card",
    "form",
    "progress",
    "diff-editor",
    "editor",
    "input-range",
    "flex",
  ]
  return needDefaultWidthElemType.includes(elemType)
}

export function getI18nEnabled() {
  return (window as any)?.editorStore?.i18nEnabled ?? false
}

export function translateSchema(schema: any, replaceData?: any, skipFn?: any) {
  replaceData = replaceData || (window as any)?.editorStore?.appCorpusData
  if (!isPlainObject(replaceData)) {
    return schema
  }
  return mapObject(schema, (item: any) => replaceData[item] || item, skipFn)
}

export function appTranslate(value?: string) {
  if (!isString(value)) {
    return value
  }
  return (window as any)?.editorStore?.appCorpusData?.[value!] || value
}

export function needFillPlaceholder(curProps: any) {
  if (!curProps) {
    return false
  }

  if (curProps.rendererName === "page" && (curProps.name === "aside" || curProps.name === "body")) {
    return true
  }

  if (curProps.node?.schema?.isFreeContainer) {
    return true
  }

  return !!(curProps.$$editor?.needFillPlaceholder || curProps.regionConfig?.needFillPlaceholder)
}

export function setThemeConfig(config: any) {
  themeConfig = config
  themeOptionsData = getGlobalData(themeConfig)
  themeUselessPropKeys = Object.keys(getThemeConfig())
  cssVars = getAllCssVar()
}

export function getCssVarById(id: string, selectorText: string) {
  const styleSheets = document.styleSheets
  let cssVars: PlainObject = {}
  for (const styleSheet of styleSheets) {
    if ((styleSheet.ownerNode as Element)?.id === id) {
      for (let i = 0; i < styleSheet.cssRules.length; i++) {
        const cssRule = styleSheet.cssRules[i] as any
        if ((cssRule as any).selectorText?.includes(selectorText)) {
          const cssText = cssRule.style.cssText
          const cssArr = cssText.split("; ")
          cssArr.forEach((item: string) => {
            if (item) {
              const [key, value] = item.split(": ")
              cssVars[key] = value
            }
          })
        }
      }
      break
    }
  }
  return cssVars
}

export function getAllCssVar() {
  const cssVars = getCssVarById("baseStyle", ":root, .AMISCSSWrapper")
  const themeCssVars = getCssVarById("themeCss", ".app-popover, #editor-preview-body")

  return Object.assign({}, cssVars, themeCssVars)
}

export function getThemeConfig() {
  return { themeConfig, ...themeOptionsData, cssVars }
}

const backgroundMap: PlainObject = {
  "background-color": "background",
}

export function style2ThemeCss(data: any) {
  if (
    !data?.style ||
    isEmpty(data.style) ||
    !["tpl", "page", "container", "chart", "flex", "grid"].includes(data.type)
  ) {
    return data
  }
  const style = { ...data.style }
  let baseControlClassName: PlainObject = {}
  const border: PlainObject = {}
  const paddingAndMargin: PlainObject = {}
  const font: PlainObject = {}
  Object.keys(style).forEach((key) => {
    if (["background", "background-color", "radius", "boxShadow"].includes(key)) {
      baseControlClassName[(backgroundMap[key] || key) + ":default"] = style[key]
      delete style[key]
    } else if (["color", "fontSize", "fontWeight", "font-family", "lineHeight"].includes(key)) {
      font[key] = style[key]
      delete style[key]
    } else if (key.includes("border")) {
      border[key] = style[key]
      delete style[key]
    } else if (key.includes("padding") || key.includes("margin")) {
      paddingAndMargin[key] = style[key]
      delete style[key]
    }
  })
  baseControlClassName = Object.assign(
    isEmpty(baseControlClassName) ? {} : baseControlClassName,
    isEmpty(border) ? {} : { "border:default": border },
    isEmpty(paddingAndMargin) ? {} : { "padding-and-margin:default": paddingAndMargin },
    isEmpty(font) ? {} : { "font:default": font },
  )
  if (isEmpty(baseControlClassName)) {
    return data
  }
  let themeCss = { baseControlClassName }
  if (!data.themeCss) {
    themeCss = {
      baseControlClassName,
    }
  } else {
    themeCss.baseControlClassName = merge(data.themeCss.baseControlClassName, baseControlClassName)
  }
  return {
    ...data,
    style,
    themeCss,
  }
}

export function clearDirtyCssKey(data: any) {
  if (!data?.type) {
    return data
  }
  const temp = { ...data }
  Object.keys(temp).forEach((key) => {
    if (key.startsWith(".") || key.startsWith("#")) {
      delete temp[key]
    }
    if (key === "editorState") {
      delete temp[key]
    }
  })
  return temp
}

export async function resolveVariablesFromScope(node: any, manager: any) {
  await manager?.getContextSchemas(node)

  let variableOptions = (await manager?.dataSchema?.getDataPropsAsOptions()) ?? []

  let hostNodeVaraibles = []
  if (manager?.store?.isSubEditor) {
    hostNodeVaraibles = manager.config?.hostNode?.info?.getSubEditorVariable?.(manager.config?.hostNode.schema) || []

    const hostNodeDataSchema = await manager.config.getHostNodeDataSchema()
    const hostContextVariables = (hostNodeDataSchema?.getDataPropsAsOptions() || [])
      .filter((item: any) => item.label === "组件上下文")
      .reduce((arr: any, item: any) => {
        arr.push(...(item.children || []))
        return arr
      }, [])
    if (hostContextVariables?.length) {
      let hasContextVariables = false
      variableOptions = variableOptions.map((item: any) => {
        if (item.label === "组件上下文" && !hasContextVariables) {
          hasContextVariables = true
          item.children = item.children.concat(hostContextVariables)
        }
        return item
      })

      if (!hasContextVariables) {
        variableOptions = [
          {
            label: "组件上下文",
            children: hostContextVariables,
          },
          ...variableOptions,
        ]
      }
    }
  }
  const dataPropsAsOptions: VariableItem[] = updateComponentContext(variableOptions)

  const variables: VariableItem[] = manager?.variableManager?.getVariableFormulaOptions() || []

  return [...hostNodeVaraibles, ...dataPropsAsOptions, ...variables].filter(
    (item: any) => (item.children && item.children?.length) || !item.children,
  )
}

export async function getVariables(that: any) {
  let variablesArr: any[] = []

  const { variables, requiredDataPropsVariables } = that.props
  const selfName = that.props?.data?.name
  if (!variables || requiredDataPropsVariables) {
    const { node, manager } = that.props.formProps || that.props
    let vars = await resolveVariablesFromScope(node, manager)
    if (Array.isArray(vars)) {
      if (!that.isUnmount) {
        variablesArr = filterVariablesOfScope(vars, selfName)
      }
    }
  }
  if (variables) {
    if (Array.isArray(variables)) {
      variablesArr = [...variables, ...variablesArr]
    } else if (typeof variables === "function") {
      variablesArr = [...variables(that), ...variablesArr]
    } else if (isExpression(variables)) {
      variablesArr = [
        ...resolveVariableAndFilter(that.props.variables as any, that.props.data, "| raw"),
        ...variablesArr,
      ]
    }
  }

  if (that.appLocale && that.appCorpusData) {
    return translateSchema(variablesArr, that.appCorpusData)
  }

  return variablesArr
}

function filterVariablesOfScope(options: any[], selfName?: string) {
  const idx = options.findIndex((i) => i.label === "组件上下文")
  const arr = options[idx]?.children || []
  const restOptions = options.filter((_, i) => i !== idx)
  const variables = mapTree(arr, (item: any) => {
    if (item.type === "array" && Array.isArray(item.children)) {
      if (item.children.length === 1) {
        const child = item.children[0]
        if (child.type === "object" && child.disabled) {
          return {
            ...item,
            children: child.children,
          }
        }
      }
    }
    return item
  })
  const finalVars = filterTree(variables, (item) => {
    if (item.rawType && item.type === "array" && item.children) {
      const idx = item.children.findIndex((i: any) => i.value === `${item.value}.${selfName}`)
      return !~idx
    }
    return true
  })
  return [...finalVars, ...restOptions]
}

export async function getQuickVariables(that: any, filter?: Function) {
  const { node, manager } = that.props.formProps || that.props
  const { quickVars, data } = that.props
  const selfName = data?.name
  await manager?.getContextSchemas(node)
  const options = await manager?.dataSchema?.getDataPropsAsOptions()
  if (Array.isArray(options)) {
    const curOptions = mapTree(filterVariablesOfScope(options), (item) => {
      delete item.tag
      return item
    })
    return resolveQuickVariables(curOptions, quickVars, selfName, filter)
  }

  return []
}

export async function getConditionVariables(that: any, filter?: Function) {
  const { node, manager } = that.props.formProps || that.props
  const selfName = that.props?.data?.name
  await manager?.getContextSchemas(node)
  const isCell = node.type === "cell"
  const options = await manager?.dataSchema?.getDataPropsAsOptions()
  if (Array.isArray(options)) {
    const finalVars = []
    const [curOption, superOption] = filterVariablesOfScope(options)

    const variables = (!isCell ? curOption.children || [] : []).filter(
      (item: any) => item.value !== selfName && item.type && item.rawType && item.type !== "array",
    )
    finalVars.push(...variables)
    if (superOption?.children?.length) {
      const superVars = superOption?.children.filter((item: any) => item.type && item.rawType && item.type !== "array")
      finalVars.push(...superVars)
    }

    return finalVars
  }
  return []
}

export function resolveQuickVariables(options: any, quickVars?: VariableItem[], selfName?: string, filter?: Function) {
  if (!Array.isArray(options)) {
    return []
  }
  const finalVars = []
  const curOption = options[0]
  const superOption = options[1]
  const variables = (curOption.children || [])
    .filter((item: any) => item.value !== selfName && item.rawType && item.rawType !== "boolean")
    .map((item: any) => {
      if (item.type === "array" && Array.isArray(item.children)) {
        if (item.children.length === 1) {
          const child = item.children[0]
          if (child.type === "object" && child.disabled) {
            return {
              ...item,
              children: child.children,
            }
          }
        }
      }
      return item
    })
  if (superOption?.children?.length) {
    const superVars = superOption?.children.filter(
      (item: any) => item.rawType && item.rawType !== "boolean" && item.type !== "array",
    )
    finalVars.push(...superVars)
    finalVars.push({
      label: curOption.label,
      children: variables,
    })
  } else {
    finalVars.push(...variables)
  }

  const filterVar = filter ? filter(finalVars) : finalVars

  function sortVars(arr: any[]) {
    const arrs = [...arr]
    arrs.sort((obj1, obj2) => {
      if ("children" in obj1 && !("children" in obj2)) {
        return 1
      } else if (!("children" in obj1) && "children" in obj2) {
        return -1
      } else {
        return 0
      }
    })
    return arrs
  }

  if (quickVars?.length) {
    const vars: VariableItem[] = []

    if (!filterVar.length) {
      vars.push(...quickVars)
    } else {
      vars.push({
        label: "快捷变量",
        type: "quickVars",
        children: quickVars,
      })
    }

    if (filterVar.length) {
      vars.push(...filterVar)
    }

    return sortVars(vars)
  }

  return sortVars(filterVar)
}

export const updateComponentContext = (variables: any[]) => {
  const items = [...variables]
  const idx = items.findIndex((item) => item.label === "组件上下文")
  if (~idx) {
    items.splice(idx, 1, {
      ...items[idx],
      children: items[idx].children.map((child: any, index: number) => ({
        ...child,
        label:
          index === 0
            ? `当前层${child.label ? "(" + child.label + ")" : ""}`
            : child.title || `上${index}层${child.label ? "(" + child.label + ")" : ""}`,
      })),
    })
  }
  return items
}

export const scrollToActive = debounce((selector: string) => {
  const dom = document.querySelector(selector)
  if (dom) {
    ;(dom as any).scrollIntoViewIfNeeded ? (dom as any).scrollIntoViewIfNeeded() : dom.scrollIntoView()
  }
}, 200)

export function addModal(schema: any, modal: any, definitions?: any, isKeyValid?: (key: string) => boolean) {
  schema = { ...schema, definitions: { ...schema.definitions } }

  if (definitions && isPlainObject(definitions)) {
    schema = mergeDefinitions(schema, definitions, modal)
  }

  let idx = 1
  while (true) {
    if (!schema.definitions[`modal-ref-${idx}`] && (!isKeyValid || isKeyValid(`modal-ref-${idx}`))) {
      break
    }
    idx++
  }
  modal = {
    type: "dialog",
    body: [{ type: "tpl", tpl: "这是一个弹窗" }],
    title: `未命名弹窗${idx}`,
    ...modal,
    $$id: guid(),
  } as any
  schema.definitions[`modal-ref-${idx}`] = JSONPipeIn(modal)

  return [schema, `modal-ref-${idx}`]
}

export function modalsToDefinitions(
  modals: Array<EditorModalBody>,
  definitions: any = {},
  edtingModal?: EditorModalBody,
) {
  let schema = {
    definitions,
  }

  modals.forEach((modal, idx) => {
    if (edtingModal && (edtingModal.$$ref ? edtingModal.$$ref === modal.$$ref : edtingModal.$$id === modal.$$id)) {
      return
    } else if (
      !modal.$$ref &&
      modal.$$id &&
      (JSONGetById(schema.definitions, modal.$$id) || (edtingModal && JSONGetById(edtingModal, modal.$$id)))
    ) {
      return
    }

    if (modal.$$ref) {
      schema.definitions[modal.$$ref] = JSONPipeIn(modal)
    } else {
      ;[schema] = addModal(
        schema,
        { ...modal, $$originId: modal.$$id },
        undefined,
        (key) => !modals.find((m) => m.$$ref && m.$$ref === key),
      )
    }
  })
  return schema.definitions
}

export function mergeDefinitions(originSchema: any, definitions: any, modal: any) {
  const refs: Array<string> = []
  JSONTraverse(modal, (value, key) => {
    if (key === "$ref") {
      refs.push(value)
    }
  })

  let schema = originSchema
  Object.keys(definitions).forEach((key) => {
    if (schema === originSchema) {
      schema = { ...schema, definitions: { ...schema.definitions } }
    }

    const { $$originId, ...def } = definitions[key]

    if ($$originId) {
      const parent = JSONGetParentById(schema, $$originId)

      if (refs.includes(key)) {
        if (schema.$$id === $$originId) {
          schema = JSONUpdate(schema, $$originId, JSONPipeIn(def), true)
          return
        }

        if (!parent) {
          throw new Error("Can not find modal action.")
        }

        const modalType = def.type === "drawer" ? "drawer" : "dialog"
        schema = JSONUpdate(
          schema,
          parent.$$id,
          {
            ...parent,
            __actionModals: undefined,
            args: undefined,
            dialog: undefined,
            drawer: undefined,
            actionType: def.actionType ?? modalType,
            [modalType]: JSONPipeIn({
              $ref: key,
            }),
          },
          true,
        )
        schema.definitions[key] = JSONPipeIn(def)
      } else if (parent) {
        const modalType = def.type === "drawer" ? "drawer" : "dialog"
        const origin = parent[modalType] || {}

        const changes = diff(origin, def, (path, key) => key === "$$id")
        if (changes) {
          const newModal = patchDiff(origin, changes)
          delete newModal.$$originId
          schema = JSONUpdate(
            schema,
            parent.$$id,
            {
              ...parent,
              __actionModals: undefined,
              args: undefined,
              dialog: undefined,
              drawer: undefined,
              actionType: def.actionType ?? modalType,
              [modalType]: newModal,
            },
            true,
          )
        }
      }
    } else if (refs.includes(key)) {
      schema.definitions[key] = JSONPipeIn(def)
    }
  })

  return schema
}

export function setDefaultColSize(regionList: any[], row: number, preRow?: number) {
  const tempList = [...regionList]
  const preRowNodeLength = filter(tempList, (n) => n.row === preRow).length
  const currentRowNodeLength = filter(tempList, (n) => n.row === row).length
  for (let i = 0; i < tempList.length; i++) {
    const item = tempList[i]
    if (item.row === preRow) {
      item.colSize = preRowNodeLength > 1 ? `1/${preRowNodeLength}` : "1"
    }
    if (item.row === row) {
      item.colSize = currentRowNodeLength > 1 ? `1/${currentRowNodeLength}` : "1"
    }

    if (
      ((preRowNodeLength === 1 && item.row === preRow) || (currentRowNodeLength === 1 && item.row === row)) &&
      item.$$defaultColSize
    ) {
      item.colSize = item.$$defaultColSize
    }
  }
  return tempList
}

export function getModals(schema: any) {
  const modals: Array<DialogSchema | DrawerSchema> = []
  // @ts-ignore
  JSONTraverse(schema, (value: any, key: string, host: any) => {
    if (key === "actionType" && ["dialog", "drawer", "confirmDialog"].includes(value)) {
      const key = value === "drawer" ? "drawer" : "dialog"
      const body = host[key] || host["args"]
      if (body && !body.$ref && !modals.find((item) => item.$$id === body.$$id)) {
        modals.push({
          ...body,
          type: key,
          actionType: value,
        })
      }
    }
    return value
  })

  Object.keys(schema.definitions || {})
    .reverse()
    .forEach((key) => {
      const definition = schema.definitions[key]
      if (["dialog", "drawer"].includes(definition.type)) {
        if (definition.$$originId && modals.find((item) => item.$$id === definition.$$originId)) {
          return
        }

        modals.unshift({
          ...definition,
          $$ref: key,
        })
      }
    })

  if (["dialog", "drawer", "confirmDialog"].includes(schema.type)) {
    const idx = modals.findIndex((item) => item.$$id === schema.$$id)
    if (~idx) {
      modals.splice(idx, 1)
    }

    modals.unshift({
      ...schema,

      definitions: undefined,
    })
  }
  return modals
}

export function deepSplice(target: any, path: string, numberToDelete: number, ...items: any[]) {
  const paths = path.split(".")
  const last = paths.pop()!
  let host = target
  const stack: Array<{
    host: any
    key: string | number | undefined
  }> = []
  for (let i = 0; i < paths.length; i++) {
    stack.unshift({
      key: paths[i]!,
      host: host,
    })
    host = host[paths[i]]
  }

  if (!Array.isArray(host)) {
    throw new Error("deepSplice: target is not an array")
  }
  host = host.concat()
  host.splice.apply(host, [last, numberToDelete].concat(items))

  return stack.reduce((prefix, { host, key }) => {
    host = Array.isArray(host) ? host.concat() : { ...host }
    host[key!] = prefix

    return host
  }, host)
}

export const RAW_TYPE_MAP: {
  [k in SchemaType | "user-select" | "department-select"]?:
    | "string"
    | "number"
    | "array"
    | "boolean"
    | "object"
    | "enum"
    | "date"
    | "datetime"
    | "time"
    | "quarter"
    | "year"
    | "month"
    | "user"
    | "department"
} = {
  "input-text": "string",
  "input-password": "string",
  "input-email": "string",
  "input-url": "string",
  "input-rich-text": "string",
  textarea: "string",
  "input-formula": "string",
  "input-image": "string",
  "input-repeat": "string",
  "location-picker": "string",

  "input-number": "number",
  "input-range": "number",
  "input-rating": "number",

  radio: "boolean",
  switch: "boolean",

  select: "enum",
  "multi-select": "enum",
  "tree-select": "enum",
  "nested-select": "enum",
  "list-select": "enum",
  "input-tree": "enum",
  "input-tag": "enum",
  "tabs-transfer": "enum",
  transfer: "enum",
  "transfer-picker": "enum",
  "tabs-transfer-picker": "enum",
  radios: "enum",

  "input-date": "date",
  "input-date-range": "date",

  "input-time": "time",
  "input-time-range": "time",

  "input-month": "month",
  "input-month-range": "month",

  "input-datetime": "datetime",
  "input-quarter": "quarter",
  "input-year": "year",
  "input-datetime-range": "datetime",

  "input-quarter-range": "quarter",

  "input-table": "array",

  "user-select": "user",
  "department-select": "department",
}
