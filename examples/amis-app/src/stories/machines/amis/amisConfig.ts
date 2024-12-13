

export const initialContext = {
  "preview": false,
  "isMobile": false,
  "i18nEnabled": false,
  "theme": "cxd",
}

export const plugins = [
  {
    "order": -9999,
    "rendererName": "error",
    "name": "Error",
    "isBaseComponent": true
  },
  {
    "rendererName": "flex",
    "$schema": "/schemas/FlexSchema.json",
    "disabledRendererPlugin": false,
    "name": "Flex layout",
    "order": -1200,
    "isBaseComponent": true,
    "icon": "fa fa-columns",
    "pluginIcon": "flex-container-plugin",
    "description": "Layout container is mainly used to design container components for complex layouts. It is based on the layout effect achieved by CSS Flex. It has stronger controllability over the position of child nodes than Grid and HBox, and is simpler and easier to use than using CSS classes",
    "docLink": "/amis/zh-CN/components/flex",
    "tags": [
      "Layout container"
    ],
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
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "First column",
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
          "tpl": "Second column",
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
          "tpl": "Third column",
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
    "panelTitle": "Layout container",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "Subnode collection"
      }
    ]
  },
  {
    "rendererName": "crud2",
    "name": "Table 2.0",
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
    "tags": [
      "Data container"
    ],
    "_dynamicControls": {},
    "dsManager": {
      "builders": {}
    },
    "events": "_Component_",
    "actions": "_Component_",
    "isBaseComponent": true,
    "description": "Used to implement the addition, deletion, modification and query of data, used to display table data, you can configure column information, and then the associated data can be displayed. Supports nesting, super headers, fixed columns, fixed headers, merged cells, etc.",
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
          "title": "Operation",
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
    }
  },
  {
    "name": "Form",
    "panelTitle": "Form",
    "rendererName": "form",
    "isBaseComponent": true,
    "description": "Can be used to create, edit or display data. Configure the initialization interface to load data from the remote end, and configure the submission interface to send data to the remote end. In addition, data can be submitted to other components and communicate with other components. ",
    "docLink": "/amis/zh-CN/components/form/index",
    "$schema": "/schemas/FormSchema.json",
    "tags": [
      "Data container"
    ],
    "order": -900,
    "icon": "fa fa-list-alt",
    "pluginIcon": "form-plugin",
    "panelIcon": "form-plugin",
    "panelJustify": true,
    "scaffold": {
      "type": "form",
      "title": "Form",
      "body": [
        {
          "label": "Text box",
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
          "label": "Text",
          "name": "a",
          "type": "input-text"
        }
      ]
    },
    "regions": [
      {
        "key": "body",
        "label": "Form collection",
        "renderMethod": "renderBody",
        "preferTag": "Form item"
      },
      {
        "label": "Operation area",
        "key": "actions",
        "preferTag": "Button"
      }
    ],
    "events": "_Component_",
    "actions": "_Component_",
    "Features": [
      {
        "label": "Add",
        "value": "Insert"
      },
      {
        "label": "Edit",
        "value": "Edit"
      },
      {
        "label": "View",
        "value": "View"
      },
      {
        "label": "Batch edit",
        "value": "BulkEdit",
        "disabled": true
      }
    ],
    "_dynamicControls": {},
    "dsManager": {
      "builders": {}
    }
  },
  {
    "rendererName": "service",
    "name": "Service",
    "panelTitle": "Service",
    "icon": "fa fa-server",
    "pluginIcon": "service-plugin",
    "panelIcon": "service-plugin",
    "$schema": "/schemas/ServiceSchema.json",
    "isBaseComponent": true,
    "order": -850,
    "description": "Functional container, can be used to load data or load renderer configuration. The loaded data can be used in the container.",
    "searchKeywords": "Functional container",
    "docLink": "/amis/zh-CN/components/service",
    "tags": [
      "Data container"
    ],
    "scaffold": {
      "type": "service",
      "body": []
    },
    "previewSchema": {
      "type": "service",
      "body": [
        {
          "type": "tpl",
          "tpl": "Content area",
          "inline": false,
          "className": "bg-light wrapper"
        }
      ]
    },
    "regions": [
      {
        "key": "body",
        "label": "Content area",
        "placeholder": {
          "key": null,
          "ref": null,
          "props": {
            "schema": {
              "type": "wrapper",
              "size": "lg",
              "body": {
                "type": "tpl",
                "tpl": "Content area"
              }
            },
            "pathPrefix": "",
            "options": {}
          },
          "_owner": null,
          "_store": {}
        }
      }
    ],
    "events": "_Component_",
    "actions": "_Component_",
    "dsManager": {
      "builders": {}
    }
  },
  {
    "rendererName": "crud",
    "$schema": "/schemas/CRUDSchema.json",
    "order": -800,
    "name": "Add, delete, modify and query",
    "isBaseComponent": true,
    "description": "Used to implement the addition, deletion, modification and query of data, supporting three display modes: table, cards and list. Responsible for data pulling, paging, single operation, batch operation, sorting, quick editing and other functions. Integrated query conditions. ",
    "docLink": "/amis/zh-CN/components/crud",
    "tags": [
      "Data container"
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
          "label": "Rendering engine",
          "type": "text"
        }
      ],
      "bulkActions": [],
      "itemActions": []
    },
    "events": "_Component_",
    "actions": "_Component_",
    "btnSchemas": {
      "create": {
        "label": "Add",
        "type": "button",
        "actionType": "dialog",
        "level": "primary",
        "editorSetting": {
          "behavior": "create"
        },
        "dialog": {
          "title": "Add",
          "body": {
            "type": "form",
            "api": "",
            "body": []
          }
        }
      },
      "update": {
        "label": "Edit",
        "type": "button",
        "actionType": "dialog",
        "level": "link",
        "editorSetting": {
          "behavior": "update"
        },
        "dialog": {
          "title": "Edit",
          "body": {
            "type": "form",
            "api": "",
            "initApi": "",
            "body": []
          }
        }
      },
      "view": {
        "label": "View",
        "type": "button",
        "actionType": "dialog",
        "level": "link",
        "editorSetting": {
          "behavior": "view"
        },
        "dialog": {
          "title": "View details",
          "body": {
            "type": "form",
            "initApi": "",
            "body": []
          }
        }
      },
      "delete": {
        "type": "button",
        "label": "Delete",
        "actionType": "ajax",
        "level": "link",
        "className": "text-danger",
        "confirmText": "Are you sure you want to delete? ",
        "api": "",
        "editorSetting": {
          "behavior": "delete"
        }
      },
      "bulkDelete": {
        "type": "button",
        "level": "danger",
        "label": "Batch delete",
        "actionType": "ajax",
        "confirmText": "Are you sure you want to delete? ",
        "api": "",
        "editorSetting": {
          "behavior": "bulkDelete"
        }
      },
      "bulkUpdate": {
        "type": "button",
        "label": "Batch Edit",
        "actionType": "dialog",
        "editorSetting": {
          "behavior": "bulkUpdate"
        },
        "dialog": {
          "title": "Batch Edit",
          "size": "md",
          "body": {
            "type": "form",
            "api": "",
            "body": [
              {
                "label": "Field 1",
                "text": "Field 1",
                "type": "input-text"
              }
            ]
          }
        }
      },
      "filter": {
        "title": "Query Condition",
        "body": [
          {
            "type": "input-text",
            "name": "keywords",
            "label": "Keyword"
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
          "label": "Operation",
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
    "panelTitle": "Add, Delete, Modify and Query",
    "wrapperProps": {
      "affixHeader": false
    }
  },
  {
    "rendererName": "input-text",
    "$schema": "/schemas/TextControlSchema.json",
    "order": -600,
    "searchKeywords": "Text Box, Mailbox Box, Input-email, URL Box, Input-url, Password Box, Input-password, Password Input Box",
    "name": "Text Box",
    "isBaseComponent": true,
    "icon": "fa fa-terminal",
    "pluginIcon": "input-text-plugin",
    "description": "Text input box, supports normal text, password, URL, email and other content input",
    "docLink": "/amis/zh-CN/components/form/input-text",
    "tags": [
      "Form item"
    ],
    "scaffold": {
      "type": "input-text",
      "label": "Text",
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
          "label": "Text",
          "name": "text"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "Text box",
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true
  },
  {
    "rendererName": "input-email",
    "$schema": "/schemas/TextControlSchema.json",
    "order": -600,
    "searchKeywords": "Text box, mailbox box, input-email, URL box, input-url, password box, input-password, password input box",
    "name": "Mailbox box",
    "isBaseComponent": true,
    "icon": "fa fa-envelope-o",
    "pluginIcon": "input-email-plugin",
    "description": "Verify whether the input conforms to the mailbox format",
    "docLink": "/amis/zh-CN/components/form/input-text",
    "tags": [
      "Form item"
    ],
    "scaffold": {
      "type": "input-email",
      "label": "Email",
      "name": "email"
    },
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": {
        "type": "input-email",
        "label": "Email",
        "name": "email"
      }
    },
    "notRenderFormZone": true,
    "panelTitle": "Email box",
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "disabledRendererPlugin": true
  },
  {
    "rendererName": "input-password",
    "$schema": "/schemas/TextControlSchema.json",
    "order": -600,
    "searchKeywords": "text box, mailbox box, input-email, URL box, input-url, password box, input-password, password input box",
    "name": "Password box",
    "isBaseComponent": true,
    "icon": "fa fa-asterisk",
    "pluginIcon": "input-password-plugin",
    "description": "Verify whether the input conforms to the mailbox format",
    "docLink": "/amis/zh-CN/components/form/input-text",
    "tags": [
      "Form item"
    ],
    "scaffold": {
      "type": "input-password",
      "label": "Password",
      "name": "password"
    },
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": {
        "type": "input-password",
        "label": "Password",
        "name": "password"
      }
    },
    "notRenderFormZone": true,
    "panelTitle": "Password box",
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "disabledRendererPlugin": true
  },
  {
    "rendererName": "input-url",
    "$schema": "/schemas/TextControlSchema.json",
    "order": -600,
    "searchKeywords": "text box, mailbox box, input-email, URL box, input-url, password box, input-password, password input box",
    "name": "URL input box",
    "isBaseComponent": true,
    "icon": "fa fa-link",
    "pluginIcon": "input-url-plugin",
    "description": "Verify whether the input is a valid URL",
    "docLink": "/amis/zh-CN/components/form/input-url",
    "tags": [
      "Form item"
    ],
    "scaffold": {
      "type": "input-url",
      "label": "Link",
      "name": "url"
    },
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": {
        "type": "input-url",
        "label": "Link",
        "name": "url"
      }
    },
    "notRenderFormZone": true,
    "panelTitle": "URL",
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "disabledRendererPlugin": true
  },
  {
    "rendererName": "button",
    "$schema": "/schemas/ActionSchema.json",
    "order": -400,
    "name": "Button",
    "isBaseComponent": true,
    "description": "Used to display a button. You can configure different display styles and different click behaviors.",
    "docLink": "/amis/zh-CN/components/button",
    "tags": [
      "Function"
    ],
    "icon": "fa fa-square",
    "pluginIcon": "button-plugin",
    "scaffold": {
      "type": "button",
      "label": "Button",
      "onEvent": {
        "click": {
          "actions": []
        }
      }
    },
    "previewSchema": {
      "type": "button",
      "label": "Button"
    },
    "panelTitle": "Button",
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true
  },
  {
    "rendererName": "reset",
    "$schema": "/schemas/ActionSchema.json",
    "order": -400,
    "name": "Reset",
    "isBaseComponent": true,
    "description": "Generally used to reset form data to the initial value. ",
    "docLink": "/amis/zh-CN/components/button",
    "tags": [
      "Function"
    ],
    "icon": "fa fa-eraser",
    "pluginIcon": "button-plugin",
    "scaffold": {
      "type": "reset",
      "label": "Reset"
    },
    "previewSchema": {
      "type": "reset",
      "label": "Reset"
    },
    "panelTitle": "Button",
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "disabledRendererPlugin": true
  },
  {
    "rendererName": "submit",
    "$schema": "/schemas/ActionSchema.json",
    "order": -400,
    "name": "Submit",
    "isBaseComponent": true,
    "description": "Used to submit the form, requiring form verification. If it is in the pop-up window, it will automatically close the pop-up window. ",
    "docLink": "/amis/zh-CN/components/button",
    "tags": [
      "Function"
    ],
    "icon": "fa fa-square",
    "pluginIcon": "button-plugin",
    "scaffold": {
      "type": "submit",
      "label": "Submit",
      "level": "primary"
    },
    "previewSchema": {
      "type": "submit",
      "label": "Submit",
      "level": "primary"
    },
    "panelTitle": "Button",
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "disabledRendererPlugin": true
  },
  {
    "rendererName": "tpl",
    "$schema": "/schemas/TplSchema.json",
    "order": -200,
    "name": "Text",
    "isBaseComponent": true,
    "icon": "fa fa-file-o",
    "pluginIcon": "plain-plugin",
    "description": "Used to display text or paragraphs, supporting template syntax can be used to associate dynamic data. ",
    "docLink": "/amis/zh-CN/components/tpl",
    "tags": [
      "Show"
    ],
    "previewSchema": {
      "type": "tpl",
      "tpl": "This is the current time of the template content <%- new Date() %>"
    },
    "scaffold": {
      "type": "tpl",
      "tpl": "Please edit the content",
      "inline": true,
      "wrapperComponent": ""
    },
    "panelTitle": "Text",
    "panelJustify": true,
    "events": "_Component_",
    "actions": "_Component_",
    "popOverBody": [
      {
        "type": "ae-textareaFormulaControl",
        "variableMode": "tree",
        "label": "Text content",
        "mode": "normal",
        "visibleOn": "this.wrapperComponent !== undefined",
        "name": "tpl"
      },
      {
        "label": "Content",
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
        "label": "Text format",
        "options": [
          {
            "label": "Normal text",
            "value": ""
          },
          {
            "label": "Paragraph",
            "value": "p"
          },
          {
            "label": "First level title",
            "value": "h1"
          },
          {
            "label": "Second level title",
            "value": "h2"
          },
          {
            "label": "Third level title",
            "value": "h3"
          },
          {
            "label": "Fourth level title",
            "value": "h4"
          },
          {
            "label": "Level 5 title",
            "value": "h5"
          },
          {
            "label": "Level 6 title",
            "value": "h6"
          },
          {
            "label": "Rich text",
            "value": "rich-text"
          }
        ]
      }
    ]
  },
  {
    "rendererName": "grid",
    "$schema": "/schemas/GridSchema.json",
    "name": "Column",
    "isBaseComponent": true,
    "description": "column layout",
    "searchKeywords": "Horizontal columns",
    "docLink": "/amis/zh-CN/components/grid",
    "tags": [
      "Layout container"
    ],
    "order": -2,
    "icon": "fa fa-th",
    "pluginIcon": "grid-plugin",
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
    "previewSchema": {
      "type": "grid",
      "columns": [
        {
          "body": [
            {
              "type": "tpl",
              "tpl": "column",
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
              "tpl": "column",
              "wrapperComponent": "",
              "className": "bg-light wrapper",
              "inline": false
            }
          ]
        }
      ]
    },
    "panelTitle": "Column layout",
    "panelWithOutOthers": false,
    "vRendererConfig": {
      "regions": {
        "body": {
          "key": "body",
          "label": "content area",
          "placeholder": "column"
        }
      },
      "panelTitle": "Column"
    },
    "overrides": {}
  },
  {
    "rendererName": "container",
    "$schema": "/schemas/ContainerSchema.json",
    "name": "Container",
    "isBaseComponent": true,
    "description": "A simple container that can hold multiple renderers.",
    "docLink": "/amis/zh-CN/components/container",
    "tags": [
      "Layout container"
    ],
    "order": -2,
    "icon": "fa fa-square-o",
    "pluginIcon": "container-plugin",
    "scaffold": {
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
    "previewSchema": {
      "type": "container",
      "body": "_Component_",
      "style": "_Component_",
      "size": "none",
      "wrapperBody": false
    },
    "regions": [
      {
        "key": "body",
        "label": "Content area"
      }
    ],
    "panelTitle": "Container",
    "panelJustify": true,
    "events": [
      {
        "eventName": "click",
        "eventLabel": "Click",
        "description": "Triggered on click",
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
                    "title": "Mouse event object"
                  }
                }
              }
            }
          }
        ]
      },
      {
        "eventName": "mouseenter",
        "eventLabel": "Mouse Enter",
        "description": "Triggered on mouse enter",
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
                    "title": "Mouse event object"
                  }
                }
              }
            }
          }
        ]
      },
      {
        "eventName": "mouseleave",
        "eventLabel": "Mouse Leave",
        "description": "Triggered on mouse leave",
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
                    "title": "Mouse event object"
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
    "rendererName": "container",
    "$schema": "/schemas/ContainerSchema.json",
    "name": "Free Container",
    "isBaseComponent": true,
    "description": "Free Container: Its direct child elements support drag-and-drop to adjust positions.",
    "docLink": "/amis/en-US/components/container",
    "tags": [
      "Layout Container"
    ],
    "order": -2,
    "icon": "fa fa-square-o",
    "pluginIcon": "layout-free-container",
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
    "regions": [
      {
        "key": "body",
        "label": "Content Area"
      }
    ],
    "panelTitle": "Free Container",
    "panelJustify": true,
    "events": "_Component_"
  },
  {
    "rendererName": "switch-container",
    "$schema": "/schemas/SwitchContainerSchema.json",
    "name": "State Container",
    "isBaseComponent": true,
    "description": "A container for conditional rendering based on state, convenient for designing multi-state components",
    "tags": [
      "Layout container"
    ],
    "order": -2,
    "icon": "fa fa-square-o",
    "pluginIcon": "switch-container-plugin",
    "scaffold": {
      "type": "switch-container",
      "items": [
        {
          "title": "State One",
          "body": [
            {
              "type": "tpl",
              "tpl": "State One Content",
              "wrapperComponent": ""
            }
          ]
        },
        {
          "title": "State Two",
          "body": [
            {
              "type": "tpl",
              "tpl": "State Two Content",
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
      "items": "_Component_",
      "style": "_Component_"
    },
    "regions": [
      {
        "key": "body",
        "label": "Content area"
      }
    ],
    "panelTitle": "State Container",
    "panelJustify": true,
    "vRendererConfig": {
      "regions": {
        "body": {
          "key": "body",
          "label": "Content area",
          "placeholder": "State"
        }
      },
      "panelTitle": "State",
      "panelJustify": true
    },
    "wrapperProps": {
      "unmountOnExit": true,
      "mountOnEnter": true
    },
    "overrides": {},
    "events": "_Component_"
  },
  {
    "rendererName": "flex",
    "$schema": "/schemas/FlexSchema.json",
    "disabledRendererPlugin": false,
    "name": "Sticky Container",
    "order": -1,
    "isBaseComponent": true,
    "icon": "fa fa-columns",
    "pluginIcon": "layout-fixed-top",
    "description": "Sticky Container: Can be set to stick to the top or bottom.",
    "docLink": "/amis/en-US/components/flex",
    "tags": [
      "Layout Container"
    ],
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
        // ... other container items ...
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
          "tpl": "First Column",
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
        // ... other template items ...
      ],
      "style": {
        "position": "relative",
        "rowGap": "10px",
        "columnGap": "10px"
      }
    },
    "panelTitle": "Sticky Container",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "Child Node Collection"
      }
    ]
  },
  {
    "rendererName": "flex",
    "$schema": "/schemas/FlexSchema.json",
    "disabledRendererPlugin": false,
    "name": "Floating Container",
    "order": 0,
    "isBaseComponent": true,
    "icon": "fa fa-columns",
    "pluginIcon": "layout-fixed-plugin",
    "description": "Floating Container: A special layout container implemented based on CSS Fixed.",
    "docLink": "/amis/en-US/components/flex",
    "tags": [
      "Layout Container"
    ],
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
    "panelTitle": "Floating Container",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "Child Node Collection"
      }
    ]
  },
  {
    "rendererName": "collapse-group",
    "$schema": "/schemas/CollapseGroupSchema.json",
    "name": "Collapsible Panel",
    "isBaseComponent": true,
    "description": "Collapsible panel, useful for categorizing and storing large amounts of information.",
    "docLink": "/amis/zh-CN/components/collapse",
    "tags": [
      "Layout container"
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
          "header": "Title 1",
          "body": [
            {
              "type": "tpl",
              "tpl": "This is content 1",
              "wrapperComponent": "",
              "inline": false
            }
          ]
        },
        {
          "type": "collapse",
          "key": "2",
          "header": "Title 2",
          "body": [
            {
              "type": "tpl",
              "tpl": "This is content 1",
              "wrapperComponent": "",
              "inline": false
            }
          ]
        }
      ]
    },
    "previewSchema": {
      "type": "collapse-group",
      "activeKey": "_Component_",
      "body": "_Component_"
    },
    "events": "_Component_",
    "activeKeyData": [],
    "panelTitle": "Collapsible Panel",
    "panelJustify": true,
    "regions": [
      {
        "key": "body",
        "label": "Content area",
        "renderMethod": "render",
        "insertPosition": "inner"
      }
    ],
    "order": 0
  },
  {
    "rendererName": "panel",
    "$schema": "/schemas/panelSchema.json",
    "name": "Panel",
    "isBaseComponent": true,
    "icon": "fa fa-window-maximize",
    "pluginIcon": "panel-plugin",
    "description": "Displays a panel, can configure title and content area.",
    "docLink": "/amis/zh-CN/components/panel",
    "tags": [
      "Layout container"
    ],
    "scaffold": {
      "type": "panel",
      "title": "Title",
      "body": "Content"
    },
    "previewSchema": {
      "type": "panel",
      "title": "This is a panel",
      "body": "This is the content area",
      "className": "Panel--default text-left m-b-none",
      "actions": [
        {
          "label": "Button 1",
          "type": "button"
        },
        {
          "label": "Button 2",
          "type": "button"
        }
      ]
    },
    "regions": [
      {
        "key": "body",
        "label": "Content area",
        "renderMethod": "renderBody"
      },
      {
        "key": "actions",
        "label": "Button group",
        "renderMethod": "renderActions",
        "preferTag": "Button"
      }
    ],
    "panelTitle": "Panel",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "tabs",
    "$schema": "/schemas/TabsSchema.json",
    "name": "Tabs",
    "isBaseComponent": true,
    "description": "Tabs can group content and display it in a tabbed format, reducing user effort.",
    "docLink": "/amis/zh-CN/components/tabs",
    "tags": [
      "Layout container"
    ],
    "icon": "fa fa-folder-o",
    "pluginIcon": "tabs-plugin",
    "scaffold": {
      "type": "tabs",
      "tabs": [
        {
          "title": "Tab 1",
          "body": []
        },
        {
          "title": "Tab 2",
          "body": []
        }
      ],
      "mountOnEnter": true
    },
    "previewSchema": {
      "type": "tabs",
      "tabs": "_Component_",
      "mountOnEnter": true
    },
    "notRenderFormZone": true,
    "regions": [
      {
        "key": "toolbar",
        "label": "Toolbar",
        "preferTag": "Display"
      }
    ],
    "panelTitle": "Tabs",
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "patchContainers": [
      "tabs.body"
    ],
    "vRendererConfig": {
      "regions": {
        "body": {
          "key": "body",
          "label": "Content area"
        }
      },
      "panelTitle": "Card",
      "panelJustify": true
    },
    "wrapperProps": {
      "unmountOnExit": true,
      "mountOnEnter": true
    },
    "overrides": {},
    "order": 0
  },
  {
    "disabledRendererPlugin": true,
    "name": "Table",
    "panelTitle": "Table",
    "icon": "fa fa-table",
    "panelIcon": "fa fa-table",
    "pluginIcon": "table-plugin",
    "rendererName": "table2",
    "isBaseComponent": true,
    "panelJustify": true,
    "$schema": "/schemas/TableSchema2.json",
    "description": "Used to display table data, can configure column information and associate data for display. Supports nesting, super headers, column fixing, header fixing, cell merging, etc. This component requires a data source configuration and does not fetch data by itself. Please use the 'CRUD' component first.",
    "docLink": "/amis/zh-CN/components/table2",
    "scaffold": {
      "type": "table2",
      "columns": [
        {
          "title": "Column Information",
          "name": "a"
        }
      ],
      "source": "$item"
    },
    "regions": [
      {
        "key": "columns",
        "label": "Column collection",
        "renderMethod": "renderTable",
        "preferTag": "Display",
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
      "title": "Quickly build a table",
      "canRebuild": true,
      "body": [
        {
          "name": "columns",
          "type": "combo",
          "multiple": true,
          "label": false,
          "addButtonText": "Add a column",
          "draggable": true,
          "items": [
            {
              "type": "input-text",
              "name": "title",
              "placeholder": "Title"
            },
            {
              "type": "input-text",
              "name": "name",
              "placeholder": "Bind field name"
            },
            {
              "type": "select",
              "name": "type",
              "placeholder": "Type",
              "value": "text",
              "options": [
                {
                  "value": "text",
                  "label": "Plain text"
                },
                {
                  "value": "tpl",
                  "label": "Template"
                },
                {
                  "value": "image",
                  "label": "Image"
                },
                {
                  "value": "date",
                  "label": "Date"
                },
                {
                  "value": "progress",
                  "label": "Progress"
                },
                {
                  "value": "status",
                  "label": "Status"
                },
                {
                  "value": "mapping",
                  "label": "Mapping"
                },
                {
                  "value": "container",
                  "label": "Container"
                },
                {
                  "value": "operation",
                  "label": "Action bar"
                }
              ]
            }
          ]
        }
      ]
    },
    "events": "_Component_",
    "actions": "_Component_",
    "_dynamicControls": {},
    "dsManager": {
      "builders": {}
    },
    "order": 0
  },
  {
    "rendererName": "textarea",
    "$schema": "/schemas/TextareaControlSchema.json",
    "name": "Multiline Textbox",
    "isBaseComponent": true,
    "icon": "fa fa-paragraph",
    "pluginIcon": "textarea-plugin",
    "description": "Supports multiline input",
    "searchKeywords": "Multiline text input box",
    "docLink": "/amis/zh-CN/components/form/textarea",
    "tags": [
      "Form item"
    ],
    "scaffold": {
      "type": "textarea",
      "label": "Multiline text",
      "name": "textarea"
    },
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "wrapWithPanel": false,
      "mode": "horizontal",
      "body": {
        "type": "textarea",
        "label": "Multiline text",
        "name": "textarea"
      }
    },
    "notRenderFormZone": true,
    "panelTitle": "Multiline Text",
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "input-number",
    "$schema": "/schemas/NumberControlSchema.json",
    "name": "Number Box",
    "isBaseComponent": true,
    "icon": "fa fa-sort-numeric-asc",
    "pluginIcon": "input-number-plugin",
    "description": "Supports setting maximum and minimum values, as well as step and precision",
    "searchKeywords": "Number input box",
    "docLink": "/amis/zh-CN/components/form/input-number",
    "tags": [
      "Form item"
    ],
    "scaffold": {
      "type": "input-number",
      "label": "Number",
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
          "label": "Number",
          "name": "number",
          "keyboard": true,
          "value": 88
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "Number Box",
    "panelJustify": true,
    "events": "_Component_",
    "actions": "_Component_",
    "order": 0
  },
  {
    "name": "Dropdown Box",
    "panelTitle": "Dropdown Box",
    "rendererName": "select",
    "icon": "fa fa-th-list",
    "panelIcon": "fa fa-th-list",
    "pluginIcon": "select-plugin",
    "isBaseComponent": true,
    "panelJustify": true,
    "notRenderFormZone": true,
    "$schema": "/schemas/SelectControlSchema.json",
    "description": "Supports multiple selection, input hints, and can use source to get options",
    "searchKeywords": "Selector",
    "docLink": "/amis/zh-CN/components/form/select",
    "tags": [
      "Form item"
    ],
    "scaffold": {
      "type": "select",
      "label": "Option",
      "name": "select",
      "options": [
        {
          "label": "Option A",
          "value": "A"
        },
        {
          "label": "Option B",
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
          "label": "Option",
          "name": "select",
          "options": "_Component_"
        }
      ]
    },
    "actions": "_Component_",
    "order": 0
  },
  {
    "rendererName": "nested-select",
    "$schema": "/schemas/NestedSelectControlSchema.json",
    "name": "Cascading Selector",
    "isBaseComponent": true,
    "icon": "fa fa-indent",
    "pluginIcon": "nested-select-plugin",
    "description": "Suitable for options with sub-items, can fetch options via source, supports multiple selection",
    "docLink": "/amis/zh-CN/components/form/nestedselect",
    "tags": [
      "Form item"
    ],
    "scaffold": {
      "type": "nested-select",
      "label": "Cascading Selector",
      "name": "nestedSelect",
      "onlyChildren": true,
      "options": [
        {
          "label": "Option A",
          "value": "A"
        },
        {
          "label": "Option B",
          "value": "B",
          "children": [
            {
              "label": "Option b1",
              "value": "b1"
            },
            {
              "label": "Option b2",
              "value": "b2"
            }
          ]
        },
        {
          "label": "Option C",
          "value": "C",
          "children": [
            {
              "label": "Option c1",
              "value": "c1"
            },
            {
              "label": "Option c2",
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
          "label": "Cascading Selector",
          "name": "nestedSelect",
          "onlyChildren": true,
          "options": "_Component_"
        }
      ]
    },
    "panelTitle": "Cascading Selector",
    "notRenderFormZone": true,
    "panelDefinitions": {
      "options": {
        "label": "Options",
        "name": "options",
        "type": "combo",
        "multiple": true,
        "multiLine": true,
        "draggable": true,
        "addButtonText": "Add Option",
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
                "placeholder": "Value",
                "unique": true
              }
            ]
          },
          {
            "$ref": "options",
            "label": "Sub-options",
            "name": "children",
            "addButtonText": "Add Sub-option"
          }
        ]
      }
    },
    "panelJustify": true,
    "events": "_Component_",
    "actions": "_Component_",
    "order": 0
  },
  {
    "rendererName": "chained-select",
    "$schema": "/schemas/ChainedSelectControlSchema.json",
    "name": "Cascading Dropdown",
    "isBaseComponent": true,
    "icon": "fa fa-th-list",
    "pluginIcon": "chained-select-plugin",
    "description": "Fetch options through <code>source</code>. As long as there are results, you can add unlimited levels.",
    "docLink": "/amis/zh-CN/components/form/chain-select",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "chained-select",
      "label": "Cascading Dropdown",
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
        "label": "Cascading Dropdown",
        "name": "chainedSelect",
        "joinValues": true
      }
    },
    "events": "_Component_",
    "actions": "_Component_",
    "panelTitle": "Cascading Dropdown",
    "notRenderFormZone": true,
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "dropdown-button",
    "$schema": "/schemas/DropdownButtonSchema.json",
    "name": "Dropdown Button",
    "isBaseComponent": true,
    "description": "Dropdown button, more buttons are displayed after clicking.",
    "searchKeywords": "Dropdown Menu",
    "tags": [
      "Form Item"
    ],
    "icon": "fa fa-chevron-down",
    "pluginIcon": "dropdown-btn-plugin",
    "docLink": "/amis/zh-CN/components/dropdown-button",
    "scaffold": {
      "type": "dropdown-button",
      "label": "Dropdown Button",
      "buttons": [
        {
          "type": "button",
          "label": "Button 1",
          "onEvent": "_Component_"
        },
        {
          "type": "button",
          "label": "Button 2",
          "onEvent": "_Component_"
        }
      ]
    },
    "previewSchema": {
      "type": "dropdown-button",
      "label": "Dropdown Button",
      "buttons": "_Component_"
    },
    "panelTitle": "Dropdown Button",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "checkboxes",
    "$schema": "/schemas/CheckboxesControlSchema.json",
    "name": "Checkbox",
    "isBaseComponent": true,
    "icon": "fa fa-check-square",
    "pluginIcon": "checkboxes-plugin",
    "description": "Configure multiple checkboxes through <code>options</code>, or fetch options through <code>source</code>.",
    "docLink": "/amis/zh-CN/components/form/checkboxes",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "checkboxes",
      "label": "Checkbox",
      "name": "checkboxes",
      "multiple": true,
      "options": [
        {
          "label": "Option A",
          "value": "A"
        },
        {
          "label": "Option B",
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
          "label": "Checkbox",
          "name": "checkboxes",
          "multiple": true,
          "options": "_Component_"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "Checkbox",
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "radios",
    "$schema": "/schemas/RadiosControlSchema.json",
    "name": "Radio Button",
    "isBaseComponent": true,
    "icon": "fa fa-dot-circle-o",
    "pluginIcon": "radios-plugin",
    "description": "Configure options through options, or fetch options through source.",
    "docLink": "/amis/zh-CN/components/form/radios",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "radios",
      "label": "Radio Button",
      "name": "radios",
      "options": [
        {
          "label": "Option A",
          "value": "A"
        },
        {
          "label": "Option B",
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
          "label": "Radio Button",
          "name": "radios",
          "options": "_Component_",
          "value": "A"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "Radio Button",
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "checkbox",
    "$schema": "/schemas/CheckboxControlSchema.json",
    "name": "Checkbox",
    "isBaseComponent": true,
    "icon": "fa fa-check-square-o",
    "pluginIcon": "checkbox-plugin",
    "description": "Checkbox",
    "docLink": "/amis/zh-CN/components/form/checkbox",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "checkbox",
      "option": "Checkbox",
      "name": "checkbox",
      "label": "Checkbox"
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
          "option": "Checkbox",
          "name": "checkbox",
          "label": "Checkbox Form"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "Checkbox",
    "panelJustify": true,
    "events": "_Component_",
    "actions": "_Component_",
    "order": 0
  },
  {
    "rendererName": "input-date",
    "$schema": "/schemas/DateControlSchema.json",
    "icon": "fa fa-calendar",
    "pluginIcon": "input-date-plugin",
    "name": "Date",
    "isBaseComponent": true,
    "searchKeywords": "Date Box, input-datetime, DateTime Box, input-time, Time Box, input-month, Month Box, input-quarter, Quarter Box, input-year, Year Box, Year Selection",
    "description": "Year, month, and day selection, supports relative value settings, such as <code>+2days</code> for two days later.",
    "docLink": "/amis/zh-CN/components/form/input-date",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "input-date",
      "label": "Date",
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
          "label": "Date",
          "name": "date"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "Date Configuration",
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "input-date-range",
    "$schema": "/schemas/DateRangeControlSchema.json",
    "icon": "fa fa-calendar",
    "pluginIcon": "input-date-range-plugin",
    "name": "Date Range",
    "isBaseComponent": true,
    "searchKeywords": "Date Range Box, input-datetime-range, DateTime Range, input-time-range, Time Range, input-month-range, Month Range, input-quarter-range, Quarter Range, input-year-range, Year Range, Year Range Selection",
    "description": "Date range selection, can set minimum and maximum dates through <code>minDate</code> and <code>maxDate</code>.",
    "docLink": "/amis/zh-CN/components/form/input-date-range",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "input-date-range",
      "label": "Date Range",
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
          "label": "Date Range",
          "name": "date-range"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "Date Range",
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "input-file",
    "$schema": "/schemas/FileControlSchema.json",
    "name": "File Upload",
    "isBaseComponent": true,
    "icon": "fa fa-upload",
    "pluginIcon": "input-file-plugin",
    "description": "Can upload multiple files, configurable for automatic upload and large file chunk upload.",
    "docLink": "/amis/zh-CN/components/form/input-file",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "input-file",
      "label": "File Upload",
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
          "label": "File Upload",
          "autoUpload": true,
          "proxy": true,
          "uploadType": "fileReceptor",
          "name": "file"
        }
      ]
    },
    "notRenderFormZone": true,
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "input-image",
    "$schema": "/schemas/ImageControlSchema.json",
    "name": "Image Upload",
    "isBaseComponent": true,
    "description": "Can crop images, limit image width, height, and size, supports automatic upload and multiple image uploads.",
    "docLink": "/amis/zh-CN/components/form/input-image",
    "tags": [
      "Form Item"
    ],
    "icon": "fa fa-crop",
    "pluginIcon": "input-image-plugin",
    "scaffold": {
      "type": "input-image",
      "label": "Image Upload",
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
          "label": "Image Upload",
          "name": "image",
          "autoUpload": true,
          "proxy": true,
          "uploadType": "fileReceptor",
          "imageClassName": "r w-full"
        }
      ]
    },
    "notRenderFormZone": true,
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "input-excel",
    "$schema": "/schemas/ExcelControlSchema.json",
    "name": "Upload Excel",
    "isBaseComponent": true,
    "icon": "fa fa-eyedropper",
    "pluginIcon": "input-excel-plugin",
    "description": "Automatically parse Excel.",
    "docLink": "/amis/zh-CN/components/form/input-excel",
    "tags": [
      "Form Item"
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
    "panelTitle": "Upload Excel",
    "panelJustify": true,
    "notRenderFormZone": true,
    "events": "_Component_",
    "actions": "_Component_",
    "order": 0
  },
  {
    "rendererName": "input-tree",
    "$schema": "/schemas/TreeControlSchema.json",
    "name": "Tree Component",
    "isBaseComponent": true,
    "icon": "fa fa-list-alt",
    "pluginIcon": "input-tree-plugin",
    "description": "Tree structure selection, supports appearance switching between [Embedded Mode] and [Floating Layer Mode].",
    "searchKeywords": "tree, tree dropdown, tree dropdown box, tree-select, tree selection box, tree selector",
    "docLink": "/amis/zh-CN/components/form/input-tree",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "input-tree",
      "label": "Tree Component",
      "name": "tree",
      "options": [
        {
          "label": "Option A",
          "value": "A",
          "children": [
            {
              "label": "Option C",
              "value": "C"
            },
            {
              "label": "Option D",
              "value": "D"
            }
          ]
        },
        {
          "label": "Option B",
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
          "label": "Tree Component - Embedded Mode",
          "name": "tree",
          "options": "_Component_",
          "mode": "normal"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "Tree Selection",
    "actions": "_Component_",
    "panelDefinitions": {
      "options": {
        "label": "Options",
        "name": "options",
        "type": "combo",
        "multiple": true,
        "multiLine": true,
        "draggable": true,
        "addButtonText": "Add Option",
        "scaffold": {
          "label": "",
          "value": ""
        },
        "items": [
          {
            "type": "group",
            "body": [
              "_Component_",
              {
                "type": "input-text",
                "name": "value",
                "placeholder": "Value",
                "unique": true
              }
            ]
          },
          {
            "$ref": "options",
            "label": "Sub-option",
            "name": "children",
            "addButtonText": "Add Sub-option"
          }
        ]
      }
    },
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "input-tag",
    "$schema": "/schemas/TagControlSchema.json",
    "name": "Tag Selection",
    "isBaseComponent": true,
    "icon": "fa fa-tag",
    "pluginIcon": "input-tag-plugin",
    "description": "Configure options to enable selection.",
    "searchKeywords": "Tag Selector",
    "docLink": "/amis/zh-CN/components/form/input-tag",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "input-tag",
      "label": "Tag",
      "name": "tag",
      "options": [
        {
          "label": "Red",
          "value": "red"
        },
        {
          "label": "Green",
          "value": "green"
        },
        {
          "label": "Blue",
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
        "label": "Tag",
        "name": "tag",
        "options": "_Component_",
        "value": "red"
      }
    },
    "notRenderFormZone": true,
    "panelTitle": "Tag",
    "panelJustify": true,
    "events": "_Component_",
    "actions": "_Component_",
    "order": 0
  },
  {
    "rendererName": "list-select",
    "$schema": "/schemas/ListControlSchema.json",
    "name": "List Selection",
    "isBaseComponent": true,
    "icon": "fa fa-ellipsis-h",
    "pluginIcon": "list-select-plugin",
    "description": "Single or multiple selection, supports fetching options through source, options can be configured with images, or custom HTML configuration.",
    "docLink": "/amis/zh-CN/components/form/list-select",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "list-select",
      "label": "List",
      "name": "list",
      "options": [
        {
          "label": "Option A",
          "value": "A"
        },
        {
          "label": "Option B",
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
          "label": "List",
          "name": "list",
          "options": "_Component_",
          "value": "A"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "List Selection",
    "panelJustify": true,
    "events": "_Component_",
    "actions": "_Component_",
    "order": 0
  },
  {
    "rendererName": "button-group-select",
    "$schema": "/schemas/ButtonGroupControlSchema.json",
    "name": "Button Selection",
    "isBaseComponent": true,
    "icon": "fa fa-object-group",
    "pluginIcon": "btn-select-plugin",
    "description": "Used to display multiple buttons, visually presented as a whole, can also be used as a form item option selector.",
    "docLink": "/amis/zh-CN/components/button-group",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "button-group-select",
      "name": "buttonGroupSelect",
      "label": "Button Selection",
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
      ]
    },
    "previewSchema": {
      "type": "form",
      "wrapWithPanel": false,
      "mode": "horizontal",
      "body": {
        "type": "button-group-select",
        "name": "buttonGroupSelect",
        "label": "Button Selection",
        "inline": false,
        "options": "_Component_",
        "value": "a",
        "description": "Button selection can be used as options."
      }
    },
    "notRenderFormZone": true,
    "panelTitle": "Button Selection",
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "button-toolbar",
    "$schema": "/schemas/ButtonToolbarControlSchema.json",
    "name": "Button Toolbar",
    "isBaseComponent": true,
    "icon": "fa fa-ellipsis-h",
    "pluginIcon": "btn-toolbar-plugin",
    "description": "Can be used to place multiple buttons or button groups, with a certain gap between buttons.",
    "docLink": "/amis/zh-CN/components/form/button-toolbar",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "button-toolbar",
      "label": "Button Toolbar",
      "buttons": [
        {
          "type": "button",
          "label": "Button 1",
          "onEvent": "_Component_"
        },
        {
          "type": "button",
          "label": "Button 2",
          "onEvent": "_Component_"
        }
      ]
    },
    "previewSchema": {
      "type": "form",
      "wrapWithPanel": false,
      "mode": "horizontal",
      "body": {
        "type": "button-toolbar",
        "label": "Button Toolbar",
        "buttons": "_Component_"
      }
    },
    "regions": [
      {
        "key": "buttons",
        "label": "Button Collection",
        "preferTag": "Button",
        "renderMethod": "renderButtons"
      }
    ],
    "notRenderFormZone": true,
    "panelTitle": "Toolbar",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "picker",
    "$schema": "/schemas/PickerControlSchema.json",
    "name": "List Picker",
    "isBaseComponent": true,
    "icon": "fa fa-window-restore",
    "pluginIcon": "picker-plugin",
    "description": "Select the required data from the data source configured by pickerSchema, supports multiple selections.",
    "searchKeywords": "List Selector",
    "docLink": "/amis/zh-CN/components/form/picker",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "picker",
      "label": "List Picker",
      "name": "picker",
      "options": [
        {
          "label": "Option A",
          "value": "A"
        },
        {
          "label": "Option B",
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
          "label": "List Picker",
          "name": "picker",
          "options": "_Component_",
          "overflowConfig": "_Component_",
          "modalClassName": "app-popover :AMISCSSWrapper"
        }
      ]
    },
    "notRenderFormZone": true,
    "events": "_Component_",
    "panelJustify": true,
    "panelTitle": "List Picker",
    "order": 0
  },
  {
    "rendererName": "switch",
    "$schema": "/schemas/SwitchControlSchema.json",
    "name": "Switch",
    "isBaseComponent": true,
    "icon": "fa fa-toggle-on",
    "pluginIcon": "switch-plugin",
    "description": "Switch control",
    "docLink": "/amis/zh-CN/components/form/switch",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "switch",
      "label": "Switch",
      "option": "Description",
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
          "label": "Switch Form",
          "option": "Description",
          "name": "switch",
          "falseValue": false,
          "trueValue": true
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "Switch",
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "input-range",
    "$schema": "/schemas/RangeControlSchema.json",
    "name": "Slider",
    "isBaseComponent": true,
    "icon": "fa fa-sliders",
    "pluginIcon": "input-range-plugin",
    "description": "Select a value or a range.",
    "docLink": "/amis/zh-CN/components/form/input-range",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "input-range",
      "label": "Slider",
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
          "label": "Slider",
          "name": "range"
        }
      ]
    },
    "notRenderFormZone": true,
    "events": "_Component_",
    "actions": "_Component_",
    "panelTitle": "Slider",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "input-rating",
    "$schema": "/schemas/RatingControlSchema.json",
    "name": "Rating",
    "isBaseComponent": true,
    "icon": "fa fa-star-o",
    "pluginIcon": "input-rating-plugin",
    "description": "Supports read-only and half-star selection.",
    "docLink": "/amis/zh-CN/components/form/input-rating",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "input-rating",
      "label": "Rating",
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
          "label": "Rating",
          "name": "rating",
          "value": 3
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "Rating",
    "count": 5,
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "input-city",
    "$schema": "/schemas/CityControlSchema.json",
    "name": "City Selection",
    "isBaseComponent": true,
    "icon": "fa fa-building-o",
    "pluginIcon": "input-city-plugin",
    "description": "Configurable to select region or city.",
    "searchKeywords": "City Selector",
    "docLink": "/amis/zh-CN/components/form/input-city",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "input-city",
      "label": "City Selection",
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
          "label": "City Selection",
          "name": "city",
          "allowCity": true,
          "allowDistrict": true,
          "extractValue": true
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "City Selection",
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "transfer",
    "$schema": "/schemas/TransferControlSchema.json",
    "name": "Shuttle",
    "isBaseComponent": true,
    "icon": "fa fa-th-list",
    "pluginIcon": "transfer-plugin",
    "description": "Shuttle component",
    "docLink": "/amis/zh-CN/components/form/transfer",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "label": "Group",
      "type": "transfer",
      "name": "transfer",
      "options": [
        {
          "label": "Zhuge Liang",
          "value": "zhugeliang"
        },
        {
          "label": "Cao Cao",
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
          "label": "Group",
          "type": "transfer",
          "name": "transfer",
          "options": "_Component_",
          "selectMode": "list",
          "resultListModeFollowSelect": false
        }
      ]
    },
    "panelTitle": "Shuttle",
    "events": "_Component_",
    "actions": "_Component_",
    "panelDefinitions": {
      "options": {
        "label": "Options",
        "name": "options",
        "type": "combo",
        "multiple": true,
        "multiLine": true,
        "draggable": true,
        "addButtonText": "Add Option",
        "scaffold": {
          "label": "",
          "value": ""
        },
        "items": [
          {
            "type": "group",
            "body": [
              "_Component_",
              {
                "type": "input-text",
                "name": "value",
                "placeholder": "Value",
                "unique": true
              }
            ]
          },
          {
            "$ref": "options",
            "label": "Sub Option",
            "name": "children",
            "addButtonText": "Add Sub Option"
          }
        ]
      }
    },
    "notRenderFormZone": true,
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "transfer-picker",
    "$schema": "/schemas/TransferPickerControlSchema.json",
    "name": "Shuttle Selector",
    "isBaseComponent": true,
    "icon": "fa fa-th-list",
    "pluginIcon": "transfer-plugin",
    "description": "Shuttle Selector component",
    "docLink": "/amis/zh-CN/components/form/transfer-picker",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "label": "Group",
      "type": "transfer-picker",
      "name": "transfer-picker",
      "options": [
        {
          "label": "Zhuge Liang",
          "value": "zhugeliang"
        },
        {
          "label": "Cao Cao",
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
          "label": "Group",
          "type": "transfer-picker",
          "name": "transfer-picker",
          "options": "_Component_",
          "selectMode": "list",
          "resultListModeFollowSelect": false
        }
      ]
    },
    "panelTitle": "Shuttle",
    "events": "_Component_",
    "actions": "_Component_",
    "panelDefinitions": {
      "options": {
        "label": "Options",
        "name": "options",
        "type": "combo",
        "multiple": true,
        "multiLine": true,
        "draggable": true,
        "addButtonText": "Add Option",
        "scaffold": {
          "label": "",
          "value": ""
        },
        "items": [
          {
            "type": "group",
            "body": [
              "_Component_",
              {
                "type": "input-text",
                "name": "value",
                "placeholder": "Value",
                "unique": true
              }
            ]
          },
          {
            "$ref": "options",
            "label": "Sub Option",
            "name": "children",
            "addButtonText": "Add Sub Option"
          }
        ]
      }
    },
    "notRenderFormZone": true,
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "tabs-transfer",
    "$schema": "/schemas/TransferControlSchema.json",
    "name": "Combined Shuttle",
    "isBaseComponent": true,
    "icon": "fa fa-th-list",
    "pluginIcon": "tabs-transfer-plugin",
    "description": "Combined Shuttle component",
    "docLink": "/amis/zh-CN/components/form/transfer",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "label": "Combined Shuttle",
      "type": "tabs-transfer",
      "name": "tabsTransfer",
      "selectMode": "tree",
      "options": [
        {
          "label": "Members",
          "children": [
            {
              "label": "Mage",
              "value": "fashi",
              "children": [
                {
                  "label": "Zhuge Liang",
                  "value": "zhugeliang"
                }
              ]
            },
            {
              "label": "Warrior",
              "value": "zhanshi",
              "children": [
                {
                  "label": "Cao Cao",
                  "value": "caocao"
                },
                {
                  "label": "Zhong Wuyan",
                  "value": "zhongwuyan"
                }
              ]
            },
            {
              "label": "Jungle",
              "value": "daye",
              "children": [
                {
                  "label": "Li Bai",
                  "value": "libai"
                },
                {
                  "label": "Han Xin",
                  "value": "hanxin"
                },
                {
                  "label": "Yun Zhongjun",
                  "value": "yunzhongjun"
                }
              ]
            }
          ]
        },
        {
          "label": "Users",
          "children": [
            {
              "label": "Mage",
              "value": "fashi2",
              "children": [
                {
                  "label": "Zhuge Liang",
                  "value": "zhugeliang2"
                }
              ]
            },
            {
              "label": "Warrior",
              "value": "zhanshi2",
              "children": [
                {
                  "label": "Cao Cao",
                  "value": "caocao2"
                },
                {
                  "label": "Zhong Wuyan",
                  "value": "zhongwuyan2"
                }
              ]
            },
            {
              "label": "Jungle",
              "value": "daye2",
              "children": [
                {
                  "label": "Li Bai",
                  "value": "libai2"
                },
                {
                  "label": "Han Xin",
                  "value": "hanxin2"
                },
                {
                  "label": "Yun Zhongjun",
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
          "label": "Combined Shuttle",
          "type": "tabs-transfer",
          "name": "tabsTransfer",
          "selectMode": "tree",
          "options": "_Component_"
        }
      ]
    },
    "panelTitle": "Combined Shuttle",
    "events": "_Component_",
    "actions": "_Component_",
    "notRenderFormZone": true,
    "panelJustify": true,
    "panelDefinitions": {
      "options": {
        "label": "Options",
        "name": "options",
        "type": "combo",
        "multiple": true,
        "multiLine": true,
        "draggable": true,
        "mode": "normal",
        "addButtonText": "Add Option",
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
                "placeholder": "Name",
                "required": true
              },
              {
                "type": "input-text",
                "name": "value",
                "placeholder": "Value",
                "unique": true
              }
            ]
          },
          {
            "$ref": "options",
            "label": "Sub Option",
            "name": "children",
            "addButtonText": "Add Sub Option"
          }
        ]
      }
    },
    "order": 0
  },
  {
    "rendererName": "input-color",
    "$schema": "/schemas/ColorControlSchema.json",
    "name": "Color Box",
    "isBaseComponent": true,
    "icon": "fa fa-eyedropper",
    "pluginIcon": "input-color-plugin",
    "description": "Supports <code>hex, hexa, hls, rgb, rgba</code> formats, default is <code>hex</code> format",
    "searchKeywords": "Color Picker",
    "docLink": "/amis/zh-CN/components/form/input-color",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "input-color",
      "label": "Color",
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
          "label": "Color",
          "name": "color"
        }
      ]
    },
    "panelTitle": "Color Box",
    "notRenderFormZone": true,
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "condition-builder",
    "$schema": "/schemas/ConditionBuilderControlSchema.json",
    "name": "Condition Component",
    "isBaseComponent": true,
    "icon": "fa fa-group",
    "pluginIcon": "condition-builder-plugin",
    "description": "Used to set complex combination conditions, supports adding conditions, adding groups, setting combination methods, drag sorting, etc.",
    "docLink": "/amis/zh-CN/components/form/condition-builder",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "condition-builder",
      "label": "Condition Component",
      "name": "conditions",
      "description": "Suitable for users to build query conditions themselves, and then the backend generates query where based on the data",
      "fields": [
        {
          "label": "Text",
          "type": "text",
          "name": "text"
        },
        {
          "label": "Number",
          "type": "number",
          "name": "number"
        },
        {
          "label": "Boolean",
          "type": "boolean",
          "name": "boolean"
        },
        {
          "label": "Option",
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
          "label": "Date",
          "type": "date",
          "name": "date"
        },
        {
          "label": "Time",
          "type": "time",
          "name": "time"
        },
        {
          "label": "DateTime",
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
        "_Component_"
      ]
    },
    "panelTitle": "Condition Component",
    "order": 0
  },
  {
    "rendererName": "fieldset",
    "$schema": "/schemas/FieldSetControlSchema.json",
    "name": "Field Set",
    "isBaseComponent": true,
    "icon": "fa fa-toggle-down",
    "description": "Combination of multiple form items, can be configured to collapse",
    "searchKeywords": "Form Item Collection",
    "docLink": "/amis/zh-CN/components/form/fieldset",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "fieldset",
      "title": "Title",
      "collapsable": true,
      "body": [
        {
          "type": "input-text",
          "label": "Text1",
          "name": "text"
        },
        {
          "type": "input-text",
          "label": "Text2",
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
          "title": "Title",
          "collapsable": true,
          "body": "_Component_"
        }
      ]
    },
    "regions": [
      {
        "key": "body",
        "label": "Sub Form Item",
        "renderMethod": "renderBody",
        "insertPosition": "inner",
        "preferTag": "Form Item"
      }
    ],
    "panelTitle": "Field Set",
    "order": 0
  },
  {
    "rendererName": "combo",
    "$schema": "/schemas/ComboControlSchema.json",
    "name": "Combined Input",
    "isBaseComponent": true,
    "icon": "fa fa-group",
    "pluginIcon": "combo-plugin",
    "description": "Combination of multiple form items, can be configured to add and delete initial set templates",
    "docLink": "/amis/zh-CN/components/form/combo",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "combo",
      "label": "Combined Input",
      "name": "combo",
      "multiple": true,
      "addable": true,
      "removable": true,
      "removableMode": "icon",
      "addBtn": {
        "label": "Add",
        "icon": "fa fa-plus",
        "level": "primary",
        "size": "sm"
      },
      "items": [
        {
          "type": "input-text",
          "name": "text",
          "placeholder": "Text"
        },
        {
          "type": "select",
          "name": "select",
          "placeholder": "Option",
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
          "label": "Combined Input",
          "name": "combo",
          "multiple": true,
          "addable": true,
          "removable": true,
          "removableMode": "icon",
          "addBtn": "_Component_",
          "items": "_Component_",
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
    "regions": [
      {
        "key": "items",
        "label": "Content Area",
        "preferTag": "Content Area",
        "renderMethod": "renderItems"
      }
    ],
    "events": "_Component_",
    "actions": "_Component_",
    "panelTitle": "Combined Input",
    "notRenderFormZone": true,
    "panelJustify": true,
    "dsManager": {
      "builders": {}
    },
    "order": 0
  },
  {
    "rendererName": "input-group",
    "$schema": "/schemas/InputGroupControlSchema.json",
    "name": "Input Combination",
    "isBaseComponent": true,
    "icon": "fa fa-object-group",
    "pluginIcon": "input-group-plugin",
    "description": "Input combination, supports combination of multiple types of controls",
    "searchKeywords": "Input Box Combination",
    "docLink": "/amis/zh-CN/components/form/input-group",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "input-group",
      "name": "input-group",
      "label": "Input Combination",
      "body": [
        {
          "type": "input-text",
          "inputClassName": "b-r-none p-r-none",
          "name": "input-group"
        },
        {
          "type": "submit",
          "label": "Submit",
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
          "label": "Input Combination",
          "body": "_Component_"
        }
      ]
    },
    "panelTitle": "Input Combination",
    "regions": [
      {
        "key": "body",
        "label": "Content Area",
        "preferTag": "Content Area",
        "renderMethod": "render"
      }
    ],
    "notRenderFormZone": true,
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "input-table",
    "$schema": "/schemas/TableControlSchema.json",
    "name": "Table Editor",
    "isBaseComponent": true,
    "icon": "fa fa-table",
    "pluginIcon": "table-plugin",
    "description": "Can be used to display data, can be used to display array type data, such as multiple sub forms",
    "docLink": "/amis/zh-CN/components/form/input-table",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "input-table",
      "name": "table",
      "label": "Table Form",
      "columns": [
        {
          "label": "Name",
          "name": "name",
          "quickEdit": {
            "type": "input-text",
            "name": "name1"
          }
        },
        {
          "label": "Score",
          "name": "score",
          "quickEdit": {
            "type": "input-number",
            "mode": "inline",
            "name": "score"
          }
        },
        {
          "label": "Level",
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
        "label": "Add",
        "icon": "fa fa-plus"
      },
      "strictMode": true
    },
    "regions": [
      {
        "key": "columns",
        "label": "Column Collection",
        "renderMethod": "renderTableContent",
        "preferTag": "Display",
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
        "label": "Table Form",
        "columns": "_Component_",
        "addable": false,
        "footerAddBtn": "_Component_",
        "strictMode": true,
        "value": [
          {
            "color": "green",
            "name": "Green"
          }
        ]
      }
    },
    "notRenderFormZone": true,
    "panelJustify": true,
    "panelTitle": "Table Editor",
    "events": "_Component_",
    "actions": "_Component_",
    "dsManager": {
      "builders": {}
    },
    "order": 0
  },
  {
    "rendererName": "matrix-checkboxes",
    "$schema": "/schemas/MatrixControlSchema.json",
    "name": "Matrix Switch",
    "isBaseComponent": true,
    "icon": "fa fa-th-large",
    "pluginIcon": "matrix-checkboxes-plugin",
    "description": "Configurable row single selection, column single selection, and all options can be single or multiple selection",
    "docLink": "/amis/zh-CN/components/form/matrix-checkboxes",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "matrix-checkboxes",
      "name": "matrix",
      "label": "Matrix Switch",
      "rowLabel": "Row Title Description",
      "columns": [
        {
          "label": "Column1"
        },
        {
          "label": "Column2"
        }
      ],
      "rows": [
        {
          "label": "Row1"
        },
        {
          "label": "Row2"
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
          "label": "Matrix Switch",
          "rowLabel": "Row Title Description",
          "columns": "_Component_",
          "rows": "_Component_"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "Matrix Switch",
    "panelJustify": true,
    "events": "_Component_",
    "actions": "_Component_",
    "order": 0
  },
  {
    "rendererName": "input-rich-text",
    "$schema": "/schemas/RichTextControlSchema.json",
    "name": "Rich Text Editor",
    "isBaseComponent": true,
    "icon": "fa fa-newspaper-o",
    "pluginIcon": "input-rich-text-plugin",
    "description": "Customizable rich text configuration bar",
    "docLink": "/amis/zh-CN/components/form/input-rich-text",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "input-rich-text",
      "label": "Rich Text",
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
          "label": "Rich Text",
          "name": "rich-text",
          "vendor": "tinymce"
        }
      ]
    },
    "panelTitle": "Rich Text",
    "events": "_Component_",
    "notRenderFormZone": true,
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "diff-editor",
    "$schema": "/schemas/DiffEditorControlSchema.json",
    "name": "Diff Editor",
    "isBaseComponent": true,
    "icon": "fa fa-columns",
    "pluginIcon": "diff-editor-plugin",
    "description": "Compare code on both sides, supported languages include: bat, c, coffeescript, cpp, csharp, css, dockerfile, fsharp, go, handlebars, etc.",
    "searchKeywords": "Comparison Editor",
    "docLink": "/amis/zh-CN/components/form/diff-editor",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "diff-editor",
      "label": "Diff Editor",
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
          "label": "Diff Editor",
          "name": "diff",
          "value": "Hello World\nLine 1\nNew line\nBla Bla",
          "diffValue": "Hello World\nLine 2"
        }
      ]
    },
    "events": "_Component_",
    "actions": "_Component_",
    "notRenderFormZone": true,
    "panelTitle": "Diff Editor",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "editor",
    "$schema": "/schemas/EditorControlSchema.json",
    "name": "Code Editor",
    "isBaseComponent": true,
    "icon": "fa fa-code",
    "pluginIcon": "editor-plugin",
    "description": "Code editor, using monaco-editor supports: bat, c, coffeescript, cpp, csharp, css, dockerfile, fsharp, go, handlebars, etc.",
    "docLink": "/amis/zh-CN/components/form/editor",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "editor",
      "label": "Code Editor",
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
          "label": "Code Editor",
          "name": "editor",
          "value": "console.log(\"Hello world.\");"
        }
      ]
    },
    "events": "_Component_",
    "actions": "_Component_",
    "notRenderFormZone": true,
    "panelTitle": "Editor",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "search-box",
    "$schema": "/schemas/SearchBoxSchema.json",
    "name": "Search Box",
    "searchKeywords": "Search Box, searchbox",
    "isBaseComponent": true,
    "description": "Used to display a simple search box, usually needs to be used with other components. For example, after configuring initApi for a page, it can be used to implement simple data filtering and searching, name keywords will be passed as parameters to the page's initApi.",
    "docLink": "/amis/zh-CN/components/search-box",
    "icon": "fa fa-search",
    "pluginIcon": "search-box-plugin",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "search-box",
      "name": "keyword",
      "body": {
        "type": "tpl",
        "tpl": "Search Box",
        "wrapperComponent": "",
        "inline": false
      },
      "level": "info"
    },
    "previewSchema": {
      "type": "search-box",
      "name": "keyword",
      "body": "_Component_",
      "level": "info",
      "className": "text-left",
      "showCloseButton": true
    },
    "regions": [
      {
        "key": "body",
        "label": "Content Area",
        "placeholder": "Search Box Content"
      }
    ],
    "events": "_Component_",
    "actions": "_Component_",
    "notRenderFormZone": true,
    "panelTitle": "Search Box",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "input-kv",
    "$schema": "/schemas/KVControlSchema.json",
    "name": "KV Key-Value Pair",
    "isBaseComponent": true,
    "icon": "fa fa-eyedropper",
    "pluginIcon": "input-kv-plugin",
    "description": "Used to edit key-value pair type data",
    "docLink": "/amis/zh-CN/components/form/input-kv",
    "tags": [
      "Form Item"
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
    "events": "_Component_",
    "actions": "_Component_",
    "panelTitle": "KV Key-Value Pair",
    "panelBody": [
      {
        "type": "select",
        "label": {
          "type": "tooltip-wrapper",
          "tooltip": "Can be set to top left, top right, bottom right, bottom left, default is bottom right",
          "tooltipTheme": "dark",
          "placement": "top",
          "tooltipStyle": {
            "fontSize": "12px"
          },
          "className": "ae-formItemControl-label-tip",
          "body": "Reference Position"
        },
        "name": "originPosition",
        "value": "left-top",
        "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
        "options": [
          {
            "label": "Top Left",
            "value": "left-top"
          },
          {
            "label": "Top Right",
            "value": "right-top"
          },
          {
            "label": "Bottom Right (Default)",
            "value": "right-bottom"
          },
          {
            "label": "Bottom Left",
            "value": "left-bottom"
          }
        ]
      },
      {
        "type": "input-text",
        "name": "valueType",
        "label": "Value Type"
      },
      {
        "type": "input-text",
        "name": "keyPlaceholder",
        "label": "Key Hint"
      },
      {
        "type": "input-text",
        "name": "valuePlaceholder",
        "label": "Value Hint"
      },
      {
        "type": "switch",
        "name": "draggable",
        "label": "Sortable"
      }
    ],
    "order": 0
  },
  {
    "rendererName": "input-repeat",
    "$schema": "/schemas/RepeatControlSchema.json",
    "name": "Repeat Cycle Selector",
    "isBaseComponent": true,
    "icon": "fa fa-repeat",
    "pluginIcon": "input-repeat-plugin",
    "description": "Select the frequency of repetition, such as hourly, daily, weekly, etc.",
    "searchKeywords": "Repeat Frequency Selector",
    "docLink": "/amis/zh-CN/components/form/input-repeat",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "input-repeat",
      "label": "Cycle",
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
          "label": "Cycle",
          "name": "repeat"
        }
      ]
    },
    "panelTitle": "Cycle",
    "panelBody": [
      {
        "type": "select",
        "label": {
          "type": "tooltip-wrapper",
          "tooltip": "Can be set to top left, top right, bottom right, bottom left, default is bottom right",
          "tooltipTheme": "dark",
          "placement": "top",
          "tooltipStyle": {
            "fontSize": "12px"
          },
          "className": "ae-formItemControl-label-tip",
          "body": "Reference Position"
        },
        "name": "originPosition",
        "value": "left-top",
        "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
        "options": [
          {
            "label": "Top Left",
            "value": "left-top"
          },
          {
            "label": "Top Right",
            "value": "right-top"
          },
          {
            "label": "Bottom Right (Default)",
            "value": "right-bottom"
          },
          {
            "label": "Bottom Left",
            "value": "left-bottom"
          }
        ]
      },
      {
        "type": "switch",
        "label": "Default Value Setting",
        "name": "value",
        "labelRemark": {
          "trigger": [
            "hover",
            "focus"
          ],
          "setting": true,
          "title": "",
          "content": "If not set, get according to name"
        }
      },
      {
        "type": "input-text",
        "name": "value",
        "label": "Default Value",
        "visibleOn": "typeof this.value !== \"undefined\""
      },
      {
        "name": "options",
        "type": "select",
        "label": "Enable Unit",
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
    "rendererName": "uuid",
    "$schema": "/schemas/UUIDControlSchema.json",
    "name": "UUID",
    "isBaseComponent": true,
    "icon": "fa fa-eye-slash",
    "pluginIcon": "uuid-plugin",
    "description": "Automatically generated UUID",
    "searchKeywords": "UUID Field",
    "docLink": "/amis/zh-CN/components/form/uuid",
    "tags": [
      "Form Item"
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
          "tooltip": "Can be set to top left, top right, bottom right, bottom left, default is bottom right",
          "tooltipTheme": "dark",
          "placement": "top",
          "tooltipStyle": {
            "fontSize": "12px"
          },
          "className": "ae-formItemControl-label-tip",
          "body": "Reference Position"
        },
        "name": "originPosition",
        "value": "left-top",
        "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
        "options": [
          {
            "label": "Top Left",
            "value": "left-top"
          },
          {
            "label": "Top Right",
            "value": "right-top"
          },
          {
            "label": "Bottom Right (Default)",
            "value": "right-bottom"
          },
          {
            "label": "Bottom Left",
            "value": "left-bottom"
          }
        ]
      },
      {
        "type": "static",
        "value": "Automatically generated in UUID v4 format, no configuration needed"
      }
    ],
    "order": 0
  },
  {
    "rendererName": "location-picker",
    "$schema": "/schemas/LocationControlSchema.json",
    "name": "Location Selection",
    "isBaseComponent": true,
    "notRenderFormZone": true,
    "icon": "fa fa-location-arrow",
    "pluginIcon": "location-picker-plugin",
    "description": "Location Selection",
    "docLink": "/amis/zh-CN/components/form/location-picker",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "location-picker",
      "name": "location",
      "label": "Location Selection"
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
          "label": "Location Selection"
        }
      ]
    },
    "panelTitle": "Location Selection",
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "input-sub-form",
    "$schema": "/schemas/SubFormControlSchema.json",
    "name": "SubForm Item",
    "isBaseComponent": true,
    "icon": "fa fa-window-restore",
    "pluginIcon": "sub-form-plugin",
    "description": "SubForm, configure a sub form as the current form item",
    "docLink": "/amis/zh-CN/components/form/input-sub-form",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "input-sub-form",
      "name": "subform",
      "label": "SubForm",
      "form": {
        "title": "Title",
        "body": [
          {
            "type": "input-text",
            "label": "Text",
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
          "label": "SubForm",
          "form": "_Component_"
        }
      ]
    },
    "panelTitle": "SubForm Item",
    "order": 0
  },
  {
    "rendererName": "hidden",
    "$schema": "/schemas/HiddenControlSchema.json",
    "name": "Hidden Field",
    "isBaseComponent": true,
    "icon": "fa fa-eye-slash",
    "pluginIcon": "hidden-plugin",
    "description": "Hidden form item",
    "searchKeywords": "Hidden Field",
    "docLink": "/amis/zh-CN/components/form/hidden",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "hidden",
      "name": "var1"
    },
    "previewSchema": {
      "type": "tpl",
      "tpl": "Hidden Field"
    },
    "panelTitle": "Hidden Field",
    "panelBody": [
      {
        "type": "select",
        "label": {
          "type": "tooltip-wrapper",
          "tooltip": "Can be set to top-left, top-right, bottom-right, bottom-left, default is bottom-right",
          "tooltipTheme": "dark",
          "placement": "top",
          "tooltipStyle": {
            "fontSize": "12px"
          },
          "className": "ae-formItemControl-label-tip",
          "body": "Reference Position"
        },
        "name": "originPosition",
        "value": "left-top",
        "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
        "options": [
          {
            "label": "Top-Left",
            "value": "left-top"
          },
          {
            "label": "Top-Right",
            "value": "right-top"
          },
          {
            "label": "Bottom-Right (Default)",
            "value": "right-bottom"
          },
          {
            "label": "Bottom-Left",
            "value": "left-bottom"
          }
        ]
      },
      {
        "type": "input-text",
        "name": "value",
        "label": "Default Value"
      }
    ],
    "order": 0
  },
  {
    "rendererName": "input-signature",
    "$schema": "/schemas/InputSignatureSchema.json",
    "name": "Handwritten Signature",
    "isBaseComponent": true,
    "icon": "fa fa-star-o",
    "pluginIcon": "input-signature-plugin",
    "description": "Handwritten signature panel",
    "docLink": "/amis/zh-CN/components/form/input-signature",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "input-signature",
      "label": "Signature",
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
          "label": "Signature",
          "name": "signature",
          "embed": true
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "Signature Panel",
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "static",
    "$schema": "/schemas/StaticControlSchema.json",
    "name": "Static Display Box",
    "isBaseComponent": true,
    "icon": "fa fa-info",
    "pluginIcon": "static-plugin",
    "description": "Purely for displaying data, can be used to display json, date, image, progress, etc.",
    "docLink": "/amis/zh-CN/components/form/static",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "static",
      "label": "Description"
    },
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": [
        {
          "type": "static",
          "label": "Description",
          "value": "Static Value"
        }
      ]
    },
    "multifactor": true,
    "notRenderFormZone": true,
    "panelTitle": "Static Display",
    "panelJustify": true,
    "events": "_Component_",
    "order": 0
  },
  {
    "rendererName": "button-group",
    "$schema": "/schemas/ButtonGroupSchema.json",
    "name": "Button Group",
    "isBaseComponent": true,
    "description": "Used to display multiple buttons, visually presented as a whole.",
    "tags": [
      "Function"
    ],
    "icon": "fa fa-object-group",
    "pluginIcon": "btn-group-plugin",
    "docLink": "/amis/zh-CN/components/button-group",
    "scaffold": {
      "type": "button-group",
      "buttons": [
        {
          "type": "button",
          "label": "Button 1",
          "onEvent": "_Component_"
        },
        {
          "type": "button",
          "label": "Button 2",
          "onEvent": "_Component_"
        }
      ]
    },
    "previewSchema": {
      "type": "button-group",
      "buttons": "_Component_"
    },
    "panelTitle": "Button Group",
    "panelJustify": true,
    "regions": [
      {
        "key": "buttons",
        "label": "Sub Button",
        "renderMethod": "render",
        "preferTag": "Button",
        "insertPosition": "inner"
      }
    ],
    "order": 0
  },
  {
    "rendererName": "nav",
    "$schema": "/schemas/NavSchema.json",
    "name": "Navigation",
    "isBaseComponent": true,
    "description": "Used to render navigation menus, supports horizontal and vertical.",
    "docLink": "/amis/zh-CN/components/nav",
    "tags": [
      "Function"
    ],
    "icon": "fa fa-map-signs",
    "pluginIcon": "nav-plugin",
    "scaffold": {
      "type": "nav",
      "stacked": true,
      "popupClassName": "app-popover :AMISCSSWrapper",
      "links": [
        {
          "label": "Page 1",
          "to": "?id=1",
          "target": "_self",
          "id": "0"
        },
        {
          "label": "Page 2",
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
      "links": "_Component_"
    },
    "panelTitle": "Navigation",
    "panelDefinitions": {
      "links": {
        "label": "Menu Management",
        "name": "links",
        "type": "combo",
        "multiple": true,
        "draggable": true,
        "addButtonText": "Add Menu",
        "multiLine": true,
        "messages": {
          "validateFailed": "There are configuration errors in the menu, please check carefully"
        },
        "scaffold": {
          "label": "",
          "to": ""
        },
        "items": [
          {
            "label": "Name",
            "name": "label",
            "type": "input-text",
            "required": true
          },
          {
            "type": "input-text",
            "name": "to",
            "label": "Redirect URL",
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
            "label": "Open in New Page",
            "name": "target"
          },
          {
            "label": "Icon",
            "type": "icon-picker",
            "name": "icon",
            "placeholder": "Click to select icon",
            "clearable": true,
            "description": ""
          },
          {
            "type": "switch",
            "mode": "horizontal",
            "horizontal": "_Component_",
            "inputClassName": "is-inline ",
            "label": "Initially Expanded",
            "name": "unfolded"
          },
          {
            "type": "group",
            "label": "Highlight",
            "direction": "vertical",
            "className": "m-b-none",
            "labelRemark": {
              "trigger": "click",
              "rootClose": true,
              "className": "m-l-xs",
              "content": "Can configure whether the menu should be highlighted",
              "placement": "left"
            },
            "body": [
              {
                "name": "active",
                "type": "radios",
                "inline": true,
                "options": [
                  {
                    "label": "Yes",
                    "value": true
                  },
                  {
                    "label": "No",
                    "value": false
                  },
                  {
                    "label": "Expression",
                    "value": ""
                  }
                ]
              },
              {
                "name": "activeOn",
                "autoComplete": false,
                "visibleOn": "typeof this.active !== \"boolean\"",
                "type": "input-text",
                "placeholder": "Leave blank to automatically analyze menu address",
                "className": "m-t-n-sm"
              }
            ]
          },
          {
            "type": "switch",
            "mode": "horizontal",
            "horizontal": "_Component_",
            "inputClassName": "is-inline ",
            "label": "Contains Submenu",
            "name": "children",
            "messages": {
              "validateFailed": "There are configuration errors in the submenu, please check carefully"
            }
          },
          {
            "name": "children",
            "$ref": "links",
            "visibleOn": "this.children",
            "label": "Submenu Management",
            "addButtonText": "Add Submenu"
          }
        ]
      }
    },
    "events": "_Component_",
    "actions": "_Component_",
    "order": 0
  },
  {
    "rendererName": "anchor-nav",
    "$schema": "/schemas/AnchorNavSchema.json",
    "name": "Anchor Navigation",
    "isBaseComponent": true,
    "description": "Anchor navigation, when displaying multiple lines of content, can display content in the form of anchor navigation grouping, clicking the navigation menu can locate the corresponding content area.",
    "docLink": "/amis/zh-CN/components/anchor-nav",
    "tags": [
      "Function"
    ],
    "icon": "fa fa-link",
    "pluginIcon": "anchor-nav-plugin",
    "scaffold": {
      "type": "anchor-nav",
      "links": [
        {
          "title": "Anchor 1",
          "href": "1",
          "body": [
            {
              "type": "tpl",
              "tpl": "This is anchor content 1",
              "wrapperComponent": "",
              "inline": false
            }
          ]
        },
        {
          "title": "Anchor 2",
          "href": "2",
          "body": [
            {
              "type": "tpl",
              "tpl": "This is anchor content 2",
              "wrapperComponent": "",
              "inline": false
            }
          ]
        },
        {
          "title": "Anchor 3",
          "href": "3",
          "body": [
            {
              "type": "tpl",
              "tpl": "This is anchor content 3",
              "wrapperComponent": "",
              "inline": false
            }
          ]
        }
      ]
    },
    "previewSchema": {
      "type": "anchor-nav",
      "links": "_Component_"
    },
    "panelTitle": "Anchor Navigation",
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
                  "State"
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
                          "tooltip": "Can be set to top-left, top-right, bottom-right, bottom-left, default is bottom-right",
                          "tooltipTheme": "dark",
                          "placement": "top",
                          "tooltipStyle": {
                            "fontSize": "12px"
                          },
                          "className": "ae-formItemControl-label-tip",
                          "body": "Reference Position"
                        },
                        "name": "originPosition",
                        "value": "left-top",
                        "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
                        "options": [
                          {
                            "label": "Top-Left",
                            "value": "left-top"
                          },
                          {
                            "label": "Top-Right",
                            "value": "right-top"
                          },
                          {
                            "label": "Bottom-Right (Default)",
                            "value": "right-bottom"
                          },
                          {
                            "label": "Bottom-Left",
                            "value": "left-bottom"
                          }
                        ]
                      },
                      {
                        "type": "combo",
                        "name": "links",
                        "label": "Anchor Settings",
                        "mode": "normal",
                        "multiple": true,
                        "draggable": true,
                        "minLength": 1,
                        "addButtonText": "Add Anchor",
                        "deleteBtn": {
                          "icon": "fa fa-trash"
                        },
                        "items": [
                          {
                            "type": "input-text",
                            "name": "title",
                            "required": true,
                            "placeholder": "Please enter anchor title"
                          }
                        ],
                        "scaffold": {
                          "title": "Anchor",
                          "href": "",
                          "body": [
                            {
                              "type": "tpl",
                              "tpl": "This is anchor content",
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
                        "label": "Default Position Area",
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
                    "title": "State",
                    "body": [
                      {
                        "type": "ae-StatusControl",
                        "defaultTrue": true,
                        "label": "Visible",
                        "mode": "normal",
                        "name": "visible",
                        "expressionName": "visibleOn"
                      },
                      {
                        "type": "ae-StatusControl",
                        "label": "Hidden",
                        "mode": "normal",
                        "name": "hidden",
                        "expressionName": "hiddenOn"
                      }
                    ],
                    "collapsed": false,
                    "key": "State"
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
                        "label": "Navigation Layout",
                        "value": "vertical",
                        "options": [
                          {
                            "label": "Horizontal",
                            "value": "horizontal"
                          },
                          {
                            "label": "Vertical",
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
                    "title": "CSS Class Name",
                    "collapsed": true,
                    "body": [
                      {
                        "type": "ae-classname",
                        "name": "className",
                        "label": {
                          "type": "tooltip-wrapper",
                          "tooltip": "What auxiliary CSS class names are there? Please go to <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">Style Description</a>, in addition, you can add custom class names, and then add custom styles in the system configuration.",
                          "tooltipTheme": "dark",
                          "placement": "top",
                          "tooltipStyle": {
                            "fontSize": "12px"
                          },
                          "className": "ae-formItemControl-label-tip",
                          "body": "Outer Layer"
                        }
                      },
                      {
                        "type": "ae-classname",
                        "name": "linkClassName",
                        "label": {
                          "type": "tooltip-wrapper",
                          "tooltip": "What auxiliary CSS class names are there? Please go to <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">Style Description</a>, in addition, you can add custom class names, and then add custom styles in the system configuration.",
                          "tooltipTheme": "dark",
                          "placement": "top",
                          "tooltipStyle": {
                            "fontSize": "12px"
                          },
                          "className": "ae-formItemControl-label-tip",
                          "body": "Navigation"
                        }
                      },
                      {
                        "type": "ae-classname",
                        "name": "sectionClassName",
                        "label": {
                          "type": "tooltip-wrapper",
                          "tooltip": "What auxiliary CSS class names are there? Please go to <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">Style Description</a>, in addition, you can add custom class names, and then add custom styles in the system configuration.",
                          "tooltipTheme": "dark",
                          "placement": "top",
                          "tooltipStyle": {
                            "fontSize": "12px"
                          },
                          "className": "ae-formItemControl-label-tip",
                          "body": "Area Content"
                        }
                      }
                    ],
                    "key": "CSS Class Name"
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
          "label": "Content Area",
          "renderMethod": "renderBody"
        }
      },
      "panelTitle": "Content Area",
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
                    "CSS Class Name"
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
                      "title": "CSS Class Name",
                      "body": [
                        {
                          "type": "ae-classname",
                          "name": "className",
                          "label": {
                            "type": "tooltip-wrapper",
                            "tooltip": "What auxiliary CSS class names are there? Please go to <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">Style Description</a>, in addition, you can add custom class names, and then add custom styles in the system configuration.",
                            "tooltipTheme": "dark",
                            "placement": "top",
                            "tooltipStyle": {
                              "fontSize": "12px"
                            },
                            "className": "ae-formItemControl-label-tip",
                            "body": "CSS Class Name"
                          }
                        }
                      ],
                      "collapsed": false,
                      "key": "CSS Class Name"
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
  {
    "rendererName": "tooltip-wrapper",
    "$schema": "/schemas/TooltipWrapperSchema.json",
    "isBaseComponent": true,
    "name": "Text Tooltip",
    "description": "Similar to a container, multiple renderers can be placed together, and when the user hovers or clicks on the container, a text tooltip layer is displayed",
    "searchKeywords": "Text Tooltip Container",
    "docLink": "/amis/zh-CN/components/tooltip",
    "tags": [
      "Function"
    ],
    "icon": "fa fa-comment-alt",
    "pluginIcon": "tooltip-wrapper-plugin",
    "scaffold": {
      "type": "tooltip-wrapper",
      "tooltip": "Tooltip Text",
      "body": [
        {
          "type": "tpl",
          "wrapperComponent": "",
          "tpl": "Content"
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
      "tooltip": "Tooltip Text",
      "body": "_Component_",
      "enterable": true,
      "showArrow": true,
      "offset": "_Component_",
      "className": "p-1 mr-3 border-2 border-solid border-indigo-400"
    },
    "regions": [
      {
        "key": "body",
        "label": "Content Area"
      }
    ],
    "panelTitle": "Text Tooltip",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "alert",
    "$schema": "/schemas/AlertSchema.json",
    "name": "Alert",
    "isBaseComponent": true,
    "description": "Used for special text alerts, divided into four categories: alert, success, warning, and danger. Can be used with <code>visibleOn</code> for error message alerts.",
    "docLink": "/amis/zh-CN/components/alert",
    "icon": "fa fa-exclamation-circle",
    "pluginIcon": "tooltip-plugin",
    "tags": [
      "Function"
    ],
    "scaffold": {
      "type": "alert",
      "body": {
        "type": "tpl",
        "tpl": "Alert Content",
        "wrapperComponent": "",
        "inline": false
      },
      "level": "info"
    },
    "previewSchema": {
      "type": "alert",
      "body": "_Component_",
      "level": "info",
      "className": "text-left",
      "showCloseButton": true
    },
    "regions": [
      {
        "key": "body",
        "label": "Content Area",
        "placeholder": "Alert Content"
      }
    ],
    "notRenderFormZone": true,
    "panelTitle": "Alert",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "wizard",
    "$schema": "/schemas/WizardSchema.json",
    "name": "Wizard",
    "isBaseComponent": true,
    "description": "Form wizard, can split complex multiple form items into multiple steps, guiding users to complete the filling step by step.",
    "docLink": "/amis/zh-CN/components/wizard",
    "tags": [
      "Function"
    ],
    "icon": "fa fa-list-ol",
    "pluginIcon": "wizard-plugin",
    "scaffold": {
      "type": "wizard",
      "steps": [
        {
          "title": "Step 1",
          "body": [
            {
              "type": "input-text",
              "label": "Text",
              "name": "var1"
            }
          ]
        },
        {
          "title": "Step 2",
          "body": [
            {
              "type": "input-text",
              "label": "Text 2",
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
          "title": "Step 1",
          "body": [
            {
              "type": "input-text",
              "label": "Text",
              "name": "var1"
            }
          ]
        },
        {
          "title": "Step 2",
          "body": []
        }
      ]
    },
    "events": "_Component_",
    "actions": "_Component_",
    "panelTitle": "Wizard",
    "patchContainers": [
      "steps.body"
    ],
    "vRendererConfig": {
      "regions": {
        "body": {
          "key": "body",
          "label": "Form Collection"
        },
        "actions": {
          "label": "Button Group",
          "key": "actions",
          "preferTag": "Button"
        }
      },
      "panelTitle": "Steps"
    },
    "overrides": {},
    "order": 0
  },
  {
    "rendererName": "table-view",
    "$schema": "/schemas/TableViewSchema.json",
    "name": "Table View",
    "isBaseComponent": true,
    "icon": "fa fa-columns",
    "pluginIcon": "table-view-plugin",
    "description": "Table type display",
    "searchKeywords": "Table Display",
    "docLink": "/amis/zh-CN/components/table-view",
    "tags": [
      "Function"
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
                "tpl": "Region"
              }
            },
            {
              "body": {
                "type": "tpl",
                "wrapperComponent": "",
                "tpl": "City"
              }
            },
            {
              "body": {
                "type": "tpl",
                "wrapperComponent": "",
                "tpl": "Sales"
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
                "tpl": "North China"
              }
            },
            {
              "body": {
                "type": "tpl",
                "wrapperComponent": "",
                "tpl": "Beijing"
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
                "tpl": "Tianjin"
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
      "trs": "_Component_"
    },
    "regions": [
      {
        "key": "body",
        "label": "Content Area",
        "renderMethod": "renderTdBody",
        "preferTag": "Display"
      }
    ],
    "panelTitle": "Table View",
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
                  "State"
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
                          "tooltip": "Can be set to top-left, top-right, bottom-right, bottom-left, default is bottom-right",
                          "tooltipTheme": "dark",
                          "placement": "top",
                          "tooltipStyle": {
                            "fontSize": "12px"
                          },
                          "className": "ae-formItemControl-label-tip",
                          "body": "Reference Position"
                        },
                        "name": "originPosition",
                        "value": "left-top",
                        "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
                        "options": [
                          {
                            "label": "Top-Left",
                            "value": "left-top"
                          },
                          {
                            "label": "Top-Right",
                            "value": "right-top"
                          },
                          {
                            "label": "Bottom-Right (Default)",
                            "value": "right-bottom"
                          },
                          {
                            "label": "Bottom-Left",
                            "value": "left-bottom"
                          }
                        ]
                      },
                      {
                        "type": "input-text",
                        "name": "caption",
                        "label": "Title"
                      },
                      {
                        "label": "Title Position",
                        "name": "captionSide",
                        "type": "button-group-select",
                        "size": "sm",
                        "mode": "row",
                        "className": "ae-buttonGroupSelect--justify",
                        "visibleOn": "this.caption",
                        "options": [
                          {
                            "label": "Top",
                            "value": "top"
                          },
                          {
                            "label": "Bottom",
                            "value": "bottom"
                          }
                        ]
                      },
                      {
                        "type": "input-text",
                        "label": "View Width",
                        "name": "width",
                        "clearable": true
                      },
                      {
                        "type": "input-text",
                        "label": "Default Cell Padding",
                        "name": "padding",
                        "clearable": true
                      },
                      {
                        "label": "Show Border",
                        "name": "border",
                        "type": "switch",
                        "mode": "row",
                        "inputClassName": "inline-flex justify-between flex-row-reverse"
                      },
                      {
                        "label": "Border Color",
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
                    "title": "State",
                    "body": [
                      "_Component_",
                      "_Component_"
                    ],
                    "collapsed": false,
                    "key": "State"
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
                  "Basic Style",
                  "Custom Style",
                  "Animation"
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
                    "header": "Layout",
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
                    "title": "Basic Style",
                    "collapsed": false,
                    "body": [
                      {
                        "type": "select",
                        "mode": "horizontal",
                        "labelAlign": "left",
                        "labelWidth": 80,
                        "name": "__editorStatebaseControlClassName",
                        "label": "State",
                        "selectFirst": true,
                        "options": [
                          {
                            "label": "Normal",
                            "value": "default"
                          },
                          {
                            "label": "Hover",
                            "value": "hover"
                          },
                          {
                            "label": "Click",
                            "value": "active"
                          }
                        ]
                      },
                      {
                        "mode": "default",
                        "type": "amis-theme-border",
                        "label": "Border",
                        "name": "themeCss.baseControlClassName.border:default",
                        "needColorCustom": true,
                        "visibleOn": "${__editorStatebaseControlClassName == 'default' || !__editorStatebaseControlClassName}",
                        "state": "default"
                      },
                      {
                        "mode": "default",
                        "type": "amis-theme-radius",
                        "label": "Rounded Corners",
                        "name": "themeCss.baseControlClassName.radius:default",
                        "visibleOn": "${__editorStatebaseControlClassName == 'default' || !__editorStatebaseControlClassName}",
                        "state": "default"
                      },
                      {
                        "mode": "default",
                        "type": "amis-theme-padding-and-margin",
                        "label": "Margin",
                        "name": "themeCss.baseControlClassName.padding-and-margin:default",
                        "visibleOn": "${__editorStatebaseControlClassName == 'default' || !__editorStatebaseControlClassName}",
                        "state": "default"
                      },
                      {
                        "mode": "default",
                        "type": "amis-theme-color-picker",
                        "label": "Background",
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
                        "label": "Border",
                        "name": "themeCss.baseControlClassName.border:hover",
                        "needColorCustom": true,
                        "visibleOn": "${__editorStatebaseControlClassName == 'hover'}",
                        "state": "hover"
                      },
                      {
                        "mode": "default",
                        "type": "amis-theme-radius",
                        "label": "Rounded Corners",
                        "name": "themeCss.baseControlClassName.radius:hover",
                        "visibleOn": "${__editorStatebaseControlClassName == 'hover'}",
                        "state": "hover"
                      },
                      {
                        "mode": "default",
                        "type": "amis-theme-padding-and-margin",
                        "label": "Margin",
                        "name": "themeCss.baseControlClassName.padding-and-margin:hover",
                        "visibleOn": "${__editorStatebaseControlClassName == 'hover'}",
                        "state": "hover"
                      },
                      {
                        "mode": "default",
                        "type": "amis-theme-color-picker",
                        "label": "Background",
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
                        "label": "Border",
                        "name": "themeCss.baseControlClassName.border:active",
                        "needColorCustom": true,
                        "visibleOn": "${__editorStatebaseControlClassName == 'active'}",
                        "state": "active"
                      },
                      {
                        "mode": "default",
                        "type": "amis-theme-radius",
                        "label": "Rounded Corners",
                        "name": "themeCss.baseControlClassName.radius:active",
                        "visibleOn": "${__editorStatebaseControlClassName == 'active'}",
                        "state": "active"
                      },
                      {
                        "mode": "default",
                        "type": "amis-theme-padding-and-margin",
                        "label": "Margin",
                        "name": "themeCss.baseControlClassName.padding-and-margin:active",
                        "visibleOn": "${__editorStatebaseControlClassName == 'active'}",
                        "state": "active"
                      },
                      {
                        "mode": "default",
                        "type": "amis-theme-color-picker",
                        "label": "Background",
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
                    "key": "Basic Style"
                  },
                  {
                    "type": "collapse",
                    "headingClassName": "ae-formItemControl-header ae-Collapse-header",
                    "bodyClassName": "ae-formItemControl-body",
                    "title": "Custom Style",
                    "collapsed": false,
                    "body": [
                      {
                        "type": "theme-cssCode",
                        "label": false
                      }
                    ],
                    "key": "Custom Style"
                  },
                  {
                    "type": "collapse",
                    "headingClassName": "ae-formItemControl-header ae-Collapse-header",
                    "bodyClassName": "ae-formItemControl-body",
                    "title": "Animation",
                    "body": [
                      {
                        "type": "switch",
                        "name": "animations.enter",
                        "label": "Enter Animation"
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
                                "label": "Fade In",
                                "children": [
                                  {
                                    "label": "Fade In",
                                    "value": "fadeIn"
                                  },
                                  {
                                    "value": "fadeInDown",
                                    "label": "Fade In from Top"
                                  },
                                  {
                                    "value": "fadeInDownBig",
                                    "label": "Fade In from Top (Enhanced)"
                                  },
                                  {
                                    "value": "fadeInLeft",
                                    "label": "Fade In from Left"
                                  },
                                  {
                                    "value": "fadeInLeftBig",
                                    "label": "Fade In from Left (Enhanced)"
                                  },
                                  {
                                    "value": "fadeInRight",
                                    "label": "Fade In from Right"
                                  },
                                  {
                                    "value": "fadeInRightBig",
                                    "label": "Fade In from Right (Enhanced)"
                                  },
                                  {
                                    "value": "fadeInUp",
                                    "label": "Fade In from Bottom"
                                  },
                                  {
                                    "value": "fadeInUpBig",
                                    "label": "Fade In from Bottom (Enhanced)"
                                  }
                                ]
                              },
                              {
                                "label": "Bounce",
                                "children": [
                                  {
                                    "value": "backInDown",
                                    "label": "Bounce In from Top"
                                  },
                                  {
                                    "value": "backInLeft",
                                    "label": "Bounce In from Left"
                                  },
                                  {
                                    "value": "backInRight",
                                    "label": "Bounce In from Right"
                                  },
                                  {
                                    "value": "backInUp",
                                    "label": "Bounce In from Bottom"
                                  }
                                ]
                              },
                              {
                                "label": "Rotate",
                                "children": [
                                  {
                                    "value": "rotateIn",
                                    "label": "Rotate In"
                                  },
                                  {
                                    "value": "rotateInDownLeft",
                                    "label": "Rotate In from Top-Left"
                                  },
                                  {
                                    "value": "rotateInDownRight",
                                    "label": "Rotate In from Top-Right"
                                  },
                                  {
                                    "value": "rotateInUpLeft",
                                    "label": "Rotate In from Bottom-Left"
                                  },
                                  {
                                    "value": "rotateInUpRight",
                                    "label": "Rotate In from Bottom-Right"
                                  }
                                ]
                              },
                              {
                                "label": "Slide",
                                "children": [
                                  {
                                    "value": "slideInUp",
                                    "label": "Slide In from Bottom"
                                  },
                                  {
                                    "value": "slideInDown",
                                    "label": "Slide In from Top"
                                  },
                                  {
                                    "value": "slideInLeft",
                                    "label": "Slide In from Left"
                                  },
                                  {
                                    "value": "slideInRight",
                                    "label": "Slide In from Right"
                                  }
                                ]
                              },
                              {
                                "label": "Flip",
                                "children": [
                                  {
                                    "value": "flip",
                                    "label": "Flip"
                                  },
                                  {
                                    "value": "flipInY",
                                    "label": "Horizontal Flip"
                                  },
                                  {
                                    "value": "flipInX",
                                    "label": "Vertical Flip"
                                  }
                                ]
                              },
                              {
                                "label": "Bounce",
                                "children": [
                                  {
                                    "value": "bounceIn",
                                    "label": "Bounce In"
                                  },
                                  {
                                    "value": "bounceInDown",
                                    "label": "Bounce In from Top"
                                  },
                                  {
                                    "value": "bounceInLeft",
                                    "label": "Bounce In from Left"
                                  },
                                  {
                                    "value": "bounceInRight",
                                    "label": "Bounce In from Right"
                                  },
                                  {
                                    "value": "bounceInUp",
                                    "label": "Bounce In from Bottom"
                                  }
                                ]
                              },
                              {
                                "label": "Zoom",
                                "children": [
                                  {
                                    "value": "zoomIn",
                                    "label": "Zoom In"
                                  },
                                  {
                                    "value": "zoomInDown",
                                    "label": "Zoom In from Top"
                                  },
                                  {
                                    "value": "zoomInLeft",
                                    "label": "Zoom In from Left"
                                  },
                                  {
                                    "value": "zoomInRight",
                                    "label": "Zoom In from Right"
                                  },
                                  {
                                    "value": "zoomInUp",
                                    "label": "Zoom In from Bottom"
                                  }
                                ]
                              },
                              {
                                "label": "Other",
                                "children": [
                                  {
                                    "value": "lightSpeedInLeft",
                                    "label": "Light Speed In from Left"
                                  },
                                  {
                                    "value": "lightSpeedInRight",
                                    "label": "Light Speed In from Right"
                                  },
                                  {
                                    "value": "rollIn",
                                    "label": "Roll In"
                                  }
                                ]
                              }
                            ],
                            "label": "Type",
                            "selectFirst": true
                          },
                          {
                            "type": "input-number",
                            "name": "animations.enter.duration",
                            "label": "Duration",
                            "value": 1,
                            "suffix": "seconds",
                            "min": 0,
                            "precision": 3
                          },
                          {
                            "label": "Delay",
                            "type": "input-number",
                            "name": "animations.enter.delay",
                            "value": 0,
                            "suffix": "seconds",
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
                        "label": "Play"
                      },
                      {
                        "type": "switch",
                        "name": "animations.attention",
                        "label": "Emphasis Animation"
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
                                "label": "Bounce",
                                "value": "bounce"
                              },
                              {
                                "label": "Flash",
                                "value": "flash"
                              },
                              {
                                "value": "headShake",
                                "label": "Shake"
                              },
                              {
                                "value": "heartBeat",
                                "label": "Heartbeat"
                              },
                              {
                                "value": "jello",
                                "label": "Jelly"
                              },
                              {
                                "label": "Jump",
                                "value": "pulse"
                              },
                              {
                                "label": "Swing",
                                "value": "swing"
                              },
                              {
                                "label": "Vibrate",
                                "value": "tada"
                              },
                              {
                                "label": "Wobble",
                                "value": "wobble"
                              },
                              {
                                "label": "Jiggle",
                                "value": "shake"
                              },
                              {
                                "value": "shakeX",
                                "label": "Horizontal Jiggle"
                              },
                              {
                                "value": "shakeY",
                                "label": "Vertical Jiggle"
                              },
                              {
                                "value": "rubberBand",
                                "label": "Rubber Band"
                              }
                            ],
                            "label": "Type",
                            "selectFirst": true
                          },
                          {
                            "type": "input-number",
                            "name": "animations.attention.duration",
                            "label": "Duration",
                            "value": 1,
                            "suffix": "seconds",
                            "min": 0,
                            "precision": 3
                          },
                          {
                            "label": "Delay",
                            "type": "input-number",
                            "name": "animations.attention.delay",
                            "value": 0,
                            "suffix": "seconds",
                            "precision": 3
                          },
                          {
                            "label": "Repeat",
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
                                "label": "Infinite",
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
                        "label": "Play"
                      },
                      {
                        "type": "switch",
                        "name": "animations.exit",
                        "label": "Exit Animation"
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
                                "label": "Fade Out",
                                "children": [
                                  {
                                    "label": "Fade Out",
                                    "value": "fadeOut"
                                  },
                                  {
                                    "value": "fadeOutDown",
                                    "label": "Fade Out to Bottom"
                                  },
                                  {
                                    "value": "fadeOutDownBig",
                                    "label": "Fade Out to Bottom (Enhanced)"
                                  },
                                  {
                                    "value": "fadeOutLeft",
                                    "label": "Fade Out to Left"
                                  },
                                  {
                                    "value": "fadeOutLeftBig",
                                    "label": "Fade Out to Left (Enhanced)"
                                  },
                                  {
                                    "value": "fadeOutRight",
                                    "label": "Fade Out to Right"
                                  },
                                  {
                                    "value": "fadeOutRightBig",
                                    "label": "Fade Out to Right (Enhanced)"
                                  },
                                  {
                                    "value": "fadeOutUp",
                                    "label": "Fade Out to Top"
                                  },
                                  {
                                    "value": "fadeOutUpBig",
                                    "label": "Fade Out to Top (Enhanced)"
                                  }
                                ]
                              },
                              {
                                "label": "Bounce",
                                "children": [
                                  {
                                    "value": "backOutDown",
                                    "label": "Bounce Out to Bottom"
                                  },
                                  {
                                    "value": "backOutLeft",
                                    "label": "Bounce Out to Left"
                                  },
                                  {
                                    "value": "backOutRight",
                                    "label": "Bounce Out to Right"
                                  },
                                  {
                                    "value": "backOutUp",
                                    "label": "Bounce Out to Top"
                                  }
                                ]
                              },
                              {
                                "label": "Rotate",
                                "children": [
                                  {
                                    "value": "rotateOut",
                                    "label": "Rotate Out"
                                  },
                                  {
                                    "value": "rotateOutDownLeft",
                                    "label": "Rotate Out from Top-Left"
                                  },
                                  {
                                    "value": "rotateOutDownRight",
                                    "label": "Rotate Out from Top-Right"
                                  },
                                  {
                                    "value": "rotateOutUpLeft",
                                    "label": "Rotate Out from Bottom-Left"
                                  },
                                  {
                                    "value": "rotateOutUpRight",
                                    "label": "Rotate Out from Bottom-Right"
                                  }
                                ]
                              },
                              {
                                "label": "Slide",
                                "children": [
                                  {
                                    "value": "slideOutUp",
                                    "label": "Slide Out to Top"
                                  },
                                  {
                                    "value": "slideOutDown",
                                    "label": "Slide Out to Bottom"
                                  },
                                  {
                                    "value": "slideOutLeft",
                                    "label": "Slide Out to Left"
                                  },
                                  {
                                    "value": "slideOutRight",
                                    "label": "Slide Out to Right"
                                  }
                                ]
                              },
                              {
                                "label": "Flip",
                                "children": [
                                  {
                                    "value": "flipOutY",
                                    "label": "Horizontal Flip"
                                  },
                                  {
                                    "value": "flipOutX",
                                    "label": "Vertical Flip"
                                  }
                                ]
                              },
                              {
                                "label": "Bounce",
                                "children": [
                                  {
                                    "value": "bounceOut",
                                    "label": "Bounce Out"
                                  },
                                  {
                                    "value": "bounceOutDown",
                                    "label": "Bounce Out to Bottom"
                                  },
                                  {
                                    "value": "bounceOutLeft",
                                    "label": "Bounce Out to Left"
                                  },
                                  {
                                    "value": "bounceOutRight",
                                    "label": "Bounce Out to Right"
                                  },
                                  {
                                    "value": "bounceOutUp",
                                    "label": "Bounce Out to Top"
                                  }
                                ]
                              },
                              {
                                "label": "Zoom",
                                "children": [
                                  {
                                    "value": "zoomOut",
                                    "label": "Zoom Out"
                                  },
                                  {
                                    "value": "zoomOutDown",
                                    "label": "Zoom Out to Top"
                                  },
                                  {
                                    "value": "zoomOutLeft",
                                    "label": "Zoom Out to Left"
                                  },
                                  {
                                    "value": "zoomOutRight",
                                    "label": "Zoom Out to Right"
                                  },
                                  {
                                    "value": "zoomOutUp",
                                    "label": "Zoom Out to Bottom"
                                  }
                                ]
                              },
                              {
                                "label": "Other",
                                "children": [
                                  {
                                    "value": "lightSpeedOutLeft",
                                    "label": "Light Speed Out to Left"
                                  },
                                  {
                                    "value": "lightSpeedOutRight",
                                    "label": "Light Speed Out to Right"
                                  },
                                  {
                                    "value": "rollOut",
                                    "label": "Roll Out"
                                  }
                                ]
                              }
                            ],
                            "label": "Type",
                            "selectFirst": true
                          },
                          {
                            "type": "input-number",
                            "name": "animations.exit.duration",
                            "label": "Duration",
                            "value": 1,
                            "suffix": "seconds",
                            "min": 0,
                            "precision": 3
                          },
                          {
                            "label": "Delay",
                            "type": "input-number",
                            "name": "animations.exit.delay",
                            "value": 0,
                            "suffix": "seconds",
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
                        "label": "Play"
                      }
                    ],
                    "collapsed": false,
                    "key": "Animation"
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
      "panelTitle": "Cell"
    },
    "trVRendererConfig": {
      "panelTitle": "Row"
    },
    "order": 0
  },
  {
    "rendererName": "web-component",
    "$schema": "/schemas/WebComponentSchema.json",
    "name": "Web Component",
    "isBaseComponent": true,
    "description": "Used to render Web Component components",
    "docLink": "/amis/zh-CN/components/web-component",
    "tags": [
      "Function"
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
    "panelTitle": "Wrapper",
    "notRenderFormZone": true,
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "audio",
    "$schema": "/schemas/AudioSchema.json",
    "name": "Audio",
    "isBaseComponent": true,
    "description": "Audio control, can be used to play various audio files.",
    "docLink": "/amis/zh-CN/components/audio",
    "tags": [
      "Function"
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
    "panelTitle": "Audio",
    "order": 0
  },
  {
    "rendererName": "video",
    "$schema": "/schemas/VideoSchema.json",
    "name": "Video",
    "isBaseComponent": true,
    "description": "Video control, can be used to play various video files, including flv and hls formats.",
    "docLink": "/amis/zh-CN/components/video",
    "tags": [
      "Function"
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
    "panelTitle": "Video",
    "panelBody": [
      {
        "type": "tabs",
        "tabsMode": "line",
        "className": "editor-prop-config-tabs",
        "linksClassName": "editor-prop-config-tabs-links aa",
        "contentClassName": "no-border editor-prop-config-tabs-cont hoverShowScrollBar",
        "tabs": [
          {
            "title": "General",
            "body": [
              {
                "type": "select",
                "label": {
                  "type": "tooltip-wrapper",
                  "tooltip": "Can be set to top left, top right, bottom right, bottom left, default is bottom right",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "Reference Position"
                },
                "name": "originPosition",
                "value": "left-top",
                "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
                "options": [
                  {
                    "label": "Top Left",
                    "value": "left-top"
                  },
                  {
                    "label": "Top Right",
                    "value": "right-top"
                  },
                  {
                    "label": "Bottom Right (Default)",
                    "value": "right-bottom"
                  },
                  {
                    "label": "Bottom Left",
                    "value": "left-bottom"
                  }
                ]
              },
              {
                "name": "src",
                "type": "input-text",
                "label": "Video URL",
                "description": "Can be a static value or use a variable like: <code>\\${videoSrc}</code>"
              },
              {
                "name": "poster",
                "type": "input-text",
                "label": "Video Poster Image URL",
                "description": "Can be a static value or use a variable like: <code>\\${videoPoster}</code>"
              },
              {
                "type": "switch",
                "mode": "horizontal",
                "horizontal": "_Component_",
                "inputClassName": "is-inline ",
                "name": "autoPlay",
                "label": "Autoplay"
              },
              {
                "type": "switch",
                "mode": "horizontal",
                "horizontal": "_Component_",
                "inputClassName": "is-inline ",
                "name": "muted",
                "label": "Mute"
              },
              {
                "type": "switch",
                "mode": "horizontal",
                "horizontal": "_Component_",
                "inputClassName": "is-inline ",
                "name": "isLive",
                "label": "Live Stream",
                "labelRemark": {
                  "className": "m-l-xs",
                  "trigger": "click",
                  "rootClose": true,
                  "placement": "left",
                  "content": "If it's a live stream, please check, otherwise it may not play properly."
                }
              }
            ]
          },
          {
            "title": "Appearance",
            "body": [
              {
                "name": "aspectRatio",
                "label": "Video Ratio",
                "type": "button-group-select",
                "size": "sm",
                "mode": "inline",
                "className": "block",
                "value": "auto",
                "options": [
                  {
                    "label": "Auto",
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
                "horizontal": "_Component_",
                "inputClassName": "is-inline ",
                "name": "splitPoster",
                "label": "Show Poster Separately"
              },
              {
                "type": "ae-classname",
                "name": "className",
                "label": {
                  "type": "tooltip-wrapper",
                  "tooltip": "What auxiliary CSS class names are there? Please visit <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">Style Guide</a>, in addition, you can add custom class names and then add custom styles in the system configuration.",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "CSS Class Name"
                }
              }
            ]
          },
          {
            "title": "Visibility",
            "body": [
              "_Component_"
            ]
          },
          {
            "title": "Others",
            "body": [
              null,
              {
                "type": "input-text",
                "name": "rates",
                "label": "Video Speed",
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
                "label": "Video Frame Information",
                "description": "For example, fill in: <code>\\${videoFrames}</code> will look for the videoFrames variable in the current scope, if it is an object, it will generate a list of video screenshots, and you can click to jump to the corresponding frame."
              }
            ]
          }
        ]
      }
    ],
    "order": 0
  },
  {
    "rendererName": "custom",
    "$schema": "/schemas/CustomSchema.json",
    "name": "Custom Code",
    "isBaseComponent": true,
    "description": "Implement functionality through embedded code",
    "tags": [
      "Function",
      "容器"
    ],
    "icon": "fa fa-gears",
    "pluginIcon": "custom-plugin",
    "docLink": "/amis/zh-CN/components/custom",
    "scaffold": {
      "type": "custom",
      "html": "<div>\n<h2>hello, world!</h2>\n<div id=\"customBox\">自定义容器区域</div>\n</div>",
      "onMount": "\n      const button = document.createElement('button');\n      button.innerText = 'Click to change name';\n      button.onclick = event => {\n        event.preventDefault();\n      };\n      dom.appendChild(button);",
      "body": {
        "0": {
          "tpl": "自定义容器区域"
        }
      }
    },
    "previewSchema": {
      "type": "custom",
      "html": "<div>\n<h2>hello, world!</h2>\n<div id=\"customBox\">自定义容器区域</div>\n</div>",
      "onMount": "\n      const button = document.createElement('button');\n      button.innerText = 'Click to change name';\n      button.onclick = event => {\n        event.preventDefault();\n      };\n      dom.appendChild(button);"
    },
    "panelTitle": "Custom Code",
    "panelBody": [
      {
        "type": "select",
        "label": {
          "type": "tooltip-wrapper",
          "tooltip": "Can be set to top left, top right, bottom right, bottom left, default is bottom right",
          "tooltipTheme": "dark",
          "placement": "top",
          "tooltipStyle": {
            "fontSize": "12px"
          },
          "className": "ae-formItemControl-label-tip",
          "body": "Reference Position"
        },
        "name": "originPosition",
        "value": "left-top",
        "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
        "options": [
          {
            "label": "Top Left",
            "value": "left-top"
          },
          {
            "label": "Top Right",
            "value": "right-top"
          },
          {
            "label": "Bottom Right (Default)",
            "value": "right-bottom"
          },
          {
            "label": "Bottom Left",
            "value": "left-bottom"
          }
        ]
      },
      {
        "collapsable": true,
        "collapsed": false,
        "title": "HTML Content",
        "body": [
          {
            "label": "HTML Content",
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
            "label": "onMount Code",
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
            "label": "onUpdate Code"
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
            "label": "onUnmount Code"
          }
        ],
        "type": "fieldset"
      }
    ],
    "order": 0,
    "regions": {
      "0": {
        "label": "内容区"
      }
    }
  },
  {
    "rendererName": "tasks",
    "$schema": "/schemas/TasksSchema.json",
    "name": "Asynchronous Task",
    "isBaseComponent": true,
    "description": "Used for asynchronous task presentation or operation.",
    "searchKeywords": "Task Operation Collection",
    "docLink": "/amis/zh-CN/components/tasks",
    "tags": [
      "Function"
    ],
    "icon": "",
    "pluginIcon": "tasks-plugin",
    "scaffold": {
      "type": "tasks",
      "name": "tasks",
      "items": [
        {
          "label": "Hive Task",
          "key": "hive",
          "status": 4,
          "remark": "View details <a target=\"_blank\" href=\"http://www.baidu.com\">Log</a>."
        },
        {
          "label": "Small Traffic",
          "key": "partial",
          "status": 4
        },
        {
          "label": "Full Traffic",
          "key": "full",
          "status": 4
        }
      ]
    },
    "previewSchema": {
      "type": "tasks",
      "name": "tasks",
      "items": "_Component_"
    },
    "panelTitle": "Asynchronous Task",
    "order": 0
  },
  {
    "rendererName": "each",
    "$schema": "/schemas/EachSchema.json",
    "name": "Loop Each",
    "isBaseComponent": true,
    "isListComponent": true,
    "memberImmutable": true,
    "description": "Function renderer, can loop output renderer based on existing variables.",
    "searchKeywords": "Loop Renderer",
    "docLink": "/amis/zh-CN/components/each",
    "tags": [
      "Function"
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
                "style": {},
                "tpl": "Top 1 Return Visit Quantity",
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
                "tpl": "Beijing Branch",
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
      "items": "_Component_",
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
    "panelTitle": "Loop",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "property",
    "$schema": "/schemas/PropertySchema.json",
    "name": "Property Table",
    "isBaseComponent": true,
    "icon": "fa fa-list",
    "pluginIcon": "property-sheet-plugin",
    "description": "Property Table",
    "docLink": "/amis/zh-CN/components/property",
    "tags": [
      "Function"
    ],
    "scaffold": {
      "type": "property",
      "title": "Machine Configuration",
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
          "content": "Other Instructions",
          "span": 3
        }
      ]
    },
    "previewSchema": {
      "type": "property",
      "title": "Machine Configuration",
      "items": "_Component_"
    },
    "panelTitle": "Property Table",
    "panelBody": [
      {
        "type": "tabs",
        "tabsMode": "line",
        "className": "editor-prop-config-tabs",
        "linksClassName": "editor-prop-config-tabs-links aa",
        "contentClassName": "no-border editor-prop-config-tabs-cont hoverShowScrollBar",
        "tabs": [
          {
            "title": "General",
            "body": [
              {
                "type": "select",
                "label": {
                  "type": "tooltip-wrapper",
                  "tooltip": "Can be set to top left, top right, bottom right, bottom left, default is bottom right",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "Reference Position"
                },
                "name": "originPosition",
                "value": "left-top",
                "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
                "options": [
                  {
                    "label": "Top Left",
                    "value": "left-top"
                  },
                  {
                    "label": "Top Right",
                    "value": "right-top"
                  },
                  {
                    "label": "Bottom Right (Default)",
                    "value": "right-bottom"
                  },
                  {
                    "label": "Bottom Left",
                    "value": "left-bottom"
                  }
                ]
              },
              {
                "label": "Title",
                "type": "input-text",
                "name": "title"
              },
              {
                "label": "Number of Columns per Row",
                "type": "input-number",
                "value": 3,
                "name": "column"
              },
              {
                "type": "radios",
                "name": "mode",
                "inline": true,
                "value": "table",
                "label": "Display Mode",
                "options": [
                  "table",
                  "simple"
                ]
              },
              {
                "label": "Separator",
                "type": "input-text",
                "name": "separator",
                "visibleOn": "this.mode === \"simple\""
              },
              {
                "label": "Properties from Variable",
                "type": "input-text",
                "name": "source"
              },
              {
                "label": "Property List",
                "name": "items",
                "type": "combo",
                "multiple": true,
                "multiLine": true,
                "draggable": true,
                "addButtonText": "Add New",
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
                    "label": "Property Name",
                    "name": "label"
                  },
                  {
                    "type": "input-text",
                    "mode": "inline",
                    "size": "sm",
                    "label": "Property Value",
                    "name": "content"
                  },
                  {
                    "type": "input-number",
                    "mode": "inline",
                    "size": "sm",
                    "label": "Span Columns",
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
                  "tooltip": "What auxiliary CSS class names are there? Please visit <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">Style Guide</a>, in addition, you can add custom class names and then add custom styles in the system configuration.",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "CSS Class Name"
                }
              }
            ]
          },
          {
            "title": "Visibility",
            "body": [
              null,
              "_Component_"
            ]
          }
        ]
      }
    ],
    "order": 0
  },
  {
    "rendererName": "iframe",
    "$schema": "/schemas/IFrameSchema.json",
    "name": "iFrame",
    "isBaseComponent": true,
    "description": "Can be embedded into existing pages.",
    "docLink": "/amis/zh-CN/components/iframe",
    "tags": [
      "Function"
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
    "rendererName": "qrcode",
    "$schema": "/schemas/QRCodeSchema.json",
    "name": "QR Code",
    "isBaseComponent": true,
    "description": "Can be used to generate QR codes",
    "docLink": "/amis/zh-CN/components/qrcode",
    "tags": [
      "Function"
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
    "actions": "_Component_",
    "panelTitle": "QR Code",
    "panelBody": [
      {
        "type": "tabs",
        "tabsMode": "line",
        "className": "editor-prop-config-tabs",
        "linksClassName": "editor-prop-config-tabs-links aa",
        "contentClassName": "no-border editor-prop-config-tabs-cont hoverShowScrollBar",
        "tabs": [
          {
            "title": "General",
            "body": [
              {
                "type": "select",
                "label": {
                  "type": "tooltip-wrapper",
                  "tooltip": "Can be set to top left, top right, bottom right, bottom left, default is bottom right",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "Reference Position"
                },
                "name": "originPosition",
                "value": "left-top",
                "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
                "options": [
                  {
                    "label": "Top Left",
                    "value": "left-top"
                  },
                  {
                    "label": "Top Right",
                    "value": "right-top"
                  },
                  {
                    "label": "Bottom Right (Default)",
                    "value": "right-bottom"
                  },
                  {
                    "label": "Bottom Left",
                    "value": "left-bottom"
                  }
                ]
              },
              {
                "name": "value",
                "type": "input-text",
                "label": "QR Code Value",
                "description": "Supports using <code>\\${xxx}</code> to get variables"
              },
              {
                "name": "level",
                "type": "select",
                "label": "Complexity",
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
                "label": "Width and Height"
              },
              {
                "name": "backgroundColor",
                "type": "input-color",
                "label": "Background Color"
              },
              {
                "name": "foregroundColor",
                "type": "input-color",
                "label": "Foreground Color"
              },
              {
                "type": "ae-classname",
                "name": "className",
                "label": {
                  "type": "tooltip-wrapper",
                  "tooltip": "What auxiliary CSS class names are there? Please visit <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">Style Description</a>. In addition, you can add custom class names and then add custom styles in the system configuration.",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "CSS Class Name"
                }
              }
            ]
          },
          {
            "title": "Visibility",
            "body": [
              null,
              "_Component_"
            ]
          }
        ]
      }
    ],
    "order": 0
  },
  {
    "rendererName": "icon",
    "$schema": "/schemas/Icon.json",
    "name": "Icon",
    "isBaseComponent": true,
    "icon": "fa fa-calendar",
    "panelTitle": "Icon",
    "description": "Used to display an icon, you can configure different icon styles.",
    "docLink": "/amis/zh-CN/components/icon",
    "tags": [
      "Display"
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
    "events": "_Component_",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "link",
    "$schema": "/schemas/LinkSchema.json",
    "name": "Link",
    "isBaseComponent": true,
    "description": "Used to display text links",
    "tags": [
      "Display"
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
      "label": "Link"
    },
    "panelTitle": "Link",
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
            "title": "Attributes",
            "body": [
              {
                "type": "collapse-group",
                "activeKey": [
                  "Basic",
                  null,
                  "State"
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
                          "tooltip": "Can be set to top left, top right, bottom right, bottom left, default is bottom right",
                          "tooltipTheme": "dark",
                          "placement": "top",
                          "tooltipStyle": {
                            "fontSize": "12px"
                          },
                          "className": "ae-formItemControl-label-tip",
                          "body": "Reference Position"
                        },
                        "name": "originPosition",
                        "value": "left-top",
                        "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
                        "options": [
                          {
                            "label": "Top Left",
                            "value": "left-top"
                          },
                          {
                            "label": "Top Right",
                            "value": "right-top"
                          },
                          {
                            "label": "Bottom Right (Default)",
                            "value": "right-bottom"
                          },
                          {
                            "label": "Bottom Left",
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
                              "tooltip": "Supports variable retrieval, if the field name is already bound, it does not need to be set",
                              "tooltipTheme": "dark",
                              "placement": "top",
                              "tooltipStyle": {
                                "fontSize": "12px"
                              },
                              "className": "ae-formItemControl-label-tip",
                              "body": "Target Address"
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
                          "tooltip": "If not filled, the target address value is used automatically",
                          "tooltipTheme": "dark",
                          "placement": "top",
                          "tooltipStyle": {
                            "fontSize": "12px"
                          },
                          "className": "ae-formItemControl-label-tip",
                          "body": "Content"
                        },
                        "type": "ae-textareaFormulaControl",
                        "mode": "normal",
                        "name": "body"
                      },
                      {
                        "type": "switch",
                        "mode": "horizontal",
                        "horizontal": "_Component_",
                        "inputClassName": "is-inline ",
                        "name": "blank",
                        "label": "Open in New Window"
                      },
                      {
                        "label": "Left Icon",
                        "type": "icon-picker",
                        "name": "icon",
                        "placeholder": "Click to select icon",
                        "clearable": true,
                        "description": ""
                      },
                      {
                        "label": "Right Icon",
                        "type": "icon-picker",
                        "name": "rightIcon",
                        "placeholder": "Click to select icon",
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
                      "Advanced Settings"
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
                        "title": "Advanced Settings",
                        "body": [
                          {
                            "name": "htmlTarget",
                            "type": "input-text",
                            "label": {
                              "type": "tooltip-wrapper",
                              "tooltip": "The target attribute of the HTML &lt;a&gt; element, which specifies where to display the linked resource",
                              "tooltipTheme": "dark",
                              "placement": "top",
                              "tooltipStyle": {
                                "fontSize": "12px"
                              },
                              "className": "ae-formItemControl-label-tip",
                              "body": "Anchor"
                            }
                          }
                        ],
                        "collapsed": false,
                        "key": "Advanced Settings"
                      }
                    ],
                    "collapsed": false
                  },
                  {
                    "type": "collapse",
                    "headingClassName": "ae-formItemControl-header ae-Collapse-header",
                    "bodyClassName": "ae-formItemControl-body",
                    "title": "State",
                    "body": [
                      "_Component_",
                      "_Component_",
                      {
                        "type": "ae-StatusControl",
                        "label": "Disable",
                        "mode": "normal",
                        "name": "disabled",
                        "expressionName": "disabledOn"
                      }
                    ],
                    "collapsed": false,
                    "key": "State"
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
                    "title": "CSS Class Name",
                    "collapsed": true,
                    "body": [
                      {
                        "type": "ae-classname",
                        "name": "className",
                        "label": {
                          "type": "tooltip-wrapper",
                          "tooltip": "What auxiliary CSS class names are there? Please visit <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">Style Description</a>. In addition, you can add custom class names and then add custom styles in the system configuration.",
                          "tooltipTheme": "dark",
                          "placement": "top",
                          "tooltipStyle": {
                            "fontSize": "12px"
                          },
                          "className": "ae-formItemControl-label-tip",
                          "body": "Outer"
                        }
                      },
                      {
                        "type": "ae-classname",
                        "name": "iconClassName",
                        "label": {
                          "type": "tooltip-wrapper",
                          "tooltip": "What auxiliary CSS class names are there? Please visit <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">Style Description</a>. In addition, you can add custom class names and then add custom styles in the system configuration.",
                          "tooltipTheme": "dark",
                          "placement": "top",
                          "tooltipStyle": {
                            "fontSize": "12px"
                          },
                          "className": "ae-formItemControl-label-tip",
                          "body": "Left Icon"
                        },
                        "visibleOn": "this.icon"
                      },
                      {
                        "type": "ae-classname",
                        "name": "rightIconClassName",
                        "label": {
                          "type": "tooltip-wrapper",
                          "tooltip": "What auxiliary CSS class names are there? Please visit <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">Style Description</a>. In addition, you can add custom class names and then add custom styles in the system configuration.",
                          "tooltipTheme": "dark",
                          "placement": "top",
                          "tooltipStyle": {
                            "fontSize": "12px"
                          },
                          "className": "ae-formItemControl-label-tip",
                          "body": "Right Icon"
                        },
                        "visibleOn": "this.rightIcon"
                      }
                    ],
                    "key": "CSS Class Name"
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
    "rendererName": "list",
    "$schema": "/schemas/ListSchema.json",
    "name": "List",
    "isBaseComponent": true,
    "isListComponent": true,
    "disabledRendererPlugin": true,
    "memberImmutable": true,
    "description": "Displays a list, you can customize the title, subtitle, content, and button group. This component requires a data source configuration and does not come with data fetching. Please use the 'CRUD' component first.",
    "docLink": "/amis/zh-CN/components/list",
    "tags": [
      "Display"
    ],
    "icon": "fa fa-list",
    "pluginIcon": "list-plugin",
    "scaffold": {
      "type": "list",
      "listItem": {
        "body": [
          {
            "type": "tpl",
            "tpl": "Simple display data: $a $b",
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
      "listItem": "_Component_",
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
    "panelTitle": "List",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "cards",
    "$schema": "/schemas/CardsSchema.json",
    "name": "List",
    "isBaseComponent": true,
    "isListComponent": true,
    "memberImmutable": true,
    "description": "Similar to a table, but uses small cards to display data. This component requires a data source configuration and does not come with data fetching. Please use the 'CRUD' component first.",
    "docLink": "/amis/zh-CN/components/cards",
    "tags": [
      "Display"
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
                "tpl": "流水线任务实例 ",
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
                    "tpl": "March",
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
                "tpl": "List Title",
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
                "tpl": "This is a content summary, you can set the number of display lines",
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
            "id": "u:0c0b56fd0c17",
            "items": {
              "0": {
                "body": {
                  "1": {
                    "body": {
                      "0": {
                        "tpl": "单元测试"
                      }
                    }
                  }
                }
              },
              "1": {
                "body": {
                  "1": {
                    "tpl": "通过率"
                  }
                }
              },
              "2": {
                "body": {
                  "1": {
                    "tpl": "任务实例"
                  }
                }
              }
            }
          },
          {
            "type": "container",
            "body": [
              {
                "type": "button",
                "label": "View Details",
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
                "id": "u:0a2fe27eb501",
                "tpl": "报告"
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
      "card": "_Component_",
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
    "panelTitle": "List",
    "panelJustify": true,
    "order": 0,
    "searchKeywords": "卡片组"
  },
  {
    "rendererName": "mapping",
    "$schema": "/schemas/MappingSchema.json",
    "name": "Mapping",
    "isBaseComponent": true,
    "description": "Maps existing values for display, for example, original values are: 1, 2, 3..., need to display as: offline, online, expired, etc.",
    "docLink": "/amis/zh-CN/components/mapping",
    "tags": [
      "Display"
    ],
    "icon": "fa fa-exchange",
    "pluginIcon": "mapping-plugin",
    "scaffold": {
      "type": "mapping",
      "value": 1,
      "map": {
        "1": "Happy",
        "2": "Angry",
        "3": "Sad",
        "4": "Indifferent",
        "*": "General"
      },
      "itemSchema": {
        "type": "tag",
        "label": "${item}"
      }
    },
    "previewSchema": {
      "type": "mapping",
      "value": 1,
      "map": "_Component_",
      "itemSchema": "_Component_"
    },
    "panelTitle": "Mapping",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "avatar",
    "$schema": "/schemas/AvatarSchema.json",
    "name": "Avatar",
    "isBaseComponent": true,
    "icon": "fa fa-user",
    "pluginIcon": "avatar-plugin",
    "description": "User avatar",
    "docLink": "/amis/zh-CN/components/avatar",
    "tags": [
      "Display"
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
    "events": "_Component_",
    "previewSchema": {
      "type": "avatar",
      "showtype": "image",
      "icon": "",
      "fit": "cover",
      "style": "_Component_"
    },
    "notRenderFormZone": true,
    "panelJustify": true,
    "panelTitle": "Avatar",
    "order": 0
  },
  {
    "rendererName": "card",
    "$schema": "/schemas/CardSchema.json",
    "name": "Card",
    "isBaseComponent": true,
    "description": "Displays a single card.",
    "docLink": "/amis/zh-CN/components/card",
    "tags": [
      "Display"
    ],
    "icon": "",
    "pluginIcon": "card-plugin",
    "scaffold": {
      "type": "card",
      "header": {
        "title": "Title",
        "subTitle": "Subtitle"
      },
      "body": "Content",
      "actions": [
        {
          "type": "button",
          "label": "Button",
          "actionType": "dialog",
          "dialog": {
            "title": "Title",
            "body": "Content"
          }
        }
      ]
    },
    "previewSchema": {
      "type": "card",
      "header": "_Component_",
      "body": "Content",
      "actions": "_Component_"
    },
    "regions": [
      {
        "key": "body",
        "label": "Content Area",
        "renderMethod": "renderBody",
        "preferTag": "Display"
      },
      {
        "key": "actions",
        "label": "Button Group",
        "renderMethod": "renderActions",
        "preferTag": "Button"
      }
    ],
    "panelTitle": "Card",
    "overrides": {},
    "vRendererConfig": {
      "panelTitle": "Field"
    },
    "order": 0
  },
  {
    "rendererName": "card2",
    "$schema": "/schemas/Card2Schema.json",
    "name": "Card",
    "isBaseComponent": true,
    "disabledRendererPlugin": true,
    "description": "Displays a single card.",
    "tags": [
      "Display"
    ],
    "icon": "",
    "scaffold": {
      "type": "card2",
      "body": "Content"
    },
    "previewSchema": {
      "type": "card2",
      "body": "Content"
    },
    "regions": [
      {
        "key": "body",
        "label": "Content Area",
        "renderMethod": "renderBody",
        "preferTag": "Display"
      }
    ],
    "panelTitle": "Card",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "cards",
    "$schema": "/schemas/CardsSchema.json",
    "name": "Card List",
    "isBaseComponent": true,
    "isListComponent": true,
    "memberImmutable": true,
    "description": "Similar to a table, but displays data using small cards. This component requires a data source configuration and does not fetch data by itself. Please use the 'CRUD' component first.",
    "searchKeywords": "Card Group",
    "docLink": "/amis/en-US/components/cards",
    "tags": [
      "Display"
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
                "tpl": "Pipeline Task Instance",
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
                        "tpl": "Unit Test",
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
                    "tpl": "Pass Rate",
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
                    "tpl": "Task Instance",
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
                "tpl": "Report",
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
      "card": "_Component_",
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
    "panelTitle": "Card Set",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "table",
    "$schema": "/schemas/TableSchema.json",
    "name": "Atomic Table",
    "tags": [
      "Display"
    ],
    "isBaseComponent": true,
    "description": "Used to display table data, you can configure column information, and then associate data to complete the display. Supports nesting, super headers, column fixing, header fixing, cell merging, etc. This component requires a data source configuration and does not come with data fetching. Please use the 'CRUD' component first.",
    "docLink": "/amis/zh-CN/components/table",
    "icon": "fa fa-table",
    "pluginIcon": "table-plugin",
    "scaffold": {
      "type": "table",
      "columns": [
        {
          "label": "Column Information",
          "name": "a"
        }
      ]
    },
    "regions": [
      {
        "key": "columns",
        "label": "Column Collection",
        "renderMethod": "renderTableContent",
        "preferTag": "Display",
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
    "panelTitle": "Table",
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "unWatchWidthChange": {},
    "dsManager": {
      "builders": {}
    },
    "order": 0
  },
  {
    "rendererName": "chart",
    "$schema": "/schemas/ChartSchema.json",
    "name": "Chart",
    "isBaseComponent": true,
    "description": "Used to render charts, based on the echarts chart library, theoretically supports all chart types of echarts.",
    "docLink": "/amis/zh-CN/components/chart",
    "tags": [
      "Display"
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
      "config": "_Component_",
      "replaceChartOption": true
    },
    "events": "_Component_",
    "actions": "_Component_",
    "panelTitle": "Chart",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "sparkline",
    "$schema": "/schemas/SparklineSchema.json",
    "name": "Trend Chart",
    "isBaseComponent": true,
    "description": "Used to embed and display simple charts",
    "docLink": "/amis/zh-CN/components/sparkline",
    "tags": [
      "Display"
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
      "value": "_Component_"
    },
    "panelTitle": "Trend Chart",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "carousel",
    "$schema": "/schemas/CarouselSchema.json",
    "name": "Carousel",
    "isBaseComponent": true,
    "description": "Used to render carousels, you can configure the content of each page (not just images), and configure transition animations.",
    "docLink": "/amis/zh-CN/components/carousel",
    "tags": [
      "Display"
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
      "options": "_Component_"
    },
    "panelTitle": "Carousel",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "image",
    "$schema": "/schemas/ImageSchema.json",
    "name": "Image Display",
    "isBaseComponent": true,
    "description": "Can be used to display an image, supports static setting of image address, or can configure <code>name</code> to associate with variables.",
    "docLink": "/amis/zh-CN/components/image",
    "tags": [
      "Display"
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
    "events": "_Component_",
    "actions": "_Component_",
    "panelTitle": "Image",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "images",
    "$schema": "/schemas/ImagesSchema.json",
    "name": "Image Set",
    "isBaseComponent": true,
    "description": "Displays multiple images",
    "docLink": "/amis/zh-CN/components/images",
    "tags": [
      "Display"
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
          "title": "Image 1",
          "image": "data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E",
          "src": "data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E"
        },
        {
          "title": "Image 2",
          "image": "data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E",
          "src": "data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E"
        }
      ]
    },
    "panelTitle": "Image Set",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "date",
    "$schema": "/schemas/DateSchema.json",
    "name": "Date Display",
    "isBaseComponent": true,
    "disabledRendererPlugin": true,
    "description": "Mainly used to associate field names for date display, supports various formats such as: X (timestamp), YYYY-MM-DD HH:mm:ss.",
    "docLink": "/amis/zh-CN/components/date",
    "tags": [
      "Display"
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
    "panelTitle": "Date Display",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "time",
    "$schema": "/schemas/DateSchema.json",
    "name": "Time Display",
    "isBaseComponent": true,
    "disabledRendererPlugin": true,
    "description": "Mainly used to associate field names for date display, supports various formats such as: X (timestamp), YYYY-MM-DD HH:mm:ss.",
    "docLink": "/amis/zh-CN/components/date",
    "tags": [
      "Display"
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
    "panelTitle": "Date Display",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "datetime",
    "$schema": "/schemas/DateSchema.json",
    "name": "DateTime Display",
    "isBaseComponent": true,
    "disabledRendererPlugin": false,
    "description": "Mainly used to associate field names for date display, supports various formats such as: X (timestamp), YYYY-MM-DD HH:mm:ss.",
    "docLink": "/amis/zh-CN/components/date",
    "tags": [
      "Display"
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
    "panelTitle": "Date Display",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "calendar",
    "$schema": "/schemas/Calendar.json",
    "name": "Calendar Schedule",
    "isBaseComponent": true,
    "icon": "fa fa-calendar",
    "pluginIcon": "inputDatetime",
    "panelTitle": "Calendar Schedule",
    "description": "Displays calendar and schedule.",
    "docLink": "/amis/zh-CN/components/calendar",
    "tags": [
      "Display"
    ],
    "scaffold": {
      "type": "calendar"
    },
    "previewSchema": {
      "type": "calendar"
    },
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "tag",
    "$schema": "/schemas/TagSchema.json",
    "name": "Tag",
    "isBaseComponent": true,
    "icon": "fa fa-tag",
    "pluginIcon": "tag-plugin",
    "description": "Tags for marking and selection",
    "docLink": "/amis/zh-CN/components/tag",
    "tags": [
      "Display"
    ],
    "previewSchema": {
      "type": "tag",
      "label": "Normal Tag",
      "color": "processing"
    },
    "scaffold": {
      "type": "tag",
      "label": "Normal Tag",
      "color": "processing"
    },
    "panelTitle": "Tag",
    "panelJustify": true,
    "events": "_Component_",
    "actions": "_Component_",
    "order": 0
  },
  {
    "rendererName": "json",
    "$schema": "/schemas/JsonSchema.json",
    "name": "JSON Display",
    "isBaseComponent": true,
    "description": "Used to display JSON data.",
    "docLink": "/amis/zh-CN/components/json",
    "tags": [
      "Display"
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
    "rendererName": "progress",
    "$schema": "/schemas/ProgressSchema.json",
    "name": "Progress Display",
    "searchKeywords": "Progress bar, progress",
    "isBaseComponent": true,
    "description": "Used to display progress. Different colors can be configured for different progress segments.",
    "docLink": "/amis/zh-CN/components/progress",
    "tags": [
      "Display"
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
    "actions": "_Component_",
    "panelTitle": "Progress",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "status",
    "$schema": "/schemas/StatusSchema.json",
    "name": "Status Display",
    "isBaseComponent": true,
    "description": "Displays status with icons based on associated fields, e.g., 1 shows √, 0 shows x. This can be customized.",
    "docLink": "/amis/zh-CN/components/status",
    "tags": [
      "Display"
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
        "label": "Success",
        "value": "success",
        "icon": "success",
        "status": "success"
      },
      {
        "label": "Running",
        "value": "pending",
        "icon": "rolling",
        "status": "pending"
      },
      {
        "label": "Queued",
        "value": "queue",
        "icon": "warning",
        "status": "queue"
      },
      {
        "label": "Scheduling",
        "value": "schedule",
        "icon": "schedule",
        "status": "schedule"
      },
      {
        "label": "Failed",
        "value": "fail",
        "icon": "fail",
        "status": "fail"
      }
    ],
    "panelTitle": "Status",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "steps",
    "$schema": "/schemas/StepsSchema.json",
    "name": "Steps",
    "isBaseComponent": true,
    "icon": "fa fa-forward",
    "pluginIcon": "steps-plugin",
    "description": "Steps progress bar",
    "docLink": "/amis/zh-CN/components/steps",
    "tags": [
      "Display"
    ],
    "scaffold": {
      "type": "steps",
      "value": 1,
      "steps": [
        {
          "title": "Step One",
          "subTitle": "Subtitle",
          "description": "Description"
        },
        {
          "title": "Step Two"
        },
        {
          "title": "Step Three"
        }
      ]
    },
    "previewSchema": {
      "type": "steps",
      "value": 1,
      "steps": "_Component_"
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
            "title": "General",
            "body": [
              {
                "type": "select",
                "label": {
                  "type": "tooltip-wrapper",
                  "tooltip": "Can be set to top-left, top-right, bottom-right, bottom-left, default is bottom-right",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "Reference Position"
                },
                "name": "originPosition",
                "value": "left-top",
                "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
                "options": [
                  {
                    "label": "Top-left",
                    "value": "left-top"
                  },
                  {
                    "label": "Top-right",
                    "value": "right-top"
                  },
                  {
                    "label": "Bottom-right (default)",
                    "value": "right-bottom"
                  },
                  {
                    "label": "Bottom-left",
                    "value": "left-bottom"
                  }
                ]
              },
              {
                "name": "steps",
                "label": "Step List",
                "type": "combo",
                "scaffold": {
                  "type": "wrapper",
                  "body": "Child Node Content"
                },
                "minLength": 2,
                "multiple": true,
                "draggable": true,
                "items": [
                  {
                    "type": "input-text",
                    "name": "title",
                    "label": false,
                    "placeholder": "Title"
                  },
                  {
                    "type": "input-text",
                    "name": "subTitle",
                    "label": false,
                    "placeholder": "Subtitle"
                  },
                  {
                    "type": "input-text",
                    "name": "description",
                    "label": false,
                    "placeholder": "Description"
                  }
                ],
                "itemsWrapperClassName": "ae-Combo-items ",
                "itemClassName": "ae-Combo-item "
              },
              {
                "name": "value",
                "type": "input-text",
                "label": "Current Step",
                "description": "Starts from zero"
              },
              {
                "name": "status",
                "type": "select",
                "label": "Current Status",
                "creatable": true,
                "value": "finish",
                "options": [
                  {
                    "label": "In Progress",
                    "value": "process"
                  },
                  {
                    "label": "Waiting",
                    "value": "wait"
                  },
                  {
                    "label": "Completed",
                    "value": "finish"
                  },
                  {
                    "label": "Error",
                    "value": "error"
                  }
                ]
              },
              {
                "type": "container",
                "body": [
                  {
                    "type": "checkbox",
                    "label": "Get Step API",
                    "option": "Advanced Configuration",
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
                      "validateFailed": "There are errors in the API configuration, please check carefully"
                    },
                    "items": [
                      {
                        "label": "Send Method",
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
                        "label": "API Address",
                        "type": "input-text",
                        "name": "url",
                        "placeholder": "http://",
                        "required": true
                      },
                      {
                        "type": "switch",
                        "label": "Data Mapping",
                        "name": "data",
                        "className": "w-full m-b-xs"
                      },
                      {
                        "type": "tpl",
                        "visibleOn": "!this.data",
                        "inline": false,
                        "className": "text-sm text-muted m-b",
                        "tpl": "When data mapping is not enabled, as much data as possible will be sent when sending the API. If you want to control the data sent yourself or need additional data processing, please enable this option."
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
                        "description": "<p>When data mapping is not enabled, the data is automatically sent in whitelist mode, configure what to send. Please bind the data. For example: <code>{\"a\": \"\\${a}\", \"b\": 2}</code></p><p>If you want to customize on the default basis, please first add a Key as `&` and Value as `\\$$` as the first line.</p><div>When the value is <code>__undefined</code>, it means deleting the corresponding field, which can be combined with <code>{\"&\": \"\\$$\"}</code> to achieve a blacklist effect.</div>"
                      },
                      {
                        "label": "Send Condition",
                        "type": "input-text",
                        "name": "sendOn",
                        "placeholder": "e.g.: this.type == \"123\"",
                        "description": "Use expressions to set the send condition for this request"
                      },
                      {
                        "type": "switch",
                        "label": "Silent Request",
                        "name": "silent",
                        "mode": "inline",
                        "description": "Whether to send the request silently, suppressing error prompts"
                      },
                      {
                        "type": "switch",
                        "label": "Set Cache",
                        "name": "cache",
                        "className": "w-full m-b-xs",
                        "description": "Set the cache validity time for this request"
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
                        "label": "File Download",
                        "name": "responseType",
                        "description": "Please check when the API is a binary file download, and set Content-Disposition"
                      },
                      {
                        "label": "Data Format",
                        "type": "button-group-select",
                        "name": "dataType",
                        "description": "The format of the send body is: <%= data.dataType === \"json\" ? \"application/json\" : (data.dataType === \"form-data\" ? \"multipart/form-data\" : (data.dataType === \"form\" ? \"application/x-www-form-urlencoded\" : \"\")) %>, when there is a file in the send content, the form-data format will be used automatically.",
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
                        "label": "Data Replacement",
                        "name": "replaceData",
                        "description": "By default, data is appended. After enabling this, it is completely replaced."
                      },
                      {
                        "type": "switch",
                        "label": "Return Result Mapping",
                        "name": "responseData",
                        "className": "w-full m-b-xs"
                      },
                      {
                        "type": "tpl",
                        "visibleOn": "!this.responseData",
                        "inline": false,
                        "className": "text-sm text-muted m-b",
                        "tpl": "If you need to do additional data processing on the return result, please enable this option."
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
                            "label": "Send Adapter",
                            "description": "Function signature: (api) => api, data is in api.data, modify and return the api object."
                          },
                          {
                            "name": "adaptor",
                            "type": "js-editor",
                            "allowFullscreen": true,
                            "label": "Receive Adapter",
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
                "label": "Mode",
                "value": "horizontal",
                "options": [
                  {
                    "label": "Horizontal",
                    "value": "horizontal"
                  },
                  {
                    "label": "Vertical",
                    "value": "vertical"
                  },
                  {
                    "label": "Simple",
                    "value": "simple"
                  }
                ]
              },
              {
                "type": "ae-classname",
                "name": "className",
                "label": {
                  "type": "tooltip-wrapper",
                  "tooltip": "What auxiliary CSS class names are there? Please go to <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">Style Description</a>, in addition, you can add custom class names, and then add custom styles in the system configuration.",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "CSS Class Name"
                }
              }
            ]
          },
          {
            "title": "Visibility",
            "body": [
              "_Component_"
            ]
          }
        ]
      }
    ],
    "order": 0
  },
  {
    "rendererName": "timeline",
    "$schema": "/schemas/TimelineSchema.json",
    "name": "Timeline",
    "isBaseComponent": true,
    "icon": "fa fa-bars",
    "description": "Used to display a timeline",
    "docLink": "/amis/zh-CN/components/timeline",
    "tags": [
      "Display"
    ],
    "scaffold": {
      "type": "timeline",
      "label": "Timeline",
      "name": "timeline",
      "items": [
        {
          "time": "2012-12-21",
          "title": "Node Example Data"
        },
        {
          "time": "2012-12-24",
          "title": "Node Example Data"
        },
        {
          "time": "2012-12-27",
          "title": "Node Example Data"
        }
      ]
    },
    "previewSchema": {
      "type": "timeline",
      "label": "Timeline",
      "name": "timeline",
      "items": "_Component_"
    },
    "panelTitle": "Timeline",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "divider",
    "$schema": "/schemas/DividerSchema.json",
    "name": "Divider",
    "isBaseComponent": true,
    "icon": "fa fa-minus",
    "pluginIcon": "divider-plugin",
    "description": "Used to display a divider, can be used for visual separation.",
    "docLink": "/amis/zh-CN/components/divider",
    "scaffold": {
      "type": "divider",
      "$$dragMode": "hv"
    },
    "previewSchema": {
      "type": "divider",
      "className": "m-t-none m-b-none"
    },
    "panelTitle": "Divider",
    "panelJustify": true,
    "tags": [
      "Display"
    ],
    "order": 0
  },
  {
    "rendererName": "code",
    "$schema": "/schemas/CodeSchema.json",
    "name": "Code Highlight",
    "isBaseComponent": true,
    "icon": "fa fa-code",
    "pluginIcon": "code-plugin",
    "description": "Code Highlight",
    "docLink": "/amis/zh-CN/components/code",
    "tags": [
      "Display"
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
    "panelTitle": "Code Highlight",
    "order": 0
  },
  {
    "rendererName": "markdown",
    "$schema": "/schemas/MarkdownSchema.json",
    "name": "Markdown",
    "isBaseComponent": true,
    "description": "Display markdown content",
    "docLink": "/amis/zh-CN/components/markdown",
    "tags": [
      "Display"
    ],
    "icon": "fa fa-file-text",
    "pluginIcon": "markdown-plugin",
    "scaffold": {
      "type": "markdown",
      "value": "## This is a title"
    },
    "previewSchema": {
      "type": "markdown",
      "value": "## This is a title"
    },
    "panelTitle": "MD",
    "order": 0
  },
  {
    "rendererName": "collapse",
    "$schema": "/schemas/CollapseSchema.json",
    "name": "Collapser",
    "isBaseComponent": true,
    "description": "Collapser, can expand or hide content area to keep the page tidy",
    "docLink": "/amis/zh-CN/components/collapse",
    "tags": [
      "Display"
    ],
    "icon": "fa fa-window-minimize",
    "pluginIcon": "collapse-plugin",
    "scaffold": {
      "type": "collapse",
      "header": "Title",
      "body": [
        {
          "type": "tpl",
          "tpl": "Content",
          "wrapperComponent": "",
          "inline": false
        }
      ]
    },
    "previewSchema": {
      "type": "collapse",
      "header": "Title",
      "body": "_Component_"
    },
    "panelTitle": "Collapser",
    "panelJustify": true,
    "events": "_Component_",
    "actions": "_Component_",
    "regions": [
      {
        "key": "body",
        "label": "Content Area"
      }
    ],
    "order": 0
  },
  {
    "rendererName": "office-viewer",
    "$schema": "/schemas/OfficeViewerSchema.json",
    "name": "Document Preview",
    "isBaseComponent": true,
    "description": "Office Document Preview",
    "docLink": "/amis/zh-CN/components/office-viewer",
    "tags": [
      "Display"
    ],
    "icon": "fa fa-file-word",
    "pluginIcon": "officeViewer-plugin",
    "scaffold": {
      "type": "office-viewer"
    },
    "previewSchema": {
      "type": "office-viewer"
    },
    "panelTitle": "Document Preview",
    "panelJustify": true,
    "actions": "_Component_",
    "order": 0
  },
  {
    "rendererName": "pdf-viewer",
    "$schema": "/schemas/PdfViewerSchema.json",
    "name": "PDF Preview",
    "isBaseComponent": true,
    "description": "PDF File Preview",
    "docLink": "/amis/zh-CN/components/pdf-viewer",
    "tags": [
      "Display"
    ],
    "icon": "fa fa-file-pdf",
    "pluginIcon": "pdfViewer-plugin",
    "scaffold": {
      "type": "pdf-viewer"
    },
    "previewSchema": {
      "type": "pdf-viewer"
    },
    "panelTitle": "PDF Preview",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "log",
    "$schema": "/schemas/LogSchema.json",
    "name": "Log",
    "isBaseComponent": true,
    "icon": "fa fa-file-text-o",
    "pluginIcon": "log-plugin",
    "description": "Used to display logs in real-time",
    "searchKeywords": "Real-time log",
    "docLink": "/amis/zh-CN/components/log",
    "tags": [
      "Display"
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
    "panelTitle": "Log",
    "order": 0
  },
  {
    "panelTitle": "Button",
    "rendererName": "action",
    "name": "Action Button",
    "$schema": "/schemas/ActionSchema.json",
    "order": 0
  },
  {
    "rendererName": "input-array",
    "$schema": "/schemas/ArrayControlSchema.json",
    "disabledRendererPlugin": true,
    "name": "Array Input Box",
    "isBaseComponent": true,
    "icon": "fa fa-bars",
    "pluginIcon": "input-array-plugin",
    "description": "Array input box, can customize member input form. It is actually a usage of Combo's flat value, which can be directly replaced with combo.",
    "docLink": "/amis/zh-CN/components/form/input-array",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "input-array",
      "label": "Array Input Box",
      "name": "array",
      "items": {
        "type": "input-text",
        "placeholder": "Please enter"
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
          "label": "Array Input Box",
          "name": "array",
          "items": "_Component_",
          "value": [
            "row1",
            ""
          ],
          "draggable": true
        }
      ]
    },
    "panelTitle": "Array Box",
    "order": 0
  },
  {
    "rendererName": "control",
    "$schema": "/schemas/FormControlSchema.json",
    "name": "Form Item Container",
    "isBaseComponent": true,
    "icon": "fa fa-object-group",
    "pluginIcon": "form-group-plugin",
    "description": "Form Item Container",
    "docLink": "/amis/zh-CN/components/form/group",
    "tags": [
      "Container"
    ],
    "disabledRendererPlugin": true,
    "scaffold": {
      "type": "control",
      "label": "Form Item Container",
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
          "label": "Form Item Container",
          "body": "_Component_"
        }
      ]
    },
    "regions": [
      {
        "key": "body",
        "label": "Element Collection",
        "preferTag": "Form Item"
      }
    ],
    "panelTitle": "Form Item Container",
    "order": 0
  },
  {
    "rendererName": "input-datetime",
    "$schema": "/schemas/DateTimeControlSchema.json",
    "icon": "fa fa-calendar",
    "pluginIcon": "input-datetime-plugin",
    "name": "DateTime",
    "isBaseComponent": true,
    "searchKeywords": "Date box, input-datetime, date-time box, input-time, time box, input-month, month box, input-quarter, quarter box, input-year, year box, year selection",
    "description": "Year, month, day, hour, minute selection",
    "docLink": "/amis/zh-CN/components/form/input-datetime",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "input-datetime",
      "label": "DateTime",
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
          "label": "DateTime",
          "name": "datetime"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "DateTime",
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "disabledRendererPlugin": true,
    "order": 0
  },
  {
    "rendererName": "input-datetime-range",
    "$schema": "/schemas/DateTimeRangeControlSchema.json",
    "icon": "fa fa-calendar",
    "pluginIcon": "input-date-range-plugin",
    "name": "DateTime Range",
    "isBaseComponent": true,
    "searchKeywords": "Date range box, input-datetime-range, date-time range, input-time-range, time range, input-month-range, month range, input-quarter-range, quarter range, input-year-range, year range, year range",
    "description": "Date-time range selection, can set minimum and maximum dates through <code>minDate</code>, <code>maxDate</code>",
    "docLink": "/amis/zh-CN/components/form/input-datetime-range",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "input-datetime-range",
      "label": "Date Range",
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
          "label": "Date Range",
          "name": "datetime-range"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "Date Range",
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "disabledRendererPlugin": true,
    "order": 0
  },
  {
    "rendererName": "formula",
    "$schema": "/schemas/FormulaControlSchema.json",
    "name": "Formula",
    "isBaseComponent": true,
    "disabledRendererPlugin": true,
    "icon": "fa fa-calculator",
    "pluginIcon": "formula-plugin",
    "description": "Calculate the specified variable value through a formula and apply the result to the specified variable",
    "docLink": "/amis/zh-CN/components/form/formula",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "formula",
      "name": "formula"
    },
    "previewSchema": {
      "type": "tpl",
      "tpl": "Calculation Formula"
    },
    "panelTitle": "Formula",
    "panelBody": [
      {
        "type": "select",
        "label": {
          "type": "tooltip-wrapper",
          "tooltip": "Can be set to top-left, top-right, bottom-right, bottom-left, default is bottom-right",
          "tooltipTheme": "dark",
          "placement": "top",
          "tooltipStyle": {
            "fontSize": "12px"
          },
          "className": "ae-formItemControl-label-tip",
          "body": "Reference Position"
        },
        "name": "originPosition",
        "value": "left-top",
        "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
        "options": [
          {
            "label": "Top-left",
            "value": "left-top"
          },
          {
            "label": "Top-right",
            "value": "right-top"
          },
          {
            "label": "Bottom-right (default)",
            "value": "right-bottom"
          },
          {
            "label": "Bottom-left",
            "value": "left-bottom"
          }
        ]
      },
      {
        "label": "Field Name",
        "name": "name",
        "type": "input-text",
        "description": "The result of the formula calculation will be applied to the variable corresponding to this field name."
      },
      {
        "type": "input-text",
        "name": "value",
        "label": "Default Value"
      },
      {
        "type": "input-text",
        "name": "formula",
        "label": "Formula",
        "description": "Supports JS expressions, e.g., <code>data.var_a + 2</code>, which means when the form item <code>var_a</code> changes, the current form item will automatically be set to the value of <code>var_a + 2</code>. If set to a string, quotes are needed."
      },
      {
        "type": "input-text",
        "name": "condition",
        "label": "Application Condition",
        "description": "Supports expressions like: <code>\\${xxx}</code> or <code>data.xxx == \"a\"</code> to configure application conditions. When the condition is met, the calculation result will be set to the target variable."
      },
      {
        "type": "switch",
        "mode": "horizontal",
        "horizontal": "_Component_",
        "inputClassName": "is-inline ",
        "name": "initSet",
        "label": "Apply Initially",
        "description": "Whether to run the formula result during initialization and set it to the target variable."
      },
      {
        "type": "switch",
        "mode": "horizontal",
        "horizontal": "_Component_",
        "inputClassName": "is-inline ",
        "name": "autoSet",
        "label": "Apply Automatically",
        "description": "Whether to automatically calculate the formula result and set it to the target variable when there is a change. <br />When turned off, it can also be triggered by a button."
      }
    ],
    "order": 0
  },
  {
    "rendererName": "group",
    "$schema": "/schemas/GroupControlSchema.json",
    "disabledRendererPlugin": true,
    "name": "Form Group",
    "isBaseComponent": true,
    "icon": "fa fa-id-card-o",
    "pluginIcon": "form-group-plugin",
    "description": "Display multiple form items horizontally",
    "docLink": "/amis/zh-CN/components/form/group",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "group",
      "body": [
        {
          "type": "input-text",
          "label": "Text",
          "name": "var1"
        },
        {
          "type": "input-text",
          "label": "Text",
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
          "body": "_Component_",
          "label": false,
          "mode": "normal"
        }
      ]
    },
    "regions": [
      {
        "key": "body",
        "label": "Subform",
        "renderMethod": "renderInput",
        "preferTag": "Form Item"
      }
    ],
    "panelTitle": "Form Group",
    "panelBody": [
      {
        "type": "tabs",
        "tabsMode": "line",
        "className": "editor-prop-config-tabs",
        "linksClassName": "editor-prop-config-tabs-links aa",
        "contentClassName": "no-border editor-prop-config-tabs-cont hoverShowScrollBar",
        "tabs": [
          {
            "title": "General",
            "body": [
              {
                "type": "select",
                "label": {
                  "type": "tooltip-wrapper",
                  "tooltip": "Can be set to top left, top right, bottom right, bottom left, default is bottom right",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "Reference Position"
                },
                "name": "originPosition",
                "value": "left-top",
                "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
                "options": [
                  {
                    "label": "Top Left",
                    "value": "left-top"
                  },
                  {
                    "label": "Top Right",
                    "value": "right-top"
                  },
                  {
                    "label": "Bottom Right (Default)",
                    "value": "right-bottom"
                  },
                  {
                    "label": "Bottom Left",
                    "value": "left-bottom"
                  }
                ]
              },
              {
                "label": "Title",
                "name": "label",
                "type": "input-text"
              },
              {
                "name": "description",
                "type": "textarea",
                "label": {
                  "type": "tooltip-wrapper",
                  "tooltip": "Light-colored text description below the form item control",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "Description"
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
                    "tooltip": "Insert a new element",
                    "size": "sm",
                    "block": true,
                    "children": "Add Element"
                  },
                  "_owner": null,
                  "_store": {}
                }
              },
              {
                "type": "ae-switch-more",
                "formType": "dialog",
                "className": "ae-switch-more-flex",
                "label": {
                  "type": "tooltip-wrapper",
                  "tooltip": "Display a hint next to the input control, note that the control width needs to be set, otherwise the hint trigger icon will automatically wrap",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "Control Hint"
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
                            "label": "Hint Title",
                            "placeholder": "Please enter hint title"
                          },
                          {
                            "name": "content",
                            "type": "textarea",
                            "label": "Content"
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
                            "label": "Popup Position",
                            "options": [
                              {
                                "label": "Top",
                                "value": "top"
                              },
                              {
                                "label": "Bottom",
                                "value": "bottom"
                              },
                              {
                                "label": "Left",
                                "value": "left"
                              },
                              {
                                "label": "Right",
                                "value": "right"
                              }
                            ]
                          },
                          {
                            "label": "Icon",
                            "type": "icon-picker",
                            "name": "icon",
                            "placeholder": "Click to select icon",
                            "clearable": true,
                            "description": ""
                          },
                          {
                            "name": "className",
                            "label": {
                              "type": "tooltip-wrapper",
                              "tooltip": "What auxiliary CSS class names are there? Please visit <a href=\"https://baidu.gitee.io/amis/zh-CN/style/index\" target=\"_blank\">Style Description</a>, in addition, you can add custom class names, and then add custom styles in the system configuration.",
                              "tooltipTheme": "dark",
                              "placement": "top",
                              "tooltipStyle": {
                                "fontSize": "12px"
                              },
                              "className": "ae-formItemControl-label-tip",
                              "body": "CSS Class Name"
                            },
                            "type": "input-text"
                          },
                          {
                            "name": "trigger",
                            "type": "select",
                            "label": {
                              "type": "tooltip-wrapper",
                              "tooltip": "The default value of the floating layer trigger method is mouse hover",
                              "tooltipTheme": "dark",
                              "placement": "top",
                              "tooltipStyle": {
                                "fontSize": "12px"
                              },
                              "className": "ae-formItemControl-label-tip",
                              "body": "Trigger Method"
                            },
                            "multiple": true,
                            "options": [
                              {
                                "label": "Mouse Hover",
                                "value": "hover"
                              },
                              {
                                "label": "Click",
                                "value": "click"
                              }
                            ]
                          },
                          {
                            "name": "rootClose",
                            "visibleOn": "~this.trigger.indexOf(\"click\")",
                            "label": "Click Blank to Close",
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
                  "tooltip": "Display a hint next to the title",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "Title Hint"
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
                            "label": "Hint Title",
                            "placeholder": "Please enter hint title"
                          },
                          {
                            "name": "content",
                            "type": "textarea",
                            "label": "Content"
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
                            "label": "Popup Position",
                            "options": [
                              {
                                "label": "Top",
                                "value": "top"
                              },
                              {
                                "label": "Bottom",
                                "value": "bottom"
                              },
                              {
                                "label": "Left",
                                "value": "left"
                              },
                              {
                                "label": "Right",
                                "value": "right"
                              }
                            ]
                          },
                          "_Component_",
                          {
                            "name": "className",
                            "label": {
                              "type": "tooltip-wrapper",
                              "tooltip": "What auxiliary CSS class names are there? Please visit <a href=\"https://baidu.gitee.io/amis/zh-CN/style/index\" target=\"_blank\">Style Description</a>, in addition, you can add custom class names, and then add custom styles in the system configuration.",
                              "tooltipTheme": "dark",
                              "placement": "top",
                              "tooltipStyle": {
                                "fontSize": "12px"
                              },
                              "className": "ae-formItemControl-label-tip",
                              "body": "CSS Class Name"
                            },
                            "type": "input-text"
                          },
                          {
                            "name": "trigger",
                            "type": "select",
                            "label": {
                              "type": "tooltip-wrapper",
                              "tooltip": "The default value of the floating layer trigger method is mouse hover",
                              "tooltipTheme": "dark",
                              "placement": "top",
                              "tooltipStyle": {
                                "fontSize": "12px"
                              },
                              "className": "ae-formItemControl-label-tip",
                              "body": "Trigger Method"
                            },
                            "multiple": true,
                            "options": [
                              {
                                "label": "Mouse Hover",
                                "value": "hover"
                              },
                              {
                                "label": "Click",
                                "value": "click"
                              }
                            ]
                          },
                          {
                            "name": "rootClose",
                            "visibleOn": "~this.trigger.indexOf(\"click\")",
                            "label": "Click Blank to Close",
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
            "title": "Appearance",
            "body": [
              {
                "label": "Layout",
                "name": "mode",
                "type": "select",
                "options": [
                  {
                    "label": "Inline",
                    "value": "inline"
                  },
                  {
                    "label": "Horizontal",
                    "value": "horizontal"
                  },
                  {
                    "label": "Vertical",
                    "value": "normal"
                  },
                  {
                    "label": "Inherit",
                    "value": ""
                  }
                ]
              },
              {},
              {
                "type": "select",
                "label": "Label Width",
                "name": "horizontal",
                "options": [
                  {
                    "label": "Inherit",
                    "value": "formHorizontal"
                  },
                  {
                    "label": "Fixed Width",
                    "value": "leftFixed"
                  },
                  {
                    "label": "Proportion",
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
                    "label": "Width",
                    "size": "xs",
                    "options": [
                      {
                        "label": "Small",
                        "value": "sm"
                      },
                      {
                        "label": "Medium",
                        "value": "normal"
                      },
                      {
                        "label": "Large",
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
                      "tooltip": "12 equal parts, title width ratio n/12",
                      "tooltipTheme": "dark",
                      "placement": "top",
                      "tooltipStyle": {
                        "fontSize": "12px"
                      },
                      "className": "ae-formItemControl-label-tip",
                      "body": "Proportion"
                    }
                  },
                  {
                    "name": "labelAlign",
                    "type": "button-group-select",
                    "visibleOn": "this.horizontal && this.horizontal.leftFixed",
                    "label": "Alignment",
                    "size": "xs",
                    "options": [
                      {
                        "label": "Left Align",
                        "value": "left"
                      },
                      {
                        "label": "Right Align",
                        "value": "right"
                      }
                    ]
                  }
                ],
                "visibleOn": "this.mode == \"horizontal\" && this.horizontal && this.label !== false"
              },
              {
                "label": "Subform Display Mode",
                "name": "subFormMode",
                "type": "button-group-select",
                "size": "sm",
                "option": "Inherit",
                "options": [
                  {
                    "label": "Inherit",
                    "value": ""
                  },
                  {
                    "label": "Normal",
                    "value": "normal"
                  },
                  {
                    "label": "Inline",
                    "value": "inline"
                  },
                  {
                    "label": "Horizontal",
                    "value": "horizontal"
                  }
                ]
              },
              {
                "type": "switch",
                "label": "Subform Horizontal Ratio Setting",
                "name": "subFormHorizontal",
                "onText": "Inherit",
                "offText": "Custom",
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
                    "label": "Left Width",
                    "size": "xs",
                    "options": [
                      {
                        "label": "Ratio",
                        "value": ""
                      },
                      {
                        "label": "Small Width",
                        "value": "sm",
                        "visibleOn": "this.leftFixed"
                      },
                      {
                        "label": "Fixed Width",
                        "value": "normal"
                      },
                      {
                        "label": "Large Width",
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
                    "label": "Left-Right Distribution Adjustment (n/12)",
                    "labelRemark": {
                      "trigger": "click",
                      "className": "m-l-xs",
                      "rootClose": true,
                      "content": "A total of 12 equal parts, here you can set the left width ratio n/12.",
                      "placement": "left"
                    }
                  }
                ]
              },
              {
                "name": "body",
                "type": "combo",
                "label": "Column Width Configuration",
                "multiple": true,
                "removable": false,
                "addable": false,
                "multiLine": true,
                "visibleOn": "this.$$formMode != \"inline\"",
                "items": [
                  {
                    "type": "button-group-select",
                    "name": "columnRatio",
                    "label": "Width Setting",
                    "tiled": true,
                    "options": [
                      {
                        "value": "",
                        "label": "Fit Width"
                      },
                      {
                        "value": "auto",
                        "label": "Fit Content"
                      },
                      {
                        "value": "custom",
                        "label": "Custom"
                      }
                    ]
                  },
                  {
                    "label": "Width Ratio",
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
                "label": "Gap Size",
                "size": "sm",
                "tiled": true,
                "clearable": true,
                "options": [
                  {
                    "value": "xs",
                    "label": "Extra Small"
                  },
                  {
                    "value": "sm",
                    "label": "Small"
                  },
                  {
                    "value": "md",
                    "label": "Medium"
                  },
                  {
                    "value": "lg",
                    "label": "Large"
                  }
                ]
              },
              {
                "type": "ae-classname",
                "name": "className",
                "label": {
                  "type": "tooltip-wrapper",
                  "tooltip": "What auxiliary CSS class names are there? Please visit <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">Style Description</a>, in addition, you can add custom class names, and then add custom styles in the system configuration.",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "CSS Class Name"
                }
              },
              {
                "name": "body",
                "type": "combo",
                "label": "Column CSS Class Name Configuration",
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
            "title": "Visibility",
            "body": [
              null,
              "_Component_"
            ]
          }
        ]
      }
    ],
    "order": 0
  },
  {
    "rendererName": "input-month",
    "$schema": "/schemas/MonthControlSchema.json",
    "icon": "fa fa-calendar",
    "pluginIcon": "inputMonth-plugin",
    "name": "Date",
    "isBaseComponent": true,
    "searchKeywords": "Date Box, input-datetime, DateTime Box, input-time, Time Box, input-month, Month Box, input-quarter, Quarter Box, input-year, Year Box, Year Selection",
    "description": "Month Selection",
    "docLink": "/amis/zh-CN/components/form/input-month",
    "tags": [
      "Form Item"
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
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "disabledRendererPlugin": true,
    "order": 0
  },
  {
    "rendererName": "input-month-range",
    "$schema": "/schemas/MonthRangeControlSchema.json",
    "icon": "fa fa-calendar",
    "pluginIcon": "input-month-range-plugin",
    "name": "Month Range",
    "isBaseComponent": true,
    "searchKeywords": "Date Range Box, input-datetime-range, DateTime Range, input-time-range, Time Range, input-month-range, Month Range, input-quarter-range, Quarter Range, input-year-range, Year Range, Year Range",
    "description": "Month range selection, can set minimum and maximum dates through <code>minDate</code> and <code>maxDate</code>",
    "docLink": "/amis/zh-CN/components/form/input-month-range",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "input-month-range",
      "label": "Date Range",
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
          "label": "Date Range",
          "name": "month-range"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "Date Range",
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "disabledRendererPlugin": true,
    "order": 0
  },
  {
    "rendererName": "input-quarter",
    "$schema": "/schemas/QuarterControlSchema.json",
    "icon": "fa fa-calendar",
    "pluginIcon": "input-quarter-plugin",
    "name": "Quarter",
    "isBaseComponent": true,
    "searchKeywords": "Date Box, input-datetime, DateTime Box, input-time, Time Box, input-month, Month Box, input-quarter, Quarter Box, input-year, Year Box, Year Selection",
    "description": "Quarter Selection",
    "docLink": "/amis/zh-CN/components/form/input-quarter",
    "tags": [
      "Form Item"
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
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "disabledRendererPlugin": true,
    "order": 0
  },
  {
    "rendererName": "input-quarter-range",
    "$schema": "/schemas/MonthRangeControlSchema.json",
    "icon": "fa fa-calendar",
    "pluginIcon": "input-quarter-range-plugin",
    "name": "Quarter Range",
    "isBaseComponent": true,
    "searchKeywords": "Date Range Box, input-datetime-range, DateTime Range, input-time-range, Time Range, input-month-range, Month Range, input-quarter-range, Quarter Range, input-year-range, Year Range, Year Range",
    "description": "Month range selection, can set minimum and maximum dates through <code>minDate</code> and <code>maxDate</code>",
    "docLink": "/amis/zh-CN/components/form/input-quarter-range",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "input-quarter-range",
      "label": "Date Range",
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
          "label": "Date Range",
          "name": "quarter-range"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "Date Range",
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "disabledRendererPlugin": true,
    "order": 0
  },
  {
    "rendererName": "input-time",
    "$schema": "/schemas/TimeControlSchema.json",
    "icon": "fa fa-clock-o",
    "pluginIcon": "input-time-plugin",
    "name": "Time Box",
    "isBaseComponent": true,
    "searchKeywords": "Date Box, input-datetime, DateTime Box, input-time, Time Box, input-month, Month Box, input-quarter, Quarter Box, input-year, Year Box, Year Selection",
    "description": "Hour, minute, second input",
    "docLink": "/amis/zh-CN/components/form/input-time",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "input-time",
      "label": "Time",
      "name": "time"
    },
    "previewSchema": {
      "type": "form",
      "className": "text-left",
      "mode": "horizontal",
      "wrapWithPanel": false,
      "body": {
        "type": "input-time",
        "label": "Time",
        "name": "time"
      }
    },
    "notRenderFormZone": true,
    "panelTitle": "Time Box",
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "disabledRendererPlugin": true,
    "order": 0
  },
  {
    "rendererName": "input-time-range",
    "$schema": "/schemas/DateRangeControlSchema.json",
    "icon": "fa fa-calendar",
    "pluginIcon": "input-time-range-plugin",
    "name": "Date Range",
    "isBaseComponent": true,
    "searchKeywords": "Date Range Box, input-datetime-range, DateTime Range, input-time-range, Time Range, input-month-range, Month Range, input-quarter-range, Quarter Range, input-year-range, Year Range, Year Range",
    "description": "Time range selection, can set minimum and maximum dates through <code>minDate</code> and <code>maxDate</code>",
    "docLink": "/amis/zh-CN/components/form/time-range",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "input-time-range",
      "label": "Date Range",
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
          "label": "Date Range",
          "name": "time-range"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "Date Range",
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "disabledRendererPlugin": true,
    "order": 0
  },
  {
    "rendererName": "tree-select",
    "$schema": "/schemas/TreeSelectControlSchema.json",
    "name": "Tree Component",
    "isBaseComponent": true,
    "disabledRendererPlugin": true,
    "icon": "fa fa-list-alt",
    "pluginIcon": "tree-select-plugin",
    "description": "Tree structure selection, supports appearance switching between [Embedded Mode] and [Floating Layer Mode]",
    "searchKeywords": "tree, tree dropdown, tree dropdown box, tree-select, tree selection box, tree selector",
    "docLink": "/amis/zh-CN/components/form/treeselect",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "tree-select",
      "label": "Tree Component",
      "name": "tree",
      "clearable": false,
      "options": [
        {
          "label": "Option A",
          "value": "A",
          "children": [
            {
              "label": "Option C",
              "value": "C"
            },
            {
              "label": "Option D",
              "value": "D"
            }
          ]
        },
        {
          "label": "Option B",
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
        "label": "Tree Component - Floating Layer Mode",
        "name": "tree",
        "clearable": false,
        "options": "_Component_",
        "mode": "normal"
      }
    },
    "notRenderFormZone": true,
    "panelTitle": "Tree Selection",
    "actions": "_Component_",
    "panelDefinitions": {
      "options": {
        "label": "Options",
        "name": "options",
        "type": "combo",
        "multiple": true,
        "multiLine": true,
        "draggable": true,
        "addButtonText": "Add Option",
        "scaffold": {
          "label": "",
          "value": ""
        },
        "items": [
          {
            "type": "group",
            "body": [
              "_Component_",
              {
                "type": "input-text",
                "name": "value",
                "placeholder": "Value",
                "unique": true
              }
            ]
          },
          {
            "$ref": "options",
            "label": "Suboption",
            "name": "children",
            "addButtonText": "Add Suboption"
          }
        ]
      }
    },
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "input-year",
    "$schema": "/schemas/YearControlSchema.json",
    "icon": "fa fa-calendar",
    "pluginIcon": "input-year-plugin",
    "name": "Year",
    "isBaseComponent": true,
    "searchKeywords": "Date Box, input-datetime, DateTime Box, input-time, Time Box, input-month, Month Box, input-quarter, Quarter Box, input-year, Year Box, Year Selection",
    "description": "Year Selection",
    "docLink": "/amis/zh-CN/components/form/input-year",
    "tags": [
      "Form Item"
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
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "disabledRendererPlugin": true,
    "order": 0
  },
  {
    "rendererName": "input-year-range",
    "$schema": "/schemas/DateRangeControlSchema.json",
    "icon": "fa fa-calendar",
    "pluginIcon": "input-month-range-plugin",
    "name": "Date Range",
    "isBaseComponent": true,
    "searchKeywords": "date range box, input-datetime-range, date time range, input-time-range, time range, input-month-range, month range, input-quarter-range, quarter range, input-year-range, year range, year range",
    "description": "Year range selection, can set minimum and maximum dates through <code>minDate</code> and <code>maxDate</code>",
    "docLink": "/amis/zh-CN/components/form/year-range",
    "tags": [
      "Form Item"
    ],
    "scaffold": {
      "type": "input-year-range",
      "label": "Date Range",
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
          "label": "Date Range",
          "name": "year-range"
        }
      ]
    },
    "notRenderFormZone": true,
    "panelTitle": "Date Range",
    "events": "_Component_",
    "actions": "_Component_",
    "panelJustify": true,
    "disabledRendererPlugin": true,
    "order": 0
  },
  {
    "rendererName": "breadcrumb",
    "$schema": "/schemas/BreadcrumbSchema.json",
    "disabledRendererPlugin": true,
    "name": "Breadcrumb",
    "isBaseComponent": true,
    "icon": "fa fa-list",
    "pluginIcon": "breadcrumb-plugin",
    "description": "Breadcrumb navigation",
    "docLink": "/amis/zh-CN/components/breadcrumb",
    "tags": [
      "Other"
    ],
    "scaffold": {
      "type": "breadcrumb",
      "items": [
        {
          "label": "Home",
          "href": "/",
          "icon": "fa fa-home"
        },
        {
          "label": "Parent Page"
        },
        {
          "label": "<b>Current Page</b>"
        }
      ]
    },
    "previewSchema": {
      "type": "breadcrumb",
      "items": "_Component_"
    },
    "panelTitle": "Breadcrumb",
    "panelBody": [
      {
        "type": "tabs",
        "tabsMode": "line",
        "className": "editor-prop-config-tabs",
        "linksClassName": "editor-prop-config-tabs-links aa",
        "contentClassName": "no-border editor-prop-config-tabs-cont hoverShowScrollBar",
        "tabs": [
          {
            "title": "General",
            "body": [
              {
                "type": "select",
                "label": {
                  "type": "tooltip-wrapper",
                  "tooltip": "Can be set to top left, top right, bottom right, bottom left, default is bottom right",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "Reference Position"
                },
                "name": "originPosition",
                "value": "left-top",
                "visibleOn": "this.style && this.style.position && (this.style.position === \"fixed\" || this.style.position === \"absolute\")",
                "options": [
                  {
                    "label": "Top Left",
                    "value": "left-top"
                  },
                  {
                    "label": "Top Right",
                    "value": "right-top"
                  },
                  {
                    "label": "Bottom Right (Default)",
                    "value": "right-bottom"
                  },
                  {
                    "label": "Bottom Left",
                    "value": "left-bottom"
                  }
                ]
              },
              {
                "label": "Separator",
                "type": "input-text",
                "name": "separator"
              },
              {
                "type": "container",
                "body": [
                  {
                    "type": "checkbox",
                    "label": "Dynamic Data",
                    "option": "Advanced Configuration",
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
                        "label": "Send Method",
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
                        "label": "Interface Address",
                        "type": "input-text",
                        "name": "url",
                        "placeholder": "http://",
                        "required": true
                      },
                      {
                        "type": "switch",
                        "label": "Data Mapping",
                        "name": "data",
                        "className": "w-full m-b-xs"
                      },
                      {
                        "type": "tpl",
                        "visibleOn": "!this.data",
                        "inline": false,
                        "className": "text-sm text-muted m-b",
                        "tpl": "When data mapping is not enabled, as much data as possible will be sent when sending the API. If you want to control the data sent yourself or need additional data processing, please enable this option"
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
                        "description": "<p>When data mapping is not enabled, the sent data is automatically cut into whitelist mode, configure what to send, please bind the data. For example: <code>{\"a\": \"\\${a}\", \"b\": 2}</code></p><p>If you want to customize on the default basis, please add a Key as `&` Value as `\\$$` as the first line.</p><div>When the value is <code>__undefined</code>, it means deleting the corresponding field, which can be combined with <code>{\"&\": \"\\$$\"}</code> to achieve a blacklist effect.</div>"
                      },
                      {
                        "label": "Send Condition",
                        "type": "input-text",
                        "name": "sendOn",
                        "placeholder": "e.g.: this.type == \"123\"",
                        "description": "Use expressions to set the sending conditions of the request"
                      },
                      {
                        "type": "switch",
                        "label": "Silent Request",
                        "name": "silent",
                        "mode": "inline",
                        "description": "Whether to send the request silently, shielding error prompts"
                      },
                      {
                        "type": "switch",
                        "label": "Set Cache",
                        "name": "cache",
                        "className": "w-full m-b-xs",
                        "description": "Set the valid time of the request cache"
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
                        "label": "File Download",
                        "name": "responseType",
                        "description": "Please check when the interface is a binary file download, and set Content-Disposition"
                      },
                      {
                        "label": "Data Format",
                        "type": "button-group-select",
                        "name": "dataType",
                        "description": "The format of the sending body is: <%= data.dataType === \"json\" ? \"application/json\" : (data.dataType === \"form-data\" ? \"multipart/form-data\" : (data.dataType === \"form\" ? \"application/x-www-form-urlencoded\" : \"\")) %>, when there is a file in the sending content, the form-data format will be used automatically.",
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
                        "label": "Data Replacement",
                        "name": "replaceData",
                        "description": "The default data is appended, after enabling this it is completely replaced"
                      },
                      {
                        "type": "switch",
                        "label": "Return Result Mapping",
                        "name": "responseData",
                        "className": "w-full m-b-xs"
                      },
                      {
                        "type": "tpl",
                        "visibleOn": "!this.responseData",
                        "inline": false,
                        "className": "text-sm text-muted m-b",
                        "tpl": "If you need to do additional data processing on the return result, please enable this option"
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
                            "label": "Send Adapter",
                            "description": "Function signature: (api) => api, data is in api.data, modify and return the api object."
                          },
                          {
                            "name": "adaptor",
                            "type": "js-editor",
                            "allowFullscreen": true,
                            "label": "Receive Adapter",
                            "description": "Function signature: (payload, response, api) => payload"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "label": "Breadcrumb",
                "name": "items",
                "type": "combo",
                "multiple": true,
                "multiLine": true,
                "draggable": true,
                "addButtonText": "Add",
                "items": [
                  {
                    "type": "input-text",
                    "placeholder": "Text",
                    "name": "label"
                  },
                  {
                    "type": "input-text",
                    "name": "href",
                    "placeholder": "Link"
                  },
                  {
                    "label": "Icon",
                    "type": "icon-picker",
                    "name": "icon",
                    "placeholder": "Click to select icon",
                    "clearable": true,
                    "description": ""
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
                  "tooltip": "What auxiliary CSS class names are there? Please go to <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">Style Description</a>, in addition, you can add custom class names, and then add custom styles in the system configuration.",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "CSS Class Name"
                }
              },
              {
                "type": "ae-classname",
                "name": "itemClassName",
                "label": {
                  "type": "tooltip-wrapper",
                  "tooltip": "What auxiliary CSS class names are there? Please go to <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">Style Description</a>, in addition, you can add custom class names, and then add custom styles in the system configuration.",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "Breadcrumb CSS Class Name"
                }
              },
              null,
              {
                "type": "ae-classname",
                "name": "separatorClassName",
                "label": {
                  "type": "tooltip-wrapper",
                  "tooltip": "What auxiliary CSS class names are there? Please go to <a href=\"https://baidu.github.io/amis/docs/concepts/style\" target=\"_blank\">Style Description</a>, in addition, you can add custom class names, and then add custom styles in the system configuration.",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "Separator CSS Class Name"
                }
              }
            ]
          },
          {
            "title": "Visibility",
            "body": [
              null,
              "_Component_"
            ]
          }
        ]
      }
    ],
    "order": 0
  },
  {
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
      "body": "_Component_"
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
    "rendererName": "dialog",
    "$schema": "/schemas/DialogSchema.json",
    "name": "Popup",
    "isBaseComponent": true,
    "wrapperProps": {
      "show": true
    },
    "regions": [
      {
        "key": "body",
        "label": "Content Area",
        "renderMethod": "renderBody"
      },
      {
        "key": "actions",
        "label": "Button Group",
        "renderMethod": "renderFooter"
      }
    ],
    "events": "_Component_",
    "actions": "_Component_",
    "panelTitle": "Popup",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "drawer",
    "$schema": "/schemas/DrawerSchema.json",
    "name": "Drawer Popup",
    "isBaseComponent": true,
    "wrapperProps": {
      "resizable": false,
      "show": true
    },
    "regions": [
      {
        "key": "body",
        "label": "Content Area",
        "renderMethod": "renderBody"
      },
      {
        "key": "actions",
        "label": "Button Group",
        "renderMethod": "renderFooter"
      }
    ],
    "events": "_Component_",
    "actions": "_Component_",
    "panelTitle": "Popup",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "hbox",
    "$schema": "/schemas/HBoxSchema.json",
    "disabledRendererPlugin": true,
    "name": "HBox",
    "isBaseComponent": true,
    "icon": "fa fa-columns",
    "description": "Used to achieve left and right layout, default evenly distributed, can configure the width of a column through columnClassName.",
    "docLink": "/amis/zh-CN/components/hbox",
    "tags": [
      "Container"
    ],
    "scaffold": {
      "type": "hbox",
      "gap": "base",
      "columns": [
        {
          "body": []
        },
        {
          "body": []
        }
      ]
    },
    "previewSchema": {
      "type": "hbox",
      "columns": [
        {
          "type": "tpl",
          "tpl": "Fixed Width<br />w-xs",
          "columnClassName": "bg-primary w-xs"
        },
        {
          "type": "tpl",
          "tpl": "Auto Fill",
          "columnClassName": "bg-success"
        }
      ]
    },
    "panelTitle": "HBox",
    "vRendererConfig": {
      "regions": {
        "body": {
          "key": "body",
          "label": "Content Area",
          "placeholder": "Column"
        }
      },
      "panelTitle": "Column"
    },
    "overrides": {},
    "order": 0
  },
  {
    "rendererName": "operation",
    "$schema": "/schemas/OperationSchema.json",
    "name": "Action Bar",
    "isBaseComponent": true,
    "description": "Action bar, used for tables.",
    "tags": [
      "Display"
    ],
    "icon": "",
    "scaffold": {
      "type": "operation",
      "label": "Action",
      "buttons": [
        {
          "label": "Button",
          "type": "button"
        }
      ]
    },
    "previewSchema": {
      "type": "tpl",
      "tpl": "Action Bar"
    },
    "regions": [
      {
        "key": "buttons",
        "label": "Button Set",
        "renderMethod": "render",
        "insertPosition": "inner",
        "preferTag": "Button"
      }
    ],
    "panelTitle": "Action Bar",
    "order": 0
  },
  {
    "rendererName": "page",
    "$schema": "/schemas/PageSchema.json",
    "name": "Page",
    "isBaseComponent": true,
    "disabledRendererPlugin": true,
    "description": "Page renderer, the top-level entry of the page. Contains multiple regions, you can choose to place different renderers in different regions.",
    "docLink": "/amis/zh-CN/components/page",
    "tags": "Container",
    "icon": "fa fa-desktop",
    "scaffold": {
      "type": "page",
      "regions": [
        "body"
      ],
      "body": [
        {
          "type": "tpl",
          "tpl": "Content"
        }
      ]
    },
    "previewSchema": {
      "type": "page",
      "className": "text-left b-a",
      "asideClassName": "w-xs",
      "title": "Title",
      "subTitle": "Subtitle",
      "aside": "Sidebar",
      "body": "Content"
    },
    "events": "_Component_",
    "actions": "_Component_",
    "regions": [
      {
        "key": "toolbar",
        "label": "Toolbar",
        "preferTag": "Toolbar Content"
      },
      {
        "key": "aside",
        "label": "Sidebar",
        "placeholder": "Sidebar Content"
      },
      {
        "key": "body",
        "label": "Content Area",
        "placeholder": "Page Content"
      }
    ],
    "panelTitle": "Page",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "pagination",
    "$schema": "/schemas/PaginationSchema.json",
    "name": "Pagination Component",
    "isBaseComponent": true,
    "description": "Pagination component, can paginate the list to improve page performance",
    "docLink": "/amis/zh-CN/components/pagination",
    "tags": [
      "Display"
    ],
    "icon": "fa fa-window-minimize",
    "lastLayoutSetting": [
      "pager"
    ],
    "layoutOptions": [
      {
        "text": "Total",
        "value": "total",
        "checked": false
      },
      {
        "text": "Items per Page",
        "value": "perPage",
        "checked": false
      },
      {
        "text": "Pagination",
        "value": "pager",
        "checked": true
      },
      {
        "text": "Jump to Page",
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
      "layout": "_Component_",
      "activePage": 1,
      "lastPage": 1,
      "total": 1,
      "hasNext": false,
      "disabled": false,
      "perPageAvailable": "_Component_",
      "perPage": 10,
      "maxButtons": 7,
      "ellipsisPageGap": 5
    },
    "panelTitle": "Paginator",
    "events": "_Component_",
    "panelJustify": true,
    "regions": [
      {
        "key": "body",
        "label": "Content Area"
      }
    ],
    "order": 0
  },
  {
    "rendererName": "plain",
    "$schema": "/schemas/PlainSchema.json",
    "disabledRendererPlugin": true,
    "name": "Plain Text",
    "isBaseComponent": true,
    "icon": "fa fa-file-text-o",
    "pluginIcon": "plain-plugin",
    "description": "Used to display plain text, HTML tags will be escaped.",
    "docLink": "/amis/zh-CN/components/plain",
    "tags": [
      "Display"
    ],
    "previewSchema": {
      "type": "plain",
      "text": "This is plain text",
      "className": "text-center",
      "inline": false
    },
    "scaffold": {
      "type": "plain",
      "tpl": "Content",
      "inline": false
    },
    "panelTitle": "Plain Text",
    "panelJustify": true,
    "events": "_Component_",
    "actions": "_Component_",
    "order": 0
  },
  {
    "rendererName": "wrapper",
    "$schema": "/schemas/WrapperSchema.json",
    "disabledRendererPlugin": true,
    "name": "Wrapper",
    "isBaseComponent": true,
    "description": "Similar to a container, the only difference is that it will have a layer of padding by default.",
    "docLink": "/amis/zh-CN/components/wrapper",
    "tags": [
      "Container"
    ],
    "icon": "fa fa-square-o",
    "scaffold": {
      "type": "wrapper",
      "body": "Content"
    },
    "previewSchema": {
      "type": "wrapper",
      "body": "Content"
    },
    "regions": [
      {
        "key": "body",
        "label": "Content Area"
      }
    ],
    "panelTitle": "Wrapper",
    "panelJustify": true,
    "order": 0
  },
  {
    "rendererName": "column-toggler",
    "name": "Custom Display Columns",
    "panelTitle": "Custom Display Columns",
    "icon": "fa fa-square",
    "tags": [
      "Custom Display Columns"
    ],
    "$schema": "/schemas/ColumnTogglerSchema.json",
    "description": "Used to display custom display column buttons for tables, you can configure different display styles.",
    "panelJustify": true,
    "isBaseComponent": true,
    "disabledRendererPlugin": true,
    "order": 0
  },
  {
    "rendererName": "my-renderer",
    "$schema": "/schemas/UnkownSchema.json",
    "name": "Custom Renderer",
    "description": "This is just an example",
    "tags": [
      "Custom",
      "Form Item"
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
    "panelTitle": "Custom Component",
    "panelBody": [
      {
        "type": "tabs",
        "tabsMode": "line",
        "className": "m-t-n-xs",
        "contentClassName": "no-border p-l-none p-r-none",
        "tabs": [
          {
            "title": "General",
            "body": [
              {
                "name": "target",
                "label": "Target",
                "type": "input-text"
              }
            ]
          },
          {
            "title": "Appearance",
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


  {
    "rendererName": "flex",
    "$schema": "/schemas/FlexSchema.json",
    "disabledRendererPlugin": false,
    "name": "Equal Split",
    "order": 200,
    "isBaseComponent": false,
    "icon": "fa fa-columns",
    "pluginIcon": "layout-2cols-plugin",
    "description": "Common layout: Equal split layout (a layout container based on CSS Flex).",
    "docLink": "/amis/en-US/components/flex",
    "tags": [
      "Common Layout"
    ],
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
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "First Column",
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
          "tpl": "Second Column",
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
          "tpl": "Third Column",
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
    "panelTitle": "Layout Container",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "Child Node Collection"
      }
    ]
  },
  {
    "rendererName": "flex",
    "$schema": "/schemas/FlexSchema.json",
    "disabledRendererPlugin": false,
    "name": "1:2 Layout",
    "order": 201,
    "isBaseComponent": false,
    "icon": "fa fa-columns",
    "pluginIcon": "layout-2cols-plugin",
    "description": "Common layout: 1:2 layout (a layout container based on CSS Flex).",
    "docLink": "/amis/en-US/components/flex",
    "tags": [
      "Common Layout"
    ],
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
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "First Column",
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
          "tpl": "Second Column",
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
          "tpl": "Third Column",
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
    "panelTitle": "Layout Container",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "Child Node Collection"
      }
    ]
  },
  {
    "rendererName": "flex",
    "$schema": "/schemas/FlexSchema.json",
    "disabledRendererPlugin": false,
    "name": "1:3 Layout",
    "order": 202,
    "isBaseComponent": false,
    "icon": "fa fa-columns",
    "pluginIcon": "layout-2cols-plugin",
    "description": "Common layout: 1:3 layout (a layout container based on CSS Flex).",
    "docLink": "/amis/en-US/components/flex",
    "tags": [
      "Common Layout"
    ],
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
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "First Column",
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
          "tpl": "Second Column",
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
          "tpl": "Third Column",
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
    "panelTitle": "Layout Container",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "Child Node Collection"
      }
    ]
  },
  {
    "rendererName": "flex",
    "$schema": "/schemas/FlexSchema.json",
    "disabledRendererPlugin": false,
    "name": "Top and Bottom Layout",
    "order": 203,
    "isBaseComponent": false,
    "icon": "fa fa-columns",
    "pluginIcon": "layout-2row-plugin",
    "description": "Common layout: Top and bottom layout (a layout container based on CSS Flex).",
    "docLink": "/amis/en-US/components/flex",
    "tags": [
      "Common Layout"
    ],
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
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "First Column",
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
          "tpl": "Second Column",
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
          "tpl": "Third Column",
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
    "panelTitle": "Layout Container",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "Child Node Collection"
      }
    ]
  },
  {
    "rendererName": "flex",
    "$schema": "/schemas/FlexSchema.json",
    "disabledRendererPlugin": false,
    "name": "Three Column Equal Split",
    "order": 300,
    "isBaseComponent": false,
    "icon": "fa fa-columns",
    "pluginIcon": "layout-3cols-plugin",
    "description": "Common layout: Three column equal split layout (a layout container based on CSS Flex).",
    "docLink": "/amis/en-US/components/flex",
    "tags": [
      "Common Layout"
    ],
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
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "First Column",
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
          "tpl": "Second Column",
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
          "tpl": "Third Column",
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
    "panelTitle": "Layout Container",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "Child Node Collection"
      }
    ]
  },
  {
    "rendererName": "flex",
    "$schema": "/schemas/FlexSchema.json",
    "disabledRendererPlugin": false,
    "name": "1:2:3 Three Column",
    "order": 301,
    "isBaseComponent": false,
    "icon": "fa fa-columns",
    "pluginIcon": "layout-3cols-plugin",
    "description": "Common layout: 1:2:3 three column layout (a layout container based on CSS Flex).",
    "docLink": "/amis/en-US/components/flex",
    "tags": [
      "Common Layout"
    ],
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
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "First Column",
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
          "tpl": "Second Column",
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
          "tpl": "Third Column",
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
    "panelTitle": "Layout Container",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "Child Node Collection"
      }
    ]
  },



  {
    "rendererName": "flex",
    "$schema": "/schemas/FlexSchema.json",
    "disabledRendererPlugin": false,
    "name": "Top-Middle-Bottom",
    "order": 303,
    "isBaseComponent": false,
    "icon": "fa fa-columns",
    "pluginIcon": "layout-3row-plugin",
    "description": "Common layout: Top-Middle-Bottom layout (a layout container based on CSS Flex).",
    "docLink": "/amis/zh-CN/components/flex",
    "tags": [
      "Common Layout"
    ],
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
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "First Column",
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
          "tpl": "Second Column",
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
          "tpl": "Third Column",
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
    "panelTitle": "Layout Container",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "Child Node Collection"
      }
    ]
  },
  {
    "rendererName": "flex",
    "$schema": "/schemas/FlexSchema.json",
    "disabledRendererPlugin": false,
    "name": "One with Two",
    "order": 303,
    "isBaseComponent": false,
    "icon": "fa fa-columns",
    "pluginIcon": "layout-1with2-plugin",
    "description": "Common layout: One with Two layout (a layout container based on CSS Flex).",
    "docLink": "/amis/zh-CN/components/flex",
    "tags": [
      "Common Layout"
    ],
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
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "First Column",
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
          "tpl": "Second Column",
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
          "tpl": "Third Column",
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
    "panelTitle": "Layout Container",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "Child Node Collection"
      }
    ]
  },
  {
    "rendererName": "flex",
    "$schema": "/schemas/FlexSchema.json",
    "disabledRendererPlugin": false,
    "name": "Left One Right Two",
    "order": 304,
    "isBaseComponent": false,
    "icon": "fa fa-columns",
    "pluginIcon": "layout-1-2-plugin",
    "description": "Common layout: Left One Right Two layout (a layout container based on CSS Flex).",
    "docLink": "/amis/zh-CN/components/flex",
    "tags": [
      "Common Layout"
    ],
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
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "First Column",
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
          "tpl": "Second Column",
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
          "tpl": "Third Column",
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
    "panelTitle": "Layout Container",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "Child Node Collection"
      }
    ]
  },
  {
    "rendererName": "flex",
    "$schema": "/schemas/FlexSchema.json",
    "disabledRendererPlugin": false,
    "name": "Two with One",
    "order": 305,
    "isBaseComponent": false,
    "icon": "fa fa-columns",
    "pluginIcon": "layout-2with1-plugin",
    "description": "Common layout: Two with One layout (a layout container based on CSS Flex).",
    "docLink": "/amis/zh-CN/components/flex",
    "tags": [
      "Common Layout"
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
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "First Column",
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
          "tpl": "Second Column",
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
          "tpl": "Third Column",
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
    "panelTitle": "Layout Container",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "Child Node Collection"
      }
    ]
  },
  {
    "rendererName": "flex",
    "$schema": "/schemas/FlexSchema.json",
    "disabledRendererPlugin": false,
    "name": "Left Two Right One",
    "order": 306,
    "isBaseComponent": false,
    "icon": "fa fa-columns",
    "pluginIcon": "layout-2-1-plugin",
    "description": "Common layout: Left Two Right One layout (a layout container based on CSS Flex).",
    "docLink": "/amis/zh-CN/components/flex",
    "tags": [
      "Common Layout"
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
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "First Column",
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
          "tpl": "Second Column",
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
          "tpl": "Third Column",
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
    "panelTitle": "Layout Container",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "Child Node Collection"
      }
    ]
  },



  {
    "rendererName": "flex",
    "$schema": "/schemas/FlexSchema.json",
    "disabledRendererPlugin": false,
    "name": "Classic Layout",
    "order": 307,
    "isBaseComponent": false,
    "icon": "fa fa-columns",
    "pluginIcon": "layout-3-1-plugin",
    "description": "Common layout: Classic layout (a layout container based on CSS Flex).",
    "docLink": "/amis/en-US/components/flex",
    "tags": [
      "Common Layout"
    ],
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
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "First Column",
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
          "tpl": "Second Column",
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
          "tpl": "Third Column",
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
    "panelTitle": "Layout Container",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "Child Node Collection"
      }
    ]
  },
  {
    "rendererName": "flex",
    "$schema": "/schemas/FlexSchema.json",
    "disabledRendererPlugin": false,
    "name": "Y-axis Scroll Container",
    "order": 504,
    "isBaseComponent": false,
    "icon": "fa fa-columns",
    "pluginIcon": "layout-3row-plugin",
    "description": "Y-axis scroll container: A layout container based on CSS Flex.",
    "docLink": "/amis/en-US/components/flex",
    "tags": [
      "Layout Container"
    ],
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
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "First Column",
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
          "tpl": "Second Column",
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
          "tpl": "Third Column",
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
    "panelTitle": "Layout Container",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "Child Node Collection"
      }
    ]
  },
  {
    "rendererName": "flex",
    "$schema": "/schemas/FlexSchema.json",
    "disabledRendererPlugin": false,
    "name": "X-axis Scroll Container",
    "order": 505,
    "isBaseComponent": false,
    "icon": "fa fa-columns",
    "pluginIcon": "layout-3cols-plugin",
    "description": "X-axis scroll container: A layout container based on CSS Flex.",
    "docLink": "/amis/en-US/components/flex",
    "tags": [
      "Layout Container"
    ],
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
    "previewSchema": {
      "type": "flex",
      "items": [
        {
          "type": "tpl",
          "tpl": "First Column",
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
          "tpl": "Second Column",
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
          "tpl": "Third Column",
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
    "panelTitle": "Layout Container",
    "panelJustify": true,
    "regions": [
      {
        "key": "items",
        "label": "Child Node Collection"
      }
    ]
  }
]

export const pluginEvents = {
  "error": [
  ],
  "flex": [
  ],
  "grid": [
  ],
  "container": [
    {
      "eventName": "click",
      "eventLabel": "Click",
      "description": "Triggered on click",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseenter",
      "eventLabel": "Mouse Enter",
      "description": "Triggered on mouse enter",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseleave",
      "eventLabel": "Mouse Leave",
      "description": "Triggered on mouse leave",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "collapse-group": [
    {
      "eventName": "change",
      "eventLabel": "Collapse State Change",
      "description": "Triggered when the collapse panel state changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "title": "Data",
              "type": "object",
              "properties": {
                "activeKeys": {
                  "type": "array",
                  "title": "Current Expanded Index List"
                },
                "collapseId": {
                  "type": "string",
                  "title": "Collapser Index"
                },
                "collapsed": {
                  "type": "boolean",
                  "title": "Collapser State"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "panel": [
  ],
  "tabs": [
    {
      "eventName": "change",
      "eventLabel": "Tab Switch",
      "description": "Tab switch",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Tab Index"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "switch-container": [
    {
      "eventName": "click",
      "eventLabel": "Click",
      "description": "Triggered on click",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseenter",
      "eventLabel": "Mouse Enter",
      "description": "Triggered on mouse enter",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseleave",
      "eventLabel": "Mouse Leave",
      "description": "Triggered on mouse leave",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "crud": [
    {
      "eventName": "fetchInited",
      "eventLabel": "Data Fetch Initialized",
      "description": "Triggered when remote data fetch is completed",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "responseData": {
                  "type": "object",
                  "title": "Response Data"
                },
                "responseStatus": {
                  "type": "number",
                  "title": "Response Status (0 indicates success)"
                },
                "responseMsg": {
                  "type": "string",
                  "title": "Response Message"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "selectedChange",
      "eventLabel": "Table Item Selection",
      "description": "Manual table item selection event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "selectedItems": {
                  "type": "array",
                  "title": "Selected Row Records"
                },
                "unSelectedItems": {
                  "type": "array",
                  "title": "Unselected Row Records"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "columnSort",
      "eventLabel": "Column Sort",
      "description": "Column sort event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "orderBy": {
                  "type": "string",
                  "title": "Column Name"
                },
                "orderDir": {
                  "type": "string",
                  "title": "Sort Value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "columnFilter",
      "eventLabel": "Column Filter",
      "description": "Column filter event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "filterName": {
                  "type": "string",
                  "title": "Column Name"
                },
                "filterValue": {
                  "type": "string",
                  "title": "Filter Value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "columnSearch",
      "eventLabel": "Column Search",
      "description": "Column search event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "searchName": {
                  "type": "string",
                  "title": "Column Name"
                },
                "searchValue": {
                  "type": "object",
                  "title": "Search Value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "orderChange",
      "eventLabel": "Row Order Change",
      "description": "Manual row order change event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "movedItems": {
                  "type": "array",
                  "title": "Sorted Records"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "columnToggled",
      "eventLabel": "Column Visibility Change",
      "description": "Custom column event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "columns": {
                  "type": "array",
                  "title": "Current Visible Column Configuration"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "rowClick",
      "eventLabel": "Row Click",
      "description": "Row click event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Current Row Record"
                },
                "index": {
                  "type": "number",
                  "title": "Current Row Index"
                },
                "indexPath": {
                  "type": "number",
                  "title": "Row Index Path"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "rowMouseEnter",
      "eventLabel": "Mouse Enter Row",
      "description": "Triggered on mouse enter row",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Current Row Record"
                },
                "index": {
                  "type": "number",
                  "title": "Current Row Index"
                },
                "indexPath": {
                  "type": "number",
                  "title": "Row Index Path"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "rowMouseLeave",
      "eventLabel": "Mouse Leave Row",
      "description": "Triggered on mouse leave row",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Current Row Record"
                },
                "index": {
                  "type": "number",
                  "title": "Current Row Index"
                },
                "indexPath": {
                  "type": "number",
                  "title": "Row Index Path"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "table2": [
    {
      "eventName": "selectedChange",
      "eventLabel": "Table Item Selection",
      "description": "Manual table item selection event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "selectedItems": {
                  "type": "array",
                  "title": "Selected Row Records"
                },
                "unSelectedItems": {
                  "type": "array",
                  "title": "Unselected Row Records"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "columnSort",
      "eventLabel": "Column Sort",
      "description": "Column sort event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "orderBy": {
                  "type": "string",
                  "title": "Column Name"
                },
                "orderDir": {
                  "type": "string",
                  "title": "Sort Value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "columnFilter",
      "eventLabel": "Column Filter",
      "description": "Column filter event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "filterName": {
                  "type": "string",
                  "title": "Column Name"
                },
                "filterValue": {
                  "type": "string",
                  "title": "Filter Value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "columnSearch",
      "eventLabel": "Column Search",
      "description": "Column search event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "searchName": {
                  "type": "string",
                  "title": "Column Name"
                },
                "searchValue": {
                  "type": "object",
                  "title": "Search Value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "orderChange",
      "eventLabel": "Row Order Change",
      "description": "Manual row order change event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "movedItems": {
                  "type": "array",
                  "title": "Sorted Records"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "columnToggled",
      "eventLabel": "Column Visibility Change",
      "description": "Custom column event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "columns": {
                  "type": "array",
                  "title": "Current Visible Column Configuration"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "rowClick",
      "eventLabel": "Row Click",
      "description": "Row click event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Current Row Record"
                },
                "index": {
                  "type": "number",
                  "title": "Current Row Index"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "rowDbClick",
      "eventLabel": "Row Double Click",
      "description": "Row double click event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Current Row Record"
                },
                "index": {
                  "type": "number",
                  "title": "Current Row Index"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "rowMouseEnter",
      "eventLabel": "Mouse Enter Row",
      "description": "Triggered on mouse enter row",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Current Row Record"
                },
                "index": {
                  "type": "number",
                  "title": "Current Row Index"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "rowMouseLeave",
      "eventLabel": "Mouse Leave Row",
      "description": "Triggered on mouse leave row",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Current Row Record"
                },
                "index": {
                  "type": "number",
                  "title": "Current Row Index"
                }
              }
            }
          }
        }
      ]
    }
  ],


  "crud2": [
    "[Circular]",
    "[Circular]",
    "[Circular]",
    "[Circular]",
    "[Circular]",
    "[Circular]",
    "[Circular]",
    "[Circular]",
    "[Circular]",
    "[Circular]"
  ],
  "form": [
    {
      "eventName": "inited",
      "eventLabel": "Initialization data interface request completed",
      "description": "Triggered when the remote initialization data interface request is completed",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "responseData": {
                  "type": "object",
                  "title": "Response data"
                },
                "responseStatus": {
                  "type": "number",
                  "title": "Response status (0 indicates success)"
                },
                "responseMsg": {
                  "type": "string",
                  "title": "Response message"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "change",
      "eventLabel": "Value changed",
      "description": "Triggered when the form value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current form data, can be accessed using .fieldName"
            }
          }
        }
      ]
    },
    {
      "eventName": "formItemValidateSucc",
      "eventLabel": "Form item validation succeeded",
      "description": "Triggered after form item validation succeeds",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current form data, can be accessed using .fieldName"
            }
          }
        }
      ]
    },
    {
      "eventName": "formItemValidateError",
      "eventLabel": "Form item validation failed",
      "description": "Triggered after form item validation fails",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current form data, can be accessed using .fieldName"
            }
          }
        }
      ]
    },
    {
      "eventName": "validateSucc",
      "eventLabel": "Form validation succeeded",
      "description": "Triggered after form validation succeeds",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current form data, can be accessed using .fieldName"
            }
          }
        }
      ]
    },
    {
      "eventName": "validateError",
      "eventLabel": "Form validation failed",
      "description": "Triggered after form validation fails",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current form data, can be accessed using .fieldName"
            }
          }
        }
      ]
    },
    {
      "eventName": "submit",
      "eventLabel": "Form submission",
      "strongDesc": "After configuring this event, the default validation, submission to API or target, etc., will not be triggered during form submission. All actions need to be configured by yourself",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current form data, can be accessed using .fieldName"
            }
          }
        }
      ]
    },
    {
      "eventName": "submitSucc",
      "eventLabel": "Submission succeeded",
      "description": "Triggered after form submission succeeds. If the event source is a button and the button type is 'submit', the submission success event will be triggered even if the current form is not configured with a 'save interface'",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "result": {
                  "type": "object",
                  "title": "Data returned after the save interface request succeeds"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "submitFail",
      "eventLabel": "Submission failed",
      "description": "Triggered after the form submission request fails",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "error": {
                  "type": "object",
                  "title": "Error information returned after the save interface request fails"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "asyncApiFinished",
      "eventLabel": "Remote request polling ended",
      "description": "Triggered after asyncApi remote request polling ends",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current data domain, can be accessed using .fieldName"
            }
          }
        }
      ]
    }
  ],
  "service": [
    {
      "eventName": "init",
      "eventLabel": "Initialization",
      "description": "Triggered when the component instance is created and inserted into the DOM",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current data domain, can be accessed using .fieldName"
            }
          }
        }
      ]
    },
    {
      "eventName": "fetchInited",
      "eventLabel": "Initialization data interface request completed",
      "description": "Triggered when the remote initialization data interface request is completed",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "responseData": {
                  "type": "object",
                  "title": "Response data"
                },
                "responseStatus": {
                  "type": "number",
                  "title": "Response status (0 indicates success)"
                },
                "responseMsg": {
                  "type": "string",
                  "title": "Response message"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "fetchSchemaInited",
      "eventLabel": "Initialization Schema interface request completed",
      "description": "Triggered when the remote initialization Schema interface request is completed",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "responseData": {
                  "type": "object",
                  "title": "Response data"
                },
                "responseStatus": {
                  "type": "number",
                  "title": "Response status (0 indicates success)"
                },
                "responseMsg": {
                  "type": "string",
                  "title": "Response message"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-text": [
    {
      "eventName": "change",
      "eventLabel": "Value changed",
      "description": "Input box content changed"
    },
    {
      "eventName": "focus",
      "eventLabel": "Gained focus",
      "description": "Input box gained focus"
    },
    {
      "eventName": "blur",
      "eventLabel": "Lost focus",
      "description": "Input box lost focus"
    }
  ],
  "textarea": [
    {
      "eventName": "change",
      "eventLabel": "Value changed",
      "description": "Triggered when the input box value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current text content"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Gained focus",
      "description": "Triggered when the input box gains focus",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current text content"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Lost focus",
      "description": "Triggered when the input box loses focus",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current text content"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-number": [
    {
      "eventName": "change",
      "eventLabel": "Value changed",
      "description": "Value changed",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "number",
                  "title": "Current value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Gained focus",
      "description": "Number box gained focus",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "number",
                  "title": "Current value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Lost focus",
      "description": "Number box lost focus",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "number",
                  "title": "Current value"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "nested-select": [
    {
      "eventName": "change",
      "eventLabel": "Value changed",
      "description": "Triggered when the selected value changes"
    },
    {
      "eventName": "focus",
      "eventLabel": "Gained focus",
      "description": "Triggered when the input box gains focus"
    },
    {
      "eventName": "blur",
      "eventLabel": "Lost focus",
      "description": "Triggered when the input box loses focus"
    }
  ],
  "chained-select": [
    {
      "eventName": "change",
      "eventLabel": "Value changed",
      "description": "Triggered when the selected value changes"
    }
  ],
  "dropdown-button": [
  ],
  "checkboxes": [
    {
      "eventName": "change",
      "eventLabel": "Value changed",
      "description": "Triggered when the selected value changes"
    },
    {
      "eventName": "addConfirm",
      "eventLabel": "Confirm addition",
      "description": "Triggered when addition is submitted"
    },
    {
      "eventName": "editConfirm",
      "eventLabel": "Confirm edit",
      "description": "Triggered when edit is submitted"
    },
    {
      "eventName": "deleteConfirm",
      "eventLabel": "Confirm deletion",
      "description": "Triggered when deletion is submitted"
    }
  ],
  "radios": [
    {
      "eventName": "change",
      "eventLabel": "Value changed",
      "description": "Triggered when the selected value changes"
    }
  ],
  "checkbox": [
    {
      "eventName": "change",
      "eventLabel": "Value changed",
      "description": "Triggered when the selected state changes"
    }
  ],
  "input-date": [
    {
      "eventName": "change",
      "eventLabel": "Value changed",
      "description": "Triggered when the time value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Gained focus",
      "description": "Triggered when the input box gains focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Lost focus",
      "description": "Triggered when the input box loses focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current date"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-date-range": [
    {
      "eventName": "change",
      "eventLabel": "Value changed",
      "description": "Triggered when the time value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current time range"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Gained focus",
      "description": "Triggered when the input box gains focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current time range"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Lost focus",
      "description": "Triggered when the input box loses focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current time range"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-file": [
    {
      "eventName": "change",
      "eventLabel": "Value changed",
      "description": "Triggered when the upload file value changes (also triggered on upload failure)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "file": {
                  "type": "object",
                  "title": "Uploaded file"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "remove",
      "eventLabel": "Remove file",
      "description": "Triggered when a file is removed",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Removed file"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "success",
      "eventLabel": "Upload succeeded",
      "description": "Triggered when a file is uploaded successfully",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Uploaded file"
                },
                "result": {
                  "type": "object",
                  "title": "Response data returned after the remote upload request succeeds"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "fail",
      "eventLabel": "Upload failed",
      "description": "Triggered when a file upload fails",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Uploaded file"
                },
                "error": {
                  "type": "object",
                  "title": "Error information returned after the remote upload request fails"
                }
              }
            }
          }
        }
      ]
    }
  ],




  "input-image": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the file value changes (also triggers on upload failure)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "file": {
                  "type": "object",
                  "title": "Uploaded File"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "remove",
      "eventLabel": "Remove File",
      "description": "Triggered when a file is removed",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Removed File"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "success",
      "eventLabel": "Upload Success",
      "description": "Triggered when a file is successfully uploaded",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Uploaded File"
                },
                "result": {
                  "type": "object",
                  "title": "Response Data from Successful Remote Upload"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "fail",
      "eventLabel": "Upload Failure",
      "description": "Triggered when a file upload fails",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Uploaded File"
                },
                "error": {
                  "type": "object",
                  "title": "Error Information from Failed Remote Upload"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-excel": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered after Excel upload and parsing is complete",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Parsed Excel Data"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-tag": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Selected value change"
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Focus"
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Blur"
    }
  ],
  "list-select": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the selected value changes"
    }
  ],
  "button-group-select": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the selected value changes"
    }
  ],
  "button-toolbar": [
  ],
  "picker": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the selected state changes"
    },
    {
      "eventName": "itemClick",
      "eventLabel": "Option Click",
      "description": "Triggered when an option is clicked"
    }
  ],
  "switch": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the switch value changes"
    }
  ],
  "input-range": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the slider value changes"
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the input box gains focus if showInput is true"
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the input box loses focus if showInput is true"
    }
  ],
  "input-rating": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the rating value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "number",
                  "title": "Current Score"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-city": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Selected value change"
    }
  ],
  "transfer": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the input box loses focus"
    },
    {
      "eventName": "selectAll",
      "eventLabel": "Select All",
      "description": "Select all options"
    }
  ],
  "transfer-picker": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the input box loses focus"
    },
    {
      "eventName": "selectAll",
      "eventLabel": "Select All",
      "description": "Select all options"
    }
  ],
  "tabs-transfer": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the selected value changes"
    },
    {
      "eventName": "tab-change",
      "eventLabel": "Tab Switch",
      "description": "Triggered when the tab is switched",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "key": {
                  "type": "string",
                  "title": "Activated Index"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-color": [
  ],
  "condition-builder": [
  ],
  "fieldset": [
  ],
  "combo": [
    {
      "eventName": "add",
      "eventLabel": "Add",
      "description": "Triggered when a combo item is added"
    },
    {
      "eventName": "delete",
      "eventLabel": "Delete",
      "description": "Delete combo item"
    },
    {
      "eventName": "dragEnd",
      "eventLabel": "Drag End",
      "description": "Triggered when a combo item drag ends and the position changes"
    },
    {
      "eventName": "tabsChange",
      "eventLabel": "Switch Tab",
      "description": "Triggered when switching tabs if tabsMode is true"
    }
  ],
  "input-group": [
  ],
  "input-table": [
    {
      "eventName": "add",
      "eventLabel": "Add Row",
      "description": "Triggered when the add button at the bottom left or the add button in the right operation column of a row is clicked"
    },
    {
      "eventName": "addConfirm",
      "eventLabel": "Confirm Add",
      "description": "Triggered after clicking the add button, entering data, and clicking the save button in confirmation mode"
    },
    {
      "eventName": "addSuccess",
      "eventLabel": "Add Success",
      "description": "Triggered when successfully added after clicking save in confirmation mode and configuring the add interface"
    },
    {
      "eventName": "addFail",
      "eventLabel": "Add Failure",
      "description": "Triggered when the interface call fails after clicking save in confirmation mode and configuring the add interface"
    },
    {
      "eventName": "edit",
      "eventLabel": "Edit Row",
      "description": "Triggered when the edit button in the right operation column of a row is clicked"
    },
    {
      "eventName": "editConfirm",
      "eventLabel": "Confirm Edit",
      "description": "Triggered after clicking the edit button, entering data, and clicking the save button in confirmation mode"
    },
    {
      "eventName": "editSuccess",
      "eventLabel": "Edit Success",
      "description": "Triggered when successfully edited after clicking save in confirmation mode and configuring the edit interface"
    },
    {
      "eventName": "editFail",
      "eventLabel": "Edit Failure",
      "description": "Triggered when the interface call fails after clicking save in confirmation mode and configuring the edit interface"
    },
    {
      "eventName": "delete",
      "eventLabel": "Delete Row",
      "description": "Triggered when the delete button in the right operation column of a row is clicked"
    },
    {
      "eventName": "deleteSuccess",
      "eventLabel": "Delete Success",
      "description": "Triggered when the delete interface is configured and the interface call is successful"
    },
    {
      "eventName": "deleteFail",
      "eventLabel": "Delete Failure",
      "description": "Triggered when the delete interface is configured and the interface call fails"
    },
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the table data changes"
    },
    {
      "eventName": "orderChange",
      "eventLabel": "Row Order",
      "description": "Manual row order drag event"
    },
    {
      "eventName": "rowClick",
      "eventLabel": "Row Click",
      "description": "Row click event"
    },
    {
      "eventName": "rowDbClick",
      "eventLabel": "Row Double Click",
      "description": "Row double click event"
    },
    {
      "eventName": "rowMouseEnter",
      "eventLabel": "Mouse Enter Row Event",
      "description": "Triggered when the mouse enters the entire row"
    },
    {
      "eventName": "rowMouseLeave",
      "eventLabel": "Mouse Leave Row Event",
      "description": "Triggered when the mouse leaves the entire row"
    }
  ],
  "matrix-checkboxes": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Selected value change",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "array",
                  "title": "Selected Values"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-rich-text": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Input content change",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Rich Text Value"
                }
              },
              "description": "Current data field, can read the corresponding value through .fieldName"
            }
          }
        }
      ]
    }
  ],
  "diff-editor": [
    {
      "eventName": "change",
      "eventLabel": "Code Change",
      "description": "Triggered when the code changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Code Content"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the right input box gains focus",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Code Content"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the right input box loses focus",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Code Content"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "editor": [
    {
      "eventName": "change",
      "eventLabel": "Code Change",
      "description": "Triggered when the code changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Code Content"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the input box gains focus",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Code Content"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the input box loses focus",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Code Content"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "search-box": [
    {
      "eventName": "search",
      "eventLabel": "Click Search",
      "description": "Triggered when the search icon is clicked",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Search Value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the input box value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Search Value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the input box gains focus",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Search Value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the input box loses focus",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Search Value"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-kv": [
    {
      "eventName": "add",
      "eventLabel": "Add",
      "description": "Triggered when a combo item is added",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Combo Item Value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "delete",
      "eventLabel": "Delete",
      "description": "Delete combo item",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "key": {
                  "type": "string",
                  "title": "Deleted Index"
                },
                "value": {
                  "type": "string",
                  "title": "Combo Item Value"
                },
                "item": {
                  "type": "object",
                  "title": "Deleted Item"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-repeat": [
  ],
  "uuid": [
  ],
  "location-picker": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the selected value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "object",
                  "title": "Selected Value",
                  "properties": {
                    "address": {
                      "type": "string",
                      "title": "Address"
                    },
                    "lng": {
                      "type": "number",
                      "title": "Longitude"
                    },
                    "lat": {
                      "type": "number",
                      "title": "Latitude"
                    },
                    "vendor": {
                      "type": "string",
                      "title": "Vendor"
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
  "input-sub-form": [
  ],



  "hidden": [
  ],
  "input-signature": [
  ],
  "static": [
    {
      "eventName": "click",
      "eventLabel": "Click",
      "description": "Triggered on click",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseenter",
      "eventLabel": "Mouse Enter",
      "description": "Triggered on mouse enter",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseleave",
      "eventLabel": "Mouse Leave",
      "description": "Triggered on mouse leave",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "button": [
    {
      "eventName": "click",
      "eventLabel": "Click",
      "description": "Triggered on click",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseenter",
      "eventLabel": "Mouse Enter",
      "description": "Triggered on mouse enter",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseleave",
      "eventLabel": "Mouse Leave",
      "description": "Triggered on mouse leave",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "button-group": [
  ],
  "nav": [
    {
      "eventName": "click",
      "eventLabel": "Menu Click",
      "description": "Triggered on menu click",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current data domain, values can be accessed via field names"
            }
          }
        }
      ]
    },
    {
      "eventName": "change",
      "eventLabel": "Menu Select",
      "description": "Triggered on menu select",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data"
            }
          }
        }
      ]
    },
    {
      "eventName": "toggled",
      "eventLabel": "Menu Expand",
      "description": "Triggered on menu expand",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data"
            }
          }
        }
      ]
    },
    {
      "eventName": "collapsed",
      "eventLabel": "Menu Collapse",
      "description": "Triggered on menu collapse",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data"
            }
          }
        }
      ]
    },
    {
      "eventName": "loaded",
      "eventLabel": "Data Loaded",
      "description": "Triggered after data is loaded",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data"
            }
          }
        }
      ]
    }
  ],
  "anchor-nav": [
  ],
  "tooltip-wrapper": [
  ],
  "alert": [
  ],
  "wizard": [
    {
      "eventName": "inited",
      "eventLabel": "Initialization Complete",
      "description": "Triggered when remote initialization data request is complete",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "responseData": {
                  "type": "object",
                  "title": "Response Data"
                },
                "responseStatus": {
                  "type": "number",
                  "title": "Response Status (0 indicates success)"
                },
                "responseMsg": {
                  "type": "string",
                  "title": "Response Message"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "finished",
      "eventLabel": "Click Complete",
      "description": "Triggered on final submission",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current data domain, values can be accessed via field names"
            }
          }
        }
      ]
    },
    {
      "eventName": "stepChange",
      "eventLabel": "Step Change",
      "description": "Triggered on step change",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "step": {
                  "type": "string",
                  "title": "Step Index"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered on form value change",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data"
            }
          }
        }
      ]
    },
    {
      "eventName": "submitSucc",
      "eventLabel": "Submit Success",
      "description": "Triggered on final submission success",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "result": {
                  "type": "object",
                  "title": "Data returned after successful submission"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "submitFail",
      "eventLabel": "Submit Failure",
      "description": "Triggered on final submission failure",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "error": {
                  "type": "object",
                  "title": "Error information returned after submission failure"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "stepSubmitSucc",
      "eventLabel": "Step Submit Success",
      "description": "Single step submission success"
    },
    {
      "eventName": "stepSubmitFail",
      "eventLabel": "Step Submit Failure",
      "description": "Single step submission failure",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "error": {
                  "type": "object",
                  "title": "Error information returned after single step submission failure"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "table-view": [
  ],
  "web-component": [
  ],
  "audio": [
  ],
  "video": [
  ],
  "custom": [
  ],
  "tasks": [
  ],
  "each": [
  ],
  "property": [
  ],
  "iframe": [
  ],
  "qrcode": [
  ],
  "tpl": [
    {
      "eventName": "click",
      "eventLabel": "Click",
      "description": "Triggered on click",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseenter",
      "eventLabel": "Mouse Enter",
      "description": "Triggered on mouse enter",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseleave",
      "eventLabel": "Mouse Leave",
      "description": "Triggered on mouse leave",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "icon": [
    {
      "eventName": "click",
      "eventLabel": "Click",
      "description": "Triggered on click",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseenter",
      "eventLabel": "Mouse Enter",
      "description": "Triggered on mouse enter",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseleave",
      "eventLabel": "Mouse Leave",
      "description": "Triggered on mouse leave",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "link": [
  ],
  "list": [
  ],
  "cards": [
  ],
  "mapping": [
  ],
  "avatar": [
    {
      "eventName": "click",
      "eventLabel": "Click",
      "description": "Triggered on click",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseenter",
      "eventLabel": "Mouse Enter",
      "description": "Triggered on mouse enter",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseleave",
      "eventLabel": "Mouse Leave",
      "description": "Triggered on mouse leave",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "card": [
  ],
  "card2": [
  ],
  "table": [
    {
      "eventName": "selectedChange",
      "eventLabel": "Table Item Selection",
      "description": "Manual table item selection event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "selectedItems": {
                  "type": "array",
                  "title": "Selected Row Records"
                },
                "unSelectedItems": {
                  "type": "array",
                  "title": "Unselected Row Records"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "columnSort",
      "eventLabel": "Column Sort",
      "description": "Column sort click event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "orderBy": {
                  "type": "string",
                  "title": "Column Name"
                },
                "orderDir": {
                  "type": "string",
                  "title": "Sort Value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "columnFilter",
      "eventLabel": "Column Filter",
      "description": "Column filter click event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "filterName": {
                  "type": "string",
                  "title": "Column Name"
                },
                "filterValue": {
                  "type": "string",
                  "title": "Filter Value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "columnSearch",
      "eventLabel": "Column Search",
      "description": "Column search click event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "searchName": {
                  "type": "string",
                  "title": "Column Name"
                },
                "searchValue": {
                  "type": "object",
                  "title": "Search Value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "orderChange",
      "eventLabel": "Row Order",
      "description": "Manual row drag order event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "movedItems": {
                  "type": "array",
                  "title": "Sorted Records"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "columnToggled",
      "eventLabel": "Column Visibility Change",
      "description": "Custom column click event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "columns": {
                  "type": "array",
                  "title": "Current Displayed Column Configuration"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "rowClick",
      "eventLabel": "Row Click",
      "description": "Whole row click event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Current Row Record"
                },
                "index": {
                  "type": "number",
                  "title": "Current Row Index"
                },
                "indexPath": {
                  "type": "number",
                  "title": "Row Index Path"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "rowDbClick",
      "eventLabel": "Row Double Click",
      "description": "Whole row double click event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Current Row Record"
                },
                "index": {
                  "type": "number",
                  "title": "Current Row Index"
                },
                "indexPath": {
                  "type": "number",
                  "title": "Row Index Path"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "rowMouseEnter",
      "eventLabel": "Mouse Enter Row Event",
      "description": "Triggered on mouse enter whole row",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Current Row Record"
                },
                "index": {
                  "type": "number",
                  "title": "Current Row Index"
                },
                "indexPath": {
                  "type": "number",
                  "title": "Row Index Path"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "rowMouseLeave",
      "eventLabel": "Mouse Leave Row Event",
      "description": "Triggered on mouse leave whole row",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Current Row Record"
                },
                "index": {
                  "type": "number",
                  "title": "Current Row Index"
                },
                "indexPath": {
                  "type": "number",
                  "title": "Row Index Path"
                }
              }
            }
          }
        }
      ]
    }
  ],



  "cell-field": [
  ],
  "chart": [
    {
      "eventName": "init",
      "eventLabel": "Initialization",
      "description": "Triggered when the component instance is created and inserted into the DOM",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current data field, can read the corresponding value through .fieldName"
            }
          }
        }
      ]
    },
    {
      "eventName": "click",
      "eventLabel": "Mouse Click",
      "description": "Triggered when the mouse is clicked",
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
                  "title": "Component Type"
                },
                "seriesType": {
                  "type": "string",
                  "title": "Series Type"
                },
                "seriesIndex": {
                  "type": "number",
                  "title": "Series Index"
                },
                "seriesName": {
                  "type": "string",
                  "title": "Series Name"
                },
                "name": {
                  "type": "string",
                  "title": "Name"
                },
                "dataIndex": {
                  "type": "number",
                  "title": "Data Index"
                },
                "data": {
                  "type": "object",
                  "title": "Data"
                },
                "dataType": {
                  "type": "string",
                  "title": "Data Type"
                },
                "value": {
                  "type": "number",
                  "title": "Value"
                },
                "color": {
                  "type": "string",
                  "title": "Color"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseover",
      "eventLabel": "Mouse Hover",
      "description": "Triggered when the mouse hovers",
      "dataSchema": "[Circular]"
    },
    {
      "eventName": "legendselectchanged",
      "eventLabel": "Toggle Legend Selection State",
      "description": "Triggered when toggling the legend selection state",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "name": {
                  "type": "string",
                  "title": "Name"
                },
                "selected": {
                  "type": "object",
                  "title": "Selected"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "sparkline": [
  ],
  "carousel": [
  ],
  "image": [
    {
      "eventName": "click",
      "eventLabel": "Click",
      "description": "Triggered when clicked",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseenter",
      "eventLabel": "Mouse Enter",
      "description": "Triggered when the mouse enters",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseleave",
      "eventLabel": "Mouse Leave",
      "description": "Triggered when the mouse leaves",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "images": [
  ],
  "date": [
  ],
  "time": [
  ],
  "datetime": [
  ],
  "calendar": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the time value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "click",
      "eventLabel": "Click",
      "description": "Triggered when clicked",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseenter",
      "eventLabel": "Mouse Enter",
      "description": "Triggered when the mouse enters",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseleave",
      "eventLabel": "Mouse Leave",
      "description": "Triggered when the mouse leaves",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "tag": [
    {
      "eventName": "click",
      "eventLabel": "Click",
      "description": "Triggered when clicked",
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
                  "title": "Mouse Event Object"
                }
              }
            },
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "label": {
                  "type": "object",
                  "title": "Label Name"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseenter",
      "eventLabel": "Mouse Enter",
      "description": "Triggered when the mouse enters",
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
                  "title": "Mouse Event Object"
                }
              }
            },
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "label": {
                  "type": "object",
                  "title": "Label Name"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseleave",
      "eventLabel": "Mouse Leave",
      "description": "Triggered when the mouse leaves",
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
                  "title": "Mouse Event Object"
                }
              }
            },
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "label": {
                  "type": "object",
                  "title": "Label Name"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "close",
      "eventLabel": "Click to Close",
      "description": "Triggered when clicked to close",
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
                  "title": "Mouse Event Object"
                }
              }
            },
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "label": {
                  "type": "object",
                  "title": "Label Name"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "json": [
  ],
  "progress": [
  ],
  "status": [
  ],
  "steps": [
  ],
  "timeline": [
  ],
  "divider": [
  ],
  "code": [
  ],
  "markdown": [
  ],
  "collapse": [
    {
      "eventName": "change",
      "eventLabel": "Collapse State Change",
      "description": "Triggered when the collapse state changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "collapsed": {
                  "type": "boolean",
                  "title": "Collapse State"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "expand",
      "eventLabel": "Collapse Expanded",
      "description": "Triggered when the collapse state changes to expanded",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "collapsed": {
                  "type": "boolean",
                  "title": "Collapse State"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "collapse",
      "eventLabel": "Collapse Collapsed",
      "description": "Triggered when the collapse state changes to collapsed",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "collapsed": {
                  "type": "boolean",
                  "title": "Collapse State"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "office-viewer": [
  ],
  "pdf-viewer": [
  ],
  "log": [
  ],
  "action": [
  ],
  "input-array": [
  ],
  "control": [
  ],
  "input-datetime": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the time value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the input box gains focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the input box loses focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-datetime-range": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the time value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the input box gains focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the input box loses focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-email": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Input box content changes"
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Input box gains focus"
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Input box loses focus"
    }
  ],
  "formula": [
  ],
  "group": [
  ],
  "input-month": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the time value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the input box gains focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the input box loses focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    }
  ],








  "input-month-range": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the time value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the input box gains focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the input box loses focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-password": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Input box content changes"
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Input box gains focus"
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Input box loses focus"
    }
  ],
  "input-quarter": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the time value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the input box gains focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the input box loses focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-quarter-range": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the time value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the input box gains focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the input box loses focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-time": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the time value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the input box gains focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the input box loses focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-time-range": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the time value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the input box gains focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the input box loses focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-url": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Input box content changes"
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Input box gains focus"
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Input box loses focus"
    }
  ],
  "input-year": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the time value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the input box gains focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the input box loses focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-year-range": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the time value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the input box gains focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the input box loses focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "breadcrumb": [
  ],




  "dialog": [
    {
      "eventName": "confirm",
      "eventLabel": "Confirm",
      "description": "Triggered when the dialog confirm button is clicked",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current data domain, values can be accessed via .fieldName"
            }
          }
        }
      ]
    },
    {
      "eventName": "cancel",
      "eventLabel": "Cancel",
      "description": "Triggered when the dialog cancel button is clicked",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current data domain, values can be accessed via .fieldName"
            }
          }
        }
      ]
    }
  ],
  "drawer": [
    {
      "eventName": "confirm",
      "eventLabel": "Confirm",
      "description": "Triggered when the drawer confirm button is clicked",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current data domain, values can be accessed via .fieldName"
            }
          }
        }
      ]
    },
    {
      "eventName": "cancel",
      "eventLabel": "Cancel",
      "description": "Triggered when the drawer cancel button is clicked",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current data domain, values can be accessed via .fieldName"
            }
          }
        }
      ]
    }
  ],
  "hbox": [
  ],
  "list-item": [
  ],
  "operation": [
  ],
  "page": [
    {
      "eventName": "init",
      "eventLabel": "Initialize",
      "description": "Triggered when the component instance is created and inserted into the DOM",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current data domain, values can be accessed via .fieldName"
            }
          }
        }
      ]
    },
    {
      "eventName": "inited",
      "eventLabel": "Initialization Data Interface Request Completed",
      "description": "Triggered when the remote initialization data interface request is completed",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "responseData": {
                  "type": "object",
                  "title": "Response Data"
                },
                "responseStatus": {
                  "type": "number",
                  "title": "Response Status (0 indicates success)"
                },
                "responseMsg": {
                  "type": "string",
                  "title": "Response Message"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "pullRefresh",
      "eventLabel": "Pull Refresh",
      "description": "Triggered after pulling down and releasing when pull-to-refresh is enabled (only for mobile)"
    }
  ],
  "pagination": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when input content changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "page": {
                  "type": "number",
                  "title": "Current Page Number"
                },
                "perPage": {
                  "type": "number",
                  "title": "Number of Records Displayed Per Page"
                }
              },
              "description": "Current data domain, values can be accessed via .fieldName"
            }
          }
        }
      ]
    }
  ],
  "plain": [
    {
      "eventName": "click",
      "eventLabel": "Click",
      "description": "Triggered when clicked",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseenter",
      "eventLabel": "Mouse Enter",
      "description": "Triggered when the mouse enters",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseleave",
      "eventLabel": "Mouse Leave",
      "description": "Triggered when the mouse leaves",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "reset": [
    {
      "eventName": "click",
      "eventLabel": "Click",
      "description": "Triggered when clicked",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseenter",
      "eventLabel": "Mouse Enter",
      "description": "Triggered when the mouse enters",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseleave",
      "eventLabel": "Mouse Leave",
      "description": "Triggered when the mouse leaves",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "submit": [
    {
      "eventName": "click",
      "eventLabel": "Click",
      "description": "Triggered when clicked",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseenter",
      "eventLabel": "Mouse Enter",
      "description": "Triggered when the mouse enters",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseleave",
      "eventLabel": "Mouse Leave",
      "description": "Triggered when the mouse leaves",
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
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "wrapper": [
  ],
  "column-toggler": [
  ],
  "my-renderer": [
  ]
}

export const pluginActions = {
  "error": [
  ],
  "flex": [
  ],
  "grid": [
  ],
  "container": [
  ],
  "collapse-group": [
  ],
  "panel": [
  ],
  "tabs": [
    {
      "actionType": "changeActiveKey",
      "actionLabel": "Activate Specified Tab",
      "description": "Modify the key of the currently active tab item",
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
            "label": "Active Item",
            "variables": "${variables}",
            "size": "lg",
            "mode": "horizontal"
          }
        ]
      }
    }
  ],
  "switch-container": [
  ],
  "crud": [
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionLabel": "Assign Variable",
      "actionType": "setValue",
      "description": "Update list records"
    }
  ],
  "table2": [
    {
      "actionType": "select",
      "actionLabel": "Set Selected Item",
      "description": "Set the selected item of the table",
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
            "label": "Selected Item",
            "variables": "${variables}",
            "size": "lg",
            "mode": "horizontal"
          }
        ]
      }
    },
    {
      "actionType": "selectAll",
      "actionLabel": "Select All",
      "description": "Select all items in the table"
    },
    {
      "actionType": "clearAll",
      "actionLabel": "Clear All Selections",
      "description": "Clear all selected items in the table"
    }
  ],
  "crud2": [
    {
      "actionType": "search",
      "actionLabel": "Data Query",
      "description": "Complete list data query using specified conditions",
      "schema": {
        "type": "combo",
        "name": "args",
        "multiple": false,
        "strictMode": false,
        "items": [
          {
            "name": "query",
            "label": "Query Condition",
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
      "actionLabel": "Load More",
      "description": "Load more data into the list container"
    },
    {
      "actionType": "startAutoRefresh",
      "actionLabel": "Start Auto Refresh",
      "description": "Start auto refresh"
    },
    {
      "actionType": "stopAutoRefresh",
      "actionLabel": "Stop Auto Refresh",
      "description": "Stop auto refresh"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    "[Circular]",
    "[Circular]",
    "[Circular]"
  ],
  "form": [
    {
      "actionLabel": "Submit Form",
      "actionType": "submit",
      "description": "Trigger form submission"
    },
    {
      "actionLabel": "Reset Form",
      "actionType": "reset",
      "description": "Trigger form reset"
    },
    {
      "actionLabel": "Clear Form",
      "actionType": "clear",
      "description": "Trigger form clear"
    },
    {
      "actionLabel": "Validate Form",
      "actionType": "validate",
      "description": "Trigger form validation"
    },
    {
      "actionLabel": "Reload",
      "actionType": "reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionLabel": "Assign Variable",
      "actionType": "setValue",
      "description": "Trigger component data update"
    }
  ],
  "service": [
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "rebuild",
      "actionLabel": "Rebuild",
      "description": "Trigger schema API refresh and rebuild schema"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Variable",
      "description": "Update data domain data"
    }
  ],
  "input-text": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "textarea": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "input-number": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear number box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to default value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "select": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "nested-select": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "chained-select": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "dropdown-button": [
  ],
  "checkboxes": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "radios": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "checkbox": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "input-date": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "input-date-range": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "input-file": [
    {
      "actionType": "clear",
      "actionLabel": "Clear Data",
      "description": "Clear selected file"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "input-image": [
    {
      "actionType": "clear",
      "actionLabel": "Clear Data",
      "description": "Clear selected file"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "input-excel": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "input-tree": [
    {
      "actionType": "expand",
      "actionLabel": "Expand",
      "description": "Expand specified level",
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
            "label": "Expand Level",
            "variables": "${variables}",
            "size": "lg",
            "mode": "horizontal"
          }
        ]
      }
    },
    {
      "actionType": "collapse",
      "actionLabel": "Collapse",
      "description": "Collapse tree nodes"
    },
    {
      "actionType": "add",
      "actionLabel": "Add",
      "description": "Add data item",
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
                "label": "Data Item",
                "name": "item",
                "mode": "horizontal",
                "inputClassName": "ml-2",
                "size": "lg",
                "required": true,
                "draggable": false,
                "valueType": "ae-formulaControl",
                "keyPlaceholder": "Key of the property in Option",
                "value": {
                  "label": "",
                  "value": ""
                }
              },
              {
                "type": "ae-formulaControl",
                "variableMode": "tree",
                "label": "Value of Parent Data Item",
                "name": "parentValue",
                "mode": "horizontal",
                "inputClassName": "ml-2",
                "size": "lg",
                "variables": "${variables}",
                "inputMode": "input-group",
                "placeholder": "Please enter the value of the parent data item valueField"
              }
            ]
          }
        ]
      }
    },
    {
      "actionType": "edit",
      "actionLabel": "Edit",
      "description": "Edit data item",
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
                "label": "Data Item",
                "name": "item",
                "mode": "horizontal",
                "inputClassName": "ml-2",
                "size": "lg",
                "required": true,
                "draggable": false,
                "valueType": "ae-formulaControl",
                "keyPlaceholder": "Key of the property in Option",
                "value": {
                  "label": "",
                  "value": ""
                }
              },
              {
                "type": "ae-formulaControl",
                "variableMode": "tree",
                "label": "Value of Data Item to Edit",
                "name": "originValue",
                "mode": "horizontal",
                "inputClassName": "ml-2",
                "required": true,
                "size": "lg",
                "variables": "${variables}",
                "inputMode": "input-group",
                "placeholder": "Please enter the valueField value of the data item before editing"
              }
            ]
          }
        ]
      }
    },
    {
      "actionType": "delete",
      "actionLabel": "Delete",
      "description": "Delete data item",
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
            "label": "Value of Data Item to Delete",
            "name": "value",
            "mode": "horizontal",
            "inputClassName": "ml-2",
            "required": true,
            "size": "lg",
            "variables": "${variables}",
            "inputMode": "input-group",
            "placeholder": "Please enter the valueField value of the item to delete"
          }
        ]
      }
    },
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear data"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset data"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "input-tag": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to default value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "list-select": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "button-group-select": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "button-toolbar": [
  ],
  "picker": [
  ],
  "switch": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "input-range": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],









  "input-rating": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear rating value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Set Value",
      "description": "Trigger component data update"
    }
  ],
  "input-city": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to default value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Set Value",
      "description": "Trigger component data update"
    }
  ],
  "transfer": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset selected content"
    },
    {
      "actionType": "selectAll",
      "actionLabel": "Select All",
      "description": "Select all options"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Set Value",
      "description": "Trigger component data update, multiple values separated by ','"
    }
  ],
  "transfer-picker": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset selected content"
    },
    {
      "actionType": "selectAll",
      "actionLabel": "Select All",
      "description": "Select all options"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Set Value",
      "description": "Trigger component data update, multiple values separated by ','"
    }
  ],
  "tabs-transfer": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset selected content"
    },
    {
      "actionType": "changeTabKey",
      "actionLabel": "Change Selected Tab",
      "description": "Change the currently selected tab to choose other options"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Set Value",
      "description": "Trigger component data update"
    }
  ],
  "input-color": [
  ],
  "condition-builder": [
  ],
  "fieldset": [
  ],
  "combo": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "addItem",
      "actionLabel": "Add Item",
      "description": "Add a new item",
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
            "label": "Add Item",
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
                "placeholder": "Variable Name",
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
      "actionLabel": "Set Value",
      "description": "Trigger component data update"
    }
  ],
  "input-group": [
  ],
  "input-table": [
    {
      "actionType": "setValue",
      "actionLabel": "Set Value",
      "description": "Trigger component data update"
    },
    {
      "actionType": "addItem",
      "actionLabel": "Add Row",
      "description": "Add row data",
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
                "label": "Insert Position",
                "size": "lg",
                "placeholder": "Enter row number, leave empty to insert at the end"
              },
              {
                "type": "combo",
                "name": "value",
                "label": "Data Setting",
                "multiple": true,
                "removable": true,
                "required": true,
                "addable": true,
                "strictMode": false,
                "canAccessSuperData": true,
                "mode": "horizontal",
                "size": "lg",
                "addButtonText": "Add a Row",
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
                    "addButtonText": "Add Field",
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
      "actionLabel": "Delete Row",
      "description": "Delete a row of data",
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
                "label": "Delete Method",
                "horizontal": {
                  "leftFixed": 4
                },
                "options": [
                  {
                    "label": "Specify Row Number",
                    "value": "rowIndex"
                  },
                  {
                    "label": "Condition Expression",
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
                "label": "Delete Range",
                "size": "lg",
                "placeholder": "Enter row number, separate multiple with commas",
                "hiddenOn": "this.__deleteType !== \"rowIndex\""
              },
              {
                "type": "ae-formulaControl",
                "variableMode": "tree",
                "name": "condition",
                "variables": "${variables}",
                "label": "Delete Condition",
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
      "actionLabel": "Clear",
      "description": "Clear component data"
    },
    {
      "actionType": "initDrag",
      "actionLabel": "Enable Sorting",
      "description": "Enable table drag sorting feature"
    },
    {
      "actionType": "cancelDrag",
      "actionLabel": "Cancel Sorting",
      "description": "Cancel table drag sorting feature"
    }
  ],
  "matrix-checkboxes": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to default value"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Set Value",
      "description": "Trigger component data update"
    }
  ],
  "input-rich-text": [
  ],
  "diff-editor": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "focus",
      "actionLabel": "Focus",
      "description": "Focus on the right edit panel"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Set Value",
      "description": "Trigger component data update"
    }
  ],
  "editor": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "focus",
      "actionLabel": "Focus",
      "description": "Input box focus"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Set Value",
      "description": "Trigger component data update"
    }
  ],
  "search-box": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Update Data",
      "description": "Update data"
    }
  ],
  "input-kv": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Set Value",
      "description": "Trigger component data update"
    }
  ],
  "input-repeat": [
  ],
  "uuid": [
  ],
  "location-picker": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Set Value",
      "description": "Trigger component data update"
    }
  ],
  "input-sub-form": [
  ],
  "hidden": [
  ],
  "input-signature": [
  ],
  "static": [
  ],
  "button": [
  ],
  "button-group": [
  ],
  "nav": [
    {
      "actionType": "updateItems",
      "actionLabel": "Update Menu Items",
      "description": "Trigger component to update menu items"
    },
    {
      "actionType": "collapse",
      "actionLabel": "Menu Collapse",
      "description": "Trigger component collapse and expand"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    }
  ],
  "anchor-nav": [
  ],
  "tooltip-wrapper": [
  ],
  "alert": [
  ],
  "wizard": [
    {
      "actionType": "submit",
      "actionLabel": "Submit All",
      "description": "Submit all data"
    },
    {
      "actionType": "stepSubmit",
      "actionLabel": "Step Submit",
      "description": "Submit current step data"
    },
    {
      "actionType": "prev",
      "actionLabel": "Previous Step",
      "description": "Go to previous step"
    },
    {
      "actionType": "next",
      "actionLabel": "Next Step",
      "description": "Submit current step data"
    },
    {
      "actionType": "goto-step",
      "actionLabel": "Go to Step",
      "description": "Switch to specified step",
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
            "label": "Target Step",
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
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Set Variable",
      "description": "Trigger component data update"
    }
  ],
  "table-view": [
  ],
  "web-component": [
  ],
  "audio": [
  ],
  "video": [
  ],
  "custom": [
  ],
  "tasks": [
  ],
  "each": [
  ],
  "property": [
  ],
  "iframe": [
  ],
  "qrcode": [
    {
      "actionType": "saveAs",
      "actionLabel": "Download",
      "description": "Trigger QR code download"
    }
  ],
  "tpl": [
  ],
  "icon": [
  ],
  "link": [
  ],
  "list": [
  ],
  "cards": [
  ],
  "mapping": [
  ],
  "avatar": [
  ],
  "card": [
  ],
  "card2": [
  ],









  "table": [
    {
      "actionType": "select",
      "actionLabel": "Set Selected Items",
      "description": "Set selected items in the table",
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
      "actionLabel": "Select All",
      "description": "Select all items in the table"
    },
    {
      "actionType": "clearAll",
      "actionLabel": "Clear Selected Items",
      "description": "Clear all selected items in the table"
    },
    {
      "actionType": "initDrag",
      "actionLabel": "Enable Sorting",
      "description": "Enable drag-and-drop sorting in the table"
    },
    {
      "actionType": "cancelDrag",
      "actionLabel": "Cancel Sorting",
      "description": "Cancel drag-and-drop sorting in the table"
    }
  ],
  "cell-field": [
  ],
  "chart": [
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Variable",
      "description": "Trigger component data update"
    }
  ],
  "sparkline": [
  ],
  "carousel": [
  ],
  "image": [
    {
      "actionType": "preview",
      "actionLabel": "Preview",
      "description": "Preview image"
    },
    {
      "actionType": "zoom",
      "actionLabel": "Adjust Image Scale",
      "description": "Enlarge or reduce the image proportionally",
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
  "images": [
  ],
  "date": [
  ],
  "time": [
  ],
  "datetime": [
  ],
  "calendar": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "tag": [
  ],
  "json": [
  ],
  "progress": [
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to default value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "status": [
  ],
  "steps": [
  ],
  "timeline": [
  ],
  "divider": [
  ],
  "code": [
  ],
  "markdown": [
  ],
  "collapse": [
    {
      "actionType": "expand",
      "actionLabel": "Expand Component",
      "description": "Change component collapse state to expanded"
    },
    {
      "actionLabel": "Collapse Component",
      "actionType": "collapse",
      "description": "Change component collapse state to collapsed"
    }
  ],
  "office-viewer": [
    {
      "actionType": "print",
      "actionLabel": "Print",
      "description": "Print document"
    },
    {
      "actionType": "saveAs",
      "actionLabel": "Download",
      "description": "Download document"
    }
  ],
  "pdf-viewer": [
  ],
  "log": [
  ],
  "action": [
  ],
  "input-array": [
  ],
  "control": [
  ],
  "input-datetime": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "input-datetime-range": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "input-email": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "formula": [
  ],
  "group": [
  ],
  "input-month": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "input-month-range": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "input-password": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "input-quarter": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "input-quarter-range": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "input-time": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "input-time-range": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "tree-select": [
    "[Circular]",
    "[Circular]",
    "[Circular]",
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear data"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset data"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    }
  ],
  "input-url": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "input-year": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "input-year-range": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "breadcrumb": [
  ],
  "dialog": [
    {
      "actionType": "confirm",
      "actionLabel": "Confirm",
      "description": "Trigger dialog confirm operation"
    },
    {
      "actionType": "cancel",
      "actionLabel": "Cancel",
      "description": "Trigger dialog cancel operation"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Variable",
      "description": "Trigger component data update"
    }
  ],
  "drawer": [
    {
      "actionType": "confirm",
      "actionLabel": "Confirm",
      "description": "Trigger drawer confirm operation"
    },
    {
      "actionType": "cancel",
      "actionLabel": "Cancel",
      "description": "Trigger drawer cancel operation"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Variable",
      "description": "Trigger component data update"
    }
  ],
  "hbox": [
  ],
  "list-item": [
  ],
  "operation": [
  ],
  "page": [
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Variable",
      "description": "Trigger component data update"
    }
  ],
  "pagination": [
  ],
  "plain": [
  ],
  "reset": [
  ],
  "submit": [
  ],
  "wrapper": [
  ],
  "column-toggler": [
  ],
  "my-renderer": [
  ]
}

