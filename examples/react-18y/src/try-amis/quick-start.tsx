import * as React from "react"
import "amis/lib/themes/cxd.css"
import axios from "axios"
import copy from "copy-to-clipboard"

import { Button, render as renderAmis, Renderer } from "amis"
import { ToastComponent, AlertComponent, alert, confirm, toast } from "amis-ui"

import { Card, Flex, Space } from "antd"

export const MyComponent = () => {
  return (
    <>
      <Flex vertical={true} gap={10}>
        <Card title={"Page"} style={{ width: "100%" }}>
          <MyComponentOnlyJsonLearn />
        </Card>

        <Card>
          <Flex vertical={false} wrap={true} gap={20} style={{ padding: "20px" }}>
            <Card title={"Only JSON Syntax"}>
              <MyComponentOnlyJsonRenderer />
            </Card>

            <Card title={"Only JSON Learn"} style={{ width: "1000px" }}></Card>
            <Card title={"React Syntax"}>
              <MyComponentAmix />
            </Card>
            <Card title={"JSON Syntax"}>
              <MyComponentJson />
            </Card>
          </Flex>
        </Card>
      </Flex>
    </>
  )
}

export class MyComponentAmix extends React.Component {
  render() {
    return (
      <Flex vertical={false} wrap={true} gap={20} style={{ padding: "20px" }}>
        <Card title={"Amix Syntax"}>
          <Space draggable={true}>
            <Button level="primary">button1</Button>
            <Button className="m-r-xs" level="primary" classPrefix="cxd-">
              button
            </Button>
            <Button className="m-r-xs" level="secondary" classPrefix="cxd-">
              button
            </Button>
            <Button className="m-r-xs" level="success" classPrefix="cxd-">
              button
            </Button>
            <Button className="m-r-xs" level="info" classPrefix="cxd-">
              button
            </Button>
            <Button className="m-r-xs" level="warning" classPrefix="cxd-">
              button
            </Button>
            <Button className="m-r-xs" level="danger" classPrefix="cxd-">
              button
            </Button>
            <Button className="m-r-xs" level="light" classPrefix="cxd-">
              button
            </Button>
            <Button className="m-r-xs" level="dark" classPrefix="cxd-">
              button
            </Button>
          </Space>
        </Card>
        <Card title={"Antd Syntax"}>
          <Space draggable={true}>
            <Button className="m-r-xs" size="xs" classPrefix="cxd-">
              button
            </Button>
            <Button className="m-r-xs" size="sm" classPrefix="cxd-">
              button
            </Button>
            <Button className="m-r-xs" size="md" classPrefix="cxd-">
              button
            </Button>
            <Button className="m-r-xs" size="lg" classPrefix="cxd-">
              button
            </Button>
          </Space>
        </Card>
        <Card title={"With Amix Icons"}>
          <Space draggable={true}>
            <Button className="m-r-xs" classPrefix="cxd-">
              <i className="fa fa-cloud" />
              <span>Button</span>
            </Button>
            <Button className="m-r-xs" classPrefix="cxd-">
              <span>Button</span> <i className="fa fa-cloud" />
            </Button>
            <Button className="m-r-xs" classPrefix="cxd-" iconOnly>
              <i className="fa fa-cloud" />
            </Button>
          </Space>
        </Card>
      </Flex>
    )
  }
}

