import React from 'react';
import { useMachine } from '@xstate/react';
import { commandBarMachine } from "./commandBarMachine"
import { AnyMachineSnapshot } from "xstate"
import { SpaceBetween, Button } from "@cloudscape-design/components"

function getNextEvents(snapshot: AnyMachineSnapshot) {
  return [...new Set([...snapshot._nodes.flatMap((sn) => sn.ownEvents)])];
}


export const CommandBarApp = () => {
  const [state, send] = useMachine(commandBarMachine);
  const nextEvents = getNextEvents(state);

  return (
    <div className="App p-4 space-y-4">

      <SpaceBetween alignItems="center" size="xs" direction="horizontal">
        {
          nextEvents.map((event) => (
            <Button onClick={() => send({ type: event })} key={event}>{event}</Button>
          ))
        }
      </SpaceBetween>



      <div className="font-bold text-lg">
        Current State: {JSON.stringify(state.value)}
      </div>

      {state.matches('Closed') && (
        <div className="flex space-x-2">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => send({ type: 'Open' })}
          >
            Open Command Bar
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded"
            onClick={() => send({ type: 'Find and select command' })}
          >
            Find and Select Command
          </button>
        </div>
      )}

      {state.matches('Selecting command') && (
        <div className="flex space-x-2">
          <button
            className="bg-yellow-500 text-white py-2 px-4 rounded"
            onClick={() => send({ type: 'Select command', data: { command: 'command' } })}
          >
            Select Command
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded"
            onClick={() => send({ type: 'Close' })}
          >
            Cancel
          </button>
        </div>
      )}

      {state.matches('Gathering arguments') && (
        <div className="space-y-2">
          <div>Enter Arguments:</div>
          <button
            className="bg-purple-500 text-white py-2 px-4 rounded"
            onClick={() => send({ type: 'Submit argument' })}
          >
            Submit Argument
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded"
            onClick={() => send({ type: 'Deselect command' })}
          >
            Deselect Command
          </button>
        </div>
      )}

      {state.matches('Review') && (
        <div className="space-y-2">
          <div>Review Args or Submit:</div>
          <button
            className="bg-indigo-500 text-white py-2 px-4 rounded"
            onClick={() => send({ type: 'Submit command' })}
          >
            Submit Command
          </button>
          <button
            className="bg-teal-500 text-white py-2 px-4 rounded"
            onClick={() => send({ type: 'Add argument' })}
          >
            Add Argument
          </button>
          <button
            className="bg-orange-500 text-white py-2 px-4 rounded"
            onClick={() => send({ type: 'Edit argument' })}
          >
            Edit Argument
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded"
            onClick={() => send({ type: 'Remove argument' })}
          >
            Remove Argument
          </button>
        </div>
      )}
    </div>
  );
}
