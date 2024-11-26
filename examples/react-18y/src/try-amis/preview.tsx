import React from "react"

import Preview from "amis-editor-core"

export const PreviewRenderer: React.FC = () => {
  const handleOnChange = (e: any) => {
    console.log("handleOnChange", e)
  }

  return (
    <div>
      <h1>
        <Preview preview={true} value={{ type: "page", title: "Hello World" }}  onChange={handleOnChange} />
      </h1>
    </div>
  )
}
