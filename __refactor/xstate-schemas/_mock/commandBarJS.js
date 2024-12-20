import { createMachine, assign } from "xstate";
export const machine = createMachine(
  {
    context: {
      commands: [],
      machineManager: {
        machines: [],
        machineApiIp: null,
        currentMachine: null,
      },
      selectionRanges: {
        otherSelections: [],
        codeBasedSelections: [],
      },
      argumentsToSubmit: {},
    },
    id: "Command Bar",
    initial: "Closed",
    states: {
      Closed: {
        on: {
          Open: [
            {
              target: "Selecting command",
              actions: [],
            },
          ],
          "Find and select command": [
            {
              target: "Command selected",
              actions: [
                {
                  type: "Find and select command",
                },
                {
                  type: "Initialize arguments to submit",
                },
              ],
            },
          ],
          "Add commands": [
            {
              target: "Closed",
              actions: [
                {
                  type: "inline:Command Bar.Closed#Add commands[-1]#transition[0]",
                },
              ],
              reenter: false,
            },
          ],
          "Remove commands": [
            {
              target: "Closed",
              actions: [
                {
                  type: "inline:Command Bar.Closed#Remove commands[-1]#transition[0]",
                },
              ],
              reenter: false,
            },
          ],
        },
      },
      "Selecting command": {
        on: {
          "Select command": [
            {
              target: "Command selected",
              actions: [
                {
                  type: "Set selected command",
                },
                {
                  type: "Initialize arguments to submit",
                },
              ],
            },
          ],
        },
      },
      "Command selected": {
        always: [
          {
            target: "Closed",
            guard: "Command has no arguments",
            actions: [
              {
                type: "Execute command",
              },
            ],
          },
          {
            target: "Checking Arguments",
            guard: "All arguments are skippable",
            actions: [],
          },
          {
            target: "Gathering arguments",
            actions: [
              {
                type: "Set current argument to first non-skippable",
              },
            ],
          },
        ],
      },
      "Checking Arguments": {
        invoke: {
          input: {},
          src: "Validate all arguments",
          id: "validateArguments",
          onDone: [
            {
              target: "Review",
              guard: "Command needs review",
              actions: [],
            },
            {
              target: "Closed",
              actions: [
                {
                  type: "Execute command",
                },
              ],
            },
          ],
          onError: [
            {
              target: "Gathering arguments",
              actions: [
                {
                  type: "Set current argument to first non-skippable",
                },
              ],
            },
          ],
        },
      },
      "Gathering arguments": {
        initial: "Awaiting input",
        states: {
          "Awaiting input": {
            on: {
              "Submit argument": [
                {
                  target: "Validating",
                  actions: [],
                },
              ],
            },
          },
          Validating: {
            invoke: {
              input: {},
              src: "Validate argument",
              id: "validateSingleArgument",
              onDone: [
                {
                  target: "#Command Bar.Checking Arguments",
                  actions: [
                    {
                      type: "enqueueValidArgsToSubmit",
                    },
                  ],
                },
              ],
              onError: [
                {
                  target: "Awaiting input",
                  actions: [],
                },
              ],
            },
          },
        },
        on: {
          "Change current argument": [
            {
              target: "Gathering arguments",
              actions: [
                {
                  type: "Set current argument",
                },
              ],
              reenter: false,
            },
          ],
          "Deselect command": [
            {
              target: "Selecting command",
              actions: [
                {
                  type: "inline:Command Bar.Gathering arguments#Deselect command[-1]#transition[0]",
                },
              ],
            },
          ],
        },
      },
      Review: {
        entry: {
          type: "Clear current argument",
        },
        on: {
          "Submit command": [
            {
              target: "Closed",
              actions: [
                {
                  type: "Execute command",
                },
              ],
            },
          ],
          "Add argument": [
            {
              target: "Gathering arguments",
              actions: [
                {
                  type: "Set current argument",
                },
              ],
            },
          ],
          "Remove argument": [
            {
              target: "Review",
              actions: [
                {
                  type: "Remove argument",
                },
              ],
            },
          ],
          "Edit argument": [
            {
              target: "Gathering arguments",
              actions: [
                {
                  type: "Set current argument",
                },
              ],
            },
          ],
        },
      },
    },
    on: {
      "Set machine manager": [
        {
          actions: [
            {
              type: "Set machine manager",
            },
          ],
          reenter: false,
        },
      ],
      Close: [
        {
          target: ".Closed",
          actions: [],
        },
      ],
      Clear: [
        {
          target: "#Command Bar",
          actions: [
            {
              type: "Clear argument data",
            },
          ],
          reenter: false,
        },
      ],
    },
  },
  {
    actions: {
      "Execute command": ({ context, event }) => {},
      "Remove argument": ({ context, event }) => {},
      "Clear argument data": ({ context, event }) => {},
      "Set machine manager": ({ context, event }) => {},
      "Set current argument": ({ context, event }) => {},
      "Set selected command": ({ context, event }) => {},
      "Clear current argument": ({ context, event }) => {},
      "Find and select command": ({ context, event }) => {},
      enqueueValidArgsToSubmit: ({ context, event }) => {},
      "Initialize arguments to submit": ({ context, event }) => {},
      "Set current argument to first non-skippable": ({ context, event }) => {},
      "inline:Command Bar.Closed#Add commands[-1]#transition[0]": assign({
        commands: ({ context, event }) =>
          [...context.commands, ...event.data.commands].sort(sortCommands),
      }),
      "inline:Command Bar.Closed#Remove commands[-1]#transition[0]": assign({
        commands: ({ context, event }) =>
          context.commands.filter(
            (c) =>
              !event.data.commands.some(
                (c2) => c2.name === c.name && c2.groupId === c.groupId,
              ),
          ),
      }),
      "inline:Command Bar.Gathering arguments#Deselect command[-1]#transition[0]":
        assign({ selectedCommand: (_c, _e) => undefined }),
    },
    actors: {
      "Validate argument": fromPromise({
        /* ... */
      }),
      "Validate all arguments": fromPromise({
        /* ... */
      }),
    },
    guards: {
      "Command needs review": ({ context, event }, params) => {
        return false;
      },
      "Command has no arguments": ({ context, event }, params) => {
        return false;
      },
      "All arguments are skippable": ({ context, event }, params) => {
        return false;
      },
    },
    delays: {},
  },
);
