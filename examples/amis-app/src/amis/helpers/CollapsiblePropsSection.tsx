import React, { useState } from "react"

interface CollapsiblePropsSectionProps {
  title: string
  children: React.ReactNode
}

const CollapsiblePropsSection: React.FC<CollapsiblePropsSectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div onClick={toggleOpen} style={{ cursor: "pointer", fontWeight: "bold" }}>
        {title} {isOpen ? "-" : "+"}
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  )
}

export default CollapsiblePropsSection
