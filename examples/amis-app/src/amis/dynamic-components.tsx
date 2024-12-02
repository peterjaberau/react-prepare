import React, { useRef } from "react"
import { useParams } from "react-router-dom"
import { ProCard } from "@ant-design/pro-components"
import PropsList from "@/amis/helpers/PropsList.tsx"
import { Board, BoardItem } from "@cloudscape-design/board-components"
import { Header, SpaceBetween } from "@cloudscape-design/components"
import { boardI18nStrings, boardItemI18nStrings } from "./helpers/board-helpers.tsx"
import { componentsTree, propsList, metadata, initialConfig, boardItemConfig } from "@/amis/dynamic-helpers.tsx"
import { ErrorRenderer } from "@/amis-editor-core/component/base/ErrorRenderer.tsx"

const DynamicComponents: React.FC = () => {
  const { id } = useParams() as any
  const [items, setItems] = React.useState([])
  const itemRef = useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!id) {
      setItems([
        {
          id: "not-found-item",
          definition: {},
          columnSpan: 1,
          rowSpan: 5,
          data: {
            title: "Component Not Found",
            description: "",
            content: (
              <>
                <h1>Component Not Found</h1>
                <p>The component for the given ID does not exist.</p>
              </>
            ),
          },
        },
      ] as any)
      return
    }

    const config: any = initialConfig[id] as any
    const Component: any = componentsTree[id]

    setItems([
      {
        id: "board-inscoped-item",
        definition: {},
        columnSpan: 3,
        rowSpan: 5,
        data: {
          title: `InScope Item ${id}`,
          description: "",
          content: (
              <div
                ref={boardItemConfig?.[id]?.hasRef ? itemRef : null}
                style={{ width: "100%", height: "100%", overflow: "auto" }}
                {...(typeof boardItemConfig?.[id]?.content === "object" ? boardItemConfig[id].content : {})}
              >
                {Component && (
                  <Component {...config} target={boardItemConfig?.[id]?.hasRef ? itemRef : config.target} />
                )}
              </div>
          ),
        },
      },
      {
        id: "board-properties-item",
        definition: {},
        columnSpan: 1,
        rowSpan: 5,
        data: {
          title: "Properties",
          description: "",
          content: (
            <>
              <PropsList props={propsList?.[id]} />
            </>
          ),
        },
      },
    ] as any)
  }, [id])

  const i18nStrings = {
    empty: "No items",
    // Add other i18n strings as needed
  }

  type ItemDataType = {
    title: string
    content: React.ReactNode
  }

  return (
    <Board
      items={items}
      renderItem={(item) => (
        <BoardItem header={<Header>{(item.data as ItemDataType).title}</Header>} i18nStrings={i18nStrings as any}>
          {(item.data as ItemDataType).content}
        </BoardItem>
      )}
      i18nStrings={boardI18nStrings}
      onItemsChange={(event) => setItems(event.detail.items as any)}
      empty="empty"
    />

    // <ProCard direction="row" ghost gutter={16} style={{ height: 'calc(100vh - 40px)' }}>
    //   <ProCard title={metadata[id]?.title || id} colSpan={16} style={{ minHeight: '400px' }}>
    //     <Component {...config} />
    //   </ProCard>
    //   <ProCard title={'Props List'} colSpan={8} style={{ height: '100%' }}>
    //     <PropsList props={propsList[id]} />
    //   </ProCard>
    // </ProCard>
  )
}

export default DynamicComponents
