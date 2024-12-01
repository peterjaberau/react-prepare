import { createRoot } from "react-dom/client"
import Router from "@/router.tsx"
import { EditorProvider } from "@/amis-editor-core-refactor/store/global.tsx"
import "@cloudscape-design/global-styles/index.css";
import "./styles/cloudscape.css";

createRoot(document.getElementById("root")!).render(
  <EditorProvider>
    <Router />
  </EditorProvider>,
)
