import { createMachine, assign, fromPromise, setup, AnyMachineSnapshot } from "xstate"
import { Ok } from "ts-results"
import { config } from "./commandBarConfigs.ts"

export function getCommandArgumentKclValuesOnly(args: Record<string, unknown>) {
  return Object.fromEntries(
    Object.entries(args).map(([key, value]) => {
      if (value !== null && typeof value === 'object' && 'value' in value) {
        return [key, value.value]
      }
      return [key, value]
    })
  )
}

export type CommandBarContext = {
  commands: any[]
  selectedCommand?: any
  currentArgument?: any & { name: string }
  selectionRanges: any
  argumentsToSubmit: any
  machineManager: any
}



export const commandBarMachine = setup({
  types: {
    context: {} as CommandBarContext | any,
    events: {} as any,
  },
  actions: {
    enqueueValidArgsToSubmit: assign({
      argumentsToSubmit: ({ context, event }) => {
        if (event.type !== 'xstate.done.actor.validateSingleArgument') return {}
        const [argName, argData] = Object.entries(event.output)[0]
        const { currentArgument } = context
        if (!currentArgument) return {}
        return {
          ...context.argumentsToSubmit,
          [argName]: argData,
        }
      },
    }),
    'Set machine manager': assign({
      machineManager: ({ event, context }) => {
        if (event.type !== 'Set machine manager') return context.machineManager
        return event.data
      },
    }),
    'Execute command': ({ context, event }) => {
      const { selectedCommand } = context
      if (!selectedCommand) return
      if (
        (selectedCommand?.args && event.type === 'Submit command') ||
        event.type === 'xstate.done.actor.validateArguments'
      ) {
        const resolvedArgs = {} as { [x: string]: unknown }
        for (const [argName, argValue] of Object.entries(
          getCommandArgumentKclValuesOnly(event.output)
        )) {
          resolvedArgs[argName] =
            typeof argValue === 'function' ? argValue(context) : argValue
        }
        selectedCommand?.onSubmit(resolvedArgs)
      } else {
        selectedCommand?.onSubmit()
      }
    },
    'Set current argument to first non-skippable': assign({
      currentArgument: ({ context, event }) => {
        const { selectedCommand } = context
        if (!(selectedCommand && selectedCommand.args)) return undefined
        const rejectedArg =
          'data' in event && 'arg' in event.data && event.data.arg

        // Find the first argument that is not to be skipped:
        // that is, the first argument that is not already in the argumentsToSubmit
        // or that is not undefined, or that is not marked as "skippable".
        // TODO validate the type of the existing arguments
        let argIndex = 0

        while (argIndex < Object.keys(selectedCommand.args).length) {
          const [argName, argConfig]: any = Object.entries(selectedCommand.args)[
            argIndex
            ]
          const argIsRequired =
            typeof argConfig.required === 'function'
              ? argConfig.required(context)
              : argConfig.required
          const mustNotSkipArg =
            argIsRequired &&
            (!context.argumentsToSubmit.hasOwnProperty(argName) ||
              context.argumentsToSubmit[argName] === undefined ||
              (rejectedArg &&
                typeof rejectedArg === 'object' &&
                'name' in rejectedArg &&
                rejectedArg.name === argName))

          if (
            mustNotSkipArg === true ||
            argIndex + 1 === Object.keys(selectedCommand.args).length
          ) {
            // If we have reached the end of the arguments and none are skippable,
            // return the last argument.
            return {
              ...selectedCommand.args[argName],
              name: argName,
            }
          }
          argIndex++
        }

        // TODO: use an XState service to continue onto review step
        // if all arguments are skippable and contain values.
        return undefined
      },
    }),
    'Clear current argument': assign({
      currentArgument: undefined,
    }),
    'Remove argument': assign({
      argumentsToSubmit: ({ context, event }) => {
        if (event.type !== 'Remove argument') return context.argumentsToSubmit
        const argToRemove: any = Object.values(event.data)[0]
        // Extract all but the argument to remove and return it
        const { [argToRemove.name]: _, ...rest } = context.argumentsToSubmit
        return rest
      },
    }),
    'Set current argument': assign({
      currentArgument: ({ context, event }: any) => {
        switch (event.type) {
          case 'Edit argument':
            return event.data.arg
          case 'Change current argument':
            return Object.values(event.data)[0]
          default:
            return context.currentArgument
        }
      },
    }),
    'Clear argument data': assign({
      selectedCommand: undefined,
      currentArgument: undefined,
      argumentsToSubmit: {},
    }),
    'Set selected command': assign({
      selectedCommand: ({ context, event }: any) => {

        console.log('event', event)

        return  event.type === 'Select command'
          ? event.data.command
          : context.selectedCommand
      }

    }),
    'Find and select command': assign({
      selectedCommand: ({ context, event }: any) => {
        if (event.type !== 'Find and select command')
          return context.selectedCommand
        const found = context.commands.find(
          (cmd: any) =>
            cmd.name === event.data.name && cmd.groupId === event.data.groupId
        )

        return !!found ? found : context.selectedCommand
      },
    }),
    'Initialize arguments to submit': assign({
      argumentsToSubmit: ({ context, event }: any) => {
        if (
          event.type !== 'Select command' &&
          event.type !== 'Find and select command'
        )
          return {}
        const command =
          'data' in event && 'command' in event.data
            ? event.data.command
            : context.selectedCommand
        if (!command?.args) return {}
        const args: any = {} as any
        for (const [argName, arg] of Object.entries(command.args)) {
          args[argName] =
            event.data.argDefaultValues &&
            argName in event.data.argDefaultValues
              ? event.data.argDefaultValues[argName]
              : (arg as any).skip && 'defaultValue' in (arg as any)
                ? (arg as any).defaultValue
                : undefined
        }
        return args
      },
    }),
  },
  guards: {
    'Command needs review': ({ context }) =>
      context.selectedCommand?.needsReview || false,
    'Command has no arguments': () => false,
    'All arguments are skippable': () => false,
  },
  actors: {
    'Validate argument': fromPromise(({ input }) => {
      return new Promise((resolve, reject) => {
        // TODO: figure out if we should validate argument data here or in the form itself,
        // and if we should support people configuring a argument's validation function

        resolve(input)
      })
    }),
    'Validate all arguments': fromPromise(
      ({ input }: { input: CommandBarContext }) => {
        return new Promise((resolve, reject) => {
          for (const [argName, argConfig] of Object.entries(
            input.selectedCommand!.args!
          )) {
            let arg = input.argumentsToSubmit[argName]
            let argValue = typeof arg === 'function' ? arg(input) : arg

            try {
              const isRequired =
                typeof (argConfig as any).required === 'function'
                  ? (argConfig as any).required(input)
                  : (argConfig as any).required

              const resolvedDefaultValue =
                'defaultValue' in (argConfig as any)
                  ? typeof (argConfig as any).defaultValue === 'function'
                    ? (argConfig as any).defaultValue(input)
                    : (argConfig as any).defaultValue
                  : undefined

              const hasMismatchedDefaultValueType =
                isRequired &&
                resolvedDefaultValue !== undefined &&
                typeof argValue !== typeof resolvedDefaultValue &&
                !((argConfig as any).inputType === 'kcl' || (argConfig as any).skip)
              const hasInvalidKclValue =
                (argConfig as any).inputType === 'kcl' &&
                !(argValue as Partial<any> | undefined)?.valueAst
              const hasInvalidOptionsValue =
                isRequired &&
                'options' in (argConfig as any) &&
                !(
                  typeof (argConfig as any).options === 'function'
                    ? (argConfig as any).options(
                      input,
                      (argConfig as any).machineActor?.getSnapshot().context
                    )
                    : (argConfig as any).options
                ).some((o: any) => o.value === argValue)

              if (
                hasMismatchedDefaultValueType ||
                hasInvalidKclValue ||
                hasInvalidOptionsValue
              ) {
                return reject({
                  message: 'Argument payload is of the wrong type',
                  arg: {
                    ...(argConfig as any),
                    name: argName,
                  },
                })
              }

              if (
                ((argConfig as any).inputType !== 'boolean' &&
                (argConfig as any).inputType !== 'options'
                  ? !argValue
                  : argValue === undefined) &&
                isRequired
              ) {
                return reject({
                  message: 'Argument payload is falsy but is required',
                  arg: {
                    ...(argConfig as any),
                    name: argName,
                  },
                })
              }
            } catch (e) {
              console.error('Error validating argument', e)
              return reject(e)
            }
          }

          return resolve(input.argumentsToSubmit)
        })
      }
    ),
  },
}).createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QGED2BbdBDAdhABAEJYBOAxMgDaqxgDaADALqKgAONAlgC6eo6sQAD0QBaAJwA6AGwAmAKwBmBoukAWafIAcDcSoA0IAJ6JZDaZIDs8hgzV6AjA61a1DWQF8PhtJlwFiciowUkYWJBAOWB4+AQiRBFF5CwdpcVkHS1lpVyU5QxNEh1lFGTUsrUUtOQd5SwZLLx8MbDwiUkkqGkgyAHk2MBwwwSiY-kEEswZJbPltM0U3eXLZAsRFeQcrerUHRbTFvfkmkF9WgI6u2ggyADFONv98WkowAGNufDeW-2GI0d443iiHESkktUUilkskqdiUWjWCAcDC0kjUqnElkc6lkoK0JzOT0CnWo1zIAEEIARvn48LA-uwuIC4qAEqIHJjJPJcYtxFoYdJFFjVsZEG5pqCquJxJoGvJxOUCT82sSrj0AEpgdCoABuYC+yog9OYIyZsQmYmhWzMmTqLnU0kyikRGVRbj5lg2SmUam5StpFxIkgAymBXh8HlADQGyKHw58aecGZEzUDWYgchY7CisWoSlpQQ5EVDLJJxKkdIpyypUop-ed2kHCW0Xu9uD1kwDzcCEJCtlUNgWhZZ1OlnaKEBpZJItHVzDZ5xlpPWiZdDc8w22O7JwozosyLUj3KiZZY85YtMUNgx5Ii81JuS5xBtPVCCyuVR0AOJYbgACzAEhI3wUgoAAV3QQZuFgCg-1wGAvjAkgSCgkCSHAyCcG4TtUxZYRED2TQZGSOw80qaQ7ARCc9mmZYSjPPFpDSQUP0DSQf3-QDgNAiCoJggAROBNw+aMkxNf5cMPHJSjPWRdhvZ9LGcF0b0kVQ8ycDRNkvNRWMbdjfwAoCcCjHjMOgyRyQAdywGITPwB42DA7hYzAgAjdAeDQjCoJw-du3TJE6mnWwoT0NIUTUAs71sMtdGsRYCyUtI9OJDijO49DeKw2BJAANSwShOAgX9IzICB+DASQHh1VAAGsqp1Qrit-MBySy8y-LGPCElSeoy2lZJcwcNRfXHQpBWmWQsRsPYdDPZJUu-QyuPssy+Py5qSt4EyyEAkhUCDNhKF-AAzQ70EkJqiu2tqOt88S926w9UhhLlykWXFHXcTJixsd60hHGxNj2Jag01HVODAKzXI8rzE1+R6U38tN8IQJSuR0OZ0gvHQXHGxBPWmUdppUWwFV0MHJAhqGYcpAh1qwrqDx7ZFajUmVpulEbqlqREsfBTQ0jcPM5P5KmaehshNW1PVvOy7Cka7VHeoYDkyjSPQtAvPMqkRQU1BnX1+UydFkQvCWwEhqWAFEIC8xnFd3ZHntZuTDZG4ob1nGxPTUfXrBnS8nDmEpT2ObxTnXVUALeOrgPanycvKyrqpwWqGqurbWsThXjWd5WesQZYtmBkplCceplIncK0SrXYqnccxxcj5s2OQWP4-s3PzJgiqcCqmr6sa7P2x7vi6AcAvJJ7XEy0dUFMWsFxlnKfn+S5CL3E9Jiuapjv3i7qNx+T-bDskY6zourObpz+6cuZgK0Y5Ua0TqEvXDkJR-YnR0s1xjkIMnDln3uuVsHwOxT1NCjIuR5nCSBUExJi1huRqyooUTYpYnzeyUFkKsy4Tg4FQBAOAgg26Nmga7QKohshSBtNYXGDonQumtPYaQfsSjLBHDefepJICUJZtQ4oMx8wXj6jebGt4JwbC2OiVwig9hh2hLpVu0cOhxjbMBBGeABFPwSA3ERRMlhKWCn9WRVQzZQirMo0BAYNzxn4RJGBh5MRbGXsHawGQFBmLrpUasOQorOAjs0OxaUVrGVMvfaCuiVYEV2KWTYg1yxyA0i6ZYaIPSL3lOkS8wSo6hOWpxCJ8te6WRsnZKMjlnIxNgSNIiiTF6vVSdI9JM1taXlxLzTwqiClBnSqtSJScLIFVvjtKANSXquENqoJwtgyZzRFIUQ4MhqgNACdNTQCpLbWyshMnsjpSwjXRJYHecgcmImsLIz0odNAaGqPiHpDYY6HwTlE+ATiqHPwohYewWQshmGhHrCcJz5Bck5toZwGhMheC8EAA */
  context: {
    commands: config.commandsCommandBarConfigArray,
    selectedCommand: undefined,
    currentArgument: undefined,
    selectionRanges: {
      otherSelections: [],
      codeBasedSelections: [],
    },
    argumentsToSubmit: {},
    machineManager: {
      machines: [],
      machineApiIp: null,
      currentMachine: null,
      setCurrentMachine: () => {},
      noMachinesReason: () => undefined,
    },
  },
  id: 'Command Bar',
  initial: 'Closed',
  states: {
    Closed: {
      on: {
        Open: {
          target: 'Selecting command',
        },

        'Find and select command': {
          target: 'Command selected',
          actions: [
            'Find and select command',
            'Initialize arguments to submit',
          ],
        },

        'Add commands': {
          target: 'Closed',

          actions: [
            assign({
              commands: ({ context, event }) =>
                [...context.commands, ...event.data.commands].sort(
                  sortCommands
                ),
            }),
          ],

          reenter: false,
        },

        'Remove commands': {
          target: 'Closed',

          actions: [
            assign({
              commands: ({ context, event }) =>
                context.commands.filter(
                  (c: any) =>
                    !event.data.commands.some(
                      (c2: any) => c2.name === c.name && c2.groupId === c.groupId
                    )
                ),
            }),
          ],

          reenter: false,
        },
      },
    },

    'Selecting command': {
      on: {
        'Select command': {
          target: 'Command selected',
          actions: ['Set selected command', 'Initialize arguments to submit'],
        },
      },
    },

    'Command selected': {
      always: [
        {
          target: 'Closed',
          guard: 'Command has no arguments',
          actions: ['Execute command'],
        },
        {
          target: 'Checking Arguments',
          guard: 'All arguments are skippable',
        },
        {
          target: 'Gathering arguments',
          actions: ['Set current argument to first non-skippable'],
        },
      ],
    },

    'Gathering arguments': {
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
            src: 'Validate argument',
            id: 'validateSingleArgument',
            input: ({ event }) => {
              if (event.type !== 'Submit argument') return {}
              return event.data
            },
            onDone: {
              target: '#Command Bar.Checking Arguments',
              actions: ['enqueueValidArgsToSubmit'],
            },
            onError: [
              {
                target: 'Awaiting input',
              },
            ],
          },
        },
      },

      initial: 'Awaiting input',

      on: {
        'Change current argument': {
          target: 'Gathering arguments',
          internal: true,
          actions: ['Set current argument'],
        },

        'Deselect command': {
          target: 'Selecting command',
          actions: [
            assign({
              selectedCommand: (_c, _e) => undefined,
            }),
          ],
        },
      },
    },

    Review: {
      entry: ['Clear current argument'],
      on: {
        'Submit command': {
          target: 'Closed',
          actions: ['Execute command'],
        },

        'Add argument': {
          target: 'Gathering arguments',
          actions: ['Set current argument'],
        },

        'Remove argument': {
          target: 'Review',
          actions: ['Remove argument'],
        },

        'Edit argument': {
          target: 'Gathering arguments',
          actions: ['Set current argument'],
        },
      },
    },

    'Checking Arguments': {
      invoke: {
        src: 'Validate all arguments',
        id: 'validateArguments',
        input: ({ context }) => context,
        onDone: [
          {
            target: 'Review',
            guard: 'Command needs review',
          },
          {
            target: 'Closed',
            actions: 'Execute command',
          },
        ],
        onError: [
          {
            target: 'Gathering arguments',
            actions: ['Set current argument to first non-skippable'],
          },
        ],
      },
    },
  },
  on: {
    'Set machine manager': {
      reenter: false,
      actions: 'Set machine manager',
    },

    Close: {
      target: '.Closed',
    },

    Clear: {
      target: '#Command Bar',
      reenter: false,
      actions: ['Clear argument data'],
    },
  },
})

function sortCommands(a: any, b: any) {
  if (b.groupId === 'auth' && !(a.groupId === 'auth')) return -2
  if (a.groupId === 'auth' && !(b.groupId === 'auth')) return 2
  if (b.groupId === 'settings' && !(a.groupId === 'settings')) return -1
  if (a.groupId === 'settings' && !(b.groupId === 'settings')) return 1
  return a.name.localeCompare(b.name)
}
