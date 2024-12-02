import RightPanels from "@/packages/editor-code/component/Panel/RightPanels.tsx"
import RenderersPanel from "@/packages/editor-code/component/Panel/RenderersPanel.tsx"
import { SchemaForm } from "@/packages/editor-code/component/base/SchemaForm.tsx"
import BackTop from "@/packages/editor-code/component/base/BackTop.tsx"
import { ErrorRenderer } from "@/packages/editor-code/component/base/ErrorRenderer.tsx"
import SearchCustomRendererPanel from "@/packages/editor-code/component/base/SearchCustomRendererPanel.tsx"
import SearchPanel from "@/packages/editor-code/component/base/SearchPanel.tsx"


import { data as groupedRenderersByKeyword } from "@/amis/_discover_/datasets/groupedRenderersByKeyword.ts"

import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons"
import pluginA from "./helpers/PluginA.tsx"
import pluginB from "./helpers/PluginB.tsx"

export const componentsTree: any = {
  'right-panels': RightPanels,
  'renderers-panel': RenderersPanel,
  'schema-form': SchemaForm,
  'back-top': BackTop,
  'error-renderer': ErrorRenderer,
  'search-custom-renderer-panel': SearchCustomRendererPanel,
  'search-panel': SearchPanel,
  'pluginA': pluginA,
  'pluginB': pluginB
}

export const propsList: any = {
  'right-panels': {},
  'renderers-panel': {
    "store": "any",
    "manager": "any",
    "groupedRenderers": {
      "type": "object",
      "properties": {
        "propName": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "id": "string",
              "name": "string",
              "plugin": {
                "type": "object",
                "properties": {
                  "rendererName": "string"
                }
              },
              "scaffold": "object",
              "icon": "string"
            }
          }
        }
      }
    },
    "searchRendererType": "string",
    "className": "string",
    "testIdBuilder": "any",
    "noop": "function",
    "isHasPluginIcon": "function"
  },
  "schema-form": {
    "type": "object",
    "properties": {
      "propKey": {
        "type": "string",
        "description": "The key for the form schema."
      },
      "body": {
        "type": "array",
        "items": {
          "type": "object"
        },
        "description": "The body of the form schema."
      },
      "definitions": {
        "type": "object",
        "description": "The definitions for the form schema."
      },
      "onChange": {
        "type": "function",
        "description": "The function to call when the form value changes."
      },
      "value": {
        "type": "any",
        "description": "The current value of the form."
      },
      "env": {
        "type": "any",
        "description": "The environment configuration."
      },
      "api": {
        "type": "any",
        "description": "The API configuration for the form."
      },
      "popOverContainer": {
        "type": "function",
        "description": "The function to get the popover container."
      },
      "submitOnChange": {
        "type": "boolean",
        "description": "Whether to submit the form on change."
      },
      "node": {
        "type": "any",
        "description": "The editor node type."
      },
      "manager": {
        "type": "any",
        "description": "The editor manager."
      },
      "justify": {
        "type": "boolean",
        "description": "Whether to justify the form layout."
      },
      "ctx": {
        "type": "any",
        "description": "The context for the form."
      },
      "pipeIn": {
        "type": "function",
        "description": "The function to transform the input value."
      },
      "pipeOut": {
        "type": "function",
        "description": "The function to transform the output value."
      },
      "readonly": {
        "type": "boolean",
        "description": "Whether the form is read-only."
      },
      "getThemeConfig": {
        "type": "function",
        "description": "Function to get the theme configuration."
      },
      "diff": {
        "type": "function",
        "description": "Function to calculate the difference between two values."
      }
    },
    "required": ["onChange", "env", "manager", "getThemeConfig", "diff"]
  },
  "back-top": {
    "type": "object",
    "properties": {
      "visibilityHeight": {
        "type": "number",
        "default": 400
      },
      "onClick": {
        "type": "function",
        "default": null
      },
      "target": {
        "type": "function",
        "default": "window"
      },
      "children": {
        "type": "any",
        "default": null
      },
      "className": {
        "type": "string",
        "default": ""
      }
    },
    "required": ["target"]
  },
  "error-renderer": {
    "type": "object",
    "properties": {
      "apiUrl": {
        "type": "string",
        "format": "uri"
      },
      "timeout": {
        "type": "integer",
        "minimum": 0
      },
      "retryAttempts": {
        "type": "integer",
        "minimum": 0
      },
      "logLevel": {
        "type": "string",
        "enum": ["debug", "info", "warn", "error"]
      },
      "features": {
        "type": "object",
        "properties": {
          "enableFeatureX": {
            "type": "boolean"
          },
          "enableFeatureY": {
            "type": "boolean"
          }
        },
        "required": ["enableFeatureX", "enableFeatureY"]
      }
    },
    "required": ["apiUrl", "timeout", "retryAttempts", "logLevel", "features"]
  },
  "search-custom-renderer-panel": {
    "type": "object",
    "properties": {
      "store": {
        "type": "object",
        "properties": {
          "customRenderersByOrder": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": { "type": "string" },
                "name": { "type": "string" },
                "disabledRendererPlugin": { "type": "boolean" }
              },
              "required": ["id", "name"]
            }
          },
          "customRenderersKeywords": { "type": "string" },
          "customRenderersTag": { "type": "string" },
          "changeCustomRenderersKeywords": {
            "type": "function",
            "description": "Function to change the custom renderers keywords"
          },
          "changeCustomRenderersTag": {
            "type": "function",
            "description": "Function to change the custom renderers tag"
          }
        },
        "required": [
          "customRenderersByOrder",
          "customRenderersKeywords",
          "customRenderersTag",
          "changeCustomRenderersKeywords",
          "changeCustomRenderersTag"
        ]
      }
    },
    "required": ["store"]
  },
  "search-panel": {
    "type": "object",
    "properties": {
      "allResult": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "id": { "type": "number" },
            "name": { "type": "string" },
            "tags": {
              "type": "array",
              "items": { "type": "string" }
            }
          },
          "required": ["id", "name", "tags"]
        }
      },
      "searchPanelUUID": { "type": "string" },
      "closeAutoComplete": { "type": "boolean" },
      "externalKeyword": { "type": "string" },
      "tagKey": { "type": "string" },
      "onChange": { "type": "function" },
      "onTagChange": { "type": "function" },
      "immediateChange": { "type": "boolean" }
    },
    "required": ["allResult", "searchPanelUUID", "onChange"]
  }
}

