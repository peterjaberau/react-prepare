import React, { useState } from "react"
import { Tabs } from "antd"
import RenderersPanel from "./RenderersPanel"
import { PanelProps } from "../../plugin"

const { TabPane } = Tabs

export const AvailableRenderersPanel: React.FC<PanelProps> = ({ store, manager }) => {
  const [renderersTabsKey, setRenderersTabsKey] = useState(store.renderersTabsKey || "base-renderers")

  const handleSelect = (key: string) => {
    if (key) {
      setRenderersTabsKey(key)
      store.changeRenderersTabsKey(key)
    }
  }

  const customRenderersByOrder = store.customRenderersByOrder || []
  const groupedSubRenderers = store.groupedSubRenderers || {}
  const groupedCustomRenderers = store.groupedCustomRenderers || {}

  return (
    <div className="ae-RendererPanel">
      <div className="panel-header">Components</div>
      <div className="ae-RendererPanel-content">
        {store.showCustomRenderersPanel && customRenderersByOrder.length > 0 ? (
          <Tabs activeKey={renderersTabsKey} onChange={handleSelect} className="ae-RendererList-tabs">
            <TabPane tab="System Components" key="base-renderers" className="ae-RendererList-tabs-panel base-renderers">
              <RenderersPanel
                groupedRenderers={groupedSubRenderers}
                store={store}
                manager={manager}
                searchRendererType="renderer"
              />
            </TabPane>
            <TabPane
              tab="Custom Components"
              key="custom-renderers"
              className="ae-RendererList-tabs-panel custom-renderers"
            >
              <RenderersPanel
                groupedRenderers={groupedCustomRenderers}
                store={store}
                manager={manager}
                searchRendererType="custom-renderer"
              />
            </TabPane>
          </Tabs>
        ) : (
          <RenderersPanel
            className="only-base-component"
            groupedRenderers={groupedSubRenderers}
            store={store}
            manager={manager}
            searchRendererType="renderer"
          />
        )}
      </div>
    </div>
  )
}