export class MyComponentOnlyJsonLearn extends React.Component {
  render() {
    return (
      <>
        {renderAmis({
          definitions: {
            options: {
              type: "combo",
              multiple: true,
              multiLine: true,
              addButtonText: "new",
              name: "options",
              items: [
                {
                  type: "group",
                  body: [
                   {
                      label: "name",
                      name: "label",
                      type: "input-text",
                      required: true,
                    },
                    {
                      label: "value",
                      name: "value",
                      type: "input-text",
                      required: true,
                    },
                  ],
                },
                {
                  label: "switch",
                  type: "switch",
                  name: "hasChildren",
                  mode: "inline",
                  className: "block",
                },
                {
                  $ref: "options",
                  label: "options",
                  name: "children",
                  visibleOn: "this.hasOwnProperty('hasChildren') && this.hasChildren",
                  addButtonText: "new sub-option",
                },
              ],
            },
          },
          type: "page",
          title: "page",
          body: [
            {
              type: "form",
              title: "form",
              api: "api/xxx",
              actions: [

              ],
              body: [
                {
                  $ref: "options",
                  label: "options",
                },
                {
                  type: "static",
                  label: "currentValue",
                  tpl: "<pre>${options|json}</pre>",
                },
              ],
            },
          ],
        })}

        {renderAmis({
          type: "page",
          style: {
            height: "500px",
          },
          asideResizor: true,
          asideMinWidth: 150,
          asideMaxWidth: 400,
          aside: [
            {
              type: "tpl",
              tpl: "Aside",
            },
          ],
          toolbar: [
            {
              id: "u:2",
              type: "button-toolbar",
              buttons: [
                {
                  type: "button",
                  label: "default",
                  id: "u:3",
                },
                {
                  type: "button",
                  label: "main",
                  level: "primary",
                  id: "u:4",
                },
                {
                  type: "button",
                  label: "Secondary",
                  level: "secondary",
                  id: "u:5",
                },
                {
                  type: "button",
                  label: "information",
                  level: "info",
                  id: "u:6",
                },
                {
                  type: "button",
                  label: "success",
                  level: "success",
                  id: "u:7",
                },
                {
                  type: "button",
                  label: "warning",
                  level: "warning",
                  id: "u:8",
                },
                {
                  type: "button",
                  label: "Danger",
                  level: "danger",
                  id: "u:9",
                },
                {
                  type: "button",
                  label: "light color",
                  level: "light",
                  id: "u:10",
                },
                {
                  type: "button",
                  label: "dark",
                  level: "dark",
                  id: "u:11",
                },
                {
                  type: "button",
                  label: "Link",
                  level: "link",
                  id: "u:12",
                },
              ],
              mode: "horizontal",
              visible: true,
            },
          ],
          body: [
            {
              type: "amis",
              schema: {
                type: "button",
                label: "Popup Button",
                actionType: "dialog",
                dialog: {
                  closeOnEsc: true,
                  title: "Dialog Title",
                  body: "this is simple popup dialog",
                },
              },
            },
            {
              type: "tpl",
              tpl: "Hello World!",
            },
            {
              type: "divider",
            },
            {
              type: "form",
              title: "Form title",
              body: [
                {
                  type: "input-text",
                  name: "name",
                  label: "fullName",
                },
              ],
              actions: [
                {
                  type: "button",
                  label: "Submit btn",
                  onEvent: {
                    click: {
                      actions: [
                        {
                          actionType: "submit",
                          componentId: "u:95ebcea1d28d",
                        },
                      ],
                    },
                  },
                  level: "primary",
                  id: "u:d84cd54d0de2",
                },
              ],
            },
          ],
          id: "u:1",
        })}
      </>
    )
  }

  // render() {
  //   return (
  //       <>
  //         <Flex vertical={true} gap={10}>
  //           <div key={1}>
  //             {renderAmis({
  //               type: "page",
  //               data: {
  //                 text: "world!",
  //               },
  //               body: "Hello, ${text}",
  //             })}
  //           </div>
  //           <Button level="primary" key={2}>
  //             button tag
  //           </Button>
  //           <div key={3}>
  //             {renderAmis({
  //               type: "page",
  //               body: {
  //                 type: "amis",
  //                 schema: {
  //                   type: "tpl",
  //                   tpl: "amis render",
  //                 },
  //               },
  //             })}
  //           </div>
  //           <div key={4}>
  //             {renderAmis({
  //               type: "amis",
  //               schema: {
  //                 type: "button",
  //                 label: "Popup Button",
  //                 actionType: "dialog",
  //                 dialog: {
  //                   closeOnEsc: true,
  //                   title: "Dialog Title",
  //                   body: "this is simple popup dialog",
  //                 },
  //               },
  //             })}
  //           </div>
  //
  //
  //         </Flex>
  //       </>
  //   )
  // }
}