export const metadata = {
  "right-panels": {
    "title": "Right Panels",
  },
  "renderers-panel": {
    "title": "Renderers Panel",
  },
  "schema-form": {
    "title": "Schema Form",
  },
  "back-top": {
    "title": "Back Top",
  },
  "error-renderer": {
    "title": "Error Renderer",
  },
  "search-custom-renderer-panel": {
    "title": "Search Custom Renderer Panel",
  },
  "search-panel": {
    "title": "Search Panel",
  },
}

export const initialConfig: any = {
  "right-panels": {
    "style": { "height": "300px" },
    "readonly": false,
    "activePanelKey": "pluginA",
    "panels": [
      {
        "key": 'pluginA',
        "component": pluginA,
        "title": "Plugin A",
      },
      {
        "key": 'pluginB',
        "component": pluginB,
        "title": "Plugin B",
      }
    ]

  },
  "renderers-panel": {
    "searchRendererType": "renderer",
    "groupedRenderers": groupedRenderersByKeyword
  },
  "schema-form": {
    "propKey": "exampleForm",
    "body": [
      {
        "type": "input-text",
        "name": "username",
        "label": "Username"
      },
      {
        "type": "input-password",
        "name": "password",
        "label": "Password"
      }
    ],
    "definitions": {},
    "value": {},
    "env": {},
    "api": {},
    "onChange": "(value, diff, filter) => { console.log('Form value changed:', value); }",
    "getThemeConfig": "getThemeConfig",
    "diff": "diff"
  },
  "back-top": {
    "visibilityHeight": 400,
    "onClick": null,
    "target": "window",
  },
  "error-renderer": {
    "apiUrl": "https://api.example.com",
    "timeout": 5000,
    "retryAttempts": 3,
    "logLevel": "info",
    "features": {
      "enableFeatureX": true,
      "enableFeatureY": false
    }
  },
  "search-custom-renderer-panel": {
    "customRenderersByOrder": [
      { "id": "1", "name": "Renderer 1" },
      { "id": "2", "name": "Renderer 2", "disabledRendererPlugin": true },
      { "id": "3", "name": "Renderer 3" }
    ],
    "customRenderersKeywords": "",
    "customRenderersTag": ""
  },
  "search-panel": {
    "allResult": [
      { "id": 1, "name": "Component A", "tags": ["UI", "Button"] },
      { "id": 2, "name": "Component B", "tags": ["UI", "Input"] },
      { "id": 3, "name": "Component C", "tags": ["Data", "Chart"] }
    ],
    "searchPanelUUID": "unique-search-panel-id",
    "closeAutoComplete": false,
    "externalKeyword": "",
    "tagKey": "tags",
    "onChange": "handleSearchChange",
    "onTagChange": "handleTagChange",
    "immediateChange": true
  }
}

