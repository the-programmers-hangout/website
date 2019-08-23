import { useContext } from "react"
import { ISidebarContextInterface, SidebarContext } from "../SidebarProvider"

export default function useSidebar(): ISidebarContextInterface {
  const sidebarContext = useContext(SidebarContext)

  if (!sidebarContext) {
    throw Error("Need context")
  }

  return sidebarContext
}
