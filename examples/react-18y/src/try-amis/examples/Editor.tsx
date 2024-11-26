/* eslint-disable */
import * as React from "react"
import { Editor, ShortcutKey, BasePlugin, setThemeConfig } from "amis-editor"
import { uuid, Button } from "amis"
import { currentLocale } from "i18n-runtime"
import { Portal } from "react-overlays"
// import { Icon } from "./icons/index"
import LayoutList from "./layout/index"
import { cxdData } from "amis-theme-editor-helper"

// To test the internationalization of the organization attribute configuration panel, you can leave the following comments// import './renderer/InputTextI18n';
// import './renderer/TextareaI18n';
// import './utils/overwriteSchemaTpl';
// const i18nEnabled = true;
const i18nEnabled = false
setThemeConfig(cxdData)

const schema = {
  type: "page",
  title: "Simple Form Page",
  regions: ["body"],
  body: [
    {
      type: "form",
      body: [
        {
          type: "input-text",
          name: "a",
          label: "Text",
        },
      ],
    },
  ],
}

const formSchema = {
  type: "doc-entity",
  fields: [],
}

const schemas = [
  {
    type: "object",
    properties: {
      amisUser: {
        type: "object",
        title: "User information",
        properties: {
          id: {
            type: "string",
            title: "User ID",
          },
          name: {
            type: "string",
            title: "username",
          },
          email: {
            type: "string",
            title: "Mailbox",
          },
          nickName: {
            type: "string",
            title: "nickname",
          },
          phone: {
            type: "string",
            title: "Mobile phone number",
          },
          avatar: {
            type: "string",
            title: "User avatar",
          },
        },
      },
      amisApp: {
        type: "object",
        title: "Application Information",
        properties: {
          id: {
            type: "string",
            title: "Application ID",
          },
          name: {
            type: "string",
            title: "Application name",
          },
          logo: {
            type: "string",
            title: "Application Logo",
          },
          env: {
            type: "string",
            title: "Current operating environment",
          },
        },
      },
      amisCompany: {
        type: "object",
        title: "Organization Information",
        properties: {
          id: {
            type: "string",
            title: "Organization ID",
          },
          name: {
            type: "string",
            title: "Organization name",
          },
          logo: {
            type: "string",
            title: "Organization Logo",
          },
          key: {
            type: "string",
            title: "Organizational Identity",
          },
        },
      },
      "window:location": {
        type: "object",
        title: "Browser variables",
        properties: {
          href: {
            type: "string",
            title: "href",
          },
          origin: {
            type: "string",
            title: "origin",
          },
          protocol: {
            type: "string",
            title: "protocol",
          },
          host: {
            type: "string",
            title: "host",
          },
          hostname: {
            type: "string",
            title: "hostname",
          },
          port: {
            type: "string",
            title: "port",
          },
          pathname: {
            type: "string",
            title: "pathname",
          },
          search: {
            type: "string",
            title: "search",
          },
          hash: {
            type: "string",
            title: "hash",
          },
        },
      },
    },
  },
  {
    type: "object",
    properties: {
      __query: {
        title: "Page input parameters",
        type: "object",
        required: [],
        properties: {
          name: {
            type: "string",
            title: "username",
          },
        },
      },
      __page: {
        title: "Page variable",
        type: "object",
        required: [],
        properties: {
          num: {
            type: "number",
            title: "Quantity",
          },
        },
      },
    },
  },
]

