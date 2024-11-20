import { FC, useState } from "react"
import Accordion from "./pages/accordion"
import Popover from "./pages/popover"

const componentMap: { [key: string]: FC } = {
  Accordion: Accordion,
  Popover: Popover,
  // Add more components here
}

function App() {
    const [activeComponent, setActiveComponent] = useState("Accordion")

  const renderComponent = () => {
    const Component = componentMap[activeComponent]
    return Component ? <Component /> : null
  }

  return (
    <div className="page">
      <aside className="nav">
        <header>iBrains-design</header>
        {Object.keys(componentMap).map((component) => (
          <button key={component} onClick={() => setActiveComponent(component)}>
            {component}
          </button>
        ))}{" "}
      </aside>
      {renderComponent()}
    </div>
  )
}

export default App
