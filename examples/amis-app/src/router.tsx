// src/Router.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import RouterWrapper from "./router-wrapper"
import { DynamicEditor } from "@/amis/dynamic-editor.tsx"
import { DynamicEditorRefactor } from "@/amis/dynamic-editor-refactor.tsx"
import DynamicComponents from "@/amis/dynamic-components.tsx"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pages" element={<RouterWrapper />}>
          <Route path="editor/:id" element={<DynamicEditor />} />
          <Route path="editor-refactor/:id" element={<DynamicEditorRefactor />} />
          <Route path="components/:id" element={<DynamicComponents />} />
        </Route>
        <Route path="/components" element={<RouterWrapper />}>
          <Route path=":id" element={<DynamicComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Router
