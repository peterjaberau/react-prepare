import * as React from "react"
import Drawer from "@cloudscape-design/components/drawer"
import { Box } from "lucide-react"
import { ExpandableSection, Header, SpaceBetween } from "@cloudscape-design/components"

export const RightPanel = () => {
  return (
    <Drawer header={<h2>Right Panel</h2>}>
      <SpaceBetween size="xxl">
        <SpaceBetween size="xs">
          <Header variant="h3">Step 1: Engine type</Header>
          <ExpandableSection headerText="Engine options" defaultExpanded></ExpandableSection>
        </SpaceBetween>
        <SpaceBetween size="xs">
          <Header variant="h3">Step 2: Instance details</Header>
          <ExpandableSection headerText="Instance options">

          </ExpandableSection>
          <ExpandableSection headerText="Names and password"></ExpandableSection>
        </SpaceBetween>
      </SpaceBetween>
    </Drawer>
  )
}
