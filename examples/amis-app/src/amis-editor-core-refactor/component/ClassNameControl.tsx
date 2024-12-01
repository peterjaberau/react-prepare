import { FormItem, utils, Button, Overlay, PopOver, RendererProps } from "amis"
import React from "react"
import type { Schema } from "amis"
import { findDOMNode } from "react-dom"

interface ClassNameControlProps extends RendererProps {
  schema: Schema
}

interface ClassNameControlState {
  isFocused: boolean
  isOpened: boolean
}

const classOptions = [
  {
    label: "Margin",
    children: [
      {
        label: "Overall",
        children: [
          {
            label: "Extra Small",
            value: "m-xs",
          },
          {
            label: "Small",
            value: "m-sm",
          },
          {
            label: "Normal",
            value: "m",
          },
          {
            label: "Medium",
            value: "m-md",
          },
          {
            label: "Large",
            value: "m-lg",
          },
        ],
      },

      {
        label: "Top Margin",
        children: [
          {
            label: "Extra Small",
            value: "m-t-xs",
          },
          {
            label: "Small",
            value: "m-t-sm",
          },
          {
            label: "Normal",
            value: "m-t",
          },
          {
            label: "Medium",
            value: "m-t-md",
          },
          {
            label: "Large",
            value: "m-t-lg",
          },
        ],
      },

      {
        label: "Right Margin",
        children: [
          {
            label: "Extra Small",
            value: "m-r-xs",
          },
          {
            label: "Small",
            value: "m-r-sm",
          },
          {
            label: "Normal",
            value: "m-r",
          },
          {
            label: "Medium",
            value: "m-r-md",
          },
          {
            label: "Large",
            value: "m-r-lg",
          },
        ],
      },

      {
        label: "Bottom Margin",
        children: [
          {
            label: "Extra Small",
            value: "m-b-xs",
          },
          {
            label: "Small",
            value: "m-b-sm",
          },
          {
            label: "Normal",
            value: "m-b",
          },
          {
            label: "Medium",
            value: "m-b-md",
          },
          {
            label: "Large",
            value: "m-b-lg",
          },
        ],
      },

      {
        label: "Left Margin",
        children: [
          {
            label: "Extra Small",
            value: "m-l-xs",
          },
          {
            label: "Small",
            value: "m-l-sm",
          },
          {
            label: "Normal",
            value: "m-l",
          },
          {
            label: "Medium",
            value: "m-l-md",
          },
          {
            label: "Large",
            value: "m-l-lg",
          },
        ],
      },

      {
        label: "Unset",
        children: [
          {
            label: "All",
            value: "m-none",
          },
          "|",
          {
            label: "Top",
            value: "m-t-none",
          },
          {
            label: "Right",
            value: "m-r-none",
          },
          {
            label: "Bottom",
            value: "m-b-none",
          },
          {
            label: "Left",
            value: "m-l-none",
          },
        ],
      },
    ],
  },

  {
    label: "Padding",
    children: [
      {
        label: "Overall",
        children: [
          {
            label: "Extra Small",
            value: "p-xs",
          },
          {
            label: "Small",
            value: "p-sm",
          },
          {
            label: "Normal",
            value: "p",
          },
          {
            label: "Medium",
            value: "p-md",
          },
          {
            label: "Large",
            value: "p-lg",
          },
        ],
      },

      {
        label: "Top Padding",
        children: [
          {
            label: "Extra Small",
            value: "p-t-xs",
          },
          {
            label: "Small",
            value: "p-t-sm",
          },
          {
            label: "Normal",
            value: "p-t",
          },
          {
            label: "Medium",
            value: "p-t-md",
          },
          {
            label: "Large",
            value: "p-t-lg",
          },
        ],
      },

      {
        label: "Right Padding",
        children: [
          {
            label: "Extra Small",
            value: "p-r-xs",
          },
          {
            label: "Small",
            value: "p-r-sm",
          },
          {
            label: "Normal",
            value: "p-r",
          },
          {
            label: "Medium",
            value: "p-r-md",
          },
          {
            label: "Large",
            value: "p-r-lg",
          },
        ],
      },

      {
        label: "Bottom Padding",
        children: [
          {
            label: "Extra Small",
            value: "p-b-xs",
          },
          {
            label: "Small",
            value: "p-b-sm",
          },
          {
            label: "Normal",
            value: "p-b",
          },
          {
            label: "Medium",
            value: "p-b-md",
          },
          {
            label: "Large",
            value: "p-b-lg",
          },
        ],
      },

      {
        label: "Left Padding",
        children: [
          {
            label: "Extra Small",
            value: "p-l-xs",
          },
          {
            label: "Small",
            value: "p-l-sm",
          },
          {
            label: "Normal",
            value: "p-l",
          },
          {
            label: "Medium",
            value: "p-l-md",
          },
          {
            label: "Large",
            value: "p-l-lg",
          },
        ],
      },

      {
        label: "Unset",
        children: [
          {
            label: "All",
            value: "p-none",
          },
          "|",
          {
            label: "Top",
            value: "p-t-none",
          },
          {
            label: "Right",
            value: "p-r-none",
          },
          {
            label: "Bottom",
            value: "p-b-none",
          },
          {
            label: "Left",
            value: "p-l-none",
          },
        ],
      },
    ],
  },

  {
    label: "Border",
    className: "w2x",
    children: [
      {
        label: "Position",
        children: [
          {
            label: "All",
            value: "b-a",
          },

          "|",

          {
            label: "Top",
            value: "b-t",
          },

          {
            label: "Right",
            value: "b-r",
          },

          {
            label: "Bottom",
            value: "b-b",
          },

          {
            label: "Left",
            value: "b-l",
          },

          "|",

          {
            label: "Unset",
            value: "no-border",
          },
        ],
      },

      {
        label: "Size",
        children: [
          {
            label: "2x",
            value: "b-2x",
          },

          {
            label: "3x",
            value: "b-3x",
          },

          {
            label: "4x",
            value: "b-4x",
          },

          {
            label: "5x",
            value: "b-5x",
          },
        ],
      },

      {
        label: "Color",
        children: [
          {
            label: "Primary",
            value: "b-primary",
            className: "bg-primary",
          },

          {
            label: "Info",
            value: "b-info",
            className: "bg-info",
          },

          {
            label: "Warning",
            value: "b-warning",
            className: "bg-warning",
          },

          {
            label: "Danger",
            value: "b-danger",
            className: "bg-danger",
          },

          {
            label: "Success",
            value: "b-success",
            className: "bg-success",
          },

          {
            label: "White",
            value: "b-white",
            className: "bg-white",
          },

          {
            label: "Dark",
            value: "b-dark",
            className: "bg-dark",
          },

          {
            label: "Light",
            value: "b-light",
            className: "bg-light",
          },
        ],
      },
    ],
  },

  {
    label: "Others",
    className: "w2x",
    children: [
      {
        label: "Radius",
        children: [
          {
            label: "All",
            value: "r",
          },

          "|",

          {
            label: "Top",
            value: "r-t",
          },

          {
            label: "Right",
            value: "r-r",
          },

          {
            label: "Bottom",
            value: "r-b",
          },

          {
            label: "Left",
            value: "r-l",
          },

          "|",

          {
            label: "2x",
            value: "r-2x",
          },

          {
            label: "3x",
            value: "r-3x",
          },
        ],
      },
      {
        label: "Font",
        children: [
          {
            label: "Normal",
            value: "font-normal",
          },
          {
            label: "Thin",
            value: "font-thin",
          },
          {
            label: "Bold",
            value: "font-bold",
          },

          "|",

          {
            label: "Extra Small",
            value: "text-xs",
          },
          {
            label: "Small",
            value: "text-sm",
          },
          {
            label: "Normal",
            value: "text-base",
          },
          {
            label: "Medium",
            value: "text-md",
          },
          {
            label: "Large",
            value: "text-lg",
          },
        ],
      },

      {
        label: "Color",
        children: [
          {
            label: "Primary",
            value: "text-primary",
            className: "text-primary",
          },

          {
            label: "Info",
            value: "text-info",
            className: "text-info",
          },

          {
            label: "Warning",
            value: "text-warning",
            className: "text-warning",
          },

          {
            label: "Danger",
            value: "text-danger",
            className: "text-danger",
          },

          {
            label: "Success",
            value: "text-success",
            className: "text-success",
          },

          {
            label: "White",
            value: "text-white",
            className: "text-white bg-dark",
          },

          {
            label: "Dark",
            value: "text-dark",
            className: "text-dark",
          },

          {
            label: "Muted",
            value: "text-muted",
            className: "text-muted",
          },
        ],
      },

      {
        label: "Background",
        children: [
          {
            label: "Primary",
            value: "bg-primary",
            className: "bg-primary",
          },

          {
            label: "Info",
            value: "bg-info",
            className: "bg-info",
          },

          {
            label: "Warning",
            value: "bg-warning",
            className: "bg-warning",
          },

          {
            label: "Danger",
            value: "bg-danger",
            className: "bg-danger",
          },

          {
            label: "Success",
            value: "bg-success",
            className: "bg-success",
          },

          {
            label: "White",
            value: "bg-white",
            className: "bg-white",
          },

          {
            label: "Dark",
            value: "bg-dark",
            className: "bg-dark",
          },

          {
            label: "Light",
            value: "bg-light",
            className: "bg-light",
          },

          "|",

          {
            label: "Unset",
            value: "no-bg",
          },
        ],
      },

      {
        label: "Width",
        children: [
          {
            label: "Extra Extra Small",
            value: "w-xxs",
          },

          {
            label: "Extra Small",
            value: "w-xs",
          },

          {
            label: "Small",
            value: "w-sm",
          },

          {
            label: "Normal",
            value: "w",
          },

          {
            label: "Medium",
            value: "w-md",
          },

          {
            label: "Large",
            value: "w-lg",
          },

          {
            label: "Extra Large",
            value: "w-xl",
          },

          {
            label: "Extra Extra Large",
            value: "w-xxl",
          },

          {
            label: "Full",
            value: "w-full",
          },
        ],
      },
    ],
  },
]

