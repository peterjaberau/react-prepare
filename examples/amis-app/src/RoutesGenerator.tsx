import { BrowserRouter, Routes, Route, RouteProps } from "react-router-dom"
import { StoriesPage } from "@/stories"
import { ProCard } from "@ant-design/pro-components"
import { RightPanel } from "@/stories/components/RightPanel.tsx"
import { AiAnt } from "@/stories/components/AiAnt.tsx"
import { CoreEditor } from "@/stories/components/editor/CoreEditor.tsx"
import { AmisDocsIntro } from "@/stories/components/amis-docs/AmisDocsIntro.tsx"
import { AmisGetRenderers } from "@/stories/components/amis-docs/AmisGetRenderers.tsx"
import { RenderAmisComponent } from "@/stories/components/renderers/RenderAmisComponent"

export const availableRoutes: RouteProps[] = [
  {
    path: "/",
    element: <div>Stories home</div>,
  },
  {
    path: "/stories",
    element: <StoriesPage />,
    children: [
      {
        path: "render/:id",
        element: <RenderAmisComponent />,
      },
      {
        path: "components/right-panel",
        element: <ProCard style={{ width: '350px', height: '100%'}} bordered={false} boxShadow><RightPanel/></ProCard>,
      },
      {
        path: "components/renderers-panel",
        element: <div>renderers-panel</div>,
      },
      {
        path: "components/core-editor",
        element: <CoreEditor/>,
      },
      {
        path: "components/amis-docs-intro",
        element: <AmisDocsIntro/>,
      },
      {
        path: "components/amis-get-renderers",
        element: <AmisGetRenderers/>,
      },
      {
        path: "components/:componentId",
        element: <div>:componentId</div>,
      },
      {
        path: "components/ai-ant",
        element: <AiAnt/>,
      },
    ],
  },
] as any


const generateRoutes = (routes: any) => {
  return routes.map((route: any, index: any) => {
    if (route.children) {
      return (
        <Route key={index} path={route.path} element={route.element}>
          {generateRoutes(route.children)}
        </Route>
      );
    }
    return <Route key={index} path={route.path} element={route.element} />;
  });
};

export const RoutesGenerator = () => {
  return (
    <BrowserRouter>
      <Routes>
        {generateRoutes(availableRoutes)}
      </Routes>
    </BrowserRouter>
  )
}
