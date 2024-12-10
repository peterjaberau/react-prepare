export const setup = {
  context: [
    {
      commands: [
        {
          name: "exampleCommand",
          groupId: "exampleGroup",
          args: {
            arg1: {
              required: true,
              defaultValue: "default",
              inputType: "string",
              options: ["option1", "option2"],
              skip: false,
            },
          },
          onSubmit: "function",
          needsReview: false,
        },
      ],
      selectedCommand: {
        name: "exampleCommand",
        groupId: "exampleGroup",
        args: {
          arg1: {
            required: true,
            defaultValue: "default",
            inputType: "string",
            options: ["option1", "option2"],
            skip: false,
          },
        },
        onSubmit: "function",
        needsReview: false,
      },
      currentArgument: {
        name: "arg1",
        required: true,
        defaultValue: "default",
        inputType: "string",
        options: ["option1", "option2"],
        skip: false,
      },
      selectionRanges: {
        otherSelections: [],
        codeBasedSelections: [],
      },
      argumentsToSubmit: {
        arg1: "value",
      },
      machineManager: {
        machines: [],
        machineApiIp: null,
        currentMachine: null,
        setCurrentMachine: "function",
        noMachinesReason: "function",
      },
    },
  ],
  events: [
    { type: "Open" },
    { type: "Close" },
    { type: "Clear" },
    {
      type: "Select command",
      data: {
        command: {
          name: "exampleCommand",
          groupId: "exampleGroup",
          args: {
            arg1: {
              required: true,
              defaultValue: "default",
              inputType: "string",
              options: ["option1", "option2"],
              skip: false,
            },
          },
          onSubmit: "function",
          needsReview: false,
        },
        argDefaultValues: {
          arg1: "default",
        },
      },
    },
    { type: "Deselect command" },
    {
      type: "Submit command",
      output: {
        arg1: "value",
      },
    },
    {
      type: "Add argument",
      data: {
        argument: {
          name: "arg1",
          required: true,
          defaultValue: "default",
          inputType: "string",
          options: ["option1", "option2"],
          skip: false,
        },
      },
    },
    {
      type: "Remove argument",
      data: {
        arg1: {
          name: "arg1",
          required: true,
          defaultValue: "default",
          inputType: "string",
          options: ["option1", "option2"],
          skip: false,
        },
      },
    },
    {
      type: "Edit argument",
      data: {
        arg: {
          name: "arg1",
          required: true,
          defaultValue: "default",
          inputType: "string",
          options: ["option1", "option2"],
          skip: false,
        },
      },
    },
    {
      type: "Add commands",
      data: {
        commands: [
          {
            name: "exampleCommand",
            groupId: "exampleGroup",
            args: {
              arg1: {
                required: true,
                defaultValue: "default",
                inputType: "string",
                options: ["option1", "option2"],
                skip: false,
              },
            },
            onSubmit: "function",
            needsReview: false,
          },
        ],
      },
    },
    {
      type: "Remove commands",
      data: {
        commands: [
          {
            name: "exampleCommand",
            groupId: "exampleGroup",
            args: {
              arg1: {
                required: true,
                defaultValue: "default",
                inputType: "string",
                options: ["option1", "option2"],
                skip: false,
              },
            },
            onSubmit: "function",
            needsReview: false,
          },
        ],
      },
    },
    {
      type: "Submit argument",
      data: {
        arg1: "value",
      },
    },
    {
      type: "xstate.done.actor.validateSingleArgument",
      output: {
        arg1: "value",
      },
    },
    {
      type: "xstate.done.actor.validateArguments",
      output: {
        arg1: "value",
      },
    },
    {
      type: "xstate.error.actor.validateArguments",
      error: {
        message: "Argument payload is of the wrong type",
        arg: {
          name: "arg1",
          required: true,
          defaultValue: "default",
          inputType: "string",
          options: ["option1", "option2"],
          skip: false,
        },
      },
    },
    {
      type: "Find and select command",
      data: {
        name: "exampleCommand",
        groupId: "exampleGroup",
        argDefaultValues: {
          arg1: "default",
        },
      },
    },
    {
      type: "Change current argument",
      data: {
        arg1: {
          name: "arg1",
          required: true,
          defaultValue: "default",
          inputType: "string",
          options: ["option1", "option2"],
          skip: false,
        },
      },
    },
    {
      type: "Set machine manager",
      data: {
        machines: [],
        machineApiIp: null,
        currentMachine: null,
        setCurrentMachine: "function",
        noMachinesReason: "function",
      },
    },
  ],
  id: "Command Bar",
  initial: "Closed",
  states: [
    {
      name: "Closed",
      events: [
        {
          type: "Open",
          target: "Selecting command",
        },
        {
          type: "Find and select command",
          target: "Command selected",
          actions: ["Find and select command", "Initialize arguments to submit"],
        },
        {
          type: "Add commands",
          target: "Closed",
          actions: ["assign"],
        },
        {
          type: "Remove commands",
          target: "Closed",
          actions: ["assign"],
        },
      ],
    },
    {
      name: "Selecting command",
      events: [
        {
          type: "Select command",
          target: "Command selected",
          actions: ["Set selected command", "Initialize arguments to submit"],
        },
      ],
    },
    {
      name: "Command selected",
      always: [
        {
          target: "Closed",
          guard: "Command has no arguments",
          actions: ["Execute command"],
        },
        {
          target: "Checking Arguments",
          guard: "All arguments are skippable",
        },
        {
          target: "Gathering arguments",
          actions: ["Set current argument to first non-skippable"],
        },
      ],
    },
    {
      name: "Gathering arguments",
      initial: "Awaiting input",
      states: [
        {
          name: "Awaiting input",
          events: [
            {
              type: "Submit argument",
              target: "Validating",
            },
          ],
        },
        {
          name: "Validating",
          invoke: {
            src: "Validate argument",
            onDone: {
              target: "#Command Bar.Checking Arguments",
              actions: ["enqueueValidArgsToSubmit"],
            },
            onError: {
              target: "Awaiting input",
            },
          },
        },
      ],
      events: [
        {
          type: "Change current argument",
          target: "Gathering arguments",
          internal: true,
          actions: ["Set current argument"],
        },
        {
          type: "Deselect command",
          target: "Selecting command",
          actions: ["assign"],
        },
      ],
    },
    {
      name: "Review",
      entry: ["Clear current argument"],
      events: [
        {
          type: "Submit command",
          target: "Closed",
          actions: ["Execute command"],
        },
        {
          type: "Add argument",
          target: "Gathering arguments",
          actions: ["Set current argument"],
        },
        {
          type: "Remove argument",
          target: "Review",
          actions: ["Remove argument"],
        },
        {
          type: "Edit argument",
          target: "Gathering arguments",
          actions: ["Set current argument"],
        },
      ],
    },
    {
      name: "Checking Arguments",
      invoke: {
        src: "Validate all arguments",
        onDone: [
          {
            target: "Review",
            guard: "Command needs review",
          },
          {
            target: "Closed",
            actions: "Execute command",
          },
        ],
        onError: {
          target: "Gathering arguments",
          actions: ["Set current argument to first non-skippable"],
        },
      },
    },
  ],
  on: [
    {
      type: "Set machine manager",
      reenter: false,
      actions: "Set machine manager",
    },
    {
      type: "Close",
      target: ".Closed",
    },
    {
      type: "Clear",
      target: "#Command Bar",
      reenter: false,
      actions: ["Clear argument data"],
    },
  ],
}