function splitOptions(options: Array<any>) {
  const group: Array<Array<any>> = []
  let host: Array<any> = (group[0] = [])

  for (let i = 0, len = options.length; i < len; i++) {
    const item = options[i]

    if (item === "|") {
      host = []
      group.push(host)
    } else {
      host.push(item)
    }
  }

  return group
}

export class ClassNameControl extends React.Component<ClassNameControlProps, ClassNameControlState> {
  state = {
    isFocused: false,
    isOpened: false,
  }

  values: Array<string> = []

  constructor(props: ClassNameControlProps) {
    super(props)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.toggle = this.toggle.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.getParent = this.getParent.bind(this)
    this.getTarget = this.getTarget.bind(this)
  }

  open() {
    this.setState({
      isOpened: true,
    })
  }

  close() {
    this.setState({
      isOpened: false,
    })
  }

  toggle() {
    this.setState({
      isOpened: !this.state.isOpened,
    })
  }

  handleFocus(e: any) {
    this.setState({
      isFocused: true,
    })
    this.props.onFocus && this.props.onFocus(e)
  }

  handleBlur(e: any) {
    this.setState({
      isFocused: false,
    })
    this.props.onBlur && this.props.onBlur(e)
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { onChange } = this.props

    onChange(e.currentTarget.value)
  }

