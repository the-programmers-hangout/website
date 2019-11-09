import { useContext } from "react"
import { ILocationContextInterface, LocationContext } from "../LocationProvider"

export default function useLocation(): ILocationContextInterface {
  const locationContext = useContext(LocationContext)

  if (!locationContext) {
    throw Error("Need context")
  }

  return locationContext
}
