import RightPanels from "../editor-components/RightPanel.tsx"
import RenderersPanel from "../editor-components/RenderersPanel.tsx"
import { data as groupedRenderersByKeyword } from "@/amis/_discover_/datasets/groupedRenderersByKeyword.ts"

import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons"
import pluginA from "./helpers/PluginA.tsx"
import pluginB from "./helpers/PluginB.tsx"

export const componentsTree = {
  'right-panels': RightPanels,
  'renderers-panel': RenderersPanel,
  'pluginA': pluginA,
  'pluginB': pluginB
}

export const propsList = {
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
  }
}

export const metadata = {
  "right-panels": {
    "title": "Right Panels",

  },
  "renderers-panel": {
    "title": "Renderers Panel",
  }
}

export const initialConfig = {
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
}

