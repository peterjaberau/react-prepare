import { useCommandsContext } from '@/xstate-drafting/hooks/useCommandsContext.ts'
import { CustomIcon } from '../CustomIcon'
import React, { useState } from 'react'
import { ActionButton } from '../ActionButton'
import { getSelectionTypeDisplayText } from '@/xstate-drafting/utils/selectionUtils.ts'
import { useHotkeys } from 'react-hotkeys-hook'
import { roundOff } from '@/xstate-drafting/utils/misc.ts'

function CommandBarHeader({ children }: React.PropsWithChildren<{}>) {
  const { commandBarState, commandBarSend } = useCommandsContext()
  const {
    context: { selectedCommand, currentArgument, argumentsToSubmit },
  }: any = commandBarState
  const isReviewing = commandBarState.matches('Review')
  const [showShortcuts, setShowShortcuts] = useState(false)

  useHotkeys(
    'alt',
    () => setShowShortcuts(true),
    { enableOnFormTags: true, enableOnContentEditable: true },
    [showShortcuts]
  )
  useHotkeys(
    'alt',
    () => setShowShortcuts(false),
    { keyup: true, enableOnFormTags: true, enableOnContentEditable: true },
    [showShortcuts]
  )
  useHotkeys(
    [
      'alt+1',
      'alt+2',
      'alt+3',
      'alt+4',
      'alt+5',
      'alt+6',
      'alt+7',
      'alt+8',
      'alt+9',
      'alt+0',
    ],
    (_, b) => {
      if (b.keys && !Number.isNaN(parseInt(b.keys[0], 10))) {
        if (!selectedCommand?.args) return
        const argName = Object.keys(selectedCommand.args)[
          parseInt(b.keys[0], 10) - 1
        ]
        const arg = selectedCommand?.args[argName]
        if (!argName || !arg) return
        commandBarSend({
          type: 'Change current argument',
          data: { arg: { ...arg, name: argName } },
        } as any)
      }
    },
    { keyup: true, enableOnFormTags: true, enableOnContentEditable: true },
    [argumentsToSubmit, selectedCommand]
  )

  return (
    selectedCommand &&
    argumentsToSubmit && (
      <>
        <div className="group px-4 text-sm flex gap-4 items-start">
          <div className="flex flex-1 flex-wrap gap-2">
            <p
              data-command-name={selectedCommand?.name}
              className="pr-4 flex gap-2 items-center"
            >
              {selectedCommand &&
                'icon' in selectedCommand &&
                selectedCommand.icon && (
                  <CustomIcon name={selectedCommand.icon} className="w-5 h-5" />
                )}
              <span data-testid="command-name">
                {selectedCommand.displayName || selectedCommand.name}
              </span>
            </p>
            {Object.entries(selectedCommand?.args || {})
              .filter(([_, argConfig]: any) =>
                typeof argConfig.required === 'function'
                  ? argConfig.required(commandBarState.context)
                  : argConfig.required
              )
              .map(([argName, arg]: any, i: any) => {
                const argValue =
                  (typeof argumentsToSubmit[argName] === 'function'
                    ? (argumentsToSubmit[argName] as Function)(
                        commandBarState.context
                      )
                    : argumentsToSubmit[argName]) || ''

                return (
                  <button
                    data-testid="cmd-bar-input-tab"
                    data-is-current-arg={
                      argName === currentArgument?.name ? 'true' : 'false'
                    }
                    disabled={!isReviewing && currentArgument?.name === argName}
                    onClick={() => {
                      commandBarSend({
                        type: isReviewing
                          ? 'Edit argument'
                          : 'Change current argument',
                        data: { arg: { ...arg, name: argName } },
                      } as any)
                    }}
                    key={argName}
                    className={`relative w-fit px-2 py-1 rounded-sm flex gap-2 items-center border ${
                      argName === currentArgument?.name
                        ? 'disabled:bg-primary/10 dark:disabled:bg-primary/20 disabled:border-primary dark:disabled:border-primary disabled:text-chalkboard-100 dark:disabled:text-chalkboard-10'
                        : 'bg-chalkboard-20/50 dark:bg-chalkboard-80/50 border-chalkboard-20 dark:border-chalkboard-80'
                    }`}
                  >
                    <span
                      data-testid={`arg-name-${argName.toLowerCase()}`}
                      data-test-name="arg-name"
                      className="capitalize"
                    >
                      {argName}
                    </span>
                    <span className="sr-only">:&nbsp;</span>
                    <span data-testid="header-arg-value">
                      {argValue ? (
                        arg.inputType === 'selection' ? (
                          getSelectionTypeDisplayText(argValue as any)
                        ) : arg.inputType === 'kcl' ? (
                          roundOff(
                            Number(
                              (argValue as any).valueCalculated
                            ),
                            4
                          )
                        ) : typeof argValue === 'object' ? (
                          arg.valueSummary ? (
                            arg.valueSummary(argValue)
                          ) : (
                            JSON.stringify(argValue)
                          )
                        ) : (
                          <em>
                            {arg.valueSummary
                              ? arg.valueSummary(argValue)
                              : argValue}
                          </em>
                        )
                      ) : null}
                    </span>
                    {showShortcuts && (
                      <small className="absolute -top-[1px] right-full translate-x-1/2 px-0.5 rounded-sm bg-chalkboard-80 text-chalkboard-10 dark:bg-primary dark:text-chalkboard-100">
                        <span className="sr-only">Hotkey: </span>
                        {i + 1}
                      </small>
                    )}
                    {arg.inputType === 'kcl' &&
                      !!argValue &&
                      'variableName' in (argValue as any) && (
                        <>
                          <CustomIcon
                            name="make-variable"
                            className="w-4 h-4"
                          />
                          {/*<Tooltip position="bottom">*/}
                            New variable:{' '}
                            {
                              (
                                argumentsToSubmit[
                                  argName
                                ] as any
                              ).variableName
                            }
                          {/*</Tooltip>*/}
                        </>
                      )}
                  </button>
                )
              })}
          </div>
          {isReviewing ? <ReviewingButton /> : <GatheringArgsButton />}
        </div>
        <div className="block w-full my-2 h-[1px] bg-chalkboard-20 dark:bg-chalkboard-80" />
        {children}
      </>
    )
  )
}

function ReviewingButton() {
  return (
    <ActionButton
      Element="button"
      autoFocus
      type="submit"
      form="review-form"
      className="w-fit !p-0 rounded-sm border !border-primary hover:shadow"
    >
      <span className="sr-only">Submit command</span>
    </ActionButton>
  )
}

function GatheringArgsButton() {
  return (
    <ActionButton
      Element="button"
      type="submit"
      form="arg-form"
      className="w-fit !p-0 rounded-sm border !border-primary hover:shadow"
    >
      <span className="sr-only">Continue</span>
    </ActionButton>
  )
}

export default CommandBarHeader
