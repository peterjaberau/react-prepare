import { useSelector } from '@xstate/react'
import { useCommandsContext } from '@/xstate-drafting/hooks/useCommandsContext'
import {
  canSubmitSelectionArg,
  getSelectionCountByType,
  getSelectionTypeDisplayText,
} from '@/xstate-drafting/utils/selectionUtils.ts'
// import { kclManager } from 'lib/singletons'
import { reportRejection } from '@/xstate-drafting/utils/trap'
import { toSync } from '@/xstate-drafting/utils/misc.ts'
// import { modelingMachine } from '@/xstate-drafting/machines/modelingMachine'
import { useEffect, useMemo, useRef, useState } from 'react'
import { StateFrom } from 'xstate'

const semanticEntityNames: {
  [key: string]: Array<any | 'defaultPlane'>
} = {
  face: ['wall', 'cap', 'solid2D'],
  edge: ['segment', 'sweepEdge', 'edgeCutEdge'],
  point: [],
  plane: ['defaultPlane'],
}

function getSemanticSelectionType(selectionType: Array<any>) {
  const semanticSelectionType = new Set()
  selectionType.forEach((type) => {
    Object.entries(semanticEntityNames).forEach(([entity, entityTypes]) => {
      if (entityTypes.includes(type)) {
        semanticSelectionType.add(entity)
      }
    })
  })

  return Array.from(semanticSelectionType)
}

const selectionSelector: any = (snapshot?: StateFrom<any>) =>
  snapshot?.context.selectionRanges

function CommandBarSelectionInput({
  arg,
  stepBack,
  onSubmit,
}: {
  arg: any & { inputType: 'selection'; name: string }
  stepBack: () => void
  onSubmit: (data: unknown) => void
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const { commandBarState, commandBarSend } = useCommandsContext()
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const selection: any = useSelector(arg.machineActor, selectionSelector)
  const selectionsByType = useMemo(() => {
    return getSelectionCountByType(selection)
  }, [selection])
  const canSubmitSelection = useMemo<boolean>(
    () => canSubmitSelectionArg(selectionsByType, arg),
    [selectionsByType]
  )

  useEffect(() => {
    inputRef.current?.focus()
  }, [selection, inputRef])

  // Show the default planes if the selection type is 'plane'
  // useEffect(() => {
  //   if (arg.selectionTypes.includes('plane') && !canSubmitSelection) {
  //     toSync(() => {
  //       return Promise.all([
  //         kclManager.showPlanes(),
  //         kclManager.setSelectionFilter(['plane', 'object']),
  //       ])
  //     }, reportRejection)()
  //   }
  //
  //   return () => {
  //     toSync(() => {
  //       const promises = [
  //         new Promise(() => kclManager.defaultSelectionFilter()),
  //       ]
  //       if (!kclManager._isAstEmpty(kclManager.ast)) {
  //         promises.push(kclManager.hidePlanes())
  //       }
  //       return Promise.all(promises)
  //     }, reportRejection)()
  //   }
  // }, [])

  // Fast-forward through this arg if it's marked as skippable
  // and we have a valid selection already
  useEffect(() => {
    const argValue = commandBarState.context.argumentsToSubmit[arg.name]
    if (canSubmitSelection && arg.skip && argValue === undefined) {
      handleSubmit()
    }
  }, [canSubmitSelection])

  function handleChange() {
    inputRef.current?.focus()
  }

  function handleSubmit(e?: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault()

    if (!canSubmitSelection) {
      setHasSubmitted(true)
      return
    }

    onSubmit(selection)
  }

  return (
    <form id="arg-form" onSubmit={handleSubmit}>
      <label
        className={
          'relative flex flex-col mx-4 my-4 ' +
          (!hasSubmitted || canSubmitSelection || 'text-destroy-50')
        }
      >
        {canSubmitSelection
          ? getSelectionTypeDisplayText(selection) + ' selected'
          : `Please select ${
              arg.multiple ? 'one or more ' : 'one '
            }${getSemanticSelectionType(arg.selectionTypes).join(' or ')}`}
        {arg.warningMessage && (
          <p className="text-warn-80 bg-warn-10 px-2 py-1 rounded-sm mt-3 mr-2 -mb-2 w-full text-sm cursor-default">
            {arg.warningMessage}
          </p>
        )}
        <span data-testid="cmd-bar-arg-name" className="sr-only">
          {arg.name}
        </span>
        <input
          id="selection"
          name="selection"
          ref={inputRef}
          required
          data-testid="cmd-bar-arg-value"
          placeholder="Select an entity with your mouse"
          className="absolute inset-0 w-full h-full opacity-0 cursor-default"
          onKeyDown={(event) => {
            if (event.key === 'Backspace') {
              stepBack()
            } else if (event.key === 'Escape') {
              commandBarSend({ type: 'Close' })
            }
          }}
          onChange={handleChange}
          value={JSON.stringify(selection || {})}
        />
      </label>
    </form>
  )
}

export default CommandBarSelectionInput
