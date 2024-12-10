import { RouteProps } from "react-router-dom"
import { StoriesPage } from "@/stories"
import { AiAnt } from "@/stories/components/AiAnt.tsx"
import { RightPanel } from "@/stories/components/RightPanel.tsx"
import { ProCard } from "@ant-design/pro-components"


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
        path: "components/right-panel",
        element: <ProCard style={{ width: '350px', height: '100%'}} bordered={false} boxShadow><RightPanel/></ProCard>,
      },
      {
        path: "components/renderers-panel",
        element: <div>renderers-panel</div>,
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

export const navigationItems = [
  { type: "link", text: "home", href: "/" },
  { type: "link", text: "Stories", href: "/stories" },
  { type: "link", text: "Right Panel", href: "/stories/components/right-panel" },
  { type: "link", text: "Renderers Panel", href: "/stories/components/renderers-panel" },
  { type: "link", text: "AI Ant", href: "/stories/components/ai-ant" },
  { type: "link", text: "Dynamic1", href: "/stories/components/dynamic-id-1" },
  { type: "link", text: "Dynamic2", href: "/stories/components/dynamic-id-2" },
]
