import toast from "react-hot-toast"

function isErr<T>(value: any | Error): value is Error {
  return value instanceof Error
}

export function err<T>(value: any | Error): value is Error {
  if (!isErr(value)) {
    return false
  }

  // TODO: Remove this once we have a lint to prevent misuse of this function.
  console.error(value)

  return true
}

export function cleanErrs<T>(value: Array<any | Error>): [boolean, Array<any>, Array<Error>] {
  const argsWOutErr: Array<any> = []
  const argsWErr: Array<Error> = []
  for (const v of value) {
    if (isErr(v)) {
      argsWErr.push(v)
    } else {
      argsWOutErr.push(v)
    }
  }
  return [argsWOutErr.length !== value.length, argsWOutErr, argsWErr]
}

export function report(message: string, { showToast }: { showToast: boolean } = { showToast: false }) {
  console.error(message)
  if (showToast) {
    toast.error(message, { id: "error" })
  }
}

export function reportRejection(reason: any) {
  report((reason ?? "Unknown promise rejection").toString())
}

export function trap<T>(
  value: any | Error,
  opts?: {
    altErr?: Error
    suppress?: boolean
  },
): value is Error {
  if (!isErr(value)) {
    return false
  }

  console.error(value)
  opts?.suppress ||
    toast.error((opts?.altErr ?? value ?? new Error("Unknown")).toString(), {
      id: "error",
    })
  return true
}
