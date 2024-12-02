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
  Autosuggest,
  SideNavigation,
} from "@cloudscape-design/components"
import { Board, BoardItem } from '@cloudscape-design/board-components';

import { useState } from "react"
import { useNavigate } from "react-router-dom"


const initialSettings = {
  sideNavigation: {
    header: {
      text: "Side Navigation",
    },
    items: [
      { type: "link", text: "right-panels", href: "/components/right-panels" },
      { type: "link", text: "renderers-panel", href: "/components/renderers-panel" },
      { type: "link", text: "schema-form", href: "/components/schema-form" },
      { type: "link", text: "back-top", href: "/components/back-top" },
      { type: "link", text: "error-renderer", href: "/components/error-renderer" },
      { type: "link", text: "search-custom-renderer-panel", href: "/components/search-custom-renderer-panel" },
      { type: "link", text: "search-panel", href: "/components/search-panel" },
      {
        type: "section",
        text: "Section 1",
        items: [
          { type: "link", text: "Page 4", href: "#/page4" },
          { type: "link", text: "Page 5", href: "#/page5" },
          { type: "link", text: "Page 6", href: "#/page6" },
        ],
      },
      {
        type: "section",
        text: "Section 2",
        items: [
          { type: "link", text: "Page 7", href: "#/page7" },
          { type: "link", text: "Page 8", href: "#/page8" },
          { type: "link", text: "Page 9", href: "#/page9" },
        ],
      },
    ],
  },
}

// const { Header, Footer, Sider, Content } = Layout;

const RouterWrapper = () => {
  const [splitPanelOpen, setSplitPanelOpen] = useState(false)
  const [splitPanelPosition, setSplitPanelPosition] = useState<"side" | "bottom">("side")
  const [navigationOpen, setNavigationOpen] = React.useState(true)
  const [activeDrawerId, setActiveDrawerId] = React.useState<string | null>(null)


  const [items, setItems] = React.useState<any>([


    {
      id: 'board-item-1',
      definition: {},
      columnSpan: 1,
      rowSpan: 5,
      data: {
        title: 'board-item-1',
        description: '',
        content: (
          <>
            board-item-1 content
            {/*<RenderFormulePart as={'SchemaPreview'} />*/}
          </>
        ),
      },
    },

    {
      id: 'board-item-2',
      definition: {},
      columnSpan: 3,
      rowSpan: 5,
      data: {
        title: 'board-item-2',
        description: '',
        content: (
          <>
            board-item-2 content
            {/*<RenderFormulePart as={'FormPreview'} />*/}
          </>
        ),
      },
    },

  ]);


  const navigate = useNavigate()
  function followLink(e: CustomEvent) {
    e.preventDefault()
    navigate(e.detail.href)
  }

  return (
    <>
      <RenderTopNavigation />
      <AppLayout
        navigation={
          <>
            <SideNavigation {...(initialSettings.sideNavigation as any)} onFollow={followLink} />
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
            <RouterViewers />
            {/*<Board*/}
            {/*  items={items}*/}
            {/*  renderItem={(item) => (*/}
            {/*    <BoardItem header={<Header>{item.data.title}</Header>} i18nStrings={boardItemI18nStrings}>*/}
            {/*      {item.data.content}*/}
            {/*    </BoardItem>*/}
            {/*  )}*/}
            {/*  onItemsChange={(event) => setItems(event.detail.items)}*/}
            {/*  empty="empty"*/}
            {/*/>*/}
            {/*<PageContainer>*/}
            {/*  <RouterViewers />*/}
            {/*</PageContainer>*/}
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
  const [value, setValue] = React.useState("")

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
                  { value: "Suggestion 4" },
                ],
              },
              {
                label: "Group 2",
                options: [{ value: "Suggestion 5" }, { value: "Suggestion 6" }, { value: "Suggestion 7" }],
              },
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