  getParent() {
    return findDOMNode(this)
  }

  getTarget() {
    return findDOMNode(this) as HTMLElement
  }

  handlePopOverChange(option: any) {
    let value = this.props.value || ""

    const values = value.replace(/\s+/g, " ").split(/\s+/)
    const idx = values.indexOf(option.value)
    const onChange = this.props.onChange

    if (~idx) {
      values.splice(idx, 1)
      value = values.join(" ")
    } else {
      if (/(?:^|\s)(m|p)\-(t|r|b|l)(?:\-(?:xs|sm|md|lg))?(?:$|\s)/.test(option.value)) {
        const reg = new RegExp(`(?:^|\\s)${RegExp.$1}\\-${RegExp.$2}(?:\\-(?:xs|sm|md|lg))?(?=(\\s|$))`, "ig")
        value = value.replace(reg, "")
      } else if (/(?:^|\s)(m|p)(?:\-(xs|sm|md|lg))?(?:$|\s)/.test(option.value)) {
        const reg = new RegExp(`(?:^|\\s)${RegExp.$1}(?:\\-(?:xs|sm|md|lg))?(?=(\\s|$))`, "ig")
        value = value.replace(reg, "")
      } else if (/(?:^|\s)(m|p)(?:\-(t|r|b|l))?\-none(?:$|\s)/.test(option.value)) {
        const reg = new RegExp(
          RegExp.$2
            ? `(?:^|\\s)${RegExp.$1}(?:(?:\\-${RegExp.$2}(?:\\-(?:xs|sm|md|lg)))|\\-none)?(?=(\\s|$))`
            : `(?:^|\\s)${RegExp.$1}(?:[^\\s$]+)?(?=(\\s|$))`,
          "ig",
        )
        value = value.replace(reg, "$1")
      } else if (/(?:^|\s)w(?:\-\w+)?(?:$|\s)/.test(option.value)) {
        value = value.replace(/(?:^|\s)w(?:\-\w+)?(?=(\s|$))/g, "")
      } else if (option.value === "b-a") {
        value = value.replace(/(?:^|\s)b\-(?:t|r|b|l)(?=(\s|$))/g, "")
        value = value.replace(/(?:^|\s)no\-border(?=(\s|$))/g, "")
      } else if (/(?:^|\s)b\-(?:t|r|b|l)?(?:$|\s)/.test(option.value)) {
        value = value.replace(/(?:^|\s)b\-a(?=(\s|$))/g, "")
        value = value.replace(/(?:^|\s)no\-border(?=(\s|$))/g, "")
      } else if (/(?:^|\s)b\-\dx(?:$|\s)/.test(option.value)) {
        value = value.replace(/(?:^|\s)b\-\dx(?=(\s|$))/g, "")
      } else if (option.value === "no-border") {
        value = value.replace(/(?:^|\s)b\-(?:\dx|\w+)(?=(\s|$))/g, "")
      } else if (/(?:^|\s)b\-(?:primary|info|warning|danger|success|white|dark|light)(?:$|\s)/.test(option.value)) {
        value = value.replace(/(?:^|\s)b\-(?:primary|info|warning|danger|success|white|dark|light)(?=(\s|$))/g, "")
      } else if (option.value === "r") {
        value = value.replace(/(?:^|\s)r\-(?:t|r|b|l)(?=(\s|$))/g, "")
      } else if (/(?:^|\s)r\-(?:t|r|b|l)?(?:$|\s)/.test(option.value)) {
        value = value.replace(/(?:^|\s)r(?=(\s|$))/g, "")
      } else if (/(?:^|\s)r\-\dx(?:$|\s)/.test(option.value)) {
        value = value.replace(/(?:^|\s)r\-\dx(?=(\s|$))/g, "")
      } else if (/(?:^|\s)text\-(?:xs|sm|base|md|lg)(?:$|\s)/.test(option.value)) {
        value = value.replace(/(?:^|\s)text\-(?:xs|sm|base|md|lg)(?=(\s|$))/g, "")
      } else if (/(?:^|\s)font\-(?:normal|thin|bold)(?:$|\s)/.test(option.value)) {
        value = value.replace(/(?:^|\s)font\-(?:normal|thin|bold)(?=(\s|$))/g, "")
      } else if (/(?:^|\s)text\-(?:primary|info|warning|danger|success|white|dark|light)(?:$|\s)/.test(option.value)) {
        value = value.replace(/(?:^|\s)text\-(?:primary|info|warning|danger|success|white|dark|light)(?=(\s|$))/g, "")
      } else if (/(?:^|\s)bg\-(?:primary|info|warning|danger|success|white|dark|light)(?:$|\s)/.test(option.value)) {
        value = value.replace(/(?:^|\s)bg\-(?:primary|info|warning|danger|success|white|dark|light)(?=(\s|$))/g, "")
        value = value.replace(/(?:^|\s)no\-bg(?=(\s|$))/g, "")
      } else if (option.value === "no-bg") {
        value = value.replace(/(?:^|\s)bg\-(?:primary|info|warning|danger|success|white|dark|light)(?=(\s|$))/g, "")
      }

      value = value.replace(/\s+/g, " ").trim()
      value += (value ? " " : "") + option.value
    }

    onChange(value)
  }

