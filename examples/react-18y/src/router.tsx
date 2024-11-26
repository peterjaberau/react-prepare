// src/Router.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Editor from "./try-amis/editor";
import { DynamicEditor } from "./try-amis/dynamic-editor";
import {PreviewRenderer} from "@/try-amis/preview.tsx";
import AppEditor from "@/try-amis/examples/index.tsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/editor/:id" element={<DynamicEditor />} />
                <Route path="/preview" element={<PreviewRenderer />} />
                <Route path="/examples" element={<AppEditor />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
