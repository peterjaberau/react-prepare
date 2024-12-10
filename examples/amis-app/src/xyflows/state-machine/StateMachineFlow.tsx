import { useCallback } from "react"
import { Background, Controls, MiniMap, ReactFlow, addEdge, useNodesState, useEdgesState } from "@xyflow/react"
// @ts-ignore
import dagre from "dagre"
import "@xyflow/react/dist/style.css"

import { initialNodes, nodeTypes } from "./nodes"
import { initialEdges, edgeTypes } from "./edges"

const calculateNodeSize = (depth: any, numChildren: any) => {
  const baseWidth = 100
  const baseHeight = 50
  const widthIncrement = 50
  const heightIncrement = 25
  return {
    width: baseWidth + widthIncrement * depth + numChildren * 20,
    height: baseHeight + heightIncrement * depth + numChildren * 10,
  }
}

const transformDataToReactFlow = (dataNodes: any, dataEdges: any) => {
  const nodes: any = []
  const edges: any = []
  const g = new dagre.graphlib.Graph()
  g.setGraph({})
  g.setDefaultEdgeLabel(() => ({}))

  const processNodes = (nodesArray: any[], depth = 0, parentId = null, parentPosition = { x: 0, y: 0 }) => {
    nodesArray.forEach((node) => {
      const size = calculateNodeSize(depth, node.nodes ? node.nodes.length : 0)
      const position = {
        x: parentPosition.x + size.width,
        y: parentPosition.y + size.height,
      }
      nodes.push({
        id: node.id,
        type: node.nodes && node.nodes.length > 0 ? "parent" : "default",
        data: { label: node.data.key },
        parentId: parentId,
        position: position,
      })

      g.setNode(node.id, size)

      if (node.nodes && node.nodes.length > 0) {
        processNodes(node.nodes, depth + 1, node.id, position)
      }
    })
  }

  processNodes(dataNodes)

  dataEdges.forEach((edge: any) => {
    edges.push({
      id: edge.id,
      source: edge.source,
      target: edge.target,
      type: "default",
    })

    g.setEdge(edge.source, edge.target)
  })

  dagre.layout(g)

  g.nodes().forEach((nodeId: any) => {
    const node = nodes.find((n: any) => n.id === nodeId)
    const dagreNode = g.node(nodeId)
    if (dagreNode) {
      const { x, y } = dagreNode
      node.position = { x, y }
    }
  })

  return { nodes, edges }
}

const initialData = transformDataToReactFlow(initialNodes, initialEdges)

export const StateMachineFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialData.nodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialData.edges)
  const onConnect = useCallback((connection: any) => setEdges((edges) => addEdge(connection, edges)), [setEdges])

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      edges={edges}
      edgeTypes={edgeTypes}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <Background />
      <MiniMap />
      <Controls />
    </ReactFlow>
  )
}