export const tpls = {
  "switch": {
    "type": "switch",
    "mode": "horizontal",
    "horizontal": {
      "justify": true,
      "left": 8
    },
    "inputClassName": "is-inline "
  },
  "divider": {
    "type": "divider",
    "className": "mx-0"
  },
  "formItemName": {
    "label": "Field Name",
    "name": "name",
    "type": "ae-DataBindingControl"
  },
  "formItemExtraName": {
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "If the ending field name is configured, this component will store the start and end as two fields",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Ending Field Name"
    },
    "name": "extraName",
    "type": "ae-DataBindingControl",
    "required": false
  },
  "formItemInline": {
    "type": "switch",
    "label": "Form Item Inline",
    "name": "inline",
    "visibleOn": "this.mode != \"inline\"",
    "inputClassName": "is-inline"
  },
  "formItemSize": {
    "name": "size",
    "label": "Control Width",
    "type": "select",
    "options": [
      {
        "label": "Extra Small",
        "value": "xs"
      },
      {
        "label": "Small",
        "value": "sm"
      },
      {
        "label": "Medium",
        "value": "md"
      },
      {
        "label": "Large",
        "value": "lg"
      },
      {
        "label": "Default (Full)",
        "value": "full"
      }
    ]
  },
  "minLength": {
    "name": "minLength",
    "type": "input-number",
    "label": "Minimum Quantity Limit"
  },
  "maxLength": {
    "name": "maxLength",
    "type": "input-number",
    "label": "Maximum Quantity Limit"
  },
  "label": {
    "label": "Title",
    "name": "label",
    "type": "input-text"
  },
  "btnLabel": {
    "type": "input-text",
    "name": "btnLabel",
    "label": "Button Name",
    "value": "File Upload"
  },
  "placeholder": {
    "label": "Placeholder Hint",
    "name": "placeholder",
    "type": "input-text",
    "placeholder": "Empty Content Placeholder"
  },
  "startPlaceholder": {
    "type": "input-text",
    "name": "startPlaceholder",
    "label": "Start Placeholder"
  },
  "endPlaceholder": {
    "type": "input-text",
    "name": "endPlaceholder",
    "label": "End Placeholder"
  },
  "clearable": {
    "type": "switch",
    "label": "Clearable",
    "name": "clearable",
    "inputClassName": "is-inline"
  },
  "hint": {
    "label": "Input Hint",
    "type": "input-text",
    "name": "hint",
    "description": "Displayed when the input box gains focus, used to prompt the user to enter content."
  },
  "icon": {
    "label": "Icon",
    "type": "icon-picker",
    "name": "icon",
    "placeholder": "Click to select icon",
    "clearable": true,
    "description": ""
  },
  "inputType": {
    "label": "Input Type",
    "name": "type",
    "type": "select",
    "creatable": false,
    "options": [
      {
        "label": "Text",
        "value": "input-text"
      },
      {
        "label": "Password",
        "value": "input-password"
      },
      {
        "label": "Email",
        "value": "input-email"
      },
      {
        "label": "URL",
        "value": "input-url"
      }
    ]
  },
  "selectDateType": {
    "label": "Date Type",
    "name": "type",
    "type": "select",
    "creatable": false,
    "options": [
      {
        "label": "Date",
        "value": "input-date"
      },
      {
        "label": "DateTime",
        "value": "input-datetime"
      },
      {
        "label": "Time",
        "value": "input-time"
      },
      {
        "label": "Month",
        "value": "input-month"
      },
      {
        "label": "Quarter",
        "value": "input-quarter"
      },
      {
        "label": "Year",
        "value": "input-year"
      }
    ]
  },
  "selectDateRangeType": {
    "label": "Date Range Type",
    "name": "type",
    "type": "select",
    "creatable": false,
    "options": [
      {
        "label": "Date",
        "value": "input-date-range"
      },
      {
        "label": "DateTime",
        "value": "input-datetime-range"
      },
      {
        "label": "Time",
        "value": "input-time-range"
      },
      {
        "label": "Month",
        "value": "input-month-range"
      },
      {
        "label": "Quarter",
        "value": "input-quarter-range"
      },
      {
        "label": "Year",
        "value": "input-year-range"
      }
    ]
  },
  "expression": {
    "type": "input-text",
    "description": "Supports JS expressions, e.g., `this.xxx == 1`"
  },
  "size": {
    "label": "Control Size",
    "type": "button-group-select",
    "name": "size",
    "clearable": true,
    "options": [
      {
        "label": "Extra Small",
        "value": "xs"
      },
      {
        "label": "Small",
        "value": "sm"
      },
      {
        "label": "Medium",
        "value": "md"
      },
      {
        "label": "Large",
        "value": "lg"
      }
    ]
  },
  "name": {
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "Only needed for linkage, other components can link with the current component through this name",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Name"
    },
    "name": "name",
    "type": "input-text",
    "placeholder": "Please enter letters or numbers"
  },
  "reload": {
    "name": "reload",
    "asFormItem": true,
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "You can specify the target component to refresh after the operation is completed. Please fill in the <code>name</code> property of the target component. Use <code>,</code> to separate multiple components. If the target component is a form item, please fill in the form name first, and then connect the form item name with <code>.</code>, e.g., <code>xxForm.xxControl</code>. If the target object to refresh is set to <code>window</code>, the entire page will be refreshed.",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Refresh Target Component"
    },
    "placeholder": "Please enter component name",
    "mode": "horizontal",
    "horizontal": {
      "left": 4,
      "justify": true
    }
  },
  "pageData": {
    "type": "input-kv",
    "mode": "normal",
    "name": "data",
    "label": "Component Static Data",
    "itemsWrapperClassName": "ae-Combo-items ",
    "itemClassName": "ae-Combo-item "
  },
  "autoFill": {
    "type": "input-kv",
    "name": "autoFill",
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "Automatically fill a certain field value of the currently selected option into a certain form item in the form, supporting data mapping",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Auto Fill"
    }
  },
  "autoFillApi": {
    "type": "input-kv",
    "name": "autoFill",
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "Auto Fill or Reference Entry",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Data Entry"
    }
  },
  "required": {
    "type": "switch",
    "name": "required",
    "label": "Required",
    "mode": "horizontal",
    "horizontal": {
      "justify": true,
      "left": 8
    },
    "inputClassName": "is-inline "
  },
  "description": {
    "name": "description",
    "type": "textarea",
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "Light-colored text description below the form item control",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Description"
    },
    "maxRows": 2
  },
  "disabled": {
    "type": "ae-StatusControl",
    "label": "Disabled",
    "mode": "normal",
    "name": "disabled",
    "expressionName": "disabledOn"
  },
  "readonly": {
    "type": "ae-StatusControl",
    "label": "Read Only",
    "mode": "normal",
    "name": "readOnly",
    "expressionName": "readOnlyOn"
  },
  "visible": {
    "type": "ae-StatusControl",
    "defaultTrue": true,
    "label": "Visible",
    "mode": "normal",
    "name": "visible",
    "expressionName": "visibleOn"
  },
  "static": {
    "type": "ae-StatusControl",
    "label": "Static Display",
    "mode": "normal",
    "name": "static",
    "expressionName": "staticOn"
  },
  "hidden": {
    "type": "ae-StatusControl",
    "label": "Hidden",
    "mode": "normal",
    "name": "hidden",
    "expressionName": "hiddenOn"
  },
  "maximum": {
    "type": "input-number",
    "label": "Maximum Value"
  },
  "minimum": {
    "type": "input-number",
    "label": "Minimum Value"
  },
  "switchDefaultValue": {
    "type": "switch",
    "label": "Default Value Setting",
    "name": "value",
    "labelRemark": {
      "trigger": [
        "hover",
        "focus"
      ],
      "setting": true,
      "title": "",
      "content": "If not set, get according to name"
    }
  },
  "numberSwitchDefaultValue": {
    "type": "switch",
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "If not set, get according to name",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Default Value Setting"
    },
    "name": "value"
  },
  "kilobitSeparator": {
    "type": "switch",
    "label": "Thousand Separator",
    "name": "kilobitSeparator",
    "inputClassName": "is-inline"
  },
  "imageUrl": {
    "type": "input-text",
    "label": "Image"
  },
  "backgroundImageUrl": {
    "type": "input-text",
    "label": "Image Path"
  },
  "audioUrl": {
    "type": "input-text",
    "label": "Audio Address",
    "name": "src",
    "description": "Supports variable retrieval, e.g., <code>\\${audioSrc}</code>"
  },
  "fileUrl": {
    "type": "input-text",
    "label": "File"
  },
  "markdownBody": {
    "name": "value",
    "type": "editor",
    "language": "markdown",
    "size": "xxl",
    "label": "Markdown Content",
    "options": {
      "lineNumbers": "off"
    }
  },
  "richText": {
    "label": "Rich Text",
    "type": "input-rich-text",
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
    "name": "html",
    "description": "Supports using <code>\\${xxx}</code> to retrieve variables, or using lodash.template syntax to write template logic. <a target=\"_blank\" href=\"/amis/zh-CN/docs/concepts/template\">Details</a>",
    "size": "lg"
  },
  "showCounter": {
    "type": "switch",
    "label": "Counter",
    "name": "showCounter",
    "inputClassName": "is-inline"
  },
  "borderMode": {
    "name": "borderMode",
    "label": "Border",
    "type": "button-group-select",
    "inputClassName": "is-inline",
    "horizontal": {
      "left": 2,
      "justify": true
    },
    "options": [
      {
        "label": "Full Border",
        "value": "full"
      },
      {
        "label": "Half Border",
        "value": "half"
      },
      {
        "label": "No Border",
        "value": "none"
      }
    ]
  },
  "onlyLeaf": {
    "type": "switch",
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "Must select to the last level, cannot select intermediate levels",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Must Select to Last Level"
    },
    "horizontal": {
      "left": 5,
      "justify": true
    },
    "name": "onlyLeaf",
    "value": false,
    "inputClassName": "is-inline"
  },
  "utc": {
    "type": "switch",
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "When enabled, submitted data and displayed data will be converted to UTC; it is recommended to enable for applications with cross-regional users",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "UTC Conversion"
    },
    "name": "utc",
    "inputClassName": "is-inline"
  },
  "embed": {
    "type": "switch",
    "label": "Embed Mode",
    "name": "embed"
  },
  "buttonLevel": {
    "label": "Button Style",
    "type": "select",
    "name": "level",
    "menuTpl": {
      "type": "container",
      "bodyClassName": "ae-ButtonLevel-MenuTpl",
      "body": {
        "type": "button",
        "label": "${label}",
        "size": "sm",
        "level": "${value}"
      }
    },
    "options": [
      {
        "label": "Default",
        "value": "default",
        "level": "default"
      },
      {
        "label": "Link",
        "value": "link",
        "level": "link"
      },
      {
        "label": "Primary",
        "value": "primary",
        "level": "primary"
      },
      {
        "label": "Light",
        "value": "light",
        "level": "light"
      },
      {
        "label": "Dark",
        "value": "dark",
        "level": "dark"
      },
      {
        "label": "Info",
        "value": "info",
        "level": "info"
      },
      {
        "label": "Success",
        "value": "success",
        "level": "success"
      },
      {
        "label": "Warning",
        "value": "warning",
        "level": "warning"
      },
      {
        "label": "Danger",
        "value": "danger",
        "level": "danger"
      },
      {
        "label": "Secondary",
        "value": "secondary",
        "level": "secondary"
      },
      {
        "label": "Enhance",
        "value": "enhance",
        "level": "enhance"
      }
    ]
  },
  "uploadType": {
    "label": "Upload Method",
    "name": "uploadType",
    "type": "select",
    "value": "fileReceptor",
    "options": [
      {
        "label": "File Receptor",
        "value": "fileReceptor"
      },
      {
        "label": "Object Storage",
        "value": "bos"
      }
    ]
  },
  "bos": {
    "label": "Storage Repository",
    "type": "select",
    "name": "bos",
    "value": "default",
    "options": [
      {
        "label": "Platform Default",
        "value": "default"
      }
    ]
  },
  "badge": {
    "label": "Badge",
    "name": "badge",
    "type": "ae-badge"
  },
  "nav-badge": {
    "label": "Badge",
    "name": "badge",
    "type": "ae-nav-badge"
  },
  "nav-default-active": {
    "type": "ae-nav-default-active"
  },


  "data": {
    "type": "input-kv",
    "name": "data",
    "label": "Component Static Data"
  },
  "app-page": {
    "type": "nested-select",
    "label": "Select Page",
    "name": "link",
    "mode": "horizontal",
    "size": "lg",
    "required": true,
    "options": []
  },
  "app-page-args": {
    "type": "combo",
    "name": "params",
    "label": "Page Parameters",
    "multiple": true,
    "removable": true,
    "addable": true,
    "strictMode": false,
    "canAccessSuperData": true,
    "size": "lg",
    "mode": "horizontal",
    "items": [
      {
        "name": "key",
        "type": "input-text",
        "placeholder": "Parameter Name",
        "source": "${__pageInputSchema}",
        "labelField": "label",
        "valueField": "value",
        "required": true
      },
      {
        "type": "ae-formulaControl",
        "variableMode": "tree",
        "name": "val",
        "variables": "${variables}",
        "placeholder": "Parameter Value"
      }
    ]
  },
  "virtualThreshold": {
    "name": "virtualThreshold",
    "type": "input-number",
    "min": 1,
    "step": 1,
    "precision": 0,
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "When the number of options exceeds the threshold, a virtual list is enabled to optimize performance",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Virtual List Threshold"
    }
  },
  "virtualItemHeight": {
    "name": "itemHeight",
    "type": "input-number",
    "min": 1,
    "step": 1,
    "precision": 0,
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "Height of each option when the virtual list is enabled",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Option Height"
    }
  },
  "pageTitle": {
    "label": "Page Title",
    "name": "title",
    "type": "input-text"
  },
  "pageSubTitle": {
    "label": "Subtitle",
    "name": "subTitle",
    "type": "textarea"
  },
  "prefix": {
    "type": "input-text",
    "name": "prefix",
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "Displayed before input content, not included in data value",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Prefix"
    }
  },
  "suffix": {
    "type": "input-text",
    "name": "suffix",
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "Displayed after input content, not included in data value",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Suffix"
    }
  },
  "unit": {
    "type": "input-text",
    "name": "unit",
    "label": "Unit",
    "value": ""
  },
  "optionsTip": {
    "type": "input-text",
    "name": "optionsTip",
    "label": "Options Tip",
    "value": "Tags you recently used"
  },
  "tableCellRemark": {
    "name": "remark",
    "label": "Hint",
    "type": "input-text",
    "description": "Displays a hint icon, hover to see the content."
  },
  "tableCellPlaceholder": {
    "name": "placeholder",
    "type": "input-text",
    "label": "Placeholder",
    "value": "-",
    "description": "Used to display when there is no value"
  },
  "title": {
    "type": "input-text",
    "name": "title",
    "label": "Title"
  },
  "caption": {
    "type": "input-text",
    "name": "caption",
    "label": "Title"
  },
  "imageCaption": {
    "type": "input-text",
    "name": "imageCaption",
    "label": "Image Description"
  },
  "inputBody": {
    "type": "input-text",
    "name": "body",
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "If not filled, the target address value is used automatically",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Content"
    }
  },
  "stepSubTitle": {
    "type": "input-text",
    "name": "subTitle",
    "label": false,
    "placeholder": "Subtitle"
  },
  "stepDescription": {
    "type": "input-text",
    "name": "description",
    "label": false,
    "placeholder": "Description"
  },
  "taskNameLabel": {
    "type": "input-text",
    "name": "taskNameLabel",
    "label": "Task Name Column Title"
  },
  "operationLabel": {
    "type": "input-text",
    "name": "operationLabel",
    "label": "Operation Column Title"
  },
  "statusLabel": {
    "type": "input-text",
    "name": "statusLabel",
    "label": "Status Column Title"
  },
  "remarkLabel": {
    "type": "input-text",
    "name": "remarkLabel",
    "label": "Remark Column Title"
  },
  "inputArrayItem": {
    "type": "input-text",
    "placeholder": "Name"
  },
  "actionPrevLabel": {
    "type": "input-text",
    "name": "actionPrevLabel",
    "label": "Previous Step Button Name"
  },
  "actionNextLabel": {
    "type": "input-text",
    "name": "actionNextLabel",
    "label": "Next Step Button Name"
  },
  "actionNextSaveLabel": {
    "type": "input-text",
    "name": "actionNextSaveLabel",
    "label": "Save and Next Step Button Name"
  },
  "actionFinishLabel": {
    "type": "input-text",
    "name": "actionFinishLabel",
    "label": "Finish Button Name"
  },
  "imgCaption": {
    "type": "textarea",
    "name": "caption",
    "label": "Image Description"
  },
  "taskRemark": {
    "type": "textarea",
    "name": "remark",
    "label": "Task Description"
  },
  "tooltip": {
    "type": "textarea",
    "name": "tooltip",
    "label": "Tooltip Content"
  },
  "anchorTitle": {
    "type": "input-text",
    "name": "title",
    "required": true,
    "placeholder": "Please enter anchor title"
  },
  "avatarText": {
    "label": "Text",
    "name": "text",
    "type": "input-text",
    "visibleOn": "this.showtype === \"text\""
  },
  "cardTitle": {
    "name": "header.title",
    "type": "input-text",
    "label": "Title",
    "description": "Supports template syntax like: <code>\\${xxx}</code>"
  },
  "cardSubTitle": {
    "name": "header.subTitle",
    "type": "input-text",
    "label": "Subtitle",
    "description": "Supports template syntax like: <code>\\${xxx}</code>"
  },
  "cardsPlaceholder": {
    "name": "placeholder",
    "value": "No Data",
    "type": "input-text",
    "label": "No Data Tip"
  },
  "cardDesc": {
    "name": "header.desc",
    "type": "textarea",
    "label": "Description",
    "description": "Supports template syntax like: <code>\\${xxx}</code>"
  },
  "imageTitle": {
    "type": "input-text",
    "label": "Image Title",
    "name": "title",
    "visibleOn": "this.type == \"image\""
  },
  "imageDesc": {
    "type": "textarea",
    "label": "Image Description",
    "name": "description",
    "visibleOn": "this.type == \"image\""
  },
  "fetchSuccess": {
    "label": "Fetch Success Tip",
    "type": "input-text",
    "name": "fetchSuccess"
  },
  "fetchFailed": {
    "label": "Fetch Failed Tip",
    "type": "input-text",
    "name": "fetchFailed"
  },
  "saveOrderSuccess": {
    "label": "Save Order Success Tip",
    "type": "input-text",
    "name": "saveOrderSuccess"
  },
  "saveOrderFailed": {
    "label": "Save Order Failed Tip",
    "type": "input-text",
    "name": "saveOrderFailed"
  },
  "quickSaveSuccess": {
    "label": "Quick Save Success Tip",
    "type": "input-text",
    "name": "quickSaveSuccess"
  },
  "quickSaveFailed": {
    "label": "Quick Save Failed Tip",
    "type": "input-text",
    "name": "quickSaveFailed"
  },
  "saveSuccess": {
    "label": "Save Success Tip",
    "name": "saveSuccess",
    "type": "input-text"
  },
  "saveFailed": {
    "label": "Save Failed Tip",
    "name": "saveFailed",
    "type": "input-text"
  },
  "validateFailed": {
    "label": "Validation Failed Tip",
    "name": "validateFailed",
    "type": "input-text"
  },
  "tablePlaceholder": {
    "name": "placeholder",
    "type": "input-text",
    "label": "No Data Tip"
  },
  "collapseOpenHeader": {
    "name": "collapseHeader",
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "Title when the collapsible is expanded",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Expanded Title"
    },
    "type": "input-text"
  },
  "matrixColumnLabel": {
    "type": "input-text",
    "name": "label",
    "placeholder": "Column Description"
  },
  "matrixRowLabel": {
    "type": "input-text",
    "name": "label",
    "placeholder": "Row Description"
  },
  "matrixRowTitle": {
    "name": "rowLabel",
    "label": "Row Title Text",
    "type": "input-text"
  },
  "submitText": {
    "name": "submitText",
    "label": "Submit Button Name",
    "type": "input-text"
  },
  "tpl:btnLabel": {
    "type": "tpl",
    "tpl": "<span class=\"label label-success\">${label}</span>",
    "columnClassName": "p-t-xs"
  },
  "switchOption": {
    "type": "input-text",
    "name": "option",
    "label": "Description"
  },
  "addOnLabel": {
    "name": "label",
    "label": "Text",
    "type": "input-text"
  },
  "onText": {
    "name": "onText",
    "type": "input-text",
    "label": "On"
  },
  "offText": {
    "name": "offText",
    "type": "input-text",
    "label": "Off"
  },
  "propertyTitle": {
    "label": "Title",
    "type": "input-text",
    "name": "title"
  },
  "propertyLabel": {
    "type": "input-text",
    "mode": "inline",
    "size": "sm",
    "label": "Property Name",
    "name": "label"
  },
  "propertyContent": {
    "type": "input-text",
    "mode": "inline",
    "size": "sm",
    "label": "Property Value",
    "name": "content"
  },
  "draggableTip": {
    "type": "input-text",
    "name": "draggableTip",
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "Drag and drop sorting tip text",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Tip Text"
    }
  },
  "deleteConfirmText": {
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "Delete confirmation text, effective when delete interface is configured",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Confirmation Text"
    },
    "name": "deleteConfirmText",
    "type": "input-text"
  },
  "optionsLabel": {
    "type": "input-text",
    "name": "label",
    "placeholder": "Name",
    "required": true
  },
  "anchorNavTitle": {
    "name": "title",
    "label": "Title",
    "type": "input-text",
    "required": true
  },
  "primaryField": {
    "type": "input-text",
    "name": "primaryField",
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "Unique identifier for each record, usually used in row selection, batch operations, etc.",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Primary Key"
    }
  },
  "deferField": {
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "Field name for lazy load nodes, default is defer, can be customized with this configuration",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Lazy Load Field"
    },
    "name": "deferField",
    "type": "input-text",
    "placeholder": "Custom field name for lazy loading"
  },
  "horizontal-align": {
    "type": "button-group-select",
    "label": "Position",
    "options": [
      {
        "label": "Left",
        "value": "left",
        "icon": "fa fa-align-left"
      },
      {
        "label": "Right",
        "value": "right",
        "icon": "fa fa-align-right"
      }
    ]
  },
  "leftFixed": {
    "name": "horizontal.leftFixed",
    "type": "button-group-select",
    "visibleOn": "this.horizontal && this.horizontal.leftFixed",
    "label": "Width",
    "size": "xs",
    "options": [
      {
        "label": "Small",
        "value": "sm"
      },
      {
        "label": "Medium",
        "value": "normal"
      },
      {
        "label": "Large",
        "value": "lg"
      }
    ]
  },
  "leftRate": {
    "name": "horizontal",
    "type": "input-range",
    "visibleOn": "this.horizontal && !this.horizontal.leftFixed",
    "min": 1,
    "max": 11,
    "step": 1,
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "12 parts, title width ratio n/12",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Ratio"
    }
  },
  "labelAlign": {
    "name": "labelAlign",
    "type": "button-group-select",
    "visibleOn": "this.horizontal && this.horizontal.leftFixed",
    "label": "Alignment",
    "size": "xs",
    "options": [
      {
        "label": "Left Align",
        "value": "left"
      },
      {
        "label": "Right Align",
        "value": "right"
      }
    ]
  },
  "subFormItemMode": {
    "label": "Subform Display Mode",
    "name": "subFormMode",
    "type": "button-group-select",
    "size": "sm",
    "option": "Inherit",
    "options": [
      {
        "label": "Inherit",
        "value": ""
      },
      {
        "label": "Normal",
        "value": "normal"
      },
      {
        "label": "Inline",
        "value": "inline"
      },
      {
        "label": "Horizontal",
        "value": "horizontal"
      }
    ]
  },
  "subFormHorizontalMode": {
    "type": "switch",
    "label": "Subform Horizontal Ratio Setting",
    "name": "subFormHorizontal",
    "onText": "Inherit",
    "offText": "Custom",
    "inputClassName": "text-sm",
    "visibleOn": "this.subFormMode == \"horizontal\""
  },
  "subFormHorizontal": {
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
        "label": "Left Width",
        "size": "xs",
        "options": [
          {
            "label": "Ratio",
            "value": ""
          },
          {
            "label": "Small Width",
            "value": "sm",
            "visibleOn": "this.leftFixed"
          },
          {
            "label": "Fixed Width",
            "value": "normal"
          },
          {
            "label": "Large Width",
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
        "label": "Left-Right Distribution Adjustment (n/12)",
        "labelRemark": {
          "trigger": "click",
          "className": "m-l-xs",
          "rootClose": true,
          "content": "A total of 12 parts, you can set the left width ratio n/12 here.",
          "placement": "left"
        }
      }
    ]
  },




  "apiString": {
    "name": "api",
    "type": "input-text",
    "placeholder": "http://"
  },
  "proxy": {
    "type": "switch",
    "label": "Backend Proxy",
    "name": "proxy",
    "mode": "horizontal",
    "horizontal": {
      "justify": true,
      "left": 8
    },
    "inputClassName": "is-inline"
  },
  "tree": {
    "label": "Options",
    "name": "options",
    "type": "combo",
    "multiple": true,
    "draggable": true,
    "addButtonText": "Add Option",
    "description": "Static data does not support multi-level, please switch to code mode, or use the source interface to obtain.",
    "scaffold": {
      "label": "",
      "value": ""
    },
    "items": [
      {
        "type": "input-text",
        "name": "label",
        "placeholder": "Name",
        "required": true
      },
      {
        "type": "input-text",
        "name": "value",
        "placeholder": "Value",
        "unique": true
      }
    ]
  },
  "strictMode": {
    "type": "switch",
    "label": "Strict Mode",
    "name": "strictMode",
    "value": false,
    "mode": "horizontal",
    "horizontal": {
      "justify": true,
      "left": 8
    },
    "inputClassName": "is-inline ",
    "labelRemark": {
      "trigger": [
        "hover",
        "focus"
      ],
      "setting": true,
      "title": "",
      "content": "Enabling strict mode will use strict equality comparison"
    }
  },
  "checkAllLabel": {
    "type": "input-text",
    "name": "checkAllLabel",
    "label": "Select All Text",
    "value": "Select All",
    "mode": "row"
  },
  "delimiter": {
    "type": "input-text",
    "name": "delimiter",
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "The delimiter for concatenating multiple values into a single string",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Delimiter"
    },
    "visibleOn": "this.multiple && this.joinValues"
  },
  "extractValue": {
    "type": "switch",
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "When enabled, the value of the select item will be encapsulated as an array. When disabled, the entire option data will be encapsulated as an array.",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Extract Value Only"
    },
    "name": "extractValue",
    "inputClassName": "is-inline",
    "visibleOn": "this.multiple && this.joinValues === false"
  },
  "createBtnLabel": {
    "label": "Add Button Name",
    "name": "createBtnLabel",
    "type": "input-text",
    "placeholder": "Add Option"
  },
  "selectFirst": {
    "type": "switch",
    "label": "Select First Item by Default",
    "name": "selectFirst",
    "mode": "horizontal",
    "horizontal": {
      "justify": true,
      "left": 8
    },
    "inputClassName": "is-inline "
  },
  "hideNodePathLabel": {
    "type": "switch",
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "Hide the ancestor node text information of the select node",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Hide Path"
    },
    "name": "hideNodePathLabel",
    "mode": "horizontal",
    "horizontal": {
      "justify": true,
      "left": 8
    },
    "inputClassName": "is-inline"
  },
  "navControl": {
    "label": "data",
    "mode": "normal",
    "name": "source",
    "type": "ae-navSourceControl",
    "closeDefaultCheck": true
  },
  "optionControl": {
    "label": "data",
    "mode": "normal",
    "name": "options",
    "type": "ae-optionControl"
  },
  "optionControlV2": {
    "label": "data",
    "mode": "normal",
    "name": "options",
    "type": "ae-optionControl",
    "closeDefaultCheck": false
  },
  "mapSourceControl": {
    "type": "ae-mapSourceControl",
    "label": "Mapping Table",
    "mode": "normal",
    "name": "source"
  },
  "timelineItemControl": {
    "label": "data",
    "model": "normal",
    "type": "ae-timelineItemControl"
  },
  "treeOptionControl": {
    "label": "data",
    "mode": "normal",
    "name": "options",
    "type": "ae-treeOptionControl"
  },
  "dataMap": {
    "type": "container",
    "body": [
      {
        "type": "switch",
        "mode": "horizontal",
        "horizontal": {
          "justify": true,
          "left": 8
        },
        "inputClassName": "is-inline ",
        "label": {
          "type": "tooltip-wrapper",
          "tooltip": "<div> When data mapping is enabled, the data in the popup will only include the set part, please bind the data. For example: {\"a\": \"\\${a}\", \"b\": 2}.</div><div>When the value is __undefined, it means that the corresponding field is deleted, which can be combined with {\"&\": \"\\$$\"} to achieve a blacklist effect.</div>",
          "tooltipTheme": "dark",
          "placement": "top",
          "tooltipStyle": {
            "fontSize": "12px"
          },
          "className": "ae-formItemControl-label-tip",
          "body": "Data Mapping"
        },
        "name": "dataMapSwitch"
      },
      {
        "type": "container",
        "className": "ae-Combo-items",
        "visibleOn": "this.dataMapSwitch",
        "body": [
          {
            "type": "switch",
            "mode": "horizontal",
            "horizontal": {
              "justify": true,
              "left": 8
            },
            "inputClassName": "is-inline ",
            "label": {
              "type": "tooltip-wrapper",
              "tooltip": "When enabled, all original data will be flattened and set to data, and customized on this basis",
              "tooltipTheme": "dark",
              "placement": "top",
              "tooltipStyle": {
                "fontSize": "12px"
              },
              "className": "ae-formItemControl-label-tip",
              "body": "Flatten Original Data"
            },
            "name": "withDefaultData",
            "className": "mb-0"
          },
          {
            "type": "input-kv",
            "syncDefaultValue": false,
            "name": "dataMap",
            "className": "block -mt-5",
            "deleteBtn": {
              "icon": "fa fa-trash"
            },
            "updatePristineAfterStoreDataReInit": true,
            "itemsWrapperClassName": "ae-Combo-items"
          }
        ]
      }
    ]
  },
  "submitOnChange": {
    "type": "switch",
    "label": "Submit on Change",
    "name": "submitOnChange",
    "mode": "horizontal",
    "horizontal": {
      "justify": true,
      "left": 8
    },
    "inputClassName": "is-inline ",
    "labelRemark": {
      "trigger": "click",
      "className": "m-l-xs",
      "rootClose": true,
      "content": "When set, every modification in the form will trigger a submission",
      "placement": "left"
    }
  },
  "validateOnChange": {
    "type": "select",
    "name": "validateOnChange",
    "overlayPlacement": "top",
    "label": "Validation Trigger",
    "options": [
      {
        "label": "Trigger on every modification after submission",
        "value": ""
      },
      {
        "label": "Trigger on modification",
        "value": true
      },
      {
        "label": "Trigger on submission",
        "value": false
      }
    ]
  },
  "validationApiControl": {
    "type": "ae-validationApiControl",
    "label": false
  },
  "layout:sorption": {
    "type": "button-group-select",
    "label": "Adsorption Position",
    "size": "xs",
    "name": "sorptionPosition",
    "options": [
      {
        "label": "Stick to Top",
        "value": "top"
      },
      {
        "label": "Stick to Bottom",
        "value": "bottom"
      }
    ]
  },
  "layout:sticky": {
    "type": "switch",
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "When scrolling adsorption is enabled, it will automatically enter adsorption mode when scrolling to the upper and lower edges of the parent container.",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Scrolling Adsorption"
    },
    "name": "stickyStatus",
    "inputClassName": "inline-flex justify-between"
  },
  "layout:stickyPosition": {
    "type": "button-group-select",
    "size": "xs",
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "Used to set the position when scrolling adsorption",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Adsorption Position"
    },
    "name": "stickyPosition",
    "visibleOn": "this.stickyStatus",
    "options": [
      {
        "label": "Stick to Top",
        "value": "top"
      },
      {
        "label": "Stick to Bottom",
        "value": "bottom"
      },
      {
        "label": "Auto",
        "value": "auto"
      }
    ]
  },



  "apiRequestAdaptor": {
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "You can directly input the function body of the request adapter based on JavaScript. Within this function body, you can process the <span style=\"color: #108CEE\">api</span> or return new content. Finally, you need to <span style=\"color: #108CEE\">return</span> the <span style=\"color: #108CEE\">api</span>.<br><br/>\n    The variables accessible within the function body are as follows:<br/>\n    &nbsp;1. <span style=\"color: #108CEE\">api</span>: The schema configuration object of the interface<br/>\n    &nbsp;2. <span style=\"color: #108CEE\">api.data</span>: Request data<br/>\n    &nbsp;3. <span style=\"color: #108CEE\">api.query</span>: Request query parameters<br/>\n    &nbsp;4. <span style=\"color: #108CEE\">api.headers</span>: Request headers<br/>\n    &nbsp;5. <span style=\"color: #108CEE\">api.url</span>: Request URL<br/>",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Request Adapter"
    },
    "name": "requestAdaptor",
    "type": "ae-apiAdaptorControl",
    "editorDesc": "You must return the modified api object.",
    "editorPlaceholder": "api.data.count = api.data.count + 1;\nreturn api;",
    "params": [
      {
        "label": "api",
        "tip": {
          "type": "container",
          "style": {
            "width": "350px",
            "height": "128px"
          },
          "body": {
            "type": "code",
            "language": "typescript",
            "className": "bg-white text-xs m-0",
            "value": "{\n  url: string; // Current interface address\n  method: 'get' | 'post' | 'put' | 'delete';\n  data?: Object; // Request body\n  headers?: Object; // Request headers\n  ...\n}"
          }
        }
      },
      {
        "label": "context",
        "tip": {
          "type": "container",
          "style": {
            "width": "350px",
            "height": "128px"
          },
          "body": {
            "type": "code",
            "language": "typescript",
            "className": "bg-white text-xs m-0",
            "value": "{\n  // Context data\n  [key: string]: any;\n}"
          }
        }
      }
    ]
  },
  "apiAdaptor": {
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "You can directly input the function body of the return adapter based on JavaScript. Within the function body, you can process the <span style=\"color: #108CEE\">payload</span> or return new content. Finally, you need to <span style=\"color: #108CEE\">return</span> the final return result of the interface.<br><br/>\n    The variables accessible within the function body are as follows:<br/>\n    &nbsp;1. <span style=\"color: #108CEE\">payload</span>: The return result of the interface<br/>\n    &nbsp;2. <span style=\"color: #108CEE\">response</span>: The response object of the interface<br/>\n    &nbsp;3. <span style=\"color: #108CEE\">api</span>: The schema configuration object of the interface<br/>",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Return Adapter"
    },
    "type": "ae-apiAdaptorControl",
    "name": "adaptor",
    "params": [
      {
        "label": "payload",
        "tip": "The response payload of the current request, i.e., response.data"
      },
      {
        "label": "response",
        "tip": {
          "type": "container",
          "style": {
            "width": "345px",
            "height": "144px"
          },
          "body": {
            "type": "code",
            "language": "typescript",
            "className": "bg-white text-xs m-0",
            "value": "{\n  data: Object; // Interface return data,\n  request: XMLHttpRequest;\n  headers?: Object; // Request headers\n  status: number; // Status code 200, 404, 500..\n  statusText: string; // Status information\n  ...\n}"
          }
        }
      },
      {
        "label": "api",
        "tip": {
          "type": "container",
          "style": {
            "width": "350px",
            "height": "128px"
          },
          "body": {
            "type": "code",
            "language": "typescript",
            "className": "bg-white text-xs m-0",
            "value": "{\n  url: string; // Current interface address\n  method: 'get' | 'post' | 'put' | 'delete';\n  data?: Object; // Request body\n  headers?: Object; // Request headers\n  ...\n}"
          }
        }
      }
    ],
    "editorPlaceholder": "// After API response or custom processing, it needs to conform to the following format\nreturn {\n    status: 0, // 0 indicates the request was successful, otherwise handle as an error\n    msg: 'Request successful',\n    data: {\n        text: 'world',\n        items: [\n            {label: 'Zhang San', value: 1}\n        ]\n    }\n}",
    "switchTip": {
      "type": "container",
      "className": "text-xs",
      "style": {
        "width": "458px",
        "height": "315px"
      },
      "body": [
        "The interface return data needs to conform to the following format, status, msg, and data are required fields",
        {
          "type": "container",
          "body": {
            "type": "code",
            "language": "typescript",
            "className": "bg-white text-xs m-0",
            "value": "{\n  \"status\": 0,\n  \"msg\": \"\",\n  \"data\": {\n    // ...other fields\n  }\n}"
          }
        },
        {
          "type": "table",
          "className": "mt-1 mb-0",
          "data": {
            "items": [
              {
                "label": "status",
                "desc": "Return 0 indicates the current interface returned correctly, otherwise handle as an error request"
              },
              {
                "label": "msg",
                "desc": "Return interface processing information, mainly used for toast display when form submission or request fails"
              },
              {
                "label": "data",
                "desc": "Must return an object with a key-value structure"
              }
            ]
          },
          "columns": [
            {
              "name": "label",
              "label": "Field"
            },
            {
              "name": "desc",
              "label": "Description"
            }
          ]
        }
      ]
    }
  },
  "validateApiAdaptor": {
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "You can directly input the function body of the return adapter based on JavaScript. Within the function body, you can process the <span style=\"color: #108CEE\">payload</span> or return new content. Finally, you need to <span style=\"color: #108CEE\">return</span> the final return result of the interface.<br><br/>\n    The variables accessible within the function body are as follows:<br/>\n    &nbsp;1. <span style=\"color: #108CEE\">payload</span>: The return result of the interface<br/>\n    &nbsp;2. <span style=\"color: #108CEE\">response</span>: The response object of the interface<br/>\n    &nbsp;3. <span style=\"color: #108CEE\">api</span>: The schema configuration object of the interface<br/>",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Return Adapter"
    },
    "type": "ae-apiAdaptorControl",
    "name": "adaptor",
    "params": [
      {
        "label": "payload",
        "tip": "The response payload of the current request, i.e., response.data"
      },
      {
        "label": "response",
        "tip": {
          "type": "container",
          "style": {
            "width": "345px",
            "height": "144px"
          },
          "body": {
            "type": "code",
            "language": "typescript",
            "className": "bg-white text-xs m-0",
            "value": "{\n  data: Object; // Interface return data,\n  request: XMLHttpRequest;\n  headers?: Object; // Request headers\n  status: number; // Status code 200, 404, 500..\n  statusText: string; // Status information\n  ...\n}"
          }
        }
      },
      {
        "label": "api",
        "tip": {
          "type": "container",
          "style": {
            "width": "350px",
            "height": "128px"
          },
          "body": {
            "type": "code",
            "language": "typescript",
            "className": "bg-white text-xs m-0",
            "value": "{\n  url: string; // Current interface address\n  method: 'get' | 'post' | 'put' | 'delete';\n  data?: Object; // Request body\n  headers?: Object; // Request headers\n  ...\n}"
          }
        }
      }
    ],
    "editorPlaceholder": "// Validation successful\nreturn {\n    status: 0\n};\n\n// Validation failed\nreturn {\n  status: 422,\n  errors: 'The current user already exists'\n}",
    "switchTip": {
      "type": "container",
      "className": "text-xs",
      "body": [
        "Description of the validation interface return format fields:",
        {
          "type": "table",
          "className": "mt-1 mb-0",
          "data": {
            "items": [
              {
                "label": "status",
                "desc": "Return 0 indicates validation success, 422 indicates validation failure"
              },
              {
                "label": "errors",
                "desc": "Displayed validation failure information when status is 422"
              }
            ]
          },
          "columns": [
            {
              "name": "label",
              "label": "Field"
            },
            {
              "name": "desc",
              "label": "Description"
            }
          ]
        }
      ]
    }
  },
  "option": {
    "name": "option",
    "type": "input-text",
    "label": {
      "type": "tooltip-wrapper",
      "tooltip": "Option Description",
      "tooltipTheme": "dark",
      "placement": "top",
      "tooltipStyle": {
        "fontSize": "12px"
      },
      "className": "ae-formItemControl-label-tip",
      "body": "Description"
    }
  },
  "copyable": {
    "type": "ae-switch-more",
    "mode": "normal",
    "name": "copyable",
    "label": "Copyable",
    "value": false,
    "hiddenOnDefault": true,
    "formType": "extend",
    "form": {
      "body": [
        {
          "label": "Copy Content Template",
          "name": "copyable.content",
          "type": "textarea",
          "mode": "row",
          "maxRow": 2,
          "visibleOn": "this.copyable",
          "description": "Defaults to the current field value, customizable."
        }
      ]
    }
  },
  "tpl:content": {
    "type": "ae-textareaFormulaControl",
    "variableMode": "tree",
    "label": "Text Content",
    "mode": "normal",
    "visibleOn": "this.wrapperComponent !== undefined",
    "name": "tpl"
  },
  "tpl:rich-text": {
    "label": "Content",
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
  "tpl:wrapperComponent": {
    "name": "wrapperComponent",
    "type": "select",
    "label": "Text Format",
    "options": [
      {
        "label": "Plain Text",
        "value": ""
      },
      {
        "label": "Paragraph",
        "value": "p"
      },
      {
        "label": "Heading 1",
        "value": "h1"
      },
      {
        "label": "Heading 2",
        "value": "h2"
      },
      {
        "label": "Heading 3",
        "value": "h3"
      },
      {
        "label": "Heading 4",
        "value": "h4"
      },
      {
        "label": "Heading 5",
        "value": "h5"
      },
      {
        "label": "Heading 6",
        "value": "h6"
      },
      {
        "label": "Rich Text",
        "value": "rich-text"
      }
    ]
  }
}


