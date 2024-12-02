import React, { useState } from "react"
import { Input, Button, Popover } from "antd"
import { classOptions } from "./ClassNameControlJson"

interface ClassNameControlProps {
  value?: string
  onChange?: (value: string) => void
  readOnly?: boolean
  disabled?: boolean
  className?: string
  name?: string
}

export const classOptions = [
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
        label: "None",
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
        label: "None",
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
            label: "None",
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
            label: "None",
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

const ClassNameControl: React.FC<ClassNameControlProps> = ({
  value = "",
  onChange,
  readOnly,
  disabled,
  className,
  name,
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isOpened, setIsOpened] = useState(false)
  const values = value.split(" ")

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.currentTarget.value)
  }

  const handlePopOverChange = (option: any) => {
    let newValue = value || ""
    const values = newValue.replace(/\s+/g, " ").split(/\s+/)
    const idx = values.indexOf(option.value)

    if (~idx) {
      values.splice(idx, 1)
      newValue = values.join(" ")
    } else {
      // Add logic to handle specific class name rules
      newValue += (newValue ? " " : "") + option.value
    }

    onChange && onChange(newValue.trim())
  }

  const renderGroup = (option: any, index: number) => (
    <div key={index} className="ae-ClassNameControl-group">
      <label className="ae-ClassNameControl-groupLabel">{option.label}</label>
      {option.children && option.children.length
        ? option.children[0].value
          ? renderOptions(option.children, index)
          : option.children.map((child: any, idx: number) => renderGroup(child, idx))
        : null}
    </div>
  )

  const renderOptions = (options: Array<any>, index: number) => (
    <div className="ButtonGroup" key={index}>
      {options.map((item: any, idx: number) => (
        <Button
          key={idx}
          onClick={() => handlePopOverChange(item)}
          type={values.includes(item.value) ? "primary" : "default"}
        >
          {item.label}
        </Button>
      ))}
    </div>
  )

  const renderPopover = () => <div>{classOptions.map((item: any, index) => renderGroup(item, index))}</div>

  return (
    <div className={className}>
      <div className={`TextControl ${isFocused ? "is-focused" : ""} ${disabled ? "is-disabled" : ""}`}>
        <Input
          name={name}
          placeholder="Enter CSS class name"
          disabled={disabled}
          readOnly={readOnly}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
        />
        <Button onClick={() => setIsOpened(!isOpened)}>
          <i className="fa fa-cog"></i>
        </Button>
      </div>
      <Popover content={renderPopover()} trigger="click" visible={isOpened} onVisibleChange={setIsOpened}>
        <Button>Toggle Options</Button>
      </Popover>
    </div>
  )
}

export default ClassNameControl
