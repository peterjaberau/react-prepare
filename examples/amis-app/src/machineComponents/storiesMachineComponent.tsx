import { useRootMachine, useChildMachine, useChildMachineState } from "@/machines/useMyMachines.ts"
import {
  SpaceBetween,
  Form,
  FormField,
  Input,
  Button,
  TextContent,
  Container,
  Header, Badge,
} from "@cloudscape-design/components"
import JsonView from "react18-json-view"
import 'react18-json-view/src/style.css'

export const Stories = () => {
  const { stories }: any = useChildMachineState(
    "stories",
    (state: any) => state.context,
  )
  const storiesMachine = useChildMachine("stories")
  const rootMachine = useRootMachine()


  const handleFilter = (e: any) => {
    e.preventDefault()
    storiesMachine.send({
      type: "filter",
      scope: '',
    })
  }

  return (
    <>
      <SpaceBetween size={"xs"} direction={"vertical"}>
        <Button onClick={handleFilter}>Filter Stories</Button>
          <JsonView src={stories} theme={'github'} style={{ fontSize: '12px'}}/>
      </SpaceBetween>
    </>
  )
}

