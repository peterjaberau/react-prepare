import React from "react"

interface PropsListProps {
  props: Record<string, any>
}

const safeStringify = (obj: any, space: number = 2) => {
  const cache = new Set()
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (cache.has(value)) {
        return "[Circular]"
      }
      cache.add(value)
    }
    return value
  }, space)
}

const PropsList: React.FC<PropsListProps> = ({ props }) => {
  return (

    <pre>
      {safeStringify(props)}
    </pre>

      // <ul>
      //   {Object.entries(props).map(([key, value]) => (
      //     <li key={key}>
      //       <strong>{key}:</strong> {key === 'icon' ? '[React Element]' : safeStringify(value)}
      //     </li>
      //   ))}
      // </ul>

  )
}

export default PropsList
