import * as React from "react"
import RouterNav from "./router-nav"
import RouterViewers from "./router-viewer"
import { ProLayout, ProCard, PageContainer } from "@ant-design/pro-components"
import type { ProSettings } from "@ant-design/pro-components"
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
  TopNavigation,
  Autosuggest
} from "@cloudscape-design/components"

import { useState } from "react"

// const { Header, Footer, Sider, Content } = Layout;

const RouterWrapper = () => {
  const [splitPanelOpen, setSplitPanelOpen] = useState(false)
  const [splitPanelPosition, setSplitPanelPosition] = useState<"side" | "bottom">("side")
  const [navigationOpen, setNavigationOpen] = React.useState(true)
  const [activeDrawerId, setActiveDrawerId] = React.useState<string | null>(null)

  return (
    <>
      <RenderTopNavigation />
      <AppLayout
        navigation={
          <>
            <HelpPanel header={"SidePanel"}>{<RouterNav />}</HelpPanel>
          </>
        }
        navigationOpen={navigationOpen}
        onNavigationChange={({ detail }) => setNavigationOpen(detail.open)}
        disableContentPaddings={false}
        headerSelector="#h"
        contentType="default"
        content={
          <ContentLayout
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
            <PageContainer>
              <RouterViewers />
            </PageContainer>
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
            id: "drawer-3",
            ariaLabels: {
              closeButton: "Close",
              drawerName: "Edit",
              triggerButton: "Open",
              resizeHandle: "Resize",
            },
            badge: false,
            resizable: true,
            defaultSize: 500,
            content: <Drawer header="Example 3">Example 3 content</Drawer>,
            trigger: {
              iconName: "bug",
            },
          },
        ]}
        onDrawerChange={(event) => setActiveDrawerId(event.detail.activeDrawerId)}
        activeDrawerId={activeDrawerId}
      />
    </>

    // <Layout style={{ height: '100vh', overflow: 'hidden' }}>
    //   <Layout.Sider style={{ background: token.colorBgContainer, overflow: 'auto' }}>
    //     <RouterNav />
    //   </Layout.Sider>
    //   <Layout.Content style={{ overflow: 'auto' }}>
    //
    //     <div style={{ padding: "20px", height: '100vh' }}>
    //       <RouterViewers />
    //     </div>
    //   </Layout.Content>
    // </Layout>
  )
}

const RenderTopNavigation = () => {
  const [value, setValue] = React.useState("");

  return (
    <div id="h">
      <TopNavigation
        identity={{
          href: "#",
          title: "Title with an href",
        }}
        utilities={[
          {
            type: "menu-dropdown",
            text: "Settings",
            iconName: "settings",
            items: [
              {
                id: "1",
                text: "Option 1",
              },
              {
                id: "2",
                text: "Option 2",
              },
              {
                id: "3",
                text: "Option 3",
              },
              {
                id: "4",
                text: "Option 4",
              },
              {
                id: "5",
                text: "Option 5",
              },
            ],
          },
          {
            type: "menu-dropdown",
            text: "John Doe",
            description: "john.doe@example.com",
            iconName: "envelope",
            items: [
              { type: "button", id: "profile", text: "Profile" },
              { type: "button", id: "preferences", text: "Preferences" },
              { type: "button", id: "security", text: "Security" },
              {
                type: "menu-dropdown",
                id: "support-group",
                text: "Support",
                items: [
                  {
                    id: "documentation",
                    text: "Documentation",
                    href: "#",
                    external: true,
                    externalIconAriaLabel: " (opens in new tab)",
                  },
                  {
                    id: "feedback",
                    text: "Feedback",
                    href: "#",
                    external: true,
                    externalIconAriaLabel: " (opens in new tab)",
                  },
                  { id: "support", text: "Customer support" },
                ],
              },
              { type: "button", id: "signout", text: "Sign out" },
            ] as any[],
          },
        ]}
        search={
          <Autosuggest
            onChange={({ detail }) => setValue(detail.value)}
            value={value}
            options={[
              {
                label: "Group 1",
                options: [
                  { value: "Suggestion 1" },
                  { value: "Suggestion 2" },
                  { value: "Suggestion 3" },
                  { value: "Suggestion 4" }
                ]
              },
              {
                label: "Group 2",
                options: [
                  { value: "Suggestion 5" },
                  { value: "Suggestion 6" },
                  { value: "Suggestion 7" }
                ]
              }
            ]}
            ariaLabel="Autosuggest example with suggestions groups"
            placeholder="Enter value"
            empty="No matches found"
          />

        }
      />
    </div>
  )
}

export default RouterWrapper
