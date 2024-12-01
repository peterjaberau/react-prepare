import React from "react"
import { Space, Collapse, Typography, Button } from "antd"
import { RightOutlined } from "@ant-design/icons"
import { DndContext, useSensor, useSensors, PointerSensor, KeyboardSensor } from "@dnd-kit/core"
import { SortableContext, sortableKeyboardCoordinates, useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

const { Panel } = Collapse
const { Text } = Typography

type PanelProps = {
  groupedRenderers: {
    [propName: string]: Array<any>
  }
  className?: string
  isHasPluginIcon: boolean
}

const DraggableItem = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  )
}

const RenderersPanel: React.FC<PanelProps> = ({ groupedRenderers, className, isHasPluginIcon }) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const grouped = groupedRenderers || {}
  const keys = Object.keys(grouped)

  return (
    <DndContext sensors={sensors}>
      <Space direction="vertical">
        <Space direction="vertical">
          {keys.length ? (
            keys.map((tag, index) => {
              const items = grouped[tag]
              if (!items || !items.length) {
                return null
              }
              return (
                <React.Fragment key={tag}>
                  <Collapse key={`${tag}-head`} size={'small'} onChange={(event: any) => console.log(event)}>
                    <Panel header={tag} key={tag}>
                      <SortableContext items={items.map((item) => `${index}_${item.id}`)}>
                        <Space direction="vertical">
                          {items.map((item: any) => {
                            const key = `${index}_${item.id}`
                            return (
                              <DraggableItem key={key} id={key}>
                                <Space
                                  key={key}
                                  draggable
                                  data-id={key}
                                  data-dnd-type="subrenderer"
                                  data-dnd-id={item.id}
                                  data-dnd-data={JSON.stringify(item.scaffold || { type: item.type })}
                                >
                                  <Button data-dnd-id={item.id} icon={isHasPluginIcon && <RightOutlined />} onClick={() => console.log(item)}>
                                    {item.name}
                                  </Button>
                                </Space>
                              </DraggableItem>
                            )
                          })}
                        </Space>
                      </SortableContext>
                    </Panel>
                  </Collapse>
                </React.Fragment>
              )
            })
          ) : (
            <Text>No available components are found, you can change the keyword to continue searching.</Text>
          )}
        </Space>
      </Space>
    </DndContext>
  )
}

export default RenderersPanel