export const pluginsOpenApi = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Api specification for Plugins",
  "type": "object",
  "properties": {
    "rendererName": {
      "type": "string"
    },
    "$schema": {
      "type": "string"
    },
    "disabledRendererPlugin": {
      "type": "boolean"
    },
    "name": {
      "type": "string"
    },
    "order": {
      "type": "number"
    },
    "isBaseComponent": {
      "type": "boolean"
    },
    "icon": {
      "type": "string"
    },
    "pluginIcon": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "docLink": {
      "type": "string"
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "scaffold": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string"
        },
        "items": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string"
              },
              "body": {
                "type": "array",
                "items": {}
              },
              "size": {
                "type": "string"
              },
              "style": {
                "type": "object",
                "properties": {
                  "position": {
                    "type": "string"
                  },
                  "display": {
                    "type": "string"
                  },
                  "flex": {
                    "type": "string"
                  },
                  "flexGrow": {
                    "type": "number"
                  },
                  "flexBasis": {
                    "type": "number"
                  }
                },
                "required": [
                  "position",
                  "display",
                  "flex",
                  "flexGrow",
                  "flexBasis"
                ]
              },
              "wrapperBody": {
                "type": "boolean"
              },
              "isFixedHeight": {
                "type": "boolean"
              },
              "isFixedWidth": {
                "type": "boolean"
              }
            },
            "required": [
              "type",
              "body",
              "size",
              "style",
              "wrapperBody",
              "isFixedHeight",
              "isFixedWidth"
            ]
          }
        },
        "style": {
          "type": "object",
          "properties": {
            "position": {
              "type": "string"
            },
            "rowGap": {
              "type": "string"
            },
            "columnGap": {
              "type": "string"
            }
          },
          "required": [
            "position",
            "rowGap",
            "columnGap"
          ]
        }
      },
      "required": [
        "type",
        "items",
        "style"
      ]
    },
    "previewSchema": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string"
        },
        "items": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string"
              },
              "tpl": {
                "type": "string"
              },
              "wrapperComponent": {
                "type": "string"
              },
              "className": {
                "type": "string"
              },
              "style": {
                "type": "object",
                "properties": {
                  "display": {
                    "type": "string"
                  },
                  "flex": {
                    "type": "string"
                  },
                  "flexBasis": {
                    "type": "number"
                  },
                  "textAlign": {
                    "type": "string"
                  },
                  "marginRight": {
                    "type": "number"
                  }
                },
                "required": [
                  "display",
                  "flex",
                  "flexBasis",
                  "textAlign",
                  "marginRight"
                ]
              },
              "inline": {
                "type": "boolean"
              }
            },
            "required": [
              "type",
              "tpl",
              "wrapperComponent",
              "className",
              "style",
              "inline"
            ]
          }
        },
        "style": {
          "type": "object",
          "properties": {
            "position": {
              "type": "string"
            },
            "rowGap": {
              "type": "string"
            },
            "columnGap": {
              "type": "string"
            }
          },
          "required": [
            "position",
            "rowGap",
            "columnGap"
          ]
        }
      },
      "required": [
        "type",
        "items",
        "style"
      ]
    },
    "panelTitle": {
      "type": "string"
    },
    "panelJustify": {
      "type": "boolean"
    },
    "regions": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "label": {
            "type": "string"
          }
        },
        "required": [
          "key",
          "label"
        ]
      }
    }
  },
  "required": [
    "rendererName",
    "$schema",
    "name",
  ]
}
