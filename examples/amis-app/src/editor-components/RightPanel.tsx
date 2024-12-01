import React, { useState } from "react"
import { Collapse, Button } from "antd"
import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons"
import { Tabs } from "antd"

const { Panel } = Collapse

interface PanelItem {
  key: string
  title: string
  icon: React.ReactNode
  pluginIcon?: string
  render?: (props: any) => React.ReactNode
  component?: React.ComponentType<any>
}

interface RightPanelsProps {
  panels: PanelItem[]
  activePanelKey?: string
  onPanelChange?: (key: string) => void
  readonly?: boolean
}

const RightPanels: React.FC<RightPanelsProps> = ({ panels, activePanelKey, onPanelChange, readonly }) => {
  const [isFixedStatus, setIsFixedStatus] = useState(false)
  const [activeKey, setActiveKey] = useState(activePanelKey || panels[0]?.key)

  const handleFixed = () => {
    setIsFixedStatus(!isFixedStatus)
  }

  const handleSelect = (key: string | string[]) => {
    setActiveKey(key as string)
    if (onPanelChange) {
      onPanelChange(key as string)
    }
  }

  const renderPanel = (panel: PanelItem) => {
    return panel.render ? (
      panel.render({
        onChange: () => {},
        readonly,
      })
    ) : panel.component ? (
      <panel.component key={panel.key} onChange={() => {}} readonly={readonly} />
    ) : null
  }

  return panels.length > 0 ? (
    <div className={isFixedStatus ? "fixed" : ""}>
      <Button onClick={handleFixed}>{isFixedStatus ? "Turn off suspension mode" : "Turn on suspension mode"}</Button>
      <Tabs
        activeKey={activeKey}
        onChange={handleSelect}
        items={panels.map((panel) => ({
          key: panel.key,
          label: panel.title,
          icon: panel.pluginIcon ? panel.pluginIcon : panel.icon,
          children: renderPanel(panel)
        }))}
      />
    </div>
  ) : null
}

export default RightPanels
