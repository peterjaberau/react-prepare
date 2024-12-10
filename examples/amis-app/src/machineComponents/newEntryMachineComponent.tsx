import { SpaceBetween, Button } from "@cloudscape-design/components"
import { useChildMachine, useChildMachineState } from "@/machines/useMyMachines.ts"
import { useState } from "react"

export const NewEntry = () => {
  const [inputValue, setInputValue] = useState("")
  const timerState = useChildMachineState("newEntry", (state: any) => state.value)
  const statusMessage = useChildMachineState("newEntry", (state: any) => state.context.statusMessage)
  const newEntryMachine = useChildMachine("newEntry")

  const handleSubmit = (e: any) => {
    e.preventDefault()
    newEntryMachine.send({
      type: 'submit',
      description: 'entry description - ' + Math.random(),
    })
  }

  return (
    <>
      <SpaceBetween size={'xs'} direction={'vertical'} >
        <>
          <Button onClick={handleSubmit}>New entry</Button>
          {timerState === "idle" && <Button data-value="start">Start</Button>}
          {timerState === "paused" && (
            <>
              <Button data-value="resume">Resume</Button>
              <Button data-value="finish" variant="normal">
                Finish
              </Button>
            </>
          )}
          {timerState === "active" && (
            <>
              <Button data-value="pause">Pause</Button>
              <Button data-value="finish" variant="normal">
                Finish
              </Button>
            </>
          )}
        </>
      </SpaceBetween>
    </>
  )
}