const variableSchemas = {
  type: "object",
  $id: "appVariables",
  properties: {
    ProductName: {
      type: "string",
      title: "product name",
      default: "Object storage",
    },
    Banlance: {
      type: "number",
      title: "Account Balance",
      default: "0.00",
    },
    ProductNum: {
      type: "integer",
      title: "Product quantity",
      default: "0.00",
    },
    isOnline: {
      type: "boolean",
      title: "Is it an online environment",
      default: "false",
    },
    ProductList: {
      type: "array",
      items: {
        type: "string",
        title: "product name",
      },
      title: "Product List",
      default: '["BOS", "CFS", "PFS", "CloudFlow", "MongoDB"]',
    },
    PROFILE: {
      type: "object",
      title: "Personal information",
      properties: {
        FirstName: {
          type: "string",
          title: "name",
        },
        Age: {
          type: "integer",
          title: "Age",
        },
        Address: {
          type: "object",
          title: "address",
          required: ["street", "postcode"],
          properties: {
            street: {
              type: "string",
              title: "street name",
            },
            postcode: {
              type: "number",
              title: "Postcode",
            },
          },
        },
      },
    },
  },
  default: {
    ProductName: "BCC",
    Banlance: 1234.888,
    ProductNum: 10,
    isOnline: false,
    ProductList: ["BCC", "BOS", "VPC"],
    PROFILE: {
      FirstName: "Amis",
      Age: 18,
      Address: {
        street: "ShangDi",
        postcode: 100001,
      },
    },
  },
}

const variableDefaultData = {
  appVariables: {
    ProductName: "BCC",
    Banlance: 1234.888,
    ProductNum: 10,
    isOnline: false,
    ProductList: ["BCC", "BOS", "VPC"],
    PROFILE: {
      FirstName: "Amis",
      Age: 18,
      Address: {
        street: "ShangDi",
        postcode: 100001,
      },
    },
  },
}

const variables: any = [
  {
    name: "appVariables",
    title: "Memory variable",
    parentId: "root",
    order: 1,
    schema: variableSchemas,
  },
]

const EditorType = {
  EDITOR: "editor",
  MOBILE: "mobile",
  FORM: "form",
}

// const editorLanguages = [
//   {
//     label: "Simplified Chinese",
//     value: "zh-CN",
//   },
//   {
//     label: "English",
//     value: "en-US",
//   },
// ]

const globalEvents = [
  {
    name: "globalEventA",
   label: "Global event A",
    description: "Global event action A",
    mapping: [
      {
        key: "name",
        type: "string",
      },
      {
        key: "age",
        type: "number",
      },
    ],
  },
  {
    name: "globalEventB",
    label: "Global event B",
    description: "Global event action A",
    mapping: [
      {
        key: "name",
        type: "string",
      },
    ],
  },
]

/**
 * Custom renderer example
 */



/**
 * Custom renderer editing plug-in
 */
class MyRendererPlugin extends BasePlugin {
// This should correspond to the corresponding renderer name.
  // When registering a renderer, you will be asked to specify the renderer name.
  rendererName = "my-renderer"

  // This is currently only supported. The code editor will be opened after configuration.
  $schema = "/schemas/UnkownSchema.json"

  // Used to configure name and description
  name = "Custom Renderer"
  description = "This is just an example"

  // tag, determines which tab it will be displayed under
  tags = ["custom", "form item"]

  // icon
  // icon = "fa fa-user"

  // Used to generate preview images
  previewSchema = {
    type: "my-renderer",
    target: "demo",
  }
  // 拖入组件里面时的初始数据
  scaffold = {
    type: "my-renderer",
    target: "233",
  }

  // 右侧面板相关
  panelTitle = "自定义组件"
  panelBody = [
    {
      type: "tabs",
      tabsMode: "line",
      className: "m-t-n-xs",
      contentClassName: "no-border p-l-none p-r-none",
      tabs: [
      {
          title: "General",
          body: [
            {
              name: "target",
              label: "Target",
              type: "input-text",
            },
          ],
        },

        {
          title: "Appearance",
          body: [],
        },
      ],
    },
  ]

  // /**
  //  * 配置了 panelControls 自动生成配置面板
  //  * @param context
  //  * @param panels
  //  */
  // buildEditorPanel(context, panels) {
  //   panels.push({
  //     key: 'xxxx',
  //     title: '设置',
  //     render: () => {
  //       return <div>面板内容</div>;
  //     }
  //   });
  // }

  // scaffoldForm = {
  //   title: '标题',
  //   body: [
  //     {
  //       name: 'target',
  //       label: 'Target',
  //       type: 'input-text'
  //     }
  //   ]
  // };

  // onActive(event) {
  //   const context = event.context;

  //   if (context.info?.plugin !== this || !context.node) {
  //     return;
  //   }

