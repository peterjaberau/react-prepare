import * as React from "react"
import { useRootMachine, useRootMachineState } from "@/machines/useMyMachines.ts"

export const UserDataMachineComponent = () => {
  const userData: any = useRootMachineState((state: any) => state.context.userData)

  return (
    <div>
      <h1>{userData?.username}</h1>
      <h2>{userData?.userId}</h2>
    </div>
  )
}
