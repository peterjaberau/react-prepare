import type { Edge, EdgeTypes } from "@xyflow/react"

export const initialEdges: any = [
  {
    id: "Command Bar.Closed#Open[0]",
    uniqueId: "7tvydduc0cv",
    data: {
      eventTypeData: {
        type: "named",
        eventType: "Open",
      },
      actions: [],
    },
    source: "Command Bar.Closed",
    target: "Command Bar.Selecting command",
    position: {
      x: 2670,
      y: 441,
    },
    size: {
      width: 73,
      height: 40,
    },
  },
  {
    id: "Command Bar.Closed#Find and select command[0]",
    uniqueId: "bhd2xsfclv5",
    data: {
      eventTypeData: {
        type: "named",
        eventType: "Find and select command",
      },
      actions: [
        {
          kind: "named",
          action: {
            type: "Find and select command",
            params: {},
          },
        },
        {
          kind: "named",
          action: {
            type: "Initialize arguments to submit",
            params: {},
          },
        },
      ],
    },
    source: "Command Bar.Closed",
    target: "Command Bar.Command selected",
    position: {
      x: 2154,
      y: 397,
    },
    size: {
      width: 282,
      height: 128,
    },
  },
  {
    id: "Command Bar.Closed#Add commands[0]",
    uniqueId: "7wfwct5mm89",
    data: {
      eventTypeData: {
        type: "named",
        eventType: "Add commands",
      },
      actions: [
        {
          kind: "named",
          action: {
            type: "inline:Command Bar.Closed#Add commands[-1]#transition[0]",
            params: {},
          },
        },
      ],
      internal: true,
    },
    source: "Command Bar.Closed",
    target: "Command Bar.Closed",
    position: {
      x: 3055,
      y: 397,
    },
    size: {
      width: 196,
      height: 116,
    },
  },
  {
    id: "Command Bar.Closed#Remove commands[0]",
    uniqueId: "9hko6raq4ta",
    data: {
      eventTypeData: {
        type: "named",
        eventType: "Remove commands",
      },
      actions: [
        {
          kind: "named",
          action: {
            type: "inline:Command Bar.Closed#Remove commands[-1]#transition[0]",
            params: {},
          },
        },
      ],
      internal: true,
    },
    source: "Command Bar.Closed",
    target: "Command Bar.Closed",
    position: {
      x: 653,
      y: 397,
    },
    size: {
      width: 196,
      height: 116,
    },
  },
  {
    id: "Command Bar.Selecting command#Select command[0]",
    uniqueId: "0y3n01r5j9k",
    data: {
      eventTypeData: {
        type: "named",
        eventType: "Select command",
      },
      actions: [
        {
          kind: "named",
          action: {
            type: "Set selected command",
            params: {},
          },
        },
        {
          kind: "named",
          action: {
            type: "Initialize arguments to submit",
            params: {},
          },
        },
      ],
    },
    source: "Command Bar.Selecting command",
    target: "Command Bar.Command selected",
    position: {
      x: 2306,
      y: 680,
    },
    size: {
      width: 282,
      height: 128,
    },
  },
  {
    id: "Command Bar.Command selected#always[0]",
    uniqueId: "zgexnq3gqhr",
    data: {
      eventTypeData: {
        type: "always",
      },
      guard: {
        kind: "named",
        type: "Command has no arguments",
        params: {},
      },
      actions: [
        {
          kind: "named",
          action: {
            type: "Execute command",
            params: {},
          },
        },
      ],
    },
    source: "Command Bar.Command selected",
    target: "Command Bar.Closed",
    position: {
      x: 1819,
      y: 422,
    },
    size: {
      width: 285,
      height: 90,
    },
  },
  {
    id: "Command Bar.Command selected#always[1]",
    uniqueId: "jb7hb4i0bn",
    data: {
      eventTypeData: {
        type: "always",
      },
      guard: {
        kind: "named",
        type: "All arguments are skippable",
        params: {},
      },
      actions: [],
    },
    source: "Command Bar.Command selected",
    target: "Command Bar.Checking Arguments",
    position: {
      x: 1555,
      y: 576,
    },
    size: {
      width: 313,
      height: 40,
    },
  },
  {
    id: "Command Bar.Command selected#always[2]",
    uniqueId: "4xjp616hkjn",
    data: {
      eventTypeData: {
        type: "always",
      },
      actions: [
        {
          kind: "named",
          action: {
            type: "Set current argument to first non-skippable",
            params: {},
          },
        },
      ],
    },
    source: "Command Bar.Command selected",
    target: "Command Bar.Gathering arguments",
    position: {
      x: 1203,
      y: 699,
    },
    size: {
      width: 389,
      height: 90,
    },
  },
  {
    id: "Command Bar.Gathering arguments.Awaiting input#Submit argument[0]",
    uniqueId: "xg67r6kd40f",
    data: {
      eventTypeData: {
        type: "named",
        eventType: "Submit argument",
      },
      actions: [],
    },
    source: "Command Bar.Gathering arguments.Awaiting input",
    target: "Command Bar.Gathering arguments.Validating",
    position: {
      x: 1875,
      y: 1188,
    },
    size: {
      width: 148,
      height: 40,
    },
  },
  {
    id: "Command Bar.Gathering arguments.Validating#done.invoke.validateSingleArgument[0]",
    uniqueId: "lbki90dljg",
    data: {
      eventTypeData: {
        type: "invocation.done",
        invocationId: "validateSingleArgument",
      },
      actions: [
        {
          kind: "named",
          action: {
            type: "enqueueValidArgsToSubmit",
            params: {},
          },
        },
      ],
    },
    source: "Command Bar.Gathering arguments.Validating",
    target: "Command Bar.Checking Arguments",
    position: {
      x: 1998,
      y: 870,
    },
    size: {
      width: 270,
      height: 85,
    },
  },
  {
    id: "Command Bar.Gathering arguments.Validating#error.platform.validateSingleArgument[0]",
    uniqueId: "wavvwnudddm",
    data: {
      eventTypeData: {
        type: "invocation.error",
        invocationId: "validateSingleArgument",
      },
      actions: [],
    },
    source: "Command Bar.Gathering arguments.Validating",
    target: "Command Bar.Gathering arguments.Awaiting input",
    position: {
      x: 1592,
      y: 1190,
    },
    size: {
      width: 233,
      height: 35,
    },
  },
  {
    id: "Command Bar.Gathering arguments#Change current argument[0]",
    uniqueId: "yn5vmdv02p8",
    data: {
      eventTypeData: {
        type: "named",
        eventType: "Change current argument",
      },
      actions: [
        {
          kind: "named",
          action: {
            type: "Set current argument",
            params: {},
          },
        },
      ],
      internal: true,
    },
    source: "Command Bar.Gathering arguments",
    target: "Command Bar.Gathering arguments",
    position: {
      x: 2659,
      y: 1534,
    },
    size: {
      width: 230,
      height: 90,
    },
  },
  {
    id: "Command Bar.Gathering arguments#Deselect command[0]",
    uniqueId: "opq2oql85m",
    data: {
      eventTypeData: {
        type: "named",
        eventType: "Deselect command",
      },
      actions: [
        {
          kind: "named",
          action: {
            type: "inline:Command Bar.Gathering arguments#Deselect command[-1]#transition[0]",
            params: {},
          },
        },
      ],
    },
    source: "Command Bar.Gathering arguments",
    target: "Command Bar.Selecting command",
    position: {
      x: 2638,
      y: 686,
    },
    size: {
      width: 196,
      height: 116,
    },
  },
  {
    id: "Command Bar.Review#Submit command[0]",
    uniqueId: "iuxjy0rf0l",
    data: {
      eventTypeData: {
        type: "named",
        eventType: "Submit command",
      },
      actions: [
        {
          kind: "named",
          action: {
            type: "Execute command",
            params: {},
          },
        },
      ],
    },
    source: "Command Bar.Review",
    target: "Command Bar.Closed",
    position: {
      x: 2793,
      y: 416,
    },
    size: {
      width: 212,
      height: 90,
    },
  },
  {
    id: "Command Bar.Review#Add argument[0]",
    uniqueId: "ktvql8rf51",
    data: {
      eventTypeData: {
        type: "named",
        eventType: "Add argument",
      },
      actions: [
        {
          kind: "named",
          action: {
            type: "Set current argument",
            params: {},
          },
        },
      ],
    },
    source: "Command Bar.Review",
    target: "Command Bar.Gathering arguments",
    position: {
      x: 1139,
      y: 1534,
    },
    size: {
      width: 230,
      height: 90,
    },
  },
  {
    id: "Command Bar.Review#Remove argument[0]",
    uniqueId: "b1v6s744uvp",
    data: {
      eventTypeData: {
        type: "named",
        eventType: "Remove argument",
      },
      actions: [
        {
          kind: "named",
          action: {
            type: "Remove argument",
            params: {},
          },
        },
      ],
    },
    source: "Command Bar.Review",
    target: "Command Bar.Review",
    position: {
      x: 2726,
      y: 1853,
    },
    size: {
      width: 210,
      height: 90,
    },
  },
  {
    id: "Command Bar.Review#Edit argument[0]",
    uniqueId: "vrj77nazjym",
    data: {
      eventTypeData: {
        type: "named",
        eventType: "Edit argument",
      },
      actions: [
        {
          kind: "named",
          action: {
            type: "Set current argument",
            params: {},
          },
        },
      ],
    },
    source: "Command Bar.Review",
    target: "Command Bar.Gathering arguments",
    position: {
      x: 1419,
      y: 1534,
    },
    size: {
      width: 230,
      height: 90,
    },
  },
  {
    id: "Command Bar.Checking Arguments#done.invoke.validateArguments[0]",
    uniqueId: "t7rmtj8sf2",
    data: {
      eventTypeData: {
        type: "invocation.done",
        invocationId: "validateArguments",
      },
      guard: {
        kind: "named",
        type: "Command needs review",
        params: {},
      },
      actions: [],
    },
    source: "Command Bar.Checking Arguments",
    target: "Command Bar.Review",
    position: {
      x: 911,
      y: 885,
    },
    size: {
      width: 433,
      height: 40,
    },
  },
  {
    id: "Command Bar.Checking Arguments#done.invoke.validateArguments[1]",
    uniqueId: "i024qpaq9hn",
    data: {
      eventTypeData: {
        type: "invocation.done",
        invocationId: "validateArguments",
      },
      actions: [
        {
          kind: "named",
          action: {
            type: "Execute command",
            params: {},
          },
        },
      ],
    },
    source: "Command Bar.Checking Arguments",
    target: "Command Bar.Closed",
    position: {
      x: 899,
      y: 416,
    },
    size: {
      width: 313,
      height: 90,
    },
  },
  {
    id: "Command Bar.Checking Arguments#error.platform.validateArguments[0]",
    uniqueId: "ynwp9r8tzxs",
    data: {
      eventTypeData: {
        type: "invocation.error",
        invocationId: "validateArguments",
      },
      actions: [
        {
          kind: "named",
          action: {
            type: "Set current argument to first non-skippable",
            params: {},
          },
        },
      ],
    },
    source: "Command Bar.Checking Arguments",
    target: "Command Bar.Gathering arguments",
    position: {
      x: 1579,
      y: 870,
    },
    size: {
      width: 369,
      height: 85,
    },
  },
  {
    id: "Command Bar#Set machine manager[0]",
    uniqueId: "t59yredwrh",
    data: {
      eventTypeData: {
        type: "named",
        eventType: "Set machine manager",
      },
      actions: [
        {
          kind: "named",
          action: {
            type: "Set machine manager",
            params: {},
          },
        },
      ],
      internal: true,
    },
    source: "Command Bar",
    position: {
      x: 352,
      y: 52,
    },
    size: {
      width: 233,
      height: 90,
    },
  },
  {
    id: "Command Bar#Close[0]",
    uniqueId: "wi3e1asucqq",
    data: {
      eventTypeData: {
        type: "named",
        eventType: "Close",
      },
      actions: [],
    },
    source: "Command Bar",
    target: "Command Bar.Closed",
    position: {
      x: 2258,
      y: 215,
    },
    size: {
      width: 75,
      height: 40,
    },
  },
  {
    id: "Command Bar#Clear[0]",
    uniqueId: "p5g6xyv21h",
    data: {
      eventTypeData: {
        type: "named",
        eventType: "Clear",
      },
      actions: [
        {
          kind: "named",
          action: {
            type: "Clear argument data",
            params: {},
          },
        },
      ],
      internal: true,
    },
    source: "Command Bar",
    target: "Command Bar",
    position: {
      x: 107,
      y: 52,
    },
    size: {
      width: 225,
      height: 90,
    },
  },
] as any[];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes
