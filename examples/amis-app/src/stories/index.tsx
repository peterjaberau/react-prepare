import { useCallback, useEffect, useState } from "react"
import * as React from "react"
import JsonView from "react18-json-view"
import "react18-json-view/src/style.css"
import { boardItems } from "@/stories/helpers/boardItems.tsx"
import { TopNavigations } from "@/stories/helpers/TopNavigations.tsx"
import { PreviewComponent } from "@/stories/helpers/PreviewComponent.tsx"
import {
  AppLayout,
  ContentLayout,
  SpaceBetween,
  SplitPanel,
  Header,
  Button,
  Box,
  HelpPanel,
  Drawer,
  SideNavigation,
} from "@cloudscape-design/components"
import { useNavigate, Routes, Route, useLocation } from "react-router-dom"
import { availableRoutes, navigationItems } from "@/stories/helpers/initialConfig.tsx"

export const StoriesPage = () => {
  // const { statusMessage: statusMessageStories }: any = useChildMachineState("stories", (state: any) => state.context)
  // const storiesMachine = useChildMachine("stories")
  // const rootMachine = useRootMachine()

  const [splitPanelOpen, setSplitPanelOpen] = useState(false)
  const [splitPanelPosition, setSplitPanelPosition] = useState<"side" | "bottom">("side")
  const [navigationOpen, setNavigationOpen] = React.useState(true)
  const [activeDrawerId, setActiveDrawerId] = React.useState<string | null>("drawer-inspector")
  const [items, setItems] = React.useState<any>(boardItems)
  const [activeHref, setActiveHref] = useState('/');

  const navigate = useNavigate()
  function followLink(e: CustomEvent) {
    e.preventDefault()
    navigate(e.detail.href)
  }




  return (
    <>
      <TopNavigations />
      <AppLayout
        navigation={
          <>
            <SideNavigation
              header={{ text: 'Side Navigation', href: '/' }}
              activeHref={activeHref}
              onFollow={followLink}
              items={navigationItems as any}
            />
          </>
        }
        navigationOpen={navigationOpen}
        onNavigationChange={({ detail }) => setNavigationOpen(detail.open)}
        disableContentPaddings={false}
        headerSelector="#h"
        contentType="default"
        content={
          <ContentLayout
            defaultPadding={true}
            header={
              <Box margin={{ top: "s" }}>
                <Header
                  variant="h1"
                  actions={
                    <SpaceBetween size="s" direction="horizontal">
                      <Button variant="icon" iconName="refresh" onClick={() => console.log("reload")}>
                        Reload
                      </Button>
                      <Button data-testid="add-widget" iconName="add-plus" onClick={() => setSplitPanelOpen(true)}>
                        Add Widget
                      </Button>
                    </SpaceBetween>
                  }
                >
                  Header
                </Header>
              </Box>
            }
          >
            <PreviewComponent />
          </ContentLayout>
        }
        splitPanel={splitPanelOpen && <SplitPanel header="Splitter">splitter</SplitPanel>}
        splitPanelPreferences={{ position: splitPanelPosition }}
        splitPanelOpen={splitPanelOpen}
        onSplitPanelToggle={({ detail }) => setSplitPanelOpen(detail.open)}
        onSplitPanelPreferencesChange={({ detail }) => setSplitPanelPosition(detail.position)}
        drawers={[
          {
            id: "drawer-1",
            ariaLabels: {
              closeButton: "Close",
              drawerName: "Edit",
              triggerButton: "Open",
              resizeHandle: "Resize",
            },
            badge: false,
            resizable: true,
            defaultSize: 650,
            content: <Drawer header="Example 1">Example 1 content</Drawer>,
            trigger: {
              iconName: "edit",
            },
          },
          {
            id: "drawer-2",
            ariaLabels: {
              closeButton: "Close",
              drawerName: "Edit",
              triggerButton: "Open",
              resizeHandle: "Resize",
            },
            badge: false,
            resizable: true,
            defaultSize: 500,
            content: <Drawer header="Example 2">Example 2 content</Drawer>,
            trigger: {
              iconName: "edit",
            },
          },
          {
            id: "drawer-inspector",
            ariaLabels: {
              closeButton: "Close",
              drawerName: "Edit",
              triggerButton: "Open",
              resizeHandle: "Resize",
            },
            badge: false,
            resizable: true,
            defaultSize: 500,
            content: <Drawer header="Inspectors">test</Drawer>,
            trigger: {
              iconName: "bug",
            },
          },
        ]}
        onDrawerChange={(event) => setActiveDrawerId(event.detail.activeDrawerId)}
        activeDrawerId={activeDrawerId}
      />
    </>
  )
}
