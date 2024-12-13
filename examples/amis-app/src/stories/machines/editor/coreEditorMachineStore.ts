import { CoreEditorMachineContext } from './CoreEditorMachineContext';

export const useCoreEditorMachine: any = () => {

  const actor = CoreEditorMachineContext.useActorRef();
  const state = CoreEditorMachineContext.useSelector((state: any) => state);

  return {
    actor: actor,
    state: state
  }
}
