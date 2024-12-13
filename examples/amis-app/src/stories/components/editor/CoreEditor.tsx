import * as React from "react"
import JsonView from "react18-json-view"
import { useCoreEditorMachine } from "@/stories/machines/editor/coreEditorMachineStore.ts"

export const CoreEditor = () => {
  const { state } = useCoreEditorMachine()

  return (
    <div>
      <JsonView src={state} collapsed={1} />
    </div>
  )
}
