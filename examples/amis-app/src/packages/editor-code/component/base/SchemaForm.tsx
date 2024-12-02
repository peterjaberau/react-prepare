import React from "react"
import { createObjectFromChain, extractObjectChain, IFormStore, render, toast } from "amis"
import { diff, getThemeConfig } from "@/packages/editor-code/util.ts"
import omit from "lodash/omit"
import cx from "classnames"

/**
 * SchemaForm is a React component that renders a form based on a schema.
 * It supports dynamic form generation, validation, and submission.
 *
 * @param {Object} props - The properties for the SchemaForm component.
 * @param {string} [props.propKey] - The key for the form schema.
 * @param {Array} [props.body] - The body of the form schema.
 * @param {Object} [props.definitions] - The definitions for the form schema.
 * @param {Function} props.onChange - The function to call when the form value changes.
 * @param {any} props.value - The current value of the form.
 * @param {any} props.env - The environment configuration.
 * @param {any} [props.api] - The API configuration for the form.
 * @param {Function} [props.popOverContainer] - The function to get the popover container.
 * @param {boolean} [props.submitOnChange] - Whether to submit the form on change.
 * @param {any} [props.node] - The editor node type.
 * @param {any} props.manager - The editor manager.
 * @param {boolean} [props.justify] - Whether to justify the form layout.
 * @param {any} [props.ctx] - The context for the form.
 * @param {Function} [props.pipeIn] - The function to transform the input value.
 * @param {Function} [props.pipeOut] - The function to transform the output value.
 * @param {boolean} [props.readonly] - Whether the form is read-only.
 * @param {Function} props.getThemeConfig - Function to get the theme configuration.
 * @param {Function} props.diff - Function to calculate the difference between two values.
 */
export function SchemaForm({
  propKey,
  body,
  definitions,
  onChange,
  value,
  env,
  api,
  popOverContainer,
  submitOnChange,
  node,
  manager,
  justify,
  ctx,
  pipeIn,
  pipeOut,
  readonly,
}: {
  propKey?: string
  env: any
  body?: Array<any>
  definitions?: any
  value: any
  api?: any
  onChange: (value: any, diff: any, filter: (schema: any, value: any, id: string, diff?: any) => any) => void
  popOverContainer?: () => HTMLElement | void
  submitOnChange?: boolean
  node?: any
  manager: any
  panelById?: string
  justify?: boolean
  ctx?: any
  pipeIn?: (value: any) => any
  pipeOut?: (value: any, oldValue: any) => any
  readonly?: boolean
}) {
  const schema = React.useMemo(() => {
    body = Array.isArray(body) ? body.concat() : []

    if (submitOnChange === false) {
      body.push({
        type: "submit",
        label: "Save",
        level: "primary",
        block: true,
        className: "ae-Settings-actions",
      })
    }
    const schema = {
      key: propKey,
      definitions,
      body,
      className: cx(
        "config-form-content",
        "ae-Settings-content",
        "hoverShowScrollBar",
        submitOnChange === false ? "with-actions" : "",
      ),
      wrapperComponent: "div",
      type: "form",
      title: "",
      mode: "normal",
      api,
      wrapWithPanel: false,
      submitOnChange: submitOnChange !== false,
      messages: {
        validateFailed: "",
      },
    } as any

    if (justify) {
      schema.mode = "horizontal"
      schema.horizontal = {
        left: 4,
        right: 8,
        justify: true,
      }
    }
    return schema
  }, [body, submitOnChange])

  const themeConfig = React.useMemo(() => getThemeConfig(), [])
  const submitSubscribers = React.useRef<Array<Function>>([])
  const subscribeSubmit = React.useCallback(
    (fn: (schema: any, value: any, id: string, diff?: any) => any, once = false) => {
      let raw = fn
      const unsubscribe = () => {
        submitSubscribers.current = submitSubscribers.current.filter((item) => ((item as any).__raw ?? item) !== raw)
      }

      if (once) {
        fn = (schema: any, value: any, id: string, diff?: any) => {
          const ret = raw(schema, value, id, diff)
          unsubscribe()
          return ret
        }
        ;(fn as any).__raw = raw
      }
      submitSubscribers.current.push(fn)
      return unsubscribe
    },
    [],
  )

  const [init, setInit] = React.useState(true)

  const data = React.useMemo(() => {
    value = value || {}
    const finalValue = pipeIn ? pipeIn(value) : value

    return createObjectFromChain([ctx, themeConfig, ...extractObjectChain(finalValue)])
  }, [value, themeConfig, ctx])

  return render(
    schema,
    {
      onFinished: async (newValue: any, action: any, store: IFormStore) => {
        newValue = pipeOut ? await pipeOut(newValue, value) : newValue
        const diffValue = diff(value, newValue)
        if (!diffValue) {
          return
        }

        if (readonly && !init) {
          toast.error("Modification not supported")
          store.setPristine(value)
          store.reset()
          return
        }
        setInit(false)
        onChange(newValue, diffValue, (schema, value, id, diff) => {
          return submitSubscribers.current.reduce((schema, fn) => {
            return fn(schema, value, id, diff)
          }, schema)
        })
      },
      data: data,
      node: node,
      manager: manager,
      popOverContainer,
      subscribeSchemaSubmit: subscribeSubmit,
    },
    {
      ...omit(env, "replaceText"),
    },
  )
}
