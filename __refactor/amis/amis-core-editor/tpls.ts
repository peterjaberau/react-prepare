const tpls = {
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
