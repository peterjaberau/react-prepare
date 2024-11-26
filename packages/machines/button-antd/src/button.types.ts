import type { Machine, StateMachine as S } from "@ibrains-design/core"
import type { CommonProperties, DirectionProperty, PropTypes, RequiredBy } from "@ibrains-design/types"

/* -----------------------------------------------------------------------------
 * Callback details
 * -----------------------------------------------------------------------------*/


export type ElementIds = Partial<{
  root: string
  fallback: string
}>

/* -----------------------------------------------------------------------------
 * Machine context
 * -----------------------------------------------------------------------------*/

interface PublicContext extends CommonProperties, DirectionProperty {
  disabled?: boolean | undefined
  text: string
}

interface PrivateContext {
  /**
   * @internal
   * Whether the checkbox fieldset is disabled
   */
  fieldsetDisabled: boolean
}

type ComputedContext = Readonly<{
  /**
   * Whether the switch is disabled
   */
  isDisabled: boolean
}>

export type UserDefinedContext = RequiredBy<PublicContext, "id">

export interface MachineContext extends PublicContext, PrivateContext, ComputedContext {}

export interface MachineState {
  value: "ready"
}

export type State = S.State<MachineContext, MachineState>

export type Send = S.Send<S.AnyEventObject>

export type Service = Machine<MachineContext, MachineState, S.AnyEventObject>

/* -----------------------------------------------------------------------------
 * Component API
 * -----------------------------------------------------------------------------*/

export interface MachineApi<T extends PropTypes = PropTypes> {
  disabled: boolean
  getRootProps(): T["element"]
  getFallbackProps(): T["element"]
}
