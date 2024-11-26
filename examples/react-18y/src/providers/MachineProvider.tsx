import React from "react"
import { assign, setup } from "xstate"
import { createActorContext } from "@xstate/react"
import { initialLayers } from "@/data/content-helpers.tsx"

function transformToAntdTree(children: any, idKey: string = 'id'): any[] {
  if (Array.isArray(children)) {
    return children.map((child) => {
      if (typeof child === "string") {
        // If the child itself is a string, treat it as a leaf node
        return {
          key: generateId(),
          title: child,
          isLeaf: true,
        };
      }

      if (typeof child === "object") {
        // Handle case where `children` is a string or an array
        const hasChildrenKey = child.hasOwnProperty('children');
        const childrenIsString = typeof child.children === "string";
        const childrenIsArray = Array.isArray(child.children);

        let transformedChildren = [];
        if (childrenIsString) {
          transformedChildren = [{
            key: generateId(),
            title: child.children,
            isLeaf: true,
          }];
        } else if (childrenIsArray) {
          transformedChildren = transformToAntdTree(child.children, idKey);
        }

        return {
          key: child[idKey] || child.id || generateId(),
          title: child.name || child[idKey] || "Untitled Node",
          isLeaf: childrenIsString || (!hasChildrenKey || (childrenIsArray && child.children.length === 0)),
          children: childrenIsString ? [] : transformedChildren,
        };
      }

      return {
        key: generateId(),
        title: "Unknown Node",
        isLeaf: true,
      };
    });
  }

  return [];
}



// function transformToAntdTree(children: any, idKey: string = 'id'): any[] {
//   if (Array.isArray(children)) {
//     return children.map((child) => {
//       if (typeof child === "string") {
//         return {
//           key: child,
//           title: child,
//           isLeaf: true,
//         };
//       }
//
//       if (typeof child === "object") {
//         const hasChildrenKey = child.hasOwnProperty('children');
//         return {
//           key: child.id || child[idKey] || generateId(),
//           title: child.name || child[idKey],
//           isLeaf: !hasChildrenKey || (Array.isArray(child.children) && child.children.length === 0),
//           children: hasChildrenKey ? transformToAntdTree(child.children, idKey) : [],
//         };
//       }
//
//       return {
//         key: child.id || child[idKey],
//         title: child.name || child[idKey],
//         isLeaf: true,
//       };
//     });
//   }
//
//   return [];
// }
// function transformToAntdTree(children: any, idKey: string = 'id'): any[] {
//   if (Array.isArray(children)) {
//     return children.map((child) => {
//       if (typeof child === "string") {
//         // Handle case where `child` is a string, meaning it represents a leaf node
//         return {
//           key: child,
//           title: child,
//           isLeaf: true,
//         };
//       }
//
//       if (typeof child === "object") {
//         const hasChildren = child.hasOwnProperty('children') && Array.isArray(child.children);
//
//         return {
//           key: child[idKey] || child.id || generateId(),
//           title: child.name || child[idKey] || "Untitled Node",
//           isLeaf: !hasChildren || child.children.every((subChild: any) => typeof subChild === "string"),
//           children: hasChildren ? transformToAntdTree(child.children, idKey) : [],
//         };
//       }
//
//       return {
//         key: generateId(),
//         title: "Unknown Node",
//         isLeaf: true,
//       };
//     });
//   }
//
//   return [];
// }

function transformLayers(layers: any[], idKey: string = "id"): any[] {
  return layers.map((layer) => ({
    id: layer.id,
    content: { title: layer.name },
    children: transformChildren(layer.children, idKey),
  }))
}

function transformChildren(children: any, idKey: string): any[] {
  if (typeof children === "string") {
    return [{ id: children, content: { title: children }, children: [] }]
  }

  if (Array.isArray(children)) {
    return children.map((child) => {
      if (typeof child === "string") {
        return { id: child, content: { title: child }, children: [] }
      }

      if (typeof child === "object" && !child.id) {
        return { ...child, id: child[idKey] || generateId(), children: transformChildren(child.children, idKey) }
      }

      return { ...child, children: transformChildren(child.children, idKey) }
    })
  }

  return []
}

function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

export const layersLogic = {
  id: "layers-machine",
  initial: "idle",
  context: {
    root: {
      layers: [],
    },
    transformed: {},
  },
  states: {
    idle: {
      always: {
        target: "transforming",
      },
    },
    ready: {
      on: {
        "update.event": {
          actions: "update",
          target: "ready",
        },
        "reset.event": {
          actions: "reset",
          target: "ready",
        },
        "handle.event": {
          actions: ["handle"],
          target: "ready",
        },
        "delete.event": {
          actions: ["delete"],
          target: "ready",
        },
        "create.event": {
          actions: ["create"],
          target: "ready",
        },
        "read.event": {
          actions: ["read"],
          target: "ready",
        },
      },
    },
    transforming: {
      always: {
        // "transform.event": {
          actions: ["transform"],
          target: "ready",
        // },
      },
    },
  },
} as any

export const layersMachine = setup({
  types: {
    context: {} as any,
    events: {} as any,
    schema: {} as any,
  } as any,
  actions: {
    init: assign(({ context, event }) => {
      // Initialize the context with the initial layers for the root and keep the existing transformed layers
      console.log("action.init", event, context)
      return {
        root: { ...context.root, ...initialLayers },
        transformed: context.transformed,
      }
    }),
    update: assign(({ context, event }) => {
      console.log("action.update", event, context)
      context.string = event?.string
      // context.mode = context.mode === "normal" ? "dev" : "normal";
    }),
    reset: assign(() => {
      console.log("action.reset")
      // reset the context to the default values
      return initialLayers
    }),
    handle: assign(({ context, event }) => {
      console.log("action.handle", event, context)
    }),
    delete: assign(() => {
      console.log("action.delete")
    }),
    create: assign(() => {
      console.log("action.create")
    }),
    read: assign(() => {
      console.log("action.read")
    }),
    transform: assign(({ context, event }) => {
      console.log("action.transform", event, context)
      const transformedLayers = transformLayers(context.root.layers, event.idKey)
      const layersAnt = transformToAntdTree(context.root.layers, event.idKey);
      return {
        ...context,
        transformed: {
          layers: transformedLayers,
          layersAnt: layersAnt,
        },
      }
    }),
  },
  actors: {},
}).createMachine({
  ...layersLogic,
  context: ({ input }: any) => ({
    root: {
      layers: initialLayers,
      ...input,
    },
    transformed: {},
  }),
})

/*
context schema:
context: { root: { layers: [], key1: {} }, transformed: { key2: []} }

question:
- how to partially update the context.root given from such data (initialLayers: [xxxxx] will update root.layers, and input: {xxxxx} will update anything inside context.root

 */

export const LayersContext = createActorContext(layersMachine, {
  inspect: (inspectionEvent) => {
    console.log(inspectionEvent)
  },
})

export const LayersProvider = ({ children }: { children: React.ReactNode }) => {
  return <LayersContext.Provider>{children}</LayersContext.Provider>
}

export const useLayersMachine = () => {
  const actor = LayersContext.useActorRef()
  const state = LayersContext.useSelector((state: any) => state)

  return {
    actor: actor,
    state: state,
    selectors: state.context,
  }
}
