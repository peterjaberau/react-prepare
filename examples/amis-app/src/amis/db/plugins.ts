const data = [
  {
    "name": "Flex layout",
    "icon": "fa fa-columns",
    "description": "Layout containers are mainly used to design complex layout container components. The layout effect based on CSS Flex is more controllable over the position of child nodes than Grid and HBox, and is simpler and easier to use than using CSS classes",
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "第一列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第二列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第三列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        }
      ],
      "style": {
        "position": "relative",
        "rowGap": "10px",
        "columnGap": "10px"
      }
    },
    "tags": [
      "布局容器"
    ],
    "docLink": "/amis/zh-CN/components/flex",
    "scaffold": {
      "type": "flex",
      "items": [
        {
          "type": "container",
          "body": [],
          "size": "none",
          "style": {
            "position": "static",
            "display": "block",
            "flex": "1 1 auto",
            "flexGrow": 1,
            "flexBasis": 0
          },
          "wrapperBody": false,
          "isFixedHeight": false,
          "isFixedWidth": false
        },
        {
          "type": "container",
          "body": [],
          "size": "none",
          "style": {
            "position": "static",
            "display": "block",
            "flex": "1 1 auto",
            "flexGrow": 1,
            "flexBasis": 0
          },
          "wrapperBody": false,
          "isFixedHeight": false,
          "isFixedWidth": false
        },
        {
          "type": "container",
          "body": [],
          "size": "none",
          "style": {
            "position": "static",
            "display": "block",
            "flex": "1 1 auto",
            "flexGrow": 1,
            "flexBasis": 0
          },
          "wrapperBody": false,
          "isFixedHeight": false,
          "isFixedWidth": false
        }
      ],
      "style": {
        "position": "relative",
        "rowGap": "10px",
        "columnGap": "10px"
      }
    },
    "disabledRendererPlugin": false,
    "isBaseComponent": true,
    "pluginIcon": "flex-container-plugin",
    "rendererName": "flex",
    "id": "786325e2e7b7",
    "plugin": {
      "rendererName": "flex",
      "$schema": "/schemas/FlexSchema.json",
      "disabledRendererPlugin": false,
      "name": "Flex layout",
      "order": -1200,
      "isBaseComponent": true,
      "icon": "fa fa-columns",
      "pluginIcon": "flex-container-plugin",
      "description": "Layout containers are mainly used to design complex layout container components. The layout effect based on CSS Flex is more controllable over the position of child nodes than Grid and HBox, and is simpler and easier to use than using CSS classes",
      "docLink": "/amis/zh-CN/components/flex",
      "panelTitle": "布局容器",
      "panelJustify": true,
      "regions": [
        {
          "key": "items",
          "label": "子节点集合"
        }
      ]
    },
    "order": 0
  },
  {
    "name": "Form 2.0",
    "icon": "fa fa-table",
    "description": "Used to add, delete, modify and query data, and to display tabular data. Column information can be configured, and then the associated data can be displayed. Supports nesting, super header, fixed column, fixed header, merged cells, etc. ",
    "previewSchema": {
      "type": "crud2",
      "mode": "table2",
      "source": "$items",
      "data": {
        "items": [
          {
            "engine": "Trident",
            "browser": "Internet Explorer 4.0",
            "platform": "Win 95+",
            "version": "4",
            "grade": "X"
          }
        ]
      },
      "columns": [
        {
          "label": "Engine",
          "name": "engine"
        },
        {
          "label": "Browser",
          "name": "browser"
        },
        {
          "name": "version",
          "label": "Version"
        },
        {
          "name": "operation",
          "title": "operation",
          "buttons": [
            {
              "type": "button",
              "level": "link",
              "icon": "fa fa-eye",
              "actionType": "dialog",
              "dialog": {
                "title": "View details",
                "body": {
                  "type": "form",
                  "body": [
                    {
                      "label": "Engine",
                      "name": "engine",
                      "type": "static"
                    },
                    {
                      "name": "browser",
                      "label": "Browser",
                      "type": "static"
                    },
                    {
                      "name": "version",
                      "label": "Version",
                      "type": "static"
                    }
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    "tags": [
      "Data Container"
    ],
    "docLink": "/amis/zh-CN/components/table2",
    "scaffold": {
      "type": "crud2",
      "mode": "table2",
      "columns": [
        {
          "name": "id",
          "title": "ID",
          "type": "container",
          "body": [
            {
              "type": "text"
            }
          ]
        },
        {
          "name": "engine",
          "title": "Example",
          "type": "container",
          "body": [
            {
              "type": "text"
            }
          ]
        }
      ]
    },
    "scaffoldForm": {
      "title": "Form 2.0创建向导",
      "mode": {
        "mode": "horizontal",
        "horizontal": {
          "leftFixed": "sm"
        }
      },
      "className": "ae-Scaffold-Modal ae-Scaffold-Modal--CRUD ae-Scaffold-Modal-content :AMISCSSWrapper",
      "stepsBody": true,
      "canSkip": true,
      "canRebuild": true,
      "body": [
        {
          "title": "Data Configuration",
          "body": [
            {
              "type": "radios",
              "label": "radios",
              "name": "dsType",
              "visible": true,
              "options": [
                {
                  "label": "API interface",
                  "value": "api"
                }
              ]
            },
            {
              "type": "container",
              "visibleOn": "!this.dsType || this.dsType === 'api'",
              "body": [
                {
                  "type": "ae-apiControl",
                  "label": {
                    "type": "tooltip-wrapper",
                    "tooltip": "Interface response body requirements：<br/>\n        <pre>{\n  \"status\": 0,\n  \"msg\": \"\",\n  \"items\": {},\n  \"page\": 0,\n  \"total\": 0\n}</pre>",
                    "tooltipTheme": "dark",
                    "placement": "top",
                    "tooltipStyle": {
                      "fontSize": "12px"
                    },
                    "className": "ae-formItemControl-label-tip",
                    "body": "interface"
                  },
                  "name": "listApi",
                  "renderLabel": true,
                  "mode": "horizontal",
                  "inputClassName": "m-b-none"
                },
                {
                  "type": "ae-field-setting",
                  "name": "listFields",
                  "label": "字段",
                  "renderer": "crud",
                  "feat": "List",
                  "fieldKeys": [
                    "listFields",
                    "insertFields",
                    "viewFields",
                    "editFields",
                    "deleteFields",
                    "bulkEditFields",
                    "bulkDeleteFields",
                    "simpleQueryFields"
                  ],
                  "config": {
                    "showInputType": true,
                    "showDisplayType": true
                  }
                }
              ]
            },
            {
              "type": "input-text",
              "name": "primaryField",
              "label": {
                "type": "tooltip-wrapper",
                "tooltip": "Unique identifier for each row of records, usually used in row selection, batch operations and other scenarios. ",
                "tooltipTheme": "dark",
                "placement": "top",
                "tooltipStyle": {
                  "fontSize": "12px"
                },
                "className": "ae-formItemControl-label-tip",
                "body": "Primary key"
              },
              "visibleOn": "!this.dsType || this.dsType !== 'model-entity'"
            }
          ]
        },
        {
          "title": "功能配置",
          "body": [
            {
              "type": "container",
              "visibleOn": "dsType == null || dsType === 'api'",
              "body": [
                {
                  "type": "checkboxes",
                  "label": "Toolbar",
                  "name": "tools",
                  "joinValues": false,
                  "extractValue": true,
                  "multiple": true,
                  "options": [
                    {
                      "label": "Insert",
                      "value": "Insert",
                      "align": "left",
                      "icon": "fa fa-layer-group",
                      "order": 10
                    },
                    {
                      "label": "BulkEdit",
                      "value": "BulkEdit",
                      "align": "left",
                      "icon": "fa fa-layer-group",
                      "order": 20
                    },
                    {
                      "label": "BulkDelete",
                      "value": "BulkDelete",
                      "align": "left",
                      "icon": "fa fa-layer-group",
                      "order": 30
                    }
                  ]
                },
                {
                  "type": "checkboxes",
                  "label": "Conditional query",
                  "name": "filters",
                  "multiple": true,
                  "joinValues": false,
                  "extractValue": true,
                  "options": [
                    {
                      "label": "SimpleQuery",
                      "value": "SimpleQuery",
                      "icon": "fa fa-search",
                      "order": 20
                    }
                  ]
                },
                {
                  "type": "checkboxes",
                  "label": "data manipulation",
                  "name": "operators",
                  "multiple": true,
                  "joinValues": false,
                  "extractValue": true,
                  "options": [
                    {
                      "label": "View",
                      "value": "View",
                      "icon": "fa fa-database",
                      "order": 10
                    },
                    {
                      "label": "Edit",
                      "value": "Edit",
                      "icon": "fa fa-database",
                      "order": 20
                    },
                    {
                      "label": "Delete",
                      "value": "Delete",
                      "icon": "fa fa-database",
                      "order": 30
                    }
                  ]
                },
                {
                  "type": "container"
                }
              ]
            },
            {
              "type": "tabs",
              "tabsMode": "vertical",
              "className": "ae-Scaffold-Modal-tabs",
              "tabs": [
                {
                  "title": "List display",
                  "icon": "fa fa-list",
                  "visibleOn": "(!this.dsType || this.dsType === 'api') && true",
                  "body": [
                    {
                      "type": "ae-field-setting",
                      "name": "listFields",
                      "label": false,
                      "renderer": "crud",
                      "feat": "List",
                      "fieldKeys": [
                        "listFields",
                        "insertFields",
                        "viewFields",
                        "editFields",
                        "deleteFields",
                        "bulkEditFields",
                        "bulkDeleteFields",
                        "simpleQueryFields"
                      ],
                      "config": {
                        "showInputType": true,
                        "showDisplayType": true
                      },
                      "mode": "normal"
                    }
                  ]
                },
                {
                  "title": "Insert",
                  "icon": "fa fa-layer-group",
                  "visibleOn": "(!this.dsType || this.dsType === 'api') && data[\"tools\"] && ~data['tools'].indexOf('Insert')",
                  "body": [
                    {
                      "type": "ae-apiControl",
                      "label": {
                        "type": "tooltip-wrapper",
                        "tooltip": "Used to save data, the data will be passed into this interface after the form is submitted. <br/>\n        Interface response body requirements (if there is data in data, the data will be merged into the form context):<br/>\n        <pre>{\n  \"status\": 0,\n  \"msg\": \"\",\n  \"data\": {}\n}</pre>",
                        "tooltipTheme": "dark",
                        "placement": "top",
                        "tooltipStyle": {
                          "fontSize": "12px"
                        },
                        "className": "ae-formItemControl-label-tip",
                        "body": "Newinterface"
                      },
                      "name": "insertApi",
                      "renderLabel": true,
                      "mode": "normal",
                      "inputClassName": "m-b-none"
                    },
                    {
                      "type": "ae-field-setting",
                      "name": "insertFields",
                      "label": false,
                      "renderer": "crud",
                      "feat": "Insert",
                      "fieldKeys": [
                        "listFields",
                        "insertFields",
                        "viewFields",
                        "editFields",
                        "deleteFields",
                        "bulkEditFields",
                        "bulkDeleteFields",
                        "simpleQueryFields"
                      ],
                      "config": {
                        "showInputType": true,
                        "showDisplayType": false
                      },
                      "mode": "normal"
                    }
                  ]
                },
                {
                  "title": "BulkEdit",
                  "icon": "fa fa-layer-group",
                  "visibleOn": "(!this.dsType || this.dsType === 'api') && data[\"tools\"] && ~data['tools'].indexOf('BulkEdit')",
                  "body": [
                    {
                      "type": "ae-apiControl",
                      "label": "Batch editinginterface",
                      "name": "bulkEditApi",
                      "renderLabel": true,
                      "mode": "normal",
                      "inputClassName": "m-b-none"
                    },
                    {
                      "type": "ae-field-setting",
                      "name": "bulkEditFields",
                      "label": false,
                      "renderer": "crud",
                      "feat": "BulkEdit",
                      "fieldKeys": [
                        "listFields",
                        "insertFields",
                        "viewFields",
                        "editFields",
                        "deleteFields",
                        "bulkEditFields",
                        "bulkDeleteFields",
                        "simpleQueryFields"
                      ],
                      "config": {
                        "showInputType": true,
                        "showDisplayType": false
                      },
                      "mode": "normal"
                    }
                  ]
                },
                {
                  "title": "BulkDelete",
                  "icon": "fa fa-layer-group",
                  "visibleOn": "(!this.dsType || this.dsType === 'api') && data[\"tools\"] && ~data['tools'].indexOf('BulkDelete')",
                  "body": [
                    {
                      "type": "ae-apiControl",
                      "label": "Batch deleteinterface",
                      "name": "bulkDeleteApi",
                      "renderLabel": true,
                      "mode": "normal",
                      "inputClassName": "m-b-none"
                    }
                  ]
                },
                {
                  "title": "SimpleQuery",
                  "icon": "fa fa-search",
                  "visibleOn": "(!this.dsType || this.dsType === 'api') && data[\"filters\"] && ~data['filters'].indexOf('SimpleQuery')",
                  "body": [
                    {
                      "type": "ae-field-setting",
                      "name": "simpleQueryFields",
                      "label": false,
                      "renderer": "crud",
                      "feat": "SimpleQuery",
                      "fieldKeys": [
                        "listFields",
                        "insertFields",
                        "viewFields",
                        "editFields",
                        "deleteFields",
                        "bulkEditFields",
                        "bulkDeleteFields",
                        "simpleQueryFields"
                      ],
                      "config": {
                        "showInputType": true,
                        "showDisplayType": false
                      },
                      "mode": "normal"
                    }
                  ]
                },
                {
                  "title": "View",
                  "icon": "fa fa-database",
                  "visibleOn": "(!this.dsType || this.dsType === 'api') && data[\"operators\"] && ~data['operators'].indexOf('View')",
                  "body": [
                    {
                      "type": "ae-field-setting",
                      "name": "viewFields",
                      "label": false,
                      "renderer": "crud",
                      "feat": "View",
                      "fieldKeys": [
                        "listFields",
                        "insertFields",
                        "viewFields",
                        "editFields",
                        "deleteFields",
                        "bulkEditFields",
                        "bulkDeleteFields",
                        "simpleQueryFields"
                      ],
                      "config": {
                        "showInputType": true,
                        "showDisplayType": false
                      },
                      "mode": "normal"
                    }
                  ]
                },
                {
                  "title": "Edit",
                  "icon": "fa fa-database",
                  "visibleOn": "(!this.dsType || this.dsType === 'api') && data[\"operators\"] && ~data['operators'].indexOf('Edit')",
                  "body": [
                    {
                      "type": "ae-apiControl",
                      "label": "editinterface",
                      "name": "editApi",
                      "renderLabel": true,
                      "mode": "normal",
                      "inputClassName": "m-b-none"
                    },
                    {
                      "type": "ae-apiControl",
                      "label": {
                        "type": "tooltip-wrapper",
                        "tooltip": "Interface response body requirements:<br/>\n              <pre>{\n  \"status\": 0,\n  \"msg\": \"\",\n  \"data\": {}\n}</pre>",
                        "tooltipTheme": "dark",
                        "placement": "top",
                        "tooltipStyle": {
                          "fontSize": "12px"
                        },
                        "className": "ae-formItemControl-label-tip",
                        "body": "Initialization interface"
                      },
                      "name": "initApi",
                      "renderLabel": true,
                      "mode": "normal",
                      "inputClassName": "m-b-none"
                    },
                    {
                      "type": "ae-field-setting",
                      "name": "editFields",
                      "label": false,
                      "renderer": "crud",
                      "feat": "Edit",
                      "fieldKeys": [
                        "listFields",
                        "insertFields",
                        "viewFields",
                        "editFields",
                        "deleteFields",
                        "bulkEditFields",
                        "bulkDeleteFields",
                        "simpleQueryFields"
                      ],
                      "config": {
                        "showInputType": true,
                        "showDisplayType": false
                      },
                      "mode": "normal"
                    }
                  ]
                },
                {
                  "title": "Delete",
                  "icon": "fa fa-database",
                  "visibleOn": "(!this.dsType || this.dsType === 'api') && data[\"operators\"] && ~data['operators'].indexOf('Delete')",
                  "body": [
                    {
                      "type": "ae-apiControl",
                      "label": "deleteinterface",
                      "name": "deleteApi",
                      "renderLabel": true,
                      "mode": "normal",
                      "inputClassName": "m-b-none"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "isBaseComponent": true,
    "pluginIcon": "table-plugin",
    "rendererName": "crud2",
    "id": "ea839731c6a5",
    "plugin": {
      "rendererName": "crud2",
      "name": "Form 2.0",
      "panelTitle": "Table 2.0",
      "subPanelTitle": "Table 2.0",
      "icon": "fa fa-table",
      "panelIcon": "fa fa-table",
      "subPanelIcon": "fa fa-table",
      "pluginIcon": "table-plugin",
      "panelJustify": true,
      "multifactor": true,
      "order": -950,
      "$schema": "/schemas/CRUD2TableSchema.json",
      "docLink": "/amis/zh-CN/components/table2",
      "_dynamicControls": {},
      "dsManager": {
        "builders": {}
      },
      "events": [
        {
          "eventName": "selectedChange",
          "eventLabel": "selectedChange",
          "description": "手动选择表格项事件",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "selectedItems": {
                      "type": "array",
                      "title": "已选行记录"
                    },
                    "unSelectedItems": {
                      "type": "array",
                      "title": "未选行记录"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "columnSort",
          "eventLabel": "列排序",
          "description": "点击列排序事件",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "orderBy": {
                      "type": "string",
                      "title": "列名"
                    },
                    "orderDir": {
                      "type": "string",
                      "title": "排序值"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "columnFilter",
          "eventLabel": "列筛选",
          "description": "点击列筛选事件",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "filterName": {
                      "type": "string",
                      "title": "列名"
                    },
                    "filterValue": {
                      "type": "string",
                      "title": "筛选值"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "columnSearch",
          "eventLabel": "列搜索",
          "description": "点击列搜索事件",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "searchName": {
                      "type": "string",
                      "title": "列名"
                    },
                    "searchValue": {
                      "type": "object",
                      "title": "搜索值"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "orderChange",
          "eventLabel": "行排序",
          "description": "手动拖拽行排序事件",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "movedItems": {
                      "type": "array",
                      "title": "已排序记录"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "columnToggled",
          "eventLabel": "列显示变化",
          "description": "点击自定义列事件",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "columns": {
                      "type": "array",
                      "title": "当前显示的列配置"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "rowClick",
          "eventLabel": "行单击",
          "description": "点击整行事件",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "item": {
                      "type": "object",
                      "title": "当前行记录"
                    },
                    "index": {
                      "type": "number",
                      "title": "当前行索引"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "rowDbClick",
          "eventLabel": "行双击",
          "description": "双击整行事件",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "item": {
                      "type": "object",
                      "title": "当前行记录"
                    },
                    "index": {
                      "type": "number",
                      "title": "当前行索引"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "rowMouseEnter",
          "eventLabel": "鼠标移入行事件",
          "description": "移入整行时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "item": {
                      "type": "object",
                      "title": "当前行记录"
                    },
                    "index": {
                      "type": "number",
                      "title": "当前行索引"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "rowMouseLeave",
          "eventLabel": "鼠标移出行事件",
          "description": "移出整行时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "item": {
                      "type": "object",
                      "title": "当前行记录"
                    },
                    "index": {
                      "type": "number",
                      "title": "当前行索引"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [
        {
          "actionType": "search",
          "actionLabel": "Data query",
          "description": "Complete list data query using specified conditions",
          "schema": {
            "type": "combo",
            "name": "args",
            "multiple": false,
            "strictMode": false,
            "items": [
              {
                "name": "query",
                "label": "Query conditions",
                "type": "ae-formulaControl",
                "variables": "${variables}",
                "size": "md",
                "mode": "horizontal"
              }
            ]
          }
        },
        {
          "actionType": "loadMore",
          "actionLabel": "Load more",
          "description": "Load more data into the list container"
        },
        {
          "actionType": "startAutoRefresh",
          "actionLabel": "Start auto refresh",
          "description": "Start auto refresh"
        },
        {
          "actionType": "stopAutoRefresh",
          "actionLabel": "Stop auto refresh",
          "description": "Stop auto refresh"
        },
        {
          "actionType": "reload",
          "actionLabel": "Reload",
          "description": "Trigger component data refresh and re-rendering"
        },
        {
          "actionType": "select",
          "actionLabel": "设置选中项",
          "description": "设置表格的选中项",
          "schema": {
            "type": "combo",
            "name": "args",
            "multiple": false,
            "strictMode": false,
            "items": [
              {
                "type": "ae-formulaControl",
                "variableMode": "tree",
                "name": "selected",
                "label": "选中项",
                "variables": "${variables}",
                "size": "lg",
                "mode": "horizontal"
              }
            ]
          }
        },
        {
          "actionType": "selectAll",
          "actionLabel": "设置全部选中",
          "description": "设置表格全部项选中"
        },
        {
          "actionType": "clearAll",
          "actionLabel": "清空选中项",
          "description": "清空表格所有选中项"
        }
      ],
      "isBaseComponent": true,
      "description": "Used to add, delete, modify and query data, and to display tabular data. Column information can be configured, and then the associated data can be displayed. Supports nesting, super header, fixed column, fixed header, merged cells, etc. "
    },
    "order": 0
  },
  {
    "name": "表单",
    "icon": "fa fa-list-alt",
    "description": "可用于新建、编辑或者展示数据，配置初始化接口可从远端加载数据，配置提交接口可将数据发送远端。另外也可以将数据提交给其他组件，与其他组件通信。",
    "previewSchema": {
      "type": "form",
      "panelClassName": "Panel--default text-left m-b-none",
      "mode": "horizontal",
      "body": [
        {
          "label": "文本",
          "name": "a",
          "type": "input-text"
        }
      ]
    },
    "tags": [
      "数据容器"
    ],
    "docLink": "/amis/zh-CN/components/form/index",
    "scaffold": {
      "type": "form",
      "title": "表单",
      "body": [
        {
          "label": "文本框",
          "type": "input-text",
          "name": "text"
        }
      ]
    },
    "scaffoldForm": {
      "title": "表单创建向导",
      "mode": {
        "mode": "horizontal",
        "horizontal": {
          "leftFixed": "sm"
        }
      },
      "canRebuild": true,
      "className": "ae-Scaffold-Modal ae-Scaffold-Modal-content :AMISCSSWrapper",
      "body": [
        {
          "type": "radios",
          "name": "feat",
          "label": "使用场景",
          "value": "Insert",
          "options": [
            {
              "label": "新增",
              "value": "Insert"
            },
            {
              "label": "编辑",
              "value": "Edit"
            },
            {
              "label": "查看",
              "value": "View"
            }
          ]
        },
        {
          "type": "radios",
          "label": "radios",
          "name": "dsType",
          "visible": true,
          "options": [
            {
              "label": "API interface",
              "value": "api"
            }
          ]
        },
        {
          "type": "container",
          "className": "form-item-gap",
          "visibleOn": "${feat === 'Insert' && (!dsType || dsType === 'api')}",
          "body": [
            {
              "type": "ae-apiControl",
              "label": {
                "type": "tooltip-wrapper",
                "tooltip": "Used to save data, the data will be passed into this interface after the form is submitted. <br/>\n        Interface response body requirements (if there is data in data, the data will be merged into the form context):<br/>\n        <pre>{\n  \"status\": 0,\n  \"msg\": \"\",\n  \"data\": {}\n}</pre>",
                "tooltipTheme": "dark",
                "placement": "top",
                "tooltipStyle": {
                  "fontSize": "12px"
                },
                "className": "ae-formItemControl-label-tip",
                "body": "interface"
              },
              "name": "insertApi",
              "renderLabel": true,
              "mode": "horizontal",
              "inputClassName": "m-b-none"
            },
            {
              "type": "ae-field-setting",
              "name": "insertFields",
              "label": "字段",
              "renderer": "form",
              "feat": "Insert",
              "fieldKeys": [
                "listFields",
                "insertFields",
                "viewFields",
                "editFields",
                "deleteFields",
                "bulkEditFields",
                "bulkDeleteFields",
                "simpleQueryFields"
              ],
              "config": {
                "showInputType": true,
                "showDisplayType": false
              }
            }
          ]
        },
        {
          "type": "container",
          "className": "form-item-gap",
          "visibleOn": "${feat === 'Edit' && (!dsType || dsType === 'api')}",
          "body": [
            {
              "type": "ae-apiControl",
              "label": "interface",
              "name": "editApi",
              "renderLabel": true,
              "mode": "horizontal",
              "inputClassName": "m-b-none"
            },
            {
              "type": "ae-apiControl",
              "label": {
                "type": "tooltip-wrapper",
                "tooltip": "Interface response body requirements:<br/>\n              <pre>{\n  \"status\": 0,\n  \"msg\": \"\",\n  \"data\": {}\n}</pre>",
                "tooltipTheme": "dark",
                "placement": "top",
                "tooltipStyle": {
                  "fontSize": "12px"
                },
                "className": "ae-formItemControl-label-tip",
                "body": "Initialization interface"
              },
              "name": "initApi",
              "renderLabel": true,
              "mode": "horizontal",
              "inputClassName": "m-b-none"
            },
            {
              "type": "ae-field-setting",
              "name": "editFields",
              "label": "字段",
              "renderer": "form",
              "feat": "Edit",
              "fieldKeys": [
                "listFields",
                "insertFields",
                "viewFields",
                "editFields",
                "deleteFields",
                "bulkEditFields",
                "bulkDeleteFields",
                "simpleQueryFields"
              ],
              "config": {
                "showInputType": true,
                "showDisplayType": false
              }
            }
          ]
        },
        {
          "type": "container",
          "className": "form-item-gap",
          "visibleOn": "${feat === 'View' && (!dsType || dsType === 'api')}",
          "body": [
            {
              "type": "ae-apiControl",
              "label": {
                "type": "tooltip-wrapper",
                "tooltip": "Interface response body requirements:<br/>\n              <pre>{\n  \"status\": 0,\n  \"msg\": \"\",\n  \"data\": {}\n}</pre>",
                "tooltipTheme": "dark",
                "placement": "top",
                "tooltipStyle": {
                  "fontSize": "12px"
                },
                "className": "ae-formItemControl-label-tip",
                "body": "Initialization interface"
              },
              "name": "initApi",
              "renderLabel": true,
              "mode": "horizontal",
              "inputClassName": "m-b-none"
            },
            {
              "type": "ae-field-setting",
              "name": "viewFields",
              "label": "字段",
              "renderer": "form",
              "feat": "View",
              "fieldKeys": [
                "listFields",
                "insertFields",
                "viewFields",
                "editFields",
                "deleteFields",
                "bulkEditFields",
                "bulkDeleteFields",
                "simpleQueryFields"
              ],
              "config": {
                "showInputType": false,
                "showDisplayType": true
              }
            }
          ]
        },
        {
          "name": "operators",
          "label": "操作",
          "type": "checkboxes",
          "value": [
            "submit"
          ],
          "joinValues": false,
          "extractValue": false,
          "options": [
            {
              "label": "Reset",
              "value": "reset",
              "order": 1,
              "schema": {
                "level": "default"
              }
            },
            {
              "label": "Submit",
              "value": "submit",
              "order": 2,
              "schema": {
                "level": "primary"
              }
            },
            {
              "label": "Cancel",
              "value": "cancel",
              "order": 0,
              "schema": {
                "level": "default"
              }
            }
          ]
        }
      ]
    },
    "isBaseComponent": true,
    "pluginIcon": "form-plugin",
    "rendererName": "form",
    "id": "eedd5e01aab7",
    "plugin": {
      "name": "表单",
      "panelTitle": "表单",
      "rendererName": "form",
      "isBaseComponent": true,
      "description": "可用于新建、编辑或者展示数据，配置初始化接口可从远端加载数据，配置提交接口可将数据发送远端。另外也可以将数据提交给其他组件，与其他组件通信。",
      "docLink": "/amis/zh-CN/components/form/index",
      "$schema": "/schemas/FormSchema.json",
      "order": -900,
      "icon": "fa fa-list-alt",
      "pluginIcon": "form-plugin",
      "panelIcon": "form-plugin",
      "panelJustify": true,
      "regions": [
        {
          "key": "body",
          "label": "表单集合",
          "renderMethod": "renderBody",
          "preferTag": "表单项"
        },
        {
          "label": "操作区",
          "key": "actions",
          "preferTag": "按钮"
        }
      ],
      "events": [
        {
          "eventName": "inited",
          "eventLabel": "初始化数据接口请求完成",
          "description": "远程初始化数据接口请求完成时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "responseData": {
                      "type": "object",
                      "title": "响应数据"
                    },
                    "responseStatus": {
                      "type": "number",
                      "title": "响应状态(0表示成功)"
                    },
                    "responseMsg": {
                      "type": "string",
                      "title": "响应消息"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "change",
          "eventLabel": "数值变化",
          "description": "表单值变化时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "description": "当前表单数据，可以通过.字段名读取对应的值"
                }
              }
            }
          ]
        },
        {
          "eventName": "formItemValidateSucc",
          "eventLabel": "表单项校验成功",
          "description": "表单项校验成功后触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "description": "当前表单数据，可以通过.字段名读取对应的值"
                }
              }
            }
          ]
        },
        {
          "eventName": "formItemValidateError",
          "eventLabel": "表单项校验失败",
          "description": "表单项校验失败后触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "description": "当前表单数据，可以通过.字段名读取对应的值"
                }
              }
            }
          ]
        },
        {
          "eventName": "validateSucc",
          "eventLabel": "表单校验成功",
          "description": "表单校验成功后触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "description": "当前表单数据，可以通过.字段名读取对应的值"
                }
              }
            }
          ]
        },
        {
          "eventName": "validateError",
          "eventLabel": "表单校验失败",
          "description": "表单校验失败后触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "description": "当前表单数据，可以通过.字段名读取对应的值"
                }
              }
            }
          ]
        },
        {
          "eventName": "submit",
          "eventLabel": "表单提交",
          "strongDesc": "配置该事件后将不会触发表单提交时默认的校验、提交到api或者target等行为，所有行为需要自己配置",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "description": "当前表单数据，可以通过.字段名读取对应的值"
                }
              }
            }
          ]
        },
        {
          "eventName": "submitSucc",
          "eventLabel": "提交成功",
          "description": "表单提交成功后触发，如果事件源是按钮，且按钮的类型为“提交”，那么即便当前表单没有配置“保存接口”也将触发提交成功事件",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "result": {
                      "type": "object",
                      "title": "保存接口请求成功后返回的数据"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "submitFail",
          "eventLabel": "提交失败",
          "description": "表单提交请求失败后触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "error": {
                      "type": "object",
                      "title": "保存接口请求失败后返回的错误信息"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "asyncApiFinished",
          "eventLabel": "远程请求轮询结束",
          "description": "asyncApi 远程请求轮询结束后触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "description": "当前数据域，可以通过.字段名读取对应的值"
                }
              }
            }
          ]
        }
      ],
      "actions": [
        {
          "actionLabel": "提交表单",
          "actionType": "submit",
          "description": "触发表单提交"
        },
        {
          "actionLabel": "重置表单",
          "actionType": "reset",
          "description": "触发表单重置"
        },
        {
          "actionLabel": "清空表单",
          "actionType": "clear",
          "description": "触发表单清空"
        },
        {
          "actionLabel": "校验表单",
          "actionType": "validate",
          "description": "触发表单校验"
        },
        {
          "actionLabel": "重新加载",
          "actionType": "reload",
          "description": "触发组件数据刷新并重新渲染"
        },
        {
          "actionLabel": "变量赋值",
          "actionType": "setValue",
          "description": "触发组件数据更新"
        }
      ],
      "Features": [
        null,
        null,
        null,
        {
          "label": "批量编辑",
          "value": "BulkEdit",
          "disabled": true
        }
      ],
      "_dynamicControls": {},
      "dsManager": {
        "builders": {}
      }
    },
    "order": 0
  },
  {
    "searchKeywords": "功能型容器",
    "name": "service",
    "icon": "fa fa-server",
    "description": "功能性容器，可以用来加载数据或者加载渲染器配置。加载到的数据在容器可以使用。",
    "previewSchema": {
      "type": "service",
      "body": [
        {
          "type": "tpl",
          "tpl": "内容区域",
          "inline": false,
          "className": "bg-light wrapper"
        }
      ]
    },
    "tags": [
      "数据容器"
    ],
    "docLink": "/amis/zh-CN/components/service",
    "scaffold": {
      "type": "service",
      "body": []
    },
    "isBaseComponent": true,
    "pluginIcon": "service-plugin",
    "rendererName": "service",
    "id": "60b6f02ed735",
    "plugin": {
      "rendererName": "service",
      "name": "service",
      "panelTitle": "服务Service",
      "icon": "fa fa-server",
      "pluginIcon": "service-plugin",
      "panelIcon": "service-plugin",
      "$schema": "/schemas/ServiceSchema.json",
      "isBaseComponent": true,
      "order": -850,
      "description": "功能性容器，可以用来加载数据或者加载渲染器配置。加载到的数据在容器可以使用。",
      "searchKeywords": "功能型容器",
      "docLink": "/amis/zh-CN/components/service",
      "regions": [
        null
      ],
      "events": [
        {
          "eventName": "init",
          "eventLabel": "初始化",
          "description": "组件实例被创建并插入 DOM 中时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "description": "当前数据域，可以通过.字段名读取对应的值"
                }
              }
            }
          ]
        },
        {
          "eventName": "fetchInited",
          "eventLabel": "初始化数据接口请求完成",
          "description": "远程初始化数据接口请求完成时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "responseData": {
                      "type": "object",
                      "title": "响应数据"
                    },
                    "responseStatus": {
                      "type": "number",
                      "title": "响应状态(0表示成功)"
                    },
                    "responseMsg": {
                      "type": "string",
                      "title": "响应消息"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "fetchSchemaInited",
          "eventLabel": "初始化Schema接口请求完成",
          "description": "远程初始化Schema接口请求完成时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "responseData": {
                      "type": "object",
                      "title": "响应数据"
                    },
                    "responseStatus": {
                      "type": "number",
                      "title": "响应状态(0表示成功)"
                    },
                    "responseMsg": {
                      "type": "string",
                      "title": "响应消息"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [
        {
          "actionType": "reload",
          "actionLabel": "重新加载",
          "description": "触发组件数据刷新并重新渲染"
        },
        {
          "actionType": "rebuild",
          "actionLabel": "重新构建",
          "description": "触发schemaApi刷新，重新构建Schema"
        },
        {
          "actionType": "setValue",
          "actionLabel": "变量赋值",
          "description": "更新数据域数据"
        }
      ],
      "dsManager": {
        "builders": {}
      }
    },
    "order": 0
  },
  {
    "name": "crud",
    "icon": "fa fa-table",
    "pluginIcon": "table-plugin",
    "description": "用来实现对数据的增删改查，支持三种模式展示：table、cards和list. 负责数据的拉取，分页，单条操作，批量操作，排序，快速编辑等等功能。集成查询条件。",
    "previewSchema": {
      "syncLocation": false,
      "type": "crud",
      "className": "text-left",
      "bodyClassName": "m-b-none",
      "affixHeader": false,
      "data": {
        "items": [
          {
            "a": 1,
            "b": 2
          },
          {
            "a": 3,
            "b": 4
          },
          {
            "a": 5,
            "b": 6
          }
        ]
      },
      "source": "${items}",
      "columns": [
        {
          "label": "A",
          "name": "a"
        },
        {
          "label": "B",
          "name": "b"
        },
        {
          "type": "operation",
          "label": "操作",
          "buttons": [
            {
              "icon": "fa fa-eye",
              "type": "button"
            },
            {
              "icon": "fa fa-edit",
              "type": "button"
            }
          ]
        }
      ]
    },
    "tags": [
      "crud"
    ],
    "docLink": "/amis/zh-CN/components/crud",
    "scaffold": {
      "type": "crud",
      "syncLocation": false,
      "api": "",
      "columns": [
        {
          "name": "id",
          "label": "ID",
          "type": "text"
        },
        {
          "name": "engine",
          "label": "渲染引擎",
          "type": "text"
        }
      ],
      "bulkActions": [],
      "itemActions": []
    },
    "isBaseComponent": true,
    "scaffoldForm": {
      "title": "增删改查快速开始-CRUD",
      "body": [
        {
          "type": "ae-apiControl",
          "label": "接口地址",
          "name": "api",
          "labelRemark": {
            "label": false,
            "title": "Response example",
            "icon": "fas fa-code",
            "className": "m-l-xs ae-ApiSample-icon",
            "tooltipClassName": "ae-ApiSample-tooltip",
            "trigger": "click",
            "rootClose": true,
            "placement": "left"
          }
        },
        {
          "type": "button",
          "label": "格式校验并自动生成列配置",
          "className": "m-t-xs m-b-xs",
          "visibleOn": "!!this.api.url"
        },
        {
          "name": "__features",
          "label": "启用功能",
          "type": "checkboxes",
          "joinValues": false,
          "extractValue": true,
          "itemClassName": "max-w-lg",
          "options": [
            {
              "label": "新增",
              "value": "create"
            },
            {
              "label": "查询",
              "value": "filter"
            },
            {
              "label": "批量删除",
              "value": "bulkDelete"
            },
            {
              "label": "批量修改",
              "value": "bulkUpdate"
            },
            {
              "label": "操作栏-编辑",
              "value": "update"
            },
            {
              "label": "操作栏-查看详情",
              "value": "view"
            },
            {
              "label": "操作栏-删除",
              "value": "delete"
            }
          ]
        },
        {
          "type": "group",
          "body": [
            {
              "columnRatio": 10,
              "type": "checkboxes",
              "label": "启用的查询字段",
              "name": "filterEnabledList",
              "joinValues": false,
              "source": "${filterSettingSource}"
            },
            {
              "columnRatio": 2,
              "type": "input-number",
              "label": "每列显示几个字段",
              "value": 3,
              "name": "__filterColumnCount"
            }
          ],
          "visibleOn": "${__features && CONTAINS(__features, 'filter')}"
        },
        {
          "name": "columns",
          "type": "input-table",
          "label": false,
          "addable": true,
          "removable": true,
          "needConfirm": false,
          "columns": [
            {
              "type": "input-text",
              "name": "label",
              "label": "标题"
            },
            {
              "type": "input-text",
              "name": "name",
              "label": "绑定字段名"
            },
            {
              "type": "select",
              "name": "type",
              "label": "level",
              "value": "text",
              "options": [
                {
                  "value": "text",
                  "label": "纯文本"
                },
                {
                  "value": "tpl",
                  "label": "模板"
                },
                {
                  "value": "image",
                  "label": "图片"
                },
                {
                  "value": "date",
                  "label": "日期"
                },
                {
                  "value": "progress",
                  "label": "进度"
                },
                {
                  "value": "status",
                  "label": "状态"
                },
                {
                  "value": "mapping",
                  "label": "映射"
                },
                {
                  "value": "operation",
                  "label": "操作栏"
                }
              ]
            }
          ]
        }
      ],
      "canRebuild": true
    },
    "rendererName": "crud",
    "id": "4c221b63c6a0",
    "plugin": {
      "rendererName": "crud",
      "$schema": "/schemas/CRUDSchema.json",
      "order": -800,
      "name": "crud",
      "isBaseComponent": true,
      "description": "用来实现对数据的增删改查，支持三种模式展示：table、cards和list. 负责数据的拉取，分页，单条操作，批量操作，排序，快速编辑等等功能。集成查询条件。",
      "docLink": "/amis/zh-CN/components/crud",
      "icon": "fa fa-table",
      "pluginIcon": "table-plugin",
      "events": [
        {
          "eventName": "fetchInited",
          "eventLabel": "初始化数据接口请求完成",
          "description": "远程初始化数据接口请求完成时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "responseData": {
                      "type": "object",
                      "title": "响应数据"
                    },
                    "responseStatus": {
                      "type": "number",
                      "title": "响应状态(0表示成功)"
                    },
                    "responseMsg": {
                      "type": "string",
                      "title": "响应消息"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "selectedChange",
          "eventLabel": "选择表格项",
          "description": "手动选择表格项事件",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "selectedItems": {
                      "type": "array",
                      "title": "已选择行记录"
                    },
                    "unSelectedItems": {
                      "type": "array",
                      "title": "未选择行记录"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "columnSort",
          "eventLabel": "列排序",
          "description": "点击列排序事件",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "orderBy": {
                      "type": "string",
                      "title": "列名"
                    },
                    "orderDir": {
                      "type": "string",
                      "title": "排序值"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "columnFilter",
          "eventLabel": "列筛选",
          "description": "点击列筛选事件",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "filterName": {
                      "type": "string",
                      "title": "列名"
                    },
                    "filterValue": {
                      "type": "string",
                      "title": "筛选值"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "columnSearch",
          "eventLabel": "列搜索",
          "description": "点击列搜索事件",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "searchName": {
                      "type": "string",
                      "title": "列名"
                    },
                    "searchValue": {
                      "type": "object",
                      "title": "搜索值"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "orderChange",
          "eventLabel": "行排序",
          "description": "手动拖拽行排序事件",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "movedItems": {
                      "type": "array",
                      "title": "已排序记录"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "columnToggled",
          "eventLabel": "列显示变化",
          "description": "点击自定义列事件",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "columns": {
                      "type": "array",
                      "title": "当前显示的列配置"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "rowClick",
          "eventLabel": "行单击",
          "description": "点击整行事件",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "item": {
                      "type": "object",
                      "title": "当前行记录"
                    },
                    "index": {
                      "type": "number",
                      "title": "当前行索引"
                    },
                    "indexPath": {
                      "type": "number",
                      "title": "行索引路劲"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "rowMouseEnter",
          "eventLabel": "鼠标移入行事件",
          "description": "移入整行时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "item": {
                      "type": "object",
                      "title": "当前行记录"
                    },
                    "index": {
                      "type": "number",
                      "title": "当前行索引"
                    },
                    "indexPath": {
                      "type": "number",
                      "title": "行索引路劲"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "rowMouseLeave",
          "eventLabel": "鼠标移出行事件",
          "description": "移出整行时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "item": {
                      "type": "object",
                      "title": "当前行记录"
                    },
                    "index": {
                      "type": "number",
                      "title": "当前行索引"
                    },
                    "indexPath": {
                      "type": "number",
                      "title": "行索引路劲"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [
        {
          "actionType": "reload",
          "actionLabel": "重新加载",
          "description": "触发组件数据刷新并重新渲染"
        },
        {
          "actionLabel": "变量赋值",
          "actionType": "setValue",
          "description": "更新列表记录"
        }
      ],
      "btnSchemas": {
        "create": {
          "label": "新增",
          "type": "button",
          "actionType": "dialog",
          "level": "primary",
          "editorSetting": {
            "behavior": "create"
          },
          "dialog": {
            "title": "新增",
            "body": {
              "type": "form",
              "api": "",
              "body": []
            }
          }
        },
        "update": {
          "label": "编辑",
          "type": "button",
          "actionType": "dialog",
          "level": "link",
          "editorSetting": {
            "behavior": "update"
          },
          "dialog": {
            "title": "编辑",
            "body": {
              "type": "form",
              "api": "",
              "initApi": "",
              "body": []
            }
          }
        },
        "view": {
          "label": "查看",
          "type": "button",
          "actionType": "dialog",
          "level": "link",
          "editorSetting": {
            "behavior": "view"
          },
          "dialog": {
            "title": "查看详情",
            "body": {
              "type": "form",
              "initApi": "",
              "body": []
            }
          }
        },
        "delete": {
          "type": "button",
          "label": "删除",
          "actionType": "ajax",
          "level": "link",
          "className": "text-danger",
          "confirmText": "确定要删除？",
          "api": "",
          "editorSetting": {
            "behavior": "delete"
          }
        },
        "bulkDelete": {
          "type": "button",
          "level": "danger",
          "label": "批量删除",
          "actionType": "ajax",
          "confirmText": "确定要删除？",
          "api": "",
          "editorSetting": {
            "behavior": "bulkDelete"
          }
        },
        "bulkUpdate": {
          "type": "button",
          "label": "批量编辑",
          "actionType": "dialog",
          "editorSetting": {
            "behavior": "bulkUpdate"
          },
          "dialog": {
            "title": "批量编辑",
            "size": "md",
            "body": {
              "type": "form",
              "api": "",
              "body": [
                {
                  "label": "字段1",
                  "text": "字段1",
                  "type": "input-text"
                }
              ]
            }
          }
        },
        "filter": {
          "title": "查询条件",
          "body": [
            {
              "type": "input-text",
              "name": "keywords",
              "label": "关键字"
            }
          ]
        }
      },
      "multifactor": true,
      "panelTitle": "增删改查",
      "wrapperProps": {
        "affixHeader": false
      }
    },
    "order": 0
  },
  {
    "searchKeywords": "文本框、邮箱框、input-email、URL框、input-url、密码框、input-password、密码输入框",
    "name": "文本框",
    "icon": "fa fa-terminal",
    "description": "文本输入框，支持普通文本、密码、URL、邮箱等多种内容输入",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "wrapWithPanel": false,
      "mode": "horizontal",
      "body": [
        {
          "type": "input-text",
          "label": "文本",
          "name": "text"
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/input-text",
    "scaffold": {
      "type": "input-text",
      "label": "文本",
      "name": "text"
    },
    "isBaseComponent": true,
    "pluginIcon": "input-text-plugin",
    "rendererName": "input-text",
    "id": "f40ae567e3ff",
    "plugin": {
      "rendererName": "input-text",
      "$schema": "/schemas/TextControlSchema.json",
      "order": -600,
      "searchKeywords": "文本框、邮箱框、input-email、URL框、input-url、密码框、input-password、密码输入框",
      "name": "文本框",
      "isBaseComponent": true,
      "icon": "fa fa-terminal",
      "pluginIcon": "input-text-plugin",
      "description": "文本输入框，支持普通文本、密码、URL、邮箱等多种内容输入",
      "docLink": "/amis/zh-CN/components/form/input-text",
      "notRenderFormZone": true,
      "panelTitle": "文本框",
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "输入框内容变化"
        },
        {
          "eventName": "focus",
          "eventLabel": "获取焦点",
          "description": "输入框获取焦点"
        },
        {
          "eventName": "blur",
          "eventLabel": "失去焦点",
          "description": "输入框失去焦点"
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清空输入框内容"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "将值重置为初始值"
        },
        {
          "actionType": "reload",
          "actionLabel": "重新加载",
          "description": "触发组件数据刷新并重新渲染"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "panelJustify": true
    },
    "order": 0
  },
  {
    "name": "button",
    "icon": "fa fa-square",
    "description": "Used to display a button, you can configure different display styles and different click behaviors.",
    "previewSchema": {
      "type": "button",
      "label": "按钮"
    },
    "tags": [
      "button"
    ],
    "docLink": "/amis/zh-CN/components/button",
    "scaffold": {
      "type": "button",
      "label": "button",
      "onEvent": {
        "click": {
          "actions": []
        }
      }
    },
    "isBaseComponent": true,
    "pluginIcon": "button-plugin",
    "rendererName": "button",
    "id": "8b1a898d4837",
    "plugin": {
      "rendererName": "button",
      "$schema": "/schemas/ActionSchema.json",
      "order": -400,
      "name": "button",
      "isBaseComponent": true,
      "description": "Used to display a button, you can configure different display styles and different click behaviors.",
      "docLink": "/amis/zh-CN/components/button",
      "icon": "fa fa-square",
      "pluginIcon": "button-plugin",
      "panelTitle": "Button",
      "events": [
        {
          "eventName": "click",
          "eventLabel": "click",
          "description": "Fire on click",
          "defaultShow": true,
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "Context",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "mouse event"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "mouseenter",
          "eventLabel": "mouseenter",
          "description": "Fires when mouse moves in",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "Context",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "mouse event"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "mouseleave",
          "eventLabel": "mouseleave",
          "description": "mouseleave",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "Context",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "Event object"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [],
      "panelJustify": true
    },
    "order": 0
  },
  {
    "name": "文字",
    "icon": "fa fa-file-o",
    "description": "用来展示文字或者段落，支持模板语法可用来关联动态数据。",
    "previewSchema": {
      "type": "tpl",
      "tpl": "这是模板内容当前时间<%- new Date() %>"
    },
    "tags": [
      "展示"
    ],
    "docLink": "/amis/zh-CN/components/tpl",
    "scaffold": {
      "type": "tpl",
      "tpl": "请编辑内容",
      "inline": true,
      "wrapperComponent": ""
    },
    "isBaseComponent": true,
    "pluginIcon": "plain-plugin",
    "rendererName": "tpl",
    "id": "d178a25df444",
    "plugin": {
      "rendererName": "tpl",
      "$schema": "/schemas/TplSchema.json",
      "order": -200,
      "name": "文字",
      "isBaseComponent": true,
      "icon": "fa fa-file-o",
      "pluginIcon": "plain-plugin",
      "description": "用来展示文字或者段落，支持模板语法可用来关联动态数据。",
      "docLink": "/amis/zh-CN/components/tpl",
      "panelTitle": "文字",
      "panelJustify": true,
      "events": [
        {
          "eventName": "click",
          "eventLabel": "点击",
          "description": "点击时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "mouseenter",
          "eventLabel": "鼠标移入",
          "description": "鼠标移入时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "mouseleave",
          "eventLabel": "鼠标移出",
          "description": "鼠标移出时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [],
      "popOverBody": [
        {
          "type": "ae-textareaFormulaControl",
          "variableMode": "tree",
          "label": "文字内容",
          "mode": "normal",
          "visibleOn": "this.wrapperComponent !== undefined",
          "name": "tpl"
        },
        {
          "label": "内容",
          "type": "input-rich-text",
          "mode": "normal",
          "buttons": [
            "paragraphFormat",
            "quote",
            "textColor",
            "backgroundColor",
            "|",
            "bold",
            "italic",
            "underline",
            "strikeThrough",
            "|",
            "formatOL",
            "formatUL",
            "align",
            "|",
            "insertLink",
            "insertImage",
            "insertTable",
            "|",
            "undo",
            "redo",
            "fullscreen"
          ],
          "minRows": 5,
          "language": "html",
          "visibleOn": "this.wrapperComponent === undefined",
          "name": "tpl"
        },
        {
          "name": "wrapperComponent",
          "type": "select",
          "label": "文字格式",
          "options": [
            {
              "label": "普通文字",
              "value": ""
            },
            {
              "label": "段落",
              "value": "p"
            },
            {
              "label": "一级标题",
              "value": "h1"
            },
            {
              "label": "二级标题",
              "value": "h2"
            },
            {
              "label": "三级标题",
              "value": "h3"
            },
            {
              "label": "四级标题",
              "value": "h4"
            },
            {
              "label": "五级标题",
              "value": "h5"
            },
            {
              "label": "六级标题",
              "value": "h6"
            },
            {
              "label": "富文本",
              "value": "rich-text"
            }
          ]
        }
      ]
    },
    "order": 0
  },
  {
    "searchKeywords": "水平分栏",
    "name": "grid",
    "icon": "fa fa-th",
    "description": "分栏布局",
    "previewSchema": {
      "type": "grid",
      "columns": [
        {
          "body": [
            {
              "type": "tpl",
              "tpl": "栏",
              "inline": false,
              "wrapperComponent": "",
              "className": "bg-light wrapper"
            }
          ]
        },
        {
          "body": [
            {
              "type": "tpl",
              "tpl": "栏",
              "wrapperComponent": "",
              "className": "bg-light wrapper",
              "inline": false
            }
          ]
        }
      ]
    },
    "tags": [
      "布局容器"
    ],
    "docLink": "/amis/zh-CN/components/grid",
    "scaffold": {
      "type": "grid",
      "columns": [
        {
          "body": []
        },
        {
          "body": []
        }
      ]
    },
    "isBaseComponent": true,
    "pluginIcon": "grid-plugin",
    "rendererName": "grid",
    "id": "225982a85987",
    "plugin": {
      "rendererName": "grid",
      "$schema": "/schemas/GridSchema.json",
      "name": "grid",
      "isBaseComponent": true,
      "description": "分栏布局",
      "searchKeywords": "水平分栏",
      "docLink": "/amis/zh-CN/components/grid",
      "order": -2,
      "icon": "fa fa-th",
      "pluginIcon": "grid-plugin",
      "panelTitle": "分栏布局",
      "panelWithOutOthers": false,
      "vRendererConfig": {
        "regions": {
          "body": {
            "key": "body",
            "label": "内容区",
            "placeholder": "栏"
          }
        },
        "panelTitle": "栏"
      },
      "overrides": {}
    },
    "order": 0
  },
  {
    "name": "container",
    "icon": "fa fa-square-o",
    "description": "一个简单的容器，可以将多个渲染器放置在一起。",
    "previewSchema": {
      "type": "container",
      "body": [],
      "style": {
        "position": "relative",
        "display": "flex",
        "inset": "auto",
        "flexWrap": "nowrap",
        "flexDirection": "column",
        "alignItems": "flex-start"
      },
      "size": "none",
      "wrapperBody": false
    },
    "tags": [
      "container"
    ],
    "docLink": "/amis/zh-CN/components/container",
    "scaffold": {
      "type": "container",
      "size": "none",
      "wrapperBody": false
    },
    "isBaseComponent": true,
    "pluginIcon": "container-plugin",
    "rendererName": "container",
    "id": "9970b5ac7055",
    "plugin": {
      "rendererName": "container",
      "$schema": "/schemas/ContainerSchema.json",
      "name": "container",
      "isBaseComponent": true,
      "description": "一个简单的容器，可以将多个渲染器放置在一起。",
      "docLink": "/amis/zh-CN/components/container",
      "order": -2,
      "icon": "fa fa-square-o",
      "pluginIcon": "container-plugin",
      "regions": [
        null
      ],
      "panelTitle": "container",
      "panelJustify": true,
      "events": [
        {
          "eventName": "click",
          "eventLabel": "点击",
          "description": "点击时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "mouseenter",
          "eventLabel": "鼠标移入",
          "description": "鼠标移入时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "mouseleave",
          "eventLabel": "鼠标移出",
          "description": "鼠标移出时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                }
              }
            }
          ]
        }
      ]
    },
    "order": 0
  },
  {
    "name": "Free container",
    "icon": "fa fa-square-o",
    "description": "Free container: Its direct child elements support drag and drop adjustment.。",
    "previewSchema": {
      "type": "container",
      "body": [],
      "style": {
        "position": "relative",
        "display": "flex",
        "inset": "auto",
        "flexWrap": "nowrap",
        "flexDirection": "column",
        "alignItems": "flex-start"
      },
      "size": "none",
      "wrapperBody": false
    },
    "tags": [
      "layout container"
    ],
    "docLink": "/amis/zh-CN/components/container",
    "scaffold": {
      "type": "container",
      "isFreeContainer": true,
      "size": "xs",
      "body": [],
      "wrapperBody": false,
      "style": {
        "position": "relative",
        "minHeight": "200px"
      }
    },
    "isBaseComponent": true,
    "pluginIcon": "layout-free-container",
    "rendererName": "container",
    "id": "f2cc5a44db29",
    "plugin": {
      "rendererName": "container",
      "$schema": "/schemas/ContainerSchema.json",
      "name": "Free container",
      "isBaseComponent": true,
      "description": "Free container: Its direct child elements support drag and drop adjustment.。",
      "docLink": "/amis/zh-CN/components/container",
      "order": -2,
      "icon": "fa fa-square-o",
      "pluginIcon": "layout-free-container",
      "regions": [
        {
          "key": "body",
          "label": "内容区"
        }
      ],
      "panelTitle": "Free Container",
      "panelJustify": true,
      "events": [
        {
          "eventName": "click",
          "eventLabel": "点击",
          "description": "点击时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "mouseenter",
          "eventLabel": "鼠标移入",
          "description": "鼠标移入时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "mouseleave",
          "eventLabel": "鼠标移出",
          "description": "鼠标移出时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                }
              }
            }
          ]
        }
      ]
    },
    "order": 0
  },
  {
    "name": "switch-container",
    "icon": "fa fa-square-o",
    "description": "根据状态进行组件条件渲染的容器，方便设计多状态组件",
    "previewSchema": {
      "type": "switch-container",
      "items": [
        {
          "title": "状态一",
          "body": [
            {
              "type": "tpl",
              "tpl": "状态一内容",
              "wrapperComponent": ""
            }
          ]
        },
        {
          "title": "状态二",
          "body": [
            {
              "type": "tpl",
              "tpl": "状态二内容",
              "wrapperComponent": ""
            }
          ]
        }
      ],
      "style": {
        "position": "static",
        "display": "block"
      }
    },
    "tags": [
      "布局容器"
    ],
    "scaffold": {
      "type": "switch-container"
    },
    "isBaseComponent": true,
    "pluginIcon": "switch-container-plugin",
    "rendererName": "switch-container",
    "id": "223b8ab475e9",
    "plugin": {
      "rendererName": "switch-container",
      "$schema": "/schemas/SwitchContainerSchema.json",
      "name": "switch-container",
      "isBaseComponent": true,
      "description": "根据状态进行组件条件渲染的容器，方便设计多状态组件",
      "order": -2,
      "icon": "fa fa-square-o",
      "pluginIcon": "switch-container-plugin",
      "regions": [
        {
          "key": "body",
          "label": "内容区"
        }
      ],
      "panelTitle": "状态容器",
      "panelJustify": true,
      "vRendererConfig": {
        "regions": {
          "body": {
            "key": "body",
            "label": "内容区",
            "placeholder": "状态"
          }
        },
        "panelTitle": "状态",
        "panelJustify": true
      },
      "wrapperProps": {
        "unmountOnExit": true,
        "mountOnEnter": true
      },
      "overrides": {},
      "events": [
        {
          "eventName": "click",
          "eventLabel": "点击",
          "description": "点击时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "mouseenter",
          "eventLabel": "鼠标移入",
          "description": "鼠标移入时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "mouseleave",
          "eventLabel": "鼠标移出",
          "description": "鼠标移出时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                }
              }
            }
          ]
        }
      ]
    },
    "order": 0
  },
  {
    "name": "Layout Part",
    "icon": "fa fa-columns",
    "description": "Adsorption container: can be set as a ceiling or ceiling display。",
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "第一列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第二列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第三列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        }
      ],
      "style": {
        "position": "relative",
        "rowGap": "10px",
        "columnGap": "10px"
      }
    },
    "tags": [
      "布局容器"
    ],
    "docLink": "/amis/zh-CN/components/flex",
    "scaffold": {
      "type": "flex",
      "isSorptionContainer": true,
      "sorptionPosition": "top",
      "className": "p-1",
      "items": [
        {
          "type": "container",
          "body": [],
          "size": "none",
          "style": {
            "position": "static",
            "display": "block",
            "flex": "1 1 auto",
            "flexGrow": 1,
            "flexBasis": 0
          },
          "wrapperBody": false,
          "isFixedHeight": false,
          "isFixedWidth": false
        },
        {
          "type": "container",
          "body": [],
          "size": "none",
          "style": {
            "position": "static",
            "display": "block",
            "flex": "1 1 auto",
            "flexGrow": 1,
            "flexBasis": 0
          },
          "wrapperBody": false,
          "isFixedHeight": false,
          "isFixedWidth": false
        },
        {
          "type": "container",
          "body": [],
          "size": "none",
          "style": {
            "position": "static",
            "display": "block",
            "flex": "1 1 auto",
            "flexGrow": 1,
            "flexBasis": 0
          },
          "wrapperBody": false,
          "isFixedHeight": false,
          "isFixedWidth": false
        },
        {
          "type": "container",
          "body": [],
          "size": "none",
          "style": {
            "position": "static",
            "display": "block",
            "flex": "1 1 auto",
            "flexGrow": 1,
            "flexBasis": 0
          },
          "wrapperBody": false,
          "isFixedHeight": false,
          "isFixedWidth": false
        }
      ],
      "style": {
        "position": "fixed",
        "inset": "0 auto auto 0",
        "zIndex": 10,
        "width": "100%",
        "overflowX": "auto",
        "margin": "0",
        "overflowY": "auto"
      },
      "isFixedWidth": true,
      "isFixedHeight": false,
      "originPosition": "right-bottom"
    },
    "disabledRendererPlugin": false,
    "isBaseComponent": true,
    "pluginIcon": "layout-fixed-top",
    "rendererName": "flex",
    "id": "452617077f8e",
    "plugin": {
      "rendererName": "flex",
      "$schema": "/schemas/FlexSchema.json",
      "disabledRendererPlugin": false,
      "name": "Layout Part",
      "order": -1,
      "isBaseComponent": true,
      "icon": "fa fa-columns",
      "pluginIcon": "layout-fixed-top",
      "description": "Adsorption container: can be set as a ceiling or ceiling display。",
      "docLink": "/amis/zh-CN/components/flex",
      "panelTitle": "吸附容器",
      "panelJustify": true,
      "regions": [
        {
          "key": "items",
          "label": "子节点集合"
        }
      ]
    },
    "order": 0
  },
  {
    "name": "Fixed layout",
    "icon": "fa fa-columns",
    "description": "悬浮容器: 基于 CSS Fixed 实现的特殊布局容器。",
    "previewSchema": {
      "type": "container",
      "body": [],
      "style": {
        "position": "static",
        "display": "block"
      },
      "size": "none",
      "wrapperBody": false
    },
    "tags": [
      "布局容器"
    ],
    "docLink": "/amis/zh-CN/components/flex",
    "scaffold": {
      "type": "container",
      "size": "xs",
      "body": [],
      "style": {
        "position": "fixed",
        "inset": "auto 50px 50px auto",
        "zIndex": 10,
        "minWidth": "80px",
        "minHeight": "80px",
        "display": "block"
      },
      "wrapperBody": false,
      "originPosition": "right-bottom"
    },
    "disabledRendererPlugin": false,
    "isBaseComponent": true,
    "pluginIcon": "layout-fixed-plugin",
    "rendererName": "flex",
    "id": "bc1cddba1b76",
    "plugin": {
      "rendererName": "flex",
      "$schema": "/schemas/FlexSchema.json",
      "disabledRendererPlugin": false,
      "name": "Fixed layout",
      "order": 0,
      "isBaseComponent": true,
      "icon": "fa fa-columns",
      "pluginIcon": "layout-fixed-plugin",
      "description": "悬浮容器: 基于 CSS Fixed 实现的特殊布局容器。",
      "docLink": "/amis/zh-CN/components/flex",
      "panelTitle": "悬浮容器",
      "panelJustify": true,
      "regions": [
        {
          "key": "items",
          "label": "子节点集合"
        }
      ]
    },
    "order": 0
  },
  {
    "name": "collapse-group",
    "icon": "fa fa-align-justify",
    "description": "折叠面板，当信息量较大且分类较多时，可使用折叠面板进行分类收纳。",
    "previewSchema": {
      "type": "collapse-group",
      "activeKey": [
        "1"
      ],
      "body": [
        {
          "type": "collapse",
          "key": "1",
          "active": true,
          "header": "标题1",
          "body": [
            {
              "type": "tpl",
              "tpl": "这里是内容1",
              "wrapperComponent": "",
              "inline": false
            }
          ]
        },
        {
          "type": "collapse",
          "key": "2",
          "header": "标题2",
          "body": [
            {
              "type": "tpl",
              "tpl": "这里是内容1",
              "wrapperComponent": "",
              "inline": false
            }
          ]
        }
      ]
    },
    "tags": [
      "collapse-group"
    ],
    "docLink": "/amis/zh-CN/components/collapse",
    "scaffold": {
      "type": "collapse-group"
    },
    "isBaseComponent": true,
    "pluginIcon": "collapse-plugin",
    "rendererName": "collapse-group",
    "id": "c5f96801f9c6",
    "plugin": {
      "rendererName": "collapse-group",
      "$schema": "/schemas/CollapseGroupSchema.json",
      "name": "collapse-group",
      "isBaseComponent": true,
      "description": "折叠面板，当信息量较大且分类较多时，可使用折叠面板进行分类收纳。",
      "docLink": "/amis/zh-CN/components/collapse",
      "icon": "fa fa-align-justify",
      "pluginIcon": "collapse-plugin",
      "events": [
        {
          "eventName": "change",
          "eventLabel": "折叠状态改变",
          "description": "折叠面板折叠状态改变时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "title": "数据",
                  "type": "object",
                  "properties": {
                    "activeKeys": {
                      "type": "array",
                      "title": "当前展开的索引列表"
                    },
                    "collapseId": {
                      "type": "string",
                      "title": "折叠器索引"
                    },
                    "collapsed": {
                      "type": "boolean",
                      "title": "折叠器状态"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "activeKeyData": [],
      "panelTitle": "折叠面板",
      "panelJustify": true,
      "regions": [
        {
          "key": "body",
          "label": "内容区",
          "renderMethod": "render",
          "insertPosition": "inner"
        }
      ],
      "order": 0
    },
    "order": 0
  },
  {
    "name": "panel",
    "icon": "fa fa-window-maximize",
    "description": "展示一个面板，可以配置标题，内容区。",
    "previewSchema": {
      "type": "panel",
      "title": "这是一个面板",
      "body": "这是内容区",
      "className": "Panel--default text-left m-b-none",
      "actions": [
        {
          "label": "按钮1",
          "type": "button"
        },
        {
          "label": "按钮2",
          "type": "button"
        }
      ]
    },
    "tags": [
      "布局容器"
    ],
    "docLink": "/amis/zh-CN/components/panel",
    "scaffold": {
      "type": "panel",
      "title": "标题",
      "body": "内容"
    },
    "isBaseComponent": true,
    "pluginIcon": "panel-plugin",
    "rendererName": "panel",
    "id": "064c76b97630",
    "plugin": {
      "rendererName": "panel",
      "$schema": "/schemas/panelSchema.json",
      "name": "panel",
      "isBaseComponent": true,
      "icon": "fa fa-window-maximize",
      "pluginIcon": "panel-plugin",
      "description": "展示一个面板，可以配置标题，内容区。",
      "docLink": "/amis/zh-CN/components/panel",
      "regions": [
        null,
        {
          "key": "actions",
          "label": "按钮组",
          "renderMethod": "renderActions",
          "preferTag": "按钮"
        }
      ],
      "panelTitle": "面板",
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "tabs",
    "icon": "fa fa-folder-o",
    "description": "选项卡，可以将内容分组用选项卡的形式展示，降低用户使用成本。",
    "previewSchema": {
      "type": "tabs",
      "tabs": [
        {
          "title": "选项卡1",
          "body": []
        },
        {
          "title": "选项卡2",
          "body": []
        }
      ],
      "mountOnEnter": true
    },
    "tags": [
      "布局容器"
    ],
    "docLink": "/amis/zh-CN/components/tabs",
    "scaffold": {
      "type": "tabs",
      "mountOnEnter": true
    },
    "isBaseComponent": true,
    "pluginIcon": "tabs-plugin",
    "rendererName": "tabs",
    "id": "7f52a09b3866",
    "plugin": {
      "rendererName": "tabs",
      "$schema": "/schemas/TabsSchema.json",
      "name": "tabs",
      "isBaseComponent": true,
      "description": "选项卡，可以将内容分组用选项卡的形式展示，降低用户使用成本。",
      "docLink": "/amis/zh-CN/components/tabs",
      "icon": "fa fa-folder-o",
      "pluginIcon": "tabs-plugin",
      "notRenderFormZone": true,
      "regions": [
        {
          "key": "toolbar",
          "label": "工具栏",
          "preferTag": "展示"
        }
      ],
      "panelTitle": "选项卡",
      "events": [
        {
          "eventName": "change",
          "eventLabel": "选项卡切换",
          "description": "选项卡切换",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "string",
                      "title": "选项卡索引"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [
        {
          "actionType": "changeActiveKey",
          "actionLabel": "激活指定选项卡",
          "description": "修改当前激活tab项的key",
          "config": [
            "activeKey"
          ],
          "schema": {
            "type": "combo",
            "name": "args",
            "multiple": false,
            "strictMode": false,
            "items": [
              {
                "type": "ae-formulaControl",
                "variableMode": "tree",
                "name": "activeKey",
                "label": "激活项",
                "variables": "${variables}",
                "size": "lg",
                "mode": "horizontal"
              }
            ]
          }
        }
      ],
      "panelJustify": true,
      "patchContainers": [
        "tabs.body"
      ],
      "vRendererConfig": {
        "regions": {
          "body": {
            "key": "body",
            "label": "内容区"
          }
        },
        "panelTitle": "卡片",
        "panelJustify": true
      },
      "wrapperProps": {
        "unmountOnExit": true,
        "mountOnEnter": true
      },
      "overrides": {},
      "order": 0
    },
    "order": 0
  },
  {
    "searchKeywords": "多行文本输入框",
    "name": "多行文本框",
    "icon": "fa fa-paragraph",
    "description": "支持换行输入",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "wrapWithPanel": false,
      "mode": "horizontal",
      "body": {
        "type": "textarea",
        "label": "多行文本",
        "name": "textarea"
      }
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/textarea",
    "scaffold": {
      "type": "textarea",
      "label": "多行文本",
      "name": "textarea"
    },
    "isBaseComponent": true,
    "pluginIcon": "textarea-plugin",
    "rendererName": "textarea",
    "id": "95ad91b5f334",
    "plugin": {
      "rendererName": "textarea",
      "$schema": "/schemas/TextareaControlSchema.json",
      "name": "多行文本框",
      "isBaseComponent": true,
      "icon": "fa fa-paragraph",
      "pluginIcon": "textarea-plugin",
      "description": "支持换行输入",
      "searchKeywords": "多行文本输入框",
      "docLink": "/amis/zh-CN/components/form/textarea",
      "notRenderFormZone": true,
      "panelTitle": "多行文本",
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "输入框值变化时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "string",
                      "title": "当前文本内容"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "focus",
          "eventLabel": "获取焦点",
          "description": "输入框获取焦点时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "string",
                      "title": "当前文本内容"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "blur",
          "eventLabel": "失去焦点",
          "description": "输入框失去焦点时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "string",
                      "title": "当前的文本内容"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清空输入框内容"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "将值重置为初始值"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "searchKeywords": "数字输入框",
    "name": "数字框",
    "icon": "fa fa-sort-numeric-asc",
    "description": "支持设定最大值和最小值，以及步长与精度",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "input-number",
          "label": "数字",
          "name": "number",
          "keyboard": true,
          "value": 88
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/input-number",
    "scaffold": {
      "type": "input-number",
      "label": "数字",
      "name": "number",
      "keyboard": true
    },
    "isBaseComponent": true,
    "pluginIcon": "input-number-plugin",
    "rendererName": "input-number",
    "id": "910e5b5acb71",
    "plugin": {
      "rendererName": "input-number",
      "$schema": "/schemas/NumberControlSchema.json",
      "name": "数字框",
      "isBaseComponent": true,
      "icon": "fa fa-sort-numeric-asc",
      "pluginIcon": "input-number-plugin",
      "description": "支持设定最大值和最小值，以及步长与精度",
      "searchKeywords": "数字输入框",
      "docLink": "/amis/zh-CN/components/form/input-number",
      "notRenderFormZone": true,
      "panelTitle": "数字框",
      "panelJustify": true,
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "数值变化",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "number",
                      "title": "当前数值"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "focus",
          "eventLabel": "获取焦点",
          "description": "数字框获取焦点",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "number",
                      "title": "当前数值"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "blur",
          "eventLabel": "失去焦点",
          "description": "数字框失去焦点",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "number",
                      "title": "当前数值"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清空数字框内容"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "重置为默认值"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "order": 0
    },
    "order": 0
  },
  {
    "searchKeywords": "选择器",
    "name": "下拉框",
    "icon": "fa fa-th-list",
    "description": "支持多选，输入提示，可使用 source 获取选项",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "select",
          "label": "选项",
          "name": "select",
          "options": [
            {
              "label": "选项A",
              "value": "A"
            },
            {
              "label": "选项B",
              "value": "B"
            }
          ]
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/select",
    "scaffold": {
      "type": "select",
      "label": "选项",
      "name": "select"
    },
    "isBaseComponent": true,
    "pluginIcon": "select-plugin",
    "rendererName": "select",
    "id": "5fb825ca4de1",
    "plugin": {
      "name": "下拉框",
      "panelTitle": "下拉框",
      "rendererName": "select",
      "icon": "fa fa-th-list",
      "panelIcon": "fa fa-th-list",
      "pluginIcon": "select-plugin",
      "isBaseComponent": true,
      "panelJustify": true,
      "notRenderFormZone": true,
      "$schema": "/schemas/SelectControlSchema.json",
      "description": "支持多选，输入提示，可使用 source 获取选项",
      "searchKeywords": "选择器",
      "docLink": "/amis/zh-CN/components/form/select",
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清除选中值"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "将值重置为初始值"
        },
        {
          "actionType": "reload",
          "actionLabel": "重新加载",
          "description": "触发组件数据刷新并重新渲染"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "order": 0
    },
    "order": 0
  },
  {
    "name": "级联选择器",
    "icon": "fa fa-indent",
    "description": "适用于选项中含有子项，可通过 source 拉取选项，支持多选",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "nested-select",
          "label": "级联选择器",
          "name": "nestedSelect",
          "onlyChildren": true,
          "options": [
            {
              "label": "选项A",
              "value": "A"
            },
            {
              "label": "选项B",
              "value": "B",
              "children": [
                {
                  "label": "选项b1",
                  "value": "b1"
                },
                {
                  "label": "选项b2",
                  "value": "b2"
                }
              ]
            },
            {
              "label": "选项C",
              "value": "C",
              "children": [
                {
                  "label": "选项c1",
                  "value": "c1"
                },
                {
                  "label": "选项c2",
                  "value": "c2"
                }
              ]
            }
          ]
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/nestedselect",
    "scaffold": {
      "type": "nested-select",
      "label": "级联选择器",
      "name": "nestedSelect",
      "onlyChildren": true
    },
    "isBaseComponent": true,
    "pluginIcon": "nested-select-plugin",
    "rendererName": "nested-select",
    "id": "27bab45db1a3",
    "plugin": {
      "rendererName": "nested-select",
      "$schema": "/schemas/NestedSelectControlSchema.json",
      "name": "级联选择器",
      "isBaseComponent": true,
      "icon": "fa fa-indent",
      "pluginIcon": "nested-select-plugin",
      "description": "适用于选项中含有子项，可通过 source 拉取选项，支持多选",
      "docLink": "/amis/zh-CN/components/form/nestedselect",
      "panelTitle": "级联选择器",
      "notRenderFormZone": true,
      "panelDefinitions": {
        "options": {
          "label": "选项 Options",
          "name": "options",
          "type": "combo",
          "multiple": true,
          "multiLine": true,
          "draggable": true,
          "addButtonText": "新增选项",
          "scaffold": {
            "label": "",
            "value": ""
          },
          "items": [
            {
              "type": "group",
              "body": [
                {
                  "type": "input-text",
                  "name": "label",
                  "placeholder": "Name",
                  "required": true
                },
                {
                  "type": "input-text",
                  "name": "value",
                  "placeholder": "值",
                  "unique": true
                }
              ]
            },
            {
              "$ref": "options",
              "label": "子选项",
              "name": "children",
              "addButtonText": "新增子选项"
            }
          ]
        }
      },
      "panelJustify": true,
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "选中值变化时触发"
        },
        {
          "eventName": "focus",
          "eventLabel": "获取焦点",
          "description": "输入框获取焦点时触发"
        },
        {
          "eventName": "blur",
          "eventLabel": "失去焦点",
          "description": "输入框失去焦点时触发"
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清除选中值"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "将值重置为初始值"
        },
        {
          "actionType": "reload",
          "actionLabel": "重新加载",
          "description": "触发组件数据刷新并重新渲染"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "order": 0
    },
    "order": 0
  },
  {
    "name": "chained-select",
    "icon": "fa fa-th-list",
    "description": "通过<code>source</code>拉取选项，只要有返回结果，就可以无限级别增加",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "wrapWithPanel": false,
      "mode": "horizontal",
      "body": {
        "type": "chained-select",
        "label": "链式下拉",
        "name": "chainedSelect",
        "joinValues": true
      }
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/chain-select",
    "scaffold": {
      "type": "chained-select",
      "label": "链式下拉",
      "name": "chainedSelect",
      "joinValues": true
    },
    "isBaseComponent": true,
    "pluginIcon": "chained-select-plugin",
    "rendererName": "chained-select",
    "id": "4580a7a7b7c9",
    "plugin": {
      "rendererName": "chained-select",
      "$schema": "/schemas/ChainedSelectControlSchema.json",
      "name": "chained-select",
      "isBaseComponent": true,
      "icon": "fa fa-th-list",
      "pluginIcon": "chained-select-plugin",
      "description": "通过<code>source</code>拉取选项，只要有返回结果，就可以无限级别增加",
      "docLink": "/amis/zh-CN/components/form/chain-select",
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "选中值变化时触发"
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清除选中值"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "将值重置为初始值"
        },
        {
          "actionType": "reload",
          "actionLabel": "重新加载",
          "description": "触发组件数据刷新并重新渲染"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "panelTitle": "链式下拉",
      "notRenderFormZone": true,
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "searchKeywords": "下拉菜单",
    "name": "dropdown-button",
    "icon": "fa fa-chevron-down",
    "description": "下拉按钮，更多的按钮通过点击后展示开来。",
    "previewSchema": {
      "type": "dropdown-button",
      "label": "下拉按钮",
      "buttons": [
        {
          "type": "button",
          "label": "按钮1"
        },
        {
          "type": "button",
          "label": "按钮2"
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/dropdown-button",
    "scaffold": {
      "type": "dropdown-button",
      "label": "下拉按钮"
    },
    "isBaseComponent": true,
    "pluginIcon": "dropdown-btn-plugin",
    "rendererName": "dropdown-button",
    "id": "3ee65e1bb67b",
    "plugin": {
      "rendererName": "dropdown-button",
      "$schema": "/schemas/DropdownButtonSchema.json",
      "name": "dropdown-button",
      "isBaseComponent": true,
      "description": "下拉按钮，更多的按钮通过点击后展示开来。",
      "searchKeywords": "下拉菜单",
      "icon": "fa fa-chevron-down",
      "pluginIcon": "dropdown-btn-plugin",
      "docLink": "/amis/zh-CN/components/dropdown-button",
      "panelTitle": "下拉按钮",
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "checkboxes",
    "icon": "fa fa-check-square",
    "description": "通过<code>options</code>配置多个勾选框，也可以通过<code>source</code>拉取选项",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "value": "A",
          "type": "checkboxes",
          "label": "复选框",
          "name": "checkboxes",
          "multiple": true,
          "options": [
            {
              "label": "选项A",
              "value": "A"
            },
            {
              "label": "选项B",
              "value": "B"
            }
          ]
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/checkboxes",
    "scaffold": {
      "type": "checkboxes",
      "label": "复选框",
      "name": "checkboxes",
      "multiple": true
    },
    "isBaseComponent": true,
    "pluginIcon": "checkboxes-plugin",
    "rendererName": "checkboxes",
    "id": "f69d431018fd",
    "plugin": {
      "rendererName": "checkboxes",
      "$schema": "/schemas/CheckboxesControlSchema.json",
      "name": "checkboxes",
      "isBaseComponent": true,
      "icon": "fa fa-check-square",
      "pluginIcon": "checkboxes-plugin",
      "description": "通过<code>options</code>配置多个勾选框，也可以通过<code>source</code>拉取选项",
      "docLink": "/amis/zh-CN/components/form/checkboxes",
      "notRenderFormZone": true,
      "panelTitle": "复选框",
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "选中值变化时触发"
        },
        {
          "eventName": "addConfirm",
          "eventLabel": "Confirm Add",
          "description": "Triggered when add is submitted"
        },
        {
          "eventName": "editConfirm",
          "eventLabel": "Confirm Edit",
          "description": "Triggered when edit is submitted"
        },
        {
          "eventName": "deleteConfirm",
          "eventLabel": "Confirm Delete",
          "description": "Triggered when delete is submitted"
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清除选中值"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "将值重置为初始值"
        },
        {
          "actionType": "reload",
          "actionLabel": "重新加载",
          "description": "触发组件数据刷新并重新渲染"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "单选框",
    "icon": "fa fa-dot-circle-o",
    "description": "通过 options 配置选项，可通过 source 拉取选项",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "radios",
          "label": "单选框",
          "name": "radios",
          "options": [
            {
              "label": "选项A",
              "value": "A"
            },
            {
              "label": "选项B",
              "value": "B"
            }
          ],
          "value": "A"
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/radios",
    "scaffold": {
      "type": "radios",
      "label": "单选框",
      "name": "radios"
    },
    "isBaseComponent": true,
    "pluginIcon": "radios-plugin",
    "rendererName": "radios",
    "id": "3bb5c3cc97fc",
    "plugin": {
      "rendererName": "radios",
      "$schema": "/schemas/RadiosControlSchema.json",
      "name": "单选框",
      "isBaseComponent": true,
      "icon": "fa fa-dot-circle-o",
      "pluginIcon": "radios-plugin",
      "description": "通过 options 配置选项，可通过 source 拉取选项",
      "docLink": "/amis/zh-CN/components/form/radios",
      "notRenderFormZone": true,
      "panelTitle": "单选框",
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "选中值变化时触发"
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清除选中值"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "将值重置为初始值"
        },
        {
          "actionType": "reload",
          "actionLabel": "重新加载",
          "description": "触发组件数据刷新并重新渲染"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "checkbox",
    "icon": "fa fa-check-square-o",
    "description": "勾选框",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "wrapWithPanel": false,
      "mode": "horizontal",
      "body": [
        {
          "value": true,
          "type": "checkbox",
          "option": "勾选框",
          "name": "checkbox",
          "label": "勾选表单"
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/checkbox",
    "scaffold": {
      "type": "checkbox",
      "option": "勾选框",
      "name": "checkbox",
      "label": "勾选框"
    },
    "isBaseComponent": true,
    "pluginIcon": "checkbox-plugin",
    "rendererName": "checkbox",
    "id": "269952edb68e",
    "plugin": {
      "rendererName": "checkbox",
      "$schema": "/schemas/CheckboxControlSchema.json",
      "name": "checkbox",
      "isBaseComponent": true,
      "icon": "fa fa-check-square-o",
      "pluginIcon": "checkbox-plugin",
      "description": "勾选框",
      "docLink": "/amis/zh-CN/components/form/checkbox",
      "notRenderFormZone": true,
      "panelTitle": "勾选框",
      "panelJustify": true,
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "选中状态变化时触发"
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清除选中值"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "将值重置为初始值"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "order": 0
    },
    "order": 0
  },
  {
    "searchKeywords": "日期框、input-datetime、日期时间框、input-time、时间框、input-month、月份框、input-quarter、季度框、input-year、年框、年份框、年份选择",
    "name": "日期",
    "icon": "fa fa-calendar",
    "description": "年月日选择，支持相对值设定，如<code>+2days</code>两天后",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "input-date",
          "label": "日期",
          "name": "date"
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/input-date",
    "scaffold": {
      "type": "input-date",
      "label": "日期",
      "name": "date"
    },
    "isBaseComponent": true,
    "pluginIcon": "input-date-plugin",
    "rendererName": "input-date",
    "id": "2561313990d1",
    "plugin": {
      "rendererName": "input-date",
      "$schema": "/schemas/DateControlSchema.json",
      "icon": "fa fa-calendar",
      "pluginIcon": "input-date-plugin",
      "name": "日期",
      "isBaseComponent": true,
      "searchKeywords": "日期框、input-datetime、日期时间框、input-time、时间框、input-month、月份框、input-quarter、季度框、input-year、年框、年份框、年份选择",
      "description": "年月日选择，支持相对值设定，如<code>+2days</code>两天后",
      "docLink": "/amis/zh-CN/components/form/input-date",
      "notRenderFormZone": true,
      "panelTitle": "日期配置",
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "时间值变化时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "string",
                      "title": "当前日期"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "focus",
          "eventLabel": "获取焦点",
          "description": "输入框获取焦点(非内嵌模式)时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "string",
                      "title": "当前日期"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "blur",
          "eventLabel": "失去焦点",
          "description": "输入框失去焦点(非内嵌模式)时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "string",
                      "title": "当前日期"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清空输入框内容"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "将值重置为初始值"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "searchKeywords": "日期范围框、input-datetime-range、日期时间范围、input-time-range、时间范围、input-month-range、月份范围、input-quarter-range、季度范围、input-year-range、年范围、年份范围",
    "name": "date-range",
    "icon": "fa fa-calendar",
    "description": "日期范围选择，可通过<code>minDate</code>、<code>maxDate</code>设定最小、最大日期",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "input-date-range",
          "label": "日期范围",
          "name": "date-range"
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/input-date-range",
    "scaffold": {
      "type": "input-date-range",
      "label": "日期范围",
      "name": "date-range"
    },
    "isBaseComponent": true,
    "pluginIcon": "input-date-range-plugin",
    "rendererName": "input-date-range",
    "id": "e1d7f32b6ba1",
    "plugin": {
      "rendererName": "input-date-range",
      "$schema": "/schemas/DateRangeControlSchema.json",
      "icon": "fa fa-calendar",
      "pluginIcon": "input-date-range-plugin",
      "name": "date-range",
      "isBaseComponent": true,
      "searchKeywords": "日期范围框、input-datetime-range、日期时间范围、input-time-range、时间范围、input-month-range、月份范围、input-quarter-range、季度范围、input-year-range、年范围、年份范围",
      "description": "日期范围选择，可通过<code>minDate</code>、<code>maxDate</code>设定最小、最大日期",
      "docLink": "/amis/zh-CN/components/form/input-date-range",
      "notRenderFormZone": true,
      "panelTitle": "日期范围",
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "时间值变化时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "string",
                      "title": "当前时间范围"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "focus",
          "eventLabel": "获取焦点",
          "description": "输入框获取焦点(非内嵌模式)时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "string",
                      "title": "当前时间范围"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "blur",
          "eventLabel": "失去焦点",
          "description": "输入框失去焦点(非内嵌模式)时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "string",
                      "title": "当前时间范围"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清空输入框内容"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "将值重置为初始值"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "文件上传",
    "icon": "fa fa-upload",
    "description": "可上传多个文件，可配置是否自动上传以及大文件分片上传",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "wrapWithPanel": false,
      "mode": "horizontal",
      "body": [
        {
          "type": "input-file",
          "label": "文件上传",
          "autoUpload": true,
          "proxy": true,
          "uploadType": "fileReceptor",
          "name": "file"
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/input-file",
    "scaffold": {
      "type": "input-file",
      "label": "文件上传",
      "autoUpload": true,
      "proxy": true,
      "uploadType": "fileReceptor",
      "name": "file"
    },
    "isBaseComponent": true,
    "pluginIcon": "input-file-plugin",
    "rendererName": "input-file",
    "id": "e1ae8b1e697c",
    "plugin": {
      "rendererName": "input-file",
      "$schema": "/schemas/FileControlSchema.json",
      "name": "文件上传",
      "isBaseComponent": true,
      "icon": "fa fa-upload",
      "pluginIcon": "input-file-plugin",
      "description": "可上传多个文件，可配置是否自动上传以及大文件分片上传",
      "docLink": "/amis/zh-CN/components/form/input-file",
      "notRenderFormZone": true,
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "上传文件值变化时触发（上传失败同样会触发）",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "file": {
                      "type": "object",
                      "title": "上传的文件"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "remove",
          "eventLabel": "移除文件",
          "description": "移除文件时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "item": {
                      "type": "object",
                      "title": "被移除的文件"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "success",
          "eventLabel": "上传成功",
          "description": "上传文件成功时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "item": {
                      "type": "object",
                      "title": "上传的文件"
                    },
                    "result": {
                      "type": "object",
                      "title": "远程上传请求成功后返回的响应数据"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "fail",
          "eventLabel": "上传失败",
          "description": "上传文件失败时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "item": {
                      "type": "object",
                      "title": "上传的文件"
                    },
                    "error": {
                      "type": "object",
                      "title": "远程上传请求失败后返回的错误信息"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空数据",
          "description": "清除选择的文件"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "图片上传",
    "icon": "fa fa-crop",
    "description": "可以对图片实现裁剪，限制图片的宽高以及大小，支持自动上传及上传多张图片",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "input-image",
          "label": "图片上传",
          "name": "image",
          "autoUpload": true,
          "proxy": true,
          "uploadType": "fileReceptor",
          "imageClassName": "r w-full"
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/input-image",
    "scaffold": {
      "type": "input-image",
      "label": "图片上传",
      "name": "image",
      "autoUpload": true,
      "proxy": true,
      "uploadType": "fileReceptor",
      "imageClassName": "r w-full"
    },
    "isBaseComponent": true,
    "pluginIcon": "input-image-plugin",
    "rendererName": "input-image",
    "id": "10833874e233",
    "plugin": {
      "rendererName": "input-image",
      "$schema": "/schemas/ImageControlSchema.json",
      "name": "图片上传",
      "isBaseComponent": true,
      "description": "可以对图片实现裁剪，限制图片的宽高以及大小，支持自动上传及上传多张图片",
      "docLink": "/amis/zh-CN/components/form/input-image",
      "icon": "fa fa-crop",
      "pluginIcon": "input-image-plugin",
      "notRenderFormZone": true,
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "上传文件值变化时触发（上传失败同样会触发）",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "file": {
                      "type": "object",
                      "title": "上传的文件"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "remove",
          "eventLabel": "移除文件",
          "description": "移除文件时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "item": {
                      "type": "object",
                      "title": "被移除的文件"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "success",
          "eventLabel": "上传成功",
          "description": "上传文件成功时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "item": {
                      "type": "object",
                      "title": "上传的文件"
                    },
                    "result": {
                      "type": "object",
                      "title": "远程上传请求成功后返回的响应数据"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "fail",
          "eventLabel": "上传失败",
          "description": "上传文件失败时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "item": {
                      "type": "object",
                      "title": "上传的文件"
                    },
                    "error": {
                      "type": "object",
                      "title": "远程上传请求失败后返回的错误信息"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空数据",
          "description": "清除选择的文件"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "上传 Excel",
    "icon": "fa fa-eyedropper",
    "description": "自动解析 Excel",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "input-excel",
          "label": "Excel",
          "name": "excel"
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/input-excel",
    "scaffold": {
      "type": "input-excel",
      "label": "Excel",
      "name": "excel"
    },
    "isBaseComponent": true,
    "pluginIcon": "input-excel-plugin",
    "rendererName": "input-excel",
    "id": "f5c6be20740b",
    "plugin": {
      "rendererName": "input-excel",
      "$schema": "/schemas/ExcelControlSchema.json",
      "name": "上传 Excel",
      "isBaseComponent": true,
      "icon": "fa fa-eyedropper",
      "pluginIcon": "input-excel-plugin",
      "description": "自动解析 Excel",
      "docLink": "/amis/zh-CN/components/form/input-excel",
      "panelTitle": "上传 Excel",
      "panelJustify": true,
      "notRenderFormZone": true,
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "excel 上传解析完成后触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "string",
                      "title": "excel解析后的数据"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清除选中值"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "将值重置为初始值"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "order": 0
    },
    "order": 0
  },
  {
    "searchKeywords": "tree、树下拉、树下拉框、tree-select、树形选择框、树形选择器",
    "name": "树组件",
    "icon": "fa fa-list-alt",
    "description": "树型结构选择，支持 [内嵌模式] 与 [浮层模式] 的外观切换",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "input-tree",
          "label": "树组件 - 内嵌模式",
          "name": "tree",
          "options": [
            {
              "label": "选项A",
              "value": "A",
              "children": [
                {
                  "label": "选项C",
                  "value": "C"
                },
                {
                  "label": "选项D",
                  "value": "D"
                }
              ]
            },
            {
              "label": "选项B",
              "value": "B"
            }
          ],
          "mode": "normal"
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/input-tree",
    "scaffold": {
      "type": "input-tree",
      "label": "树组件",
      "name": "tree"
    },
    "isBaseComponent": true,
    "pluginIcon": "input-tree-plugin",
    "rendererName": "input-tree",
    "id": "ffba5b2447b1",
    "plugin": {
      "rendererName": "input-tree",
      "$schema": "/schemas/TreeControlSchema.json",
      "name": "树组件",
      "isBaseComponent": true,
      "icon": "fa fa-list-alt",
      "pluginIcon": "input-tree-plugin",
      "description": "树型结构选择，支持 [内嵌模式] 与 [浮层模式] 的外观切换",
      "searchKeywords": "tree、树下拉、树下拉框、tree-select、树形选择框、树形选择器",
      "docLink": "/amis/zh-CN/components/form/input-tree",
      "notRenderFormZone": true,
      "panelTitle": "树选择",
      "actions": [
        {
          "actionType": "expand",
          "actionLabel": "展开",
          "description": "展开指定层级",
          "innerArgs": [
            "openLevel"
          ],
          "schema": {
            "type": "combo",
            "name": "args",
            "multiple": false,
            "strictMode": false,
            "items": [
              {
                "type": "ae-formulaControl",
                "variableMode": "tree",
                "name": "openLevel",
                "label": "展开层级",
                "variables": "${variables}",
                "size": "lg",
                "mode": "horizontal"
              }
            ]
          }
        },
        {
          "actionType": "collapse",
          "actionLabel": "收起",
          "description": "收起树节点"
        },
        {
          "actionType": "add",
          "actionLabel": "新增",
          "description": "新增数据项",
          "innerArgs": [
            "item",
            "parentValue"
          ],
          "schema": {
            "type": "combo",
            "name": "args",
            "multiple": false,
            "strictMode": false,
            "items": [
              {
                "type": "container",
                "body": [
                  {
                    "type": "input-kv",
                    "label": "数据项",
                    "name": "item",
                    "mode": "horizontal",
                    "inputClassName": "ml-2",
                    "size": "lg",
                    "required": true,
                    "draggable": false,
                    "valueType": "ae-formulaControl",
                    "keyPlaceholder": "Option中Properties的Key",
                    "value": {
                      "label": "",
                      "value": ""
                    }
                  },
                  {
                    "type": "ae-formulaControl",
                    "variableMode": "tree",
                    "label": "父级数据项的值",
                    "name": "parentValue",
                    "mode": "horizontal",
                    "inputClassName": "ml-2",
                    "size": "lg",
                    "variables": "${variables}",
                    "inputMode": "input-group",
                    "placeholder": "请输入父级数据项 valueField 的值"
                  }
                ]
              }
            ]
          }
        },
        {
          "actionType": "edit",
          "actionLabel": "编辑",
          "description": "编辑数据项",
          "innerArgs": [
            "item",
            "originValue"
          ],
          "schema": {
            "type": "combo",
            "name": "args",
            "multiple": false,
            "strictMode": false,
            "items": [
              {
                "type": "container",
                "body": [
                  {
                    "type": "input-kv",
                    "label": "数据项",
                    "name": "item",
                    "mode": "horizontal",
                    "inputClassName": "ml-2",
                    "size": "lg",
                    "required": true,
                    "draggable": false,
                    "valueType": "ae-formulaControl",
                    "keyPlaceholder": "Option中Properties的Key",
                    "value": {
                      "label": "",
                      "value": ""
                    }
                  },
                  {
                    "type": "ae-formulaControl",
                    "variableMode": "tree",
                    "label": "数据编辑项的值",
                    "name": "originValue",
                    "mode": "horizontal",
                    "inputClassName": "ml-2",
                    "required": true,
                    "size": "lg",
                    "variables": "${variables}",
                    "inputMode": "input-group",
                    "placeholder": "请输入数据项编辑前 valueField 的值"
                  }
                ]
              }
            ]
          }
        },
        {
          "actionType": "delete",
          "actionLabel": "删除",
          "description": "删除数据项",
          "innerArgs": [
            "value"
          ],
          "schema": {
            "type": "combo",
            "name": "args",
            "multiple": false,
            "strictMode": false,
            "items": [
              {
                "type": "ae-formulaControl",
                "variableMode": "tree",
                "label": "数据删除项的值",
                "name": "value",
                "mode": "horizontal",
                "inputClassName": "ml-2",
                "required": true,
                "size": "lg",
                "variables": "${variables}",
                "inputMode": "input-group",
                "placeholder": "请输入删除项 valueField 的值"
              }
            ]
          }
        },
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清除数据"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "重置数据"
        },
        {
          "actionType": "reload",
          "actionLabel": "重新加载",
          "description": "触发组件数据刷新并重新渲染"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "panelDefinitions": {
        "options": {
          "label": "选项 Options",
          "name": "options",
          "type": "combo",
          "multiple": true,
          "multiLine": true,
          "draggable": true,
          "addButtonText": "新增选项",
          "scaffold": {
            "label": "",
            "value": ""
          },
          "items": [
            {
              "type": "group",
              "body": [
                null,
                {
                  "type": "input-text",
                  "name": "value",
                  "placeholder": "值",
                  "unique": true
                }
              ]
            },
            {
              "$ref": "options",
              "label": "子选项",
              "name": "children",
              "addButtonText": "新增子选项"
            }
          ]
        }
      },
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "searchKeywords": "标签选择器",
    "name": "标签选择",
    "icon": "fa fa-tag",
    "description": "配置 options 可以实现选择选项",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": {
        "type": "input-tag",
        "label": "标签",
        "name": "tag",
        "options": [
          {
            "label": "红色",
            "value": "red"
          },
          {
            "label": "绿色",
            "value": "green"
          },
          {
            "label": "蓝色",
            "value": "blue"
          }
        ],
        "value": "red"
      }
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/input-tag",
    "scaffold": {
      "type": "input-tag",
      "label": "标签",
      "name": "tag"
    },
    "isBaseComponent": true,
    "pluginIcon": "input-tag-plugin",
    "rendererName": "input-tag",
    "id": "9fc313c6540a",
    "plugin": {
      "rendererName": "input-tag",
      "$schema": "/schemas/TagControlSchema.json",
      "name": "标签选择",
      "isBaseComponent": true,
      "icon": "fa fa-tag",
      "pluginIcon": "input-tag-plugin",
      "description": "配置 options 可以实现选择选项",
      "searchKeywords": "标签选择器",
      "docLink": "/amis/zh-CN/components/form/input-tag",
      "notRenderFormZone": true,
      "panelTitle": "标签",
      "panelJustify": true,
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "选中值变化"
        },
        {
          "eventName": "focus",
          "eventLabel": "获取焦点",
          "description": "获取焦点"
        },
        {
          "eventName": "blur",
          "eventLabel": "失去焦点",
          "description": "失去焦点"
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清除选中值"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "重置为默认值"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "order": 0
    },
    "order": 0
  },
  {
    "name": "列表选择",
    "icon": "fa fa-ellipsis-h",
    "description": "单选或者多选，支持 source 拉取选项，选项可配置图片，也可以自定义 HTML 配置",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "list-select",
          "label": "列表",
          "name": "list",
          "options": [
            {
              "label": "选项A",
              "value": "A"
            },
            {
              "label": "选项B",
              "value": "B"
            }
          ],
          "value": "A"
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/list-select",
    "scaffold": {
      "type": "list-select",
      "label": "列表",
      "name": "list"
    },
    "isBaseComponent": true,
    "pluginIcon": "list-select-plugin",
    "rendererName": "list-select",
    "id": "add6a4e3f3da",
    "plugin": {
      "rendererName": "list-select",
      "$schema": "/schemas/ListControlSchema.json",
      "name": "列表选择",
      "isBaseComponent": true,
      "icon": "fa fa-ellipsis-h",
      "pluginIcon": "list-select-plugin",
      "description": "单选或者多选，支持 source 拉取选项，选项可配置图片，也可以自定义 HTML 配置",
      "docLink": "/amis/zh-CN/components/form/list-select",
      "notRenderFormZone": true,
      "panelTitle": "列表选择",
      "panelJustify": true,
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "选中值变化时触发"
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清除选中值"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "将值重置为初始值"
        },
        {
          "actionType": "reload",
          "actionLabel": "重新加载",
          "description": "触发组件数据刷新并重新渲染"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "order": 0
    },
    "order": 0
  },
  {
    "name": "button-group",
    "icon": "fa fa-object-group",
    "description": "Used to display multiple buttons, which will be presented as a whole visually, and can also be used as a form item option selector.",
    "previewSchema": {
      "type": "form",
      "wrapWithPanel": false,
      "mode": "horizontal",
      "body": {
        "type": "button-group-select",
        "name": "buttonGroupSelect",
        "label": "Button click",
        "inline": false,
        "options": [
          {
            "label": "Option 1",
            "value": "a"
          },
          {
            "label": "Option 2",
            "value": "b"
          }
        ],
        "value": "a",
        "description": "Button click can be used as an option."
      }
    },
    "tags": [
      "Form item"
    ],
    "docLink": "/amis/zh-CN/components/button-group",
    "scaffold": {
      "type": "button-group-select",
      "name": "buttonGroupSelect",
      "label": "Button selection",
      "inline": false
    },
    "isBaseComponent": true,
    "pluginIcon": "btn-select-plugin",
    "rendererName": "button-group-select",
    "id": "beb84c93ba7f",
    "plugin": {
      "rendererName": "button-group-select",
      "$schema": "/schemas/ButtonGroupControlSchema.json",
      "name": "button-group",
      "isBaseComponent": true,
      "icon": "fa fa-object-group",
      "pluginIcon": "btn-select-plugin",
      "description": "Used to display multiple buttons, which will be presented as a whole visually, and can also be used as a form item option selector.",
      "docLink": "/amis/zh-CN/components/button-group",
      "notRenderFormZone": true,
      "panelTitle": "Button click",
      "events": [
        {
          "eventName": "change",
          "eventLabel": "Value change",
          "description": "Triggered when the selected value changes"
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "Clear",
          "description": "Clear selected value"
        },
        {
          "actionType": "reset",
          "actionLabel": "Reset",
          "description": "Reset the value to the initial value"
        },
        {
          "actionType": "reload",
          "actionLabel": "Reload",
          "description": "Trigger component data refresh and re-rendering"
        },
        {
          "actionType": "setValue",
          "actionLabel": "Assignment",
          "description": "Trigger component data update"
        }
      ],
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "button-toolbar",
    "icon": "fa fa-ellipsis-h",
    "description": "Can be used to place multiple buttons or button groups, there will be a certain interval between buttons",
    "previewSchema": {
      "type": "form",
      "wrapWithPanel": false,
      "mode": "horizontal",
      "body": {
        "type": "button-toolbar",
        "label": "按钮工具栏",
        "buttons": [
          {
            "type": "button",
            "label": "按钮1"
          },
          {
            "type": "button",
            "label": "按钮2"
          }
        ]
      }
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/button-toolbar",
    "scaffold": {
      "type": "button-toolbar",
      "label": "按钮工具栏"
    },
    "isBaseComponent": true,
    "pluginIcon": "btn-toolbar-plugin",
    "rendererName": "button-toolbar",
    "id": "168e0f94ef88",
    "plugin": {
      "rendererName": "button-toolbar",
      "$schema": "/schemas/ButtonToolbarControlSchema.json",
      "name": "button-toolbar",
      "isBaseComponent": true,
      "icon": "fa fa-ellipsis-h",
      "pluginIcon": "btn-toolbar-plugin",
      "description": "Can be used to place multiple buttons or button groups, there will be a certain interval between buttons",
      "docLink": "/amis/zh-CN/components/form/button-toolbar",
      "regions": [
        {
          "key": "buttons",
          "label": "按钮集合",
          "preferTag": "按钮",
          "renderMethod": "renderButtons"
        }
      ],
      "notRenderFormZone": true,
      "panelTitle": "工具栏",
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "searchKeywords": "列表选择器",
    "name": "列表选取",
    "icon": "fa fa-window-restore",
    "description": "通过 pickerSchema 配置可供选取的数据源进行选择需要的数据，支持多选",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "picker",
          "label": "列表选取",
          "name": "picker",
          "options": [
            {
              "label": "选项A",
              "value": "A"
            },
            {
              "label": "选项B",
              "value": "B"
            }
          ],
          "overflowConfig": {
            "maxTagCount": -1
          },
          "modalClassName": "app-popover :AMISCSSWrapper"
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/picker",
    "scaffold": {
      "type": "picker",
      "label": "列表选取",
      "name": "picker",
      "modalClassName": "app-popover :AMISCSSWrapper"
    },
    "isBaseComponent": true,
    "pluginIcon": "picker-plugin",
    "rendererName": "picker",
    "id": "929b0628e4c3",
    "plugin": {
      "rendererName": "picker",
      "$schema": "/schemas/PickerControlSchema.json",
      "name": "列表选取",
      "isBaseComponent": true,
      "icon": "fa fa-window-restore",
      "pluginIcon": "picker-plugin",
      "description": "通过 pickerSchema 配置可供选取的数据源进行选择需要的数据，支持多选",
      "searchKeywords": "列表选择器",
      "docLink": "/amis/zh-CN/components/form/picker",
      "notRenderFormZone": true,
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "选中状态变化时触发"
        },
        {
          "eventName": "itemClick",
          "eventLabel": "点击选项",
          "description": "选项被点击时触发"
        }
      ],
      "panelJustify": true,
      "panelTitle": "列表选取",
      "order": 0
    },
    "order": 0
  },
  {
    "name": "开关",
    "icon": "fa fa-toggle-on",
    "description": "开关控件",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "switch",
          "label": "开关表单",
          "option": "说明",
          "name": "switch",
          "falseValue": false,
          "trueValue": true
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/switch",
    "scaffold": {
      "type": "switch",
      "label": "开关",
      "option": "说明",
      "name": "switch",
      "falseValue": false,
      "trueValue": true
    },
    "isBaseComponent": true,
    "pluginIcon": "switch-plugin",
    "rendererName": "switch",
    "id": "9a9599a9c062",
    "plugin": {
      "rendererName": "switch",
      "$schema": "/schemas/SwitchControlSchema.json",
      "name": "开关",
      "isBaseComponent": true,
      "icon": "fa fa-toggle-on",
      "pluginIcon": "switch-plugin",
      "description": "开关控件",
      "docLink": "/amis/zh-CN/components/form/switch",
      "notRenderFormZone": true,
      "panelTitle": "开关",
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "开关值变化时触发"
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清除选中值"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "将值重置为初始值"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "滑块",
    "icon": "fa fa-sliders",
    "description": "选择某个值或者某个范围",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "input-range",
          "label": "滑块",
          "name": "range"
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/input-range",
    "scaffold": {
      "type": "input-range",
      "label": "滑块",
      "name": "range"
    },
    "isBaseComponent": true,
    "pluginIcon": "input-range-plugin",
    "rendererName": "input-range",
    "id": "b0e8753646f8",
    "plugin": {
      "rendererName": "input-range",
      "$schema": "/schemas/RangeControlSchema.json",
      "name": "滑块",
      "isBaseComponent": true,
      "icon": "fa fa-sliders",
      "pluginIcon": "input-range-plugin",
      "description": "选择某个值或者某个范围",
      "docLink": "/amis/zh-CN/components/form/input-range",
      "notRenderFormZone": true,
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "滑块值变化时触发"
        },
        {
          "eventName": "focus",
          "eventLabel": "获取焦点",
          "description": "当设置 showInput 为 true 时，输入框获取焦点时触发"
        },
        {
          "eventName": "blur",
          "eventLabel": "失去焦点",
          "description": "当设置 showInput 为 true 时，输入框失去焦点时触发"
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清除输入框"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "将值重置为初始值"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "panelTitle": "滑块",
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "评分",
    "icon": "fa fa-star-o",
    "description": "支持只读、半星选择",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "input-rating",
          "label": "评分",
          "name": "rating",
          "value": 3
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/input-rating",
    "scaffold": {
      "type": "input-rating",
      "label": "评分",
      "name": "rating"
    },
    "isBaseComponent": true,
    "pluginIcon": "input-rating-plugin",
    "rendererName": "input-rating",
    "id": "42594bf505a5",
    "plugin": {
      "rendererName": "input-rating",
      "$schema": "/schemas/RatingControlSchema.json",
      "name": "评分",
      "isBaseComponent": true,
      "icon": "fa fa-star-o",
      "pluginIcon": "input-rating-plugin",
      "description": "支持只读、半星选择",
      "docLink": "/amis/zh-CN/components/form/input-rating",
      "notRenderFormZone": true,
      "panelTitle": "评分",
      "count": 5,
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "评分值变化时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "number",
                      "title": "当前分值"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清空评分值"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "将值重置为初始值"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "searchKeywords": "城市选择器",
    "name": "input-city",
    "icon": "fa fa-building-o",
    "description": "可配置是否选择区域或者城市",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "wrapWithPanel": false,
      "mode": "horizontal",
      "body": [
        {
          "type": "input-city",
          "label": "城市选择",
          "name": "city",
          "allowCity": true,
          "allowDistrict": true,
          "extractValue": true
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/input-city",
    "scaffold": {
      "type": "input-city",
      "label": "城市选择",
      "name": "city",
      "allowCity": true,
      "allowDistrict": true,
      "extractValue": true
    },
    "isBaseComponent": true,
    "pluginIcon": "input-city-plugin",
    "rendererName": "input-city",
    "id": "a39e776b1808",
    "plugin": {
      "rendererName": "input-city",
      "$schema": "/schemas/CityControlSchema.json",
      "name": "input-city",
      "isBaseComponent": true,
      "icon": "fa fa-building-o",
      "pluginIcon": "input-city-plugin",
      "description": "可配置是否选择区域或者城市",
      "searchKeywords": "城市选择器",
      "docLink": "/amis/zh-CN/components/form/input-city",
      "notRenderFormZone": true,
      "panelTitle": "城市选择",
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "选中值变化"
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清除选中值"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "重置为默认值"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "穿梭器",
    "icon": "fa fa-th-list",
    "description": "穿梭器组件",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "label": "分组",
          "type": "transfer",
          "name": "transfer",
          "options": [
            {
              "label": "诸葛亮",
              "value": "zhugeliang"
            },
            {
              "label": "曹操",
              "value": "caocao"
            }
          ],
          "selectMode": "list",
          "resultListModeFollowSelect": false
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/transfer",
    "scaffold": {
      "label": "分组",
      "type": "transfer",
      "name": "transfer",
      "selectMode": "list",
      "resultListModeFollowSelect": false
    },
    "isBaseComponent": true,
    "pluginIcon": "transfer-plugin",
    "rendererName": "transfer",
    "id": "2cedc28c7642",
    "plugin": {
      "rendererName": "transfer",
      "$schema": "/schemas/TransferControlSchema.json",
      "name": "穿梭器",
      "isBaseComponent": true,
      "icon": "fa fa-th-list",
      "pluginIcon": "transfer-plugin",
      "description": "穿梭器组件",
      "docLink": "/amis/zh-CN/components/form/transfer",
      "panelTitle": "穿梭器",
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "输入框失去焦点时触发"
        },
        {
          "eventName": "selectAll",
          "eventLabel": "全选",
          "description": "选中所有选项"
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清空选中内容"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "重置选择的内容"
        },
        {
          "actionType": "selectAll",
          "actionLabel": "全选",
          "description": "选中所有选项"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新，多值用“,”分隔"
        }
      ],
      "panelDefinitions": {
        "options": {
          "label": "选项 Options",
          "name": "options",
          "type": "combo",
          "multiple": true,
          "multiLine": true,
          "draggable": true,
          "addButtonText": "新增选项",
          "scaffold": {
            "label": "",
            "value": ""
          },
          "items": [
            {
              "type": "group",
              "body": [
                null,
                {
                  "type": "input-text",
                  "name": "value",
                  "placeholder": "值",
                  "unique": true
                }
              ]
            },
            {
              "$ref": "options",
              "label": "子选项",
              "name": "children",
              "addButtonText": "新增子选项"
            }
          ]
        }
      },
      "notRenderFormZone": true,
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "穿梭选择器",
    "icon": "fa fa-th-list",
    "description": "穿梭选择器组件",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "label": "分组",
          "type": "transfer-picker",
          "name": "transfer-picker",
          "options": [
            {
              "label": "诸葛亮",
              "value": "zhugeliang"
            },
            {
              "label": "曹操",
              "value": "caocao"
            }
          ],
          "selectMode": "list",
          "resultListModeFollowSelect": false
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/transfer-picker",
    "scaffold": {
      "label": "分组",
      "type": "transfer-picker",
      "name": "transfer-picker",
      "selectMode": "list",
      "resultListModeFollowSelect": false
    },
    "isBaseComponent": true,
    "pluginIcon": "transfer-plugin",
    "rendererName": "transfer-picker",
    "id": "1536f61bb1a7",
    "plugin": {
      "rendererName": "transfer-picker",
      "$schema": "/schemas/TransferPickerControlSchema.json",
      "name": "穿梭选择器",
      "isBaseComponent": true,
      "icon": "fa fa-th-list",
      "pluginIcon": "transfer-plugin",
      "description": "穿梭选择器组件",
      "docLink": "/amis/zh-CN/components/form/transfer-picker",
      "panelTitle": "穿梭器",
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "输入框失去焦点时触发"
        },
        {
          "eventName": "selectAll",
          "eventLabel": "全选",
          "description": "选中所有选项"
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清空选中内容"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "重置选择的内容"
        },
        {
          "actionType": "selectAll",
          "actionLabel": "全选",
          "description": "选中所有选项"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新，多值用“,”分隔"
        }
      ],
      "panelDefinitions": {
        "options": {
          "label": "选项 Options",
          "name": "options",
          "type": "combo",
          "multiple": true,
          "multiLine": true,
          "draggable": true,
          "addButtonText": "新增选项",
          "scaffold": {
            "label": "",
            "value": ""
          },
          "items": [
            {
              "type": "group",
              "body": [
                null,
                {
                  "type": "input-text",
                  "name": "value",
                  "placeholder": "值",
                  "unique": true
                }
              ]
            },
            {
              "$ref": "options",
              "label": "子选项",
              "name": "children",
              "addButtonText": "新增子选项"
            }
          ]
        }
      },
      "notRenderFormZone": true,
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "组合穿梭器",
    "icon": "fa fa-th-list",
    "description": "组合穿梭器组件",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "label": "组合穿梭器",
          "type": "tabs-transfer",
          "name": "tabsTransfer",
          "selectMode": "tree",
          "options": [
            {
              "label": "成员",
              "children": [
                {
                  "label": "法师",
                  "value": "fashi",
                  "children": [
                    {
                      "label": "诸葛亮",
                      "value": "zhugeliang"
                    }
                  ]
                },
                {
                  "label": "战士",
                  "value": "zhanshi",
                  "children": [
                    {
                      "label": "曹操",
                      "value": "caocao"
                    },
                    {
                      "label": "钟无艳",
                      "value": "zhongwuyan"
                    }
                  ]
                },
                {
                  "label": "打野",
                  "value": "daye",
                  "children": [
                    {
                      "label": "李白",
                      "value": "libai"
                    },
                    {
                      "label": "韩信",
                      "value": "hanxin"
                    },
                    {
                      "label": "云中君",
                      "value": "yunzhongjun"
                    }
                  ]
                }
              ]
            },
            {
              "label": "用户",
              "children": [
                {
                  "label": "法师",
                  "value": "fashi2",
                  "children": [
                    {
                      "label": "诸葛亮",
                      "value": "zhugeliang2"
                    }
                  ]
                },
                {
                  "label": "战士",
                  "value": "zhanshi2",
                  "children": [
                    {
                      "label": "曹操",
                      "value": "caocao2"
                    },
                    {
                      "label": "钟无艳",
                      "value": "zhongwuyan2"
                    }
                  ]
                },
                {
                  "label": "打野",
                  "value": "daye2",
                  "children": [
                    {
                      "label": "李白",
                      "value": "libai2"
                    },
                    {
                      "label": "韩信",
                      "value": "hanxin2"
                    },
                    {
                      "label": "云中君",
                      "value": "yunzhongjun2"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/transfer",
    "scaffold": {
      "label": "组合穿梭器",
      "type": "tabs-transfer",
      "name": "tabsTransfer",
      "selectMode": "tree"
    },
    "isBaseComponent": true,
    "pluginIcon": "tabs-transfer-plugin",
    "rendererName": "tabs-transfer",
    "id": "ea63d7e4217d",
    "plugin": {
      "rendererName": "tabs-transfer",
      "$schema": "/schemas/TransferControlSchema.json",
      "name": "组合穿梭器",
      "isBaseComponent": true,
      "icon": "fa fa-th-list",
      "pluginIcon": "tabs-transfer-plugin",
      "description": "组合穿梭器组件",
      "docLink": "/amis/zh-CN/components/form/transfer",
      "panelTitle": "组合穿梭器",
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "选中值变化时触发"
        },
        {
          "eventName": "tab-change",
          "eventLabel": "选项卡切换",
          "description": "选项卡切换时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "key": {
                      "type": "string",
                      "title": "激活的索引"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清空选中内容"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "重置选择的内容"
        },
        {
          "actionType": "changeTabKey",
          "actionLabel": "修改选中tab",
          "description": "修改当前选中tab，来选择其他选项"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "notRenderFormZone": true,
      "panelJustify": true,
      "panelDefinitions": {
        "options": {
          "label": "选项 Options",
          "name": "options",
          "type": "combo",
          "multiple": true,
          "multiLine": true,
          "draggable": true,
          "mode": "normal",
          "addButtonText": "新增选项",
          "scaffold": {
            "label": "",
            "value": ""
          },
          "items": [
            {
              "type": "group",
              "body": [
                {
                  "label": false,
                  "name": "label",
                  "type": "input-text",
                  "placeholder": "名称",
                  "required": true
                },
                {
                  "type": "input-text",
                  "name": "value",
                  "placeholder": "值",
                  "unique": true
                }
              ]
            },
            {
              "$ref": "options",
              "label": "子选项",
              "name": "children",
              "addButtonText": "新增子选项"
            }
          ]
        }
      },
      "order": 0
    },
    "order": 0
  },
  {
    "searchKeywords": "颜色选择器",
    "name": "颜色框",
    "icon": "fa fa-eyedropper",
    "description": "支持<code>hex、hexa、hls、rgb、rgba</code>格式，默认为<code>hex</code>格式",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "input-color",
          "label": "颜色",
          "name": "color"
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/input-color",
    "scaffold": {
      "type": "input-color",
      "label": "颜色",
      "name": "color"
    },
    "isBaseComponent": true,
    "pluginIcon": "input-color-plugin",
    "rendererName": "input-color",
    "id": "f3c62e064163",
    "plugin": {
      "rendererName": "input-color",
      "$schema": "/schemas/ColorControlSchema.json",
      "name": "颜色框",
      "isBaseComponent": true,
      "icon": "fa fa-eyedropper",
      "pluginIcon": "input-color-plugin",
      "description": "支持<code>hex、hexa、hls、rgb、rgba</code>格式，默认为<code>hex</code>格式",
      "searchKeywords": "颜色选择器",
      "docLink": "/amis/zh-CN/components/form/input-color",
      "panelTitle": "颜色框",
      "notRenderFormZone": true,
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "condition-builder",
    "icon": "fa fa-group",
    "pluginIcon": "condition-builder-plugin",
    "description": "用于设置复杂组合条件，支持添加条件，添加分组，设置组合方式，拖拽排序等功能。",
    "previewSchema": {
      "type": "form",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "condition-builder",
          "label": "条件组件",
          "name": "conditions",
          "description": "适合让用户自己拼查询条件，然后后端根据数据生成 query where",
          "fields": [
            {
              "label": "文本",
              "type": "text",
              "name": "text"
            },
            {
              "label": "数字",
              "type": "number",
              "name": "number"
            },
            {
              "label": "布尔",
              "type": "boolean",
              "name": "boolean"
            },
            {
              "label": "选项",
              "type": "select",
              "name": "select",
              "options": [
                {
                  "label": "A",
                  "value": "a"
                },
                {
                  "label": "B",
                  "value": "b"
                },
                {
                  "label": "C",
                  "value": "c"
                },
                {
                  "label": "D",
                  "value": "d"
                },
                {
                  "label": "E",
                  "value": "e"
                }
              ]
            },
            {
              "label": "日期",
              "type": "date",
              "name": "date"
            },
            {
              "label": "时间",
              "type": "time",
              "name": "time"
            },
            {
              "label": "日期时间",
              "type": "datetime",
              "name": "datetime"
            }
          ]
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/condition-builder",
    "scaffoldForm": {
      "title": "快速开始-条件组合",
      "body": [
        {
          "type": "combo",
          "name": "fields",
          "multiple": true,
          "draggable": true,
          "multiLine": true,
          "items": [
            {
              "type": "group",
              "body": [
                {
                  "type": "select",
                  "name": "type",
                  "placeholder": "条件level",
                  "options": [
                    {
                      "label": "文本",
                      "value": "text"
                    },
                    {
                      "label": "数字",
                      "value": "number"
                    },
                    {
                      "label": "布尔",
                      "value": "boolean"
                    },
                    {
                      "label": "日期",
                      "value": "date"
                    },
                    {
                      "label": "日期时间",
                      "value": "datetime"
                    },
                    {
                      "label": "时间",
                      "value": "time"
                    },
                    {
                      "label": "选项",
                      "value": "select"
                    }
                  ]
                },
                {
                  "type": "input-text",
                  "name": "name",
                  "placeholder": "字段名"
                },
                {
                  "type": "input-text",
                  "placeholder": "字段名称",
                  "name": "label"
                }
              ]
            },
            {
              "type": "group",
              "visibleOn": "this.type === \"number\"",
              "body": [
                {
                  "type": "input-number",
                  "name": "minimum",
                  "placeholder": "最小值"
                },
                {
                  "type": "input-number",
                  "name": "maximum",
                  "placeholder": "最大值"
                },
                {
                  "type": "input-number",
                  "name": "step",
                  "min": 0,
                  "placeholder": "步长"
                }
              ]
            },
            {
              "type": "group",
              "visibleOn": "!!~[\"date\", \"datetime\", \"time\"].indexOf(this.type)",
              "body": [
                {
                  "type": "input-text",
                  "name": "format",
                  "placeholder": "值格式"
                },
                {
                  "type": "input-text",
                  "name": "inputFormat",
                  "placeholder": "日期显示格式"
                },
                {
                  "type": "input-text",
                  "name": "timeFormat",
                  "placeholder": "时间显示格式",
                  "visibleOn": "this.type === \"datetime\""
                }
              ]
            },
            {
              "type": "group",
              "visibleOn": "this.type === \"select\"",
              "body": [
                {
                  "type": "input-text",
                  "name": "source",
                  "placeholder": "字段选项远程拉取，支持接口或数据映射"
                }
              ]
            },
            {
              "type": "group",
              "body": [
                {
                  "type": "input-text",
                  "placeholder": "占位符",
                  "name": "placeholder"
                },
                {
                  "name": "operators",
                  "placeholder": "操作符",
                  "asFormItem": true
                }
              ]
            }
          ]
        }
      ],
      "canRebuild": true
    },
    "isBaseComponent": true,
    "rendererName": "condition-builder",
    "id": "5aa1ddda7827",
    "plugin": {
      "rendererName": "condition-builder",
      "$schema": "/schemas/ConditionBuilderControlSchema.json",
      "name": "condition-builder",
      "isBaseComponent": true,
      "icon": "fa fa-group",
      "pluginIcon": "condition-builder-plugin",
      "description": "用于设置复杂组合条件，支持添加条件，添加分组，设置组合方式，拖拽排序等功能。",
      "docLink": "/amis/zh-CN/components/form/condition-builder",
      "panelTitle": "条件组件",
      "order": 0
    },
    "order": 0
  },
  {
    "searchKeywords": "表单项集合",
    "name": "fieldset",
    "icon": "fa fa-toggle-down",
    "description": "多个表单项的组合，可配置是否折叠",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "fieldset",
          "title": "标题",
          "collapsable": true,
          "body": [
            {
              "type": "input-text",
              "label": "文本1",
              "name": "text"
            },
            {
              "type": "input-text",
              "label": "文本2",
              "name": "text"
            }
          ]
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/fieldset",
    "scaffold": {
      "type": "fieldset",
      "title": "标题",
      "collapsable": true
    },
    "isBaseComponent": true,
    "rendererName": "fieldset",
    "id": "cc031167d875",
    "plugin": {
      "rendererName": "fieldset",
      "$schema": "/schemas/FieldSetControlSchema.json",
      "name": "fieldset",
      "isBaseComponent": true,
      "icon": "fa fa-toggle-down",
      "description": "多个表单项的组合，可配置是否折叠",
      "searchKeywords": "表单项集合",
      "docLink": "/amis/zh-CN/components/form/fieldset",
      "regions": [
        {
          "key": "body",
          "label": "子表单项",
          "renderMethod": "renderBody",
          "insertPosition": "inner",
          "preferTag": "表单项"
        }
      ],
      "panelTitle": "字段集",
      "order": 0
    },
    "order": 0
  },
  {
    "name": "combo",
    "icon": "fa fa-group",
    "description": "多个表单项的组合，可配置是否增加和删除初始设定的模板",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "combo",
          "label": "组合输入",
          "name": "combo",
          "multiple": true,
          "addable": true,
          "removable": true,
          "removableMode": "icon",
          "addBtn": {
            "label": "新增",
            "icon": "fa fa-plus",
            "level": "primary",
            "size": "sm"
          },
          "items": [
            {
              "type": "input-text",
              "name": "text",
              "placeholder": "文本"
            },
            {
              "type": "select",
              "name": "select",
              "placeholder": "选项",
              "options": [
                {
                  "label": "A",
                  "value": "a"
                },
                {
                  "label": "B",
                  "value": "b"
                }
              ]
            }
          ],
          "value": [
            {
              "text": "Row 1",
              "select": "a"
            },
            {}
          ]
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/combo",
    "scaffold": {
      "type": "combo",
      "label": "组合输入",
      "name": "combo",
      "multiple": true,
      "addable": true,
      "removable": true,
      "removableMode": "icon"
    },
    "isBaseComponent": true,
    "pluginIcon": "combo-plugin",
    "rendererName": "combo",
    "id": "1ae3b2b1ca2d",
    "plugin": {
      "rendererName": "combo",
      "$schema": "/schemas/ComboControlSchema.json",
      "name": "combo",
      "isBaseComponent": true,
      "icon": "fa fa-group",
      "pluginIcon": "combo-plugin",
      "description": "多个表单项的组合，可配置是否增加和删除初始设定的模板",
      "docLink": "/amis/zh-CN/components/form/combo",
      "regions": [
        {
          "key": "items",
          "label": "内容区",
          "preferTag": "内容区",
          "renderMethod": "renderItems"
        }
      ],
      "events": [
        {
          "eventName": "add",
          "eventLabel": "添加",
          "description": "添加组合项时触发"
        },
        {
          "eventName": "delete",
          "eventLabel": "删除",
          "description": "删除组合项"
        },
        {
          "eventName": "dragEnd",
          "eventLabel": "拖拽结束",
          "description": "当组合项拖拽结束且位置发生变化时触发"
        },
        {
          "eventName": "tabsChange",
          "eventLabel": "切换tab",
          "description": "当设置 tabsMode 为 true 时，切换选项卡时触发"
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清除选中值"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "将值重置为初始值"
        },
        {
          "actionType": "addItem",
          "actionLabel": "添加项",
          "description": "添加新的项",
          "innerArgs": [
            "item"
          ],
          "schema": {
            "type": "combo",
            "name": "args",
            "multiple": false,
            "strictMode": false,
            "items": [
              {
                "type": "combo",
                "label": "添加项",
                "name": "item",
                "draggable": false,
                "multiple": true,
                "removable": true,
                "required": true,
                "addable": true,
                "strictMode": false,
                "canAccessSuperData": true,
                "mode": "horizontal",
                "items": [
                  {
                    "name": "key",
                    "type": "input-text",
                    "required": true,
                    "placeholder": "变量名",
                    "source": "${__setValueDs}"
                  },
                  {
                    "type": "ae-formulaControl",
                    "variableMode": "tree",
                    "name": "val",
                    "variables": "${variables}",
                    "inputMode": "input-group"
                  }
                ]
              }
            ]
          }
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "panelTitle": "组合输入",
      "notRenderFormZone": true,
      "panelJustify": true,
      "dsManager": {
        "builders": {}
      },
      "order": 0
    },
    "order": 0
  },
  {
    "searchKeywords": "输入框组合",
    "name": "输入组合",
    "icon": "fa fa-object-group",
    "description": "输入组合，支持多种level的控件组合",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "input-group",
          "name": "input-group",
          "label": "input 组合",
          "body": [
            {
              "type": "input-text",
              "inputClassName": "b-r-none p-r-none",
              "name": "input-group"
            },
            {
              "type": "submit",
              "label": "提交",
              "level": "primary"
            }
          ]
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/input-group",
    "scaffold": {
      "type": "input-group",
      "name": "input-group",
      "label": "input 组合"
    },
    "isBaseComponent": true,
    "pluginIcon": "input-group-plugin",
    "rendererName": "input-group",
    "id": "7c4d85a9e0ea",
    "plugin": {
      "rendererName": "input-group",
      "$schema": "/schemas/InputGroupControlSchema.json",
      "name": "输入组合",
      "isBaseComponent": true,
      "icon": "fa fa-object-group",
      "pluginIcon": "input-group-plugin",
      "description": "输入组合，支持多种level的控件组合",
      "searchKeywords": "输入框组合",
      "docLink": "/amis/zh-CN/components/form/input-group",
      "panelTitle": "Input 组合",
      "regions": [
        {
          "key": "body",
          "label": "内容区",
          "preferTag": "内容区",
          "renderMethod": "render"
        }
      ],
      "notRenderFormZone": true,
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "表格编辑框",
    "icon": "fa fa-table",
    "description": "可以用来展现数据的,可以用来展示数组level的数据，比如 multiple  的子 form",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "wrapWithPanel": false,
      "mode": "horizontal",
      "body": {
        "type": "input-table",
        "name": "table",
        "label": "表格表单",
        "columns": [
          {
            "label": "名称",
            "name": "name",
            "quickEdit": {
              "type": "input-text",
              "name": "name1"
            }
          },
          {
            "label": "分数",
            "name": "score",
            "quickEdit": {
              "type": "input-number",
              "mode": "inline",
              "name": "score"
            }
          },
          {
            "label": "等级",
            "name": "level",
            "quickEdit": {
              "type": "select",
              "name": "level",
              "options": [
                {
                  "label": "A",
                  "value": "A"
                },
                {
                  "label": "B",
                  "value": "B"
                },
                {
                  "label": "C",
                  "value": "C"
                }
              ]
            }
          }
        ],
        "addable": false,
        "footerAddBtn": {
          "label": "新增",
          "icon": "fa fa-plus"
        },
        "strictMode": true,
        "value": [
          {
            "color": "green",
            "name": "绿色"
          }
        ]
      }
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/input-table",
    "scaffold": {
      "type": "input-table",
      "name": "table",
      "label": "表格表单",
      "addable": false,
      "strictMode": true
    },
    "scaffoldForm": {
      "title": "快速构建表格编辑框",
      "body": [
        {
          "name": "columns",
          "type": "input-table",
          "label": false,
          "needConfirm": false,
          "addable": true,
          "removable": true,
          "columns": [
            {
              "type": "text",
              "name": "label",
              "label": "标题",
              "quickEdit": {
                "type": "input-text",
                "mode": "inline"
              }
            },
            {
              "type": "text",
              "name": "name",
              "label": "绑定字段名",
              "quickEdit": {
                "type": "input-text",
                "mode": "inline"
              }
            },
            {
              "type": "text",
              "name": "type",
              "label": "展示level",
              "width": 140,
              "quickEdit": {
                "type": "select",
                "options": [
                  {
                    "value": "text",
                    "label": "纯文本"
                  },
                  {
                    "value": "tpl",
                    "label": "模板"
                  },
                  {
                    "value": "container",
                    "label": "容器"
                  },
                  {
                    "value": "image",
                    "label": "图片"
                  },
                  {
                    "value": "date",
                    "label": "日期"
                  },
                  {
                    "value": "datetime",
                    "label": "日期时间"
                  },
                  {
                    "value": "time",
                    "label": "时间"
                  },
                  {
                    "value": "status",
                    "label": "状态"
                  },
                  {
                    "value": "mapping",
                    "label": "映射"
                  }
                ]
              }
            },
            {
              "type": "text",
              "name": "quickEdit.type",
              "label": "编辑level",
              "quickEdit": {
                "type": "select",
                "clearable": true,
                "placeholder": "为空则不支持编辑",
                "options": [
                  {
                    "value": "input-text",
                    "label": "文本框"
                  },
                  {
                    "value": "input-number",
                    "label": "数字框"
                  },
                  {
                    "value": "select",
                    "label": "选择框"
                  },
                  {
                    "value": "input-color",
                    "label": "颜色选择框"
                  },
                  {
                    "value": "checkboxes",
                    "label": "多选框"
                  },
                  {
                    "value": "radios",
                    "label": "单选框"
                  },
                  {
                    "value": "input-date",
                    "label": "日期"
                  },
                  {
                    "value": "input-date-range",
                    "label": "日期范围"
                  },
                  {
                    "value": "switch",
                    "label": "开关"
                  },
                  {
                    "value": "nested-select",
                    "label": "级联选择器"
                  },
                  {
                    "value": "input-city",
                    "label": "城市选择器"
                  },
                  {
                    "value": "input-tree",
                    "label": "树选择框"
                  }
                ]
              },
              "width": 210
            }
          ]
        }
      ],
      "canRebuild": true
    },
    "isBaseComponent": true,
    "pluginIcon": "table-plugin",
    "rendererName": "input-table",
    "id": "8a040e13f946",
    "plugin": {
      "rendererName": "input-table",
      "$schema": "/schemas/TableControlSchema.json",
      "name": "表格编辑框",
      "isBaseComponent": true,
      "icon": "fa fa-table",
      "pluginIcon": "table-plugin",
      "description": "可以用来展现数据的,可以用来展示数组level的数据，比如 multiple  的子 form",
      "docLink": "/amis/zh-CN/components/form/input-table",
      "regions": [
        {
          "key": "columns",
          "label": "列集合",
          "renderMethod": "renderTableContent",
          "preferTag": "展示",
          "dndMode": "position-h"
        }
      ],
      "notRenderFormZone": true,
      "panelJustify": true,
      "panelTitle": "表格编辑",
      "events": [
        {
          "eventName": "add",
          "eventLabel": "添加行",
          "description": "点击左下角添加按钮 或 某一行右侧操作栏添加按钮时触发"
        },
        {
          "eventName": "addConfirm",
          "eventLabel": "确认添加",
          "description": "开启”确认模式“，点击添加按钮，填入数据后点击“保存”按钮后触发"
        },
        {
          "eventName": "addSuccess",
          "eventLabel": "添加成功",
          "description": "开启”确认模式“并且配置”新增接口“，点击“保存”后成功添加时触发"
        },
        {
          "eventName": "addFail",
          "eventLabel": "添加失败",
          "description": "开启”确认模式“并且配置”新增接口“，点击“保存”后调用接口失败时触发"
        },
        {
          "eventName": "edit",
          "eventLabel": "编辑行",
          "description": "点击某一行右侧操作栏“编辑”按钮时触发"
        },
        {
          "eventName": "editConfirm",
          "eventLabel": "确认编辑",
          "description": "开启”确认模式“，点击“编辑”按钮，填入数据后点击“保存”按钮后触发"
        },
        {
          "eventName": "editSuccess",
          "eventLabel": "编辑成功",
          "description": "开启”确认模式“并且配置”编辑接口“，点击“保存”后成功编辑时触发"
        },
        {
          "eventName": "editFail",
          "eventLabel": "编辑失败",
          "description": "开启”确认模式“并且配置”编辑接口“，点击“保存”后调用接口失败时触发"
        },
        {
          "eventName": "delete",
          "eventLabel": "删除行",
          "description": "点击某一行右侧操作栏“删除”按钮时触发"
        },
        {
          "eventName": "deleteSuccess",
          "eventLabel": "删除成功",
          "description": "配置了“删除接口”，调用接口成功时触发"
        },
        {
          "eventName": "deleteFail",
          "eventLabel": "删除失败",
          "description": "配置了“删除接口”，调用接口失败时触发"
        },
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "表格数据发生改变时触发"
        },
        {
          "eventName": "orderChange",
          "eventLabel": "行排序",
          "description": "手动拖拽行排序事件"
        },
        {
          "eventName": "rowClick",
          "eventLabel": "行单击",
          "description": "点击整行事件"
        },
        {
          "eventName": "rowDbClick",
          "eventLabel": "行双击",
          "description": "双击整行事件"
        },
        {
          "eventName": "rowMouseEnter",
          "eventLabel": "鼠标移入行事件",
          "description": "移入整行时触发"
        },
        {
          "eventName": "rowMouseLeave",
          "eventLabel": "鼠标移出行事件",
          "description": "移出整行时触发"
        }
      ],
      "actions": [
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        },
        {
          "actionType": "addItem",
          "actionLabel": "添加行",
          "description": "添加行数据",
          "innerArgs": [
            "item",
            "index"
          ],
          "schema": {
            "type": "combo",
            "name": "args",
            "multiple": false,
            "strictMode": false,
            "items": [
              {
                "type": "container",
                "body": [
                  {
                    "type": "input-number",
                    "name": "index",
                    "mode": "horizontal",
                    "horizontal": {
                      "leftFixed": 4
                    },
                    "label": "插入位置",
                    "size": "lg",
                    "placeholder": "请输入行号，为空则在尾部插入"
                  },
                  {
                    "type": "combo",
                    "name": "value",
                    "label": "数据设置",
                    "multiple": true,
                    "removable": true,
                    "required": true,
                    "addable": true,
                    "strictMode": false,
                    "canAccessSuperData": true,
                    "mode": "horizontal",
                    "size": "lg",
                    "addButtonText": "新增一行",
                    "items": [
                      {
                        "type": "combo",
                        "name": "item",
                        "label": false,
                        "renderLabel": false,
                        "multiple": true,
                        "removable": true,
                        "required": true,
                        "addable": true,
                        "strictMode": false,
                        "canAccessSuperData": true,
                        "className": "m-l",
                        "size": "lg",
                        "mode": "horizontal",
                        "addButtonText": "新增字段",
                        "items": [
                          {
                            "name": "key",
                            "type": "input-text",
                            "source": "${__setValueDs}",
                            "labelField": "label",
                            "valueField": "value",
                            "required": true
                          },
                          {
                            "type": "ae-formulaControl",
                            "variableMode": "tree",
                            "name": "val",
                            "variables": "${variables}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          "actionType": "deleteItem",
          "actionLabel": "删除行",
          "description": "删除某一行数据",
          "innerArgs": [
            "condition",
            "index"
          ],
          "schema": {
            "type": "combo",
            "name": "args",
            "multiple": false,
            "strictMode": false,
            "items": [
              {
                "type": "container",
                "body": [
                  {
                    "type": "radios",
                    "name": "__deleteType",
                    "inputClassName": "event-action-radio",
                    "mode": "horizontal",
                    "label": "删除方式",
                    "horizontal": {
                      "leftFixed": 4
                    },
                    "options": [
                      {
                        "label": "指定行号",
                        "value": "rowIndex"
                      },
                      {
                        "label": "条件表达式",
                        "value": "conditionExpression"
                      }
                    ]
                  },
                  {
                    "type": "input-text",
                    "name": "index",
                    "mode": "horizontal",
                    "horizontal": {
                      "leftFixed": 4
                    },
                    "required": true,
                    "label": "删除范围",
                    "size": "lg",
                    "placeholder": "请输入行号，输入多个则用英文逗号分隔",
                    "hiddenOn": "this.__deleteType !== \"rowIndex\""
                  },
                  {
                    "type": "ae-formulaControl",
                    "variableMode": "tree",
                    "name": "condition",
                    "variables": "${variables}",
                    "label": "删除条件",
                    "hiddenOn": "this.__deleteType !== \"conditionExpression\"",
                    "mode": "horizontal",
                    "required": true,
                    "horizontal": {
                      "leftFixed": 4
                    },
                    "size": "lg"
                  }
                ]
              }
            ]
          }
        },
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清空组件数据"
        },
        {
          "actionType": "initDrag",
          "actionLabel": "开启排序",
          "description": "开启表格拖拽排序功能"
        },
        {
          "actionType": "cancelDrag",
          "actionLabel": "取消排序",
          "description": "取消表格拖拽排序功能"
        }
      ],
      "dsManager": {
        "builders": {}
      },
      "order": 0
    },
    "order": 0
  },
  {
    "name": "矩阵开关",
    "icon": "fa fa-th-large",
    "description": "可配置行单选，列单选，以及全部选项只能单选或者全部选项多选",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "matrix-checkboxes",
          "name": "matrix",
          "label": "矩阵开关",
          "rowLabel": "行标题说明",
          "columns": [
            {
              "label": "列1"
            },
            {
              "label": "列2"
            }
          ],
          "rows": [
            {
              "label": "行1"
            },
            {
              "label": "行2"
            }
          ]
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/matrix-checkboxes",
    "scaffold": {
      "type": "matrix-checkboxes",
      "name": "matrix",
      "label": "矩阵开关",
      "rowLabel": "行标题说明"
    },
    "isBaseComponent": true,
    "pluginIcon": "matrix-checkboxes-plugin",
    "rendererName": "matrix-checkboxes",
    "id": "59d3a7561df6",
    "plugin": {
      "rendererName": "matrix-checkboxes",
      "$schema": "/schemas/MatrixControlSchema.json",
      "name": "矩阵开关",
      "isBaseComponent": true,
      "icon": "fa fa-th-large",
      "pluginIcon": "matrix-checkboxes-plugin",
      "description": "可配置行单选，列单选，以及全部选项只能单选或者全部选项多选",
      "docLink": "/amis/zh-CN/components/form/matrix-checkboxes",
      "notRenderFormZone": true,
      "panelTitle": "矩阵开关",
      "panelJustify": true,
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "选中值变化",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "array",
                      "title": "选中的值"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清除选中值"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "重置为默认值"
        },
        {
          "actionType": "reload",
          "actionLabel": "重新加载",
          "description": "触发组件数据刷新并重新渲染"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "order": 0
    },
    "order": 0
  },
  {
    "name": "富文本编辑器",
    "icon": "fa fa-newspaper-o",
    "description": "可自定义富文本的配置栏",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "input-rich-text",
          "label": "富文本",
          "name": "rich-text",
          "vendor": "tinymce"
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/input-rich-text",
    "scaffold": {
      "type": "input-rich-text",
      "label": "富文本",
      "name": "rich-text",
      "vendor": "tinymce"
    },
    "isBaseComponent": true,
    "pluginIcon": "input-rich-text-plugin",
    "rendererName": "input-rich-text",
    "id": "0f3a2092f72b",
    "plugin": {
      "rendererName": "input-rich-text",
      "$schema": "/schemas/RichTextControlSchema.json",
      "name": "富文本编辑器",
      "isBaseComponent": true,
      "icon": "fa fa-newspaper-o",
      "pluginIcon": "input-rich-text-plugin",
      "description": "可自定义富文本的配置栏",
      "docLink": "/amis/zh-CN/components/form/input-rich-text",
      "panelTitle": "富文本",
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "输入内容变化",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "string",
                      "title": "富文本的值"
                    }
                  },
                  "description": "当前数据域，可以通过.字段名读取对应的值"
                }
              }
            }
          ]
        }
      ],
      "notRenderFormZone": true,
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "searchKeywords": "对比编辑器",
    "name": "diff-editor",
    "icon": "fa fa-columns",
    "description": "左右两边的代码做对比，支持的语言包括：bat，c，coffeescript，cpp，csharp，css，dockerfile，fsharp，go，handlebars等等",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "diff-editor",
          "label": "diff编辑器",
          "name": "diff",
          "value": "Hello World\nLine 1\nNew line\nBla Bla",
          "diffValue": "Hello World\nLine 2"
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/diff-editor",
    "scaffold": {
      "type": "diff-editor",
      "label": "diff编辑器",
      "name": "diff"
    },
    "isBaseComponent": true,
    "pluginIcon": "diff-editor-plugin",
    "rendererName": "diff-editor",
    "id": "68d7b43c4516",
    "plugin": {
      "rendererName": "diff-editor",
      "$schema": "/schemas/DiffEditorControlSchema.json",
      "name": "diff-editor",
      "isBaseComponent": true,
      "icon": "fa fa-columns",
      "pluginIcon": "diff-editor-plugin",
      "description": "左右两边的代码做对比，支持的语言包括：bat，c，coffeescript，cpp，csharp，css，dockerfile，fsharp，go，handlebars等等",
      "searchKeywords": "对比编辑器",
      "docLink": "/amis/zh-CN/components/form/diff-editor",
      "events": [
        {
          "eventName": "change",
          "eventLabel": "代码变化",
          "description": "代码变化时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "string",
                      "title": "当前代码内容"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "focus",
          "eventLabel": "获取焦点",
          "description": "右侧输入框获取焦点时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "string",
                      "title": "当前代码内容"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "blur",
          "eventLabel": "失去焦点",
          "description": "右侧输入框失去焦点时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "string",
                      "title": "当前代码内容"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清除选中值"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "将值重置为初始值"
        },
        {
          "actionType": "focus",
          "actionLabel": "获取焦点",
          "description": "获取焦点，焦点落在右侧编辑面板"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "notRenderFormZone": true,
      "panelTitle": "Diff编辑器",
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "editor",
    "icon": "fa fa-code",
    "description": "代码编辑器，采用 monaco-editor 支持：bat，c，coffeescript，cpp，csharp，css，dockerfile，fsharp，go，handlebars等等",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "editor",
          "label": "代码编辑器",
          "name": "editor",
          "value": "console.log(\"Hello world.\");"
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/editor",
    "scaffold": {
      "type": "editor",
      "label": "代码编辑器",
      "name": "editor"
    },
    "isBaseComponent": true,
    "pluginIcon": "editor-plugin",
    "rendererName": "editor",
    "id": "ae79040ea3a6",
    "plugin": {
      "rendererName": "editor",
      "$schema": "/schemas/EditorControlSchema.json",
      "name": "editor",
      "isBaseComponent": true,
      "icon": "fa fa-code",
      "pluginIcon": "editor-plugin",
      "description": "代码编辑器，采用 monaco-editor 支持：bat，c，coffeescript，cpp，csharp，css，dockerfile，fsharp，go，handlebars等等",
      "docLink": "/amis/zh-CN/components/form/editor",
      "events": [
        {
          "eventName": "change",
          "eventLabel": "代码变化",
          "description": "代码变化时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "string",
                      "title": "当前代码内容"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "focus",
          "eventLabel": "获取焦点",
          "description": "输入框获取焦点时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "string",
                      "title": "当前代码内容"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "blur",
          "eventLabel": "失去焦点",
          "description": "输入框失去焦点时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "string",
                      "title": "当前代码内容"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清除选中值"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "将值重置为初始值"
        },
        {
          "actionType": "focus",
          "actionLabel": "获取焦点",
          "description": "输入框获取焦点"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "notRenderFormZone": true,
      "panelTitle": "Editor",
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "searchKeywords": "搜索框、searchbox",
    "name": "search-box",
    "icon": "fa fa-search",
    "description": "用于展示一个简单搜索框，通常需要搭配其他组件使用。比如 page 配置 initApi 后，可以用来实现简单数据过滤查找，name keywords 会作为参数传递给 page 的 initApi。",
    "previewSchema": {
      "type": "search-box",
      "name": "keyword",
      "body": {
        "type": "tpl",
        "tpl": "搜索框",
        "wrapperComponent": "",
        "inline": false
      },
      "level": "info",
      "className": "text-left",
      "showCloseButton": true
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/search-box",
    "scaffold": {
      "type": "search-box",
      "name": "keyword",
      "level": "info"
    },
    "isBaseComponent": true,
    "pluginIcon": "search-box-plugin",
    "rendererName": "search-box",
    "id": "4e12286826db",
    "plugin": {
      "rendererName": "search-box",
      "$schema": "/schemas/SearchBoxSchema.json",
      "name": "search-box",
      "searchKeywords": "搜索框、searchbox",
      "isBaseComponent": true,
      "description": "用于展示一个简单搜索框，通常需要搭配其他组件使用。比如 page 配置 initApi 后，可以用来实现简单数据过滤查找，name keywords 会作为参数传递给 page 的 initApi。",
      "docLink": "/amis/zh-CN/components/search-box",
      "icon": "fa fa-search",
      "pluginIcon": "search-box-plugin",
      "regions": [
        {
          "key": "body",
          "label": "内容区",
          "placeholder": "搜索框内容"
        }
      ],
      "events": [
        {
          "eventName": "search",
          "eventLabel": "点击搜索",
          "description": "点击搜索图标时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "string",
                      "title": "搜索值"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "输入框值变化时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "string",
                      "title": "搜索值"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "focus",
          "eventLabel": "获取焦点",
          "description": "输入框获取焦点时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "string",
                      "title": "搜索值"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "blur",
          "eventLabel": "失去焦点",
          "description": "输入框失去焦点时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "string",
                      "title": "搜索值"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清空输入框"
        },
        {
          "actionType": "setValue",
          "actionLabel": "更新数据",
          "description": "更新数据"
        }
      ],
      "notRenderFormZone": true,
      "panelTitle": "搜索框",
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "KV 键值对",
    "icon": "fa fa-eyedropper",
    "description": "用于编辑键值对level的数据",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "input-kv",
          "label": "KV",
          "name": "kv"
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/input-kv",
    "scaffold": {
      "type": "input-kv",
      "label": "KV",
      "name": "kv"
    },
    "isBaseComponent": true,
    "pluginIcon": "input-kv-plugin",
    "rendererName": "input-kv",
    "id": "8fe7399d973f",
    "plugin": {
      "rendererName": "input-kv",
      "$schema": "/schemas/KVControlSchema.json",
      "name": "KV 键值对",
      "isBaseComponent": true,
      "icon": "fa fa-eyedropper",
      "pluginIcon": "input-kv-plugin",
      "description": "用于编辑键值对level的数据",
      "docLink": "/amis/zh-CN/components/form/input-kv",
      "events": [
        {
          "eventName": "add",
          "eventLabel": "添加",
          "description": "添加组合项时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "string",
                      "title": "组合项的值"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "delete",
          "eventLabel": "删除",
          "description": "删除组合项",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "key": {
                      "type": "string",
                      "title": "被删除的索引"
                    },
                    "value": {
                      "type": "string",
                      "title": "组合项的值"
                    },
                    "item": {
                      "type": "object",
                      "title": "被删除的项"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清除选中值"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "将值重置为初始值"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "panelTitle": "KV 键值对",
      "panelBody": [
        {
          "type": "select",
          "label": {
            "type": "tooltip-wrapper",
            "tooltip": "Can be set to upper left corner, upper right corner, lower right corner, lower left corner, default is lower right corner",
            "tooltipTheme": "dark",
            "placement": "top",
            "tooltipStyle": {
              "fontSize": "12px"
            },
            "className": "ae-formItemControl-label-tip",
            "body": "Reference position"
          },
          "name": "originPosition",
          "value": "left-top",
          "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
          "options": [
            {
              "label": "top left",
              "value": "left-top"
            },
            {
              "label": "top right",
              "value": "right-top"
            },
            {
              "label": "bottom right (default)",
              "value": "right-bottom"
            },
            {
              "label": "bottom left",
              "value": "left-bottom"
            }
          ]
        },
        {
          "type": "input-text",
          "name": "valueType",
          "label": "值level"
        },
        {
          "type": "input-text",
          "name": "keyPlaceholder",
          "label": "key 的提示信息"
        },
        {
          "type": "input-text",
          "name": "valuePlaceholder",
          "label": "value 的提示信息"
        },
        {
          "type": "switch",
          "name": "draggable",
          "label": "是否可排序"
        }
      ],
      "order": 0
    },
    "order": 0
  },
  {
    "searchKeywords": "重复频率选择器",
    "name": "重复周期选择",
    "icon": "fa fa-repeat",
    "description": "选择重复的频率，如每时、每天、每周等",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "input-repeat",
          "label": "周期",
          "name": "repeat"
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/input-repeat",
    "scaffold": {
      "type": "input-repeat",
      "label": "周期",
      "name": "repeat"
    },
    "isBaseComponent": true,
    "pluginIcon": "input-repeat-plugin",
    "rendererName": "input-repeat",
    "id": "804dd3913151",
    "plugin": {
      "rendererName": "input-repeat",
      "$schema": "/schemas/RepeatControlSchema.json",
      "name": "重复周期选择",
      "isBaseComponent": true,
      "icon": "fa fa-repeat",
      "pluginIcon": "input-repeat-plugin",
      "description": "选择重复的频率，如每时、每天、每周等",
      "searchKeywords": "重复频率选择器",
      "docLink": "/amis/zh-CN/components/form/input-repeat",
      "panelTitle": "周期",
      "panelBody": [
        {
          "type": "select",
          "label": {
            "type": "tooltip-wrapper",
            "tooltip": "Can be set to upper left corner, upper right corner, lower right corner, lower left corner, default is lower right corner",
            "tooltipTheme": "dark",
            "placement": "top",
            "tooltipStyle": {
              "fontSize": "12px"
            },
            "className": "ae-formItemControl-label-tip",
            "body": "Reference position"
          },
          "name": "originPosition",
          "value": "left-top",
          "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
          "options": [
            {
              "label": "top left",
              "value": "left-top"
            },
            {
              "label": "top right",
              "value": "right-top"
            },
            {
              "label": "bottom right (default)",
              "value": "right-bottom"
            },
            {
              "label": "bottom left",
              "value": "left-bottom"
            }
          ]
        },
        {
          "type": "switch",
          "label": "switch",
          "name": "value",
          "labelRemark": {
            "trigger": [
              "hover",
              "focus"
            ],
            "setting": true,
            "title": "",
            "content": "If not set, get it based on name"
          }
        },
        {
          "type": "input-text",
          "name": "value",
          "label": "默认值",
          "visibleOn": "typeof this.value !== \"undefined\""
        },
        {
          "name": "options",
          "type": "select",
          "label": "启用单位",
          "options": [
            "secondly",
            "minutely",
            "hourly",
            "daily",
            "weekdays",
            "weekly",
            "monthly",
            "yearly"
          ],
          "value": "hourly,daily,weekly,monthly",
          "multiple": true
        }
      ],
      "order": 0
    },
    "order": 0
  },
  {
    "searchKeywords": "uuid字段",
    "name": "UUID",
    "icon": "fa fa-eye-slash",
    "description": "自动生成的 UUID",
    "previewSchema": {
      "type": "form",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "uuid",
          "name": "uuid"
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/uuid",
    "scaffold": {
      "type": "uuid",
      "name": "uuid"
    },
    "isBaseComponent": true,
    "pluginIcon": "uuid-plugin",
    "rendererName": "uuid",
    "id": "e114a11597fa",
    "plugin": {
      "rendererName": "uuid",
      "$schema": "/schemas/UUIDControlSchema.json",
      "name": "UUID",
      "isBaseComponent": true,
      "icon": "fa fa-eye-slash",
      "pluginIcon": "uuid-plugin",
      "description": "自动生成的 UUID",
      "searchKeywords": "uuid字段",
      "docLink": "/amis/zh-CN/components/form/uuid",
      "panelTitle": "UUID",
      "panelBody": [
        {
          "type": "select",
          "label": {
            "type": "tooltip-wrapper",
            "tooltip": "Can be set to upper left corner, upper right corner, lower right corner, lower left corner, default is lower right corner",
            "tooltipTheme": "dark",
            "placement": "top",
            "tooltipStyle": {
              "fontSize": "12px"
            },
            "className": "ae-formItemControl-label-tip",
            "body": "Reference position"
          },
          "name": "originPosition",
          "value": "left-top",
          "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
          "options": [
            {
              "label": "top left",
              "value": "left-top"
            },
            {
              "label": "top right",
              "value": "right-top"
            },
            {
              "label": "bottom right (default)",
              "value": "right-bottom"
            },
            {
              "label": "bottom left",
              "value": "left-bottom"
            }
          ]
        },
        {
          "type": "static",
          "value": "自动按 UUID v4 格式生成，无需配置"
        }
      ],
      "order": 0
    },
    "order": 0
  },
  {
    "name": "地理位置选择",
    "icon": "fa fa-location-arrow",
    "description": "地理位置选择",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "location-picker",
          "name": "location",
          "label": "位置选择"
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/location-picker",
    "scaffold": {
      "type": "location-picker",
      "name": "location",
      "label": "位置选择"
    },
    "isBaseComponent": true,
    "pluginIcon": "location-picker-plugin",
    "rendererName": "location-picker",
    "id": "2d062d9eed42",
    "plugin": {
      "rendererName": "location-picker",
      "$schema": "/schemas/LocationControlSchema.json",
      "name": "地理位置选择",
      "isBaseComponent": true,
      "notRenderFormZone": true,
      "icon": "fa fa-location-arrow",
      "pluginIcon": "location-picker-plugin",
      "description": "地理位置选择",
      "docLink": "/amis/zh-CN/components/form/location-picker",
      "panelTitle": "地理位置选择",
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "选中值变化时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "object",
                      "title": "选中的值",
                      "properties": {
                        "address": {
                          "type": "string",
                          "title": "地址"
                        },
                        "lng": {
                          "type": "number",
                          "title": "经度"
                        },
                        "lat": {
                          "type": "number",
                          "title": "纬度"
                        },
                        "vendor": {
                          "type": "string",
                          "title": "厂商"
                        }
                      }
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清除选中值"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "将值重置为初始值"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "子表单项",
    "icon": "fa fa-window-restore",
    "description": "SubForm, 配置一个子 form 作为当前的表单项",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "input-sub-form",
          "name": "subform",
          "label": "子表单",
          "form": {
            "title": "标题",
            "body": [
              {
                "type": "input-text",
                "label": "文本",
                "name": "text"
              }
            ]
          }
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/input-sub-form",
    "scaffold": {
      "type": "input-sub-form",
      "name": "subform",
      "label": "子表单"
    },
    "isBaseComponent": true,
    "pluginIcon": "sub-form-plugin",
    "rendererName": "input-sub-form",
    "id": "edab373bf0a1",
    "plugin": {
      "rendererName": "input-sub-form",
      "$schema": "/schemas/SubFormControlSchema.json",
      "name": "子表单项",
      "isBaseComponent": true,
      "icon": "fa fa-window-restore",
      "pluginIcon": "sub-form-plugin",
      "description": "SubForm, 配置一个子 form 作为当前的表单项",
      "docLink": "/amis/zh-CN/components/form/input-sub-form",
      "panelTitle": "子表单项",
      "order": 0
    },
    "order": 0
  },
  {
    "searchKeywords": "隐藏字段",
    "name": "hidden",
    "icon": "fa fa-eye-slash",
    "description": "隐藏表单项",
    "previewSchema": {
      "type": "tpl",
      "tpl": "隐藏域"
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/hidden",
    "scaffold": {
      "type": "hidden",
      "name": "var1"
    },
    "isBaseComponent": true,
    "pluginIcon": "hidden-plugin",
    "rendererName": "hidden",
    "id": "fbc2bc97b926",
    "plugin": {
      "rendererName": "hidden",
      "$schema": "/schemas/HiddenControlSchema.json",
      "name": "hidden",
      "isBaseComponent": true,
      "icon": "fa fa-eye-slash",
      "pluginIcon": "hidden-plugin",
      "description": "隐藏表单项",
      "searchKeywords": "隐藏字段",
      "docLink": "/amis/zh-CN/components/form/hidden",
      "panelTitle": "隐藏域",
      "panelBody": [
        {
          "type": "select",
          "label": {
            "type": "tooltip-wrapper",
            "tooltip": "Can be set to upper left corner, upper right corner, lower right corner, lower left corner, default is lower right corner",
            "tooltipTheme": "dark",
            "placement": "top",
            "tooltipStyle": {
              "fontSize": "12px"
            },
            "className": "ae-formItemControl-label-tip",
            "body": "Reference position"
          },
          "name": "originPosition",
          "value": "left-top",
          "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
          "options": [
            {
              "label": "top left",
              "value": "left-top"
            },
            {
              "label": "top right",
              "value": "right-top"
            },
            {
              "label": "bottom right (default)",
              "value": "right-bottom"
            },
            {
              "label": "bottom left",
              "value": "left-bottom"
            }
          ]
        },
        {
          "type": "input-text",
          "name": "value",
          "label": "默认值"
        }
      ],
      "order": 0
    },
    "order": 0
  },
  {
    "name": "手写签",
    "icon": "fa fa-star-o",
    "description": "手写签名面板",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "input-signature",
          "label": "签名",
          "name": "signature",
          "embed": true
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/input-signature",
    "scaffold": {
      "type": "input-signature",
      "label": "签名",
      "name": "signature"
    },
    "isBaseComponent": true,
    "pluginIcon": "input-signature-plugin",
    "rendererName": "input-signature",
    "id": "610292343b74",
    "plugin": {
      "rendererName": "input-signature",
      "$schema": "/schemas/InputSignatureSchema.json",
      "name": "手写签",
      "isBaseComponent": true,
      "icon": "fa fa-star-o",
      "pluginIcon": "input-signature-plugin",
      "description": "手写签名面板",
      "docLink": "/amis/zh-CN/components/form/input-signature",
      "notRenderFormZone": true,
      "panelTitle": "签名面板",
      "events": [],
      "actions": [],
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "静态展示框",
    "icon": "fa fa-info",
    "description": "纯用来展示数据，可用来展示 json、date、image、progress 等数据",
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "static",
          "label": "描述",
          "value": "静态值"
        }
      ]
    },
    "tags": [
      "表单项"
    ],
    "docLink": "/amis/zh-CN/components/form/static",
    "scaffold": {
      "type": "static",
      "label": "描述"
    },
    "isBaseComponent": true,
    "pluginIcon": "static-plugin",
    "rendererName": "static",
    "id": "c52a59c16612",
    "plugin": {
      "rendererName": "static",
      "$schema": "/schemas/StaticControlSchema.json",
      "name": "静态展示框",
      "isBaseComponent": true,
      "icon": "fa fa-info",
      "pluginIcon": "static-plugin",
      "description": "纯用来展示数据，可用来展示 json、date、image、progress 等数据",
      "docLink": "/amis/zh-CN/components/form/static",
      "multifactor": true,
      "notRenderFormZone": true,
      "panelTitle": "静态展示",
      "panelJustify": true,
      "events": [
        {
          "eventName": "click",
          "eventLabel": "点击",
          "description": "点击时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "mouseenter",
          "eventLabel": "鼠标移入",
          "description": "鼠标移入时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "mouseleave",
          "eventLabel": "鼠标移出",
          "description": "鼠标移出时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "order": 0
    },
    "order": 0
  },
  {
    "name": "button-group",
    "icon": "fa fa-object-group",
    "description": "用来展示多个按钮，视觉上会作为一个整体呈现。",
    "previewSchema": {
      "type": "button-group",
      "buttons": [
        {
          "type": "button",
          "label": "按钮1"
        },
        {
          "type": "button",
          "label": "按钮2"
        }
      ]
    },
    "tags": [
      "button-group"
    ],
    "docLink": "/amis/zh-CN/components/button-group",
    "scaffold": {
      "type": "button-group"
    },
    "isBaseComponent": true,
    "pluginIcon": "btn-group-plugin",
    "rendererName": "button-group",
    "id": "36a989d11d62",
    "plugin": {
      "rendererName": "button-group",
      "$schema": "/schemas/ButtonGroupSchema.json",
      "name": "button-group",
      "isBaseComponent": true,
      "description": "用来展示多个按钮，视觉上会作为一个整体呈现。",
      "icon": "fa fa-object-group",
      "pluginIcon": "btn-group-plugin",
      "docLink": "/amis/zh-CN/components/button-group",
      "panelTitle": "按钮组",
      "panelJustify": true,
      "regions": [
        {
          "key": "buttons",
          "label": "子按钮",
          "renderMethod": "render",
          "preferTag": "按钮",
          "insertPosition": "inner"
        }
      ],
      "order": 0
    },
    "order": 0
  },
  {
    "name": "nav",
    "icon": "fa fa-map-signs",
    "description": "用来渲染导航菜单，支持横排和竖排。",
    "previewSchema": {
      "type": "nav",
      "stacked": true,
      "popupClassName": "app-popover :AMISCSSWrapper",
      "links": [
        {
          "label": "页面1",
          "to": "?id=1",
          "target": "_self",
          "id": "0"
        },
        {
          "label": "页面2",
          "to": "?id=2",
          "target": "_self",
          "id": "1"
        }
      ]
    },
    "tags": [
      "功能"
    ],
    "docLink": "/amis/zh-CN/components/nav",
    "scaffold": {
      "type": "nav",
      "stacked": true,
      "popupClassName": "app-popover :AMISCSSWrapper"
    },
    "isBaseComponent": true,
    "pluginIcon": "nav-plugin",
    "rendererName": "nav",
    "id": "210f62f26d12",
    "plugin": {
      "rendererName": "nav",
      "$schema": "/schemas/NavSchema.json",
      "name": "nav",
      "isBaseComponent": true,
      "description": "用来渲染导航菜单，支持横排和竖排。",
      "docLink": "/amis/zh-CN/components/nav",
      "icon": "fa fa-map-signs",
      "pluginIcon": "nav-plugin",
      "panelTitle": "导航",
      "panelDefinitions": {
        "links": {
          "label": "菜单管理",
          "name": "links",
          "type": "combo",
          "multiple": true,
          "draggable": true,
          "addButtonText": "新增菜单",
          "multiLine": true,
          "messages": {
            "validateFailed": "菜单中存在配置错误，请仔细检查"
          },
          "scaffold": {
            "label": "",
            "to": ""
          },
          "items": [
            {
              "label": "名称",
              "name": "label",
              "type": "input-text",
              "required": true
            },
            {
              "type": "input-text",
              "name": "to",
              "label": "跳转地址",
              "required": true
            },
            {
              "type": "switch",
              "mode": "horizontal",
              "horizontal": {
                "justify": true,
                "left": 8
              },
              "inputClassName": "is-inline ",
              "label": "是否新开页面",
              "name": "target"
            },
            {
              "label": "Icon",
              "type": "icon-picker",
              "name": "icon",
              "placeholder": "点击选择图标",
              "clearable": true,
              "description": ""
            },
            {
              "type": "switch",
              "mode": "horizontal",
              "inputClassName": "is-inline ",
              "label": "初始是否展开",
              "name": "unfolded"
            },
            {
              "type": "group",
              "label": "是否高亮",
              "direction": "vertical",
              "className": "m-b-none",
              "labelRemark": {
                "trigger": "click",
                "rootClose": true,
                "className": "m-l-xs",
                "content": "可以配置该菜单是否要高亮",
                "placement": "left"
              },
              "body": [
                {
                  "name": "active",
                  "type": "radios",
                  "inline": true,
                  "options": [
                    {
                      "label": "是",
                      "value": true
                    },
                    {
                      "label": "否",
                      "value": false
                    },
                    {
                      "label": "表达式",
                      "value": ""
                    }
                  ]
                },
                {
                  "name": "activeOn",
                  "autoComplete": false,
                  "visibleOn": "typeof this.active !== \"boolean\"",
                  "type": "input-text",
                  "placeholder": "留空将自动分析菜单地址",
                  "className": "m-t-n-sm"
                }
              ]
            },
            {
              "type": "switch",
              "mode": "horizontal",
              "inputClassName": "is-inline ",
              "label": "包含子菜单",
              "name": "children",
              "messages": {
                "validateFailed": "子菜单中存在配置错误，请仔细检查"
              }
            },
            {
              "name": "children",
              "$ref": "links",
              "visibleOn": "this.children",
              "label": "子菜单管理",
              "addButtonText": "新增子菜单"
            }
          ]
        }
      },
      "events": [
        {
          "eventName": "click",
          "eventLabel": "菜单点击",
          "description": "菜单点击时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "description": "当前数据域，可以通过.字段名读取对应的值"
                }
              }
            }
          ]
        },
        {
          "eventName": "change",
          "eventLabel": "菜单选中",
          "description": "菜单选中时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据"
                }
              }
            }
          ]
        },
        {
          "eventName": "toggled",
          "eventLabel": "菜单展开",
          "description": "菜单展开时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据"
                }
              }
            }
          ]
        },
        {
          "eventName": "collapsed",
          "eventLabel": "菜单折叠",
          "description": "菜单折叠时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据"
                }
              }
            }
          ]
        },
        {
          "eventName": "loaded",
          "eventLabel": "数据加载完成",
          "description": "数据加载完成后触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据"
                }
              }
            }
          ]
        }
      ],
      "actions": [
        {
          "actionType": "updateItems",
          "actionLabel": "更新菜单项",
          "description": "触发组件更新菜单项"
        },
        {
          "actionType": "collapse",
          "actionLabel": "菜单折叠",
          "description": "触发组件的折叠与展开"
        },
        {
          "actionType": "reload",
          "actionLabel": "重新加载",
          "description": "触发组件数据刷新并重新渲染"
        }
      ],
      "order": 0
    },
    "order": 0
  },
  {
    "name": "anchor-nav",
    "icon": "fa fa-link",
    "description": "锚点导航，在多行内容展示时，可以将内容用锚点导航分组的形式展示，点击导航菜单可以定位到对应内容区域。",
    "previewSchema": {
      "type": "anchor-nav",
      "links": [
        {
          "title": "锚点1",
          "href": "1",
          "body": [
            {
              "type": "tpl",
              "tpl": "这里是锚点内容1",
              "wrapperComponent": "",
              "inline": false
            }
          ]
        },
        {
          "title": "锚点2",
          "href": "2",
          "body": [
            {
              "type": "tpl",
              "tpl": "这里是锚点内容2",
              "wrapperComponent": "",
              "inline": false
            }
          ]
        },
        {
          "title": "锚点3",
          "href": "3",
          "body": [
            {
              "type": "tpl",
              "tpl": "这里是锚点内容3",
              "wrapperComponent": "",
              "inline": false
            }
          ]
        }
      ]
    },
    "tags": [
      "anchor-nav"
    ],
    "docLink": "/amis/zh-CN/components/anchor-nav",
    "scaffold": {
      "type": "anchor-nav"
    },
    "isBaseComponent": true,
    "pluginIcon": "anchor-nav-plugin",
    "rendererName": "anchor-nav",
    "id": "79e7b273f4aa",
    "plugin": {
      "rendererName": "anchor-nav",
      "$schema": "/schemas/AnchorNavSchema.json",
      "name": "anchor-nav",
      "isBaseComponent": true,
      "description": "锚点导航，在多行内容展示时，可以将内容用锚点导航分组的形式展示，点击导航菜单可以定位到对应内容区域。",
      "docLink": "/amis/zh-CN/components/anchor-nav",
      "icon": "fa fa-link",
      "pluginIcon": "anchor-nav-plugin",
      "panelTitle": "锚点导航",
      "panelJustify": true,
      "panelBody": [
        {
          "type": "tabs",
          "tabsMode": "line",
          "className": "editor-prop-config-tabs",
          "linksClassName": "editor-prop-config-tabs-links aa",
          "contentClassName": "no-border editor-prop-config-tabs-cont hoverShowScrollBar",
          "tabs": [
            {
              "title": "Properties",
              "body": [
                {
                  "type": "collapse-group",
                  "activeKey": [
                    "Basic",
                    "状态"
                  ],
                  "expandIconPosition": "right",
                  "expandIcon": {
                    "type": "icon",
                    "icon": "chevron-right"
                  },
                  "className": "ae-formItemControl ae-styleControl",
                  "body": [
                    {
                      "type": "collapse",
                      "headingClassName": "ae-formItemControl-header ae-Collapse-header",
                      "bodyClassName": "ae-formItemControl-body",
                      "title": "Basic",
                      "body": [
                        {
                          "type": "select",
                          "label": {
                            "type": "tooltip-wrapper",
                            "tooltip": "Can be set to upper left corner, upper right corner, lower right corner, lower left corner, default is lower right corner",
                            "tooltipTheme": "dark",
                            "placement": "top",
                            "tooltipStyle": {
                              "fontSize": "12px"
                            },
                            "className": "ae-formItemControl-label-tip",
                            "body": "Reference position"
                          },
                          "name": "originPosition",
                          "value": "left-top",
                          "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
                          "options": [
                            {
                              "label": "top left",
                              "value": "left-top"
                            },
                            {
                              "label": "top right",
                              "value": "right-top"
                            },
                            {
                              "label": "bottom right (default)",
                              "value": "right-bottom"
                            },
                            {
                              "label": "bottom left",
                              "value": "left-bottom"
                            }
                          ]
                        },
                        {
                          "type": "combo",
                          "name": "links",
                          "label": "锚点设置",
                          "mode": "normal",
                          "multiple": true,
                          "draggable": true,
                          "minLength": 1,
                          "addButtonText": "添加锚点",
                          "deleteBtn": {
                            "icon": "fa fa-trash"
                          },
                          "items": [
                            {
                              "type": "input-text",
                              "name": "title",
                              "required": true,
                              "placeholder": "Please enter the anchor title"
                            }
                          ],
                          "scaffold": {
                            "title": "锚点",
                            "href": "",
                            "body": [
                              {
                                "type": "tpl",
                                "tpl": "这里是锚点内容",
                                "wrapperComponent": "",
                                "inline": false
                              }
                            ]
                          },
                          "draggableTip": "",
                          "itemsWrapperClassName": "ae-Combo-items ",
                          "itemClassName": "ae-Combo-item "
                        },
                        {
                          "name": "active",
                          "type": "select",
                          "label": "默认定位区域",
                          "source": "${links|appTranslate}",
                          "labelField": "title",
                          "valueField": "href",
                          "value": "1"
                        }
                      ],
                      "collapsed": false,
                      "key": "Basic"
                    },
                    {
                      "type": "collapse",
                      "headingClassName": "ae-formItemControl-header ae-Collapse-header",
                      "bodyClassName": "ae-formItemControl-body",
                      "title": "状态",
                      "body": [
                        {
                          "type": "ae-StatusControl",
                          "defaultTrue": true,
                          "label": "visible",
                          "mode": "normal",
                          "name": "visible",
                          "expressionName": "visibleOn"
                        },
                        {
                          "type": "ae-StatusControl",
                          "label": "hidden",
                          "mode": "normal",
                          "name": "hidden",
                          "expressionName": "hiddenOn"
                        }
                      ],
                      "collapsed": false,
                      "key": "状态"
                    }
                  ]
                }
              ],
              "className": " p-none"
            },
            {
              "title": "Appearance",
              "body": [
                {
                  "type": "collapse-group",
                  "activeKey": [
                    "Basic"
                  ],
                  "expandIconPosition": "right",
                  "expandIcon": {
                    "type": "icon",
                    "icon": "chevron-right"
                  },
                  "className": "ae-formItemControl ae-styleControl",
                  "body": [
                    {
                      "type": "collapse",
                      "headingClassName": "ae-formItemControl-header ae-Collapse-header",
                      "bodyClassName": "ae-formItemControl-body",
                      "title": "Basic",
                      "body": [
                        {
                          "type": "button-group-select",
                          "name": "direction",
                          "label": "导航布局",
                          "value": "vertical",
                          "options": [
                            {
                              "label": "水平",
                              "value": "horizontal"
                            },
                            {
                              "label": "垂直",
                              "value": "vertical"
                            }
                          ]
                        }
                      ],
                      "collapsed": false,
                      "key": "Basic"
                    },
                    {
                      "type": "collapse",
                      "headingClassName": "ae-formItemControl-header ae-Collapse-header",
                      "bodyClassName": "ae-formItemControl-body",
                      "title": "CSS 类名",
                      "collapsed": true,
                      "body": [
                        {
                          "type": "ae-classname",
                          "name": "className",
                          "label": {
                            "type": "tooltip-wrapper",
                            "tooltip": "What are the helper class CSS class names? Please go to <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">Style Description</a>. In addition, you can add custom class names, Then add custom styles in system configuration. ",
                            "tooltipTheme": "dark",
                            "placement": "top",
                            "tooltipStyle": {
                              "fontSize": "12px"
                            },
                            "className": "ae-formItemControl-label-tip",
                            "body": "外层"
                          }
                        },
                        {
                          "type": "ae-classname",
                          "name": "linkClassName",
                          "label": {
                            "type": "tooltip-wrapper",
                            "tooltip": "What are the helper class CSS class names? Please go to <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">Style Description</a>. In addition, you can add custom class names, Then add custom styles in system configuration. ",
                            "tooltipTheme": "dark",
                            "placement": "top",
                            "tooltipStyle": {
                              "fontSize": "12px"
                            },
                            "className": "ae-formItemControl-label-tip",
                            "body": "导航"
                          }
                        },
                        {
                          "type": "ae-classname",
                          "name": "sectionClassName",
                          "label": {
                            "type": "tooltip-wrapper",
                            "tooltip": "What are the helper class CSS class names? Please go to <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">Style Description</a>. In addition, you can add custom class names, Then add custom styles in system configuration. ",
                            "tooltipTheme": "dark",
                            "placement": "top",
                            "tooltipStyle": {
                              "fontSize": "12px"
                            },
                            "className": "ae-formItemControl-label-tip",
                            "body": "区域内容"
                          }
                        }
                      ],
                      "key": "CSS 类名"
                    }
                  ]
                }
              ],
              "className": " p-none"
            }
          ]
        }
      ],
      "patchContainers": [
        "anchor-nav.body"
      ],
      "vRendererConfig": {
        "regions": {
          "body": {
            "key": "body",
            "label": "内容区",
            "renderMethod": "renderBody"
          }
        },
        "panelTitle": "内容区域",
        "panelJustify": true,
        "panelBody": [
          {
            "type": "tabs",
            "tabsMode": "line",
            "className": "editor-prop-config-tabs",
            "linksClassName": "editor-prop-config-tabs-links aa",
            "contentClassName": "no-border editor-prop-config-tabs-cont hoverShowScrollBar",
            "tabs": [
              {
                "title": "Properties",
                "body": [
                  {
                    "type": "collapse-group",
                    "activeKey": [
                      "Basic"
                    ],
                    "expandIconPosition": "right",
                    "expandIcon": {
                      "type": "icon",
                      "icon": "chevron-right"
                    },
                    "className": "ae-formItemControl ae-styleControl",
                    "body": [
                      {
                        "type": "collapse",
                        "headingClassName": "ae-formItemControl-header ae-Collapse-header",
                        "bodyClassName": "ae-formItemControl-body",
                        "title": "Basic",
                        "body": [
                          {
                            "name": "title",
                            "label": "Title",
                            "type": "input-text",
                            "required": true
                          }
                        ],
                        "collapsed": false,
                        "key": "Basic"
                      }
                    ]
                  }
                ],
                "className": " p-none"
              },
              {
                "title": "Appearance",
                "body": [
                  {
                    "type": "collapse-group",
                    "activeKey": [
                      "CSS 类名"
                    ],
                    "expandIconPosition": "right",
                    "expandIcon": {
                      "type": "icon",
                      "icon": "chevron-right"
                    },
                    "className": "ae-formItemControl ae-styleControl",
                    "body": [
                      {
                        "type": "collapse",
                        "headingClassName": "ae-formItemControl-header ae-Collapse-header",
                        "bodyClassName": "ae-formItemControl-body",
                        "title": "CSS 类名",
                        "body": [
                          {
                            "type": "ae-classname",
                            "name": "className",
                            "label": {
                              "type": "tooltip-wrapper",
                              "tooltip": "What are the helper class CSS class names? Please go to <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">Style Description</a>. In addition, you can add custom class names, Then add custom styles in system configuration. ",
                              "tooltipTheme": "dark",
                              "placement": "top",
                              "tooltipStyle": {
                                "fontSize": "12px"
                              },
                              "className": "ae-formItemControl-label-tip",
                              "body": "CSS class name"
                            }
                          }
                        ],
                        "collapsed": false,
                        "key": "CSS 类名"
                      }
                    ]
                  }
                ],
                "className": " p-none"
              }
            ]
          }
        ]
      },
      "wrapperProps": {
        "unmountOnExit": true,
        "mountOnEnter": true
      },
      "overrides": {},
      "order": 0
    },
    "order": 0
  },
  {
    "searchKeywords": "文字提示容器",
    "name": "tooltip",
    "icon": "fa fa-comment-alt",
    "description": "类似容器，可以将多个渲染器放置在一起，当用户鼠标悬停或者点击容器时，显示文字提示浮层",
    "previewSchema": {
      "type": "tooltip-wrapper",
      "tooltip": "提示文字",
      "body": [
        {
          "type": "tpl",
          "wrapperComponent": "",
          "tpl": "内容"
        }
      ],
      "enterable": true,
      "showArrow": true,
      "offset": [
        0,
        0
      ],
      "className": "p-1 mr-3 border-2 border-solid border-indigo-400"
    },
    "tags": [
      "功能"
    ],
    "docLink": "/amis/zh-CN/components/tooltip",
    "scaffold": {
      "type": "tooltip-wrapper",
      "tooltip": "提示文字",
      "enterable": true,
      "showArrow": true
    },
    "isBaseComponent": true,
    "pluginIcon": "tooltip-wrapper-plugin",
    "rendererName": "tooltip-wrapper",
    "id": "92685a3a84f2",
    "plugin": {
      "rendererName": "tooltip-wrapper",
      "$schema": "/schemas/TooltipWrapperSchema.json",
      "isBaseComponent": true,
      "name": "tooltip",
      "description": "类似容器，可以将多个渲染器放置在一起，当用户鼠标悬停或者点击容器时，显示文字提示浮层",
      "searchKeywords": "文字提示容器",
      "docLink": "/amis/zh-CN/components/tooltip",
      "icon": "fa fa-comment-alt",
      "pluginIcon": "tooltip-wrapper-plugin",
      "regions": [
        {
          "key": "body",
          "label": "内容区"
        }
      ],
      "panelTitle": "tooltip",
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "alert",
    "icon": "fa fa-exclamation-circle",
    "description": "Used to make special text prompts, divided into four categories: prompt, success, warning and danger. Can be combined with <code>visibleOn</code> to provide error message prompts. ",
    "previewSchema": {
      "type": "alert",
      "body": {
        "type": "tpl",
        "tpl": "提示内容",
        "wrapperComponent": "",
        "inline": false
      },
      "level": "info",
      "className": "text-left",
      "showCloseButton": true
    },
    "tags": [
      "alert"
    ],
    "docLink": "/amis/zh-CN/components/alert",
    "scaffold": {
      "type": "alert",
      "level": "info"
    },
    "isBaseComponent": true,
    "pluginIcon": "tooltip-plugin",
    "rendererName": "alert",
    "id": "b77a77f39083",
    "plugin": {
      "rendererName": "alert",
      "$schema": "/schemas/AlertSchema.json",
      "name": "alert",
      "isBaseComponent": true,
      "description": "Used to make special text prompts, divided into four categories: prompt, success, warning and danger. Can be combined with <code>visibleOn</code> to provide error message prompts. ",
      "docLink": "/amis/zh-CN/components/alert",
      "icon": "fa fa-exclamation-circle",
      "pluginIcon": "tooltip-plugin",
      "regions": [
        {
          "key": "body",
          "label": "Content",
          "placeholder": "Alert content"
        }
      ],
      "notRenderFormZone": true,
      "panelTitle": "Alert",
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "wizard",
    "icon": "fa fa-list-ol",
    "description": "表单向导，可以将复杂的多个表单项拆分成多个步骤，一步一步指引用户完成填写。",
    "previewSchema": {
      "type": "wizard",
      "className": "text-left m-b-none",
      "steps": [
        {
          "title": "第一步",
          "body": [
            {
              "type": "input-text",
              "label": "文本",
              "name": "var1"
            }
          ]
        },
        {
          "title": "第二步",
          "body": []
        }
      ]
    },
    "tags": [
      "功能"
    ],
    "docLink": "/amis/zh-CN/components/wizard",
    "scaffold": {
      "type": "wizard",
      "steps": [
        {
          "title": "第一步",
          "body": [
            {
              "type": "input-text",
              "label": "文本",
              "name": "var1"
            }
          ]
        },
        {
          "title": "第二步",
          "body": [
            {
              "type": "input-text",
              "label": "文本2",
              "name": "var2"
            }
          ]
        }
      ]
    },
    "isBaseComponent": true,
    "pluginIcon": "wizard-plugin",
    "rendererName": "wizard",
    "id": "22f3d4c68d01",
    "plugin": {
      "rendererName": "wizard",
      "$schema": "/schemas/WizardSchema.json",
      "name": "wizard",
      "isBaseComponent": true,
      "description": "表单向导，可以将复杂的多个表单项拆分成多个步骤，一步一步指引用户完成填写。",
      "docLink": "/amis/zh-CN/components/wizard",
      "icon": "fa fa-list-ol",
      "pluginIcon": "wizard-plugin",
      "events": [
        {
          "eventName": "inited",
          "eventLabel": "初始化数据接口请求完成",
          "description": "远程初始化数据接口请求完成时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "responseData": {
                      "type": "object",
                      "title": "响应数据"
                    },
                    "responseStatus": {
                      "type": "number",
                      "title": "响应状态(0表示成功)"
                    },
                    "responseMsg": {
                      "type": "string",
                      "title": "响应消息"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "finished",
          "eventLabel": "点击完成",
          "description": "最终提交时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "description": "当前数据域，可以通过.字段名读取对应的值"
                }
              }
            }
          ]
        },
        {
          "eventName": "stepChange",
          "eventLabel": "步骤切换",
          "description": "切换步骤时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "step": {
                      "type": "string",
                      "title": "步骤索引"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "change",
          "eventLabel": "数值变化",
          "description": "表单值变化时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据"
                }
              }
            }
          ]
        },
        {
          "eventName": "submitSucc",
          "eventLabel": "提交成功",
          "description": "最终提交成功时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "result": {
                      "type": "object",
                      "title": "提交成功后返回的数据"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "submitFail",
          "eventLabel": "提交失败",
          "description": "最终提交失败时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "error": {
                      "type": "object",
                      "title": "提交失败后返回的错误信息"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "stepSubmitSucc",
          "eventLabel": "步骤提交成功",
          "description": "单个步骤提交成功"
        },
        {
          "eventName": "stepSubmitFail",
          "eventLabel": "步骤提交失败",
          "description": "单个步骤提交失败",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "error": {
                      "type": "object",
                      "title": "单个步骤提交失败后返回的错误信息"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [
        {
          "actionType": "submit",
          "actionLabel": "全部提交",
          "description": "提交全部数据"
        },
        {
          "actionType": "stepSubmit",
          "actionLabel": "分步提交",
          "description": "提交当前步骤数据"
        },
        {
          "actionType": "prev",
          "actionLabel": "上一步",
          "description": "返回上一步"
        },
        {
          "actionType": "next",
          "actionLabel": "下一步",
          "description": "提交当前步骤数据"
        },
        {
          "actionType": "goto-step",
          "actionLabel": "定位步骤",
          "description": "切换到指定步骤",
          "innerArgs": [
            "step"
          ],
          "schema": {
            "type": "combo",
            "name": "args",
            "multiple": false,
            "strictMode": false,
            "items": [
              {
                "type": "ae-formulaControl",
                "variableMode": "tree",
                "name": "step",
                "label": "目标步骤",
                "variables": "${variables}",
                "size": "lg",
                "mode": "horizontal",
                "required": true
              }
            ]
          }
        },
        {
          "actionType": "reload",
          "actionLabel": "重新加载",
          "description": "触发组件数据刷新并重新渲染"
        },
        {
          "actionType": "setValue",
          "actionLabel": "变量赋值",
          "description": "触发组件数据更新"
        }
      ],
      "panelTitle": "向导",
      "patchContainers": [
        "steps.body"
      ],
      "vRendererConfig": {
        "regions": {
          "body": {
            "key": "body",
            "label": "表单集合"
          },
          "actions": {
            "label": "按钮组",
            "key": "actions",
            "preferTag": "按钮"
          }
        },
        "panelTitle": "步骤"
      },
      "overrides": {},
      "order": 0
    },
    "order": 0
  },
  {
    "searchKeywords": "表格展现",
    "name": "表格视图",
    "icon": "fa fa-columns",
    "description": "表格level的展现",
    "previewSchema": {
      "type": "table-view",
      "trs": [
        {
          "background": "#F7F7F7",
          "tds": [
            {
              "body": {
                "type": "tpl",
                "wrapperComponent": "",
                "tpl": "地区"
              }
            },
            {
              "body": {
                "type": "tpl",
                "wrapperComponent": "",
                "tpl": "城市"
              }
            },
            {
              "body": {
                "type": "tpl",
                "wrapperComponent": "",
                "tpl": "销量"
              }
            }
          ]
        },
        {
          "tds": [
            {
              "rowspan": 2,
              "body": {
                "type": "tpl",
                "wrapperComponent": "",
                "tpl": "华北"
              }
            },
            {
              "body": {
                "type": "tpl",
                "wrapperComponent": "",
                "tpl": "北京"
              }
            },
            {
              "body": {
                "type": "tpl",
                "wrapperComponent": "",
                "tpl": "${beijing}"
              }
            }
          ]
        },
        {
          "tds": [
            {
              "body": {
                "type": "tpl",
                "wrapperComponent": "",
                "tpl": "天津"
              }
            },
            {
              "body": {
                "type": "tpl",
                "wrapperComponent": "",
                "tpl": "${tianjing}"
              }
            }
          ]
        }
      ]
    },
    "tags": [
      "功能"
    ],
    "docLink": "/amis/zh-CN/components/table-view",
    "scaffold": {
      "type": "table-view"
    },
    "isBaseComponent": true,
    "pluginIcon": "table-view-plugin",
    "rendererName": "table-view",
    "id": "bb74838593b6",
    "plugin": {
      "rendererName": "table-view",
      "$schema": "/schemas/TableViewSchema.json",
      "name": "表格视图",
      "isBaseComponent": true,
      "icon": "fa fa-columns",
      "pluginIcon": "table-view-plugin",
      "description": "表格level的展现",
      "searchKeywords": "表格展现",
      "docLink": "/amis/zh-CN/components/table-view",
      "regions": [
        {
          "key": "body",
          "label": "内容区",
          "renderMethod": "renderTdBody",
          "preferTag": "展示"
        }
      ],
      "panelTitle": "表格视图",
      "panelJustify": true,
      "panelBody": [
        {
          "type": "tabs",
          "tabsMode": "line",
          "className": "editor-prop-config-tabs",
          "linksClassName": "editor-prop-config-tabs-links aa",
          "contentClassName": "no-border editor-prop-config-tabs-cont hoverShowScrollBar",
          "tabs": [
            {
              "title": "Properties",
              "className": "p-none p-none",
              "body": [
                {
                  "type": "collapse-group",
                  "activeKey": [
                    "Basic",
                    "状态"
                  ],
                  "expandIconPosition": "right",
                  "expandIcon": {
                    "type": "icon",
                    "icon": "chevron-right"
                  },
                  "className": "ae-formItemControl ae-styleControl",
                  "body": [
                    {
                      "type": "collapse",
                      "headingClassName": "ae-formItemControl-header ae-Collapse-header",
                      "bodyClassName": "ae-formItemControl-body",
                      "title": "Basic",
                      "body": [
                        {
                          "type": "select",
                          "label": {
                            "type": "tooltip-wrapper",
                            "tooltip": "Can be set to upper left corner, upper right corner, lower right corner, lower left corner, default is lower right corner",
                            "tooltipTheme": "dark",
                            "placement": "top",
                            "tooltipStyle": {
                              "fontSize": "12px"
                            },
                            "className": "ae-formItemControl-label-tip",
                            "body": "Reference position"
                          },
                          "name": "originPosition",
                          "value": "left-top",
                          "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
                          "options": [
                            {
                              "label": "top left",
                              "value": "left-top"
                            },
                            {
                              "label": "top right",
                              "value": "right-top"
                            },
                            {
                              "label": "bottom right (default)",
                              "value": "right-bottom"
                            },
                            {
                              "label": "bottom left",
                              "value": "left-bottom"
                            }
                          ]
                        },
                        {
                          "type": "input-text",
                          "name": "caption",
                          "label": "caption"
                        },
                        {
                          "label": "标题位置",
                          "name": "captionSide",
                          "type": "button-group-select",
                          "size": "sm",
                          "mode": "row",
                          "className": "ae-buttonGroupSelect--justify",
                          "visibleOn": "this.caption",
                          "options": [
                            {
                              "label": "顶部",
                              "value": "top"
                            },
                            {
                              "label": "底部",
                              "value": "bottom"
                            }
                          ]
                        },
                        {
                          "type": "input-text",
                          "label": "视图宽度",
                          "name": "width",
                          "clearable": true
                        },
                        {
                          "type": "input-text",
                          "label": "单元格默认内间距",
                          "name": "padding",
                          "clearable": true
                        },
                        {
                          "label": "显示边框",
                          "name": "border",
                          "type": "switch",
                          "mode": "row",
                          "inputClassName": "inline-flex justify-between flex-row-reverse"
                        },
                        {
                          "label": "边框颜色",
                          "type": "input-color",
                          "name": "borderColor",
                          "visibleOn": "this.border || typeof this.border === \"undefined\""
                        }
                      ],
                      "collapsed": false,
                      "key": "Basic"
                    },
                    {
                      "type": "collapse",
                      "headingClassName": "ae-formItemControl-header ae-Collapse-header",
                      "bodyClassName": "ae-formItemControl-body",
                      "title": "状态",
                      "body": [
                        null,
                        null
                      ],
                      "collapsed": false,
                      "key": "状态"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Appearance",
              "className": "p-none p-none",
              "body": [
                {
                  "type": "collapse-group",
                  "activeKey": [
                    null,
                    "Basic样式",
                    "自定义样式",
                    "动画"
                  ],
                  "expandIconPosition": "right",
                  "expandIcon": {
                    "type": "icon",
                    "icon": "chevron-right"
                  },
                  "className": "ae-formItemControl ae-styleControl",
                  "body": [
                    {
                      "type": "collapse",
                      "headingClassName": "ae-formItemControl-header ae-Collapse-header",
                      "bodyClassName": "ae-formItemControl-body",
                      "header": "布局",
                      "collapsed": false,
                      "body": [
                        {
                          "type": "style-display",
                          "label": false,
                          "name": "style"
                        }
                      ]
                    },
                    {
                      "type": "collapse",
                      "headingClassName": "ae-formItemControl-header ae-Collapse-header",
                      "bodyClassName": "ae-formItemControl-body",
                      "title": "Basic样式",
                      "collapsed": false,
                      "body": [
                        {
                          "type": "select",
                          "mode": "horizontal",
                          "labelAlign": "left",
                          "labelWidth": 80,
                          "name": "__editorStatebaseControlClassName",
                          "label": "状态",
                          "selectFirst": true,
                          "options": [
                            {
                              "label": "常规",
                              "value": "default"
                            },
                            {
                              "label": "悬浮",
                              "value": "hover"
                            },
                            {
                              "label": "点击",
                              "value": "active"
                            }
                          ]
                        },
                        {
                          "mode": "default",
                          "type": "amis-theme-border",
                          "label": "边框",
                          "name": "themeCss.baseControlClassName.border:default",
                          "needColorCustom": true,
                          "visibleOn": "${__editorStatebaseControlClassName == 'default' || !__editorStatebaseControlClassName}",
                          "state": "default"
                        },
                        {
                          "mode": "default",
                          "type": "amis-theme-radius",
                          "label": "圆角",
                          "name": "themeCss.baseControlClassName.radius:default",
                          "visibleOn": "${__editorStatebaseControlClassName == 'default' || !__editorStatebaseControlClassName}",
                          "state": "default"
                        },
                        {
                          "mode": "default",
                          "type": "amis-theme-padding-and-margin",
                          "label": "边距",
                          "name": "themeCss.baseControlClassName.padding-and-margin:default",
                          "visibleOn": "${__editorStatebaseControlClassName == 'default' || !__editorStatebaseControlClassName}",
                          "state": "default"
                        },
                        {
                          "mode": "default",
                          "type": "amis-theme-color-picker",
                          "label": "背景",
                          "name": "themeCss.baseControlClassName.background:default",
                          "needCustom": true,
                          "visibleOn": "${__editorStatebaseControlClassName == 'default' || !__editorStatebaseControlClassName}",
                          "needGradient": true,
                          "needImage": true,
                          "labelMode": "input",
                          "state": "default"
                        },
                        {
                          "type": "amis-theme-shadow-editor",
                          "label": false,
                          "name": "themeCss.baseControlClassName.boxShadow:default",
                          "hasSenior": true,
                          "visibleOn": "${__editorStatebaseControlClassName == 'default' || !__editorStatebaseControlClassName}",
                          "state": "default"
                        },
                        {
                          "mode": "default",
                          "type": "amis-theme-border",
                          "label": "边框",
                          "name": "themeCss.baseControlClassName.border:hover",
                          "needColorCustom": true,
                          "visibleOn": "${__editorStatebaseControlClassName == 'hover'}",
                          "state": "hover"
                        },
                        {
                          "mode": "default",
                          "type": "amis-theme-radius",
                          "label": "圆角",
                          "name": "themeCss.baseControlClassName.radius:hover",
                          "visibleOn": "${__editorStatebaseControlClassName == 'hover'}",
                          "state": "hover"
                        },
                        {
                          "mode": "default",
                          "type": "amis-theme-padding-and-margin",
                          "label": "边距",
                          "name": "themeCss.baseControlClassName.padding-and-margin:hover",
                          "visibleOn": "${__editorStatebaseControlClassName == 'hover'}",
                          "state": "hover"
                        },
                        {
                          "mode": "default",
                          "type": "amis-theme-color-picker",
                          "label": "背景",
                          "name": "themeCss.baseControlClassName.background:hover",
                          "needCustom": true,
                          "visibleOn": "${__editorStatebaseControlClassName == 'hover'}",
                          "needGradient": true,
                          "needImage": true,
                          "labelMode": "input",
                          "state": "hover"
                        },
                        {
                          "type": "amis-theme-shadow-editor",
                          "label": false,
                          "name": "themeCss.baseControlClassName.boxShadow:hover",
                          "hasSenior": true,
                          "visibleOn": "${__editorStatebaseControlClassName == 'hover'}",
                          "state": "hover"
                        },
                        {
                          "mode": "default",
                          "type": "amis-theme-border",
                          "label": "边框",
                          "name": "themeCss.baseControlClassName.border:active",
                          "needColorCustom": true,
                          "visibleOn": "${__editorStatebaseControlClassName == 'active'}",
                          "state": "active"
                        },
                        {
                          "mode": "default",
                          "type": "amis-theme-radius",
                          "label": "圆角",
                          "name": "themeCss.baseControlClassName.radius:active",
                          "visibleOn": "${__editorStatebaseControlClassName == 'active'}",
                          "state": "active"
                        },
                        {
                          "mode": "default",
                          "type": "amis-theme-padding-and-margin",
                          "label": "边距",
                          "name": "themeCss.baseControlClassName.padding-and-margin:active",
                          "visibleOn": "${__editorStatebaseControlClassName == 'active'}",
                          "state": "active"
                        },
                        {
                          "mode": "default",
                          "type": "amis-theme-color-picker",
                          "label": "背景",
                          "name": "themeCss.baseControlClassName.background:active",
                          "needCustom": true,
                          "visibleOn": "${__editorStatebaseControlClassName == 'active'}",
                          "needGradient": true,
                          "needImage": true,
                          "labelMode": "input",
                          "state": "active"
                        },
                        {
                          "type": "amis-theme-shadow-editor",
                          "label": false,
                          "name": "themeCss.baseControlClassName.boxShadow:active",
                          "hasSenior": true,
                          "visibleOn": "${__editorStatebaseControlClassName == 'active'}",
                          "state": "active"
                        }
                      ],
                      "key": "Basic样式"
                    },
                    {
                      "type": "collapse",
                      "headingClassName": "ae-formItemControl-header ae-Collapse-header",
                      "bodyClassName": "ae-formItemControl-body",
                      "title": "自定义样式",
                      "collapsed": false,
                      "body": [
                        {
                          "type": "theme-cssCode",
                          "label": false
                        }
                      ],
                      "key": "自定义样式"
                    },
                    {
                      "type": "collapse",
                      "headingClassName": "ae-formItemControl-header ae-Collapse-header",
                      "bodyClassName": "ae-formItemControl-body",
                      "title": "动画",
                      "body": [
                        {
                          "type": "switch",
                          "name": "animations.enter",
                          "label": "进入动画"
                        },
                        {
                          "type": "container",
                          "className": "m-b ae-ExtendMore",
                          "visibleOn": "${animations && animations.enter}",
                          "body": [
                            {
                              "type": "select",
                              "name": "animations.enter.type",
                              "selectMode": "group",
                              "options": [
                                {
                                  "label": "淡入",
                                  "children": [
                                    {
                                      "label": "淡入",
                                      "value": "fadeIn"
                                    },
                                    {
                                      "value": "fadeInDown",
                                      "label": "从上淡入"
                                    },
                                    {
                                      "value": "fadeInDownBig",
                                      "label": "从上淡入(加强效果)"
                                    },
                                    {
                                      "value": "fadeInLeft",
                                      "label": "从左淡入"
                                    },
                                    {
                                      "value": "fadeInLeftBig",
                                      "label": "从左淡入(加强效果)"
                                    },
                                    {
                                      "value": "fadeInRight",
                                      "label": "从右淡入"
                                    },
                                    {
                                      "value": "fadeInRightBig",
                                      "label": "从右淡入(加强效果)"
                                    },
                                    {
                                      "value": "fadeInUp",
                                      "label": "从下淡入"
                                    },
                                    {
                                      "value": "fadeInUpBig",
                                      "label": "从下淡入(加强效果)"
                                    }
                                  ]
                                },
                                {
                                  "label": "回弹",
                                  "children": [
                                    {
                                      "value": "backInDown",
                                      "label": "从上回弹进入"
                                    },
                                    {
                                      "value": "backInLeft",
                                      "label": "从左回弹进入"
                                    },
                                    {
                                      "value": "backInRight",
                                      "label": "从右回弹进入"
                                    },
                                    {
                                      "value": "backInUp",
                                      "label": "从下回弹进入"
                                    }
                                  ]
                                },
                                {
                                  "label": "旋转",
                                  "children": [
                                    {
                                      "value": "rotateIn",
                                      "label": "旋转进入"
                                    },
                                    {
                                      "value": "rotateInDownLeft",
                                      "label": "左上角旋转进入"
                                    },
                                    {
                                      "value": "rotateInDownRight",
                                      "label": "右上角旋转进入"
                                    },
                                    {
                                      "value": "rotateInUpLeft",
                                      "label": "左下角旋转进入"
                                    },
                                    {
                                      "value": "rotateInUpRight",
                                      "label": "右下角旋转进入"
                                    }
                                  ]
                                },
                                {
                                  "label": "滑动",
                                  "children": [
                                    {
                                      "value": "slideInUp",
                                      "label": "从下滑入"
                                    },
                                    {
                                      "value": "slideInDown",
                                      "label": "从上滑入"
                                    },
                                    {
                                      "value": "slideInLeft",
                                      "label": "从左滑入"
                                    },
                                    {
                                      "value": "slideInRight",
                                      "label": "从右滑入"
                                    }
                                  ]
                                },
                                {
                                  "label": "翻页",
                                  "children": [
                                    {
                                      "value": "flip",
                                      "label": "翻页"
                                    },
                                    {
                                      "value": "flipInY",
                                      "label": "水平翻页"
                                    },
                                    {
                                      "value": "flipInX",
                                      "label": "垂直翻页"
                                    }
                                  ]
                                },
                                {
                                  "label": "弹跳",
                                  "children": [
                                    {
                                      "value": "bounceIn",
                                      "label": "弹跳进入"
                                    },
                                    {
                                      "value": "bounceInDown",
                                      "label": "从上弹跳进入"
                                    },
                                    {
                                      "value": "bounceInLeft",
                                      "label": "从左弹跳进入"
                                    },
                                    {
                                      "value": "bounceInRight",
                                      "label": "从右弹跳进入"
                                    },
                                    {
                                      "value": "bounceInUp",
                                      "label": "从下弹跳进入"
                                    }
                                  ]
                                },
                                {
                                  "label": "缩放",
                                  "children": [
                                    {
                                      "value": "zoomIn",
                                      "label": "缩放进入"
                                    },
                                    {
                                      "value": "zoomInDown",
                                      "label": "从上缩放进入"
                                    },
                                    {
                                      "value": "zoomInLeft",
                                      "label": "从左缩放进入"
                                    },
                                    {
                                      "value": "zoomInRight",
                                      "label": "从右缩放进入"
                                    },
                                    {
                                      "value": "zoomInUp",
                                      "label": "从下缩放进入"
                                    }
                                  ]
                                },
                                {
                                  "label": "其他",
                                  "children": [
                                    {
                                      "value": "lightSpeedInLeft",
                                      "label": "从左光速进入"
                                    },
                                    {
                                      "value": "lightSpeedInRight",
                                      "label": "从右光速进入"
                                    },
                                    {
                                      "value": "rollIn",
                                      "label": "滚动进入"
                                    }
                                  ]
                                }
                              ],
                              "label": "level",
                              "selectFirst": true
                            },
                            {
                              "type": "input-number",
                              "name": "animations.enter.duration",
                              "label": "持续",
                              "value": 1,
                              "suffix": "秒",
                              "min": 0,
                              "precision": 3
                            },
                            {
                              "label": "延迟",
                              "type": "input-number",
                              "name": "animations.enter.delay",
                              "value": 0,
                              "suffix": "秒",
                              "precision": 3
                            }
                          ]
                        },
                        {
                          "type": "button",
                          "visibleOn": "${animations && animations.enter}",
                          "className": "m-b",
                          "block": true,
                          "level": "enhance",
                          "size": "sm",
                          "label": "播放"
                        },
                        {
                          "type": "switch",
                          "name": "animations.attention",
                          "label": "强调动画"
                        },
                        {
                          "type": "container",
                          "className": "m-b ae-ExtendMore",
                          "visibleOn": "${animations && animations.attention}",
                          "body": [
                            {
                              "type": "select",
                              "name": "animations.attention.type",
                              "selectMode": "group",
                              "options": [
                                {
                                  "label": "弹跳",
                                  "value": "bounce"
                                },
                                {
                                  "label": "闪烁",
                                  "value": "flash"
                                },
                                {
                                  "value": "headShake",
                                  "label": "摇头"
                                },
                                {
                                  "value": "heartBeat",
                                  "label": "心跳"
                                },
                                {
                                  "value": "jello",
                                  "label": "果冻"
                                },
                                {
                                  "label": "跳动",
                                  "value": "pulse"
                                },
                                {
                                  "label": "摇摆",
                                  "value": "swing"
                                },
                                {
                                  "label": "震动",
                                  "value": "tada"
                                },
                                {
                                  "label": "晃动",
                                  "value": "wobble"
                                },
                                {
                                  "label": "抖动",
                                  "value": "shake"
                                },
                                {
                                  "value": "shakeX",
                                  "label": "水平抖动"
                                },
                                {
                                  "value": "shakeY",
                                  "label": "垂直抖动"
                                },
                                {
                                  "value": "rubberBand",
                                  "label": "橡皮筋"
                                }
                              ],
                              "label": "level",
                              "selectFirst": true
                            },
                            {
                              "type": "input-number",
                              "name": "animations.attention.duration",
                              "label": "持续",
                              "value": 1,
                              "suffix": "秒",
                              "min": 0,
                              "precision": 3
                            },
                            {
                              "label": "延迟",
                              "type": "input-number",
                              "name": "animations.attention.delay",
                              "value": 0,
                              "suffix": "秒",
                              "precision": 3
                            },
                            {
                              "label": "重复",
                              "type": "select",
                              "name": "animations.attention.repeat",
                              "value": "infinite",
                              "options": [
                                {
                                  "label": 1,
                                  "value": 1
                                },
                                {
                                  "label": 2,
                                  "value": 2
                                },
                                {
                                  "label": 3,
                                  "value": 3
                                },
                                {
                                  "label": 4,
                                  "value": 4
                                },
                                {
                                  "label": 5,
                                  "value": 5
                                },
                                {
                                  "label": 6,
                                  "value": 6
                                },
                                {
                                  "label": 7,
                                  "value": 7
                                },
                                {
                                  "label": 8,
                                  "value": 8
                                },
                                {
                                  "label": 9,
                                  "value": 9
                                },
                                {
                                  "label": 10,
                                  "value": 10
                                },
                                {
                                  "label": "无限",
                                  "value": "infinite"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "button",
                          "visibleOn": "${animations && animations.attention}",
                          "className": "m-b",
                          "block": true,
                          "level": "enhance",
                          "size": "sm",
                          "label": "播放"
                        },
                        {
                          "type": "switch",
                          "name": "animations.exit",
                          "label": "退出动画"
                        },
                        {
                          "type": "container",
                          "className": "m-b ae-ExtendMore",
                          "visibleOn": "${animations && animations.exit}",
                          "body": [
                            {
                              "type": "select",
                              "name": "animations.exit.type",
                              "selectMode": "group",
                              "options": [
                                {
                                  "label": "淡出",
                                  "children": [
                                    {
                                      "label": "淡出",
                                      "value": "fadeOut"
                                    },
                                    {
                                      "value": "fadeOutDown",
                                      "label": "向下淡出"
                                    },
                                    {
                                      "value": "fadeOutDownBig",
                                      "label": "向下淡出(加强效果)"
                                    },
                                    {
                                      "value": "fadeOutLeft",
                                      "label": "向左淡出"
                                    },
                                    {
                                      "value": "fadeOutLeftBig",
                                      "label": "向左淡出(加强效果)"
                                    },
                                    {
                                      "value": "fadeOutRight",
                                      "label": "向右淡出"
                                    },
                                    {
                                      "value": "fadeOutRightBig",
                                      "label": "向右淡出(加强效果)"
                                    },
                                    {
                                      "value": "fadeOutUp",
                                      "label": "向上淡出"
                                    },
                                    {
                                      "value": "fadeOutUpBig",
                                      "label": "向上淡出(加强效果)"
                                    }
                                  ]
                                },
                                {
                                  "label": "回弹",
                                  "children": [
                                    {
                                      "value": "backOutDown",
                                      "label": "向下回弹退出"
                                    },
                                    {
                                      "value": "backOutLeft",
                                      "label": "向左回弹退出"
                                    },
                                    {
                                      "value": "backOutRight",
                                      "label": "向右回弹退出"
                                    },
                                    {
                                      "value": "backOutUp",
                                      "label": "向上回弹退出"
                                    }
                                  ]
                                },
                                {
                                  "label": "旋转",
                                  "children": [
                                    {
                                      "value": "rotateOut",
                                      "label": "旋转退出"
                                    },
                                    {
                                      "value": "rotateOutDownLeft",
                                      "label": "左上角旋转退出"
                                    },
                                    {
                                      "value": "rotateOutDownRight",
                                      "label": "右上角旋转退出"
                                    },
                                    {
                                      "value": "rotateOutUpLeft",
                                      "label": "左下角旋转退出"
                                    },
                                    {
                                      "value": "rotateOutUpRight",
                                      "label": "右下角旋转退出"
                                    }
                                  ]
                                },
                                {
                                  "label": "滑动",
                                  "children": [
                                    {
                                      "value": "slideOutUp",
                                      "label": "向上滑入"
                                    },
                                    {
                                      "value": "slideOutDown",
                                      "label": "向下滑入"
                                    },
                                    {
                                      "value": "slideOutLeft",
                                      "label": "向左滑入"
                                    },
                                    {
                                      "value": "slideOutRight",
                                      "label": "向右滑入"
                                    }
                                  ]
                                },
                                {
                                  "label": "翻页",
                                  "children": [
                                    {
                                      "value": "flipOutY",
                                      "label": "水平翻页"
                                    },
                                    {
                                      "value": "flipOutX",
                                      "label": "垂直翻页"
                                    }
                                  ]
                                },
                                {
                                  "label": "弹跳",
                                  "children": [
                                    {
                                      "value": "bounceOut",
                                      "label": "弹跳退出"
                                    },
                                    {
                                      "value": "bounceOutDown",
                                      "label": "向下弹跳退出"
                                    },
                                    {
                                      "value": "bounceOutLeft",
                                      "label": "向左弹跳退出"
                                    },
                                    {
                                      "value": "bounceOutRight",
                                      "label": "向右弹跳退出"
                                    },
                                    {
                                      "value": "bounceOutUp",
                                      "label": "向上弹跳退出"
                                    }
                                  ]
                                },
                                {
                                  "label": "缩放",
                                  "children": [
                                    {
                                      "value": "zoomOut",
                                      "label": "缩放退出"
                                    },
                                    {
                                      "value": "zoomOutDown",
                                      "label": "向上缩放退出"
                                    },
                                    {
                                      "value": "zoomOutLeft",
                                      "label": "向左缩放退出"
                                    },
                                    {
                                      "value": "zoomOutRight",
                                      "label": "向右缩放退出"
                                    },
                                    {
                                      "value": "zoomOutUp",
                                      "label": "向下缩放退出"
                                    }
                                  ]
                                },
                                {
                                  "label": "其他",
                                  "children": [
                                    {
                                      "value": "lightSpeedOutLeft",
                                      "label": "向左光速退出"
                                    },
                                    {
                                      "value": "lightSpeedOutRight",
                                      "label": "向右光速退出"
                                    },
                                    {
                                      "value": "rollOut",
                                      "label": "滚动退出"
                                    }
                                  ]
                                }
                              ],
                              "label": "level",
                              "selectFirst": true
                            },
                            {
                              "type": "input-number",
                              "name": "animations.exit.duration",
                              "label": "持续",
                              "value": 1,
                              "suffix": "秒",
                              "min": 0,
                              "precision": 3
                            },
                            {
                              "label": "延迟",
                              "type": "input-number",
                              "name": "animations.exit.delay",
                              "value": 0,
                              "suffix": "秒",
                              "precision": 3
                            }
                          ]
                        },
                        {
                          "type": "button",
                          "visibleOn": "${animations && animations.exit}",
                          "className": "m-b",
                          "block": true,
                          "level": "enhance",
                          "size": "sm",
                          "label": "播放"
                        }
                      ],
                      "collapsed": false,
                      "key": "动画"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "overrides": {},
      "tdVRendererConfig": {
        "panelTitle": "单元格"
      },
      "trVRendererConfig": {
        "panelTitle": " 行"
      },
      "order": 0
    },
    "order": 0
  },
  {
    "name": "Web Component",
    "icon": "fa fa-square-o",
    "description": "用于渲染 Web Component 组件",
    "previewSchema": {
      "type": "web-component",
      "tag": "web-component-demo"
    },
    "tags": [
      "功能"
    ],
    "docLink": "/amis/zh-CN/components/web-component",
    "scaffold": {
      "type": "web-component",
      "tag": "web-component-demo"
    },
    "isBaseComponent": true,
    "pluginIcon": "web-component-plugin",
    "rendererName": "web-component",
    "id": "32a7e3177d51",
    "plugin": {
      "rendererName": "web-component",
      "$schema": "/schemas/WebComponentSchema.json",
      "name": "Web Component",
      "isBaseComponent": true,
      "description": "用于渲染 Web Component 组件",
      "docLink": "/amis/zh-CN/components/web-component",
      "icon": "fa fa-square-o",
      "pluginIcon": "web-component-plugin",
      "panelTitle": "包裹",
      "notRenderFormZone": true,
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "audio",
    "icon": "fa fa-music",
    "description": "音频控件，可以用来播放各种音频文件。",
    "previewSchema": {
      "type": "audio",
      "autoPlay": false,
      "src": ""
    },
    "tags": [
      "audio"
    ],
    "docLink": "/amis/zh-CN/components/audio",
    "scaffold": {
      "type": "audio",
      "autoPlay": false,
      "src": ""
    },
    "isBaseComponent": true,
    "pluginIcon": "audio-plugin",
    "rendererName": "audio",
    "id": "9937072769e3",
    "plugin": {
      "rendererName": "audio",
      "$schema": "/schemas/AudioSchema.json",
      "name": "audio",
      "isBaseComponent": true,
      "description": "音频控件，可以用来播放各种音频文件。",
      "docLink": "/amis/zh-CN/components/audio",
      "icon": "fa fa-music",
      "pluginIcon": "audio-plugin",
      "panelTitle": "音频",
      "order": 0
    },
    "order": 0
  },
  {
    "name": "video",
    "icon": "fa fa-video-camera",
    "description": "视频控件，可以用来播放各种视频文件，包括 flv 和 hls 格式。",
    "previewSchema": {
      "type": "video",
      "autoPlay": false,
      "src": "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      "poster": "data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E"
    },
    "tags": [
      "功能"
    ],
    "docLink": "/amis/zh-CN/components/video",
    "scaffold": {
      "type": "video",
      "autoPlay": false,
      "src": "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      "poster": "data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E"
    },
    "isBaseComponent": true,
    "pluginIcon": "video-plugin",
    "rendererName": "video",
    "id": "2280b685b7c9",
    "plugin": {
      "rendererName": "video",
      "$schema": "/schemas/VideoSchema.json",
      "name": "video",
      "isBaseComponent": true,
      "description": "视频控件，可以用来播放各种视频文件，包括 flv 和 hls 格式。",
      "docLink": "/amis/zh-CN/components/video",
      "icon": "fa fa-video-camera",
      "pluginIcon": "video-plugin",
      "panelTitle": "视频",
      "panelBody": [
        {
          "type": "tabs",
          "tabsMode": "line",
          "className": "editor-prop-config-tabs",
          "linksClassName": "editor-prop-config-tabs-links aa",
          "contentClassName": "no-border editor-prop-config-tabs-cont hoverShowScrollBar",
          "tabs": [
            {
              "title": "常规",
              "body": [
                {
                  "type": "select",
                  "label": {
                    "type": "tooltip-wrapper",
                    "tooltip": "Can be set to upper left corner, upper right corner, lower right corner, lower left corner, default is lower right corner",
                    "tooltipTheme": "dark",
                    "placement": "top",
                    "tooltipStyle": {
                      "fontSize": "12px"
                    },
                    "className": "ae-formItemControl-label-tip",
                    "body": "Reference position"
                  },
                  "name": "originPosition",
                  "value": "left-top",
                  "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
                  "options": [
                    {
                      "label": "top left",
                      "value": "left-top"
                    },
                    {
                      "label": "top right",
                      "value": "right-top"
                    },
                    {
                      "label": "bottom right (default)",
                      "value": "right-bottom"
                    },
                    {
                      "label": "bottom left",
                      "value": "left-bottom"
                    }
                  ]
                },
                {
                  "name": "src",
                  "type": "input-text",
                  "label": "视频地址",
                  "description": "可以写静态值，也可以用变量取比如：<code>\\${videoSrc}</code>"
                },
                {
                  "name": "poster",
                  "type": "input-text",
                  "label": "视频封面图片地址",
                  "description": "可以写静态值，也可以用变量取比如：<code>\\${videoPoster}</code>"
                },
                {
                  "type": "switch",
                  "mode": "horizontal",
                  "inputClassName": "is-inline ",
                  "name": "autoPlay",
                  "label": "自动播放"
                },
                {
                  "type": "switch",
                  "mode": "horizontal",
                  "inputClassName": "is-inline ",
                  "name": "muted",
                  "label": "静音"
                },
                {
                  "type": "switch",
                  "mode": "horizontal",
                  "inputClassName": "is-inline ",
                  "name": "isLive",
                  "label": "直播流",
                  "labelRemark": {
                    "className": "m-l-xs",
                    "trigger": "click",
                    "rootClose": true,
                    "placement": "left",
                    "content": "如果是直播流，请勾选，否则有可能不能正常播放。"
                  }
                }
              ]
            },
            {
              "title": "Appearance",
              "body": [
                {
                  "name": "aspectRatio",
                  "label": "视频比例",
                  "type": "button-group-select",
                  "size": "sm",
                  "mode": "inline",
                  "className": "block",
                  "value": "auto",
                  "options": [
                    {
                      "label": "自动",
                      "value": "auto"
                    },
                    {
                      "label": "4:3",
                      "value": "4:3"
                    },
                    {
                      "label": "16:9",
                      "value": "16:9"
                    }
                  ]
                },
                {
                  "type": "switch",
                  "mode": "horizontal",
                  "inputClassName": "is-inline ",
                  "name": "splitPoster",
                  "label": "分开显示封面"
                },
                {
                  "type": "ae-classname",
                  "name": "className",
                  "label": {
                    "type": "tooltip-wrapper",
                    "tooltip": "What are the helper class CSS class names? Please go to <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">Style Description</a>. In addition, you can add custom class names, Then add custom styles in system configuration. ",
                    "tooltipTheme": "dark",
                    "placement": "top",
                    "tooltipStyle": {
                      "fontSize": "12px"
                    },
                    "className": "ae-formItemControl-label-tip",
                    "body": "CSS class name"
                  }
                }
              ]
            },
            {
              "title": "显隐",
              "body": [
                null
              ]
            },
            {
              "title": "其他",
              "body": [
                null,
                {
                  "type": "input-text",
                  "name": "rates",
                  "label": "视频速率",
                  "multiple": true,
                  "joinValues": false,
                  "extractValue": true,
                  "options": [
                    {
                      "label": 0.5,
                      "value": 0.5
                    },
                    {
                      "label": 1,
                      "value": 1
                    },
                    {
                      "label": 1.25,
                      "value": 1.25
                    },
                    {
                      "label": 1.5,
                      "value": 1.5
                    },
                    {
                      "label": 2,
                      "value": 2
                    },
                    {
                      "label": 2.5,
                      "value": 2.5
                    },
                    {
                      "label": 3,
                      "value": 3
                    },
                    {
                      "label": 3.5,
                      "value": 3.5
                    },
                    {
                      "label": 4,
                      "value": 4
                    },
                    {
                      "label": 4.5,
                      "value": 4.5
                    },
                    {
                      "label": 5,
                      "value": 5
                    }
                  ]
                },
                {
                  "name": "frames",
                  "type": "input-text",
                  "label": "视频帧信息",
                  "description": "比如填写：<code>\\${videoFrames}</code>会在当前作用域中查找 videoFrames 变量，如果是对象，将生成视频截图列表，点击后可跳转到对应的帧。"
                }
              ]
            }
          ]
        }
      ],
      "order": 0
    },
    "order": 0
  },
  {
    "name": "Function",
    "icon": "fa fa-gears",
    "description": "通过内嵌代码来实现功能",
    "previewSchema": {
      "type": "custom",
      "html": "<div><h2>hello, world!</h2></div>",
      "onMount": "\n      const button = document.createElement('button');\n      button.innerText = '点击修改姓名';\n      button.onclick = event => {\n        event.preventDefault();\n      };\n      dom.appendChild(button);"
    },
    "tags": [
      "Function"
    ],
    "docLink": "/amis/zh-CN/components/custom",
    "scaffold": {
      "type": "custom",
      "html": "<div><h2>hello, world!</h2></div>",
      "onMount": "\n        const button = document.createElement('button');\n        button.innerText = '点击修改姓名ddd';\n        button.onclick = event => {\n          onChange('new name');\n          event.preventDefault();\n        };\n        dom.appendChild(button);"
    },
    "isBaseComponent": true,
    "pluginIcon": "custom-plugin",
    "rendererName": "custom",
    "id": "b8a325702873",
    "plugin": {
      "rendererName": "custom",
      "$schema": "/schemas/CustomSchema.json",
      "name": "Function",
      "isBaseComponent": true,
      "description": "通过内嵌代码来实现功能",
      "icon": "fa fa-gears",
      "pluginIcon": "custom-plugin",
      "docLink": "/amis/zh-CN/components/custom",
      "panelTitle": "自定义代码",
      "panelBody": [
        {
          "type": "select",
          "label": {
            "type": "tooltip-wrapper",
            "tooltip": "Can be set to upper left corner, upper right corner, lower right corner, lower left corner, default is lower right corner",
            "tooltipTheme": "dark",
            "placement": "top",
            "tooltipStyle": {
              "fontSize": "12px"
            },
            "className": "ae-formItemControl-label-tip",
            "body": "Reference position"
          },
          "name": "originPosition",
          "value": "left-top",
          "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
          "options": [
            {
              "label": "top left",
              "value": "left-top"
            },
            {
              "label": "top right",
              "value": "right-top"
            },
            {
              "label": "bottom right (default)",
              "value": "right-bottom"
            },
            {
              "label": "bottom left",
              "value": "left-bottom"
            }
          ]
        },
        {
          "collapsable": true,
          "collapsed": false,
          "title": "HTML 内容",
          "body": [
            {
              "label": "HTML 内容",
              "name": "html",
              "type": "editor",
              "allowFullscreen": true
            }
          ],
          "type": "fieldset"
        },
        {
          "collapsable": true,
          "collapsed": false,
          "title": "onMount",
          "body": [
            {
              "name": "onMount",
              "type": "editor",
              "allowFullscreen": true,
              "size": "xxl",
              "label": "onMount 代码",
              "options": {
                "lineNumbers": "off",
                "glyphMargin": false,
                "lineDecorationsWidth": 0,
                "lineNumbersMinChars": 0
              }
            }
          ],
          "type": "fieldset"
        },
        {
          "collapsable": true,
          "collapsed": false,
          "title": "onUpdate",
          "body": [
            {
              "name": "onUpdate",
              "type": "editor",
              "allowFullscreen": true,
              "size": "xxl",
              "label": "onUpdate 代码"
            }
          ],
          "type": "fieldset"
        },
        {
          "collapsable": true,
          "collapsed": false,
          "title": "onUnmount",
          "body": [
            {
              "name": "onUnmount",
              "type": "editor",
              "allowFullscreen": true,
              "size": "xxl",
              "label": "onUnmount 代码"
            }
          ],
          "type": "fieldset"
        }
      ],
      "order": 0
    },
    "order": 0
  },
  {
    "searchKeywords": "任务操作集合",
    "name": "tasks",
    "icon": "",
    "description": "用来做异步任务呈现或者操作。",
    "previewSchema": {
      "type": "tasks",
      "name": "tasks",
      "items": [
        {
          "label": "hive 任务",
          "key": "hive",
          "status": 4,
          "remark": "查看详情<a target=\"_blank\" href=\"http://www.baidu.com\">日志</a>。"
        },
        {
          "label": "小流量",
          "key": "partial",
          "status": 4
        },
        {
          "label": "全量",
          "key": "full",
          "status": 4
        }
      ]
    },
    "tags": [
      "功能"
    ],
    "docLink": "/amis/zh-CN/components/tasks",
    "scaffold": {
      "type": "tasks",
      "name": "tasks"
    },
    "isBaseComponent": true,
    "pluginIcon": "tasks-plugin",
    "rendererName": "tasks",
    "id": "19b6cca1f87b",
    "plugin": {
      "rendererName": "tasks",
      "$schema": "/schemas/TasksSchema.json",
      "name": "tasks",
      "isBaseComponent": true,
      "description": "用来做异步任务呈现或者操作。",
      "searchKeywords": "任务操作集合",
      "docLink": "/amis/zh-CN/components/tasks",
      "icon": "",
      "pluginIcon": "tasks-plugin",
      "panelTitle": "异步任务",
      "order": 0
    },
    "order": 0
  },
  {
    "searchKeywords": "循环渲染器",
    "name": "For Each",
    "icon": "fa fa-repeat",
    "description": "功能渲染器，可以基于现有变量循环输出渲染器。",
    "previewSchema": {
      "type": "each",
      "name": "",
      "items": {
        "type": "container",
        "body": [
          {
            "type": "container",
            "body": [
              {
                "type": "icon",
                "icon": "fa fa-plane",
                "vendor": "",
                "themeCss": {
                  "className": {
                    "padding-and-margin:default": {
                      "marginRight": "4px"
                    },
                    "font": {
                      "color": "#2856ad",
                      "fontSize": "20px"
                    }
                  }
                },
                "id": "u:7fb7aa9c1c43"
              },
              {
                "type": "tpl",
                "style": {},
                "tpl": "回访数量TOP1",
                "inline": true,
                "wrapperComponent": "",
                "themeCss": {
                  "baseControlClassName": {
                    "font:default": {
                      "fontWeight": "var(--fonts-weight-3)",
                      "fontSize": "16px",
                      "color": "var(--colors-brand-6)"
                    }
                  }
                },
                "id": "u:5b5f4735dcb0"
              }
            ],
            "style": {
              "position": "static",
              "display": "flex",
              "flexWrap": "nowrap",
              "justifyContent": "flex-start",
              "alignItems": "center"
            },
            "wrapperBody": false,
            "isFixedHeight": false,
            "isFixedWidth": false,
            "themeCss": {
              "baseControlClassName": {
                "padding-and-margin:default": {
                  "marginBottom": "6px"
                }
              }
            },
            "id": "u:ee96c8898ee8"
          },
          {
            "type": "container",
            "body": [
              {
                "type": "tpl",
                "tpl": "北京分公司",
                "inline": true,
                "wrapperComponent": "",
                "style": {},
                "themeCss": {
                  "baseControlClassName": {
                    "font:default": {
                      "fontSize": "var(--fonts-size-4)",
                      "color": "var(--colors-neutral-text-2)",
                      "fontWeight": "var(--fonts-weight-3)",
                      "font-family": "-apple-system"
                    }
                  }
                },
                "id": "u:d7c386d27b64"
              }
            ],
            "style": {
              "position": "static",
              "display": "block"
            },
            "wrapperBody": false,
            "id": "u:ba92a34b6492"
          }
        ],
        "size": "none",
        "style": {
          "position": "static",
          "display": "block",
          "flex": "0 0 150px",
          "flexBasis": "250px",
          "overflowX": "auto",
          "overflowY": "auto"
        },
        "wrapperBody": false,
        "isFixedHeight": false,
        "themeCss": {
          "baseControlClassName": {
            "boxShadow:default": " 0px 0px 8px 0px rgba(3, 3, 3, 0.1)",
            "radius:default": {
              "top-left-border-radius": "var(--borders-radius-3)",
              "top-right-border-radius": "var(--borders-radius-3)",
              "bottom-left-border-radius": "var(--borders-radius-3)",
              "bottom-right-border-radius": "var(--borders-radius-3)"
            },
            "padding-and-margin:default": {
              "marginRight": "20px",
              "paddingTop": "20px",
              "paddingRight": "15px",
              "paddingBottom": "20px",
              "paddingLeft": "15px"
            }
          }
        },
        "id": "u:7484a2c497ed"
      },
      "placeholder": "",
      "style": {
        "position": "static",
        "display": "flex",
        "flexWrap": "nowrap",
        "justifyContent": "flex-start",
        "alignItems": "center",
        "marginTop": "10px",
        "marginBottom": "10px",
        "transform": "scale(0.6)",
        "width": "600px",
        "transformOrigin": "left top"
      },
      "isFixedHeight": false,
      "isFixedWidth": false,
      "size": "none",
      "id": "u:330fe2b1f73e",
      "value": [
        "a",
        "b"
      ]
    },
    "tags": [
      "功能"
    ],
    "docLink": "/amis/zh-CN/components/each",
    "scaffold": {
      "type": "each",
      "name": "",
      "placeholder": "",
      "style": {
        "position": "static",
        "display": "flex",
        "flexWrap": "nowrap",
        "justifyContent": "flex-start",
        "alignItems": "center",
        "marginTop": "10px",
        "marginBottom": "10px"
      },
      "isFixedHeight": false,
      "isFixedWidth": false,
      "size": "none",
      "id": "u:330fe2b1f73e"
    },
    "isBaseComponent": true,
    "pluginIcon": "each-plugin",
    "rendererName": "each",
    "id": "badad6626d84",
    "plugin": {
      "rendererName": "each",
      "$schema": "/schemas/EachSchema.json",
      "name": "For Each",
      "isBaseComponent": true,
      "isListComponent": true,
      "memberImmutable": true,
      "description": "功能渲染器，可以基于现有变量循环输出渲染器。",
      "searchKeywords": "循环渲染器",
      "docLink": "/amis/zh-CN/components/each",
      "icon": "fa fa-repeat",
      "pluginIcon": "each-plugin",
      "panelTitle": "循环",
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "property",
    "icon": "fa fa-list",
    "description": "Properties表",
    "previewSchema": {
      "type": "property",
      "title": "机器配置",
      "items": [
        {
          "label": "cpu",
          "content": "1 core"
        },
        {
          "label": "memory",
          "content": "4G"
        },
        {
          "label": "disk",
          "content": "80G"
        },
        {
          "label": "network",
          "content": "4M",
          "span": 2
        },
        {
          "label": "IDC",
          "content": "beijing"
        },
        {
          "label": "Note",
          "content": "其它说明",
          "span": 3
        }
      ]
    },
    "tags": [
      "功能"
    ],
    "docLink": "/amis/zh-CN/components/property",
    "scaffold": {
      "type": "property",
      "title": "机器配置"
    },
    "isBaseComponent": true,
    "pluginIcon": "property-sheet-plugin",
    "rendererName": "property",
    "id": "e21675df049d",
    "plugin": {
      "rendererName": "property",
      "$schema": "/schemas/PropertySchema.json",
      "name": "property",
      "isBaseComponent": true,
      "icon": "fa fa-list",
      "pluginIcon": "property-sheet-plugin",
      "description": "Properties表",
      "docLink": "/amis/zh-CN/components/property",
      "panelTitle": "Properties表",
      "panelBody": [
        {
          "type": "tabs",
          "tabsMode": "line",
          "className": "editor-prop-config-tabs",
          "linksClassName": "editor-prop-config-tabs-links aa",
          "contentClassName": "no-border editor-prop-config-tabs-cont hoverShowScrollBar",
          "tabs": [
            {
              "title": "常规",
              "body": [
                {
                  "type": "select",
                  "label": {
                    "type": "tooltip-wrapper",
                    "tooltip": "Can be set to upper left corner, upper right corner, lower right corner, lower left corner, default is lower right corner",
                    "tooltipTheme": "dark",
                    "placement": "top",
                    "tooltipStyle": {
                      "fontSize": "12px"
                    },
                    "className": "ae-formItemControl-label-tip",
                    "body": "Reference position"
                  },
                  "name": "originPosition",
                  "value": "left-top",
                  "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
                  "options": [
                    {
                      "label": "top left",
                      "value": "left-top"
                    },
                    {
                      "label": "top right",
                      "value": "right-top"
                    },
                    {
                      "label": "bottom right (default)",
                      "value": "right-bottom"
                    },
                    {
                      "label": "bottom left",
                      "value": "left-bottom"
                    }
                  ]
                },
                {
                  "label": "title",
                  "type": "input-text",
                  "name": "title"
                },
                {
                  "label": "每行显示几列",
                  "type": "input-number",
                  "value": 3,
                  "name": "column"
                },
                {
                  "type": "radios",
                  "name": "mode",
                  "inline": true,
                  "value": "table",
                  "label": "显示模式",
                  "options": [
                    "table",
                    "simple"
                  ]
                },
                {
                  "label": "分隔符",
                  "type": "input-text",
                  "name": "separator",
                  "visibleOn": "this.mode === \"simple\""
                },
                {
                  "label": "Properties取自变量",
                  "type": "input-text",
                  "name": "source"
                },
                {
                  "label": "Properties列表",
                  "name": "items",
                  "type": "combo",
                  "multiple": true,
                  "multiLine": true,
                  "draggable": true,
                  "addButtonText": "新增",
                  "scaffold": {
                    "label": "",
                    "content": "",
                    "span": 1
                  },
                  "items": [
                    {
                      "type": "input-text",
                      "mode": "inline",
                      "size": "sm",
                      "label": "Properties name",
                      "name": "label"
                    },
                    {
                      "type": "input-text",
                      "mode": "inline",
                      "size": "sm",
                      "label": "Properties值",
                      "name": "content"
                    },
                    {
                      "type": "input-number",
                      "mode": "inline",
                      "size": "sm",
                      "label": "跨几列",
                      "value": 1,
                      "name": "span"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Appearance",
              "body": [
                {
                  "type": "ae-classname",
                  "name": "className",
                  "label": {
                    "type": "tooltip-wrapper",
                    "tooltip": "What are the helper class CSS class names? Please go to <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">Style Description</a>. In addition, you can add custom class names, Then add custom styles in system configuration. ",
                    "tooltipTheme": "dark",
                    "placement": "top",
                    "tooltipStyle": {
                      "fontSize": "12px"
                    },
                    "className": "ae-formItemControl-label-tip",
                    "body": "CSS class name"
                  }
                }
              ]
            },
            {
              "title": "显隐",
              "body": [
                null,
                null
              ]
            }
          ]
        }
      ],
      "order": 0
    },
    "order": 0
  },
  {
    "name": "iFrame",
    "icon": "fa fa-window-maximize",
    "description": "可以用来嵌入现有页面。",
    "previewSchema": {
      "type": "tpl",
      "tpl": "iFrame"
    },
    "tags": [
      "功能"
    ],
    "docLink": "/amis/zh-CN/components/iframe",
    "scaffold": {
      "type": "iframe",
      "src": "//www.baidu.com"
    },
    "isBaseComponent": true,
    "pluginIcon": "iframe-plugin",
    "rendererName": "iframe",
    "id": "c470721518b0",
    "plugin": {
      "rendererName": "iframe",
      "$schema": "/schemas/IFrameSchema.json",
      "name": "iFrame",
      "isBaseComponent": true,
      "description": "可以用来嵌入现有页面。",
      "docLink": "/amis/zh-CN/components/iframe",
      "icon": "fa fa-window-maximize",
      "pluginIcon": "iframe-plugin",
      "panelTitle": "iFrame",
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "qrcode",
    "icon": "fa fa-qrcode",
    "description": "可以用来生成二维码",
    "previewSchema": {
      "type": "qrcode",
      "value": "https://amis.baidu.com"
    },
    "tags": [
      "功能"
    ],
    "docLink": "/amis/zh-CN/components/qrcode",
    "scaffold": {
      "type": "qrcode",
      "value": "https://amis.baidu.com"
    },
    "isBaseComponent": true,
    "pluginIcon": "qrcode-plugin",
    "rendererName": "qrcode",
    "id": "3f155fee61ab",
    "plugin": {
      "rendererName": "qrcode",
      "$schema": "/schemas/QRCodeSchema.json",
      "name": "qrcode",
      "isBaseComponent": true,
      "description": "可以用来生成二维码",
      "docLink": "/amis/zh-CN/components/qrcode",
      "icon": "fa fa-qrcode",
      "pluginIcon": "qrcode-plugin",
      "actions": [
        {
          "actionType": "saveAs",
          "actionLabel": "下载",
          "description": "触发二维码下载"
        }
      ],
      "panelTitle": "二维码",
      "panelBody": [
        {
          "type": "tabs",
          "tabsMode": "line",
          "className": "editor-prop-config-tabs",
          "linksClassName": "editor-prop-config-tabs-links aa",
          "contentClassName": "no-border editor-prop-config-tabs-cont hoverShowScrollBar",
          "tabs": [
            {
              "title": "常规",
              "body": [
                {
                  "type": "select",
                  "label": {
                    "type": "tooltip-wrapper",
                    "tooltip": "Can be set to upper left corner, upper right corner, lower right corner, lower left corner, default is lower right corner",
                    "tooltipTheme": "dark",
                    "placement": "top",
                    "tooltipStyle": {
                      "fontSize": "12px"
                    },
                    "className": "ae-formItemControl-label-tip",
                    "body": "Reference position"
                  },
                  "name": "originPosition",
                  "value": "left-top",
                  "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
                  "options": [
                    {
                      "label": "top left",
                      "value": "left-top"
                    },
                    {
                      "label": "top right",
                      "value": "right-top"
                    },
                    {
                      "label": "bottom right (default)",
                      "value": "right-bottom"
                    },
                    {
                      "label": "bottom left",
                      "value": "left-bottom"
                    }
                  ]
                },
                {
                  "name": "value",
                  "type": "input-text",
                  "label": "二维码值",
                  "description": "支持使用 <code>\\${xxx}</code> 来获取变量"
                },
                {
                  "name": "level",
                  "type": "select",
                  "label": "复杂度",
                  "options": [
                    {
                      "label": "L",
                      "value": "L"
                    },
                    {
                      "label": "M",
                      "value": "M"
                    },
                    {
                      "label": "Q",
                      "value": "Q"
                    },
                    {
                      "label": "H",
                      "value": "H"
                    }
                  ]
                }
              ]
            },
            {
              "title": "Appearance",
              "body": [
                {
                  "name": "codeSize",
                  "type": "input-number",
                  "label": "宽高值"
                },
                {
                  "name": "backgroundColor",
                  "type": "input-color",
                  "label": "背景色"
                },
                {
                  "name": "foregroundColor",
                  "type": "input-color",
                  "label": "前景色"
                },
                {
                  "type": "ae-classname",
                  "name": "className",
                  "label": {
                    "type": "tooltip-wrapper",
                    "tooltip": "What are the helper class CSS class names? Please go to <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">Style Description</a>. In addition, you can add custom class names, Then add custom styles in system configuration. ",
                    "tooltipTheme": "dark",
                    "placement": "top",
                    "tooltipStyle": {
                      "fontSize": "12px"
                    },
                    "className": "ae-formItemControl-label-tip",
                    "body": "CSS class name"
                  }
                }
              ]
            },
            {
              "title": "显隐",
              "body": [
                null,
                null
              ]
            }
          ]
        }
      ],
      "order": 0
    },
    "order": 0
  },
  {
    "name": "Icon",
    "icon": "fa fa-calendar",
    "description": "用来展示一个图标，你可以配置不同的图标样式。",
    "previewSchema": {
      "type": "icon",
      "icon": "fa fa-spotify",
      "vendor": ""
    },
    "tags": [
      "展示"
    ],
    "docLink": "/amis/zh-CN/components/icon",
    "scaffold": {
      "type": "icon",
      "icon": "fa fa-spotify",
      "vendor": ""
    },
    "isBaseComponent": true,
    "pluginIcon": "button-plugin",
    "rendererName": "icon",
    "id": "1f7ae49d7f09",
    "plugin": {
      "rendererName": "icon",
      "$schema": "/schemas/Icon.json",
      "name": "Icon",
      "isBaseComponent": true,
      "icon": "fa fa-calendar",
      "panelTitle": "Icon",
      "description": "用来展示一个图标，你可以配置不同的图标样式。",
      "docLink": "/amis/zh-CN/components/icon",
      "pluginIcon": "button-plugin",
      "events": [
        {
          "eventName": "click",
          "eventLabel": "点击",
          "description": "点击时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "mouseenter",
          "eventLabel": "鼠标移入",
          "description": "鼠标移入时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "mouseleave",
          "eventLabel": "鼠标移出",
          "description": "鼠标移出时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "link",
    "icon": "fa fa-link",
    "description": "用来展示文字链接",
    "previewSchema": {
      "type": "link",
      "value": "http://www.baidu.com/",
      "label": "link"
    },
    "tags": [
      "展示"
    ],
    "scaffold": {
      "type": "link",
      "value": "http://www.baidu.com/"
    },
    "isBaseComponent": true,
    "pluginIcon": "url-plugin",
    "rendererName": "link",
    "id": "3ab7d06d360e",
    "plugin": {
      "rendererName": "link",
      "$schema": "/schemas/LinkSchema.json",
      "name": "link",
      "isBaseComponent": true,
      "description": "用来展示文字链接",
      "icon": "fa fa-link",
      "pluginIcon": "url-plugin",
      "panelTitle": "链接",
      "panelJustify": true,
      "panelBody": [
        {
          "type": "tabs",
          "tabsMode": "line",
          "className": "editor-prop-config-tabs",
          "linksClassName": "editor-prop-config-tabs-links aa",
          "contentClassName": "no-border editor-prop-config-tabs-cont hoverShowScrollBar",
          "tabs": [
            {
              "title": "Properties",
              "body": [
                {
                  "type": "collapse-group",
                  "activeKey": [
                    "Basic",
                    null,
                    "状态"
                  ],
                  "expandIconPosition": "right",
                  "expandIcon": {
                    "type": "icon",
                    "icon": "chevron-right"
                  },
                  "className": "ae-formItemControl ae-styleControl",
                  "body": [
                    {
                      "type": "collapse",
                      "headingClassName": "ae-formItemControl-header ae-Collapse-header",
                      "bodyClassName": "ae-formItemControl-body",
                      "title": "Basic",
                      "body": [
                        {
                          "type": "select",
                          "label": {
                            "type": "tooltip-wrapper",
                            "tooltip": "Can be set to upper left corner, upper right corner, lower right corner, lower left corner, default is lower right corner",
                            "tooltipTheme": "dark",
                            "placement": "top",
                            "tooltipStyle": {
                              "fontSize": "12px"
                            },
                            "className": "ae-formItemControl-label-tip",
                            "body": "Reference position"
                          },
                          "name": "originPosition",
                          "value": "left-top",
                          "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
                          "options": [
                            {
                              "label": "top left",
                              "value": "left-top"
                            },
                            {
                              "label": "top right",
                              "value": "right-top"
                            },
                            {
                              "label": "bottom right (default)",
                              "value": "right-bottom"
                            },
                            {
                              "label": "bottom left",
                              "value": "left-bottom"
                            }
                          ]
                        },
                        {
                          "type": "group",
                          "mode": "horizontal",
                          "body": [
                            {
                              "type": "ae-formulaControl",
                              "label": {
                                "type": "tooltip-wrapper",
                                "tooltip": "支持取变量，如果已绑定字段名，可以不用设置",
                                "tooltipTheme": "dark",
                                "placement": "top",
                                "tooltipStyle": {
                                  "fontSize": "12px"
                                },
                                "className": "ae-formItemControl-label-tip",
                                "body": "目标地址"
                              },
                              "name": "href",
                              "rendererSchema": {
                                "type": "input-text"
                              },
                              "DateTimeType": 0
                            }
                          ]
                        },
                        {
                          "label": {
                            "type": "tooltip-wrapper",
                            "tooltip": "不填写时，自动使用目标地址值",
                            "tooltipTheme": "dark",
                            "placement": "top",
                            "tooltipStyle": {
                              "fontSize": "12px"
                            },
                            "className": "ae-formItemControl-label-tip",
                            "body": "内容"
                          },
                          "type": "ae-textareaFormulaControl",
                          "mode": "normal",
                          "name": "body"
                        },
                        {
                          "type": "switch",
                          "mode": "horizontal",
                          "inputClassName": "is-inline ",
                          "name": "blank",
                          "label": "在新窗口打开"
                        },
                        {
                          "label": "左侧图标",
                          "type": "icon-picker",
                          "name": "icon",
                          "placeholder": "clickTheSelectIcon",
                          "clearable": true,
                          "description": ""
                        },
                        {
                          "label": "右侧图标",
                          "type": "icon-picker",
                          "name": "rightIcon",
                          "placeholder": "clickTheSelectIcon",
                          "clearable": true,
                          "description": ""
                        }
                      ],
                      "collapsed": false,
                      "key": "Basic"
                    },
                    {
                      "type": "collapse-group",
                      "headingClassName": "ae-formItemControl-header ae-Collapse-header",
                      "bodyClassName": "ae-formItemControl-body",
                      "activeKey": [
                        "高级设置"
                      ],
                      "expandIconPosition": "right",
                      "expandIcon": {
                        "type": "icon",
                        "icon": "chevron-right"
                      },
                      "className": "ae-formItemControl ae-styleControl",
                      "body": [
                        {
                          "type": "collapse",
                          "headingClassName": "ae-formItemControl-header ae-Collapse-header",
                          "bodyClassName": "ae-formItemControl-body",
                          "title": "高级设置",
                          "body": [
                            {
                              "name": "htmlTarget",
                              "type": "input-text",
                              "label": {
                                "type": "tooltip-wrapper",
                                "tooltip": "HTML &lt;a&gt; 元素的targetProperties，该Properties指定在何处显示链接的资源",
                                "tooltipTheme": "dark",
                                "placement": "top",
                                "tooltipStyle": {
                                  "fontSize": "12px"
                                },
                                "className": "ae-formItemControl-label-tip",
                                "body": "锚点"
                              }
                            }
                          ],
                          "collapsed": false,
                          "key": "高级设置"
                        }
                      ],
                      "collapsed": false
                    },
                    {
                      "type": "collapse",
                      "headingClassName": "ae-formItemControl-header ae-Collapse-header",
                      "bodyClassName": "ae-formItemControl-body",
                      "title": "状态",
                      "body": [
                        null,
                        null,
                        {
                          "type": "ae-StatusControl",
                          "label": "disable",
                          "mode": "normal",
                          "name": "disabled",
                          "expressionName": "disabledOn"
                        }
                      ],
                      "collapsed": false,
                      "key": "状态"
                    }
                  ]
                }
              ],
              "className": " p-none"
            },
            {
              "title": "Appearance",
              "body": [
                {
                  "type": "collapse-group",
                  "activeKey": [],
                  "expandIconPosition": "right",
                  "expandIcon": {
                    "type": "icon",
                    "icon": "chevron-right"
                  },
                  "className": "ae-formItemControl ae-styleControl",
                  "body": [
                    {
                      "type": "collapse",
                      "headingClassName": "ae-formItemControl-header ae-Collapse-header",
                      "bodyClassName": "ae-formItemControl-body",
                      "title": "CSS 类名",
                      "collapsed": true,
                      "body": [
                        {
                          "type": "ae-classname",
                          "name": "className",
                          "label": {
                            "type": "tooltip-wrapper",
                            "tooltip": "What are the helper class CSS class names? Please go to <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">Style Description</a>. In addition, you can add custom class names, Then add custom styles in system configuration. ",
                            "tooltipTheme": "dark",
                            "placement": "top",
                            "tooltipStyle": {
                              "fontSize": "12px"
                            },
                            "className": "ae-formItemControl-label-tip",
                            "body": "外层"
                          }
                        },
                        {
                          "type": "ae-classname",
                          "name": "iconClassName",
                          "label": {
                            "type": "tooltip-wrapper",
                            "tooltip": "What are the helper class CSS class names? Please go to <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">Style Description</a>. In addition, you can add custom class names, Then add custom styles in system configuration. ",
                            "tooltipTheme": "dark",
                            "placement": "top",
                            "tooltipStyle": {
                              "fontSize": "12px"
                            },
                            "className": "ae-formItemControl-label-tip",
                            "body": "左侧图标"
                          },
                          "visibleOn": "this.icon"
                        },
                        {
                          "type": "ae-classname",
                          "name": "rightIconClassName",
                          "label": {
                            "type": "tooltip-wrapper",
                            "tooltip": "What are the helper class CSS class names? Please go to <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">Style Description</a>. In addition, you can add custom class names, Then add custom styles in system configuration. ",
                            "tooltipTheme": "dark",
                            "placement": "top",
                            "tooltipStyle": {
                              "fontSize": "12px"
                            },
                            "className": "ae-formItemControl-label-tip",
                            "body": "右侧图标"
                          },
                          "visibleOn": "this.rightIcon"
                        }
                      ],
                      "key": "CSS 类名"
                    }
                  ]
                }
              ],
              "className": " p-none"
            }
          ]
        }
      ],
      "order": 0
    },
    "order": 0
  },
  {
    "name": "list2",
    "icon": "fa fa-window-maximize",
    "description": "功能类似于表格，但是用一个个小卡片来展示数据。当前组件需要配置数据源，不自带数据拉取，请优先使用 「CRUD」 组件。",
    "previewSchema": {
      "type": "cards",
      "columnsCount": 1,
      "card": {
        "type": "container",
        "body": [
          {
            "type": "container",
            "body": [
              {
                "type": "tpl",
                "tpl": "01",
                "inline": true,
                "wrapperComponent": "",
                "style": {},
                "themeCss": {
                  "baseControlClassName": {
                    "padding-and-margin:default": {
                      "marginRight": "10px"
                    },
                    "font:default": {
                      "color": "var(--colors-neutral-text-2)",
                      "fontSize": "var(--fonts-size-3)",
                      "fontWeight": "var(--fonts-weight-5)"
                    }
                  }
                },
                "id": "u:0597d8ab5c3a"
              },
              {
                "type": "tpl",
                "tpl": "/",
                "inline": true,
                "wrapperComponent": "",
                "style": {},
                "id": "u:95d2a3ac3e70",
                "themeCss": {
                  "baseControlClassName": {
                    "padding-and-margin:default": {
                      "marginRight": "10px"
                    },
                    "font:default": {
                      "fontSize": "var(--fonts-size-3)",
                      "color": "#cccccc"
                    }
                  }
                }
              },
              {
                "type": "container",
                "body": [
                  {
                    "type": "tpl",
                    "tpl": "3月",
                    "inline": true,
                    "wrapperComponent": "",
                    "style": {},
                    "themeCss": {
                      "baseControlClassName": {
                        "font:default": {
                          "fontSize": "var(--fonts-size-6)"
                        }
                      }
                    },
                    "id": "u:d153d5c33ebf"
                  },
                  {
                    "type": "tpl",
                    "tpl": "2023",
                    "inline": true,
                    "wrapperComponent": "",
                    "style": {},
                    "themeCss": {
                      "baseControlClassName": {
                        "font:default": {
                          "fontSize": "var(--fonts-size-6)"
                        }
                      }
                    },
                    "id": "u:4e03af905add"
                  }
                ],
                "style": {
                  "position": "static",
                  "display": "flex",
                  "flexWrap": "nowrap",
                  "flexDirection": "column",
                  "alignItems": "center",
                  "justifyContent": "center"
                },
                "wrapperBody": false,
                "isFixedHeight": false,
                "isFixedWidth": false,
                "id": "u:3e3e5dc43b6a"
              }
            ],
            "size": "none",
            "style": {
              "position": "static",
              "display": "flex",
              "flex": "1 1 auto",
              "flexGrow": 0,
              "flexBasis": "auto",
              "flexWrap": "nowrap",
              "justifyContent": "flex-start",
              "alignItems": "center"
            },
            "wrapperBody": false,
            "isFixedHeight": false,
            "isFixedWidth": false,
            "themeCss": {
              "baseControlClassName": {
                "border:default": {
                  "right-border-width": "var(--borders-width-2)",
                  "right-border-style": "var(--borders-style-2)",
                  "right-border-color": "#ececec"
                },
                "padding-and-margin:default": {
                  "paddingLeft": "20px",
                  "paddingRight": "40px",
                  "marginRight": "40px"
                }
              }
            },
            "id": "u:7a02e453c997"
          },
          {
            "type": "container",
            "body": [
              {
                "type": "tpl",
                "tpl": "列表标题",
                "inline": true,
                "wrapperComponent": "",
                "style": {},
                "maxLine": 1,
                "id": "u:105ca9cda3ef",
                "themeCss": {
                  "baseControlClassName": {
                    "padding-and-margin:default": {
                      "marginBottom": "10px"
                    },
                    "font:default": {
                      "fontSize": "var(--fonts-size-5)",
                      "color": "var(--colors-neutral-text-4)",
                      "fontWeight": "var(--fonts-weight-4)"
                    }
                  }
                }
              },
              {
                "type": "tpl",
                "tpl": "这是内容简介，可以设置显示行数",
                "inline": true,
                "wrapperComponent": "",
                "maxLine": 1,
                "style": {},
                "themeCss": {
                  "baseControlClassName": {
                    "font:default": {
                      "fontSize": "13px",
                      "color": "var(--colors-neutral-text-5)"
                    }
                  }
                },
                "id": "u:d8e3f4be33db"
              }
            ],
            "size": "none",
            "style": {
              "position": "static",
              "display": "flex",
              "flex": "1 1 auto",
              "flexGrow": 1,
              "flexBasis": "auto",
              "flexWrap": "nowrap",
              "flexDirection": "column",
              "alignItems": "flex-start"
            },
            "wrapperBody": false,
            "isFixedHeight": false,
            "isFixedWidth": false,
            "id": "u:0c0b56fd0c17"
          },
          {
            "type": "container",
            "body": [
              {
                "type": "button",
                "label": "查看详情",
                "onEvent": {
                  "click": {
                    "actions": []
                  }
                },
                "level": "default",
                "size": "default",
                "themeCss": {
                  "className": {
                    "border:default": {
                      "top-border-width": "var(--borders-width-2)",
                      "left-border-width": "var(--borders-width-2)",
                      "right-border-width": "var(--borders-width-2)",
                      "bottom-border-width": "var(--borders-width-2)",
                      "top-border-style": "var(--borders-style-2)",
                      "left-border-style": "var(--borders-style-2)",
                      "right-border-style": "var(--borders-style-2)",
                      "bottom-border-style": "var(--borders-style-2)",
                      "top-border-color": "var(--colors-brand-6)",
                      "left-border-color": "var(--colors-brand-6)",
                      "right-border-color": "var(--colors-brand-6)",
                      "bottom-border-color": "var(--colors-brand-6)"
                    },
                    "padding-and-margin:default": {
                      "paddingLeft": "20px",
                      "paddingRight": "20px"
                    },
                    "radius:default": {
                      "top-left-border-radius": "20px",
                      "top-right-border-radius": "20px",
                      "bottom-left-border-radius": "20px",
                      "bottom-right-border-radius": "20px"
                    },
                    "font:default": {
                      "color": "var(--colors-brand-6)"
                    }
                  }
                },
                "id": "u:0a2fe27eb501"
              }
            ],
            "size": "xs",
            "style": {
              "position": "static",
              "display": "flex",
              "flex": "1 1 auto",
              "flexGrow": 0,
              "flexBasis": "auto",
              "flexWrap": "nowrap",
              "flexDirection": "column",
              "justifyContent": "center"
            },
            "wrapperBody": false,
            "isFixedHeight": false,
            "isFixedWidth": false,
            "id": "u:77cb3edb2288"
          }
        ],
        "wrapperBody": false,
        "style": {
          "position": "relative",
          "display": "flex",
          "width": "100%"
        },
        "themeCss": {
          "baseControlClassName": {
            "radius:default": {
              "top-left-border-radius": "6px",
              "top-right-border-radius": "6px",
              "bottom-left-border-radius": "6px",
              "bottom-right-border-radius": "6px"
            },
            "boxShadow:default": " 0px 0px 10px 0px var(--colors-neutral-line-8)",
            "border:default": {
              "top-border-width": "var(--borders-width-1)",
              "left-border-width": "var(--borders-width-1)",
              "right-border-width": "var(--borders-width-1)",
              "bottom-border-width": "var(--borders-width-1)",
              "top-border-style": "var(--borders-style-1)",
              "left-border-style": "var(--borders-style-1)",
              "right-border-style": "var(--borders-style-1)",
              "bottom-border-style": "var(--borders-style-1)",
              "top-border-color": "#3be157",
              "left-border-color": "#3be157",
              "right-border-color": "#3be157",
              "bottom-border-color": "#3be157"
            },
            "padding-and-margin:default": {
              "paddingTop": "10px",
              "paddingRight": "10px",
              "paddingBottom": "10px",
              "paddingLeft": "10px"
            }
          }
        },
        "id": "u:bb14c60372c6"
      },
      "placeholder": "",
      "style": {
        "gutterY": 10,
        "transform": "scale(0.7)",
        "width": "1200px",
        "transformOrigin": "left top"
      },
      "id": "u:0fb820345fc1",
      "className": "text-left ",
      "items": [
        {},
        {},
        {}
      ],
      "name": "items"
    },
    "tags": [
      "展示"
    ],
    "docLink": "/amis/zh-CN/components/cards",
    "scaffold": {
      "type": "cards",
      "columnsCount": 1,
      "placeholder": "",
      "style": {
        "gutterY": 10
      },
      "id": "u:0fb820345fc1"
    },
    "isBaseComponent": true,
    "pluginIcon": "cards-plugin",
    "rendererName": "cards",
    "id": "2877ca6f4fa0",
    "plugin": {
      "rendererName": "cards",
      "$schema": "/schemas/CardsSchema.json",
      "name": "list2",
      "isBaseComponent": true,
      "isListComponent": true,
      "memberImmutable": true,
      "description": "功能类似于表格，但是用一个个小卡片来展示数据。当前组件需要配置数据源，不自带数据拉取，请优先使用 「CRUD」 组件。",
      "docLink": "/amis/zh-CN/components/cards",
      "icon": "fa fa-window-maximize",
      "pluginIcon": "cards-plugin",
      "panelTitle": "列表",
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "mapping",
    "icon": "fa fa-exchange",
    "description": "对现有值做映射展示，比如原始值是：1、2、3...，需要展示成：下线、上线、过期等等。",
    "previewSchema": {
      "type": "mapping",
      "value": 1,
      "map": {
        "1": "开心",
        "2": "愤怒",
        "3": "伤心",
        "4": "冷漠",
        "*": "一般"
      },
      "itemSchema": {
        "type": "tag",
        "label": "${item}"
      }
    },
    "tags": [
      "展示"
    ],
    "docLink": "/amis/zh-CN/components/mapping",
    "scaffold": {
      "type": "mapping",
      "value": 1
    },
    "isBaseComponent": true,
    "pluginIcon": "mapping-plugin",
    "rendererName": "mapping",
    "id": "9348ff438dc4",
    "plugin": {
      "rendererName": "mapping",
      "$schema": "/schemas/MappingSchema.json",
      "name": "mapping",
      "isBaseComponent": true,
      "description": "对现有值做映射展示，比如原始值是：1、2、3...，需要展示成：下线、上线、过期等等。",
      "docLink": "/amis/zh-CN/components/mapping",
      "icon": "fa fa-exchange",
      "pluginIcon": "mapping-plugin",
      "panelTitle": "映射",
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "avatar",
    "icon": "fa fa-user",
    "description": "用户头像",
    "previewSchema": {
      "type": "avatar",
      "showtype": "image",
      "icon": "",
      "fit": "cover",
      "style": {
        "width": 40,
        "height": 40,
        "borderRadius": 20
      }
    },
    "tags": [
      "avatar"
    ],
    "docLink": "/amis/zh-CN/components/avatar",
    "scaffold": {
      "type": "avatar",
      "showtype": "image",
      "icon": "",
      "fit": "cover"
    },
    "isBaseComponent": true,
    "pluginIcon": "avatar-plugin",
    "rendererName": "avatar",
    "id": "46d2a9f097f7",
    "plugin": {
      "rendererName": "avatar",
      "$schema": "/schemas/AvatarSchema.json",
      "name": "avatar",
      "isBaseComponent": true,
      "icon": "fa fa-user",
      "pluginIcon": "avatar-plugin",
      "description": "用户头像",
      "docLink": "/amis/zh-CN/components/avatar",
      "events": [
        {
          "eventName": "click",
          "eventLabel": "点击",
          "description": "点击时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "mouseenter",
          "eventLabel": "鼠标移入",
          "description": "鼠标移入时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "mouseleave",
          "eventLabel": "鼠标移出",
          "description": "鼠标移出时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "notRenderFormZone": true,
      "panelJustify": true,
      "panelTitle": "头像",
      "order": 0
    },
    "order": 0
  },
  {
    "name": "card",
    "icon": "",
    "description": "展示单个卡片。",
    "previewSchema": {
      "type": "card",
      "header": {
        "title": "card",
        "subTitle": "副标题"
      },
      "body": "内容",
      "actions": [
        {
          "type": "button",
          "label": "按钮",
          "actionType": "dialog",
          "dialog": {
            "title": "标题",
            "body": "内容"
          }
        }
      ]
    },
    "tags": [
      "card"
    ],
    "docLink": "/amis/zh-CN/components/card",
    "scaffold": {
      "type": "card",
      "body": "内容"
    },
    "isBaseComponent": true,
    "pluginIcon": "card-plugin",
    "rendererName": "card",
    "id": "fde0bb5e56f6",
    "plugin": {
      "rendererName": "card",
      "$schema": "/schemas/CardSchema.json",
      "name": "card",
      "isBaseComponent": true,
      "description": "展示单个卡片。",
      "docLink": "/amis/zh-CN/components/card",
      "icon": "",
      "pluginIcon": "card-plugin",
      "regions": [
        {
          "key": "body",
          "label": "内容区",
          "renderMethod": "renderBody",
          "preferTag": "展示"
        },
        {
          "key": "actions",
          "label": "按钮组",
          "renderMethod": "renderActions",
          "preferTag": "按钮"
        }
      ],
      "panelTitle": "卡片",
      "overrides": {},
      "vRendererConfig": {
        "panelTitle": "字段"
      },
      "order": 0
    },
    "order": 0
  },
  {
    "searchKeywords": "cards",
    "name": "cards",
    "icon": "fa fa-window-maximize",
    "description": "功能类似于表格，但是用一个个小卡片来展示数据。当前组件需要配置数据源，不自带数据拉取，请优先使用 「CRUD」 组件。",
    "previewSchema": {
      "type": "cards",
      "columnsCount": 2,
      "card": {
        "type": "container",
        "body": [
          {
            "type": "container",
            "body": [
              {
                "type": "icon",
                "icon": "fa fa-check",
                "vendor": "",
                "themeCss": {
                  "className": {
                    "font": {
                      "color": "var(--colors-brand-6)",
                      "fontSize": "20px"
                    },
                    "padding-and-margin:default": {
                      "marginRight": "10px"
                    }
                  }
                },
                "id": "u:c3a694c7f4e6"
              },
              {
                "type": "tpl",
                "tpl": "流水线任务实例 ",
                "inline": true,
                "wrapperComponent": "",
                "editorSetting": {
                  "mock": {}
                },
                "style": {},
                "themeCss": {
                  "baseControlClassName": {
                    "font:default": {
                      "fontSize": "var(--fonts-size-6)",
                      "color": "var(--colors-neutral-text-2)",
                      "fontWeight": "var(--fonts-weight-3)"
                    }
                  }
                },
                "id": "u:4273575e1d7b"
              }
            ],
            "style": {
              "position": "static",
              "display": "flex",
              "flexWrap": "nowrap",
              "alignItems": "center"
            },
            "wrapperBody": false,
            "isFixedHeight": false,
            "isFixedWidth": false,
            "size": "none",
            "themeCss": {
              "baseControlClassName": {
                "padding-and-margin:default": {
                  "marginBottom": "15px"
                }
              }
            },
            "id": "u:561592d2ff0a"
          },
          {
            "type": "flex",
            "className": "p-1",
            "items": [
              {
                "type": "container",
                "body": [
                  {
                    "type": "container",
                    "body": [
                      {
                        "type": "tpl",
                        "tpl": "12/",
                        "inline": true,
                        "wrapperComponent": "",
                        "style": {},
                        "themeCss": {
                          "baseControlClassName": {
                            "font:default": {
                              "fontSize": "var(--fonts-size-6)",
                              "color": "var(--colors-neutral-text-2)",
                              "fontWeight": "var(--fonts-weight-3)"
                            }
                          }
                        },
                        "id": "u:c53d2e838649"
                      },
                      {
                        "type": "tpl",
                        "tpl": "19",
                        "inline": true,
                        "wrapperComponent": "",
                        "style": {},
                        "themeCss": {
                          "baseControlClassName": {
                            "font:default": {
                              "color": "var(--colors-neutral-text-6)",
                              "fontSize": "var(--fonts-size-6)"
                            }
                          }
                        },
                        "id": "u:774766c09a3e"
                      }
                    ],
                    "style": {
                      "position": "static",
                      "display": "block",
                      "flex": "0 0 auto"
                    },
                    "wrapperBody": false,
                    "isFixedWidth": false,
                    "size": "none",
                    "themeCss": {
                      "baseControlClassName": {
                        "padding-and-margin:default": {
                          "marginTop": "var(--sizes-size-0)",
                          "marginRight": "var(--sizes-size-0)",
                          "marginBottom": "var(--sizes-size-0)",
                          "marginLeft": "var(--sizes-size-0)"
                        }
                      }
                    },
                    "id": "u:7b8d9478caf0"
                  },
                  {
                    "type": "container",
                    "body": [
                      {
                        "type": "tpl",
                        "tpl": "单元测试",
                        "inline": true,
                        "wrapperComponent": "",
                        "style": {},
                        "themeCss": {
                          "baseControlClassName": {
                            "font:default": {
                              "color": "var(--colors-neutral-text-5)"
                            }
                          }
                        },
                        "id": "u:4abe984e2cdf"
                      }
                    ],
                    "style": {
                      "position": "static",
                      "display": "flex",
                      "flexWrap": "nowrap",
                      "flexDirection": "column",
                      "justifyContent": "center",
                      "alignItems": "center",
                      "flex": "0 0 auto"
                    },
                    "wrapperBody": false,
                    "isFixedHeight": false,
                    "isFixedWidth": false,
                    "size": "none",
                    "id": "u:10268e055c48"
                  }
                ],
                "size": "xs",
                "style": {
                  "position": "static",
                  "display": "flex",
                  "flex": "1 1 auto",
                  "flexGrow": 1,
                  "flexBasis": "auto",
                  "flexWrap": "nowrap",
                  "flexDirection": "column",
                  "justifyContent": "center",
                  "alignItems": "center"
                },
                "wrapperBody": false,
                "isFixedHeight": false,
                "isFixedWidth": false,
                "id": "u:a35d9094c57a"
              },
              {
                "type": "container",
                "body": [
                  {
                    "type": "tpl",
                    "tpl": "100%",
                    "inline": true,
                    "wrapperComponent": "",
                    "style": {},
                    "themeCss": {
                      "baseControlClassName": {
                        "font:default": {
                          "fontSize": "var(--fonts-size-6)",
                          "color": "var(--colors-neutral-text-2)",
                          "fontWeight": "var(--fonts-weight-3)"
                        }
                      }
                    },
                    "id": "u:dfa080010477"
                  },
                  {
                    "type": "tpl",
                    "tpl": "通过率",
                    "inline": true,
                    "wrapperComponent": "",
                    "style": {},
                    "themeCss": {
                      "baseControlClassName": {
                        "font:default": {
                          "color": "var(--colors-neutral-text-5)"
                        }
                      }
                    },
                    "id": "u:ee6afab8bebf"
                  }
                ],
                "size": "xs",
                "style": {
                  "position": "static",
                  "display": "flex",
                  "flex": "1 1 auto",
                  "flexGrow": 1,
                  "flexBasis": "auto",
                  "flexWrap": "nowrap",
                  "flexDirection": "column",
                  "justifyContent": "flex-start",
                  "alignItems": "center"
                },
                "wrapperBody": false,
                "isFixedHeight": false,
                "isFixedWidth": false,
                "id": "u:8d1113a60808"
              },
              {
                "type": "container",
                "body": [
                  {
                    "type": "tpl",
                    "tpl": "99.9%",
                    "inline": true,
                    "wrapperComponent": "",
                    "style": {},
                    "themeCss": {
                      "baseControlClassName": {
                        "font:default": {
                          "fontSize": "var(--fonts-size-6)",
                          "color": "var(--colors-neutral-text-2)",
                          "fontWeight": "var(--fonts-weight-3)"
                        }
                      }
                    },
                    "id": "u:538523c38973"
                  },
                  {
                    "type": "tpl",
                    "tpl": "任务实例",
                    "inline": true,
                    "wrapperComponent": "",
                    "style": {},
                    "themeCss": {
                      "baseControlClassName": {
                        "font:default": {
                          "color": "var(--colors-neutral-text-5)"
                        }
                      }
                    },
                    "id": "u:4b2f8311836c"
                  }
                ],
                "size": "xs",
                "style": {
                  "position": "static",
                  "display": "flex",
                  "flex": "1 1 auto",
                  "flexGrow": 1,
                  "flexBasis": "auto",
                  "flexWrap": "nowrap",
                  "justifyContent": "center",
                  "alignItems": "center",
                  "flexDirection": "column"
                },
                "wrapperBody": false,
                "isFixedHeight": false,
                "isFixedWidth": false,
                "id": "u:7543aef28c33"
              }
            ],
            "style": {
              "position": "relative"
            },
            "id": "u:0f802c8852fd"
          },
          {
            "type": "container",
            "body": [
              {
                "type": "tpl",
                "tpl": "报告",
                "inline": true,
                "wrapperComponent": "",
                "style": {},
                "themeCss": {
                  "baseControlClassName": {
                    "font:default": {
                      "fontSize": "14px",
                      "color": "var(--colors-neutral-text-5)"
                    }
                  }
                },
                "id": "u:ec80d1113007"
              },
              {
                "type": "tpl",
                "tpl": "2023-01-01 12:00",
                "inline": true,
                "wrapperComponent": "",
                "style": {},
                "themeCss": {
                  "baseControlClassName": {
                    "font:default": {
                      "fontSize": "12px",
                      "color": "var(--colors-neutral-text-6)"
                    }
                  }
                },
                "id": "u:7f6bef513eb3"
              }
            ],
            "style": {
              "position": "static",
              "display": "flex",
              "flexWrap": "nowrap",
              "justifyContent": "space-between"
            },
            "wrapperBody": false,
            "isFixedHeight": false,
            "isFixedWidth": false,
            "themeCss": {
              "baseControlClassName": {
                "padding-and-margin:default": {
                  "marginTop": "20px"
                }
              }
            },
            "id": "u:6606cebce092"
          }
        ],
        "size": "none",
        "style": {
          "position": "static",
          "display": "block",
          "flex": "0 0 150px",
          "flexBasis": "100%"
        },
        "wrapperBody": false,
        "isFixedHeight": false,
        "isFixedWidth": true,
        "onEvent": {
          "click": {
            "weight": 0,
            "actions": []
          }
        },
        "themeCss": {
          "baseControlClassName": {
            "radius:default": {
              "top-left-border-radius": "6px",
              "top-right-border-radius": "6px",
              "bottom-left-border-radius": "6px",
              "bottom-right-border-radius": "6px"
            },
            "border:default": {
              "top-border-width": "var(--borders-width-4)",
              "left-border-width": "var(--borders-width-2)",
              "right-border-width": "var(--borders-width-2)",
              "bottom-border-width": "var(--borders-width-2)",
              "top-border-style": "var(--borders-style-2)",
              "left-border-style": "var(--borders-style-2)",
              "right-border-style": "var(--borders-style-2)",
              "bottom-border-style": "var(--borders-style-2)",
              "top-border-color": "var(--colors-brand-6)",
              "left-border-color": "var(--colors-brand-10)",
              "right-border-color": "var(--colors-brand-10)",
              "bottom-border-color": "var(--colors-brand-10)"
            },
            "padding-and-margin:default": {
              "paddingTop": "10px",
              "paddingRight": "10px",
              "paddingBottom": "10px",
              "paddingLeft": "10px",
              "marginRight": "15px"
            }
          }
        },
        "id": "u:b39411e7f540"
      },
      "placeholder": "",
      "name": "items",
      "style": {
        "gutterX": 15,
        "gutterY": 15,
        "transform": "scale(0.5)",
        "width": "600px",
        "transformOrigin": "left top"
      },
      "id": "u:1f941707f77f",
      "className": "text-left",
      "items": [
        {},
        {},
        {},
        {}
      ]
    },
    "tags": [
      "cards"
    ],
    "docLink": "/amis/zh-CN/components/cards",
    "scaffold": {
      "type": "cards",
      "columnsCount": 4,
      "placeholder": "",
      "name": "",
      "style": {
        "gutterX": 15,
        "gutterY": 15
      },
      "id": "u:1f941707f77f"
    },
    "isBaseComponent": true,
    "pluginIcon": "cards-plugin",
    "rendererName": "cards",
    "id": "0c6993e26780",
    "plugin": {
      "rendererName": "cards",
      "$schema": "/schemas/CardsSchema.json",
      "name": "cards",
      "isBaseComponent": true,
      "isListComponent": true,
      "memberImmutable": true,
      "description": "功能类似于表格，但是用一个个小卡片来展示数据。当前组件需要配置数据源，不自带数据拉取，请优先使用 「CRUD」 组件。",
      "searchKeywords": "cards",
      "docLink": "/amis/zh-CN/components/cards",
      "icon": "fa fa-window-maximize",
      "pluginIcon": "cards-plugin",
      "panelTitle": "卡片集",
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "table",
    "icon": "fa fa-table",
    "description": "用来展示表格数据，可以配置列信息，然后关联数据便能完成展示。支持嵌套、超级表头、列固定、表头固顶、合并单元格等等。当前组件需要配置数据源，不自带数据拉取，请优先使用 「CRUD」 组件。",
    "previewSchema": {
      "type": "table",
      "className": "text-left m-b-none",
      "affixHeader": false,
      "items": [
        {
          "a": 1,
          "b": 2
        },
        {
          "a": 3,
          "b": 4
        },
        {
          "a": 5,
          "b": 6
        }
      ],
      "columns": [
        {
          "label": "A",
          "name": "a"
        },
        {
          "label": "B",
          "name": "b"
        }
      ]
    },
    "tags": [
      "展示"
    ],
    "docLink": "/amis/zh-CN/components/table",
    "scaffold": {
      "type": "table",
      "columns": [
        {
          "label": "列信息",
          "name": "a"
        }
      ]
    },
    "scaffoldForm": {
      "title": "快速构建表格",
      "body": [
        {
          "name": "columns",
          "type": "combo",
          "multiple": true,
          "label": false,
          "addButtonText": "新增一列",
          "draggable": true,
          "items": [
            {
              "type": "input-text",
              "name": "label",
              "placeholder": "标题"
            },
            {
              "type": "input-text",
              "name": "name",
              "placeholder": "绑定字段名"
            },
            {
              "type": "select",
              "name": "type",
              "placeholder": "level",
              "value": "text",
              "options": [
                {
                  "value": "text",
                  "label": "纯文本"
                },
                {
                  "value": "tpl",
                  "label": "模板"
                },
                {
                  "value": "image",
                  "label": "图片"
                },
                {
                  "value": "date",
                  "label": "日期"
                },
                {
                  "value": "progress",
                  "label": "进度"
                },
                {
                  "value": "status",
                  "label": "状态"
                },
                {
                  "value": "mapping",
                  "label": "映射"
                },
                {
                  "value": "operation",
                  "label": "操作栏"
                }
              ]
            }
          ]
        }
      ],
      "canRebuild": true
    },
    "isBaseComponent": true,
    "pluginIcon": "table-plugin",
    "rendererName": "table",
    "id": "80eb7af73df3",
    "plugin": {
      "rendererName": "table",
      "$schema": "/schemas/TableSchema.json",
      "name": "table",
      "isBaseComponent": true,
      "description": "用来展示表格数据，可以配置列信息，然后关联数据便能完成展示。支持嵌套、超级表头、列固定、表头固顶、合并单元格等等。当前组件需要配置数据源，不自带数据拉取，请优先使用 「CRUD」 组件。",
      "docLink": "/amis/zh-CN/components/table",
      "icon": "fa fa-table",
      "pluginIcon": "table-plugin",
      "regions": [
        {
          "key": "columns",
          "label": "列集合",
          "renderMethod": "renderTableContent",
          "preferTag": "展示",
          "dndMode": "position-h"
        }
      ],
      "panelTitle": "表格",
      "events": [
        {
          "eventName": "selectedChange",
          "eventLabel": "选择表格项",
          "description": "手动选择表格项事件",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "selectedItems": {
                      "type": "array",
                      "title": "已选行记录"
                    },
                    "unSelectedItems": {
                      "type": "array",
                      "title": "未选行记录"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "columnSort",
          "eventLabel": "列排序",
          "description": "点击列排序事件",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "orderBy": {
                      "type": "string",
                      "title": "列名"
                    },
                    "orderDir": {
                      "type": "string",
                      "title": "排序值"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "columnFilter",
          "eventLabel": "列筛选",
          "description": "点击列筛选事件",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "filterName": {
                      "type": "string",
                      "title": "列名"
                    },
                    "filterValue": {
                      "type": "string",
                      "title": "筛选值"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "columnSearch",
          "eventLabel": "列搜索",
          "description": "点击列搜索事件",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "searchName": {
                      "type": "string",
                      "title": "列名"
                    },
                    "searchValue": {
                      "type": "object",
                      "title": "搜索值"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "orderChange",
          "eventLabel": "行排序",
          "description": "手动拖拽行排序事件",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "movedItems": {
                      "type": "array",
                      "title": "已排序记录"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "columnToggled",
          "eventLabel": "列显示变化",
          "description": "点击自定义列事件",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "columns": {
                      "type": "array",
                      "title": "当前显示的列配置"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "rowClick",
          "eventLabel": "行单击",
          "description": "点击整行事件",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "item": {
                      "type": "object",
                      "title": "当前行记录"
                    },
                    "index": {
                      "type": "number",
                      "title": "当前行索引"
                    },
                    "indexPath": {
                      "type": "number",
                      "title": "行索引路劲"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "rowDbClick",
          "eventLabel": "行双击",
          "description": "双击整行事件",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "item": {
                      "type": "object",
                      "title": "当前行记录"
                    },
                    "index": {
                      "type": "number",
                      "title": "当前行索引"
                    },
                    "indexPath": {
                      "type": "number",
                      "title": "行索引路劲"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "rowMouseEnter",
          "eventLabel": "鼠标移入行事件",
          "description": "移入整行时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "item": {
                      "type": "object",
                      "title": "当前行记录"
                    },
                    "index": {
                      "type": "number",
                      "title": "当前行索引"
                    },
                    "indexPath": {
                      "type": "number",
                      "title": "行索引路劲"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "rowMouseLeave",
          "eventLabel": "鼠标移出行事件",
          "description": "移出整行时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "item": {
                      "type": "object",
                      "title": "当前行记录"
                    },
                    "index": {
                      "type": "number",
                      "title": "当前行索引"
                    },
                    "indexPath": {
                      "type": "number",
                      "title": "行索引路劲"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [
        {
          "actionType": "select",
          "actionLabel": "设置选中项",
          "description": "设置表格的选中项",
          "innerArgs": [
            "selected"
          ],
          "schema": {
            "type": "combo",
            "name": "args",
            "multiple": false,
            "strictMode": false,
            "items": [
              {
                "type": "ae-formulaControl",
                "variableMode": "tree",
                "name": "selected",
                "label": "选中项",
                "variables": "${variables}",
                "size": "lg",
                "mode": "horizontal"
              }
            ]
          }
        },
        {
          "actionType": "selectAll",
          "actionLabel": "设置全部选中",
          "description": "设置表格全部项选中"
        },
        {
          "actionType": "clearAll",
          "actionLabel": "清空选中项",
          "description": "清空表格所有选中项"
        },
        {
          "actionType": "initDrag",
          "actionLabel": "开启排序",
          "description": "开启表格拖拽排序功能"
        },
        {
          "actionType": "cancelDrag",
          "actionLabel": "取消排序",
          "description": "取消表格拖拽排序功能"
        }
      ],
      "panelJustify": true,
      "unWatchWidthChange": {},
      "dsManager": {
        "builders": {}
      },
      "order": 0
    },
    "order": 0
  },
  {
    "name": "chart",
    "icon": "fa fa-pie-chart",
    "description": "用来渲染图表，基于 echarts 图表库，理论上 echarts 所有图表level都支持。",
    "previewSchema": {
      "type": "chart",
      "config": {
        "xAxis": {
          "type": "category",
          "data": [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun"
          ]
        },
        "yAxis": {
          "type": "value"
        },
        "series": [
          {
            "data": [
              820,
              932,
              901,
              934,
              1290,
              1330,
              1320
            ],
            "type": "line"
          }
        ],
        "backgroundColor": "transparent"
      },
      "replaceChartOption": true
    },
    "tags": [
      "chart"
    ],
    "docLink": "/amis/zh-CN/components/chart",
    "scaffold": {
      "type": "chart",
      "replaceChartOption": true
    },
    "isBaseComponent": true,
    "pluginIcon": "chart-plugin",
    "rendererName": "chart",
    "id": "2af06b4e8683",
    "plugin": {
      "rendererName": "chart",
      "$schema": "/schemas/ChartSchema.json",
      "name": "chart",
      "isBaseComponent": true,
      "description": "用来渲染图表，基于 echarts 图表库，理论上 echarts 所有图表level都支持。",
      "docLink": "/amis/zh-CN/components/chart",
      "icon": "fa fa-pie-chart",
      "pluginIcon": "chart-plugin",
      "events": [
        {
          "eventName": "init",
          "eventLabel": "初始化",
          "description": "组件实例被创建并插入 DOM 中时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "description": "当前数据域，可以通过.字段名读取对应的值"
                }
              }
            }
          ]
        },
        {
          "eventName": "click",
          "eventLabel": "鼠标点击",
          "description": "鼠标点击时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "Data",
                  "properties": {
                    "componentType": {
                      "type": "string",
                      "title": "componentType"
                    },
                    "seriesType": {
                      "type": "string",
                      "title": "seriesType"
                    },
                    "seriesIndex": {
                      "type": "number",
                      "title": "seriesIndex"
                    },
                    "seriesName": {
                      "type": "string",
                      "title": "seriesName"
                    },
                    "name": {
                      "type": "string",
                      "title": "name"
                    },
                    "dataIndex": {
                      "type": "number",
                      "title": "dataIndex"
                    },
                    "data": {
                      "type": "object",
                      "title": "data"
                    },
                    "dataType": {
                      "type": "string",
                      "title": "dataType"
                    },
                    "value": {
                      "type": "number",
                      "title": "value"
                    },
                    "color": {
                      "type": "string",
                      "title": "color"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "mouseover",
          "eventLabel": "鼠标悬停",
          "description": "鼠标悬停时触发"
        },
        {
          "eventName": "legendselectchanged",
          "eventLabel": "切换图例选中状态",
          "description": "切换图例选中状态时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "name": {
                      "type": "string",
                      "title": "name"
                    },
                    "selected": {
                      "type": "object",
                      "title": "selected"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [
        {
          "actionType": "reload",
          "actionLabel": "重新加载",
          "description": "触发组件数据刷新并重新渲染"
        },
        {
          "actionType": "setValue",
          "actionLabel": "变量赋值",
          "description": "触发组件数据更新"
        }
      ],
      "panelTitle": "图表",
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "sparkline",
    "icon": "fa fa-area-chart",
    "description": "用于内嵌展示简单图表",
    "previewSchema": {
      "type": "sparkline",
      "height": 30,
      "value": [
        3,
        5,
        2,
        4,
        1,
        8,
        3,
        7
      ]
    },
    "tags": [
      "展示"
    ],
    "docLink": "/amis/zh-CN/components/sparkline",
    "scaffold": {
      "type": "sparkline",
      "height": 30
    },
    "isBaseComponent": true,
    "pluginIcon": "sparkline-plugin",
    "rendererName": "sparkline",
    "id": "b99441f0de0a",
    "plugin": {
      "rendererName": "sparkline",
      "$schema": "/schemas/SparklineSchema.json",
      "name": "sparkline",
      "isBaseComponent": true,
      "description": "用于内嵌展示简单图表",
      "docLink": "/amis/zh-CN/components/sparkline",
      "icon": "fa fa-area-chart",
      "pluginIcon": "sparkline-plugin",
      "panelTitle": "走势图",
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "carousel",
    "icon": "fa fa-images",
    "description": "用来渲染轮播图，可以配置每一页的内容（不只是图片），可以配置过渡动画。",
    "previewSchema": {
      "type": "carousel",
      "options": [
        {
          "image": "data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E"
        },
        {
          "html": "<div style=\"width: 100%; height: 300px; background: #e3e3e3; text-align: center; line-height: 300px;\">carousel data</div>"
        },
        {
          "image": "data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E"
        }
      ]
    },
    "tags": [
      "carousel"
    ],
    "docLink": "/amis/zh-CN/components/carousel",
    "scaffold": {
      "type": "carousel"
    },
    "isBaseComponent": true,
    "pluginIcon": "carousel-plugin",
    "rendererName": "carousel",
    "id": "be10012792a7",
    "plugin": {
      "rendererName": "carousel",
      "$schema": "/schemas/CarouselSchema.json",
      "name": "carousel",
      "isBaseComponent": true,
      "description": "用来渲染轮播图，可以配置每一页的内容（不只是图片），可以配置过渡动画。",
      "docLink": "/amis/zh-CN/components/carousel",
      "icon": "fa fa-images",
      "pluginIcon": "carousel-plugin",
      "panelTitle": "轮播图",
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "image",
    "icon": "fa fa-photo",
    "description": "可以用来展示一张图片，支持静态设置图片地址，也可以配置 <code>name</code> 与变量关联。",
    "previewSchema": {
      "type": "image",
      "thumbMode": "cover",
      "value": "data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E"
    },
    "tags": [
      "展示"
    ],
    "docLink": "/amis/zh-CN/components/image",
    "scaffold": {
      "type": "image"
    },
    "isBaseComponent": true,
    "pluginIcon": "image-plugin",
    "rendererName": "image",
    "id": "caea9366feba",
    "plugin": {
      "rendererName": "image",
      "$schema": "/schemas/ImageSchema.json",
      "name": "image",
      "isBaseComponent": true,
      "description": "可以用来展示一张图片，支持静态设置图片地址，也可以配置 <code>name</code> 与变量关联。",
      "docLink": "/amis/zh-CN/components/image",
      "icon": "fa fa-photo",
      "pluginIcon": "image-plugin",
      "events": [
        {
          "eventName": "click",
          "eventLabel": "点击",
          "description": "点击时触发",
          "defaultShow": true,
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "mouseenter",
          "eventLabel": "鼠标移入",
          "description": "鼠标移入时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "mouseleave",
          "eventLabel": "鼠标移出",
          "description": "鼠标移出时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [
        {
          "actionType": "preview",
          "actionLabel": "预览",
          "description": "预览图片"
        },
        {
          "actionType": "zoom",
          "actionLabel": "调整图片比例",
          "description": "将图片等比例放大或缩小",
          "schema": {
            "type": "container",
            "body": [
              {
                "type": "combo",
                "name": "args",
                "multiple": false,
                "strictMode": false,
                "items": [
                  {
                    "type": "ae-formulaControl",
                    "variableMode": "tree",
                    "name": "scale",
                    "mode": "horizontal",
                    "variables": "${variables}",
                    "horizontal": {
                      "leftFixed": 4
                    },
                    "label": {
                      "type": "tooltip-wrapper",
                      "tooltip": "定义每次放大或缩小图片的百分比大小，正值为放大，负值为缩小，默认50",
                      "tooltipTheme": "dark",
                      "placement": "top",
                      "tooltipStyle": {
                        "fontSize": "12px"
                      },
                      "className": "ae-formItemControl-label-tip",
                      "body": "调整比例"
                    },
                    "value": 50,
                    "size": "lg"
                  }
                ]
              }
            ]
          }
        }
      ],
      "panelTitle": "图片",
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "images",
    "icon": "fa fa-clone",
    "description": "展示多张图片",
    "previewSchema": {
      "type": "images",
      "imageGallaryClassName": "app-popover :AMISCSSWrapper",
      "listClassName": "nowrap",
      "thumbMode": "cover",
      "value": [
        {
          "title": "图片1",
          "image": "data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E",
          "src": "data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E"
        },
        {
          "title": "图片2",
          "image": "data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E",
          "src": "data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E"
        }
      ]
    },
    "tags": [
      "展示"
    ],
    "docLink": "/amis/zh-CN/components/images",
    "scaffold": {
      "type": "images",
      "imageGallaryClassName": "app-popover :AMISCSSWrapper"
    },
    "isBaseComponent": true,
    "pluginIcon": "images-plugin",
    "rendererName": "images",
    "id": "f25b1822a0bb",
    "plugin": {
      "rendererName": "images",
      "$schema": "/schemas/ImagesSchema.json",
      "name": "images",
      "isBaseComponent": true,
      "description": "展示多张图片",
      "docLink": "/amis/zh-CN/components/images",
      "icon": "fa fa-clone",
      "pluginIcon": "images-plugin",
      "panelTitle": "图片集",
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "datetime",
    "icon": "fa fa-calendar",
    "description": "主要用来关联字段名做日期展示，支持各种格式如：X（时间戳），YYYY-MM-DD HH:mm:ss。",
    "previewSchema": {
      "type": "datetime",
      "format": "YYYY-MM-DD HH:mm:ss",
      "value": 1732960748
    },
    "tags": [
      "date"
    ],
    "docLink": "/amis/zh-CN/components/date",
    "scaffold": {
      "type": "datetime",
      "format": "YYYY-MM-DD HH:mm:ss",
      "value": 1732960748
    },
    "disabledRendererPlugin": false,
    "isBaseComponent": true,
    "pluginIcon": "datetime-plugin",
    "rendererName": "datetime",
    "id": "62ee82d5736d",
    "plugin": {
      "rendererName": "datetime",
      "$schema": "/schemas/DateSchema.json",
      "name": "datetime",
      "isBaseComponent": true,
      "disabledRendererPlugin": false,
      "description": "主要用来关联字段名做日期展示，支持各种格式如：X（时间戳），YYYY-MM-DD HH:mm:ss。",
      "docLink": "/amis/zh-CN/components/date",
      "icon": "fa fa-calendar",
      "pluginIcon": "datetime-plugin",
      "panelTitle": "日期展示",
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "calendar",
    "icon": "fa fa-calendar",
    "description": "展示日历及日程。",
    "previewSchema": {
      "type": "calendar"
    },
    "tags": [
      "calendar"
    ],
    "docLink": "/amis/zh-CN/components/calendar",
    "scaffold": {
      "type": "calendar"
    },
    "isBaseComponent": true,
    "pluginIcon": "inputDatetime",
    "rendererName": "calendar",
    "id": "ae2503da659c",
    "plugin": {
      "rendererName": "calendar",
      "$schema": "/schemas/Calendar.json",
      "name": "calendar",
      "isBaseComponent": true,
      "icon": "fa fa-calendar",
      "pluginIcon": "inputDatetime",
      "panelTitle": "Calendar",
      "description": "展示日历及日程。",
      "docLink": "/amis/zh-CN/components/calendar",
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "时间值变化时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "string",
                      "title": "当前日期"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "click",
          "eventLabel": "点击",
          "description": "点击时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "string",
                      "title": "当前日期"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "mouseenter",
          "eventLabel": "鼠标移入",
          "description": "鼠标移入时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "string",
                      "title": "当前日期"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "mouseleave",
          "eventLabel": "鼠标移出",
          "description": "鼠标移出时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "value": {
                      "type": "string",
                      "title": "当前日期"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [
        {
          "actionType": "clear",
          "actionLabel": "清空",
          "description": "清空"
        },
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "将值重置为初始值"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "标签",
    "icon": "fa fa-tag",
    "description": "用于标记和选择的标签",
    "previewSchema": {
      "type": "tag",
      "label": "普通标签",
      "color": "processing"
    },
    "tags": [
      "展示"
    ],
    "docLink": "/amis/zh-CN/components/tag",
    "scaffold": {
      "type": "tag",
      "label": "普通标签",
      "color": "processing"
    },
    "isBaseComponent": true,
    "pluginIcon": "tag-plugin",
    "rendererName": "tag",
    "id": "ebdd719cb5a7",
    "plugin": {
      "rendererName": "tag",
      "$schema": "/schemas/TagSchema.json",
      "name": "标签",
      "isBaseComponent": true,
      "icon": "fa fa-tag",
      "pluginIcon": "tag-plugin",
      "description": "用于标记和选择的标签",
      "docLink": "/amis/zh-CN/components/tag",
      "panelTitle": "标签",
      "panelJustify": true,
      "events": [
        {
          "eventName": "click",
          "eventLabel": "点击",
          "description": "点击时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                },
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "label": {
                      "type": "object",
                      "title": "标签名称"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "mouseenter",
          "eventLabel": "鼠标移入",
          "description": "鼠标移入时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                },
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "label": {
                      "type": "object",
                      "title": "标签名称"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "mouseleave",
          "eventLabel": "鼠标移出",
          "description": "鼠标移出时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                },
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "label": {
                      "type": "object",
                      "title": "标签名称"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "close",
          "eventLabel": "点击关闭",
          "description": "点击关闭时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "context": {
                  "type": "object",
                  "title": "上下文",
                  "properties": {
                    "nativeEvent": {
                      "type": "object",
                      "title": "鼠标事件对象"
                    }
                  }
                },
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "label": {
                      "type": "object",
                      "title": "标签名称"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [],
      "order": 0
    },
    "order": 0
  },
  {
    "name": "json",
    "icon": "fa fa-code",
    "description": "用来展示 JSON 数据。",
    "previewSchema": {
      "type": "json",
      "name": "json",
      "value": {
        "a": 1,
        "b": {
          "c": 2
        }
      }
    },
    "tags": [
      "展示"
    ],
    "docLink": "/amis/zh-CN/components/json",
    "scaffold": {
      "type": "json"
    },
    "isBaseComponent": true,
    "pluginIcon": "json-view-plugin",
    "rendererName": "json",
    "id": "6ffe948c4bb3",
    "plugin": {
      "rendererName": "json",
      "$schema": "/schemas/JsonSchema.json",
      "name": "json",
      "isBaseComponent": true,
      "description": "用来展示 JSON 数据。",
      "docLink": "/amis/zh-CN/components/json",
      "icon": "fa fa-code",
      "pluginIcon": "json-view-plugin",
      "panelTitle": "JSON",
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "searchKeywords": "进度条、progress",
    "name": "progress",
    "icon": "fa fa-angle-double-right",
    "description": "用来展示进度。可配置各个进度段用不同的颜色展示。",
    "previewSchema": {
      "type": "progress",
      "mode": "line",
      "value": 66,
      "strokeWidth": 6,
      "valueTpl": "${value}%"
    },
    "tags": [
      "展示"
    ],
    "docLink": "/amis/zh-CN/components/progress",
    "scaffold": {
      "type": "progress",
      "mode": "line",
      "value": 66,
      "strokeWidth": 6,
      "valueTpl": "${value}%"
    },
    "isBaseComponent": true,
    "pluginIcon": "progress-plugin",
    "rendererName": "progress",
    "id": "7e6e4323daa6",
    "plugin": {
      "rendererName": "progress",
      "$schema": "/schemas/ProgressSchema.json",
      "name": "progress",
      "searchKeywords": "进度条、progress",
      "isBaseComponent": true,
      "description": "用来展示进度。可配置各个进度段用不同的颜色展示。",
      "docLink": "/amis/zh-CN/components/progress",
      "icon": "fa fa-angle-double-right",
      "pluginIcon": "progress-plugin",
      "actions": [
        {
          "actionType": "reset",
          "actionLabel": "重置",
          "description": "重置为默认值"
        },
        {
          "actionType": "setValue",
          "actionLabel": "赋值",
          "description": "触发组件数据更新"
        }
      ],
      "panelTitle": "进度",
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "status",
    "icon": "fa fa-check-square-o",
    "description": "用图标更具关联字段来展示状态，比如 1 展示 √、0 展示 x。这块可以自定义配置",
    "previewSchema": {
      "type": "status",
      "value": 1
    },
    "tags": [
      "展示"
    ],
    "docLink": "/amis/zh-CN/components/status",
    "scaffold": {
      "type": "status",
      "value": 1
    },
    "isBaseComponent": true,
    "pluginIcon": "status-plugin",
    "rendererName": "status",
    "id": "5906b407273b",
    "plugin": {
      "rendererName": "status",
      "$schema": "/schemas/StatusSchema.json",
      "name": "status",
      "isBaseComponent": true,
      "description": "用图标更具关联字段来展示状态，比如 1 展示 √、0 展示 x。这块可以自定义配置",
      "docLink": "/amis/zh-CN/components/status",
      "icon": "fa fa-check-square-o",
      "pluginIcon": "status-plugin",
      "defaultSource": [
        {
          "label": "-",
          "value": "0",
          "icon": "fail",
          "status": 0
        },
        {
          "label": "-",
          "value": "1",
          "icon": "success",
          "status": 1
        },
        {
          "label": "Success",
          "value": "success",
          "icon": "success",
          "status": "success"
        },
        {
          "label": "运行中",
          "value": "pending",
          "icon": "rolling",
          "status": "pending"
        },
        {
          "label": "排队中",
          "value": "queue",
          "icon": "warning",
          "status": "queue"
        },
        {
          "label": "调度中",
          "value": "schedule",
          "icon": "schedule",
          "status": "schedule"
        },
        {
          "label": "失败",
          "value": "fail",
          "icon": "fail",
          "status": "fail"
        }
      ],
      "panelTitle": "状态",
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "steps",
    "icon": "fa fa-forward",
    "description": "Steps 步骤条",
    "previewSchema": {
      "type": "steps",
      "value": 1,
      "steps": [
        {
          "title": "第一步",
          "subTitle": "副标题",
          "description": "描述"
        },
        {
          "title": "第二步"
        },
        {
          "title": "第三步"
        }
      ]
    },
    "tags": [
      "展示"
    ],
    "docLink": "/amis/zh-CN/components/steps",
    "scaffold": {
      "type": "steps",
      "value": 1
    },
    "isBaseComponent": true,
    "pluginIcon": "steps-plugin",
    "rendererName": "steps",
    "id": "25854970a320",
    "plugin": {
      "rendererName": "steps",
      "$schema": "/schemas/StepsSchema.json",
      "name": "steps",
      "isBaseComponent": true,
      "icon": "fa fa-forward",
      "pluginIcon": "steps-plugin",
      "description": "Steps 步骤条",
      "docLink": "/amis/zh-CN/components/steps",
      "panelTitle": "Steps",
      "panelBody": [
        {
          "type": "tabs",
          "tabsMode": "line",
          "className": "editor-prop-config-tabs",
          "linksClassName": "editor-prop-config-tabs-links aa",
          "contentClassName": "no-border editor-prop-config-tabs-cont hoverShowScrollBar",
          "tabs": [
            {
              "title": "常规",
              "body": [
                {
                  "type": "select",
                  "label": {
                    "type": "tooltip-wrapper",
                    "tooltip": "Can be set to upper left corner, upper right corner, lower right corner, lower left corner, default is lower right corner",
                    "tooltipTheme": "dark",
                    "placement": "top",
                    "tooltipStyle": {
                      "fontSize": "12px"
                    },
                    "className": "ae-formItemControl-label-tip",
                    "body": "Reference position"
                  },
                  "name": "originPosition",
                  "value": "left-top",
                  "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
                  "options": [
                    {
                      "label": "top left",
                      "value": "left-top"
                    },
                    {
                      "label": "top right",
                      "value": "right-top"
                    },
                    {
                      "label": "bottom right (default)",
                      "value": "right-bottom"
                    },
                    {
                      "label": "bottom left",
                      "value": "left-bottom"
                    }
                  ]
                },
                {
                  "name": "steps",
                  "label": "步骤列表",
                  "type": "combo",
                  "scaffold": {
                    "type": "wrapper",
                    "body": "子节点内容"
                  },
                  "minLength": 2,
                  "multiple": true,
                  "draggable": true,
                  "items": [
                    {
                      "type": "input-text",
                      "name": "title",
                      "label": false,
                      "placeholder": "标题"
                    },
                    {
                      "type": "input-text",
                      "name": "subTitle",
                      "label": false,
                      "placeholder": "stepSubTitle"
                    },
                    {
                      "type": "input-text",
                      "name": "description",
                      "label": false,
                      "placeholder": "stepDescription"
                    }
                  ],
                  "itemsWrapperClassName": "ae-Combo-items ",
                  "itemClassName": "ae-Combo-item "
                },
                {
                  "name": "value",
                  "type": "input-text",
                  "label": "当前步骤",
                  "description": "以零为头部"
                },
                {
                  "name": "status",
                  "type": "select",
                  "label": "当前状态",
                  "creatable": true,
                  "value": "finish",
                  "options": [
                    {
                      "label": "进行中",
                      "value": "process"
                    },
                    {
                      "label": "等待",
                      "value": "wait"
                    },
                    {
                      "label": "完成",
                      "value": "finish"
                    },
                    {
                      "label": "出错",
                      "value": "error"
                    }
                  ]
                },
                {
                  "type": "container",
                  "body": [
                    {
                      "type": "checkbox",
                      "label": "获取步骤接口",
                      "option": "高级配置",
                      "name": "source",
                      "mode": "inline",
                      "className": "w-full m-b-sm",
                      "inputClassName": "pull-right text-sm m-t-sm p-t-none"
                    },
                    {
                      "name": "source",
                      "type": "input-text",
                      "placeholder": "http://",
                      "visibleOn": "!this.source || typeof this.source === 'string'",
                      "className": "m-b-none",
                      "labelRemark": {}
                    },
                    {
                      "type": "combo",
                      "name": "source",
                      "syncDefaultValue": false,
                      "multiLine": true,
                      "visibleOn": "this.source && typeof this.source !== 'string'",
                      "className": "m-b-none",
                      "messages": {
                        "validateFailed": "There is an error in the interface configuration, please check carefully"
                      },
                      "items": [
                        {
                          "label": "Send method",
                          "name": "method",
                          "value": "get",
                          "type": "select",
                          "mode": "horizontal",
                          "horizontal": {
                            "leftFixed": "sm"
                          },
                          "options": [
                            {
                              "value": "get",
                              "label": "GET"
                            },
                            {
                              "value": "post",
                              "label": "POST"
                            },
                            {
                              "value": "put",
                              "label": "PUT"
                            },
                            {
                              "value": "patch",
                              "label": "PATCH"
                            },
                            {
                              "value": "delete",
                              "label": "DELETE"
                            }
                          ]
                        },
                        {
                          "label": "Url",
                          "type": "input-text",
                          "name": "url",
                          "placeholder": "http://",
                          "required": true
                        },
                        {
                          "type": "switch",
                          "label": "data mapping",
                          "name": "data",
                          "className": "w-full m-b-xs"
                        },
                        {
                          "type": "tpl",
                          "visibleOn": "!this.data",
                          "inline": false,
                          "className": "text-sm text-muted m-b",
                          "tpl": "When data mapping is not enabled, as much data as possible will be sent when sending the API. If you want to control the data sent yourself, or require additional data processing, please enable this option"
                        },
                        {
                          "type": "ae-DataMappingControl",
                          "syncDefaultValue": false,
                          "name": "data",
                          "mode": "normal",
                          "renderLabel": false,
                          "visibleOn": "this.data",
                          "valueType": "ae-DataPickerControl",
                          "descriptionClassName": "help-block text-xs m-b-none",
                          "description": "<p>When data mapping is not enabled, sending data automatically switches to whitelist mode. Send whatever you configure, please bind the data. For example: <code>{\"a\": \"\\${a}\", \"b\": 2}</code></p><p>If you want to customize based on the default, please add a Key first The Value for `&` is `\\$$` as the first line. </p><div>When the value is <code>__undefined</code>, it means deleting the corresponding field. It can be combined with <code>{\"&\": \"\\$$\"}</code> to achieve black List effect. </div>"
                        },
                        {
                          "label": "Sending conditions",
                          "type": "input-text",
                          "name": "sendOn",
                          "placeholder": "For example: this.type == \"123\"",
                          "description": "Use expressions to set the sending conditions of this request"
                        },
                        {
                          "type": "switch",
                          "label": "Silent request",
                          "name": "silent",
                          "mode": "inline",
                          "description": "Whether to send requests silently and block error prompts"
                        },
                        {
                          "type": "switch",
                          "label": "Whether to set cache",
                          "name": "cache",
                          "className": "w-full m-b-xs",
                          "description": "Set the validity time of this request cache"
                        },
                        {
                          "type": "input-number",
                          "name": "cache",
                          "mode": "inline",
                          "min": 0,
                          "step": 500,
                          "visibleOn": "this.cache"
                        },
                        {
                          "type": "switch",
                          "label": "File download",
                          "name": "responseType",
                          "description": "Please check when the interface is for binary file download and set Content-Disposition"
                        },
                        {
                          "label": "data format",
                          "type": "button-group-select",
                          "name": "dataType",
                          "description": "The sending body format is: <%= data.dataType === \"json\" ? \"application/json\" : (data.dataType === \"form-data\" ? \"multipart/form- data\" : (data.dataType === \"form\" ? \"application/x-www-form-urlencoded\" : \"\")) %>, The form-data format will be automatically used when there is a file in the sent content. . ",
                          "size": "sm",
                          "className": "block",
                          "mode": "inline",
                          "options": [
                            {
                              "label": "JSON",
                              "value": "json"
                            },
                            {
                              "label": "FormData",
                              "value": "form-data"
                            },
                            {
                              "label": "Form",
                              "value": "form"
                            }
                          ]
                        },
                        {
                          "type": "switch",
                          "label": "data replacement",
                          "name": "replaceData",
                          "description": "The default data is append mode. After turning this on, it will be completely replaced"
                        },
                        {
                          "type": "switch",
                          "label": "Return result mapping",
                          "name": "responseData",
                          "className": "w-full m-b-xs"
                        },
                        {
                          "type": "tpl",
                          "visibleOn": "!this.responseData",
                          "inline": false,
                          "className": "text-sm text-muted m-b",
                          "tpl": "If additional data processing is required on the returned results, please enable this option"
                        },
                        {
                          "type": "input-kv",
                          "syncDefaultValue": false,
                          "name": "responseData",
                          "visibleOn": "this.responseData",
                          "descriptionClassName": "help-block text-xs m-b-none"
                        },
                        {
                          "title": "Custom Adapter",
                          "type": "fieldSet",
                          "className": "m-b-none",
                          "size": "sm",
                          "collapsable": false,
                          "collapsedOn": "!this.requestAdaptor && !this.adaptor",
                          "body": [
                            {
                              "name": "requestAdaptor",
                              "type": "js-editor",
                              "allowFullscreen": true,
                              "label": "Sending adapter",
                              "description": "Function signature: (api) => api, the data is in api.data, and the api object is returned after modification. "
                            },
                            {
                              "name": "adaptor",
                              "type": "js-editor",
                              "allowFullscreen": true,
                              "label": "receiving adapter",
                              "description": "Function signature: (payload, response, api) => payload"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "title": "Appearance",
              "body": [
                {
                  "name": "mode",
                  "type": "select",
                  "label": "模式",
                  "value": "horizontal",
                  "options": [
                    {
                      "label": "水平",
                      "value": "horizontal"
                    },
                    {
                      "label": "竖直",
                      "value": "vertical"
                    },
                    {
                      "label": "简单",
                      "value": "simple"
                    }
                  ]
                },
                {
                  "type": "ae-classname",
                  "name": "className",
                  "label": {
                    "type": "tooltip-wrapper",
                    "tooltip": "What are the helper class CSS class names? Please go to <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">Style Description</a>. In addition, you can add custom class names, Then add custom styles in system configuration. ",
                    "tooltipTheme": "dark",
                    "placement": "top",
                    "tooltipStyle": {
                      "fontSize": "12px"
                    },
                    "className": "ae-formItemControl-label-tip",
                    "body": "CSS class name"
                  }
                }
              ]
            },
            {
              "title": "显隐",
              "body": [
                null
              ]
            }
          ]
        }
      ],
      "order": 0
    },
    "order": 0
  },
  {
    "name": "时间轴",
    "icon": "fa fa-bars",
    "description": "用来展示时间轴",
    "previewSchema": {
      "type": "timeline",
      "label": "时间轴",
      "name": "timeline",
      "items": [
        {
          "time": "2012-12-21",
          "title": "节点示例数据"
        },
        {
          "time": "2012-12-24",
          "title": "节点示例数据"
        },
        {
          "time": "2012-12-27",
          "title": "节点示例数据"
        }
      ]
    },
    "tags": [
      "展示"
    ],
    "docLink": "/amis/zh-CN/components/timeline",
    "scaffold": {
      "type": "timeline",
      "label": "时间轴",
      "name": "timeline"
    },
    "isBaseComponent": true,
    "rendererName": "timeline",
    "id": "646d82826958",
    "plugin": {
      "rendererName": "timeline",
      "$schema": "/schemas/TimelineSchema.json",
      "name": "时间轴",
      "isBaseComponent": true,
      "icon": "fa fa-bars",
      "description": "用来展示时间轴",
      "docLink": "/amis/zh-CN/components/timeline",
      "panelTitle": "时间轴",
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "divider",
    "icon": "fa fa-minus",
    "description": "用来展示一个分割线，可用来做视觉上的隔离。",
    "previewSchema": {
      "type": "divider",
      "className": "m-t-none m-b-none"
    },
    "tags": [
      "展示"
    ],
    "docLink": "/amis/zh-CN/components/divider",
    "scaffold": {
      "type": "divider",
      "$$dragMode": "hv"
    },
    "isBaseComponent": true,
    "pluginIcon": "divider-plugin",
    "rendererName": "divider",
    "id": "e0997a4c7120",
    "plugin": {
      "rendererName": "divider",
      "$schema": "/schemas/DividerSchema.json",
      "name": "divider",
      "isBaseComponent": true,
      "icon": "fa fa-minus",
      "pluginIcon": "divider-plugin",
      "description": "用来展示一个分割线，可用来做视觉上的隔离。",
      "docLink": "/amis/zh-CN/components/divider",
      "panelTitle": "分隔线",
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "name": "code",
    "icon": "fa fa-code",
    "description": "代码高亮",
    "previewSchema": {
      "type": "code",
      "language": "html",
      "value": "<div>html</div>"
    },
    "tags": [
      "code"
    ],
    "docLink": "/amis/zh-CN/components/code",
    "scaffold": {
      "type": "code",
      "language": "html",
      "value": "<div>html</div>"
    },
    "isBaseComponent": true,
    "pluginIcon": "code-plugin",
    "rendererName": "code",
    "id": "352996c62d00",
    "plugin": {
      "rendererName": "code",
      "$schema": "/schemas/CodeSchema.json",
      "name": "code",
      "isBaseComponent": true,
      "icon": "fa fa-code",
      "pluginIcon": "code-plugin",
      "description": "代码高亮",
      "docLink": "/amis/zh-CN/components/code",
      "panelTitle": "代码高亮",
      "order": 0
    },
    "order": 0
  },
  {
    "name": "Markdown",
    "icon": "fa fa-file-text",
    "description": "展示 markdown 内容",
    "previewSchema": {
      "type": "markdown",
      "value": "## 这是标题"
    },
    "tags": [
      "展示"
    ],
    "docLink": "/amis/zh-CN/components/markdown",
    "scaffold": {
      "type": "markdown",
      "value": "## 这是标题"
    },
    "isBaseComponent": true,
    "pluginIcon": "markdown-plugin",
    "rendererName": "markdown",
    "id": "2c9c1a7c4ed7",
    "plugin": {
      "rendererName": "markdown",
      "$schema": "/schemas/MarkdownSchema.json",
      "name": "Markdown",
      "isBaseComponent": true,
      "description": "展示 markdown 内容",
      "docLink": "/amis/zh-CN/components/markdown",
      "icon": "fa fa-file-text",
      "pluginIcon": "markdown-plugin",
      "panelTitle": "MD",
      "order": 0
    },
    "order": 0
  },
  {
    "name": "collapse",
    "icon": "fa fa-window-minimize",
    "description": "折叠器，可以将内容区展开或隐藏，保持页面的整洁",
    "previewSchema": {
      "type": "collapse",
      "header": "标题",
      "body": [
        {
          "type": "tpl",
          "tpl": "内容",
          "wrapperComponent": "",
          "inline": false
        }
      ]
    },
    "tags": [
      "collapse"
    ],
    "docLink": "/amis/zh-CN/components/collapse",
    "scaffold": {
      "type": "collapse",
      "header": "标题"
    },
    "isBaseComponent": true,
    "pluginIcon": "collapse-plugin",
    "rendererName": "collapse",
    "id": "613e360119b2",
    "plugin": {
      "rendererName": "collapse",
      "$schema": "/schemas/CollapseSchema.json",
      "name": "collapse",
      "isBaseComponent": true,
      "description": "折叠器，可以将内容区展开或隐藏，保持页面的整洁",
      "docLink": "/amis/zh-CN/components/collapse",
      "icon": "fa fa-window-minimize",
      "pluginIcon": "collapse-plugin",
      "panelTitle": "折叠器",
      "panelJustify": true,
      "events": [
        {
          "eventName": "change",
          "eventLabel": "折叠状态改变",
          "description": "折叠器折叠状态改变时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "collapsed": {
                      "type": "boolean",
                      "title": "折叠器状态"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "expand",
          "eventLabel": "折叠器展开",
          "description": "折叠器状态变更为展开时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "collapsed": {
                      "type": "boolean",
                      "title": "折叠器状态"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "eventName": "collapse",
          "eventLabel": "折叠器收起",
          "description": "折叠器状态变更为收起时触发",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "collapsed": {
                      "type": "boolean",
                      "title": "折叠器状态"
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "actions": [
        {
          "actionType": "expand",
          "actionLabel": "组件展开",
          "description": "组件折叠状态变更为展开"
        },
        {
          "actionLabel": "组件收起",
          "actionType": "collapse",
          "description": "组件折叠状态变更为收起"
        }
      ],
      "regions": [
        null
      ],
      "order": 0
    },
    "order": 0
  },
  {
    "name": "office-viewer",
    "icon": "fa fa-file-word",
    "description": "Office 文档预览",
    "previewSchema": {
      "type": "office-viewer"
    },
    "tags": [
      "展示"
    ],
    "docLink": "/amis/zh-CN/components/office-viewer",
    "scaffold": {
      "type": "office-viewer"
    },
    "isBaseComponent": true,
    "pluginIcon": "officeViewer-plugin",
    "rendererName": "office-viewer",
    "id": "d0c947c928db",
    "plugin": {
      "rendererName": "office-viewer",
      "$schema": "/schemas/OfficeViewerSchema.json",
      "name": "office-viewer",
      "isBaseComponent": true,
      "description": "Office 文档预览",
      "docLink": "/amis/zh-CN/components/office-viewer",
      "icon": "fa fa-file-word",
      "pluginIcon": "officeViewer-plugin",
      "panelTitle": "文档预览",
      "panelJustify": true,
      "actions": [
        {
          "actionType": "print",
          "actionLabel": "打印",
          "description": "打印文档"
        },
        {
          "actionType": "saveAs",
          "actionLabel": "下载",
          "description": "下载文档"
        }
      ],
      "order": 0
    },
    "order": 0
  },
  {
    "name": "pdf-viewer",
    "icon": "fa fa-file-pdf",
    "description": "PDF 文件预览",
    "previewSchema": {
      "type": "pdf-viewer"
    },
    "tags": [
      "展示"
    ],
    "docLink": "/amis/zh-CN/components/pdf-viewer",
    "scaffold": {
      "type": "pdf-viewer"
    },
    "isBaseComponent": true,
    "pluginIcon": "pdfViewer-plugin",
    "rendererName": "pdf-viewer",
    "id": "4963acd5c731",
    "plugin": {
      "rendererName": "pdf-viewer",
      "$schema": "/schemas/PdfViewerSchema.json",
      "name": "pdf-viewer",
      "isBaseComponent": true,
      "description": "PDF 文件预览",
      "docLink": "/amis/zh-CN/components/pdf-viewer",
      "icon": "fa fa-file-pdf",
      "pluginIcon": "pdfViewer-plugin",
      "panelTitle": "PDF预览",
      "panelJustify": true,
      "order": 0
    },
    "order": 0
  },
  {
    "searchKeywords": "实时日志",
    "name": "log",
    "icon": "fa fa-file-text-o",
    "description": "用来实时显示日志",
    "previewSchema": {
      "type": "log",
      "height": 120,
      "autoScroll": true
    },
    "tags": [
      "展示"
    ],
    "docLink": "/amis/zh-CN/components/log",
    "scaffold": {
      "type": "log",
      "autoScroll": true,
      "height": 500,
      "encoding": "utf-8"
    },
    "isBaseComponent": true,
    "pluginIcon": "log-plugin",
    "rendererName": "log",
    "id": "0477ea06c97e",
    "plugin": {
      "rendererName": "log",
      "$schema": "/schemas/LogSchema.json",
      "name": "log",
      "isBaseComponent": true,
      "icon": "fa fa-file-text-o",
      "pluginIcon": "log-plugin",
      "description": "用来实时显示日志",
      "searchKeywords": "实时日志",
      "docLink": "/amis/zh-CN/components/log",
      "panelJustify": true,
      "panelTitle": "日志",
      "order": 0
    },
    "order": 0
  },
  {
    "name": "pagination",
    "icon": "fa fa-window-minimize",
    "description": "分页组件，可以对列表进行分页展示，提高页面性能",
    "previewSchema": {
      "type": "pagination",
      "mode": "normal",
      "layout": [
        "pager"
      ],
      "activePage": 1,
      "lastPage": 1,
      "total": 1,
      "hasNext": false,
      "disabled": false,
      "perPageAvailable": [
        10,
        20,
        50,
        100
      ],
      "perPage": 10,
      "maxButtons": 7,
      "ellipsisPageGap": 5
    },
    "tags": [
      "展示"
    ],
    "docLink": "/amis/zh-CN/components/pagination",
    "scaffold": {
      "type": "pagination",
      "mode": "normal",
      "activePage": 1,
      "lastPage": 1,
      "total": 1,
      "hasNext": false,
      "disabled": false,
      "perPage": 10,
      "maxButtons": 7,
      "ellipsisPageGap": 5
    },
    "isBaseComponent": true,
    "rendererName": "pagination",
    "id": "9e513d7e82d5",
    "plugin": {
      "rendererName": "pagination",
      "$schema": "/schemas/PaginationSchema.json",
      "name": "pagination",
      "isBaseComponent": true,
      "description": "分页组件，可以对列表进行分页展示，提高页面性能",
      "docLink": "/amis/zh-CN/components/pagination",
      "icon": "fa fa-window-minimize",
      "lastLayoutSetting": [
        "pager"
      ],
      "layoutOptions": [
        {
          "text": "总数",
          "value": "total",
          "checked": false
        },
        {
          "text": "每页条数",
          "value": "perPage",
          "checked": false
        },
        {
          "text": "分页",
          "value": "pager",
          "checked": true
        },
        {
          "text": "跳转页",
          "value": "go",
          "checked": false
        }
      ],
      "panelTitle": "分页器",
      "events": [
        {
          "eventName": "change",
          "eventLabel": "值变化",
          "description": "输入内容变化",
          "dataSchema": [
            {
              "type": "object",
              "properties": {
                "data": {
                  "type": "object",
                  "title": "数据",
                  "properties": {
                    "page": {
                      "type": "number",
                      "title": "当前页码值"
                    },
                    "perPage": {
                      "type": "number",
                      "title": "每页显示的记录数"
                    }
                  },
                  "description": "当前数据域，可以通过.字段名读取对应的值"
                }
              }
            }
          ]
        }
      ],
      "panelJustify": true,
      "regions": [
        {
          "key": "body",
          "label": "内容区"
        }
      ],
      "order": 0
    },
    "order": 0
  },
  {
    "name": "自定义渲染器",
    "icon": "fa fa-user",
    "description": "这只是个示例",
    "previewSchema": {
      "type": "my-renderer",
      "target": "demo"
    },
    "tags": [
      "自定义",
      "表单项"
    ],
    "scaffold": {
      "type": "my-renderer",
      "target": "233"
    },
    "rendererName": "my-renderer",
    "id": "3f989bf8e8d8",
    "plugin": {
      "rendererName": "my-renderer",
      "$schema": "/schemas/UnkownSchema.json",
      "name": "自定义渲染器",
      "description": "这只是个示例",
      "icon": "fa fa-user",
      "panelTitle": "自定义组件",
      "panelBody": [
        {
          "type": "tabs",
          "tabsMode": "line",
          "className": "m-t-n-xs",
          "contentClassName": "no-border p-l-none p-r-none",
          "tabs": [
            {
              "title": "常规",
              "body": [
                {
                  "name": "target",
                  "label": "Target",
                  "type": "input-text"
                }
              ]
            },
            {
              "title": "外观",
              "body": []
            }
          ]
        }
      ],
      "popOverBody": [
        {
          "name": "target",
          "label": "Target",
          "type": "input-text"
        }
      ],
      "order": 0
    },
    "order": 0
  },
  {
    "name": "左右均分",
    "icon": "fa fa-columns",
    "description": "常见布局：左右均分布局（基于 CSS Flex 实现的布局容器）。",
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "第一列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第二列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第三列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        }
      ],
      "style": {
        "position": "relative",
        "rowGap": "10px",
        "columnGap": "10px"
      }
    },
    "tags": [
      "常见布局"
    ],
    "docLink": "/amis/zh-CN/components/flex",
    "scaffold": {
      "type": "flex",
      "className": "p-1",
      "items": [
        {
          "type": "wrapper",
          "size": "xs",
          "body": [],
          "style": {
            "flex": "1 1 auto",
            "flexBasis": "auto",
            "flexGrow": 1,
            "display": "block"
          }
        },
        {
          "type": "wrapper",
          "size": "xs",
          "body": [],
          "style": {
            "flex": "1 1 auto",
            "flexBasis": "auto",
            "flexGrow": 1,
            "display": "block"
          }
        }
      ],
      "alignItems": "stretch"
    },
    "disabledRendererPlugin": false,
    "isBaseComponent": false,
    "pluginIcon": "layout-2cols-plugin",
    "rendererName": "flex",
    "id": "faca7176e3d6",
    "plugin": {
      "rendererName": "flex",
      "$schema": "/schemas/FlexSchema.json",
      "disabledRendererPlugin": false,
      "name": "左右均分",
      "order": 200,
      "isBaseComponent": false,
      "icon": "fa fa-columns",
      "pluginIcon": "layout-2cols-plugin",
      "description": "常见布局：左右均分布局（基于 CSS Flex 实现的布局容器）。",
      "docLink": "/amis/zh-CN/components/flex",
      "panelTitle": "布局容器",
      "panelJustify": true,
      "regions": [
        {
          "key": "items",
          "label": "子节点集合"
        }
      ]
    },
    "order": 0
  },
  {
    "name": "1:2 布局",
    "icon": "fa fa-columns",
    "description": "常见布局：1:2 布局（基于 CSS Flex 实现的布局容器）。",
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "第一列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第二列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第三列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        }
      ],
      "style": {
        "position": "relative",
        "rowGap": "10px",
        "columnGap": "10px"
      }
    },
    "tags": [
      "常见布局"
    ],
    "docLink": "/amis/zh-CN/components/flex",
    "scaffold": {
      "type": "flex",
      "className": "p-1",
      "items": [
        {
          "type": "wrapper",
          "size": "xs",
          "body": [],
          "style": {
            "flex": "1 1 auto",
            "flexBasis": "auto",
            "flexGrow": 1,
            "display": "block"
          }
        },
        {
          "type": "wrapper",
          "size": "xs",
          "body": [],
          "style": {
            "flex": "1 1 auto",
            "flexBasis": "auto",
            "flexGrow": 2,
            "display": "block"
          }
        }
      ],
      "alignItems": "stretch"
    },
    "disabledRendererPlugin": false,
    "isBaseComponent": false,
    "pluginIcon": "layout-2cols-plugin",
    "rendererName": "flex",
    "id": "804fd599ede0",
    "plugin": {
      "rendererName": "flex",
      "$schema": "/schemas/FlexSchema.json",
      "disabledRendererPlugin": false,
      "name": "1:2 布局",
      "order": 201,
      "isBaseComponent": false,
      "icon": "fa fa-columns",
      "pluginIcon": "layout-2cols-plugin",
      "description": "常见布局：1:2 布局（基于 CSS Flex 实现的布局容器）。",
      "docLink": "/amis/zh-CN/components/flex",
      "panelTitle": "布局容器",
      "panelJustify": true,
      "regions": [
        {
          "key": "items",
          "label": "子节点集合"
        }
      ]
    },
    "order": 0
  },
  {
    "name": "1:3 布局",
    "icon": "fa fa-columns",
    "description": "常见布局：1:3 布局（基于 CSS Flex 实现的布局容器）。",
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "第一列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第二列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第三列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        }
      ],
      "style": {
        "position": "relative",
        "rowGap": "10px",
        "columnGap": "10px"
      }
    },
    "tags": [
      "常见布局"
    ],
    "docLink": "/amis/zh-CN/components/flex",
    "scaffold": {
      "type": "flex",
      "className": "p-1",
      "items": [
        {
          "type": "wrapper",
          "size": "xs",
          "body": [],
          "style": {
            "flex": "1 1 auto",
            "flexBasis": "auto",
            "flexGrow": 1,
            "display": "block"
          }
        },
        {
          "type": "wrapper",
          "size": "xs",
          "body": [],
          "style": {
            "flex": "1 1 auto",
            "flexBasis": "auto",
            "flexGrow": 3,
            "display": "block"
          }
        }
      ],
      "alignItems": "stretch"
    },
    "disabledRendererPlugin": false,
    "isBaseComponent": false,
    "pluginIcon": "layout-2cols-plugin",
    "rendererName": "flex",
    "id": "1dd1a6ea8721",
    "plugin": {
      "rendererName": "flex",
      "$schema": "/schemas/FlexSchema.json",
      "disabledRendererPlugin": false,
      "name": "1:3 布局",
      "order": 202,
      "isBaseComponent": false,
      "icon": "fa fa-columns",
      "pluginIcon": "layout-2cols-plugin",
      "description": "常见布局：1:3 布局（基于 CSS Flex 实现的布局容器）。",
      "docLink": "/amis/zh-CN/components/flex",
      "panelTitle": "布局容器",
      "panelJustify": true,
      "regions": [
        {
          "key": "items",
          "label": "子节点集合"
        }
      ]
    },
    "order": 0
  },
  {
    "name": "上下布局",
    "icon": "fa fa-columns",
    "description": "常见布局：上下布局（基于 CSS Flex 实现的布局容器）。",
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "第一列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第二列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第三列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        }
      ],
      "style": {
        "position": "relative",
        "rowGap": "10px",
        "columnGap": "10px"
      }
    },
    "tags": [
      "常见布局"
    ],
    "docLink": "/amis/zh-CN/components/flex",
    "scaffold": {
      "type": "flex",
      "className": "p-1",
      "items": [
        {
          "type": "wrapper",
          "size": "xs",
          "body": [],
          "style": {
            "flex": "1 1 auto",
            "flexBasis": "auto",
            "flexGrow": 1,
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignItems": "stretch"
          }
        },
        {
          "type": "wrapper",
          "size": "xs",
          "body": [],
          "style": {
            "flex": "1 1 auto",
            "flexBasis": "auto",
            "flexGrow": 1,
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignItems": "stretch"
          }
        }
      ],
      "direction": "column",
      "justify": "center",
      "alignItems": "stretch"
    },
    "disabledRendererPlugin": false,
    "isBaseComponent": false,
    "pluginIcon": "layout-2row-plugin",
    "rendererName": "flex",
    "id": "a0e84312ee08",
    "plugin": {
      "rendererName": "flex",
      "$schema": "/schemas/FlexSchema.json",
      "disabledRendererPlugin": false,
      "name": "上下布局",
      "order": 203,
      "isBaseComponent": false,
      "icon": "fa fa-columns",
      "pluginIcon": "layout-2row-plugin",
      "description": "常见布局：上下布局（基于 CSS Flex 实现的布局容器）。",
      "docLink": "/amis/zh-CN/components/flex",
      "panelTitle": "布局容器",
      "panelJustify": true,
      "regions": [
        {
          "key": "items",
          "label": "子节点集合"
        }
      ]
    },
    "order": 0
  },
  {
    "name": "三栏均分",
    "icon": "fa fa-columns",
    "description": "常见布局：三栏均分布局（基于 CSS Flex 实现的布局容器）。",
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "第一列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第二列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第三列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        }
      ],
      "style": {
        "position": "relative",
        "rowGap": "10px",
        "columnGap": "10px"
      }
    },
    "tags": [
      "常见布局"
    ],
    "docLink": "/amis/zh-CN/components/flex",
    "scaffold": {
      "type": "flex",
      "className": "p-1",
      "items": [
        {
          "type": "wrapper",
          "size": "xs",
          "body": [],
          "style": {
            "flex": "1 1 auto",
            "flexBasis": "auto",
            "flexGrow": 1,
            "display": "block"
          }
        },
        {
          "type": "wrapper",
          "size": "xs",
          "body": [],
          "style": {
            "flex": "1 1 auto",
            "flexBasis": "auto",
            "flexGrow": 1,
            "display": "block"
          }
        },
        {
          "type": "wrapper",
          "size": "xs",
          "body": [],
          "style": {
            "flex": "1 1 auto",
            "display": "block",
            "flexBasis": "auto",
            "flexGrow": 1
          }
        }
      ],
      "alignItems": "stretch"
    },
    "disabledRendererPlugin": false,
    "isBaseComponent": false,
    "pluginIcon": "layout-3cols-plugin",
    "rendererName": "flex",
    "id": "42ed6d51a6c2",
    "plugin": {
      "rendererName": "flex",
      "$schema": "/schemas/FlexSchema.json",
      "disabledRendererPlugin": false,
      "name": "三栏均分",
      "order": 300,
      "isBaseComponent": false,
      "icon": "fa fa-columns",
      "pluginIcon": "layout-3cols-plugin",
      "description": "常见布局：三栏均分布局（基于 CSS Flex 实现的布局容器）。",
      "docLink": "/amis/zh-CN/components/flex",
      "panelTitle": "布局容器",
      "panelJustify": true,
      "regions": [
        {
          "key": "items",
          "label": "子节点集合"
        }
      ]
    },
    "order": 0
  },
  {
    "name": "1:2:3 三栏",
    "icon": "fa fa-columns",
    "description": "常见布局：1:2:3 三栏布局（基于 CSS Flex 实现的布局容器）。",
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "第一列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第二列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第三列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        }
      ],
      "style": {
        "position": "relative",
        "rowGap": "10px",
        "columnGap": "10px"
      }
    },
    "tags": [
      "常见布局"
    ],
    "docLink": "/amis/zh-CN/components/flex",
    "scaffold": {
      "type": "flex",
      "className": "p-1",
      "items": [
        {
          "type": "wrapper",
          "size": "xs",
          "body": [],
          "style": {
            "flex": "1 1 auto",
            "flexBasis": "auto",
            "flexGrow": 1,
            "display": "block"
          }
        },
        {
          "type": "wrapper",
          "size": "xs",
          "body": [],
          "style": {
            "flex": "1 1 auto",
            "flexBasis": "auto",
            "flexGrow": 2,
            "display": "block"
          }
        },
        {
          "type": "wrapper",
          "size": "xs",
          "body": [],
          "style": {
            "flex": "1 1 auto",
            "display": "block",
            "flexBasis": "auto",
            "flexGrow": 3
          }
        }
      ],
      "alignItems": "stretch"
    },
    "disabledRendererPlugin": false,
    "isBaseComponent": false,
    "pluginIcon": "layout-3cols-plugin",
    "rendererName": "flex",
    "id": "e2cf8b41b6d4",
    "plugin": {
      "rendererName": "flex",
      "$schema": "/schemas/FlexSchema.json",
      "disabledRendererPlugin": false,
      "name": "1:2:3 三栏",
      "order": 301,
      "isBaseComponent": false,
      "icon": "fa fa-columns",
      "pluginIcon": "layout-3cols-plugin",
      "description": "常见布局：1:2:3 三栏布局（基于 CSS Flex 实现的布局容器）。",
      "docLink": "/amis/zh-CN/components/flex",
      "panelTitle": "布局容器",
      "panelJustify": true,
      "regions": [
        {
          "key": "items",
          "label": "子节点集合"
        }
      ]
    },
    "order": 0
  },
  {
    "name": "上中下",
    "icon": "fa fa-columns",
    "description": "常见布局：上中下布局（基于 CSS Flex 实现的布局容器）。",
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "第一列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第二列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第三列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        }
      ],
      "style": {
        "position": "relative",
        "rowGap": "10px",
        "columnGap": "10px"
      }
    },
    "tags": [
      "常见布局"
    ],
    "docLink": "/amis/zh-CN/components/flex",
    "scaffold": {
      "type": "flex",
      "className": "p-1",
      "items": [
        {
          "type": "wrapper",
          "size": "xs",
          "body": [],
          "style": {
            "flex": "1 1 auto",
            "flexBasis": "auto",
            "flexGrow": 1,
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignItems": "stretch"
          }
        },
        {
          "type": "wrapper",
          "size": "xs",
          "body": [],
          "style": {
            "flex": "1 1 auto",
            "flexBasis": "auto",
            "flexGrow": 1,
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignItems": "stretch"
          }
        },
        {
          "type": "wrapper",
          "size": "xs",
          "body": [],
          "style": {
            "flex": "1 1 auto",
            "flexBasis": "auto",
            "flexGrow": 1,
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignItems": "stretch"
          }
        }
      ],
      "direction": "column",
      "justify": "center",
      "alignItems": "stretch"
    },
    "disabledRendererPlugin": false,
    "isBaseComponent": false,
    "pluginIcon": "layout-3row-plugin",
    "rendererName": "flex",
    "id": "966c0433ae85",
    "plugin": {
      "rendererName": "flex",
      "$schema": "/schemas/FlexSchema.json",
      "disabledRendererPlugin": false,
      "name": "上中下",
      "order": 303,
      "isBaseComponent": false,
      "icon": "fa fa-columns",
      "pluginIcon": "layout-3row-plugin",
      "description": "常见布局：上中下布局（基于 CSS Flex 实现的布局容器）。",
      "docLink": "/amis/zh-CN/components/flex",
      "panelTitle": "布局容器",
      "panelJustify": true,
      "regions": [
        {
          "key": "items",
          "label": "子节点集合"
        }
      ]
    },
    "order": 0
  },
  {
    "name": "一拖二",
    "icon": "fa fa-columns",
    "description": "常见布局：一拖二布局（基于 CSS Flex 实现的布局容器）。",
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "第一列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第二列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第三列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        }
      ],
      "style": {
        "position": "relative",
        "rowGap": "10px",
        "columnGap": "10px"
      }
    },
    "tags": [
      "常见布局"
    ],
    "docLink": "/amis/zh-CN/components/flex",
    "scaffold": {
      "type": "flex",
      "className": "p-1",
      "items": [
        {
          "type": "wrapper",
          "size": "xs",
          "body": [],
          "style": {
            "flex": "0 0 auto",
            "flexBasis": "100px",
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignItems": "stretch"
          }
        },
        {
          "type": "flex",
          "items": [
            {
              "type": "wrapper",
              "size": "xs",
              "body": [],
              "style": {
                "flex": "1 1 auto",
                "flexBasis": "auto",
                "flexGrow": 1,
                "display": "block"
              }
            },
            {
              "type": "wrapper",
              "size": "xs",
              "body": [],
              "style": {
                "flex": "1 1 auto",
                "flexBasis": "auto",
                "flexGrow": 1,
                "display": "block"
              }
            }
          ],
          "style": {
            "flex": "1 1 auto",
            "padding": 0
          },
          "alignItems": "stretch"
        }
      ],
      "style": {
        "overflowX": "auto",
        "margin": "0",
        "maxWidth": "auto",
        "height": "350px",
        "overflowY": "auto"
      },
      "direction": "column",
      "justify": "center",
      "alignItems": "stretch",
      "isFixedHeight": true
    },
    "disabledRendererPlugin": false,
    "isBaseComponent": false,
    "pluginIcon": "layout-1with2-plugin",
    "rendererName": "flex",
    "id": "20e82cffb2b8",
    "plugin": {
      "rendererName": "flex",
      "$schema": "/schemas/FlexSchema.json",
      "disabledRendererPlugin": false,
      "name": "一拖二",
      "order": 303,
      "isBaseComponent": false,
      "icon": "fa fa-columns",
      "pluginIcon": "layout-1with2-plugin",
      "description": "常见布局：一拖二布局（基于 CSS Flex 实现的布局容器）。",
      "docLink": "/amis/zh-CN/components/flex",
      "panelTitle": "布局容器",
      "panelJustify": true,
      "regions": [
        {
          "key": "items",
          "label": "子节点集合"
        }
      ]
    },
    "order": 0
  },
  {
    "name": "左一右二",
    "icon": "fa fa-columns",
    "description": "常见布局：左一右二布局（基于 CSS Flex 实现的布局容器）。",
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "第一列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第二列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第三列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        }
      ],
      "style": {
        "position": "relative",
        "rowGap": "10px",
        "columnGap": "10px"
      }
    },
    "tags": [
      "常见布局"
    ],
    "docLink": "/amis/zh-CN/components/flex",
    "scaffold": {
      "type": "flex",
      "className": "p-1",
      "items": [
        {
          "type": "wrapper",
          "size": "xs",
          "body": [],
          "style": {
            "flex": "0 0 auto",
            "flexBasis": "250px",
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignItems": "stretch"
          }
        },
        {
          "type": "flex",
          "items": [
            {
              "type": "wrapper",
              "size": "xs",
              "body": [],
              "style": {
                "flex": "1 1 auto",
                "flexBasis": "auto",
                "flexGrow": 1,
                "display": "block"
              }
            },
            {
              "type": "wrapper",
              "size": "xs",
              "body": [],
              "style": {
                "flex": "1 1 auto",
                "flexBasis": "auto",
                "flexGrow": 1,
                "display": "block"
              }
            }
          ],
          "style": {
            "flex": "1 1 auto",
            "margin": "0"
          },
          "alignItems": "stretch",
          "direction": "column",
          "justify": "center"
        }
      ],
      "style": {
        "overflowX": "auto",
        "margin": "0",
        "maxWidth": "auto",
        "height": "350px",
        "overflowY": "auto"
      },
      "direction": "row",
      "justify": "center",
      "alignItems": "stretch",
      "isFixedHeight": true
    },
    "disabledRendererPlugin": false,
    "isBaseComponent": false,
    "pluginIcon": "layout-1-2-plugin",
    "rendererName": "flex",
    "id": "00c9704d6876",
    "plugin": {
      "rendererName": "flex",
      "$schema": "/schemas/FlexSchema.json",
      "disabledRendererPlugin": false,
      "name": "左一右二",
      "order": 304,
      "isBaseComponent": false,
      "icon": "fa fa-columns",
      "pluginIcon": "layout-1-2-plugin",
      "description": "常见布局：左一右二布局（基于 CSS Flex 实现的布局容器）。",
      "docLink": "/amis/zh-CN/components/flex",
      "panelTitle": "布局容器",
      "panelJustify": true,
      "regions": [
        {
          "key": "items",
          "label": "子节点集合"
        }
      ]
    },
    "order": 0
  },
  {
    "name": "二拖一",
    "icon": "fa fa-columns",
    "description": "常见布局：二拖一布局（基于 CSS Flex 实现的布局容器）。",
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "第一列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第二列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第三列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        }
      ],
      "style": {
        "position": "relative",
        "rowGap": "10px",
        "columnGap": "10px"
      }
    },
    "tags": [
      "常见布局"
    ],
    "docLink": "/amis/zh-CN/components/flex",
    "scaffold": {
      "type": "flex",
      "className": "p-1",
      "items": [
        {
          "type": "flex",
          "items": [
            {
              "type": "wrapper",
              "size": "xs",
              "body": [],
              "style": {
                "flex": "1 1 auto",
                "flexBasis": "auto",
                "flexGrow": 1,
                "display": "block"
              }
            },
            {
              "type": "wrapper",
              "size": "xs",
              "body": [],
              "style": {
                "flex": "1 1 auto",
                "flexBasis": "auto",
                "flexGrow": 1,
                "display": "block"
              }
            }
          ],
          "style": {
            "flex": "0 0 auto",
            "flexBasis": "100px"
          },
          "alignItems": "stretch"
        },
        {
          "type": "wrapper",
          "size": "xs",
          "body": [],
          "style": {
            "flex": "1 1 auto",
            "flexBasis": "200px",
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignItems": "stretch"
          }
        }
      ],
      "style": {
        "overflowX": "auto",
        "margin": "0",
        "maxWidth": "auto",
        "height": "350px",
        "overflowY": "auto"
      },
      "direction": "column",
      "justify": "center",
      "alignItems": "stretch",
      "isFixedHeight": true
    },
    "disabledRendererPlugin": false,
    "isBaseComponent": false,
    "pluginIcon": "layout-2with1-plugin",
    "rendererName": "flex",
    "id": "73e56018c42b",
    "plugin": {
      "rendererName": "flex",
      "$schema": "/schemas/FlexSchema.json",
      "disabledRendererPlugin": false,
      "name": "二拖一",
      "order": 305,
      "isBaseComponent": false,
      "icon": "fa fa-columns",
      "pluginIcon": "layout-2with1-plugin",
      "description": "常见布局：二拖一布局（基于 CSS Flex 实现的布局容器）。",
      "docLink": "/amis/zh-CN/components/flex",
      "panelTitle": "布局容器",
      "panelJustify": true,
      "regions": [
        {
          "key": "items",
          "label": "子节点集合"
        }
      ]
    },
    "order": 0
  },
  {
    "name": "左二右一",
    "icon": "fa fa-columns",
    "description": "常见布局：左二右一布局（基于 CSS Flex 实现的布局容器）。",
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "第一列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第二列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第三列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        }
      ],
      "style": {
        "position": "relative",
        "rowGap": "10px",
        "columnGap": "10px"
      }
    },
    "tags": [
      "常见布局"
    ],
    "docLink": "/amis/zh-CN/components/flex",
    "scaffold": {
      "type": "flex",
      "className": "p-1",
      "items": [
        {
          "type": "flex",
          "items": [
            {
              "type": "wrapper",
              "size": "xs",
              "body": [],
              "style": {
                "flex": "1 1 auto",
                "flexBasis": "auto",
                "flexGrow": 1,
                "display": "block"
              }
            },
            {
              "type": "wrapper",
              "size": "xs",
              "body": [],
              "style": {
                "flex": "1 1 auto",
                "flexBasis": "auto",
                "flexGrow": 1,
                "display": "block"
              }
            }
          ],
          "style": {
            "flex": "1 1 auto"
          },
          "alignItems": "stretch",
          "direction": "column",
          "justify": "center"
        },
        {
          "type": "wrapper",
          "size": "xs",
          "body": [],
          "style": {
            "flex": "0 0 auto",
            "flexBasis": "250px",
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignItems": "stretch"
          }
        }
      ],
      "style": {
        "overflowX": "auto",
        "margin": "0",
        "maxWidth": "auto",
        "height": "350px",
        "overflowY": "auto"
      },
      "direction": "row",
      "justify": "center",
      "alignItems": "stretch",
      "isFixedHeight": true
    },
    "disabledRendererPlugin": false,
    "isBaseComponent": false,
    "pluginIcon": "layout-2-1-plugin",
    "rendererName": "flex",
    "id": "95c7dd28e369",
    "plugin": {
      "rendererName": "flex",
      "$schema": "/schemas/FlexSchema.json",
      "disabledRendererPlugin": false,
      "name": "左二右一",
      "order": 306,
      "isBaseComponent": false,
      "icon": "fa fa-columns",
      "pluginIcon": "layout-2-1-plugin",
      "description": "常见布局：左二右一布局（基于 CSS Flex 实现的布局容器）。",
      "docLink": "/amis/zh-CN/components/flex",
      "panelTitle": "布局容器",
      "panelJustify": true,
      "regions": [
        {
          "key": "items",
          "label": "子节点集合"
        }
      ]
    },
    "order": 0
  },
  {
    "name": "经典布局",
    "icon": "fa fa-columns",
    "description": "常见布局：经典布局（基于 CSS Flex 实现的布局容器）。",
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "第一列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第二列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第三列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        }
      ],
      "style": {
        "position": "relative",
        "rowGap": "10px",
        "columnGap": "10px"
      }
    },
    "tags": [
      "常见布局"
    ],
    "docLink": "/amis/zh-CN/components/flex",
    "scaffold": {
      "type": "flex",
      "className": "p-1",
      "items": [
        {
          "type": "wrapper",
          "size": "xs",
          "body": [],
          "style": {
            "flex": "0 0 auto",
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignItems": "stretch"
          }
        },
        {
          "type": "flex",
          "items": [
            {
              "type": "wrapper",
              "size": "xs",
              "body": [],
              "style": {
                "flex": "0 0 auto",
                "flexBasis": "250px",
                "display": "flex",
                "flexDirection": "column",
                "justifyContent": "flex-start",
                "alignItems": "stretch"
              }
            },
            {
              "type": "flex",
              "items": [
                {
                  "type": "wrapper",
                  "size": "xs",
                  "body": [],
                  "style": {
                    "flex": "1 1 auto",
                    "flexBasis": "auto",
                    "flexGrow": 1,
                    "display": "block"
                  }
                },
                {
                  "type": "wrapper",
                  "size": "xs",
                  "body": [],
                  "style": {
                    "flex": "1 1 auto",
                    "flexBasis": "auto",
                    "flexGrow": 1,
                    "display": "block"
                  }
                }
              ],
              "style": {
                "position": "static",
                "overflowX": "auto",
                "overflowY": "auto",
                "margin": "0",
                "flex": "1 1 auto",
                "flexGrow": 1,
                "flexBasis": "auto"
              },
              "alignItems": "stretch",
              "direction": "column",
              "justify": "center",
              "isFixedHeight": false,
              "isFixedWidth": false
            }
          ],
          "style": {
            "flex": "1 1 auto",
            "overflowX": "auto",
            "margin": "0",
            "maxWidth": "auto",
            "overflowY": "auto",
            "position": "static",
            "minWidth": "auto",
            "width": "auto",
            "maxHeight": "auto",
            "minHeight": "300px"
          },
          "direction": "row",
          "justify": "flex-start",
          "alignItems": "stretch",
          "isFixedHeight": false,
          "isFixedWidth": false
        }
      ],
      "direction": "column",
      "justify": "center",
      "alignItems": "stretch"
    },
    "disabledRendererPlugin": false,
    "isBaseComponent": false,
    "pluginIcon": "layout-3-1-plugin",
    "rendererName": "flex",
    "id": "e44c46222600",
    "plugin": {
      "rendererName": "flex",
      "$schema": "/schemas/FlexSchema.json",
      "disabledRendererPlugin": false,
      "name": "经典布局",
      "order": 307,
      "isBaseComponent": false,
      "icon": "fa fa-columns",
      "pluginIcon": "layout-3-1-plugin",
      "description": "常见布局：经典布局（基于 CSS Flex 实现的布局容器）。",
      "docLink": "/amis/zh-CN/components/flex",
      "panelTitle": "布局容器",
      "panelJustify": true,
      "regions": [
        {
          "key": "items",
          "label": "子节点集合"
        }
      ]
    },
    "order": 0
  },
  {
    "name": "y轴滚动容器",
    "icon": "fa fa-columns",
    "description": "y轴滚动容器: 基于 CSS Flex 实现的布局容器。",
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "第一列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第二列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第三列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        }
      ],
      "style": {
        "position": "relative",
        "rowGap": "10px",
        "columnGap": "10px"
      }
    },
    "tags": [
      "布局容器"
    ],
    "docLink": "/amis/zh-CN/components/flex",
    "scaffold": {
      "type": "flex",
      "className": "p-1",
      "items": [
        {
          "type": "container",
          "size": "xs",
          "body": [],
          "wrapperBody": false,
          "style": {
            "flex": "0 0 auto",
            "flexBasis": "60px",
            "display": "block",
            "minWidth": "auto",
            "minHeight": "auto"
          }
        },
        {
          "type": "container",
          "size": "xs",
          "body": [],
          "wrapperBody": false,
          "style": {
            "flex": "0 0 auto",
            "flexBasis": "60px",
            "display": "block",
            "position": "static",
            "minWidth": "auto",
            "minHeight": "auto"
          }
        },
        {
          "type": "container",
          "size": "xs",
          "body": [],
          "wrapperBody": false,
          "style": {
            "flex": "0 0 auto",
            "flexBasis": "60px",
            "display": "block",
            "position": "static",
            "minWidth": "auto",
            "minHeight": "auto"
          }
        },
        {
          "type": "container",
          "size": "xs",
          "body": [],
          "wrapperBody": false,
          "style": {
            "flex": "0 0 auto",
            "flexBasis": "60px",
            "display": "block",
            "position": "static",
            "minWidth": "auto",
            "minHeight": "auto"
          }
        },
        {
          "type": "container",
          "size": "xs",
          "body": [],
          "wrapperBody": false,
          "style": {
            "flex": "0 0 auto",
            "flexBasis": "60px",
            "display": "block",
            "position": "static",
            "minWidth": "auto",
            "minHeight": "auto"
          }
        },
        {
          "type": "container",
          "size": "xs",
          "body": [],
          "wrapperBody": false,
          "style": {
            "flex": "0 0 auto",
            "flexBasis": "60px",
            "display": "block",
            "position": "static",
            "minWidth": "auto",
            "minHeight": "auto"
          }
        }
      ],
      "direction": "column",
      "justify": "flex-start",
      "alignItems": "stretch",
      "style": {
        "position": "static",
        "minHeight": "auto",
        "maxWidth": "auto",
        "minWidth": "auto",
        "height": "200px",
        "width": "auto",
        "overflowX": "auto",
        "overflowY": "scroll",
        "margin": "0"
      },
      "isFixedHeight": true,
      "isFixedWidth": false
    },
    "disabledRendererPlugin": false,
    "isBaseComponent": false,
    "pluginIcon": "layout-3row-plugin",
    "rendererName": "flex",
    "id": "3e176f1131fd",
    "plugin": {
      "rendererName": "flex",
      "$schema": "/schemas/FlexSchema.json",
      "disabledRendererPlugin": false,
      "name": "y轴滚动容器",
      "order": 504,
      "isBaseComponent": false,
      "icon": "fa fa-columns",
      "pluginIcon": "layout-3row-plugin",
      "description": "y轴滚动容器: 基于 CSS Flex 实现的布局容器。",
      "docLink": "/amis/zh-CN/components/flex",
      "panelTitle": "布局容器",
      "panelJustify": true,
      "regions": [
        {
          "key": "items",
          "label": "子节点集合"
        }
      ]
    },
    "order": 0
  },
  {
    "name": "x轴滚动容器",
    "icon": "fa fa-columns",
    "description": "x轴滚动容器: 基于 CSS Flex 实现的布局容器。",
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "第一列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第二列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        },
        {
          "type": "tpl",
          "tpl": "第三列",
          "wrapperComponent": "",
          "className": "bg-light center",
          "style": {
            "display": "block",
            "flex": "1 1 auto",
            "flexBasis": 0,
            "textAlign": "center",
            "marginRight": 10
          },
          "inline": false
        }
      ],
      "style": {
        "position": "relative",
        "rowGap": "10px",
        "columnGap": "10px"
      }
    },
    "tags": [
      "布局容器"
    ],
    "docLink": "/amis/zh-CN/components/flex",
    "scaffold": {
      "type": "flex",
      "className": "p-1",
      "items": [
        {
          "type": "container",
          "size": "xs",
          "body": [],
          "wrapperBody": false,
          "style": {
            "flex": "0 0 auto",
            "flexBasis": "200px",
            "display": "block",
            "position": "static",
            "minWidth": "auto",
            "minHeight": "auto"
          }
        },
        {
          "type": "container",
          "size": "xs",
          "body": [],
          "wrapperBody": false,
          "style": {
            "flex": "0 0 auto",
            "flexBasis": "200px",
            "display": "block",
            "position": "static",
            "minWidth": "auto",
            "minHeight": "auto"
          }
        },
        {
          "type": "container",
          "size": "xs",
          "body": [],
          "wrapperBody": false,
          "style": {
            "flex": "0 0 auto",
            "display": "block",
            "position": "static",
            "minWidth": "auto",
            "minHeight": "auto",
            "flexBasis": "200px"
          }
        },
        {
          "type": "container",
          "wrapperBody": false,
          "size": "xs",
          "body": [],
          "style": {
            "flex": "0 0 auto",
            "flexBasis": "200px",
            "display": "block",
            "position": "static",
            "minWidth": "auto",
            "minHeight": "auto"
          }
        },
        {
          "type": "container",
          "size": "xs",
          "body": [],
          "wrapperBody": false,
          "style": {
            "flex": "0 0 auto",
            "flexBasis": "200px",
            "display": "block",
            "position": "static",
            "minWidth": "auto",
            "minHeight": "auto"
          }
        },
        {
          "type": "container",
          "size": "xs",
          "body": [],
          "wrapperBody": false,
          "style": {
            "flex": "0 0 auto",
            "flexBasis": "200px",
            "display": "block",
            "position": "static",
            "minWidth": "auto",
            "minHeight": "auto"
          }
        },
        {
          "type": "container",
          "size": "xs",
          "body": [],
          "wrapperBody": false,
          "style": {
            "flex": "0 0 auto",
            "flexBasis": "200px",
            "display": "block",
            "position": "static",
            "minWidth": "auto",
            "minHeight": "auto"
          }
        }
      ],
      "direction": "row",
      "justify": "flex-start",
      "alignItems": "stretch",
      "style": {
        "position": "static",
        "minHeight": "auto",
        "maxWidth": "1080px",
        "minWidth": "auto",
        "height": "200px",
        "overflowX": "scroll",
        "overflowY": "scroll",
        "margin": "0 auto"
      },
      "isFixedHeight": true,
      "isFixedWidth": false
    },
    "disabledRendererPlugin": false,
    "isBaseComponent": false,
    "pluginIcon": "layout-3cols-plugin",
    "rendererName": "flex",
    "id": "e1f5ae2fdc97",
    "plugin": {
      "rendererName": "flex",
      "$schema": "/schemas/FlexSchema.json",
      "disabledRendererPlugin": false,
      "name": "x轴滚动容器",
      "order": 505,
      "isBaseComponent": false,
      "icon": "fa fa-columns",
      "pluginIcon": "layout-3cols-plugin",
      "description": "x轴滚动容器: 基于 CSS Flex 实现的布局容器。",
      "docLink": "/amis/zh-CN/components/flex",
      "panelTitle": "布局容器",
      "panelJustify": true,
      "regions": [
        {
          "key": "items",
          "label": "子节点集合"
        }
      ]
    },
    "order": 0
  }
]
