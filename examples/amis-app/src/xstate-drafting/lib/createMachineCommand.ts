import {
  AnyStateMachine,
  ContextFrom,
  EventFrom,
  Actor,
  StateFrom,
} from 'xstate'



// Creates a command with subcommands, ready for use in the CommandBar component,
// from a more terse Command Bar Meta definition.
export function createMachineCommand({
  groupId,
  type,
  state,
  send,
  actor,
  commandBarConfig,
  onCancel,
}: any):
  any {
  const commandConfig = commandBarConfig && commandBarConfig[type]

  // There may be no command config for this event type,
  // or the command may be inactive or hidden,
  // or there may be multiple commands to create.
  if (!commandConfig) {
    return null
  } else if (commandConfig instanceof Array) {
    return commandConfig
      .map((config) => {
        const recursiveCommandBarConfig: Partial<any> = {
          [type]: config,
        }
        return createMachineCommand({
          groupId,
          type,
          state,
          send,
          actor,
          commandBarConfig: recursiveCommandBarConfig,
          onCancel,
        })
      })
      .filter((c) => c !== null) as any[]
  }

  // Hide commands based on platform or development status by returning `null`
  // so the consumer can filter them out
  if ('hide' in commandConfig) {
    const { hide } = commandConfig
    if (hide === 'both') return null
  } else if ('status' in commandConfig) {
    const { status } = commandConfig
    if (status === 'inactive') return null
  }

  const icon = ('icon' in commandConfig && commandConfig.icon) || undefined

  const command: any = {
    name: type,
    groupId,
    icon,
    description: commandConfig.description,
    needsReview: commandConfig.needsReview || false,
    onSubmit: (data?: any[]) => {
      if (data !== undefined && data !== null) {
        send({ type, data })
      } else {
        send({ type })
      }
    },
  }

  if (commandConfig.args) {
    const newArgs = buildCommandArguments(state, commandConfig.args, actor)

    command.args = newArgs
  }

  if (onCancel) {
    command.onCancel = onCancel
  }

  if ('displayName' in commandConfig) {
    command.displayName = commandConfig.displayName
  }
  if ('reviewMessage' in commandConfig) {
    command.reviewMessage = commandConfig.reviewMessage
  }

  return command
}

// Takes the args from a CommandConfig and creates
// a finalized CommandArgument object for each one,
// bundled together into the args for a Command.
function buildCommandArguments(
  state: StateFrom<any>,
  args: any,
  machineActor: Actor<any>
): NonNullable<any> {
  const newArgs = {} as NonNullable<any>

  for (const arg in args) {
    const argConfig = args[arg] as any
    const newArg = buildCommandArgument(argConfig, state.context, machineActor)
    newArgs[arg] = newArg
  }

  return newArgs
}

export function buildCommandArgument(
  arg: any,
  context: ContextFrom<any>,
  machineActor: Actor<any>
): any & { inputType: typeof arg.inputType } {
  const baseCommandArgument = {
    description: arg.description,
    required: arg.required,
    skip: arg.skip,
    machineActor,
    valueSummary: arg.valueSummary,
    warningMessage: arg.warningMessage ?? '',
  } satisfies Omit<any, 'inputType'>

  if (arg.inputType === 'options') {
    return {
      inputType: arg.inputType,
      ...baseCommandArgument,
      defaultValue: arg.defaultValueFromContext
        ? arg.defaultValueFromContext(context)
        : arg.defaultValue,
      options: arg.optionsFromContext
        ? arg.optionsFromContext(context)
        : arg.options,
    } satisfies any & { inputType: 'options' }
  } else if (arg.inputType === 'selection') {
    return {
      inputType: arg.inputType,
      ...baseCommandArgument,
      multiple: arg.multiple,
      selectionTypes: arg.selectionTypes,
    } satisfies any & { inputType: 'selection' }
  } else if (arg.inputType === 'kcl') {
    return {
      inputType: arg.inputType,
      defaultValue: arg.defaultValue,
      ...baseCommandArgument,
    } satisfies any & { inputType: 'kcl' }
  } else {
    return {
      inputType: arg.inputType,
      defaultValue: arg.defaultValueFromContext
        ? arg.defaultValueFromContext(context)
        : arg.defaultValue,
      ...baseCommandArgument,
    }
  }
}