  renderGroup(option: any, index: number) {
    const { classnames: cx } = this.props

    return (
      <div key={index} className={cx("ae-ClassNameControl-group", option.className)}>
        <label className={cx("ae-ClassNameControl-groupLabel", option.labelClassName)}>{option.label}</label>

        {option.children && option.children.length
          ? option.children[0].value
            ? this.renderOptions(option.children, index)
            : option.children.map((option: any, index: number) => this.renderGroup(option, index))
          : null}
      </div>
    )
  }

  renderOptions(options: Array<any>, index: number) {
    const { classnames: cx } = this.props

    return splitOptions(options).map((group, index) => (
      <div className={cx(`ButtonGroup`)} key={index}>
        {group.map((item: any, index) => (
          <div
            key={index}
            onClick={() => this.handlePopOverChange(item)}
            className={cx(
              "Button Button--size-xs",
              item.className,
              ~this.values.indexOf(item.value) ? "Button--primary" : "Button--default",
            )}
          >
            {item.label}
          </div>
        ))}
      </div>
    ))
  }

  renderPopover() {
    const value = this.props.value
    this.values = typeof value === "string" ? value.split(" ") : []

    return <div>{classOptions.map((item: any, index) => this.renderGroup(item, index))}</div>
  }

  render() {
    const { classnames: cx, readOnly, disabled, value, className, name, popOverContainer } = this.props

    return (
      <div className={className}>
        <div
          className={cx(`TextControl`, {
            [`TextControl--withAddOn`]: true,
            "is-focused": this.state.isFocused,
            "is-disabled": disabled,
          })}
        >
          <div className={cx("TextControl-input")}>
            <input
              name={name}
              placeholder="请输入 css 类名"
              disabled={disabled}
              readOnly={readOnly}
              type="text"
              autoComplete="off"
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              value={
                typeof value === "undefined" || value === null
                  ? ""
                  : typeof value === "string"
                    ? value
                    : JSON.stringify(value)
              }
            />
          </div>
          <div className={cx(`TextControl-button`)}>
            <Button onClick={this.toggle}>
              <i className="fa fa-cog"></i>
            </Button>
          </div>
        </div>
        <Overlay
          placement="right-bottom-right-top  right-top-right-bottom right-bottom-right-top"
          target={this.getTarget}
          container={popOverContainer || this.getParent}
          rootClose={false}
          show={this.state.isOpened}
          watchTargetSizeChange={false}
        >
          <PopOver className={"ae-ClassNamePicker-popover"} onHide={this.close} overlay>
            {this.renderPopover()}
          </PopOver>
        </Overlay>
      </div>
    )
  }
}
