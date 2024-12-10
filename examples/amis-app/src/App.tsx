import React from "react";
// import { StateMachineFlow } from "@/xyflows/state-machine/StateMachineFlow.tsx"
import { CommandBarApp } from "@/xstate-drafting/components/commandBar/_mocking/CommandBarApp.tsx"
import { SpaceBetween, Box, Container, ExpandableSection } from "@cloudscape-design/components"
import JsonView from "react18-json-view"
import { useCommandsContext } from "@/xstate-drafting/components/commandBar/_mocking/useCommandsContext.ts"
import { AnyMachineSnapshot } from "xstate"

function getNextEvents(snapshot: AnyMachineSnapshot) {
  return [...new Set([...snapshot._nodes.flatMap((sn) => sn.ownEvents)])];
}


const App: React.FC = () => {
  const { commandBarState, commandBarSend } = useCommandsContext();
  const nextEvents = getNextEvents(commandBarState);

  return (
    <SpaceBetween alignItems="center" size="xs" direction="vertical">
      <SpaceBetween alignItems="start" size="xs" direction="vertical">
        <div style={{ width: '700px'}}>
          <CommandBarApp />
        </div>
        {/*<ExpandableSection*/}

        {/*  variant="container"*/}
        {/*  headerText="Active"*/}
        {/*>*/}
        {/*  <JsonView src={commandBarState.value} collapsed={1} style={{ width: '500px', height: '500px'}} />*/}
        {/*</ExpandableSection>*/}
        <ExpandableSection

          variant="container"
          headerText="Next Events"
        >
          <JsonView src={nextEvents} collapsed={1} style={{ width: '500px', height: '500px'}} />
        </ExpandableSection>
        <ExpandableSection

          variant="container"
          headerText="Json"
        >
          <JsonView src={commandBarState.context} collapsed={1} style={{ width: '500px', height: '500px'}} />
        </ExpandableSection>
      </SpaceBetween>
    </SpaceBetween>

  );
};

export default App;
