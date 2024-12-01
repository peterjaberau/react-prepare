import React from "react"
import { useParams } from "react-router-dom"
import { ProCard } from "@ant-design/pro-components"
import PropsList from "@/amis/helpers/PropsList.tsx"
import { componentsTree, propsList, initialConfig, metadata } from "./dynamic-helpers.tsx"

const DynamicComponents: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const config = initialConfig[id]
  const Component = componentsTree[id]

  if (!config || !Component) {
    return (
      <div>
        <h1>Component Not Found</h1>
        <p>The component for the given ID does not exist.</p>
      </div>
    )
  }

  return (
    <ProCard direction="row" ghost gutter={16} style={{ height: 'calc(100vh - 40px)' }}>
      <ProCard title={metadata[id]?.title || id} colSpan={16} style={{ minHeight: '400px' }}>
        <Component {...config} />
      </ProCard>
      <ProCard title={'Props List'} colSpan={8} style={{ height: '100%' }}>
        <PropsList props={propsList[id]} />
      </ProCard>
    </ProCard>
  )
}

export default DynamicComponents
