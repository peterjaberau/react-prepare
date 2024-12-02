import React from "react"
import { WidthDraggableBtn } from "./WidthDraggableBtn"

interface WidthDraggableContainerProps {
  NeedWidthDraggableComp: React.ComponentType<any>
  isLeftDragIcon?: boolean
  // Add any other props that NeedWidthDraggableComp might require
}

const WidthDraggableContainer: React.FC<WidthDraggableContainerProps> = ({
  NeedWidthDraggableComp,
  isLeftDragIcon,
  ...props
}) => {
  return (
    <>
      <NeedWidthDraggableComp {...props} />
      <WidthDraggableBtn isLeftDragIcon={isLeftDragIcon} />
    </>
  )
}

export default WidthDraggableContainer
