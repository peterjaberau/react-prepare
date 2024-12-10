import { createContext } from "react"
import {
  createMachine,
  createActor,
  setup,
  spawnChild,
  sendTo,
  assign,
  fromPromise,
  fromCallback,
  EventObject,
  StateMachine,
} from "xstate"
import { browser } from "globals"

export const isSubmitEvent = (event: any) => event.type === "Submit"

export const handleSubmit = (
  schemaGenerator: (context: any, event: any) => any,
  callback: (context: any, event: any) => void,
) =>
  assign({
    persistent: (context: any, event: any) => (isSubmitEvent(event) ? event.context.persistent : context.persistent),
    volatile: (context: any, event: any) => (isSubmitEvent(event) ? event.context.volatile : context.volatile),
    errors: (context: any, event: any) => {
      if (!isSubmitEvent(event)) {
        throw new Error("Invalid event type. Expected Submit.")
      }
      const validationSpace = {
        ...event.context.volatile,
        ...event.context.persistent,
      }

      const schema = schemaGenerator(context, event)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- wrong types
      const result: any = schema.safeParse(validationSpace)
      if (!result.success) {
        return result.error.issues.reduce(
          (acc: any, issue: any) => {
            acc[issue.path[0]?.toString() ?? ""] = issue.message
            return acc
          },
          <Record<string, string>>{},
        )
      }

      return {}
    },
  })

export type Cancel = {
  type: "Cancel"
  flowId: string
}

export type GoBack = {
  type: "GoBack"
}

export type Submit<TContext extends Context> = {
  type: "Submit"
  context: TContext
}

export const isContext = (context: any) => "data" in context && "persistent" in context && "volatile" in context

export const isValidContext = (context: any) => {
  if (!isContext(context)) {
    throw new Error("Invalid event type. Expected Submit.")
  }
  return Object.keys(context.errors).length == 0
}

const parameters: Record<string, string> = {} as any

export const globalUrlParameters = {
  parseFromUrl: (): void => {
    if (!browser) {
      return
    }
    const url = new URL(window.location.href)
    const params = url.searchParams
    for (const [key, value] of params.entries()) {
      parameters[key] = value
    }
  },
  setParameter: (prefix: string, key: string, value: string): void => {
    parameters[`${prefix}${key}`] = value
  },
  getParameter: (prefix: string, key: string): string | undefined => parameters[`${prefix}${key}`],
  getAllParameters: (prefix: string): Record<string, string> => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const params: Record<string, any> = {}
    for (const key in parameters) {
      if (key.startsWith(prefix)) {
        params[key.substring(prefix.length)] = parameters[key]
      }
    }
    return params
  },
  delete: (prefix: string, key: string): void => {
    if (`${prefix}${key}` in parameters) {
      delete parameters[`${prefix}${key}`]
    }
  },
  toString: (): string => {
    const params = new URLSearchParams()
    for (const key in parameters) {
      const value = parameters[key]
      if (value) {
        params.set(key, value)
      }
    }
    return params.toString()
  },
}

export interface IFlowSnapshot {
  state: any
  persistentContext: Record<string, unknown>
}

export interface IPersistedFlowState {
  readonly instanceId: string
  restore(): any
  store(snapshot: any): void
  delete(): void
  commit(): void
}

export class ScopedUrlParameterList {
  public prefix: string
  public position: string
  constructor(position: string) {
    globalUrlParameters.parseFromUrl()
    this.position = position
    this.prefix = `${position}.`
  }

