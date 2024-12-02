import React from "react"
import { FloatButton } from "antd"

export interface BackTopProps {
  visibilityHeight?: number
  onClick?: React.MouseEventHandler<HTMLElement>
  target?: (() => HTMLElement | Window | Document) | React.RefObject<HTMLElement> | string | null
}

const BackTop: React.FC<BackTopProps> = ({ visibilityHeight = 400, onClick, target }) => {
  const getTarget = () => {
    if (typeof target === "string") {
      switch (target) {
        case "window":
          return window
        case "document":
          return document
        case "html":
          return document.documentElement
        default:
          return window
      }
    } else if (target && "current" in target) {
      return target.current || window
    } else if (target === null || target === undefined) {
      return window
    } else {
      return target() || window
    }
  }

  console.log(getTarget())

    return (
    <FloatButton.BackTop onClick={onClick} target={getTarget} />
  )
}

export default BackTop
