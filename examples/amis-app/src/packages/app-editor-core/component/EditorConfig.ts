import type { SchemaObject } from "amis"

export const defaultEditorConfig = {
  value: {
    type: "page",
    title: "Simple Form Page",
    regions: ["body"],
    body: [
      {
        type: "service",
        body: [
          {
            type: "panel",
            title: "标题",
            body: [
              {
                type: "tpl",
                tpl: "内容",
                wrapperComponent: "",
                inline: false,
                id: "u:f418d4245c33",
              },
            ],
            id: "u:658b78af13e8",
            actions: [
              {
                type: "button",
                label: "button",
                onEvent: {
                  click: {
                    actions: [],
                  },
                },
                id: "u:8a201b3f8376",
                icon: "fa fa-snapchat",
                rightIcon: "fa fa-snapchat-square",
                level: "primary",
              },
            ],
            affixFooter: false,
          },
        ],
        id: "u:76e1b0ff8ebd",
        dsType: "api",
      },
      {
        type: "code",
        language: "html",
        value: "<div>html</div>",
        id: "u:3422108ce1c8",
      },
      {
        type: "collapse",
        header: "标题",
        body: [
          {
            type: "tpl",
            tpl: "内容",
            wrapperComponent: "",
            inline: false,
            id: "u:72975dffc487",
          },
          {
            type: "flex",
            items: [
              {
                type: "container",
                body: [],
                size: "none",
                style: {
                  position: "static",
                  display: "block",
                  flex: "1 1 auto",
                  flexGrow: 1,
                  flexBasis: "0px",
                },
                wrapperBody: false,
                isFixedHeight: false,
                isFixedWidth: false,
                id: "u:f556377f3f13",
              },
              {
                type: "container",
                body: [],
                size: "none",
                style: {
                  position: "static",
                  display: "block",
                  flex: "1 1 auto",
                  flexGrow: 1,
                  flexBasis: "0px",
                },
                wrapperBody: false,
                isFixedHeight: false,
                isFixedWidth: false,
                id: "u:5a835dbbb4a3",
              },
              {
                type: "container",
                body: [],
                size: "none",
                style: {
                  position: "static",
                  display: "block",
                  flex: "1 1 auto",
                  flexGrow: 1,
                  flexBasis: "0px",
                },
                wrapperBody: false,
                isFixedHeight: false,
                isFixedWidth: false,
                id: "u:e1c849b6f695",
              },
              {
                type: "container",
                body: [],
                size: "none",
                style: {
                  position: "static",
                  display: "block",
                  flex: "1 1 auto",
                  flexGrow: 1,
                  flexBasis: "0px",
                },
                wrapperBody: false,
                isFixedHeight: false,
                isFixedWidth: false,
                id: "u:d8e325b5bc33",
              },
              {
                type: "container",
                body: [],
                size: "none",
                style: {
                  position: "static",
                  display: "block",
                  flex: "1 1 auto",
                  flexGrow: 1,
                  flexBasis: 0,
                },
                wrapperBody: false,
                isFixedHeight: false,
                isFixedWidth: false,
                id: "u:8cd60d8c7dfa",
              },
            ],
            style: {
              position: "relative",
              rowGap: "10px",
              columnGap: "10px",
            },
            id: "u:2bfbfaa1b9d2",
          },
        ],
        id: "u:3bb5c003437b",
        themeCss: {
          baseControlClassName: {
            radius: {
              "top-right-border-radius": "var(--borders-radius-2)",
            },
          },
        },
      },
      {
        type: "service",
        body: [],
        id: "u:fe2410f8920a",
        dsType: "api",
      },
    ],
    id: "u:1577ddbabddd",
    pullRefresh: {
      disabled: true,
    },
    onEvent: {},
  },
  preview: false,
  isMobile: false,
  isSubEditor: false,
  autoFocus: true,
  className: "is-fixed",
  $schemaUrl: "http://localhost:4000/schema.json",
  schemas: [
    {
      type: "object",
      properties: {
        amisUser: {
          type: "object",
          title: "用户信息",
          properties: {
            id: {
              type: "string",
              title: "用户ID",
            },
            name: {
              type: "string",
              title: "用户名",
            },
            email: {
              type: "string",
              title: "邮箱",
            },
            nickName: {
              type: "string",
              title: "昵称",
            },
            phone: {
              type: "string",
              title: "手机号",
            },
            avatar: {
              type: "string",
              title: "用户头像",
            },
          },
        },
        amisApp: {
          type: "object",
          title: "应用信息",
          properties: {
            id: {
              type: "string",
              title: "应用ID",
            },
            name: {
              type: "string",
              title: "应用名称",
            },
            logo: {
              type: "string",
              title: "应用Logo",
            },
            env: {
              type: "string",
              title: "当前运行环境",
            },
          },
        },
        amisCompany: {
          type: "object",
          title: "组织信息",
          properties: {
            id: {
              type: "string",
              title: "组织ID",
            },
            name: {
              type: "string",
              title: "组织名称",
            },
            logo: {
              type: "string",
              title: "组织Logo",
            },
            key: {
              type: "string",
              title: "组织标识",
            },
          },
        },
        "window:location": {
          type: "object",
          title: "浏览器变量",
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
          title: "页面入参",
          type: "object",
          required: [],
          properties: {
            name: {
              type: "string",
              title: "用户名",
            },
          },
        },
        __page: {
          title: "页面变量",
          type: "object",
          required: [],
          properties: {
            num: {
              type: "number",
              title: "数量",
            },
          },
        },
      },
    },
  ],
  theme: "cxd",
  toolbarMode: "default",
  noDialog: false,
  appLocale: "en-US",
  i18nEnabled: false,
  showCustomRenderersPanel: true,
  amisDocHost: "#",
  // superEditorData: null,
  // withSuperDataSchema: false,
  // hostManager: null,
  // hostNode: null,
  amisEnv: {
    variable: {
      id: "appVariables",
      namespace: "appVariables",
      schema: "[Circular]",
      data: {
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
      },
    },
  },
  ctx: {
    __page: {
      num: 2,
    },
    appVariables: "[Circular]",
  },
  data: {},
  // disableBultinPlugin: false,
  // scene: "default",
  // disablePluginList: [],
  plugins: [],
  actionOptions: {
    showOldEntry: false,
  },
  variables: [
    {
      name: "appVariables",
      title: "内存变量",
      parentId: "root",
      order: 1,
      schema: {
        type: "object",
        $id: "appVariables",
        properties: {
          ProductName: {
            type: "string",
            title: "产品名称",
            default: "对象存储",
          },
          Banlance: {
            type: "number",
            title: "账户余额",
            default: "0.00",
          },
          ProductNum: {
            type: "integer",
            title: "产品数量",
            default: "0.00",
          },
          isOnline: {
            type: "boolean",
            title: "是否线上环境",
            default: "false",
          },
          ProductList: {
            type: "array",
            items: {
              type: "string",
              title: "产品名称",
            },
            title: "产品列表",
            default: '["BOS", "CFS", "PFS", "CloudFlow", "MongoDB"]',
          },
          PROFILE: {
            type: "object",
            title: "个人信息",
            properties: {
              FirstName: {
                type: "string",
                title: "名字",
              },
              Age: {
                type: "integer",
                title: "年龄",
              },
              Address: {
                type: "object",
                title: "地址",
                required: ["street", "postcode"],
                properties: {
                  street: {
                    type: "string",
                    title: "街道名称",
                  },
                  postcode: {
                    type: "number",
                    title: "邮编",
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
      },
    },
  ],
  readonly: false,


}
