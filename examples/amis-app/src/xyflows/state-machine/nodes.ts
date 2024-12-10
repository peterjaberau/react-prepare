import { PositionLoggerNode } from "./PositionLoggerNode";

export const initialNodes = [
  {
    id: "Command Bar.Closed",
    uniqueId: "b1c2bqeclbk",
    nodes: [],
    position: {
      x: 2254,
      y: 305,
    },
    data: {
      key: "Closed",
      exit: [],
      tags: [],
      entry: [],
      assets: [],
      invoke: [],
    },
    size: {
      width: 83,
      height: 42,
    },
  },
  {
    id: "Command Bar.Selecting command",
    uniqueId: "wtxv61zian",
    nodes: [],
    position: {
      x: 2619,
      y: 575,
    },
    data: {
      key: "Selecting command",
      exit: [],
      tags: [],
      entry: [],
      assets: [],
      invoke: [],
      metaEntries: [],
    },
    size: {
      width: 176,
      height: 42,
    },
  },
  {
    id: "Command Bar.Command selected",
    uniqueId: "jik6zlsnw5h",
    nodes: [],
    position: {
      x: 2318,
      y: 870,
    },
    data: {
      key: "Command selected",
      exit: [],
      tags: [],
      entry: [],
      assets: [],
      invoke: [],
    },
    size: {
      width: 172,
      height: 42,
    },
  },
  {
    id: "Command Bar.Gathering arguments",
    uniqueId: "qqd3ori78x",
    nodes: [
      {
        id: "Command Bar.Gathering arguments.Awaiting input",
        uniqueId: "7h1vokxrwgd",
        nodes: [],
        position: {
          x: 1663,
          y: 1096,
        },
        data: {
          key: "Awaiting input",
          exit: [],
          tags: [],
          entry: [],
          assets: [],
          invoke: [],
        },
        size: {
          width: 136,
          height: 42,
        },
      },
      {
        id: "Command Bar.Gathering arguments.Validating",
        uniqueId: "tqo23fcoz4",
        nodes: [],
        position: {
          x: 1617,
          y: 1278,
        },
        data: {
          key: "Validating",
          exit: [],
          tags: [],
          entry: [],
          assets: [],
          invoke: [
            {
              input: {},
              src: "Validate argument",
              id: "validateSingleArgument",
              kind: "named",
              settings: {},
            },
          ],
        },
        size: {
          width: 272,
          height: 153,
        },
      },
    ],
    position: {
      x: 1544,
      y: 1006,
    },
    data: {
      key: "Gathering arguments",
      exit: [],
      tags: [],
      entry: [],
      assets: [],
      invoke: [],
      initial: "Awaiting input",
    },
    size: {
      width: 527,
      height: 42,
    },
  },
  {
    id: "Command Bar.Review",
    uniqueId: "k6dvpmtmgb",
    nodes: [],
    position: {
      x: 2700,
      y: 1674,
    },
    data: {
      key: "Review",
      exit: [],
      tags: [],
      entry: [
        {
          kind: "named",
          action: {
            type: "Clear current argument",
            params: {},
          },
        },
      ],
      assets: [],
      invoke: [],
    },
    size: {
      width: 249,
      height: 129,
    },
  },
  {
    id: "Command Bar.Checking Arguments",
    uniqueId: "e4eol2njljg",
    nodes: [],
    position: {
      x: 1642,
      y: 667,
    },
    data: {
      key: "Checking Arguments",
      exit: [],
      tags: [],
      entry: [],
      assets: [],
      invoke: [
        {
          input: {},
          src: "Validate all arguments",
          id: "validateArguments",
          kind: "named",
          settings: {},
        },
      ],
    },
    size: {
      width: 243,
      height: 153,
    },
  },
];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  // Add any of your custom nodes here!
};
