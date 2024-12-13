import { AmisMachineContext } from './AmisMachineContext';

export const useAmisMachine: any = () => {

  const actor = AmisMachineContext.useActorRef();
  const state = AmisMachineContext.useSelector((state: any) => state);

  return {
    actor: actor,
    state: state
  }
}
