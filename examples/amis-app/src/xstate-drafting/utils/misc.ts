import { v4 } from 'uuid'
import { AnyMachineSnapshot } from 'xstate'
import { AsyncFn } from './types'

export const uuidv4 = v4


export function isArray(val: any): val is unknown[] {
  return Array.isArray(val)
}

export function unsafeTypedKeys<T extends object>(obj: T): Array<keyof T> {
  return Object.keys(obj) as Array<keyof T>
}


export function isNonNullable<T>(val: T): val is NonNullable<T> {
  return val !== null && val !== undefined
}

export function isOverlap(a: any, b: any) {
  const [startingRange, secondRange] = a[0] < b[0] ? [a, b] : [b, a]
  const [lastOfFirst, firstOfSecond] = [startingRange[1], secondRange[0]]
  return lastOfFirst >= firstOfSecond
}

export function getLength(a: [number, number], b: [number, number]): number {
  const x = b[0] - a[0]
  const y = b[1] - a[1]
  return Math.sqrt(x * x + y * y)
}


export function getAngle(a: [number, number], b: [number, number]): number {
  const x = b[0] - a[0]
  const y = b[1] - a[1]
  return normaliseAngle((Math.atan2(y, x) * 180) / Math.PI)
}


export function normaliseAngle(angle: number): number {
  const result = ((angle % 360) + 360) % 360
  return result > 180 ? result - 360 : result
}

export function throttle<T>(
  func: (args: T) => any,
  wait: number
): (args: T) => any {
  let timeout: ReturnType<typeof setTimeout> | null
  let latestArgs: T
  let latestTimestamp: number

  function later() {
    timeout = null
    func(latestArgs)
  }

  function throttled(args: T) {
    const currentTimestamp = Date.now()
    latestArgs = args

    if (!latestTimestamp || currentTimestamp - latestTimestamp >= wait) {
      latestTimestamp = currentTimestamp
      func(latestArgs)
    } else if (!timeout) {
      timeout = setTimeout(later, wait - (currentTimestamp - latestTimestamp))
    }
  }

  return throttled
}


export function deferExecution<T>(func: (args: T) => any, wait: number) {
  let timeout: ReturnType<typeof setTimeout> | null
  let latestArgs: T

  function later() {
    timeout = null
    func(latestArgs)
  }

  function deferred(args: T) {
    latestArgs = args
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, wait)
  }

  return deferred
}


export function toSync<F extends AsyncFn<F>>(
  fn: F,
  onReject: (
    reason: any
  ) => void | PromiseLike<void | null | undefined> | null | undefined
): (...args: Parameters<F>) => void {
  return (...args: Parameters<F>) => {
    fn(...args).catch(onReject)
  }
}

export function getNormalisedCoordinates({
                                           clientX,
                                           clientY,
                                           streamWidth,
                                           streamHeight,
                                           el,
                                         }: {
  clientX: number
  clientY: number
  streamWidth: number
  streamHeight: number
  el: HTMLElement
}) {
  const { left, top, width, height } = el?.getBoundingClientRect()
  const browserX = clientX - left
  const browserY = clientY - top
  return {
    x: Math.round((browserX / width) * streamWidth),
    y: Math.round((browserY / height) * streamHeight),
  }
}


export type Platform = 'macos' | 'windows' | 'linux' | ''

export function isReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&

    window.matchMedia('(prefers-reduced-motion)').matches
  )
}

export function XOR(bool1: boolean, bool2: boolean): boolean {
  return (bool1 || bool2) && !(bool1 && bool2)
}

export function getActorNextEvents(snapshot: AnyMachineSnapshot) {
  return [...new Set([...snapshot._nodes.flatMap((sn) => sn.ownEvents)])]
}

export const onMouseDragRegex = /-?\.?\b\d+\.?\d*\b/g

export function simulateOnMouseDragMatch(text: string) {
  return text.match(onMouseDragRegex)
}

export function roundOff(num: number, precision: number = 2): number {
  const x = Math.pow(10, precision)
  return Math.round(num * x) / x
}


function getPrecision(text: string): number {
  const wholeFractionSplit = text.split('.')
  const precision =
    wholeFractionSplit.length === 2 ? wholeFractionSplit[1].split('').length : 0
  return precision
}


export function hasLeadingZero(text: string): boolean {
  const wholeFractionSplit = text.split('.')
  return wholeFractionSplit.length === 2
    ? wholeFractionSplit[0] === '0' || wholeFractionSplit[0] === '-0'
    : false
}

export function hasDigitsLeftOfDecimal(text: string): boolean | undefined {
  const wholeFractionSplit = text.split('.')

  if (wholeFractionSplit.length === 2) {
    const wholeNumber = wholeFractionSplit[0]

    if (wholeNumber.length === 0) {
      return false
    } else {
      return true
    }
  }

  if (wholeFractionSplit.length === 1) {
    return true
  }


  return undefined
}

export function onDragNumberCalculation(text: string, e: MouseEvent) {
  const multiplier =
    e.shiftKey && e.metaKey ? 0.01 : e.metaKey ? 0.1 : e.shiftKey ? 10 : 1

  const delta = e.movementX * multiplier
  const hasPeriod = text.includes('.')
  const leadsWithZero = hasLeadingZero(text)
  const addition = Number(text) + delta
  const positiveAddition = e.movementX > 0
  const negativeAddition = e.movementX < 0
  const containsDigitsLeftOfDecimal = hasDigitsLeftOfDecimal(text)
  let precision = Math.max(
    getPrecision(text),
    getPrecision(multiplier.toString())
  )
  const newVal = roundOff(addition, precision)

  if (isNaN(newVal)) {
    return
  }

  let formattedString = newVal.toString()
  if (hasPeriod && !formattedString.includes('.')) {


    formattedString = formattedString.toString() + '.0'
  }


  const removeZeros =
    positiveAddition ||
    (negativeAddition && multiplier < 1 && !containsDigitsLeftOfDecimal)


  if (!leadsWithZero && hasLeadingZero(formattedString) && removeZeros) {
    if (formattedString[0] === '-') {
      return ['-', formattedString.split('.')[1]].join('.')
    } else {
      return formattedString.substring(1)
    }
  }

  return formattedString
}

export function onMouseDragMakeANewNumber(
  text: string,
  setText: (t: string) => void,
  e: MouseEvent
) {
  const newVal = onDragNumberCalculation(text, e)
  if (!newVal) return
  setText(newVal)
}