  //   const node = context.node;
  //   node.setHeightMutable(true);
  //   node.setWidthMutable(true);
  // }

  // onWidthChangeStart(event) {
  //   return this.onSizeChangeStart(event, 'horizontal');
  // }

  // onHeightChangeStart(event) {
  //   return this.onSizeChangeStart(event, 'vertical');
  // }

  // onSizeChangeStart(event, direction = 'both') {
  //   const context = event.context;
  //   const node = context.node;
  //   if (node.info?.plugin !== this) {
  //     return;
  //   }

  //   const resizer = context.resizer;
  //   const dom = context.dom;
  //   const frameRect = dom.parentElement.getBoundingClientRect();
  //   const rect = dom.getBoundingClientRect();
  //   const startX = context.nativeEvent.pageX;
  //   const startY = context.nativeEvent.pageY;

  //   event.setData({
  //     onMove: e => {
  //       const dy = e.pageY - startY;
  //       const dx = e.pageX - startX;
  //       const height = Math.max(50, rect.height + dy);
  //       const width = Math.max(100, Math.min(rect.width + dx, frameRect.width));
  //       const state = {
  //         width,
  //         height
  //       };

  //       if (direction === 'both') {
  //         resizer.setAttribute('data-value', `${width}px x ${height}px`);
  //       } else if (direction === 'vertical') {
  //         resizer.setAttribute('data-value', `${height}px`);
  //         delete state.width;
  //       } else {
  //         resizer.setAttribute('data-value', `${width}px`);
  //         delete state.height;
  //       }

  //       node.updateState(state);

  //       requestAnimationFrame(() => {
  //         node.calculateHighlightBox();
  //       });
  //     },
  //     onEnd: e => {
  //       const dy = e.pageY - startY;
  //       const dx = e.pageX - startX;
  //       const height = Math.max(50, rect.height + dy);
  //       const width = Math.max(100, Math.min(rect.width + dx, frameRect.width));
  //       const state = {
  //         width,
  //         height
  //       };

  //       if (direction === 'vertical') {
  //         delete state.width;
  //       } else if (direction === 'horizontal') {
  //         delete state.height;
  //       }

  //       resizer.removeAttribute('data-value');
  //       node.updateSchema(state);
  //       requestAnimationFrame(() => {
  //         node.calculateHighlightBox();
  //       });
  //     }
  //   });
  // }

  popOverBody = [
    {
      name: "target",
      label: "Target",
      type: "input-text",
    },
  ]
}

LayoutList.push(MyRendererPlugin)

export default class AMisSchemaEditor extends React.Component<any, any> {
  state: any = {
    preview: localStorage.getItem("editting_preview") ? true : false,
    type: localStorage.getItem("editting_preview_type") || EditorType.EDITOR,
    schema: localStorage.getItem("editting_schema") ? JSON.parse(localStorage.getItem("editting_schema")!) : schema,
    curLanguage: currentLocale(), // 获取当前语料类型
  }

  constructor(props: any) {
    super(props)

    if (i18nEnabled) {
      this.state = {
        ...this.state,
        replaceText: {
          "i18n:1189fb5d-ac5b-4558-b363-068ce5decc99": uuid(),
        },
      }
    }

    const type = localStorage.getItem("editting_preview_type") || EditorType.EDITOR

    this.state.schema = this.getSchema(type)
  }

  getSchema(type: string) {
    if (type === EditorType.FORM) {
      const schema = localStorage.getItem("editting_schema_form")

      if (schema) {
        return JSON.parse(schema)
      }
      return formSchema
    }

    const lsSchema = localStorage.getItem("editting_schema")

    if (lsSchema) {
      return JSON.parse(lsSchema)
    }

    return schema
  }

  handleChange = (value: any) => {
    const type = this.state.type

    if (type === EditorType.FORM) {
      localStorage.setItem("editting_schema_form", JSON.stringify(value))
    } else {
      localStorage.setItem("editting_schema", JSON.stringify(value))
    }

    this.setState({
      schema: value,
    })
  }

  changeLocale(value: any) {
    localStorage.setItem("suda-i18n-locale", value)
    window.location.reload()
  }