export class MyComponentOnlyJsonRenderer extends React.Component {
  render() {
    let theme = "cxd"
    let locale = "en-US"

    // Don't use React.StrictMode, it's not supported yet
    return (
      <div>
        <p>Rendering the page via amis</p>
        <ToastComponent theme={theme} key="toast" position={"top-right"} locale={locale} />
        <AlertComponent theme={theme} key="alert" locale={locale} />
        {renderAmis(
          {
            //Here is the Json configuration of amis.
            type: "page",
            title: "Simple page",
            body: "content",
          },
          {
            // props...
            // locale: 'en-US' // Please refer to the "multi-language" documentation
            // scopeRef: (ref: any) => (amisScoped = ref) // The function is the same as amisScoped in the previous SDK
          },
          {
            //The following three interfaces must be implemented
            fetcher: ({
              url, // interface address
              method, // Request method get, post, put, delete
              data, // Request data
              responseType,
              config, // Other configurations
              headers, // request headers
            }: any) => {
              config = config || {}
              config.withCredentials = true
              responseType && (config.responseType = responseType)

              if (config.cancelExecutor) {
                config.cancelToken = new (axios as any).CancelToken(config.cancelExecutor)
              }

              config.headers = headers || {}

              if (method !== "post" && method !== "put" && method !== "patch") {
                if (data) {
                  config.params = data
                }

                return (axios as any)[method](url, config)
              } else if (data && data instanceof FormData) {
                config.headers = config.headers || {}
                config.headers["Content-Type"] = "multipart/form-data"
              } else if (
                data &&
                typeof data !== "string" &&
                !(data instanceof Blob) &&
                !(data instanceof ArrayBuffer)
              ) {
                data = JSON.stringify(data)
                config.headers = config.headers || {}
                config.headers["Content-Type"] = "application/json"
              }

              return (axios as any)[method](url, data, config)
            },
            isCancel: (value: any) => (axios as any).isCancel(value),
            copy: (content) => {
              copy(content)
              toast.success("内容已复制到粘贴板")
            },
            theme,

            // These latter interfaces do not need to be implemented

            //The default is address jump
            // jumpTo: (
            // location: string /*target address*/,
            // action: any /* action object */
            // ) => {
            // // Used to implement page jump, actionType: link and url will come in.
            // },

            // updateLocation: (
            // location: string /*target address*/,
            // replace: boolean /*Is it replace or push? */
            // ) => {
            // // Address replacement, similar to jumpTo
            // },

            // getModalContainer: () => {
            // // DOM node mounted by the pop-up window
            // },

            // isCurrentUrl: (
            // url: string /*url address*/,
            // ) => {
            // // Used to determine whether the target address is the current address
            // },

            // notify: (
            // type: 'error' | 'success' /**/,
            // msg: string /*Prompt content*/
            // ) => {
            // toast[type]
            // ? toast[type](msg, type === 'error' ? 'System Error' : 'System Message')
            // : console.warn('[Notify]', type, msg);
            // },
            // alert,
            //confirm,
            // tracker: (eventTracke) => {}
          },
        )}
      </div>
    )
  }
}

export class MyComponentJson extends React.Component {
  render() {
    return (
      <Flex vertical={false} wrap={true} gap={20} style={{ padding: "20px" }}>
        <Card title={"Amix Syntax"}>
          <Space draggable={true}>
            <Button level="primary">button1</Button>
            <Button className="m-r-xs" level="primary" classPrefix="cxd-">
              button
            </Button>
            <Button className="m-r-xs" level="secondary" classPrefix="cxd-">
              button
            </Button>
            <Button className="m-r-xs" level="success" classPrefix="cxd-">
              button
            </Button>
            <Button className="m-r-xs" level="info" classPrefix="cxd-">
              button
            </Button>
            <Button className="m-r-xs" level="warning" classPrefix="cxd-">
              button
            </Button>
            <Button className="m-r-xs" level="danger" classPrefix="cxd-">
              button
            </Button>
            <Button className="m-r-xs" level="light" classPrefix="cxd-">
              button
            </Button>
            <Button className="m-r-xs" level="dark" classPrefix="cxd-">
              button
            </Button>
          </Space>
        </Card>
        <Card title={"Antd Syntax"}>
          <Space draggable={true}>
            <Button className="m-r-xs" size="xs" classPrefix="cxd-">
              button
            </Button>
            <Button className="m-r-xs" size="sm" classPrefix="cxd-">
              button
            </Button>
            <Button className="m-r-xs" size="md" classPrefix="cxd-">
              button
            </Button>
            <Button className="m-r-xs" size="lg" classPrefix="cxd-">
              button
            </Button>
          </Space>
        </Card>
        <Card title={"With Amix Icons"}>
          <Space draggable={true}>
            <Button className="m-r-xs" classPrefix="cxd-">
              <i className="fa fa-cloud" />
              <span>Button</span>
            </Button>
            <Button className="m-r-xs" classPrefix="cxd-">
              <span>Button</span> <i className="fa fa-cloud" />
            </Button>
            <Button className="m-r-xs" classPrefix="cxd-" iconOnly>
              <i className="fa fa-cloud" />
            </Button>
          </Space>
        </Card>
      </Flex>
    )
  }
}
