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

export const Entries = () => {
  const { groupedEntries }: any = useChildMachineState(
    "entries",
    (state: any) => state.context,
  )
  const entriesMachine = useChildMachine("entries")
  const rootMachine = useRootMachine()

  const handleEdit = (updatedEntry: any) => {
    entriesMachine.send({
      type: "updateEntry",
      updatedEntry,
    })
  }

  const handleDelete = (entryId: any) => {
    entriesMachine.send({
      type: "deleteEntry",
      entryId,
    })
  }

  const handleFilter = (e: any) => {
    e.preventDefault()
    entriesMachine.send({
      type: "filter",
      startDate: '',
      endDate: '',
    })
  }

  const handleNewClick = () => {
    rootMachine.send({
      type: "pushRoute",
      route: "newEntry",
    })
  }

  return (
    <>
      <SpaceBetween size={"xs"} direction={"vertical"}>
        <Button onClick={handleNewClick}>New entry</Button>
          <JsonView src={groupedEntries} theme={'github'} style={{ fontSize: '12px'}}/>
        <SpaceBetween size={"xs"} direction={"horizontal"}>
          <Button onClick={handleEdit}>{`Edit`}</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </SpaceBetween>
      </SpaceBetween>
    </>
  )
}

