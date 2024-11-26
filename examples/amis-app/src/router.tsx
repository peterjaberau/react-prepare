// src/Router.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Page from "./Page"
import Example from "./Example"
// import Editor from "./try-amis/editor";
import { DynamicEditor } from "@/amis/dynamic-editor.tsx"
// import {PreviewRenderer} from "@/try-amis/preview.tsx";
// import AppEditor from "@/try-amis/examples/index.tsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/page" element={<Page />} />
        <Route path="/example" element={<Example />} />
        <Route path="/editor/:id" element={<DynamicEditor />} />
        {/*<Route path="/editor" element={<Editor />} />*/}
        {/*<Route path="/editor/:id" element={<DynamicEditor />} />*/}
        {/*<Route path="/preview" element={<PreviewRenderer />} />*/}
        {/*<Route path="/examples" element={<AppEditor />} />*/}
      </Routes>
    </BrowserRouter>
  )
}

export default Router
