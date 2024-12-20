const plugins = [
  {
    "manager": "[Circular]",
    "order": -9999
  },
  {
    "manager": "[Circular]",
    "order": -9999
  },
  {
    "manager": "[Circular]",
    "order": -9999
  },
  {
    "manager": "[Circular]",
    "order": -9999,
    "rendererName": "error",
    "name": "Error",
    "isBaseComponent": true
  },
  {
    "manager": "[Circular]",
    "order": -9999
  },
  {
    "manager": "[Circular]",
    "rendererName": "flex",
    "$schema": "/schemas/FlexSchema.json",
    "disabledRendererPlugin": false,
    "name": "Flex 布局",
    "order": -1200,
    "isBaseComponent": true,
    "icon": "fa fa-columns",
    "pluginIcon": "flex-container-plugin",
    "description": "布局容器主要用于设计复杂布局的容器组件，基于 CSS Flex 实现的布局效果，比 Grid 和 HBox 对子节点位置的可控性更强，比用 CSS 类的方式更简单易用",
    "docLink": "/amis/zh-CN/components/flex",
    "tags": [
      "布局容器"
    ],
    "scaffold": {
      "type": "flex",
      "items": [
        {
          "type": "container",
          "body": [
          ],
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
          "body": [
          ],
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
          "body": [
          ],
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
    "panelTitle": "布局容器",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "子节点集合"
      }
    ]
  },
  {
    "manager": "[Circular]",
    "panelTitle": "表单项",
    "order": -990,
    "pluginIcon": "form-plugin"
  },
  {
    "manager": "[Circular]",
    "rendererName": "crud2",
    "name": "表格2.0",
    "panelTitle": "表格2.0",
    "subPanelTitle": "表格2.0",
    "icon": "fa fa-table",
    "panelIcon": "fa fa-table",
    "subPanelIcon": "fa fa-table",
    "pluginIcon": "table-plugin",
    "panelJustify": true,
    "multifactor": true,
    "order": -950,
    "$schema": "/schemas/CRUD2TableSchema.json",
    "docLink": "/amis/zh-CN/components/table2",
    "tags": [
      "数据容器"
    ],
    "_dynamicControls": {
    },
    "dsManager": {
      "builders": {
      }
    },
    "events": "[Circular]",
    "actions": "[Circular]",
    "isBaseComponent": true,
    "description": "用来实现对数据的增删改查，用来展示表格数据，可以配置列信息，然后关联数据便能完成展示。支持嵌套、超级表头、列固定、表头固顶、合并单元格等等。",
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
          "title": "操作",
          "buttons": [
            {
              "type": "button",
              "level": "link",
              "icon": "fa fa-eye",
              "actionType": "dialog",
              "dialog": {
                "title": "查看详情",
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
          "title": "示例",
          "type": "container",
          "body": [
            {
              "type": "text"
            }
          ]
        }
      ]
    }
  },
  {
    "manager": "[Circular]",
    "name": "表单",
    "panelTitle": "表单",
    "rendererName": "form",
    "isBaseComponent": true,
    "description": "可用于新建、编辑或者展示数据，配置初始化接口可从远端加载数据，配置提交接口可将数据发送远端。另外也可以将数据提交给其他组件，与其他组件通信。",
    "docLink": "/amis/zh-CN/components/form/index",
    "$schema": "/schemas/FormSchema.json",
    "tags": [
      "数据容器"
    ],
    "order": -900,
    "icon": "fa fa-list-alt",
    "pluginIcon": "form-plugin",
    "panelIcon": "form-plugin",
    "panelJustify": true,
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
    "events": "[Circular]",
    "actions": "[Circular]",
    "Features": [
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
      },
      {
        "label": "批量编辑",
        "value": "BulkEdit",
        "disabled": true
      }
    ],
    "_dynamicControls": {
    },
    "dsManager": {
      "builders": {
      }
    }
  },
  {
    "manager": "[Circular]",
    "rendererName": "service",
    "name": "服务Service",
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
    "tags": [
      "数据容器"
    ],
    "scaffold": {
      "type": "service",
      "body": [
      ]
    },
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
    "regions": [
      {
        "key": "body",
        "label": "内容区",
        "placeholder": {
          "key": null,
          "ref": null,
          "props": {
            "schema": {
              "type": "wrapper",
              "size": "lg",
              "body": {
                "type": "tpl",
                "tpl": "内容区域"
              }
            },
            "pathPrefix": "",
            "options": {
            }
          },
          "_owner": null,
          "_store": {
          }
        }
      }
    ],
    "events": "[Circular]",
    "actions": "[Circular]",
    "dsManager": {
      "builders": {
      }
    }
  },
  {
    "manager": "[Circular]",
    "rendererName": "crud",
    "$schema": "/schemas/CRUDSchema.json",
    "order": -800,
    "name": "增删改查",
    "isBaseComponent": true,
    "description": "用来实现对数据的增删改查，支持三种模式展示：table、cards和list. 负责数据的拉取，分页，单条操作，批量操作，排序，快速编辑等等功能。集成查询条件。",
    "docLink": "/amis/zh-CN/components/crud",
    "tags": [
      "数据容器"
    ],
    "icon": "fa fa-table",
    "pluginIcon": "table-plugin",
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
      "bulkActions": [
      ],
      "itemActions": [
      ]
    },
    "events": "[Circular]",
    "actions": "[Circular]",
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
            "body": [
            ]
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
            "body": [
            ]
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
            "body": [
            ]
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
    "panelTitle": "增删改查",
    "wrapperProps": {
      "affixHeader": false
    }
  },
  {
    "manager": "[Circular]",
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
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-text",
      "label": "文本",
      "name": "text"
    },
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
    "notRenderFormZone": true,
    "panelTitle": "文本框",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true
  },
  {
    "manager": "[Circular]",
    "rendererName": "input-email",
    "$schema": "/schemas/TextControlSchema.json",
    "order": -600,
    "searchKeywords": "文本框、邮箱框、input-email、URL框、input-url、密码框、input-password、密码输入框",
    "name": "邮箱框",
    "isBaseComponent": true,
    "icon": "fa fa-envelope-o",
    "pluginIcon": "input-email-plugin",
    "description": "验证输入是否符合邮箱的格式",
    "docLink": "/amis/zh-CN/components/form/input-text",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-email",
      "label": "邮箱",
      "name": "email"
    },
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": {
        "type": "input-email",
        "label": "邮箱",
        "name": "email"
      }
    },
    "notRenderFormZone": true,
    "panelTitle": "邮箱框",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "disabledRendererPlugin": true
  },
  {
    "manager": "[Circular]",
    "rendererName": "input-password",
    "$schema": "/schemas/TextControlSchema.json",
    "order": -600,
    "searchKeywords": "文本框、邮箱框、input-email、URL框、input-url、密码框、input-password、密码输入框",
    "name": "密码框",
    "isBaseComponent": true,
    "icon": "fa fa-asterisk",
    "pluginIcon": "input-password-plugin",
    "description": "验证输入是否符合邮箱的格式",
    "docLink": "/amis/zh-CN/components/form/input-text",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-password",
      "label": "密码",
      "name": "password"
    },
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": {
        "type": "input-password",
        "label": "密码",
        "name": "password"
      }
    },
    "notRenderFormZone": true,
    "panelTitle": "密码框",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "disabledRendererPlugin": true
  },
  {
    "manager": "[Circular]",
    "rendererName": "input-url",
    "$schema": "/schemas/TextControlSchema.json",
    "order": -600,
    "searchKeywords": "文本框、邮箱框、input-email、URL框、input-url、密码框、input-password、密码输入框",
    "name": "URL输入框",
    "isBaseComponent": true,
    "icon": "fa fa-link",
    "pluginIcon": "input-url-plugin",
    "description": "验证输入是否为合法的 URL",
    "docLink": "/amis/zh-CN/components/form/input-url",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-url",
      "label": "链接",
      "name": "url"
    },
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": {
        "type": "input-url",
        "label": "链接",
        "name": "url"
      }
    },
    "notRenderFormZone": true,
    "panelTitle": "URL",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "disabledRendererPlugin": true
  },
  {
    "manager": "[Circular]",
    "rendererName": "button",
    "$schema": "/schemas/ActionSchema.json",
    "order": -400,
    "name": "按钮",
    "isBaseComponent": true,
    "description": "用来展示一个按钮，你可以配置不同的展示样式，配置不同的点击行为。",
    "docLink": "/amis/zh-CN/components/button",
    "tags": [
      "功能"
    ],
    "icon": "fa fa-square",
    "pluginIcon": "button-plugin",
    "scaffold": {
      "type": "button",
      "label": "按钮",
      "onEvent": {
        "click": {
          "actions": [
          ]
        }
      }
    },
    "previewSchema": {
      "type": "button",
      "label": "按钮"
    },
    "panelTitle": "按钮",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true
  },
  {
    "manager": "[Circular]",
    "rendererName": "reset",
    "$schema": "/schemas/ActionSchema.json",
    "order": -400,
    "name": "重置",
    "isBaseComponent": true,
    "description": "一般用来重置表单数据到初始值。",
    "docLink": "/amis/zh-CN/components/button",
    "tags": [
      "功能"
    ],
    "icon": "fa fa-eraser",
    "pluginIcon": "button-plugin",
    "scaffold": {
      "type": "reset",
      "label": "重置"
    },
    "previewSchema": {
      "type": "reset",
      "label": "重置"
    },
    "panelTitle": "按钮",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "disabledRendererPlugin": true
  },
  {
    "manager": "[Circular]",
    "rendererName": "submit",
    "$schema": "/schemas/ActionSchema.json",
    "order": -400,
    "name": "提交",
    "isBaseComponent": true,
    "description": "用来提交表单，要求表单验证，如果在弹窗中会自动关闭弹窗。",
    "docLink": "/amis/zh-CN/components/button",
    "tags": [
      "功能"
    ],
    "icon": "fa fa-square",
    "pluginIcon": "button-plugin",
    "scaffold": {
      "type": "submit",
      "label": "提交",
      "level": "primary"
    },
    "previewSchema": {
      "type": "submit",
      "label": "提交",
      "level": "primary"
    },
    "panelTitle": "按钮",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "disabledRendererPlugin": true
  },
  {
    "manager": "[Circular]",
    "rendererName": "tpl",
    "$schema": "/schemas/TplSchema.json",
    "order": -200,
    "name": "文字",
    "isBaseComponent": true,
    "icon": "fa fa-file-o",
    "pluginIcon": "plain-plugin",
    "description": "用来展示文字或者段落，支持模板语法可用来关联动态数据。",
    "docLink": "/amis/zh-CN/components/tpl",
    "tags": [
      "展示"
    ],
    "previewSchema": {
      "type": "tpl",
      "tpl": "这是模板内容当前时间<%- new Date() %>"
    },
    "scaffold": {
      "type": "tpl",
      "tpl": "请编辑内容",
      "inline": true,
      "wrapperComponent": ""
    },
    "panelTitle": "文字",
    "panelJustify": true,
    "events": "[Circular]",
    "actions": "[Circular]",
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
  {
    "manager": "[Circular]",
    "rendererName": "grid",
    "$schema": "/schemas/GridSchema.json",
    "name": "分栏",
    "isBaseComponent": true,
    "description": "分栏布局",
    "searchKeywords": "水平分栏",
    "docLink": "/amis/zh-CN/components/grid",
    "tags": [
      "布局容器"
    ],
    "order": -2,
    "icon": "fa fa-th",
    "pluginIcon": "grid-plugin",
    "scaffold": {
      "type": "grid",
      "columns": [
        {
          "body": [
          ]
        },
        {
          "body": [
          ]
        }
      ]
    },
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
    "overrides": {
    }
  },
  {
    "manager": "[Circular]",
    "rendererName": "container",
    "$schema": "/schemas/ContainerSchema.json",
    "name": "容器",
    "isBaseComponent": true,
    "description": "一个简单的容器，可以将多个渲染器放置在一起。",
    "docLink": "/amis/zh-CN/components/container",
    "tags": [
      "布局容器"
    ],
    "order": -2,
    "icon": "fa fa-square-o",
    "pluginIcon": "container-plugin",
    "scaffold": {
      "type": "container",
      "body": [
      ],
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
    "previewSchema": {
      "type": "container",
      "body": "[Circular]",
      "style": "[Circular]",
      "size": "none",
      "wrapperBody": false
    },
    "regions": [
      {
        "key": "body",
        "label": "内容区"
      }
    ],
    "panelTitle": "容器",
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
  {
    "manager": "[Circular]",
    "rendererName": "container",
    "$schema": "/schemas/ContainerSchema.json",
    "name": "自由容器",
    "isBaseComponent": true,
    "description": "自由容器: 其直接子元素支持拖拽调整位置。",
    "docLink": "/amis/zh-CN/components/container",
    "tags": [
      "布局容器"
    ],
    "order": -2,
    "icon": "fa fa-square-o",
    "pluginIcon": "layout-free-container",
    "scaffold": {
      "type": "container",
      "isFreeContainer": true,
      "size": "xs",
      "body": [
      ],
      "wrapperBody": false,
      "style": {
        "position": "relative",
        "minHeight": "200px"
      }
    },
    "previewSchema": {
      "type": "container",
      "body": [
      ],
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
    "regions": [
      {
        "key": "body",
        "label": "内容区"
      }
    ],
    "panelTitle": "自由容器",
    "panelJustify": true,
    "events": "[Circular]"
  },
  {
    "manager": "[Circular]",
    "rendererName": "switch-container",
    "$schema": "/schemas/SwitchContainerSchema.json",
    "name": "状态容器",
    "isBaseComponent": true,
    "description": "根据状态进行组件条件渲染的容器，方便设计多状态组件",
    "tags": [
      "布局容器"
    ],
    "order": -2,
    "icon": "fa fa-square-o",
    "pluginIcon": "switch-container-plugin",
    "scaffold": {
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
    "previewSchema": {
      "type": "switch-container",
      "items": "[Circular]",
      "style": "[Circular]"
    },
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
    "overrides": {
    },
    "events": "[Circular]"
  },
  {
    "manager": "[Circular]",
    "rendererName": "flex",
    "$schema": "/schemas/FlexSchema.json",
    "disabledRendererPlugin": false,
    "name": "吸附容器",
    "order": -1,
    "isBaseComponent": true,
    "icon": "fa fa-columns",
    "pluginIcon": "layout-fixed-top",
    "description": "吸附容器: 可设置成吸顶或者吸顶展示。",
    "docLink": "/amis/zh-CN/components/flex",
    "tags": [
      "布局容器"
    ],
    "scaffold": {
      "type": "flex",
      "isSorptionContainer": true,
      "sorptionPosition": "top",
      "className": "p-1",
      "items": [
        {
          "type": "container",
          "body": [
          ],
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
          "body": [
          ],
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
          "body": [
          ],
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
          "body": [
          ],
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
    "panelTitle": "吸附容器",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "子节点集合"
      }
    ]
  },
  {
    "manager": "[Circular]",
    "dataViewer": {
      "type": "json",
      "name": "ctx",
      "asFormItem": true,
      "className": "m-b-none"
    },
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "flex",
    "$schema": "/schemas/FlexSchema.json",
    "disabledRendererPlugin": false,
    "name": "悬浮容器",
    "order": 0,
    "isBaseComponent": true,
    "icon": "fa fa-columns",
    "pluginIcon": "layout-fixed-plugin",
    "description": "悬浮容器: 基于 CSS Fixed 实现的特殊布局容器。",
    "docLink": "/amis/zh-CN/components/flex",
    "tags": [
      "布局容器"
    ],
    "scaffold": {
      "type": "container",
      "size": "xs",
      "body": [
      ],
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
    "previewSchema": {
      "type": "container",
      "body": [
      ],
      "style": {
        "position": "static",
        "display": "block"
      },
      "size": "none",
      "wrapperBody": false
    },
    "panelTitle": "悬浮容器",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "子节点集合"
      }
    ]
  },
  {
    "manager": "[Circular]",
    "rendererName": "collapse-group",
    "$schema": "/schemas/CollapseGroupSchema.json",
    "name": "折叠面板",
    "isBaseComponent": true,
    "description": "折叠面板，当信息量较大且分类较多时，可使用折叠面板进行分类收纳。",
    "docLink": "/amis/zh-CN/components/collapse",
    "tags": [
      "布局容器"
    ],
    "icon": "fa fa-align-justify",
    "pluginIcon": "collapse-plugin",
    "scaffold": {
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
    "previewSchema": {
      "type": "collapse-group",
      "activeKey": "[Circular]",
      "body": "[Circular]"
    },
    "events": "[Circular]",
    "activeKeyData": [
    ],
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
  {
    "manager": "[Circular]",
    "rendererName": "panel",
    "$schema": "/schemas/panelSchema.json",
    "name": "面板",
    "isBaseComponent": true,
    "icon": "fa fa-window-maximize",
    "pluginIcon": "panel-plugin",
    "description": "展示一个面板，可以配置标题，内容区。",
    "docLink": "/amis/zh-CN/components/panel",
    "tags": [
      "布局容器"
    ],
    "scaffold": {
      "type": "panel",
      "title": "标题",
      "body": "内容"
    },
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
    "regions": [
      {
        "key": "body",
        "label": "内容区",
        "renderMethod": "renderBody"
      },
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
  {
    "manager": "[Circular]",
    "rendererName": "tabs",
    "$schema": "/schemas/TabsSchema.json",
    "name": "选项卡",
    "isBaseComponent": true,
    "description": "选项卡，可以将内容分组用选项卡的形式展示，降低用户使用成本。",
    "docLink": "/amis/zh-CN/components/tabs",
    "tags": [
      "布局容器"
    ],
    "icon": "fa fa-folder-o",
    "pluginIcon": "tabs-plugin",
    "scaffold": {
      "type": "tabs",
      "tabs": [
        {
          "title": "选项卡1",
          "body": [
          ]
        },
        {
          "title": "选项卡2",
          "body": [
          ]
        }
      ],
      "mountOnEnter": true
    },
    "previewSchema": {
      "type": "tabs",
      "tabs": "[Circular]",
      "mountOnEnter": true
    },
    "notRenderFormZone": true,
    "regions": [
      {
        "key": "toolbar",
        "label": "工具栏",
        "preferTag": "展示"
      }
    ],
    "panelTitle": "选项卡",
    "events": "[Circular]",
    "actions": "[Circular]",
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
    "overrides": {
    },
    "order": 0
  },
  {
    "manager": "[Circular]",
    "disabledRendererPlugin": true,
    "name": "表格",
    "panelTitle": "表格",
    "icon": "fa fa-table",
    "panelIcon": "fa fa-table",
    "pluginIcon": "table-plugin",
    "rendererName": "table2",
    "isBaseComponent": true,
    "panelJustify": true,
    "$schema": "/schemas/TableSchema2.json",
    "description": "用来展示表格数据，可以配置列信息，然后关联数据便能完成展示。支持嵌套、超级表头、列固定、表头固顶、合并单元格等等。当前组件需要配置数据源，不自带数据拉取，请优先使用 「CRUD」 组件。",
    "docLink": "/amis/zh-CN/components/table2",
    "scaffold": {
      "type": "table2",
      "columns": [
        {
          "title": "列信息",
          "name": "a"
        }
      ],
      "source": "$item"
    },
    "regions": [
      {
        "key": "columns",
        "label": "列集合",
        "renderMethod": "renderTable",
        "preferTag": "展示",
        "dndMode": "position-h"
      }
    ],
    "previewSchema": {
      "type": "table2",
      "className": "text-left m-b-none",
      "items": [
        {
          "a": 1,
          "b": 2,
          "c": 9
        },
        {
          "a": 3,
          "b": 4,
          "c": 8
        },
        {
          "a": 5,
          "b": 6,
          "c": 7
        }
      ],
      "columns": [
        {
          "title": "A",
          "name": "a"
        },
        {
          "title": "B",
          "name": "b"
        }
      ]
    },
    "scaffoldForm": {
      "title": "快速构建表格",
      "canRebuild": true,
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
              "name": "title",
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
              "placeholder": "类型",
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
                  "value": "container",
                  "label": "容器"
                },
                {
                  "value": "operation",
                  "label": "操作栏"
                }
              ]
            }
          ]
        }
      ]
    },
    "events": "[Circular]",
    "actions": "[Circular]",
    "_dynamicControls": {
    },
    "dsManager": {
      "builders": {
      }
    },
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "textarea",
    "$schema": "/schemas/TextareaControlSchema.json",
    "name": "多行文本框",
    "isBaseComponent": true,
    "icon": "fa fa-paragraph",
    "pluginIcon": "textarea-plugin",
    "description": "支持换行输入",
    "searchKeywords": "多行文本输入框",
    "docLink": "/amis/zh-CN/components/form/textarea",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "textarea",
      "label": "多行文本",
      "name": "textarea"
    },
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
    "notRenderFormZone": true,
    "panelTitle": "多行文本",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "input-number",
    "$schema": "/schemas/NumberControlSchema.json",
    "name": "数字框",
    "isBaseComponent": true,
    "icon": "fa fa-sort-numeric-asc",
    "pluginIcon": "input-number-plugin",
    "description": "支持设定最大值和最小值，以及步长与精度",
    "searchKeywords": "数字输入框",
    "docLink": "/amis/zh-CN/components/form/input-number",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-number",
      "label": "数字",
      "name": "number",
      "keyboard": true
    },
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
    "notRenderFormZone": true,
    "panelTitle": "数字框",
    "panelJustify": true,
    "events": "[Circular]",
    "actions": "[Circular]",
    "order": 0
  },
  {
    "manager": "[Circular]",
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
    "tags": [
      "表单项"
    ],
    "scaffold": {
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
    },
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
          "options": "[Circular]"
        }
      ]
    },
    "actions": "[Circular]",
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "nested-select",
    "$schema": "/schemas/NestedSelectControlSchema.json",
    "name": "级联选择器",
    "isBaseComponent": true,
    "icon": "fa fa-indent",
    "pluginIcon": "nested-select-plugin",
    "description": "适用于选项中含有子项，可通过 source 拉取选项，支持多选",
    "docLink": "/amis/zh-CN/components/form/nestedselect",
    "tags": [
      "表单项"
    ],
    "scaffold": {
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
    },
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
          "options": "[Circular]"
        }
      ]
    },
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
    "panelJustify": true,
    "events": "[Circular]",
    "actions": "[Circular]",
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "chained-select",
    "$schema": "/schemas/ChainedSelectControlSchema.json",
    "name": "链式下拉框",
    "isBaseComponent": true,
    "icon": "fa fa-th-list",
    "pluginIcon": "chained-select-plugin",
    "description": "通过<code>source</code>拉取选项，只要有返回结果，就可以无限级别增加",
    "docLink": "/amis/zh-CN/components/form/chain-select",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "chained-select",
      "label": "链式下拉",
      "name": "chainedSelect",
      "joinValues": true
    },
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
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelTitle": "链式下拉",
    "notRenderFormZone": true,
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "dropdown-button",
    "$schema": "/schemas/DropdownButtonSchema.json",
    "name": "下拉按钮",
    "isBaseComponent": true,
    "description": "下拉按钮，更多的按钮通过点击后展示开来。",
    "searchKeywords": "下拉菜单",
    "tags": [
      "表单项"
    ],
    "icon": "fa fa-chevron-down",
    "pluginIcon": "dropdown-btn-plugin",
    "docLink": "/amis/zh-CN/components/dropdown-button",
    "scaffold": {
      "type": "dropdown-button",
      "label": "下拉按钮",
      "buttons": [
        {
          "type": "button",
          "label": "按钮1",
          "onEvent": "[Circular]"
        },
        {
          "type": "button",
          "label": "按钮2",
          "onEvent": "[Circular]"
        }
      ]
    },
    "previewSchema": {
      "type": "dropdown-button",
      "label": "下拉按钮",
      "buttons": "[Circular]"
    },
    "panelTitle": "下拉按钮",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "checkboxes",
    "$schema": "/schemas/CheckboxesControlSchema.json",
    "name": "复选框",
    "isBaseComponent": true,
    "icon": "fa fa-check-square",
    "pluginIcon": "checkboxes-plugin",
    "description": "通过<code>options</code>配置多个勾选框，也可以通过<code>source</code>拉取选项",
    "docLink": "/amis/zh-CN/components/form/checkboxes",
    "tags": [
      "表单项"
    ],
    "scaffold": {
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
    },
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
          "options": "[Circular]"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "复选框",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "radios",
    "$schema": "/schemas/RadiosControlSchema.json",
    "name": "单选框",
    "isBaseComponent": true,
    "icon": "fa fa-dot-circle-o",
    "pluginIcon": "radios-plugin",
    "description": "通过 options 配置选项，可通过 source 拉取选项",
    "docLink": "/amis/zh-CN/components/form/radios",
    "tags": [
      "表单项"
    ],
    "scaffold": {
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
      ]
    },
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
          "options": "[Circular]",
          "value": "A"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "单选框",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "checkbox",
    "$schema": "/schemas/CheckboxControlSchema.json",
    "name": "勾选框",
    "isBaseComponent": true,
    "icon": "fa fa-check-square-o",
    "pluginIcon": "checkbox-plugin",
    "description": "勾选框",
    "docLink": "/amis/zh-CN/components/form/checkbox",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "checkbox",
      "option": "勾选框",
      "name": "checkbox",
      "label": "勾选框"
    },
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
    "notRenderFormZone": true,
    "panelTitle": "勾选框",
    "panelJustify": true,
    "events": "[Circular]",
    "actions": "[Circular]",
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "input-date",
    "$schema": "/schemas/DateControlSchema.json",
    "icon": "fa fa-calendar",
    "pluginIcon": "input-date-plugin",
    "name": "日期",
    "isBaseComponent": true,
    "searchKeywords": "日期框、input-datetime、日期时间框、input-time、时间框、input-month、月份框、input-quarter、季度框、input-year、年框、年份框、年份选择",
    "description": "年月日选择，支持相对值设定，如<code>+2days</code>两天后",
    "docLink": "/amis/zh-CN/components/form/input-date",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-date",
      "label": "日期",
      "name": "date"
    },
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
    "notRenderFormZone": true,
    "panelTitle": "日期配置",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "input-date-range",
    "$schema": "/schemas/DateRangeControlSchema.json",
    "icon": "fa fa-calendar",
    "pluginIcon": "input-date-range-plugin",
    "name": "日期范围",
    "isBaseComponent": true,
    "searchKeywords": "日期范围框、input-datetime-range、日期时间范围、input-time-range、时间范围、input-month-range、月份范围、input-quarter-range、季度范围、input-year-range、年范围、年份范围",
    "description": "日期范围选择，可通过<code>minDate</code>、<code>maxDate</code>设定最小、最大日期",
    "docLink": "/amis/zh-CN/components/form/input-date-range",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-date-range",
      "label": "日期范围",
      "name": "date-range"
    },
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
    "notRenderFormZone": true,
    "panelTitle": "日期范围",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "input-file",
    "$schema": "/schemas/FileControlSchema.json",
    "name": "文件上传",
    "isBaseComponent": true,
    "icon": "fa fa-upload",
    "pluginIcon": "input-file-plugin",
    "description": "可上传多个文件，可配置是否自动上传以及大文件分片上传",
    "docLink": "/amis/zh-CN/components/form/input-file",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-file",
      "label": "文件上传",
      "autoUpload": true,
      "proxy": true,
      "uploadType": "fileReceptor",
      "name": "file"
    },
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
    "notRenderFormZone": true,
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "input-image",
    "$schema": "/schemas/ImageControlSchema.json",
    "name": "图片上传",
    "isBaseComponent": true,
    "description": "可以对图片实现裁剪，限制图片的宽高以及大小，支持自动上传及上传多张图片",
    "docLink": "/amis/zh-CN/components/form/input-image",
    "tags": [
      "表单项"
    ],
    "icon": "fa fa-crop",
    "pluginIcon": "input-image-plugin",
    "scaffold": {
      "type": "input-image",
      "label": "图片上传",
      "name": "image",
      "autoUpload": true,
      "proxy": true,
      "uploadType": "fileReceptor",
      "imageClassName": "r w-full"
    },
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
    "notRenderFormZone": true,
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "input-excel",
    "$schema": "/schemas/ExcelControlSchema.json",
    "name": "上传 Excel",
    "isBaseComponent": true,
    "icon": "fa fa-eyedropper",
    "pluginIcon": "input-excel-plugin",
    "description": "自动解析 Excel",
    "docLink": "/amis/zh-CN/components/form/input-excel",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-excel",
      "label": "Excel",
      "name": "excel"
    },
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
    "panelTitle": "上传 Excel",
    "panelJustify": true,
    "notRenderFormZone": true,
    "events": "[Circular]",
    "actions": "[Circular]",
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "input-tree",
    "$schema": "/schemas/TreeControlSchema.json",
    "name": "树组件",
    "isBaseComponent": true,
    "icon": "fa fa-list-alt",
    "pluginIcon": "input-tree-plugin",
    "description": "树型结构选择，支持 [内嵌模式] 与 [浮层模式] 的外观切换",
    "searchKeywords": "tree、树下拉、树下拉框、tree-select、树形选择框、树形选择器",
    "docLink": "/amis/zh-CN/components/form/input-tree",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-tree",
      "label": "树组件",
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
      ]
    },
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
          "options": "[Circular]",
          "mode": "normal"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "树选择",
    "actions": "[Circular]",
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
              "[Circular]",
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
  {
    "manager": "[Circular]",
    "rendererName": "input-tag",
    "$schema": "/schemas/TagControlSchema.json",
    "name": "标签选择",
    "isBaseComponent": true,
    "icon": "fa fa-tag",
    "pluginIcon": "input-tag-plugin",
    "description": "配置 options 可以实现选择选项",
    "searchKeywords": "标签选择器",
    "docLink": "/amis/zh-CN/components/form/input-tag",
    "tags": [
      "表单项"
    ],
    "scaffold": {
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
      ]
    },
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": {
        "type": "input-tag",
        "label": "标签",
        "name": "tag",
        "options": "[Circular]",
        "value": "red"
      }
    },
    "notRenderFormZone": true,
    "panelTitle": "标签",
    "panelJustify": true,
    "events": "[Circular]",
    "actions": "[Circular]",
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "list-select",
    "$schema": "/schemas/ListControlSchema.json",
    "name": "列表选择",
    "isBaseComponent": true,
    "icon": "fa fa-ellipsis-h",
    "pluginIcon": "list-select-plugin",
    "description": "单选或者多选，支持 source 拉取选项，选项可配置图片，也可以自定义 HTML 配置",
    "docLink": "/amis/zh-CN/components/form/list-select",
    "tags": [
      "表单项"
    ],
    "scaffold": {
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
      ]
    },
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
          "options": "[Circular]",
          "value": "A"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "列表选择",
    "panelJustify": true,
    "events": "[Circular]",
    "actions": "[Circular]",
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "button-group-select",
    "$schema": "/schemas/ButtonGroupControlSchema.json",
    "name": "按钮点选",
    "isBaseComponent": true,
    "icon": "fa fa-object-group",
    "pluginIcon": "btn-select-plugin",
    "description": "用来展示多个按钮，视觉上会作为一个整体呈现，同时可以作为表单项选项选择器来用。",
    "docLink": "/amis/zh-CN/components/button-group",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "button-group-select",
      "name": "buttonGroupSelect",
      "label": "按钮点选",
      "inline": false,
      "options": [
        {
          "label": "选项1",
          "value": "a"
        },
        {
          "label": "选项2",
          "value": "b"
        }
      ]
    },
    "previewSchema": {
      "type": "form",
      "wrapWithPanel": false,
      "mode": "horizontal",
      "body": {
        "type": "button-group-select",
        "name": "buttonGroupSelect",
        "label": "按钮点选",
        "inline": false,
        "options": "[Circular]",
        "value": "a",
        "description": "按钮点选可以当选项用。"
      }
    },
    "notRenderFormZone": true,
    "panelTitle": "按钮点选",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "button-toolbar",
    "$schema": "/schemas/ButtonToolbarControlSchema.json",
    "name": "按钮工具栏",
    "isBaseComponent": true,
    "icon": "fa fa-ellipsis-h",
    "pluginIcon": "btn-toolbar-plugin",
    "description": "可以用来放置多个按钮或者按钮组，按钮之间会存在一定的间隔",
    "docLink": "/amis/zh-CN/components/form/button-toolbar",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "button-toolbar",
      "label": "按钮工具栏",
      "buttons": [
        {
          "type": "button",
          "label": "按钮1",
          "onEvent": "[Circular]"
        },
        {
          "type": "button",
          "label": "按钮2",
          "onEvent": "[Circular]"
        }
      ]
    },
    "previewSchema": {
      "type": "form",
      "wrapWithPanel": false,
      "mode": "horizontal",
      "body": {
        "type": "button-toolbar",
        "label": "按钮工具栏",
        "buttons": "[Circular]"
      }
    },
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
  {
    "manager": "[Circular]",
    "rendererName": "picker",
    "$schema": "/schemas/PickerControlSchema.json",
    "name": "列表选取",
    "isBaseComponent": true,
    "icon": "fa fa-window-restore",
    "pluginIcon": "picker-plugin",
    "description": "通过 pickerSchema 配置可供选取的数据源进行选择需要的数据，支持多选",
    "searchKeywords": "列表选择器",
    "docLink": "/amis/zh-CN/components/form/picker",
    "tags": [
      "表单项"
    ],
    "scaffold": {
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
    },
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
          "options": "[Circular]",
          "overflowConfig": "[Circular]",
          "modalClassName": "app-popover :AMISCSSWrapper"
        }
      ]
    },
    "notRenderFormZone": true,
    "events": "[Circular]",
    "panelJustify": true,
    "panelTitle": "列表选取",
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "switch",
    "$schema": "/schemas/SwitchControlSchema.json",
    "name": "开关",
    "isBaseComponent": true,
    "icon": "fa fa-toggle-on",
    "pluginIcon": "switch-plugin",
    "description": "开关控件",
    "docLink": "/amis/zh-CN/components/form/switch",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "switch",
      "label": "开关",
      "option": "说明",
      "name": "switch",
      "falseValue": false,
      "trueValue": true
    },
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
    "notRenderFormZone": true,
    "panelTitle": "开关",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "input-range",
    "$schema": "/schemas/RangeControlSchema.json",
    "name": "滑块",
    "isBaseComponent": true,
    "icon": "fa fa-sliders",
    "pluginIcon": "input-range-plugin",
    "description": "选择某个值或者某个范围",
    "docLink": "/amis/zh-CN/components/form/input-range",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-range",
      "label": "滑块",
      "name": "range"
    },
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
    "notRenderFormZone": true,
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelTitle": "滑块",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "input-rating",
    "$schema": "/schemas/RatingControlSchema.json",
    "name": "评分",
    "isBaseComponent": true,
    "icon": "fa fa-star-o",
    "pluginIcon": "input-rating-plugin",
    "description": "支持只读、半星选择",
    "docLink": "/amis/zh-CN/components/form/input-rating",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-rating",
      "label": "评分",
      "name": "rating"
    },
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
    "notRenderFormZone": true,
    "panelTitle": "评分",
    "count": 5,
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "input-city",
    "$schema": "/schemas/CityControlSchema.json",
    "name": "城市选择",
    "isBaseComponent": true,
    "icon": "fa fa-building-o",
    "pluginIcon": "input-city-plugin",
    "description": "可配置是否选择区域或者城市",
    "searchKeywords": "城市选择器",
    "docLink": "/amis/zh-CN/components/form/input-city",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-city",
      "label": "城市选择",
      "name": "city",
      "allowCity": true,
      "allowDistrict": true,
      "extractValue": true
    },
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
    "notRenderFormZone": true,
    "panelTitle": "城市选择",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "transfer",
    "$schema": "/schemas/TransferControlSchema.json",
    "name": "穿梭器",
    "isBaseComponent": true,
    "icon": "fa fa-th-list",
    "pluginIcon": "transfer-plugin",
    "description": "穿梭器组件",
    "docLink": "/amis/zh-CN/components/form/transfer",
    "tags": [
      "表单项"
    ],
    "scaffold": {
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
    },
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
          "options": "[Circular]",
          "selectMode": "list",
          "resultListModeFollowSelect": false
        }
      ]
    },
    "panelTitle": "穿梭器",
    "events": "[Circular]",
    "actions": "[Circular]",
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
              "[Circular]",
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
  {
    "manager": "[Circular]",
    "rendererName": "transfer-picker",
    "$schema": "/schemas/TransferPickerControlSchema.json",
    "name": "穿梭选择器",
    "isBaseComponent": true,
    "icon": "fa fa-th-list",
    "pluginIcon": "transfer-plugin",
    "description": "穿梭选择器组件",
    "docLink": "/amis/zh-CN/components/form/transfer-picker",
    "tags": [
      "表单项"
    ],
    "scaffold": {
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
    },
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
          "options": "[Circular]",
          "selectMode": "list",
          "resultListModeFollowSelect": false
        }
      ]
    },
    "panelTitle": "穿梭器",
    "events": "[Circular]",
    "actions": "[Circular]",
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
              "[Circular]",
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
  {
    "manager": "[Circular]",
    "rendererName": "tabs-transfer",
    "$schema": "/schemas/TransferControlSchema.json",
    "name": "组合穿梭器",
    "isBaseComponent": true,
    "icon": "fa fa-th-list",
    "pluginIcon": "tabs-transfer-plugin",
    "description": "组合穿梭器组件",
    "docLink": "/amis/zh-CN/components/form/transfer",
    "tags": [
      "表单项"
    ],
    "scaffold": {
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
    },
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
          "options": "[Circular]"
        }
      ]
    },
    "panelTitle": "组合穿梭器",
    "events": "[Circular]",
    "actions": "[Circular]",
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
  {
    "manager": "[Circular]",
    "rendererName": "input-color",
    "$schema": "/schemas/ColorControlSchema.json",
    "name": "颜色框",
    "isBaseComponent": true,
    "icon": "fa fa-eyedropper",
    "pluginIcon": "input-color-plugin",
    "description": "支持<code>hex、hexa、hls、rgb、rgba</code>格式，默认为<code>hex</code>格式",
    "searchKeywords": "颜色选择器",
    "docLink": "/amis/zh-CN/components/form/input-color",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-color",
      "label": "颜色",
      "name": "color"
    },
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
    "panelTitle": "颜色框",
    "notRenderFormZone": true,
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "condition-builder",
    "$schema": "/schemas/ConditionBuilderControlSchema.json",
    "name": "条件组件",
    "isBaseComponent": true,
    "icon": "fa fa-group",
    "pluginIcon": "condition-builder-plugin",
    "description": "用于设置复杂组合条件，支持添加条件，添加分组，设置组合方式，拖拽排序等功能。",
    "docLink": "/amis/zh-CN/components/form/condition-builder",
    "tags": [
      "表单项"
    ],
    "scaffold": {
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
    },
    "previewSchema": {
      "type": "form",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        "[Circular]"
      ]
    },
    "panelTitle": "条件组件",
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "fieldset",
    "$schema": "/schemas/FieldSetControlSchema.json",
    "name": "字段集",
    "isBaseComponent": true,
    "icon": "fa fa-toggle-down",
    "description": "多个表单项的组合，可配置是否折叠",
    "searchKeywords": "表单项集合",
    "docLink": "/amis/zh-CN/components/form/fieldset",
    "tags": [
      "表单项"
    ],
    "scaffold": {
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
    },
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
          "body": "[Circular]"
        }
      ]
    },
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
  {
    "manager": "[Circular]",
    "rendererName": "combo",
    "$schema": "/schemas/ComboControlSchema.json",
    "name": "组合输入",
    "isBaseComponent": true,
    "icon": "fa fa-group",
    "pluginIcon": "combo-plugin",
    "description": "多个表单项的组合，可配置是否增加和删除初始设定的模板",
    "docLink": "/amis/zh-CN/components/form/combo",
    "tags": [
      "表单项"
    ],
    "scaffold": {
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
      ]
    },
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
          "addBtn": "[Circular]",
          "items": "[Circular]",
          "value": [
            {
              "text": "Row 1",
              "select": "a"
            },
            {
            }
          ]
        }
      ]
    },
    "regions": [
      {
        "key": "items",
        "label": "内容区",
        "preferTag": "内容区",
        "renderMethod": "renderItems"
      }
    ],
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelTitle": "组合输入",
    "notRenderFormZone": true,
    "panelJustify": true,
    "dsManager": {
      "builders": {
      }
    },
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "input-group",
    "$schema": "/schemas/InputGroupControlSchema.json",
    "name": "输入组合",
    "isBaseComponent": true,
    "icon": "fa fa-object-group",
    "pluginIcon": "input-group-plugin",
    "description": "输入组合，支持多种类型的控件组合",
    "searchKeywords": "输入框组合",
    "docLink": "/amis/zh-CN/components/form/input-group",
    "tags": [
      "表单项"
    ],
    "scaffold": {
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
    },
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
          "body": "[Circular]"
        }
      ]
    },
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
  {
    "manager": "[Circular]",
    "rendererName": "input-table",
    "$schema": "/schemas/TableControlSchema.json",
    "name": "表格编辑框",
    "isBaseComponent": true,
    "icon": "fa fa-table",
    "pluginIcon": "table-plugin",
    "description": "可以用来展现数据的,可以用来展示数组类型的数据，比如 multiple  的子 form",
    "docLink": "/amis/zh-CN/components/form/input-table",
    "tags": [
      "表单项"
    ],
    "scaffold": {
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
      "strictMode": true
    },
    "regions": [
      {
        "key": "columns",
        "label": "列集合",
        "renderMethod": "renderTableContent",
        "preferTag": "展示",
        "dndMode": "position-h"
      }
    ],
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "wrapWithPanel": false,
      "mode": "horizontal",
      "body": {
        "type": "input-table",
        "name": "table",
        "label": "表格表单",
        "columns": "[Circular]",
        "addable": false,
        "footerAddBtn": "[Circular]",
        "strictMode": true,
        "value": [
          {
            "color": "green",
            "name": "绿色"
          }
        ]
      }
    },
    "notRenderFormZone": true,
    "panelJustify": true,
    "panelTitle": "表格编辑",
    "events": "[Circular]",
    "actions": "[Circular]",
    "dsManager": {
      "builders": {
      }
    },
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "matrix-checkboxes",
    "$schema": "/schemas/MatrixControlSchema.json",
    "name": "矩阵开关",
    "isBaseComponent": true,
    "icon": "fa fa-th-large",
    "pluginIcon": "matrix-checkboxes-plugin",
    "description": "可配置行单选，列单选，以及全部选项只能单选或者全部选项多选",
    "docLink": "/amis/zh-CN/components/form/matrix-checkboxes",
    "tags": [
      "表单项"
    ],
    "scaffold": {
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
    },
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
          "columns": "[Circular]",
          "rows": "[Circular]"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "矩阵开关",
    "panelJustify": true,
    "events": "[Circular]",
    "actions": "[Circular]",
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "input-rich-text",
    "$schema": "/schemas/RichTextControlSchema.json",
    "name": "富文本编辑器",
    "isBaseComponent": true,
    "icon": "fa fa-newspaper-o",
    "pluginIcon": "input-rich-text-plugin",
    "description": "可自定义富文本的配置栏",
    "docLink": "/amis/zh-CN/components/form/input-rich-text",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-rich-text",
      "label": "富文本",
      "name": "rich-text",
      "vendor": "tinymce"
    },
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
    "panelTitle": "富文本",
    "events": "[Circular]",
    "notRenderFormZone": true,
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "diff-editor",
    "$schema": "/schemas/DiffEditorControlSchema.json",
    "name": "Diff编辑器",
    "isBaseComponent": true,
    "icon": "fa fa-columns",
    "pluginIcon": "diff-editor-plugin",
    "description": "左右两边的代码做对比，支持的语言包括：bat，c，coffeescript，cpp，csharp，css，dockerfile，fsharp，go，handlebars等等",
    "searchKeywords": "对比编辑器",
    "docLink": "/amis/zh-CN/components/form/diff-editor",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "diff-editor",
      "label": "diff编辑器",
      "name": "diff"
    },
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
    "events": "[Circular]",
    "actions": "[Circular]",
    "notRenderFormZone": true,
    "panelTitle": "Diff编辑器",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "editor",
    "$schema": "/schemas/EditorControlSchema.json",
    "name": "代码编辑器",
    "isBaseComponent": true,
    "icon": "fa fa-code",
    "pluginIcon": "editor-plugin",
    "description": "代码编辑器，采用 monaco-editor 支持：bat，c，coffeescript，cpp，csharp，css，dockerfile，fsharp，go，handlebars等等",
    "docLink": "/amis/zh-CN/components/form/editor",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "editor",
      "label": "代码编辑器",
      "name": "editor"
    },
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
    "events": "[Circular]",
    "actions": "[Circular]",
    "notRenderFormZone": true,
    "panelTitle": "Editor",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "search-box",
    "$schema": "/schemas/SearchBoxSchema.json",
    "name": "搜索框",
    "searchKeywords": "搜索框、searchbox",
    "isBaseComponent": true,
    "description": "用于展示一个简单搜索框，通常需要搭配其他组件使用。比如 page 配置 initApi 后，可以用来实现简单数据过滤查找，name keywords 会作为参数传递给 page 的 initApi。",
    "docLink": "/amis/zh-CN/components/search-box",
    "icon": "fa fa-search",
    "pluginIcon": "search-box-plugin",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "search-box",
      "name": "keyword",
      "body": {
        "type": "tpl",
        "tpl": "搜索框",
        "wrapperComponent": "",
        "inline": false
      },
      "level": "info"
    },
    "previewSchema": {
      "type": "search-box",
      "name": "keyword",
      "body": "[Circular]",
      "level": "info",
      "className": "text-left",
      "showCloseButton": true
    },
    "regions": [
      {
        "key": "body",
        "label": "内容区",
        "placeholder": "搜索框内容"
      }
    ],
    "events": "[Circular]",
    "actions": "[Circular]",
    "notRenderFormZone": true,
    "panelTitle": "搜索框",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "input-kv",
    "$schema": "/schemas/KVControlSchema.json",
    "name": "KV 键值对",
    "isBaseComponent": true,
    "icon": "fa fa-eyedropper",
    "pluginIcon": "input-kv-plugin",
    "description": "用于编辑键值对类型的数据",
    "docLink": "/amis/zh-CN/components/form/input-kv",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-kv",
      "label": "KV",
      "name": "kv"
    },
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
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelTitle": "KV 键值对",
    "panelBody": [
      {
        "type": "select",
        "label": {
          "type": "tooltip-wrapper",
          "tooltip": "可设置为左上角、右上角、右下角、左下角，默认为右下角",
          "tooltipTheme": "dark",
          "placement": "top",
          "tooltipStyle": {
            "fontSize": "12px"
          },
          "className": "ae-formItemControl-label-tip",
          "body": "参考位置"
        },
        "name": "originPosition",
        "value": "left-top",
        "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
        "options": [
          {
            "label": "左上角",
            "value": "left-top"
          },
          {
            "label": "右上角",
            "value": "right-top"
          },
          {
            "label": "右下角(默认)",
            "value": "right-bottom"
          },
          {
            "label": "左下角",
            "value": "left-bottom"
          }
        ]
      },
      {
        "type": "input-text",
        "name": "valueType",
        "label": "值类型"
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
  {
    "manager": "[Circular]",
    "rendererName": "input-repeat",
    "$schema": "/schemas/RepeatControlSchema.json",
    "name": "重复周期选择",
    "isBaseComponent": true,
    "icon": "fa fa-repeat",
    "pluginIcon": "input-repeat-plugin",
    "description": "选择重复的频率，如每时、每天、每周等",
    "searchKeywords": "重复频率选择器",
    "docLink": "/amis/zh-CN/components/form/input-repeat",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-repeat",
      "label": "周期",
      "name": "repeat"
    },
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
    "panelTitle": "周期",
    "panelBody": [
      {
        "type": "select",
        "label": {
          "type": "tooltip-wrapper",
          "tooltip": "可设置为左上角、右上角、右下角、左下角，默认为右下角",
          "tooltipTheme": "dark",
          "placement": "top",
          "tooltipStyle": {
            "fontSize": "12px"
          },
          "className": "ae-formItemControl-label-tip",
          "body": "参考位置"
        },
        "name": "originPosition",
        "value": "left-top",
        "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
        "options": [
          {
            "label": "左上角",
            "value": "left-top"
          },
          {
            "label": "右上角",
            "value": "right-top"
          },
          {
            "label": "右下角(默认)",
            "value": "right-bottom"
          },
          {
            "label": "左下角",
            "value": "left-bottom"
          }
        ]
      },
      {
        "type": "switch",
        "label": "默认值设置",
        "name": "value",
        "labelRemark": {
          "trigger": [
            "hover",
            "focus"
          ],
          "setting": true,
          "title": "",
          "content": "不设置时根据 name 获取"
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
  {
    "manager": "[Circular]",
    "rendererName": "uuid",
    "$schema": "/schemas/UUIDControlSchema.json",
    "name": "UUID",
    "isBaseComponent": true,
    "icon": "fa fa-eye-slash",
    "pluginIcon": "uuid-plugin",
    "description": "自动生成的 UUID",
    "searchKeywords": "uuid字段",
    "docLink": "/amis/zh-CN/components/form/uuid",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "uuid",
      "name": "uuid"
    },
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
    "panelTitle": "UUID",
    "panelBody": [
      {
        "type": "select",
        "label": {
          "type": "tooltip-wrapper",
          "tooltip": "可设置为左上角、右上角、右下角、左下角，默认为右下角",
          "tooltipTheme": "dark",
          "placement": "top",
          "tooltipStyle": {
            "fontSize": "12px"
          },
          "className": "ae-formItemControl-label-tip",
          "body": "参考位置"
        },
        "name": "originPosition",
        "value": "left-top",
        "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
        "options": [
          {
            "label": "左上角",
            "value": "left-top"
          },
          {
            "label": "右上角",
            "value": "right-top"
          },
          {
            "label": "右下角(默认)",
            "value": "right-bottom"
          },
          {
            "label": "左下角",
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
  {
    "manager": "[Circular]",
    "rendererName": "location-picker",
    "$schema": "/schemas/LocationControlSchema.json",
    "name": "地理位置选择",
    "isBaseComponent": true,
    "notRenderFormZone": true,
    "icon": "fa fa-location-arrow",
    "pluginIcon": "location-picker-plugin",
    "description": "地理位置选择",
    "docLink": "/amis/zh-CN/components/form/location-picker",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "location-picker",
      "name": "location",
      "label": "位置选择"
    },
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
    "panelTitle": "地理位置选择",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "input-sub-form",
    "$schema": "/schemas/SubFormControlSchema.json",
    "name": "子表单项",
    "isBaseComponent": true,
    "icon": "fa fa-window-restore",
    "pluginIcon": "sub-form-plugin",
    "description": "SubForm, 配置一个子 form 作为当前的表单项",
    "docLink": "/amis/zh-CN/components/form/input-sub-form",
    "tags": [
      "表单项"
    ],
    "scaffold": {
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
    },
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
          "form": "[Circular]"
        }
      ]
    },
    "panelTitle": "子表单项",
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "hidden",
    "$schema": "/schemas/HiddenControlSchema.json",
    "name": "隐藏域",
    "isBaseComponent": true,
    "icon": "fa fa-eye-slash",
    "pluginIcon": "hidden-plugin",
    "description": "隐藏表单项",
    "searchKeywords": "隐藏字段",
    "docLink": "/amis/zh-CN/components/form/hidden",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "hidden",
      "name": "var1"
    },
    "previewSchema": {
      "type": "tpl",
      "tpl": "隐藏域"
    },
    "panelTitle": "隐藏域",
    "panelBody": [
      {
        "type": "select",
        "label": {
          "type": "tooltip-wrapper",
          "tooltip": "可设置为左上角、右上角、右下角、左下角，默认为右下角",
          "tooltipTheme": "dark",
          "placement": "top",
          "tooltipStyle": {
            "fontSize": "12px"
          },
          "className": "ae-formItemControl-label-tip",
          "body": "参考位置"
        },
        "name": "originPosition",
        "value": "left-top",
        "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
        "options": [
          {
            "label": "左上角",
            "value": "left-top"
          },
          {
            "label": "右上角",
            "value": "right-top"
          },
          {
            "label": "右下角(默认)",
            "value": "right-bottom"
          },
          {
            "label": "左下角",
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
  {
    "manager": "[Circular]",
    "rendererName": "input-signature",
    "$schema": "/schemas/InputSignatureSchema.json",
    "name": "手写签",
    "isBaseComponent": true,
    "icon": "fa fa-star-o",
    "pluginIcon": "input-signature-plugin",
    "description": "手写签名面板",
    "docLink": "/amis/zh-CN/components/form/input-signature",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-signature",
      "label": "签名",
      "name": "signature"
    },
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
    "notRenderFormZone": true,
    "panelTitle": "签名面板",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "static",
    "$schema": "/schemas/StaticControlSchema.json",
    "name": "静态展示框",
    "isBaseComponent": true,
    "icon": "fa fa-info",
    "pluginIcon": "static-plugin",
    "description": "纯用来展示数据，可用来展示 json、date、image、progress 等数据",
    "docLink": "/amis/zh-CN/components/form/static",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "static",
      "label": "描述"
    },
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
    "multifactor": true,
    "notRenderFormZone": true,
    "panelTitle": "静态展示",
    "panelJustify": true,
    "events": "[Circular]",
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "button-group",
    "$schema": "/schemas/ButtonGroupSchema.json",
    "name": "按钮组",
    "isBaseComponent": true,
    "description": "用来展示多个按钮，视觉上会作为一个整体呈现。",
    "tags": [
      "功能"
    ],
    "icon": "fa fa-object-group",
    "pluginIcon": "btn-group-plugin",
    "docLink": "/amis/zh-CN/components/button-group",
    "scaffold": {
      "type": "button-group",
      "buttons": [
        {
          "type": "button",
          "label": "按钮1",
          "onEvent": "[Circular]"
        },
        {
          "type": "button",
          "label": "按钮2",
          "onEvent": "[Circular]"
        }
      ]
    },
    "previewSchema": {
      "type": "button-group",
      "buttons": "[Circular]"
    },
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
  {
    "manager": "[Circular]",
    "rendererName": "nav",
    "$schema": "/schemas/NavSchema.json",
    "name": "导航",
    "isBaseComponent": true,
    "description": "用来渲染导航菜单，支持横排和竖排。",
    "docLink": "/amis/zh-CN/components/nav",
    "tags": [
      "功能"
    ],
    "icon": "fa fa-map-signs",
    "pluginIcon": "nav-plugin",
    "scaffold": {
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
    "previewSchema": {
      "type": "nav",
      "stacked": true,
      "popupClassName": "app-popover :AMISCSSWrapper",
      "links": "[Circular]"
    },
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
            "label": "图标",
            "type": "icon-picker",
            "name": "icon",
            "placeholder": "点击选择图标",
            "clearable": true,
            "description": ""
          },
          {
            "type": "switch",
            "mode": "horizontal",
            "horizontal": "[Circular]",
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
            "horizontal": "[Circular]",
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
    "events": "[Circular]",
    "actions": "[Circular]",
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "anchor-nav",
    "$schema": "/schemas/AnchorNavSchema.json",
    "name": "锚点导航",
    "isBaseComponent": true,
    "description": "锚点导航，在多行内容展示时，可以将内容用锚点导航分组的形式展示，点击导航菜单可以定位到对应内容区域。",
    "docLink": "/amis/zh-CN/components/anchor-nav",
    "tags": [
      "功能"
    ],
    "icon": "fa fa-link",
    "pluginIcon": "anchor-nav-plugin",
    "scaffold": {
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
    "previewSchema": {
      "type": "anchor-nav",
      "links": "[Circular]"
    },
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
            "title": "属性",
            "body": [
              {
                "type": "collapse-group",
                "activeKey": [
                  "基本",
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
                    "title": "基本",
                    "body": [
                      {
                        "type": "select",
                        "label": {
                          "type": "tooltip-wrapper",
                          "tooltip": "可设置为左上角、右上角、右下角、左下角，默认为右下角",
                          "tooltipTheme": "dark",
                          "placement": "top",
                          "tooltipStyle": {
                            "fontSize": "12px"
                          },
                          "className": "ae-formItemControl-label-tip",
                          "body": "参考位置"
                        },
                        "name": "originPosition",
                        "value": "left-top",
                        "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
                        "options": [
                          {
                            "label": "左上角",
                            "value": "left-top"
                          },
                          {
                            "label": "右上角",
                            "value": "right-top"
                          },
                          {
                            "label": "右下角(默认)",
                            "value": "right-bottom"
                          },
                          {
                            "label": "左下角",
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
                            "placeholder": "请输入锚点标题"
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
                    "key": "基本"
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
                        "label": "可见",
                        "mode": "normal",
                        "name": "visible",
                        "expressionName": "visibleOn"
                      },
                      {
                        "type": "ae-StatusControl",
                        "label": "隐藏",
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
            "title": "外观",
            "body": [
              {
                "type": "collapse-group",
                "activeKey": [
                  "基本"
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
                    "title": "基本",
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
                    "key": "基本"
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
                          "tooltip": "有哪些辅助类 CSS 类名？请前往 <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">样式说明</a>，除此之外你可以添加自定义类名，然后在系统配置中添加自定义样式。",
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
                          "tooltip": "有哪些辅助类 CSS 类名？请前往 <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">样式说明</a>，除此之外你可以添加自定义类名，然后在系统配置中添加自定义样式。",
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
                          "tooltip": "有哪些辅助类 CSS 类名？请前往 <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">样式说明</a>，除此之外你可以添加自定义类名，然后在系统配置中添加自定义样式。",
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
              "title": "属性",
              "body": [
                {
                  "type": "collapse-group",
                  "activeKey": [
                    "基本"
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
                      "title": "基本",
                      "body": [
                        {
                          "name": "title",
                          "label": "标题",
                          "type": "input-text",
                          "required": true
                        }
                      ],
                      "collapsed": false,
                      "key": "基本"
                    }
                  ]
                }
              ],
              "className": " p-none"
            },
            {
              "title": "外观",
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
                            "tooltip": "有哪些辅助类 CSS 类名？请前往 <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">样式说明</a>，除此之外你可以添加自定义类名，然后在系统配置中添加自定义样式。",
                            "tooltipTheme": "dark",
                            "placement": "top",
                            "tooltipStyle": {
                              "fontSize": "12px"
                            },
                            "className": "ae-formItemControl-label-tip",
                            "body": "CSS 类名"
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
    "overrides": {
    },
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "tooltip-wrapper",
    "$schema": "/schemas/TooltipWrapperSchema.json",
    "isBaseComponent": true,
    "name": "文字提示",
    "description": "类似容器，可以将多个渲染器放置在一起，当用户鼠标悬停或者点击容器时，显示文字提示浮层",
    "searchKeywords": "文字提示容器",
    "docLink": "/amis/zh-CN/components/tooltip",
    "tags": [
      "功能"
    ],
    "icon": "fa fa-comment-alt",
    "pluginIcon": "tooltip-wrapper-plugin",
    "scaffold": {
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
      ]
    },
    "previewSchema": {
      "type": "tooltip-wrapper",
      "tooltip": "提示文字",
      "body": "[Circular]",
      "enterable": true,
      "showArrow": true,
      "offset": "[Circular]",
      "className": "p-1 mr-3 border-2 border-solid border-indigo-400"
    },
    "regions": [
      {
        "key": "body",
        "label": "内容区"
      }
    ],
    "panelTitle": "文字提示",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "alert",
    "$schema": "/schemas/AlertSchema.json",
    "name": "提示",
    "isBaseComponent": true,
    "description": "用来做文字特殊提示，分为四类：提示类、成功类、警告类和危险类。可结合 <code>visibleOn</code> 用来做错误信息提示。",
    "docLink": "/amis/zh-CN/components/alert",
    "icon": "fa fa-exclamation-circle",
    "pluginIcon": "tooltip-plugin",
    "tags": [
      "功能"
    ],
    "scaffold": {
      "type": "alert",
      "body": {
        "type": "tpl",
        "tpl": "提示内容",
        "wrapperComponent": "",
        "inline": false
      },
      "level": "info"
    },
    "previewSchema": {
      "type": "alert",
      "body": "[Circular]",
      "level": "info",
      "className": "text-left",
      "showCloseButton": true
    },
    "regions": [
      {
        "key": "body",
        "label": "内容区",
        "placeholder": "提示内容"
      }
    ],
    "notRenderFormZone": true,
    "panelTitle": "提示",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "wizard",
    "$schema": "/schemas/WizardSchema.json",
    "name": "向导",
    "isBaseComponent": true,
    "description": "表单向导，可以将复杂的多个表单项拆分成多个步骤，一步一步指引用户完成填写。",
    "docLink": "/amis/zh-CN/components/wizard",
    "tags": [
      "功能"
    ],
    "icon": "fa fa-list-ol",
    "pluginIcon": "wizard-plugin",
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
          "body": [
          ]
        }
      ]
    },
    "events": "[Circular]",
    "actions": "[Circular]",
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
    "overrides": {
    },
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "table-view",
    "$schema": "/schemas/TableViewSchema.json",
    "name": "表格视图",
    "isBaseComponent": true,
    "icon": "fa fa-columns",
    "pluginIcon": "table-view-plugin",
    "description": "表格类型的展现",
    "searchKeywords": "表格展现",
    "docLink": "/amis/zh-CN/components/table-view",
    "tags": [
      "功能"
    ],
    "scaffold": {
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
    "previewSchema": {
      "type": "table-view",
      "trs": "[Circular]"
    },
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
            "title": "属性",
            "className": "p-none p-none",
            "body": [
              {
                "type": "collapse-group",
                "activeKey": [
                  "基本",
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
                    "title": "基本",
                    "body": [
                      {
                        "type": "select",
                        "label": {
                          "type": "tooltip-wrapper",
                          "tooltip": "可设置为左上角、右上角、右下角、左下角，默认为右下角",
                          "tooltipTheme": "dark",
                          "placement": "top",
                          "tooltipStyle": {
                            "fontSize": "12px"
                          },
                          "className": "ae-formItemControl-label-tip",
                          "body": "参考位置"
                        },
                        "name": "originPosition",
                        "value": "left-top",
                        "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
                        "options": [
                          {
                            "label": "左上角",
                            "value": "left-top"
                          },
                          {
                            "label": "右上角",
                            "value": "right-top"
                          },
                          {
                            "label": "右下角(默认)",
                            "value": "right-bottom"
                          },
                          {
                            "label": "左下角",
                            "value": "left-bottom"
                          }
                        ]
                      },
                      {
                        "type": "input-text",
                        "name": "caption",
                        "label": "标题"
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
                    "key": "基本"
                  },
                  {
                    "type": "collapse",
                    "headingClassName": "ae-formItemControl-header ae-Collapse-header",
                    "bodyClassName": "ae-formItemControl-body",
                    "title": "状态",
                    "body": [
                      "[Circular]",
                      "[Circular]"
                    ],
                    "collapsed": false,
                    "key": "状态"
                  }
                ]
              }
            ]
          },
          {
            "title": "外观",
            "className": "p-none p-none",
            "body": [
              {
                "type": "collapse-group",
                "activeKey": [
                  null,
                  "基本样式",
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
                    "title": "基本样式",
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
                    "key": "基本样式"
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
                            "label": "类型",
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
                            "label": "类型",
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
                            "label": "类型",
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
    "overrides": {
    },
    "tdVRendererConfig": {
      "panelTitle": "单元格"
    },
    "trVRendererConfig": {
      "panelTitle": " 行"
    },
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "web-component",
    "$schema": "/schemas/WebComponentSchema.json",
    "name": "Web Component",
    "isBaseComponent": true,
    "description": "用于渲染 Web Component 组件",
    "docLink": "/amis/zh-CN/components/web-component",
    "tags": [
      "功能"
    ],
    "icon": "fa fa-square-o",
    "pluginIcon": "web-component-plugin",
    "scaffold": {
      "type": "web-component",
      "tag": "web-component-demo"
    },
    "previewSchema": {
      "type": "web-component",
      "tag": "web-component-demo"
    },
    "panelTitle": "包裹",
    "notRenderFormZone": true,
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "audio",
    "$schema": "/schemas/AudioSchema.json",
    "name": "音频",
    "isBaseComponent": true,
    "description": "音频控件，可以用来播放各种音频文件。",
    "docLink": "/amis/zh-CN/components/audio",
    "tags": [
      "功能"
    ],
    "icon": "fa fa-music",
    "pluginIcon": "audio-plugin",
    "scaffold": {
      "type": "audio",
      "autoPlay": false,
      "src": ""
    },
    "previewSchema": {
      "type": "audio",
      "autoPlay": false,
      "src": ""
    },
    "panelTitle": "音频",
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "video",
    "$schema": "/schemas/VideoSchema.json",
    "name": "视频",
    "isBaseComponent": true,
    "description": "视频控件，可以用来播放各种视频文件，包括 flv 和 hls 格式。",
    "docLink": "/amis/zh-CN/components/video",
    "tags": [
      "功能"
    ],
    "icon": "fa fa-video-camera",
    "pluginIcon": "video-plugin",
    "scaffold": {
      "type": "video",
      "autoPlay": false,
      "src": "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      "poster": "data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E"
    },
    "previewSchema": {
      "type": "video",
      "autoPlay": false,
      "src": "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      "poster": "data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E"
    },
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
                  "tooltip": "可设置为左上角、右上角、右下角、左下角，默认为右下角",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "参考位置"
                },
                "name": "originPosition",
                "value": "left-top",
                "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
                "options": [
                  {
                    "label": "左上角",
                    "value": "left-top"
                  },
                  {
                    "label": "右上角",
                    "value": "right-top"
                  },
                  {
                    "label": "右下角(默认)",
                    "value": "right-bottom"
                  },
                  {
                    "label": "左下角",
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
                "horizontal": "[Circular]",
                "inputClassName": "is-inline ",
                "name": "autoPlay",
                "label": "自动播放"
              },
              {
                "type": "switch",
                "mode": "horizontal",
                "horizontal": "[Circular]",
                "inputClassName": "is-inline ",
                "name": "muted",
                "label": "静音"
              },
              {
                "type": "switch",
                "mode": "horizontal",
                "horizontal": "[Circular]",
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
            "title": "外观",
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
                "horizontal": "[Circular]",
                "inputClassName": "is-inline ",
                "name": "splitPoster",
                "label": "分开显示封面"
              },
              {
                "type": "ae-classname",
                "name": "className",
                "label": {
                  "type": "tooltip-wrapper",
                  "tooltip": "有哪些辅助类 CSS 类名？请前往 <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">样式说明</a>，除此之外你可以添加自定义类名，然后在系统配置中添加自定义样式。",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "CSS 类名"
                }
              }
            ]
          },
          {
            "title": "显隐",
            "body": [
              "[Circular]"
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
  {
    "manager": "[Circular]",
    "rendererName": "custom",
    "$schema": "/schemas/CustomSchema.json",
    "name": "自定义代码",
    "isBaseComponent": true,
    "description": "通过内嵌代码来实现功能",
    "tags": [
      "功能"
    ],
    "icon": "fa fa-gears",
    "pluginIcon": "custom-plugin",
    "docLink": "/amis/zh-CN/components/custom",
    "scaffold": {
      "type": "custom",
      "html": "<div><h2>hello, world!</h2></div>",
      "onMount": "\n      const button = document.createElement('button');\n      button.innerText = '点击修改姓名';\n      button.onclick = event => {\n        event.preventDefault();\n      };\n      dom.appendChild(button);"
    },
    "previewSchema": {
      "type": "custom",
      "html": "<div><h2>hello, world!</h2></div>",
      "onMount": "\n      const button = document.createElement('button');\n      button.innerText = '点击修改姓名';\n      button.onclick = event => {\n        event.preventDefault();\n      };\n      dom.appendChild(button);"
    },
    "panelTitle": "自定义代码",
    "panelBody": [
      {
        "type": "select",
        "label": {
          "type": "tooltip-wrapper",
          "tooltip": "可设置为左上角、右上角、右下角、左下角，默认为右下角",
          "tooltipTheme": "dark",
          "placement": "top",
          "tooltipStyle": {
            "fontSize": "12px"
          },
          "className": "ae-formItemControl-label-tip",
          "body": "参考位置"
        },
        "name": "originPosition",
        "value": "left-top",
        "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
        "options": [
          {
            "label": "左上角",
            "value": "left-top"
          },
          {
            "label": "右上角",
            "value": "right-top"
          },
          {
            "label": "右下角(默认)",
            "value": "right-bottom"
          },
          {
            "label": "左下角",
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
  {
    "manager": "[Circular]",
    "rendererName": "tasks",
    "$schema": "/schemas/TasksSchema.json",
    "name": "异步任务",
    "isBaseComponent": true,
    "description": "用来做异步任务呈现或者操作。",
    "searchKeywords": "任务操作集合",
    "docLink": "/amis/zh-CN/components/tasks",
    "tags": [
      "功能"
    ],
    "icon": "",
    "pluginIcon": "tasks-plugin",
    "scaffold": {
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
    "previewSchema": {
      "type": "tasks",
      "name": "tasks",
      "items": "[Circular]"
    },
    "panelTitle": "异步任务",
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "each",
    "$schema": "/schemas/EachSchema.json",
    "name": "循环 Each",
    "isBaseComponent": true,
    "isListComponent": true,
    "memberImmutable": true,
    "description": "功能渲染器，可以基于现有变量循环输出渲染器。",
    "searchKeywords": "循环渲染器",
    "docLink": "/amis/zh-CN/components/each",
    "tags": [
      "功能"
    ],
    "icon": "fa fa-repeat",
    "pluginIcon": "each-plugin",
    "scaffold": {
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
                "style": {
                },
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
                "style": {
                },
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
        "marginBottom": "10px"
      },
      "isFixedHeight": false,
      "isFixedWidth": false,
      "size": "none",
      "id": "u:330fe2b1f73e"
    },
    "previewSchema": {
      "type": "each",
      "name": "",
      "items": "[Circular]",
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
    "panelTitle": "循环",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "property",
    "$schema": "/schemas/PropertySchema.json",
    "name": "属性表",
    "isBaseComponent": true,
    "icon": "fa fa-list",
    "pluginIcon": "property-sheet-plugin",
    "description": "属性表",
    "docLink": "/amis/zh-CN/components/property",
    "tags": [
      "功能"
    ],
    "scaffold": {
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
    "previewSchema": {
      "type": "property",
      "title": "机器配置",
      "items": "[Circular]"
    },
    "panelTitle": "属性表",
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
                  "tooltip": "可设置为左上角、右上角、右下角、左下角，默认为右下角",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "参考位置"
                },
                "name": "originPosition",
                "value": "left-top",
                "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
                "options": [
                  {
                    "label": "左上角",
                    "value": "left-top"
                  },
                  {
                    "label": "右上角",
                    "value": "right-top"
                  },
                  {
                    "label": "右下角(默认)",
                    "value": "right-bottom"
                  },
                  {
                    "label": "左下角",
                    "value": "left-bottom"
                  }
                ]
              },
              {
                "label": "标题",
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
                "label": "属性取自变量",
                "type": "input-text",
                "name": "source"
              },
              {
                "label": "属性列表",
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
                    "label": "属性名",
                    "name": "label"
                  },
                  {
                    "type": "input-text",
                    "mode": "inline",
                    "size": "sm",
                    "label": "属性值",
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
            "title": "外观",
            "body": [
              {
                "type": "ae-classname",
                "name": "className",
                "label": {
                  "type": "tooltip-wrapper",
                  "tooltip": "有哪些辅助类 CSS 类名？请前往 <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">样式说明</a>，除此之外你可以添加自定义类名，然后在系统配置中添加自定义样式。",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "CSS 类名"
                }
              }
            ]
          },
          {
            "title": "显隐",
            "body": [
              null,
              "[Circular]"
            ]
          }
        ]
      }
    ],
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "iframe",
    "$schema": "/schemas/IFrameSchema.json",
    "name": "iFrame",
    "isBaseComponent": true,
    "description": "可以用来嵌入现有页面。",
    "docLink": "/amis/zh-CN/components/iframe",
    "tags": [
      "功能"
    ],
    "icon": "fa fa-window-maximize",
    "pluginIcon": "iframe-plugin",
    "scaffold": {
      "type": "iframe",
      "src": "//www.baidu.com"
    },
    "previewSchema": {
      "type": "tpl",
      "tpl": "iFrame"
    },
    "panelTitle": "iFrame",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "qrcode",
    "$schema": "/schemas/QRCodeSchema.json",
    "name": "二维码",
    "isBaseComponent": true,
    "description": "可以用来生成二维码",
    "docLink": "/amis/zh-CN/components/qrcode",
    "tags": [
      "功能"
    ],
    "icon": "fa fa-qrcode",
    "pluginIcon": "qrcode-plugin",
    "scaffold": {
      "type": "qrcode",
      "value": "https://amis.baidu.com"
    },
    "previewSchema": {
      "type": "qrcode",
      "value": "https://amis.baidu.com"
    },
    "actions": "[Circular]",
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
                  "tooltip": "可设置为左上角、右上角、右下角、左下角，默认为右下角",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "参考位置"
                },
                "name": "originPosition",
                "value": "left-top",
                "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
                "options": [
                  {
                    "label": "左上角",
                    "value": "left-top"
                  },
                  {
                    "label": "右上角",
                    "value": "right-top"
                  },
                  {
                    "label": "右下角(默认)",
                    "value": "right-bottom"
                  },
                  {
                    "label": "左下角",
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
            "title": "外观",
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
                  "tooltip": "有哪些辅助类 CSS 类名？请前往 <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">样式说明</a>，除此之外你可以添加自定义类名，然后在系统配置中添加自定义样式。",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "CSS 类名"
                }
              }
            ]
          },
          {
            "title": "显隐",
            "body": [
              null,
              "[Circular]"
            ]
          }
        ]
      }
    ],
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "icon",
    "$schema": "/schemas/Icon.json",
    "name": "图标",
    "isBaseComponent": true,
    "icon": "fa fa-calendar",
    "panelTitle": "图标",
    "description": "用来展示一个图标，你可以配置不同的图标样式。",
    "docLink": "/amis/zh-CN/components/icon",
    "tags": [
      "展示"
    ],
    "pluginIcon": "button-plugin",
    "scaffold": {
      "type": "icon",
      "icon": "fa fa-spotify",
      "vendor": ""
    },
    "previewSchema": {
      "type": "icon",
      "icon": "fa fa-spotify",
      "vendor": ""
    },
    "events": "[Circular]",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "link",
    "$schema": "/schemas/LinkSchema.json",
    "name": "链接",
    "isBaseComponent": true,
    "description": "用来展示文字链接",
    "tags": [
      "展示"
    ],
    "icon": "fa fa-link",
    "pluginIcon": "url-plugin",
    "scaffold": {
      "type": "link",
      "value": "http://www.baidu.com/"
    },
    "previewSchema": {
      "type": "link",
      "value": "http://www.baidu.com/",
      "label": "链接"
    },
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
            "title": "属性",
            "body": [
              {
                "type": "collapse-group",
                "activeKey": [
                  "基本",
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
                    "title": "基本",
                    "body": [
                      {
                        "type": "select",
                        "label": {
                          "type": "tooltip-wrapper",
                          "tooltip": "可设置为左上角、右上角、右下角、左下角，默认为右下角",
                          "tooltipTheme": "dark",
                          "placement": "top",
                          "tooltipStyle": {
                            "fontSize": "12px"
                          },
                          "className": "ae-formItemControl-label-tip",
                          "body": "参考位置"
                        },
                        "name": "originPosition",
                        "value": "left-top",
                        "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
                        "options": [
                          {
                            "label": "左上角",
                            "value": "left-top"
                          },
                          {
                            "label": "右上角",
                            "value": "right-top"
                          },
                          {
                            "label": "右下角(默认)",
                            "value": "right-bottom"
                          },
                          {
                            "label": "左下角",
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
                        "horizontal": "[Circular]",
                        "inputClassName": "is-inline ",
                        "name": "blank",
                        "label": "在新窗口打开"
                      },
                      {
                        "label": "左侧图标",
                        "type": "icon-picker",
                        "name": "icon",
                        "placeholder": "点击选择图标",
                        "clearable": true,
                        "description": ""
                      },
                      {
                        "label": "右侧图标",
                        "type": "icon-picker",
                        "name": "rightIcon",
                        "placeholder": "点击选择图标",
                        "clearable": true,
                        "description": ""
                      }
                    ],
                    "collapsed": false,
                    "key": "基本"
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
                              "tooltip": "HTML &lt;a&gt; 元素的target属性，该属性指定在何处显示链接的资源",
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
                      "[Circular]",
                      "[Circular]",
                      {
                        "type": "ae-StatusControl",
                        "label": "禁用",
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
            "title": "外观",
            "body": [
              {
                "type": "collapse-group",
                "activeKey": [
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
                    "collapsed": true,
                    "body": [
                      {
                        "type": "ae-classname",
                        "name": "className",
                        "label": {
                          "type": "tooltip-wrapper",
                          "tooltip": "有哪些辅助类 CSS 类名？请前往 <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">样式说明</a>，除此之外你可以添加自定义类名，然后在系统配置中添加自定义样式。",
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
                          "tooltip": "有哪些辅助类 CSS 类名？请前往 <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">样式说明</a>，除此之外你可以添加自定义类名，然后在系统配置中添加自定义样式。",
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
                          "tooltip": "有哪些辅助类 CSS 类名？请前往 <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">样式说明</a>，除此之外你可以添加自定义类名，然后在系统配置中添加自定义样式。",
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
  {
    "manager": "[Circular]",
    "rendererName": "list",
    "$schema": "/schemas/ListSchema.json",
    "name": "列表",
    "isBaseComponent": true,
    "isListComponent": true,
    "disabledRendererPlugin": true,
    "memberImmutable": true,
    "description": "展示一个列表，可以自定标题、副标题，内容及按钮组部分。当前组件需要配置数据源，不自带数据拉取，请优先使用 「CRUD」 组件。",
    "docLink": "/amis/zh-CN/components/list",
    "tags": [
      "展示"
    ],
    "icon": "fa fa-list",
    "pluginIcon": "list-plugin",
    "scaffold": {
      "type": "list",
      "listItem": {
        "body": [
          {
            "type": "tpl",
            "tpl": "简单的展示数据：$a $b",
            "wrapperComponent": ""
          }
        ],
        "actions": [
          {
            "icon": "fa fa-eye",
            "type": "button"
          }
        ]
      }
    },
    "previewSchema": {
      "type": "list",
      "listItem": "[Circular]",
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
    "panelTitle": "列表",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "cards",
    "$schema": "/schemas/CardsSchema.json",
    "name": "列表",
    "isBaseComponent": true,
    "isListComponent": true,
    "memberImmutable": true,
    "description": "功能类似于表格，但是用一个个小卡片来展示数据。当前组件需要配置数据源，不自带数据拉取，请优先使用 「CRUD」 组件。",
    "docLink": "/amis/zh-CN/components/cards",
    "tags": [
      "展示"
    ],
    "icon": "fa fa-window-maximize",
    "pluginIcon": "cards-plugin",
    "scaffold": {
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
                "style": {
                },
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
                "style": {
                },
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
                    "style": {
                    },
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
                    "style": {
                    },
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
                "style": {
                },
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
                "style": {
                },
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
                    "actions": [
                    ]
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
        "gutterY": 10
      },
      "id": "u:0fb820345fc1"
    },
    "previewSchema": {
      "type": "cards",
      "columnsCount": 1,
      "card": "[Circular]",
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
        {
        },
        {
        },
        {
        }
      ],
      "name": "items"
    },
    "panelTitle": "列表",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "mapping",
    "$schema": "/schemas/MappingSchema.json",
    "name": "映射",
    "isBaseComponent": true,
    "description": "对现有值做映射展示，比如原始值是：1、2、3...，需要展示成：下线、上线、过期等等。",
    "docLink": "/amis/zh-CN/components/mapping",
    "tags": [
      "展示"
    ],
    "icon": "fa fa-exchange",
    "pluginIcon": "mapping-plugin",
    "scaffold": {
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
    "previewSchema": {
      "type": "mapping",
      "value": 1,
      "map": "[Circular]",
      "itemSchema": "[Circular]"
    },
    "panelTitle": "映射",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "avatar",
    "$schema": "/schemas/AvatarSchema.json",
    "name": "头像",
    "isBaseComponent": true,
    "icon": "fa fa-user",
    "pluginIcon": "avatar-plugin",
    "description": "用户头像",
    "docLink": "/amis/zh-CN/components/avatar",
    "tags": [
      "展示"
    ],
    "scaffold": {
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
    "events": "[Circular]",
    "previewSchema": {
      "type": "avatar",
      "showtype": "image",
      "icon": "",
      "fit": "cover",
      "style": "[Circular]"
    },
    "notRenderFormZone": true,
    "panelJustify": true,
    "panelTitle": "头像",
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "card",
    "$schema": "/schemas/CardSchema.json",
    "name": "卡片",
    "isBaseComponent": true,
    "description": "展示单个卡片。",
    "docLink": "/amis/zh-CN/components/card",
    "tags": [
      "展示"
    ],
    "icon": "",
    "pluginIcon": "card-plugin",
    "scaffold": {
      "type": "card",
      "header": {
        "title": "标题",
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
    "previewSchema": {
      "type": "card",
      "header": "[Circular]",
      "body": "内容",
      "actions": "[Circular]"
    },
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
    "overrides": {
    },
    "vRendererConfig": {
      "panelTitle": "字段"
    },
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "card2",
    "$schema": "/schemas/Card2Schema.json",
    "name": "卡片",
    "isBaseComponent": true,
    "disabledRendererPlugin": true,
    "description": "展示单个卡片。",
    "tags": [
      "展示"
    ],
    "icon": "",
    "scaffold": {
      "type": "card2",
      "body": "内容"
    },
    "previewSchema": {
      "type": "card2",
      "body": "内容"
    },
    "regions": [
      {
        "key": "body",
        "label": "内容区",
        "renderMethod": "renderBody",
        "preferTag": "展示"
      }
    ],
    "panelTitle": "卡片",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "cards",
    "$schema": "/schemas/CardsSchema.json",
    "name": "卡片列表",
    "isBaseComponent": true,
    "isListComponent": true,
    "memberImmutable": true,
    "description": "功能类似于表格，但是用一个个小卡片来展示数据。当前组件需要配置数据源，不自带数据拉取，请优先使用 「CRUD」 组件。",
    "searchKeywords": "卡片组",
    "docLink": "/amis/zh-CN/components/cards",
    "tags": [
      "展示"
    ],
    "icon": "fa fa-window-maximize",
    "pluginIcon": "cards-plugin",
    "scaffold": {
      "type": "cards",
      "columnsCount": 4,
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
                  "mock": {
                  }
                },
                "style": {
                },
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
                        "style": {
                        },
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
                        "style": {
                        },
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
                        "style": {
                        },
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
                    "style": {
                    },
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
                    "style": {
                    },
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
                    "style": {
                    },
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
                    "style": {
                    },
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
                "style": {
                },
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
                "style": {
                },
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
            "actions": [
            ]
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
      "name": "",
      "style": {
        "gutterX": 15,
        "gutterY": 15
      },
      "id": "u:1f941707f77f"
    },
    "previewSchema": {
      "type": "cards",
      "columnsCount": 2,
      "card": "[Circular]",
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
        {
        },
        {
        },
        {
        },
        {
        }
      ]
    },
    "panelTitle": "卡片集",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "table",
    "$schema": "/schemas/TableSchema.json",
    "name": "原子表格",
    "tags": [
      "展示"
    ],
    "isBaseComponent": true,
    "description": "用来展示表格数据，可以配置列信息，然后关联数据便能完成展示。支持嵌套、超级表头、列固定、表头固顶、合并单元格等等。当前组件需要配置数据源，不自带数据拉取，请优先使用 「CRUD」 组件。",
    "docLink": "/amis/zh-CN/components/table",
    "icon": "fa fa-table",
    "pluginIcon": "table-plugin",
    "scaffold": {
      "type": "table",
      "columns": [
        {
          "label": "列信息",
          "name": "a"
        }
      ]
    },
    "regions": [
      {
        "key": "columns",
        "label": "列集合",
        "renderMethod": "renderTableContent",
        "preferTag": "展示",
        "dndMode": "position-h"
      }
    ],
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
    "panelTitle": "表格",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "unWatchWidthChange": {
    },
    "dsManager": {
      "builders": {
      }
    },
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "cell-field",
    "panelTitle": "列配置",
    "panelIcon": "fa fa-columns",
    "panelJustify": true,
    "_dynamicControls": {
    },
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "chart",
    "$schema": "/schemas/ChartSchema.json",
    "name": "图表",
    "isBaseComponent": true,
    "description": "用来渲染图表，基于 echarts 图表库，理论上 echarts 所有图表类型都支持。",
    "docLink": "/amis/zh-CN/components/chart",
    "tags": [
      "展示"
    ],
    "icon": "fa fa-pie-chart",
    "pluginIcon": "chart-plugin",
    "scaffold": {
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
    "previewSchema": {
      "type": "chart",
      "config": "[Circular]",
      "replaceChartOption": true
    },
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelTitle": "图表",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "sparkline",
    "$schema": "/schemas/SparklineSchema.json",
    "name": "走势图",
    "isBaseComponent": true,
    "description": "用于内嵌展示简单图表",
    "docLink": "/amis/zh-CN/components/sparkline",
    "tags": [
      "展示"
    ],
    "icon": "fa fa-area-chart",
    "pluginIcon": "sparkline-plugin",
    "scaffold": {
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
    "previewSchema": {
      "type": "sparkline",
      "height": 30,
      "value": "[Circular]"
    },
    "panelTitle": "走势图",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "carousel",
    "$schema": "/schemas/CarouselSchema.json",
    "name": "轮播图",
    "isBaseComponent": true,
    "description": "用来渲染轮播图，可以配置每一页的内容（不只是图片），可以配置过渡动画。",
    "docLink": "/amis/zh-CN/components/carousel",
    "tags": [
      "展示"
    ],
    "icon": "fa fa-images",
    "pluginIcon": "carousel-plugin",
    "scaffold": {
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
    "previewSchema": {
      "type": "carousel",
      "options": "[Circular]"
    },
    "panelTitle": "轮播图",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "image",
    "$schema": "/schemas/ImageSchema.json",
    "name": "图片展示",
    "isBaseComponent": true,
    "description": "可以用来展示一张图片，支持静态设置图片地址，也可以配置 <code>name</code> 与变量关联。",
    "docLink": "/amis/zh-CN/components/image",
    "tags": [
      "展示"
    ],
    "icon": "fa fa-photo",
    "pluginIcon": "image-plugin",
    "scaffold": {
      "type": "image"
    },
    "previewSchema": {
      "type": "image",
      "thumbMode": "cover",
      "value": "data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E"
    },
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelTitle": "图片",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "images",
    "$schema": "/schemas/ImagesSchema.json",
    "name": "图片集",
    "isBaseComponent": true,
    "description": "展示多张图片",
    "docLink": "/amis/zh-CN/components/images",
    "tags": [
      "展示"
    ],
    "icon": "fa fa-clone",
    "pluginIcon": "images-plugin",
    "scaffold": {
      "type": "images",
      "imageGallaryClassName": "app-popover :AMISCSSWrapper"
    },
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
    "panelTitle": "图片集",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "date",
    "$schema": "/schemas/DateSchema.json",
    "name": "日期展示",
    "isBaseComponent": true,
    "disabledRendererPlugin": true,
    "description": "主要用来关联字段名做日期展示，支持各种格式如：X（时间戳），YYYY-MM-DD HH:mm:ss。",
    "docLink": "/amis/zh-CN/components/date",
    "tags": [
      "展示"
    ],
    "icon": "fa fa-calendar",
    "pluginIcon": "date-plugin",
    "scaffold": {
      "type": "date",
      "value": 1733584490
    },
    "previewSchema": {
      "type": "date",
      "value": 1733584490,
      "format": "YYYY-MM-DD"
    },
    "panelTitle": "日期展示",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "time",
    "$schema": "/schemas/DateSchema.json",
    "name": "时间展示",
    "isBaseComponent": true,
    "disabledRendererPlugin": true,
    "description": "主要用来关联字段名做日期展示，支持各种格式如：X（时间戳），YYYY-MM-DD HH:mm:ss。",
    "docLink": "/amis/zh-CN/components/date",
    "tags": [
      "展示"
    ],
    "icon": "fa fa-calendar",
    "pluginIcon": "time-plugin",
    "scaffold": {
      "type": "time",
      "value": 1733584490,
      "format": "HH:mm:ss"
    },
    "previewSchema": {
      "type": "time",
      "value": 1733584490,
      "format": "HH:mm:ss"
    },
    "panelTitle": "日期展示",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "datetime",
    "$schema": "/schemas/DateSchema.json",
    "name": "日期时间展示",
    "isBaseComponent": true,
    "disabledRendererPlugin": false,
    "description": "主要用来关联字段名做日期展示，支持各种格式如：X（时间戳），YYYY-MM-DD HH:mm:ss。",
    "docLink": "/amis/zh-CN/components/date",
    "tags": [
      "展示"
    ],
    "icon": "fa fa-calendar",
    "pluginIcon": "datetime-plugin",
    "scaffold": {
      "type": "datetime",
      "format": "YYYY-MM-DD HH:mm:ss",
      "value": 1733584490
    },
    "previewSchema": {
      "type": "datetime",
      "format": "YYYY-MM-DD HH:mm:ss",
      "value": 1733584490
    },
    "panelTitle": "日期展示",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "calendar",
    "$schema": "/schemas/Calendar.json",
    "name": "日历日程",
    "isBaseComponent": true,
    "icon": "fa fa-calendar",
    "pluginIcon": "inputDatetime",
    "panelTitle": "日历日程",
    "description": "展示日历及日程。",
    "docLink": "/amis/zh-CN/components/calendar",
    "tags": [
      "展示"
    ],
    "scaffold": {
      "type": "calendar"
    },
    "previewSchema": {
      "type": "calendar"
    },
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "tag",
    "$schema": "/schemas/TagSchema.json",
    "name": "标签",
    "isBaseComponent": true,
    "icon": "fa fa-tag",
    "pluginIcon": "tag-plugin",
    "description": "用于标记和选择的标签",
    "docLink": "/amis/zh-CN/components/tag",
    "tags": [
      "展示"
    ],
    "previewSchema": {
      "type": "tag",
      "label": "普通标签",
      "color": "processing"
    },
    "scaffold": {
      "type": "tag",
      "label": "普通标签",
      "color": "processing"
    },
    "panelTitle": "标签",
    "panelJustify": true,
    "events": "[Circular]",
    "actions": "[Circular]",
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "json",
    "$schema": "/schemas/JsonSchema.json",
    "name": "JSON展示",
    "isBaseComponent": true,
    "description": "用来展示 JSON 数据。",
    "docLink": "/amis/zh-CN/components/json",
    "tags": [
      "展示"
    ],
    "icon": "fa fa-code",
    "pluginIcon": "json-view-plugin",
    "scaffold": {
      "type": "json"
    },
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
    "panelTitle": "JSON",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "progress",
    "$schema": "/schemas/ProgressSchema.json",
    "name": "进度展示",
    "searchKeywords": "进度条、progress",
    "isBaseComponent": true,
    "description": "用来展示进度。可配置各个进度段用不同的颜色展示。",
    "docLink": "/amis/zh-CN/components/progress",
    "tags": [
      "展示"
    ],
    "icon": "fa fa-angle-double-right",
    "pluginIcon": "progress-plugin",
    "scaffold": {
      "type": "progress",
      "mode": "line",
      "value": 66,
      "strokeWidth": 6,
      "valueTpl": "${value}%"
    },
    "previewSchema": {
      "type": "progress",
      "mode": "line",
      "value": 66,
      "strokeWidth": 6,
      "valueTpl": "${value}%"
    },
    "actions": "[Circular]",
    "panelTitle": "进度",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "status",
    "$schema": "/schemas/StatusSchema.json",
    "name": "状态显示",
    "isBaseComponent": true,
    "description": "用图标更具关联字段来展示状态，比如 1 展示 √、0 展示 x。这块可以自定义配置",
    "docLink": "/amis/zh-CN/components/status",
    "tags": [
      "展示"
    ],
    "icon": "fa fa-check-square-o",
    "pluginIcon": "status-plugin",
    "scaffold": {
      "type": "status",
      "value": 1
    },
    "previewSchema": {
      "type": "status",
      "value": 1
    },
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
        "label": "成功",
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
  {
    "manager": "[Circular]",
    "rendererName": "steps",
    "$schema": "/schemas/StepsSchema.json",
    "name": "步骤条",
    "isBaseComponent": true,
    "icon": "fa fa-forward",
    "pluginIcon": "steps-plugin",
    "description": "Steps 步骤条",
    "docLink": "/amis/zh-CN/components/steps",
    "tags": [
      "展示"
    ],
    "scaffold": {
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
    "previewSchema": {
      "type": "steps",
      "value": 1,
      "steps": "[Circular]"
    },
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
                  "tooltip": "可设置为左上角、右上角、右下角、左下角，默认为右下角",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "参考位置"
                },
                "name": "originPosition",
                "value": "left-top",
                "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
                "options": [
                  {
                    "label": "左上角",
                    "value": "left-top"
                  },
                  {
                    "label": "右上角",
                    "value": "right-top"
                  },
                  {
                    "label": "右下角(默认)",
                    "value": "right-bottom"
                  },
                  {
                    "label": "左下角",
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
                    "placeholder": "副标题"
                  },
                  {
                    "type": "input-text",
                    "name": "description",
                    "label": false,
                    "placeholder": "描述"
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
                    "labelRemark": {
                    }
                  },
                  {
                    "type": "combo",
                    "name": "source",
                    "syncDefaultValue": false,
                    "multiLine": true,
                    "visibleOn": "this.source && typeof this.source !== 'string'",
                    "className": "m-b-none",
                    "messages": {
                      "validateFailed": "接口配置中存在错误，请仔细检查"
                    },
                    "items": [
                      {
                        "label": "发送方式",
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
                        "label": "接口地址",
                        "type": "input-text",
                        "name": "url",
                        "placeholder": "http://",
                        "required": true
                      },
                      {
                        "type": "switch",
                        "label": "数据映射",
                        "name": "data",
                        "className": "w-full m-b-xs"
                      },
                      {
                        "type": "tpl",
                        "visibleOn": "!this.data",
                        "inline": false,
                        "className": "text-sm text-muted m-b",
                        "tpl": "当没开启数据映射时，发送 API 的时候会发送尽可能多的数据，如果你想自己控制发送的数据，或者需要额外的数据处理，请开启此选项"
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
                        "description": "<p>当没开启数据映射时，发送数据自动切成白名单模式，配置啥发送啥，请绑定数据。如：<code>{\"a\": \"\\${a}\", \"b\": 2}</code></p><p>如果希望在默认的基础上定制，请先添加一个 Key 为 `&` Value 为 `\\$$` 作为第一行。</p><div>当值为 <code>__undefined</code>时，表示删除对应的字段，可以结合<code>{\"&\": \"\\$$\"}</code>来达到黑名单效果。</div>"
                      },
                      {
                        "label": "发送条件",
                        "type": "input-text",
                        "name": "sendOn",
                        "placeholder": "如：this.type == \"123\"",
                        "description": "用表达式来设置该请求的发送条件"
                      },
                      {
                        "type": "switch",
                        "label": "静默请求",
                        "name": "silent",
                        "mode": "inline",
                        "description": "是否静默发送请求，屏蔽报错提示"
                      },
                      {
                        "type": "switch",
                        "label": "是否设置缓存",
                        "name": "cache",
                        "className": "w-full m-b-xs",
                        "description": "设置该请求缓存的有效时间"
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
                        "label": "文件下载",
                        "name": "responseType",
                        "description": "当接口为二进制文件下载时请勾选，并设置 Content-Disposition"
                      },
                      {
                        "label": "数据格式",
                        "type": "button-group-select",
                        "name": "dataType",
                        "description": "发送体格式为：<%= data.dataType === \"json\" ? \"application/json\" : (data.dataType === \"form-data\" ? \"multipart/form-data\" : (data.dataType === \"form\" ? \"application/x-www-form-urlencoded\" : \"\")) %>，当发送内容中存在文件时会自动使用 form-data 格式。",
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
                        "label": "数据替换",
                        "name": "replaceData",
                        "description": "默认数据都是追加方式，开启这个后是完全替换"
                      },
                      {
                        "type": "switch",
                        "label": "返回结果映射",
                        "name": "responseData",
                        "className": "w-full m-b-xs"
                      },
                      {
                        "type": "tpl",
                        "visibleOn": "!this.responseData",
                        "inline": false,
                        "className": "text-sm text-muted m-b",
                        "tpl": "如果需要对返回结果做额外的数据处理，请开启此选项"
                      },
                      {
                        "type": "input-kv",
                        "syncDefaultValue": false,
                        "name": "responseData",
                        "visibleOn": "this.responseData",
                        "descriptionClassName": "help-block text-xs m-b-none"
                      },
                      {
                        "title": "自定义适配器",
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
                            "label": "发送适配器",
                            "description": "函数签名：(api) => api， 数据在 api.data 中，修改后返回 api 对象。"
                          },
                          {
                            "name": "adaptor",
                            "type": "js-editor",
                            "allowFullscreen": true,
                            "label": "接收适配器",
                            "description": "函数签名: (payload, response, api) => payload"
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
            "title": "外观",
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
                  "tooltip": "有哪些辅助类 CSS 类名？请前往 <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">样式说明</a>，除此之外你可以添加自定义类名，然后在系统配置中添加自定义样式。",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "CSS 类名"
                }
              }
            ]
          },
          {
            "title": "显隐",
            "body": [
              "[Circular]"
            ]
          }
        ]
      }
    ],
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "timeline",
    "$schema": "/schemas/TimelineSchema.json",
    "name": "时间轴",
    "isBaseComponent": true,
    "icon": "fa fa-bars",
    "description": "用来展示时间轴",
    "docLink": "/amis/zh-CN/components/timeline",
    "tags": [
      "展示"
    ],
    "scaffold": {
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
    "previewSchema": {
      "type": "timeline",
      "label": "时间轴",
      "name": "timeline",
      "items": "[Circular]"
    },
    "panelTitle": "时间轴",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "divider",
    "$schema": "/schemas/DividerSchema.json",
    "name": "分隔线",
    "isBaseComponent": true,
    "icon": "fa fa-minus",
    "pluginIcon": "divider-plugin",
    "description": "用来展示一个分割线，可用来做视觉上的隔离。",
    "docLink": "/amis/zh-CN/components/divider",
    "scaffold": {
      "type": "divider",
      "$$dragMode": "hv"
    },
    "previewSchema": {
      "type": "divider",
      "className": "m-t-none m-b-none"
    },
    "panelTitle": "分隔线",
    "panelJustify": true,
    "tags": [
      "展示"
    ],
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "code",
    "$schema": "/schemas/CodeSchema.json",
    "name": "代码高亮",
    "isBaseComponent": true,
    "icon": "fa fa-code",
    "pluginIcon": "code-plugin",
    "description": "代码高亮",
    "docLink": "/amis/zh-CN/components/code",
    "tags": [
      "展示"
    ],
    "scaffold": {
      "type": "code",
      "language": "html",
      "value": "<div>html</div>"
    },
    "previewSchema": {
      "type": "code",
      "language": "html",
      "value": "<div>html</div>"
    },
    "panelTitle": "代码高亮",
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "markdown",
    "$schema": "/schemas/MarkdownSchema.json",
    "name": "Markdown",
    "isBaseComponent": true,
    "description": "展示 markdown 内容",
    "docLink": "/amis/zh-CN/components/markdown",
    "tags": [
      "展示"
    ],
    "icon": "fa fa-file-text",
    "pluginIcon": "markdown-plugin",
    "scaffold": {
      "type": "markdown",
      "value": "## 这是标题"
    },
    "previewSchema": {
      "type": "markdown",
      "value": "## 这是标题"
    },
    "panelTitle": "MD",
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "collapse",
    "$schema": "/schemas/CollapseSchema.json",
    "name": "折叠器",
    "isBaseComponent": true,
    "description": "折叠器，可以将内容区展开或隐藏，保持页面的整洁",
    "docLink": "/amis/zh-CN/components/collapse",
    "tags": [
      "展示"
    ],
    "icon": "fa fa-window-minimize",
    "pluginIcon": "collapse-plugin",
    "scaffold": {
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
    "previewSchema": {
      "type": "collapse",
      "header": "标题",
      "body": "[Circular]"
    },
    "panelTitle": "折叠器",
    "panelJustify": true,
    "events": "[Circular]",
    "actions": "[Circular]",
    "regions": [
      {
        "key": "body",
        "label": "内容区"
      }
    ],
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "office-viewer",
    "$schema": "/schemas/OfficeViewerSchema.json",
    "name": "文档预览",
    "isBaseComponent": true,
    "description": "Office 文档预览",
    "docLink": "/amis/zh-CN/components/office-viewer",
    "tags": [
      "展示"
    ],
    "icon": "fa fa-file-word",
    "pluginIcon": "officeViewer-plugin",
    "scaffold": {
      "type": "office-viewer"
    },
    "previewSchema": {
      "type": "office-viewer"
    },
    "panelTitle": "文档预览",
    "panelJustify": true,
    "actions": "[Circular]",
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "pdf-viewer",
    "$schema": "/schemas/PdfViewerSchema.json",
    "name": "PDF预览",
    "isBaseComponent": true,
    "description": "PDF 文件预览",
    "docLink": "/amis/zh-CN/components/pdf-viewer",
    "tags": [
      "展示"
    ],
    "icon": "fa fa-file-pdf",
    "pluginIcon": "pdfViewer-plugin",
    "scaffold": {
      "type": "pdf-viewer"
    },
    "previewSchema": {
      "type": "pdf-viewer"
    },
    "panelTitle": "PDF预览",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "log",
    "$schema": "/schemas/LogSchema.json",
    "name": "日志",
    "isBaseComponent": true,
    "icon": "fa fa-file-text-o",
    "pluginIcon": "log-plugin",
    "description": "用来实时显示日志",
    "searchKeywords": "实时日志",
    "docLink": "/amis/zh-CN/components/log",
    "tags": [
      "展示"
    ],
    "previewSchema": {
      "type": "log",
      "height": 120,
      "autoScroll": true
    },
    "scaffold": {
      "type": "log",
      "autoScroll": true,
      "height": 500,
      "encoding": "utf-8"
    },
    "panelJustify": true,
    "panelTitle": "日志",
    "order": 0
  },
  {
    "manager": "[Circular]",
    "panelTitle": "按钮",
    "rendererName": "action",
    "name": "行为按钮",
    "$schema": "/schemas/ActionSchema.json",
    "order": 0
  },
  {
    "manager": "[Circular]",
    "panelTitle": "列配置",
    "panelIcon": "fa fa-columns",
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "input-array",
    "$schema": "/schemas/ArrayControlSchema.json",
    "disabledRendererPlugin": true,
    "name": "数组输入框",
    "isBaseComponent": true,
    "icon": "fa fa-bars",
    "pluginIcon": "input-array-plugin",
    "description": "Array 数组输入框，可自定义成员输入形式。其实是 Combo 的 flat 值打平的一种用法，可直接用 combo 代替。",
    "docLink": "/amis/zh-CN/components/form/input-array",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-array",
      "label": "数组输入框",
      "name": "array",
      "items": {
        "type": "input-text",
        "placeholder": "请输入"
      }
    },
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "wrapWithPanel": false,
      "mode": "horizontal",
      "body": [
        {
          "type": "input-array",
          "label": "数组输入框",
          "name": "array",
          "items": "[Circular]",
          "value": [
            "row1",
            ""
          ],
          "draggable": true
        }
      ]
    },
    "panelTitle": "数组框",
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "control",
    "$schema": "/schemas/FormControlSchema.json",
    "name": "表单项容器",
    "isBaseComponent": true,
    "icon": "fa fa-object-group",
    "pluginIcon": "form-group-plugin",
    "description": "表单项容器",
    "docLink": "/amis/zh-CN/components/form/group",
    "tags": [
      "容器"
    ],
    "disabledRendererPlugin": true,
    "scaffold": {
      "type": "control",
      "label": "表单项容器",
      "body": [
        {
          "type": "tpl",
          "wrapperComponent": "",
          "tpl": "a"
        }
      ]
    },
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "control",
          "label": "表单项容器",
          "body": "[Circular]"
        }
      ]
    },
    "regions": [
      {
        "key": "body",
        "label": "元素集合",
        "preferTag": "表单项"
      }
    ],
    "panelTitle": "表单项容器",
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "input-datetime",
    "$schema": "/schemas/DateTimeControlSchema.json",
    "icon": "fa fa-calendar",
    "pluginIcon": "input-datetime-plugin",
    "name": "日期时间",
    "isBaseComponent": true,
    "searchKeywords": "日期框、input-datetime、日期时间框、input-time、时间框、input-month、月份框、input-quarter、季度框、input-year、年框、年份框、年份选择",
    "description": "年月日时分选择",
    "docLink": "/amis/zh-CN/components/form/input-datetime",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-datetime",
      "label": "日期时间",
      "name": "datetime"
    },
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "wrapWithPanel": false,
      "mode": "horizontal",
      "body": [
        {
          "type": "input-datetime",
          "label": "日期时间",
          "name": "datetime"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "日期时间",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "disabledRendererPlugin": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "input-datetime-range",
    "$schema": "/schemas/DateTimeRangeControlSchema.json",
    "icon": "fa fa-calendar",
    "pluginIcon": "input-date-range-plugin",
    "name": "日期时间范围",
    "isBaseComponent": true,
    "searchKeywords": "日期范围框、input-datetime-range、日期时间范围、input-time-range、时间范围、input-month-range、月份范围、input-quarter-range、季度范围、input-year-range、年范围、年份范围",
    "description": "日期时间范围选择，可通过<code>minDate</code>、<code>maxDate</code>设定最小、最大日期",
    "docLink": "/amis/zh-CN/components/form/input-datetime-range",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-datetime-range",
      "label": "日期范围",
      "name": "datetime-range"
    },
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "input-datetime-range",
          "label": "日期范围",
          "name": "datetime-range"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "日期范围",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "disabledRendererPlugin": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "formula",
    "$schema": "/schemas/FormulaControlSchema.json",
    "name": "公式",
    "isBaseComponent": true,
    "disabledRendererPlugin": true,
    "icon": "fa fa-calculator",
    "pluginIcon": "formula-plugin",
    "description": "通过公式计算指定的变量值，并将其结果作用到指定的变量中",
    "docLink": "/amis/zh-CN/components/form/formula",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "formula",
      "name": "formula"
    },
    "previewSchema": {
      "type": "tpl",
      "tpl": "计算公式"
    },
    "panelTitle": "公式",
    "panelBody": [
      {
        "type": "select",
        "label": {
          "type": "tooltip-wrapper",
          "tooltip": "可设置为左上角、右上角、右下角、左下角，默认为右下角",
          "tooltipTheme": "dark",
          "placement": "top",
          "tooltipStyle": {
            "fontSize": "12px"
          },
          "className": "ae-formItemControl-label-tip",
          "body": "参考位置"
        },
        "name": "originPosition",
        "value": "left-top",
        "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
        "options": [
          {
            "label": "左上角",
            "value": "left-top"
          },
          {
            "label": "右上角",
            "value": "right-top"
          },
          {
            "label": "右下角(默认)",
            "value": "right-bottom"
          },
          {
            "label": "左下角",
            "value": "left-bottom"
          }
        ]
      },
      {
        "label": "字段名",
        "name": "name",
        "type": "input-text",
        "description": "公式计算结果会作用到此字段名对应的变量中。"
      },
      {
        "type": "input-text",
        "name": "value",
        "label": "默认值"
      },
      {
        "type": "input-text",
        "name": "formula",
        "label": "公式",
        "description": "支持 JS 表达式，如： <code>data.var_a + 2</code>，即当表单项 <code>var_a</code> 变化的时候，会自动给当前表单项设置为 <code>var_a + 2</code> 的值。若设置为字符串，则需要加引号"
      },
      {
        "type": "input-text",
        "name": "condition",
        "label": "作用条件",
        "description": "支持如：<code>\\${xxx}</code>或者<code>data.xxx == \"a\"</code> 表达式来配置作用条件，当满足该作用条件时，会将计算结果设置到目标变量上。"
      },
      {
        "type": "switch",
        "mode": "horizontal",
        "horizontal": "[Circular]",
        "inputClassName": "is-inline ",
        "name": "initSet",
        "label": "是否初始应用",
        "description": "是否初始化的时候运行公式结果，并设置到目标变量上。"
      },
      {
        "type": "switch",
        "mode": "horizontal",
        "horizontal": "[Circular]",
        "inputClassName": "is-inline ",
        "name": "autoSet",
        "label": "是否自动应用",
        "description": "是否自动计算公式结果，有变化时自动设置到目标变量上。<br />关闭后，通过按钮也能触发运算。"
      }
    ],
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "group",
    "$schema": "/schemas/GroupControlSchema.json",
    "disabledRendererPlugin": true,
    "name": "表单组",
    "isBaseComponent": true,
    "icon": "fa fa-id-card-o",
    "pluginIcon": "form-group-plugin",
    "description": "水平展示多个表单项",
    "docLink": "/amis/zh-CN/components/form/group",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "group",
      "body": [
        {
          "type": "input-text",
          "label": "文本",
          "name": "var1"
        },
        {
          "type": "input-text",
          "label": "文本",
          "name": "var2"
        }
      ],
      "label": false
    },
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "wrapWithPanel": false,
      "mode": "horizontal",
      "body": [
        {
          "type": "group",
          "body": "[Circular]",
          "label": false,
          "mode": "normal"
        }
      ]
    },
    "regions": [
      {
        "key": "body",
        "label": "子表单",
        "renderMethod": "renderInput",
        "preferTag": "表单项"
      }
    ],
    "panelTitle": "表单组",
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
                  "tooltip": "可设置为左上角、右上角、右下角、左下角，默认为右下角",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "参考位置"
                },
                "name": "originPosition",
                "value": "left-top",
                "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
                "options": [
                  {
                    "label": "左上角",
                    "value": "left-top"
                  },
                  {
                    "label": "右上角",
                    "value": "right-top"
                  },
                  {
                    "label": "右下角(默认)",
                    "value": "right-bottom"
                  },
                  {
                    "label": "左下角",
                    "value": "left-bottom"
                  }
                ]
              },
              {
                "label": "标题",
                "name": "label",
                "type": "input-text"
              },
              {
                "name": "description",
                "type": "textarea",
                "label": {
                  "type": "tooltip-wrapper",
                  "tooltip": "表单项控件下方浅色文字描述",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "描述"
                },
                "maxRows": 2,
                "visible": "this.label"
              },
              {
                "children": {
                  "key": null,
                  "ref": null,
                  "props": {
                    "className": "m-b",
                    "level": "danger",
                    "tooltip": "插入一个新的元素",
                    "size": "sm",
                    "block": true,
                    "children": "新增元素"
                  },
                  "_owner": null,
                  "_store": {
                  }
                }
              },
              {
                "type": "ae-switch-more",
                "formType": "dialog",
                "className": "ae-switch-more-flex",
                "label": {
                  "type": "tooltip-wrapper",
                  "tooltip": "在输入控件旁展示提示，注意控件宽度需设置，否则提示触发图标将自动换行",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "控件提示"
                },
                "bulk": false,
                "name": "remark",
                "form": {
                  "size": "md",
                  "className": "mb-8",
                  "mode": "horizontal",
                  "horizontal": {
                    "left": 4,
                    "right": 8,
                    "justify": true
                  },
                  "body": {
                    "type": "grid",
                    "className": "pt-4 right-panel-pop :AMISCSSWrapper",
                    "gap": "lg",
                    "columns": [
                      {
                        "md": "6",
                        "body": [
                          {
                            "name": "title",
                            "type": "input-text",
                            "label": "提示标题",
                            "placeholder": "请输入提示标题"
                          },
                          {
                            "name": "content",
                            "type": "textarea",
                            "label": "内容"
                          }
                        ]
                      },
                      {
                        "md": "6",
                        "body": [
                          {
                            "name": "placement",
                            "type": "button-group-select",
                            "size": "md",
                            "label": "弹出位置",
                            "options": [
                              {
                                "label": "上",
                                "value": "top"
                              },
                              {
                                "label": "下",
                                "value": "bottom"
                              },
                              {
                                "label": "左",
                                "value": "left"
                              },
                              {
                                "label": "右",
                                "value": "right"
                              }
                            ]
                          },
                          {
                            "label": "图标",
                            "type": "icon-picker",
                            "name": "icon",
                            "placeholder": "点击选择图标",
                            "clearable": true,
                            "description": ""
                          },
                          {
                            "name": "className",
                            "label": {
                              "type": "tooltip-wrapper",
                              "tooltip": "有哪些辅助类 CSS 类名？请前往 <a href=\"https://baidu.gitee.io/amis/zh-CN/style/index\" target=\"_blank\">样式说明</a>，除此之外你可以添加自定义类名，然后在系统配置中添加自定义样式。",
                              "tooltipTheme": "dark",
                              "placement": "top",
                              "tooltipStyle": {
                                "fontSize": "12px"
                              },
                              "className": "ae-formItemControl-label-tip",
                              "body": "CSS 类名"
                            },
                            "type": "input-text"
                          },
                          {
                            "name": "trigger",
                            "type": "select",
                            "label": {
                              "type": "tooltip-wrapper",
                              "tooltip": "浮层触发方式默认值为鼠标悬停",
                              "tooltipTheme": "dark",
                              "placement": "top",
                              "tooltipStyle": {
                                "fontSize": "12px"
                              },
                              "className": "ae-formItemControl-label-tip",
                              "body": "触发方式"
                            },
                            "multiple": true,
                            "options": [
                              {
                                "label": "鼠标悬停",
                                "value": "hover"
                              },
                              {
                                "label": "点击",
                                "value": "click"
                              }
                            ]
                          },
                          {
                            "name": "rootClose",
                            "visibleOn": "~this.trigger.indexOf(\"click\")",
                            "label": "点击空白关闭",
                            "type": "switch",
                            "mode": "row",
                            "inputClassName": "inline-flex justify-between flex-row-reverse"
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              {
                "type": "ae-switch-more",
                "formType": "dialog",
                "className": "ae-switch-more-flex",
                "label": {
                  "type": "tooltip-wrapper",
                  "tooltip": "在标题旁展示提示",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "标题提示"
                },
                "bulk": false,
                "name": "labelRemark",
                "form": {
                  "size": "md",
                  "className": "mb-8",
                  "mode": "horizontal",
                  "horizontal": {
                    "left": 4,
                    "right": 8,
                    "justify": true
                  },
                  "body": {
                    "type": "grid",
                    "className": "pt-4 right-panel-pop :AMISCSSWrapper",
                    "gap": "lg",
                    "columns": [
                      {
                        "md": "6",
                        "body": [
                          {
                            "name": "title",
                            "type": "input-text",
                            "label": "提示标题",
                            "placeholder": "请输入提示标题"
                          },
                          {
                            "name": "content",
                            "type": "textarea",
                            "label": "内容"
                          }
                        ]
                      },
                      {
                        "md": "6",
                        "body": [
                          {
                            "name": "placement",
                            "type": "button-group-select",
                            "size": "md",
                            "label": "弹出位置",
                            "options": [
                              {
                                "label": "上",
                                "value": "top"
                              },
                              {
                                "label": "下",
                                "value": "bottom"
                              },
                              {
                                "label": "左",
                                "value": "left"
                              },
                              {
                                "label": "右",
                                "value": "right"
                              }
                            ]
                          },
                          "[Circular]",
                          {
                            "name": "className",
                            "label": {
                              "type": "tooltip-wrapper",
                              "tooltip": "有哪些辅助类 CSS 类名？请前往 <a href=\"https://baidu.gitee.io/amis/zh-CN/style/index\" target=\"_blank\">样式说明</a>，除此之外你可以添加自定义类名，然后在系统配置中添加自定义样式。",
                              "tooltipTheme": "dark",
                              "placement": "top",
                              "tooltipStyle": {
                                "fontSize": "12px"
                              },
                              "className": "ae-formItemControl-label-tip",
                              "body": "CSS 类名"
                            },
                            "type": "input-text"
                          },
                          {
                            "name": "trigger",
                            "type": "select",
                            "label": {
                              "type": "tooltip-wrapper",
                              "tooltip": "浮层触发方式默认值为鼠标悬停",
                              "tooltipTheme": "dark",
                              "placement": "top",
                              "tooltipStyle": {
                                "fontSize": "12px"
                              },
                              "className": "ae-formItemControl-label-tip",
                              "body": "触发方式"
                            },
                            "multiple": true,
                            "options": [
                              {
                                "label": "鼠标悬停",
                                "value": "hover"
                              },
                              {
                                "label": "点击",
                                "value": "click"
                              }
                            ]
                          },
                          {
                            "name": "rootClose",
                            "visibleOn": "~this.trigger.indexOf(\"click\")",
                            "label": "点击空白关闭",
                            "type": "switch",
                            "mode": "row",
                            "inputClassName": "inline-flex justify-between flex-row-reverse"
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            ]
          },
          {
            "title": "外观",
            "body": [
              {
                "label": "布局",
                "name": "mode",
                "type": "select",
                "options": [
                  {
                    "label": "内联",
                    "value": "inline"
                  },
                  {
                    "label": "水平",
                    "value": "horizontal"
                  },
                  {
                    "label": "垂直",
                    "value": "normal"
                  },
                  {
                    "label": "继承",
                    "value": ""
                  }
                ]
              },
              {
              },
              {
                "type": "select",
                "label": "标签宽度",
                "name": "horizontal",
                "options": [
                  {
                    "label": "继承",
                    "value": "formHorizontal"
                  },
                  {
                    "label": "固宽",
                    "value": "leftFixed"
                  },
                  {
                    "label": "比例",
                    "value": "leftRate"
                  }
                ],
                "visibleOn": "(this.$$formMode == \"horizontal\" || this.mode == \"horizontal\") && this.label !== false && this.horizontal"
              },
              {
                "type": "container",
                "className": "config-wrapper-contanier ",
                "body": [
                  {
                    "name": "horizontal.leftFixed",
                    "type": "button-group-select",
                    "visibleOn": "this.horizontal && this.horizontal.leftFixed",
                    "label": "宽度",
                    "size": "xs",
                    "options": [
                      {
                        "label": "小",
                        "value": "sm"
                      },
                      {
                        "label": "中",
                        "value": "normal"
                      },
                      {
                        "label": "大",
                        "value": "lg"
                      }
                    ]
                  },
                  {
                    "name": "horizontal",
                    "type": "input-range",
                    "visibleOn": "this.horizontal && !this.horizontal.leftFixed",
                    "min": 1,
                    "max": 11,
                    "step": 1,
                    "label": {
                      "type": "tooltip-wrapper",
                      "tooltip": "12 等份，标题宽度占比 n/12",
                      "tooltipTheme": "dark",
                      "placement": "top",
                      "tooltipStyle": {
                        "fontSize": "12px"
                      },
                      "className": "ae-formItemControl-label-tip",
                      "body": "比例"
                    }
                  },
                  {
                    "name": "labelAlign",
                    "type": "button-group-select",
                    "visibleOn": "this.horizontal && this.horizontal.leftFixed",
                    "label": "排列方式",
                    "size": "xs",
                    "options": [
                      {
                        "label": "左对齐",
                        "value": "left"
                      },
                      {
                        "label": "右对齐",
                        "value": "right"
                      }
                    ]
                  }
                ],
                "visibleOn": "this.mode == \"horizontal\" && this.horizontal && this.label !== false"
              },
              {
                "label": "子表单展示模式",
                "name": "subFormMode",
                "type": "button-group-select",
                "size": "sm",
                "option": "继承",
                "options": [
                  {
                    "label": "继承",
                    "value": ""
                  },
                  {
                    "label": "正常",
                    "value": "normal"
                  },
                  {
                    "label": "内联",
                    "value": "inline"
                  },
                  {
                    "label": "水平",
                    "value": "horizontal"
                  }
                ]
              },
              {
                "type": "switch",
                "label": "子表单水平占比设置",
                "name": "subFormHorizontal",
                "onText": "继承",
                "offText": "自定义",
                "inputClassName": "text-sm",
                "visibleOn": "this.subFormMode == \"horizontal\""
              },
              {
                "type": "combo",
                "syncDefaultValue": false,
                "visibleOn": "this.subFormMode == \"horizontal\" && this.subFormHorizontal",
                "name": "subFormHorizontal",
                "multiLine": true,
                "inputClassName": "no-padder",
                "items": [
                  {
                    "name": "leftFixed",
                    "type": "button-group-select",
                    "label": "左侧宽度",
                    "size": "xs",
                    "options": [
                      {
                        "label": "比率",
                        "value": ""
                      },
                      {
                        "label": "小宽度",
                        "value": "sm",
                        "visibleOn": "this.leftFixed"
                      },
                      {
                        "label": "固定宽度",
                        "value": "normal"
                      },
                      {
                        "label": "大宽度",
                        "value": "lg",
                        "visibleOn": "this.leftFixed"
                      }
                    ]
                  },
                  {
                    "name": "leftRate",
                    "type": "input-range",
                    "visibleOn": "!this.leftFixed",
                    "min": 1,
                    "max": 11,
                    "step": 1,
                    "label": "左右分布调整(n/12)",
                    "labelRemark": {
                      "trigger": "click",
                      "className": "m-l-xs",
                      "rootClose": true,
                      "content": "一共 12 等份，这里可以设置左侧宽度占比 n/12。",
                      "placement": "left"
                    }
                  }
                ]
              },
              {
                "name": "body",
                "type": "combo",
                "label": "列宽度配置",
                "multiple": true,
                "removable": false,
                "addable": false,
                "multiLine": true,
                "visibleOn": "this.$$formMode != \"inline\"",
                "items": [
                  {
                    "type": "button-group-select",
                    "name": "columnRatio",
                    "label": "宽度设置",
                    "tiled": true,
                    "options": [
                      {
                        "value": "",
                        "label": "适配宽度"
                      },
                      {
                        "value": "auto",
                        "label": "适配内容"
                      },
                      {
                        "value": "custom",
                        "label": "自定义"
                      }
                    ]
                  },
                  {
                    "label": "宽度占比",
                    "type": "input-range",
                    "name": "columnRatio",
                    "visibleOn": "typeof this.columnRatio === \"number\" || this.columnClassName && /\\bcol\\-(?:xs|sm|md|lg)\\-(\\d+)\\b/.test(this.columnClassName)",
                    "min": 1,
                    "max": 12,
                    "step": 1
                  }
                ]
              },
              {
                "type": "button-group-select",
                "name": "gap",
                "label": "间隔大小",
                "size": "sm",
                "tiled": true,
                "clearable": true,
                "options": [
                  {
                    "value": "xs",
                    "label": "极小"
                  },
                  {
                    "value": "sm",
                    "label": "小"
                  },
                  {
                    "value": "md",
                    "label": "中"
                  },
                  {
                    "value": "lg",
                    "label": "大"
                  }
                ]
              },
              {
                "type": "ae-classname",
                "name": "className",
                "label": {
                  "type": "tooltip-wrapper",
                  "tooltip": "有哪些辅助类 CSS 类名？请前往 <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">样式说明</a>，除此之外你可以添加自定义类名，然后在系统配置中添加自定义样式。",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "CSS 类名"
                }
              },
              {
                "name": "body",
                "type": "combo",
                "label": "列 CSS 类名配置",
                "multiple": true,
                "removable": false,
                "addable": false,
                "items": [
                  {
                    "type": "input-text",
                    "name": "columnClassName"
                  }
                ]
              }
            ]
          },
          {
            "title": "显隐",
            "body": [
              null,
              "[Circular]"
            ]
          }
        ]
      }
    ],
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "input-month",
    "$schema": "/schemas/MonthControlSchema.json",
    "icon": "fa fa-calendar",
    "pluginIcon": "inputMonth-plugin",
    "name": "日期",
    "isBaseComponent": true,
    "searchKeywords": "日期框、input-datetime、日期时间框、input-time、时间框、input-month、月份框、input-quarter、季度框、input-year、年框、年份框、年份选择",
    "description": "月份选择",
    "docLink": "/amis/zh-CN/components/form/input-month",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-month",
      "name": "month"
    },
    "previewSchema": {
      "type": "form",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "input-month",
          "name": "month"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "Month",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "disabledRendererPlugin": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "input-month-range",
    "$schema": "/schemas/MonthRangeControlSchema.json",
    "icon": "fa fa-calendar",
    "pluginIcon": "input-month-range-plugin",
    "name": "月份范围",
    "isBaseComponent": true,
    "searchKeywords": "日期范围框、input-datetime-range、日期时间范围、input-time-range、时间范围、input-month-range、月份范围、input-quarter-range、季度范围、input-year-range、年范围、年份范围",
    "description": "月份范围选择，可通过<code>minDate</code>、<code>maxDate</code>设定最小、最大日期",
    "docLink": "/amis/zh-CN/components/form/input-month-range",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-month-range",
      "label": "日期范围",
      "name": "month-range"
    },
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "input-month-range",
          "label": "日期范围",
          "name": "month-range"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "日期范围",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "disabledRendererPlugin": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "input-quarter",
    "$schema": "/schemas/QuarterControlSchema.json",
    "icon": "fa fa-calendar",
    "pluginIcon": "input-quarter-plugin",
    "name": "季度",
    "isBaseComponent": true,
    "searchKeywords": "日期框、input-datetime、日期时间框、input-time、时间框、input-month、月份框、input-quarter、季度框、input-year、年框、年份框、年份选择",
    "description": "季度选择",
    "docLink": "/amis/zh-CN/components/form/input-quarter",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-quarter",
      "name": "month"
    },
    "previewSchema": {
      "type": "form",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "input-quarter",
          "name": "month"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "Quarter",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "disabledRendererPlugin": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "input-quarter-range",
    "$schema": "/schemas/MonthRangeControlSchema.json",
    "icon": "fa fa-calendar",
    "pluginIcon": "input-quarter-range-plugin",
    "name": "季度范围",
    "isBaseComponent": true,
    "searchKeywords": "日期范围框、input-datetime-range、日期时间范围、input-time-range、时间范围、input-month-range、月份范围、input-quarter-range、季度范围、input-year-range、年范围、年份范围",
    "description": "月份范围选择，可通过<code>minDate</code>、<code>maxDate</code>设定最小、最大日期",
    "docLink": "/amis/zh-CN/components/form/input-quarter-range",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-quarter-range",
      "label": "日期范围",
      "name": "quarter-range"
    },
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "input-quarter-range",
          "label": "日期范围",
          "name": "quarter-range"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "日期范围",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "disabledRendererPlugin": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "input-time",
    "$schema": "/schemas/TimeControlSchema.json",
    "icon": "fa fa-clock-o",
    "pluginIcon": "input-time-plugin",
    "name": "时间框",
    "isBaseComponent": true,
    "searchKeywords": "日期框、input-datetime、日期时间框、input-time、时间框、input-month、月份框、input-quarter、季度框、input-year、年框、年份框、年份选择",
    "description": "时分秒输入",
    "docLink": "/amis/zh-CN/components/form/input-time",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-time",
      "label": "时间",
      "name": "time"
    },
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": {
        "type": "input-time",
        "label": "时间",
        "name": "time"
      }
    },
    "notRenderFormZone": true,
    "panelTitle": "时间框",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "disabledRendererPlugin": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "input-time-range",
    "$schema": "/schemas/DateRangeControlSchema.json",
    "icon": "fa fa-calendar",
    "pluginIcon": "input-time-range-plugin",
    "name": "日期范围",
    "isBaseComponent": true,
    "searchKeywords": "日期范围框、input-datetime-range、日期时间范围、input-time-range、时间范围、input-month-range、月份范围、input-quarter-range、季度范围、input-year-range、年范围、年份范围",
    "description": "时间范围选择，可通过<code>minDate</code>、<code>maxDate</code>设定最小、最大日期",
    "docLink": "/amis/zh-CN/components/form/time-range",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-time-range",
      "label": "日期范围",
      "name": "time-range"
    },
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "input-time-range",
          "label": "日期范围",
          "name": "time-range"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "日期范围",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "disabledRendererPlugin": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "tree-select",
    "$schema": "/schemas/TreeSelectControlSchema.json",
    "name": "树组件",
    "isBaseComponent": true,
    "disabledRendererPlugin": true,
    "icon": "fa fa-list-alt",
    "pluginIcon": "tree-select-plugin",
    "description": "树型结构选择，支持 [内嵌模式] 与 [浮层模式] 的外观切换",
    "searchKeywords": "tree、树下拉、树下拉框、tree-select、树形选择框、树形选择器",
    "docLink": "/amis/zh-CN/components/form/treeselect",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "tree-select",
      "label": "树组件",
      "name": "tree",
      "clearable": false,
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
      ]
    },
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": {
        "type": "tree-select",
        "label": "树组件 - 浮层模式",
        "name": "tree",
        "clearable": false,
        "options": "[Circular]",
        "mode": "normal"
      }
    },
    "notRenderFormZone": true,
    "panelTitle": "树选择",
    "actions": "[Circular]",
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
              "[Circular]",
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
  {
    "manager": "[Circular]",
    "rendererName": "input-year",
    "$schema": "/schemas/YearControlSchema.json",
    "icon": "fa fa-calendar",
    "pluginIcon": "input-year-plugin",
    "name": "Year",
    "isBaseComponent": true,
    "searchKeywords": "日期框、input-datetime、日期时间框、input-time、时间框、input-month、月份框、input-quarter、季度框、input-year、年框、年份框、年份选择",
    "description": "年选择",
    "docLink": "/amis/zh-CN/components/form/input-year",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-year",
      "name": "year"
    },
    "previewSchema": {
      "type": "form",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "input-year",
          "name": "year"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "Year",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "disabledRendererPlugin": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "input-year-range",
    "$schema": "/schemas/DateRangeControlSchema.json",
    "icon": "fa fa-calendar",
    "pluginIcon": "input-month-range-plugin",
    "name": "日期范围",
    "isBaseComponent": true,
    "searchKeywords": "日期范围框、input-datetime-range、日期时间范围、input-time-range、时间范围、input-month-range、月份范围、input-quarter-range、季度范围、input-year-range、年范围、年份范围",
    "description": "年份范围选择，可通过<code>minDate</code>、<code>maxDate</code>设定最小、最大日期",
    "docLink": "/amis/zh-CN/components/form/year-range",
    "tags": [
      "表单项"
    ],
    "scaffold": {
      "type": "input-year-range",
      "label": "日期范围",
      "name": "year-range"
    },
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "input-year-range",
          "label": "日期范围",
          "name": "year-range"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "日期范围",
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelJustify": true,
    "disabledRendererPlugin": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "breadcrumb",
    "$schema": "/schemas/BreadcrumbSchema.json",
    "disabledRendererPlugin": true,
    "name": "面包屑",
    "isBaseComponent": true,
    "icon": "fa fa-list",
    "pluginIcon": "breadcrumb-plugin",
    "description": "面包屑导航",
    "docLink": "/amis/zh-CN/components/breadcrumb",
    "tags": [
      "其他"
    ],
    "scaffold": {
      "type": "breadcrumb",
      "items": [
        {
          "label": "首页",
          "href": "/",
          "icon": "fa fa-home"
        },
        {
          "label": "上级页面"
        },
        {
          "label": "<b>当前页面</b>"
        }
      ]
    },
    "previewSchema": {
      "type": "breadcrumb",
      "items": "[Circular]"
    },
    "panelTitle": "面包屑",
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
                  "tooltip": "可设置为左上角、右上角、右下角、左下角，默认为右下角",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "参考位置"
                },
                "name": "originPosition",
                "value": "left-top",
                "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
                "options": [
                  {
                    "label": "左上角",
                    "value": "left-top"
                  },
                  {
                    "label": "右上角",
                    "value": "right-top"
                  },
                  {
                    "label": "右下角(默认)",
                    "value": "right-bottom"
                  },
                  {
                    "label": "左下角",
                    "value": "left-bottom"
                  }
                ]
              },
              {
                "label": "分隔符",
                "type": "input-text",
                "name": "separator"
              },
              {
                "type": "container",
                "body": [
                  {
                    "type": "checkbox",
                    "label": "动态数据",
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
                    "labelRemark": {
                    }
                  },
                  {
                    "type": "combo",
                    "name": "source",
                    "syncDefaultValue": false,
                    "multiLine": true,
                    "visibleOn": "this.source && typeof this.source !== 'string'",
                    "className": "m-b-none",
                    "messages": {
                      "validateFailed": "接口配置中存在错误，请仔细检查"
                    },
                    "items": [
                      {
                        "label": "发送方式",
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
                        "label": "接口地址",
                        "type": "input-text",
                        "name": "url",
                        "placeholder": "http://",
                        "required": true
                      },
                      {
                        "type": "switch",
                        "label": "数据映射",
                        "name": "data",
                        "className": "w-full m-b-xs"
                      },
                      {
                        "type": "tpl",
                        "visibleOn": "!this.data",
                        "inline": false,
                        "className": "text-sm text-muted m-b",
                        "tpl": "当没开启数据映射时，发送 API 的时候会发送尽可能多的数据，如果你想自己控制发送的数据，或者需要额外的数据处理，请开启此选项"
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
                        "description": "<p>当没开启数据映射时，发送数据自动切成白名单模式，配置啥发送啥，请绑定数据。如：<code>{\"a\": \"\\${a}\", \"b\": 2}</code></p><p>如果希望在默认的基础上定制，请先添加一个 Key 为 `&` Value 为 `\\$$` 作为第一行。</p><div>当值为 <code>__undefined</code>时，表示删除对应的字段，可以结合<code>{\"&\": \"\\$$\"}</code>来达到黑名单效果。</div>"
                      },
                      {
                        "label": "发送条件",
                        "type": "input-text",
                        "name": "sendOn",
                        "placeholder": "如：this.type == \"123\"",
                        "description": "用表达式来设置该请求的发送条件"
                      },
                      {
                        "type": "switch",
                        "label": "静默请求",
                        "name": "silent",
                        "mode": "inline",
                        "description": "是否静默发送请求，屏蔽报错提示"
                      },
                      {
                        "type": "switch",
                        "label": "是否设置缓存",
                        "name": "cache",
                        "className": "w-full m-b-xs",
                        "description": "设置该请求缓存的有效时间"
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
                        "label": "文件下载",
                        "name": "responseType",
                        "description": "当接口为二进制文件下载时请勾选，并设置 Content-Disposition"
                      },
                      {
                        "label": "数据格式",
                        "type": "button-group-select",
                        "name": "dataType",
                        "description": "发送体格式为：<%= data.dataType === \"json\" ? \"application/json\" : (data.dataType === \"form-data\" ? \"multipart/form-data\" : (data.dataType === \"form\" ? \"application/x-www-form-urlencoded\" : \"\")) %>，当发送内容中存在文件时会自动使用 form-data 格式。",
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
                        "label": "数据替换",
                        "name": "replaceData",
                        "description": "默认数据都是追加方式，开启这个后是完全替换"
                      },
                      {
                        "type": "switch",
                        "label": "返回结果映射",
                        "name": "responseData",
                        "className": "w-full m-b-xs"
                      },
                      {
                        "type": "tpl",
                        "visibleOn": "!this.responseData",
                        "inline": false,
                        "className": "text-sm text-muted m-b",
                        "tpl": "如果需要对返回结果做额外的数据处理，请开启此选项"
                      },
                      {
                        "type": "input-kv",
                        "syncDefaultValue": false,
                        "name": "responseData",
                        "visibleOn": "this.responseData",
                        "descriptionClassName": "help-block text-xs m-b-none"
                      },
                      {
                        "title": "自定义适配器",
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
                            "label": "发送适配器",
                            "description": "函数签名：(api) => api， 数据在 api.data 中，修改后返回 api 对象。"
                          },
                          {
                            "name": "adaptor",
                            "type": "js-editor",
                            "allowFullscreen": true,
                            "label": "接收适配器",
                            "description": "函数签名: (payload, response, api) => payload"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "label": "面包屑",
                "name": "items",
                "type": "combo",
                "multiple": true,
                "multiLine": true,
                "draggable": true,
                "addButtonText": "新增",
                "items": [
                  {
                    "type": "input-text",
                    "placeholder": "文本",
                    "name": "label"
                  },
                  {
                    "type": "input-text",
                    "name": "href",
                    "placeholder": "链接"
                  },
                  {
                    "label": "图标",
                    "type": "icon-picker",
                    "name": "icon",
                    "placeholder": "点击选择图标",
                    "clearable": true,
                    "description": ""
                  }
                ]
              }
            ]
          },
          {
            "title": "外观",
            "body": [
              {
                "type": "ae-classname",
                "name": "className",
                "label": {
                  "type": "tooltip-wrapper",
                  "tooltip": "有哪些辅助类 CSS 类名？请前往 <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">样式说明</a>，除此之外你可以添加自定义类名，然后在系统配置中添加自定义样式。",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "CSS 类名"
                }
              },
              {
                "type": "ae-classname",
                "name": "itemClassName",
                "label": {
                  "type": "tooltip-wrapper",
                  "tooltip": "有哪些辅助类 CSS 类名？请前往 <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">样式说明</a>，除此之外你可以添加自定义类名，然后在系统配置中添加自定义样式。",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "面包屑的 CSS 类名"
                }
              },
              null,
              {
                "type": "ae-classname",
                "name": "separatorClassName",
                "label": {
                  "type": "tooltip-wrapper",
                  "tooltip": "有哪些辅助类 CSS 类名？请前往 <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">样式说明</a>，除此之外你可以添加自定义类名，然后在系统配置中添加自定义样式。",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "分隔符的 CSS 类名"
                }
              }
            ]
          },
          {
            "title": "显隐",
            "body": [
              null,
              "[Circular]"
            ]
          }
        ]
      }
    ],
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "custom",
    "$schema": "/schemas/CustomSchema.json",
    "name": "自定义容器",
    "isBaseComponent": true,
    "disabledRendererPlugin": true,
    "description": "通过自定义代码来实现容器组件",
    "docLink": "/amis/zh-CN/components/custom",
    "tags": [
      "功能",
      "容器"
    ],
    "icon": "fa fa-gears",
    "scaffold": {
      "type": "custom",
      "html": "<div>\n<h2>hello, world!</h2>\n<div id=\"customBox\">自定义容器区域</div>\n</div>",
      "onMount": "this.renderChild('body', props.body, document.getElementById('customBox'));",
      "body": [
        {
          "type": "tpl",
          "wrapperComponent": "",
          "tpl": "自定义容器区域"
        }
      ]
    },
    "previewSchema": {
      "type": "custom",
      "html": "<div>\n<h2>hello, world!</h2>\n<div id=\"customBox\">自定义容器区域</div>\n</div>",
      "onMount": "this.renderChild('body', props.body, document.getElementById('customBox'));",
      "body": "[Circular]"
    },
    "regions": [
      {
        "key": "body",
        "label": "内容区"
      }
    ],
    "panelTitle": "自定义代码",
    "panelBody": [
      {
        "type": "select",
        "label": {
          "type": "tooltip-wrapper",
          "tooltip": "可设置为左上角、右上角、右下角、左下角，默认为右下角",
          "tooltipTheme": "dark",
          "placement": "top",
          "tooltipStyle": {
            "fontSize": "12px"
          },
          "className": "ae-formItemControl-label-tip",
          "body": "参考位置"
        },
        "name": "originPosition",
        "value": "left-top",
        "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
        "options": [
          {
            "label": "左上角",
            "value": "left-top"
          },
          {
            "label": "右上角",
            "value": "right-top"
          },
          {
            "label": "右下角(默认)",
            "value": "right-bottom"
          },
          {
            "label": "左下角",
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
  {
    "manager": "[Circular]",
    "rendererName": "dialog",
    "$schema": "/schemas/DialogSchema.json",
    "name": "弹窗",
    "isBaseComponent": true,
    "wrapperProps": {
      "show": true
    },
    "regions": [
      {
        "key": "body",
        "label": "内容区",
        "renderMethod": "renderBody"
      },
      {
        "key": "actions",
        "label": "按钮组",
        "renderMethod": "renderFooter"
      }
    ],
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelTitle": "弹框",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "drawer",
    "$schema": "/schemas/DrawerSchema.json",
    "name": "抽屉式弹框",
    "isBaseComponent": true,
    "wrapperProps": {
      "resizable": false,
      "show": true
    },
    "regions": [
      {
        "key": "body",
        "label": "内容区",
        "renderMethod": "renderBody"
      },
      {
        "key": "actions",
        "label": "按钮组",
        "renderMethod": "renderFooter"
      }
    ],
    "events": "[Circular]",
    "actions": "[Circular]",
    "panelTitle": "弹框",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "hbox",
    "$schema": "/schemas/HBoxSchema.json",
    "disabledRendererPlugin": true,
    "name": "HBox",
    "isBaseComponent": true,
    "icon": "fa fa-columns",
    "description": "用来实现左右排版布局，默认平均分配，可以通过 columnClassName 配置某列的宽度。",
    "docLink": "/amis/zh-CN/components/hbox",
    "tags": [
      "容器"
    ],
    "scaffold": {
      "type": "hbox",
      "gap": "base",
      "columns": [
        {
          "body": [
          ]
        },
        {
          "body": [
          ]
        }
      ]
    },
    "previewSchema": {
      "type": "hbox",
      "columns": [
        {
          "type": "tpl",
          "tpl": "固定宽度<br />w-xs",
          "columnClassName": "bg-primary w-xs"
        },
        {
          "type": "tpl",
          "tpl": "自动填满",
          "columnClassName": "bg-success"
        }
      ]
    },
    "panelTitle": "HBox",
    "vRendererConfig": {
      "regions": {
        "body": {
          "key": "body",
          "label": "内容区",
          "placeholder": "列"
        }
      },
      "panelTitle": "列"
    },
    "overrides": {
    },
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "list-item",
    "isBaseComponent": true,
    "$schema": "/schemas/ListItemSchema.json",
    "regions": [
      {
        "key": "body",
        "label": "内容区",
        "renderMethod": "renderBody",
        "preferTag": "展示"
      },
      {
        "key": "actions",
        "label": "按钮集合",
        "preferTag": "按钮",
        "renderMethod": "renderRight",
        "insertPosition": "inner"
      }
    ],
    "panelTitle": "列表项",
    "overrides": {
    },
    "vRendererConfig": {
      "panelTitle": "字段"
    },
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "operation",
    "$schema": "/schemas/OperationSchema.json",
    "name": "操作栏",
    "isBaseComponent": true,
    "description": "操作栏，用于表格。",
    "tags": [
      "展示"
    ],
    "icon": "",
    "scaffold": {
      "type": "operation",
      "label": "操作",
      "buttons": [
        {
          "label": "按钮",
          "type": "button"
        }
      ]
    },
    "previewSchema": {
      "type": "tpl",
      "tpl": "操作栏"
    },
    "regions": [
      {
        "key": "buttons",
        "label": "按钮集",
        "renderMethod": "render",
        "insertPosition": "inner",
        "preferTag": "按钮"
      }
    ],
    "panelTitle": "操作栏",
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "page",
    "$schema": "/schemas/PageSchema.json",
    "name": "页面",
    "isBaseComponent": true,
    "disabledRendererPlugin": true,
    "description": "页面渲染器，页面的顶级入口。包含多个区域，您可以选择在不同的区域里面放置不同的渲染器。",
    "docLink": "/amis/zh-CN/components/page",
    "tags": "容器",
    "icon": "fa fa-desktop",
    "scaffold": {
      "type": "page",
      "regions": [
        "body"
      ],
      "body": [
        {
          "type": "tpl",
          "tpl": "内容"
        }
      ]
    },
    "previewSchema": {
      "type": "page",
      "className": "text-left b-a",
      "asideClassName": "w-xs",
      "title": "标题",
      "subTitle": "副标题",
      "aside": "边栏",
      "body": "内容"
    },
    "events": "[Circular]",
    "actions": "[Circular]",
    "regions": [
      {
        "key": "toolbar",
        "label": "工具栏",
        "preferTag": "工具栏内容"
      },
      {
        "key": "aside",
        "label": "边栏",
        "placeholder": "边栏内容"
      },
      {
        "key": "body",
        "label": "内容区",
        "placeholder": "页面内容"
      }
    ],
    "panelTitle": "页面",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "pagination",
    "$schema": "/schemas/PaginationSchema.json",
    "name": "分页组件",
    "isBaseComponent": true,
    "description": "分页组件，可以对列表进行分页展示，提高页面性能",
    "docLink": "/amis/zh-CN/components/pagination",
    "tags": [
      "展示"
    ],
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
    "scaffold": {
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
    "previewSchema": {
      "type": "pagination",
      "mode": "normal",
      "layout": "[Circular]",
      "activePage": 1,
      "lastPage": 1,
      "total": 1,
      "hasNext": false,
      "disabled": false,
      "perPageAvailable": "[Circular]",
      "perPage": 10,
      "maxButtons": 7,
      "ellipsisPageGap": 5
    },
    "panelTitle": "分页器",
    "events": "[Circular]",
    "panelJustify": true,
    "regions": [
      {
        "key": "body",
        "label": "内容区"
      }
    ],
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "plain",
    "$schema": "/schemas/PlainSchema.json",
    "disabledRendererPlugin": true,
    "name": "纯文本",
    "isBaseComponent": true,
    "icon": "fa fa-file-text-o",
    "pluginIcon": "plain-plugin",
    "description": "用来展示纯文字，html 标签会被转义。",
    "docLink": "/amis/zh-CN/components/plain",
    "tags": [
      "展示"
    ],
    "previewSchema": {
      "type": "plain",
      "text": "这是纯文本",
      "className": "text-center",
      "inline": false
    },
    "scaffold": {
      "type": "plain",
      "tpl": "内容",
      "inline": false
    },
    "panelTitle": "纯文本",
    "panelJustify": true,
    "events": "[Circular]",
    "actions": "[Circular]",
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "wrapper",
    "$schema": "/schemas/WrapperSchema.json",
    "disabledRendererPlugin": true,
    "name": "包裹",
    "isBaseComponent": true,
    "description": "类似于容器，唯一的区别在于会默认会有一层内边距。",
    "docLink": "/amis/zh-CN/components/wrapper",
    "tags": [
      "容器"
    ],
    "icon": "fa fa-square-o",
    "scaffold": {
      "type": "wrapper",
      "body": "内容"
    },
    "previewSchema": {
      "type": "wrapper",
      "body": "内容"
    },
    "regions": [
      {
        "key": "body",
        "label": "内容区"
      }
    ],
    "panelTitle": "包裹",
    "panelJustify": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "column-toggler",
    "name": "自定义显示列",
    "panelTitle": "自定义显示列",
    "icon": "fa fa-square",
    "tags": [
      "自定义显示列"
    ],
    "$schema": "/schemas/ColumnTogglerSchema.json",
    "description": "用来展示表格的自定义显示列按钮，你可以配置不同的展示样式。",
    "panelJustify": true,
    "isBaseComponent": true,
    "disabledRendererPlugin": true,
    "order": 0
  },
  {
    "manager": "[Circular]",
    "rendererName": "my-renderer",
    "$schema": "/schemas/UnkownSchema.json",
    "name": "自定义渲染器",
    "description": "这只是个示例",
    "tags": [
      "自定义",
      "表单项"
    ],
    "icon": "fa fa-user",
    "previewSchema": {
      "type": "my-renderer",
      "target": "demo"
    },
    "scaffold": {
      "type": "my-renderer",
      "target": "233"
    },
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
            "body": [
            ]
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
  {
    "manager": "[Circular]",
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
    "tags": [
      "常见布局"
    ],
    "scaffold": {
      "type": "flex",
      "className": "p-1",
      "items": [
        {
          "type": "wrapper",
          "size": "xs",
          "body": [
          ],
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
          "body": [
          ],
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
    "panelTitle": "布局容器",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "子节点集合"
      }
    ]
  },
  {
    "manager": "[Circular]",
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
    "tags": [
      "常见布局"
    ],
    "scaffold": {
      "type": "flex",
      "className": "p-1",
      "items": [
        {
          "type": "wrapper",
          "size": "xs",
          "body": [
          ],
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
          "body": [
          ],
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
    "panelTitle": "布局容器",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "子节点集合"
      }
    ]
  },
  {
    "manager": "[Circular]",
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
    "tags": [
      "常见布局"
    ],
    "scaffold": {
      "type": "flex",
      "className": "p-1",
      "items": [
        {
          "type": "wrapper",
          "size": "xs",
          "body": [
          ],
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
          "body": [
          ],
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
    "panelTitle": "布局容器",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "子节点集合"
      }
    ]
  },
  {
    "manager": "[Circular]",
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
    "tags": [
      "常见布局"
    ],
    "scaffold": {
      "type": "flex",
      "className": "p-1",
      "items": [
        {
          "type": "wrapper",
          "size": "xs",
          "body": [
          ],
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
          "body": [
          ],
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
    "panelTitle": "布局容器",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "子节点集合"
      }
    ]
  },
  {
    "manager": "[Circular]",
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
    "tags": [
      "常见布局"
    ],
    "scaffold": {
      "type": "flex",
      "className": "p-1",
      "items": [
        {
          "type": "wrapper",
          "size": "xs",
          "body": [
          ],
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
          "body": [
          ],
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
          "body": [
          ],
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
    "panelTitle": "布局容器",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "子节点集合"
      }
    ]
  },
  {
    "manager": "[Circular]",
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
    "tags": [
      "常见布局"
    ],
    "scaffold": {
      "type": "flex",
      "className": "p-1",
      "items": [
        {
          "type": "wrapper",
          "size": "xs",
          "body": [
          ],
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
          "body": [
          ],
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
          "body": [
          ],
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
    "panelTitle": "布局容器",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "子节点集合"
      }
    ]
  },
  {
    "manager": "[Circular]",
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
    "tags": [
      "常见布局"
    ],
    "scaffold": {
      "type": "flex",
      "className": "p-1",
      "items": [
        {
          "type": "wrapper",
          "size": "xs",
          "body": [
          ],
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
          "body": [
          ],
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
          "body": [
          ],
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
    "panelTitle": "布局容器",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "子节点集合"
      }
    ]
  },
  {
    "manager": "[Circular]",
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
    "tags": [
      "常见布局"
    ],
    "scaffold": {
      "type": "flex",
      "className": "p-1",
      "items": [
        {
          "type": "wrapper",
          "size": "xs",
          "body": [
          ],
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
              "body": [
              ],
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
              "body": [
              ],
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
    "panelTitle": "布局容器",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "子节点集合"
      }
    ]
  },
  {
    "manager": "[Circular]",
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
    "tags": [
      "常见布局"
    ],
    "scaffold": {
      "type": "flex",
      "className": "p-1",
      "items": [
        {
          "type": "wrapper",
          "size": "xs",
          "body": [
          ],
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
              "body": [
              ],
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
              "body": [
              ],
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
    "panelTitle": "布局容器",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "子节点集合"
      }
    ]
  },
  {
    "manager": "[Circular]",
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
    "tags": [
      "常见布局"
    ],
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
              "body": [
              ],
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
              "body": [
              ],
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
          "body": [
          ],
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
    "panelTitle": "布局容器",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "子节点集合"
      }
    ]
  },
  {
    "manager": "[Circular]",
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
    "tags": [
      "常见布局"
    ],
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
              "body": [
              ],
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
              "body": [
              ],
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
          "body": [
          ],
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
    "panelTitle": "布局容器",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "子节点集合"
      }
    ]
  },
  {
    "manager": "[Circular]",
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
    "tags": [
      "常见布局"
    ],
    "scaffold": {
      "type": "flex",
      "className": "p-1",
      "items": [
        {
          "type": "wrapper",
          "size": "xs",
          "body": [
          ],
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
              "body": [
              ],
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
                  "body": [
                  ],
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
                  "body": [
                  ],
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
    "panelTitle": "布局容器",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "子节点集合"
      }
    ]
  },
  {
    "manager": "[Circular]",
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
    "tags": [
      "布局容器"
    ],
    "scaffold": {
      "type": "flex",
      "className": "p-1",
      "items": [
        {
          "type": "container",
          "size": "xs",
          "body": [
          ],
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
          "body": [
          ],
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
          "body": [
          ],
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
          "body": [
          ],
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
          "body": [
          ],
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
          "body": [
          ],
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
    "panelTitle": "布局容器",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "子节点集合"
      }
    ]
  },
  {
    "manager": "[Circular]",
    "rendererName": "flex",
    "$schema": "/schemas/FlexSchema.json",
    "disabledRendererPlugin": false,
    "name": "xAxisScrollingContainer",
    "order": 505,
    "isBaseComponent": false,
    "icon": "fa fa-columns",
    "pluginIcon": "layout-3cols-plugin",
    "description": "x轴滚动容器: 基于 CSS Flex 实现的布局容器。",
    "docLink": "/amis/zh-CN/components/flex",
    "tags": [
      "布局容器"
    ],
    "scaffold": {
      "type": "flex",
      "className": "p-1",
      "items": [
        {
          "type": "container",
          "size": "xs",
          "body": [
          ],
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
          "body": [
          ],
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
          "body": [
          ],
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
          "body": [
          ],
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
          "body": [
          ],
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
          "body": [
          ],
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
          "body": [
          ],
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
    "panelTitle": "布局容器",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "子节点集合"
      }
    ]
  },
  {
    "manager": "[Circular]",
    "order": 9999
  }
]

export function transformPlugins() {
  return plugins
    .filter(plugin => plugin.name) // Ignore items without a name key
    .map(plugin => {
      const { manager, ...rest } = plugin; // Remove the manager key
      return rest;
    });
}
