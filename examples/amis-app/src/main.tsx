import { createRoot } from "react-dom/client"
import "@cloudscape-design/global-styles/index.css"
import "./styles/cloudscape.css"
import { RoutesGenerator } from "./RoutesGenerator.tsx"
import { RootMachineProvider } from "@/stories/machines/RootMachineContext.tsx"
import { CoreEditorMachineProvider } from "@/stories/machines/editor/CoreEditorMachineContext.tsx"
import { AmisMachineProvider } from "@/stories/machines/amis/AmisMachineContext.tsx"

createRoot(document.getElementById("root")!).render(
  <RootMachineProvider>
    <AmisMachineProvider>
      <CoreEditorMachineProvider>
        <RoutesGenerator />
      </CoreEditorMachineProvider>
    </AmisMachineProvider>
  </RootMachineProvider>,
)
