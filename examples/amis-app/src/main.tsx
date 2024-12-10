import { createRoot } from "react-dom/client"
import Router from "@/router.tsx"
import { EditorProvider } from "@/amis-editor-core-refactor/store/global.tsx"
import "@cloudscape-design/global-styles/index.css"
import "./styles/cloudscape.css"
import { GlobalProvider } from "@/context/GlobalContext.tsx"
import { RoutesGenerator } from "@/stories/helpers/RoutesGenerator.tsx"
import { RootMachineProvider } from "@/stories/machines/RootMachineContext.tsx"
createRoot(document.getElementById("root")!).render(
  <RootMachineProvider>
    <RoutesGenerator />
  </RootMachineProvider>,
)
