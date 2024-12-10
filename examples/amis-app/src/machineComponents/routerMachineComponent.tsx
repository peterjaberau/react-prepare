import PropTypes from "prop-types"
import { useRootMachineState } from "@/machines/useMyMachines.ts"

const Router = ({ children }: any) => {
  const state: any = useRootMachineState((state: any) => state.value)
  const route = state?.authenticated || state?.unauthenticated
  if (route && route !== "unknown") {
    return children(route)
  }
  return null
}

Router.propTypes = {
  children: PropTypes.func.isRequired,
}

export default Router
