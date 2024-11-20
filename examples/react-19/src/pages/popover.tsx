import * as popover from "@ibrains-design/popover"
import { normalizeProps, useMachine, Portal } from "@ibrains-design/react"
import { popoverControls } from "@ibrains-design/shared"
import { useId } from "react"
import { StateVisualizer } from "../components/state-visualizer"
import { Toolbar } from "../components/toolbar"
import { useControls } from "../hooks/use-controls"

import * as React from "react"
import { HiX } from "react-icons/hi"

export default function Page() {
  const controls = useControls(popoverControls)

  const [state, send] = useMachine(
    popover.machine({
      id: useId(),
    }),
    {
      context: controls.context,
    },
  )

  const api = popover.connect(state, send, normalizeProps)

  const Wrapper = api.portalled ? Portal : React.Fragment

  return (
    <>
      <main>
        <button {...api.getTriggerProps()}>Click me</button>
        <Wrapper>
          <div {...api.getPositionerProps()}>
            <div {...api.getContentProps()}>
              <div {...api.getArrowProps()}>
                <div {...api.getArrowTipProps()} />
              </div>

              <div>
                <div {...api.getTitleProps()}>
                  <b>About Tabs</b>
                </div>
                <div {...api.getDescriptionProps()}>
                  Tabs are used to organize and group content into sections that the user can navigate between.
                </div>
                <button>Action Button</button>
              </div>
              <button {...api.getCloseTriggerProps()}>
                <HiX />
              </button>
            </div>
          </div>
        </Wrapper>
      </main>
      <Toolbar controls={controls.ui}>
        <StateVisualizer state={state} />
      </Toolbar>
    </>
  )
}