  private stripPrefix(key: string): string {
    return key.replace(`${this.prefix}`, "")
  }
  setGlobalParam(key: string, value: string | undefined): void {
    if (value === undefined) {
      globalUrlParameters.delete("", key)
      return
    }
    globalUrlParameters.setParameter("", key, value)
  }
  getGlobalParam(key: string): string | undefined {
    return globalUrlParameters.getParameter("", key)
  }
  setParam(key: string, value: string | undefined): void {
    if (value === undefined) {
      globalUrlParameters.delete(this.prefix, key)
      return
    }
    globalUrlParameters.setParameter(this.prefix, key, value)
  }
  getAllParams(): Record<string, string> {
    const params: Record<string, string> = {}

    const allParameters = globalUrlParameters.getAllParameters(this.prefix)
    for (const key in allParameters) {
      const value = allParameters[key]
      if (value === undefined) {
        continue
      }
      params[this.stripPrefix(key)] = value
    }

    return params
  }
  toString(): string {
    const baseUrl = new URL(window.location.href)
    return `${baseUrl.pathname}?${globalUrlParameters.toString()}`
  }
  deleteKey(propertiesKey: string): void {
    globalUrlParameters.delete(this.prefix, propertiesKey)
  }
  deleteGlobalKey(windowId: string): void {
    globalUrlParameters.delete("", windowId)
  }
}

/**
 * Uses the ScopedUrlParameterList as a backend to store the flow state in the URL.
 */
export class UrlPersistedFlowState implements IPersistedFlowState {
  private readonly urlParameters: ScopedUrlParameterList

  constructor(readonly instanceId: string) {
    this.urlParameters = new ScopedUrlParameterList(instanceId)
  }

  restore(): IFlowSnapshot {
    const properties = this.urlParameters.getAllParams()
    const persistentContext = Object.entries(properties).reduce(
      (acc, [key, value]) => {
        acc[key] = JSON.parse(value)
        return acc
      },
      {} as Record<string, unknown>,
    )

    const state = this.urlParameters.getGlobalParam(this.instanceId)
    if (!state) {
      return {
        persistentContext,
        state: undefined,
      }
    }

    return {
      persistentContext,
      state: state ? JSON.parse(state) : undefined,
    }
  }

  delete(): void {
    const snapshot = this.restore()
    for (const propertiesKey in snapshot.persistentContext) {
      this.urlParameters.deleteKey(propertiesKey)
    }
    this.urlParameters.deleteGlobalKey(this.instanceId)
  }

  deleteKey(key: string): void {
    this.urlParameters.deleteKey(key)
  }

  commit(): void {
    const url = this.urlParameters.toString()
    window.history.pushState({}, "", url)
  }

  store(snapshot: IFlowSnapshot): void {
    this.urlParameters.setGlobalParam(this.instanceId, JSON.stringify(snapshot.state))
    Object.keys(snapshot.persistentContext).forEach((key) => {
      this.urlParameters.setParam(key, JSON.stringify(snapshot.persistentContext[key]))
    })
  }
}

export interface WritableContext {
  // persistent values are serialized to the URL on every state change.
  persistent: Record<string, unknown>
  // volatile values are not serialized to the URL.
  volatile: Record<string, unknown>
}

export interface ReadonlyContext {
  data: Record<string, unknown>
  errors: Record<string, string>
}

export interface Context extends WritableContext, ReadonlyContext {}

export type Flow<TContext extends Context, TEvent extends EventObject> = {
  id: string
  stateMachine: any
  pages: StatePageMap<TContext>
}

export type FlowWindowStateTransition<TContext extends Context, TEvent extends EventObject> = {
  final: boolean
  flowId: string
  state: string
  context: TContext
  event: TEvent
}

export type PageApi = {
  submit(): void
  goBack(): void
  cancel(): void
  send(event: EventObject): void
}

export type PropertiesFactory<TContext extends Context> = (
  context: TContext,
  pageApi: PageApi,
) => Record<string, unknown>
export type PropertiesOrFactory<TContext extends Context> = PropertiesFactory<TContext> | Record<string, unknown>
export interface ComplexPageMapEntry<TContext extends Context> {
  component: React.ComponentType
  properties?: PropertiesOrFactory<TContext>
  on?: (context: TContext, pageApi: PageApi, shellApi?: any) => Record<string, (e: CustomEvent<unknown>) => void>
}
export type StatePageMapEntry<TContext extends Context> = ComplexPageMapEntry<TContext> | React.ComponentType

export type StatePageMap<TContext extends Context> = {
  [state: string]: StatePageMapEntry<TContext>
}