  onSave = () => {
    const curSchema = this.state.schema
    localStorage.setItem("editting_schema", JSON.stringify(curSchema))
  }

  handlePreviewChange = (preview: any) => {
    localStorage.setItem("editting_preview", preview ? "true" : "")

    this.setState({
      preview: !!preview,
    })
  }

  togglePreview = () => {
    this.handlePreviewChange(!this.state.preview)
  }

  handleTypeChange = (editorType: any) => {
    const type = editorType || EditorType.EDITOR
    localStorage.setItem("editting_preview_type", type)

    this.setState({
      type: type,
      schema: this.getSchema(type),
    })
  }

  clearCache = () => {
    localStorage.removeItem("editting_schema")
    this.setState({
      schema: schema,
    })
  }

  renderEditor() {
    const { theme } = this.props
    const { preview, type, schema } = this.state
    const isMobile = type === EditorType.MOBILE
    const { replaceText } = this.state

    return (
      <Editor
        preview={preview}
        isMobile={isMobile}
        value={schema}
        schemas={schemas}
        variables={variables}
        onChange={this.handleChange}
        onPreview={this.handlePreviewChange}
        onSave={this.onSave}
        className="is-fixed"
        i18nEnabled={i18nEnabled}
        theme={theme || "cxd"}
        showCustomRenderersPanel={true}
        plugins={LayoutList} // 存放常见布局组件
        $schemaUrl={`${location.protocol}//${location.host}/schema.json`}
        actionOptions={
          {
            showOldEntry: false,
            globalEventGetter: () => globalEvents,
          } as any
        }
        amisEnv={
          {
            variable: {
              id: "appVariables",
              namespace: "appVariables",
              schema: variableSchemas,
              data: variableDefaultData,
            },
            replaceText,
          } as any
        }
        ctx={{
          __page: {
            num: 2,
          },
          ...variableDefaultData,
        }}
      />
    )
  }

  render() {
    const { preview, type } = this.state
    return (
      <div className="Editor-inner">
        <Portal container={() => document.querySelector("#headerBar") as any}>
          <>
            <div className="Editor-view-mode-group-container">
              <div className="Editor-view-mode-group">
                <div
                  className={`Editor-view-mode-btn ${type === EditorType.EDITOR ? "is-active" : ""}`}
                  onClick={() => {
                    this.handleTypeChange(EditorType.EDITOR)
                  }}
                >
                  {/*<Icon icon="pc-preview" title="PC" />*/}
                </div>
                <div
                  className={`Editor-view-mode-btn ${type === EditorType.MOBILE ? "is-active" : ""}`}
                  onClick={() => {
                    this.handleTypeChange(EditorType.MOBILE)
                  }}
                >
                  {/*<Icon icon="h5-preview" title="Mobile" />*/}
                </div>
              </div>
            </div>

            <div className="Editor-header-actions">
              <ShortcutKey />
              {/*{*/}
              {/*  // @ts-ignore*/}
              {/*  // vite编译时替换*/}
              {/*  __editor_i18n ? (*/}
              {/*    <Select*/}
              {/*      className="margin-left-space "*/}
              {/*      options={editorLanguages}*/}
              {/*      value={curLanguage}*/}
              {/*      clearable={false}*/}
              {/*      onChange={(e: any) => this.changeLocale(e.value)}*/}
              {/*    />*/}
              {/*  ) : null*/}
              {/*}*/}

              {i18nEnabled && (
                <Button
                  className="ml-2"
                  level="info"
                  onClick={() => {
                    let _uuid = uuid()
                    console.log("Click the Test Internationalization button", _uuid)
                    this.setState({
                      appLocale: _uuid,
                      replaceText: {
                        "i18n:1189fb5d-ac5b-4558-b363-068ce5decc99": _uuid,
                      },
                    })
                  }}
                >
                  Switch corpus content
                </Button>
              )}

              <div
                className={`header-action-btn ${preview ? "primary" : ""}`}
                onClick={() => {
                  this.togglePreview()
                }}
              >
                {preview ? "Edit" : "Preview"}
              </div>
            </div>
          </>
        </Portal>

        {this.renderEditor()}
      </div>
    )
  }
}
