import Login from "./loginMachineComponent.tsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Entries } from "./entriesMachineComponent.tsx"
import { NewEntry } from "./newEntryMachineComponent.tsx"
import { Profile } from "./profileMachineComponent.tsx"
import { StoriesPage } from "@/stories"
import { MachineContextProvider } from "../machines/MachineContext.tsx"
import Router from "./routerMachineComponent.tsx"
import { RenderersPanel } from "@/stories/components/RenderersPanel.tsx"
import { RightPanel } from "@/stories/components/RightPanel.tsx"
import App from "@/App.tsx"

export const AppRouterComponent = () => (
  // <MachineContextProvider>
  <BrowserRouter>
    <Routes>
        <Route path="/stories" element={<StoriesPage />}>
            <Route path="components/right-panel" element={<RightPanel />} />
            <Route path="components/renderers-panel" element={<RenderersPanel />} />
            {/*<Route path="/renderers-panel" element={<RenderersPanel />} />*/}
        </Route>
        {/*<Route path="/components/:id" element={<App />} />*/}
    </Routes>
    <Router>
      {(routeName) => {
        let pageComponent = null
        switch (routeName) {
          case "login":
            pageComponent = <Login />
            break
          case "newEntry":
            pageComponent = <NewEntry />
            break
          case "entries":
            pageComponent = <Entries />
            break
          case "profile":
            pageComponent = <Profile />
            break
          case "stories":
            pageComponent = <StoriesPage />
            break
          case "stories-right-panel":
            pageComponent = <RightPanel />
            break
          case "stories-renderers-panel":
            pageComponent = <RenderersPanel />
            break
        }
        return pageComponent
      }}
    </Router>
  </BrowserRouter>
  // </MachineContextProvider>
)
