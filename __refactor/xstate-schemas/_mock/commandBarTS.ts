import { setup, assign } from 'xstate'

export const machine = setup({
  types: {
    context: {} as {
      commands: unknown[]
      machineManager: {}
      selectionRanges: {}
      argumentsToSubmit: {}
    },
    events: {} as
      | { type: 'Open' }
      | { type: 'Clear' }
      | { type: 'Close' }
      | { type: 'Add argument' }
      | { type: 'Add commands' }
      | { type: 'Edit argument' }
      | { type: 'Select command' }
      | { type: 'Submit command' }
      | { type: 'Remove argument' }
      | { type: 'Remove commands' }
      | { type: 'Submit argument' }
      | { type: 'Deselect command' }
      | { type: 'Set machine manager' }
      | { type: 'Change current argument' }
      | { type: 'Find and select command' },
  },
  actions: {
    'Clear current argument': function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
    'Find and select command': function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
    'Initialize arguments to submit': function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
    'Set selected command': function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
    'Execute command': function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
    'Set current argument to first non-skippable': function (
      { context, event },
      params
    ) {
      // Add your action code here
      // ...
    },
    enqueueValidArgsToSubmit: function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
    'Set current argument': function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
    'Remove argument': function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
    'Set machine manager': function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
    'Clear argument data': function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
  },
  actors: {
    'Validate all arguments': createMachine({
      /* ... */
    }),
    'Validate argument': createMachine({
      /* ... */
    }),
  },
  guards: {
    'Command has no arguments': function ({ context, event }) {
      // Add your guard condition here
      return true
    },
    'All arguments are skippable': function ({ context, event }) {
      // Add your guard condition here
      return true
    },
    'Command needs review': function ({ context, event }) {
      // Add your guard condition here
      return true
    },
  },
}).createMachine({
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
  id: 'Command Bar',
  initial: 'Closed',
  on: {
    'Set machine manager': {
      actions: {
        type: 'Set machine manager',
      },
      reenter: false,
    },
    Close: {
      target: '#Command Bar.Closed',
    },
    Clear: {
      target: '#Command Bar',
      actions: {
        type: 'Clear argument data',
      },
      reenter: false,
    },
  },
  states: {
    Closed: {
      on: {
        Open: {
          target: 'Selecting command',
        },
        'Find and select command': {
          target: 'Command selected',
          actions: [
            {
              type: 'Find and select command',
            },
            {
              type: 'Initialize arguments to submit',
            },
          ],
        },
        'Add commands': {
          target: 'Closed',
          actions: assign({
            commands: ({ context, event }) =>
              [...context.commands, ...event.data.commands].sort(sortCommands),
          }),
          reenter: false,
        },
        'Remove commands': {
          target: 'Closed',
          actions: assign({
            commands: ({ context, event }) =>
              context.commands.filter(
                ({ context: c }) =>
                  !event.data.commands.some(
                    ({ context: c2 }) =>
                      c2.name === c.name && c2.groupId === c.groupId
                  )
              ),
          }),
          reenter: false,
        },
      },
    },
    'Selecting command': {
      on: {
        'Select command': {
          target: 'Command selected',
          actions: [
            {
              type: 'Set selected command',
            },
            {
              type: 'Initialize arguments to submit',
            },
          ],
        },
      },
    },
    'Command selected': {
      always: [
        {
          target: 'Closed',
          actions: {
            type: 'Execute command',
          },
          guard: {
            type: 'Command has no arguments',
          },
        },
        {
          target: 'Checking Arguments',
          guard: {
            type: 'All arguments are skippable',
          },
        },
        {
          target: 'Gathering arguments',
          actions: {
            type: 'Set current argument to first non-skippable',
          },
        },
      ],
    },
    'Checking Arguments': {
      invoke: {
        id: 'validateArguments',
        input: {},
        onDone: [
          {
            target: 'Review',
            guard: {
              type: 'Command needs review',
            },
          },
          {
            target: 'Closed',
            actions: {
              type: 'Execute command',
            },
          },
        ],
        onError: {
          target: 'Gathering arguments',
          actions: {
            type: 'Set current argument to first non-skippable',
          },
        },
        src: 'Validate all arguments',
      },
    },
    'Gathering arguments': {
      initial: 'Awaiting input',
      on: {
        'Change current argument': {
          target: 'Gathering arguments',
          actions: {
            type: 'Set current argument',
          },
          reenter: false,
        },
        'Deselect command': {
          target: 'Selecting command',
          actions: assign({ selectedCommand: (_c, _e) => undefined }),
        },
      },
      states: {
        'Awaiting input': {
          on: {
            'Submit argument': {
              target: 'Validating',
            },
          },
        },
        Validating: {
          invoke: {
            id: 'validateSingleArgument',
            input: {},
            onDone: {
              target: '#Command Bar.Checking Arguments',
              actions: {
                type: 'enqueueValidArgsToSubmit',
              },
            },
            onError: {
              target: 'Awaiting input',
            },
            src: 'Validate argument',
          },
        },
      },
    },
    Review: {
      on: {
        'Submit command': {
          target: 'Closed',
          actions: {
            type: 'Execute command',
          },
        },
        'Add argument': {
          target: 'Gathering arguments',
          actions: {
            type: 'Set current argument',
          },
        },
        'Remove argument': {
          target: 'Review',
          actions: {
            type: 'Remove argument',
          },
        },
        'Edit argument': {
          target: 'Gathering arguments',
          actions: {
            type: 'Set current argument',
          },
        },
      },
      entry: {
        type: 'Clear current argument',
      },
    },
  },
})