export const boardItemConfig: any = {
  "right-panels": {},
  "renderers-panel": {},
  "schema-form": {},
  "back-top": {
    "hasRef": true,
    "content": {
      "style": { "height": "1000px", "width": "100%", "overflow": "auto" },
    }

  },
  "error-renderer": {},
  "search-custom-renderer-panel": {},
  "search-panel": {},
}

export const misc = {
  util: {
    "functions": [
      {
        "name": "__uri",
        "arguments": ["id: string"]
      },
      {
        "name": "cleanUndefined",
        "arguments": ["obj: any"]
      },
      {
        "name": "JSONPipeIn",
        "arguments": ["obj: any", "reGenerateId?: boolean", "idMap?: any"]
      },
      {
        "name": "JSONPipeOut",
        "arguments": ["obj: any", "filterHiddenProps?: boolean | ((key: string, prop: any) => boolean)"]
      },
      {
        "name": "JSONGetByPath",
        "arguments": ["json: any", "paths: Array<string>", "stacks?: Array<any>"]
      },
      {
        "name": "JSONGetPathById",
        "arguments": ["json: any", "id: string", "idKey?: string"]
      },
      {
        "name": "JSONGetById",
        "arguments": ["json: any", "id: string", "idKey?: string"]
      },
      {
        "name": "JSONGetNodesById",
        "arguments": ["json: any", "id: string", "idKey?: string"]
      },
      {
        "name": "JSONGetParentById",
        "arguments": ["json: any", "id: string", "skipArray?: boolean"]
      },
      {
        "name": "JSONUpdate",
        "arguments": ["json: any", "id: string", "value: any", "replace?: boolean"]
      },
      {
        "name": "JSONDelete",
        "arguments": ["json: any", "id: string", "pathsRef?: Array<string>", "deleteIfEmpty?: boolean"]
      },
      {
        "name": "JSONMerge",
        "arguments": ["json: any", "target: any"]
      },
      {
        "name": "JSONChangeInArray",
        "arguments": ["json: any", "id: string", "operation: (arr: Array<any>, node: any, index: number) => void"]
      },
      {
        "name": "JSONCanMoveUp",
        "arguments": ["json: any", "id: string"]
      },
      {
        "name": "JSONMoveUpById",
        "arguments": ["json: any", "id: string"]
      },
      {
        "name": "JSONCanMoveDown",
        "arguments": ["json: any", "id: string"]
      },
      {
        "name": "JSONMoveDownById",
        "arguments": ["json: any", "id: string"]
      },
      {
        "name": "JSONDuplicate",
        "arguments": ["json: any", "id: string", "reIds?: { [propKey: string]: string }"]
      },
      {
        "name": "reGenerateID",
        "arguments": ["json: any", "reIds?: { [propKey: string]: string }"]
      },
      {
        "name": "JsonGenerateID",
        "arguments": ["json: any"]
      },
      {
        "name": "createElementFromHTML",
        "arguments": ["htmlString: string"]
      },
      {
        "name": "deepFind",
        "arguments": ["schema: any", "keyValue: any", "result?: any"]
      },
      {
        "name": "filterSchemaForConfig",
        "arguments": ["schema: any", "valueWithConfig?: any"]
      },
      {
        "name": "filterSchemaForEditor",
        "arguments": ["schema: any"]
      },
      {
        "name": "blackList",
        "arguments": ["list: Array<string>"]
      },
      {
        "name": "sortByList",
        "arguments": ["list: Array<string>", "attr: string | Function"]
      },
      {
        "name": "persistGet",
        "arguments": ["key: string", "defaultValue?: any"]
      },
      {
        "name": "persistSet",
        "arguments": ["key: string", "value: any"]
      },
      {
        "name": "normalizeId",
        "arguments": ["id: string"]
      },
      {
        "name": "autobind",
        "arguments": []
      },
      {
        "name": "addDragingClass",
        "arguments": ["el: HTMLElement"]
      },
      {
        "name": "removeDragingClass",
        "arguments": ["el: HTMLElement"]
      },
      {
        "name": "camelize",
        "arguments": ["str: string"]
      },
      {
        "name": "reactionWithOldValue",
        "arguments": ["expression: () => T", "effect: (newValue: T, oldValue?: T) => void"]
      },
      {
        "name": "repeatArray",
        "arguments": ["child: T", "count?: number"]
      },
      {
        "name": "diff",
        "arguments": ["left: any", "right: any", "prefilter?: (currentPath: Array<string>, key: string) => boolean"]
      },
      {
        "name": "patchDiff",
        "arguments": ["left: any", "changes: Array<DiffChange> | undefined"]
      },
      {
        "name": "applyChange",
        "arguments": ["target: any", "source: any", "change: DiffChange"]
      },
      {
        "name": "JSONTraverse",
        "arguments": ["json: any", "mapper: (value: any, key: string | number, host: Object) => any", "ignore?: (value: any, key: string | number) => boolean | void"]
      },
      {
        "name": "isNumeric",
        "arguments": ["value: any"]
      },
      {
        "name": "string2CSSUnit",
        "arguments": ["value: any", "unit?: string"]
      },
      {
        "name": "isString",
        "arguments": ["obj: any"]
      },
      {
        "name": "isObject",
        "arguments": ["curObj: any"]
      },
      {
        "name": "jsonToJsonSchema",
        "arguments": ["json?: any", "titleBuilder?: (type: string, key: string) => string", "maxDepth?: number"]
      },
      {
        "name": "generateNodeId",
        "arguments": []
      },
      {
        "name": "isHasPluginIcon",
        "arguments": ["plugin: any"]
      },
      {
        "name": "isLayoutPlugin",
        "arguments": ["plugin: any"]
      },
      {
        "name": "unitFormula",
        "arguments": ["insetStr: string", "offsetVal: number"]
      },
      {
        "name": "stringRegExp",
        "arguments": ["keyword: string"]
      },
      {
        "name": "needDefaultWidth",
        "arguments": ["elemType: string"]
      },
      {
        "name": "getI18nEnabled",
        "arguments": []
      },
      {
        "name": "translateSchema",
        "arguments": ["schema: any", "replaceData?: any", "skipFn?: any"]
      },
      {
        "name": "appTranslate",
        "arguments": ["value?: string"]
      },
      {
        "name": "needFillPlaceholder",
        "arguments": ["curProps: any"]
      },
      {
        "name": "setThemeConfig",
        "arguments": ["config: any"]
      },
      {
        "name": "getCssVarById",
        "arguments": ["id: string", "selectorText: string"]
      },
      {
        "name": "getAllCssVar",
        "arguments": []
      },
      {
        "name": "getThemeConfig",
        "arguments": []
      },
      {
        "name": "style2ThemeCss",
        "arguments": ["data: any"]
      },
      {
        "name": "clearDirtyCssKey",
        "arguments": ["data: any"]
      },
      {
        "name": "resolveVariablesFromScope",
        "arguments": ["node: any", "manager: any"]
      },
      {
        "name": "getVariables",
        "arguments": ["that: any"]
      },
      {
        "name": "filterVariablesOfScope",
        "arguments": ["options: any[]", "selfName?: string"]
      },
      {
        "name": "getQuickVariables",
        "arguments": ["that: any", "filter?: Function"]
      },
      {
        "name": "getConditionVariables",
        "arguments": ["that: any", "filter?: Function"]
      },
      {
        "name": "resolveQuickVariables",
        "arguments": ["options: any", "quickVars?: VariableItem[]", "selfName?: string", "filter?: Function"]
      },
      {
        "name": "updateComponentContext",
        "arguments": ["variables: any[]"]
      },
      {
        "name": "scrollToActive",
        "arguments": ["selector: string"]
      },
      {
        "name": "addModal",
        "arguments": ["schema: any", "modal: any", "definitions?: any", "isKeyValid?: (key: string) => boolean"]
      },
      {
        "name": "modalsToDefinitions",
        "arguments": ["modals: Array<EditorModalBody>", "definitions?: any", "edtingModal?: EditorModalBody"]
      },
      {
        "name": "mergeDefinitions",
        "arguments": ["originSchema: any", "definitions: any", "modal: any"]
      },
      {
        "name": "setDefaultColSize",
        "arguments": ["regionList: any[]", "row: number", "preRow?: number"]
      },
      {
        "name": "getModals",
        "arguments": ["schema: any"]
      },
      {
        "name": "deepSplice",
        "arguments": ["target: any", "path: string", "numberToDelete: number", "...items: any[]"]
      }
    ]
  }
}

