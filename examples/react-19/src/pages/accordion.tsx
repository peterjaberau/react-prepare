import * as accordion from "@ibrains-design/accordion"
import { normalizeProps, useMachine } from "@ibrains-design/react"
import { accordionControls, accordionData } from "@ibrains-design/shared"
import { useId } from "react"
import { StateVisualizer } from "../components/state-visualizer"
import { Toolbar } from "../components/toolbar"
import { useControls } from "../hooks/use-controls"
import { ArrowRight } from "lucide-react"

export default function Page() {
  const controls = useControls(accordionControls)

  const [state, send] = useMachine(
    accordion.machine({
      id: useId(),
    }),
    {
      context: controls.context,
    },
  )

  const api = accordion.connect(state, send, normalizeProps)

  return (
    <>
      <main className="accordion">
        <div {...api.getRootProps()}>
          {accordionData.map((item) => (
            <div key={item.id} {...api.getItemProps({ value: item.id })}>
              <h3>
                <button data-testid={`${item.id}:trigger`} {...api.getItemTriggerProps({ value: item.id })}>
                  {item.label}
                  <div {...api.getItemIndicatorProps({ value: item.id })}>
                    <ArrowRight />
                  </div>
                </button>
              </h3>
              <div data-testid={`${item.id}:content`} {...api.getItemContentProps({ value: item.id })}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </div>
            </div>
          ))}
        </div>
      </main>

      <Toolbar controls={controls.ui}>
        <StateVisualizer state={state} />
      </Toolbar>
    </>
  )
}
