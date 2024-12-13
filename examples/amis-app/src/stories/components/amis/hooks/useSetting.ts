import { createMachine, assign, setup } from "xstate"
import { useMachine, useSelector } from '@xstate/react';
import { arrayGet } from '../utils/common';

// Define the settings machine
const settingsMachine =
  setup({
      actions: {
          updateSettings: assign({
              settings: (context, event) => event.settings
          })
      }
  }).createMachine({
    id: 'settings',
    initial: 'idle',
    context: {
        settings: {}
    },
    states: {
        idle: {
            on: {
                UPDATE_SETTINGS: {
                    actions: 'updateSettings'
                }
            }
        }
    }
});

// Create the useSetting hook
export const useSetting = () => {
    const [state, send] = useMachine(settingsMachine);

    const settings = useSelector(state, state => state.context.settings);

    const getSetting = (key = '', def = '') => {
        return key ? arrayGet(settings, key, def) : settings;
    };

    return { settings, getSetting, updateSettings: (settings) => send({ type: 'UPDATE_SETTINGS', settings }) };
};

