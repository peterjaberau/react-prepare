import { BrowserRouter, Routes, Route } from "react-router-dom"
import { StoriesPage } from "@/stories"
import { RenderersPanel } from "@/stories/components/RenderersPanel.tsx"
import { RightPanel } from "@/stories/components/RightPanel.tsx"

export const AppRouterMachine = () => (
  <BrowserRouter>
    <Routes>
        <Route path="/stories" element={<StoriesPage />}>
            <Route path="components/right-panel" element={<RightPanel />} />
            <Route path="components/renderers-panel" element={<RenderersPanel />} />
        </Route>
    </Routes>
  </BrowserRouter>
)
