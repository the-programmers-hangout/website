import { useContext } from "react"
import { SidebarContext, SidebarContextInterface } from "../SidebarProvider"

export default function useSidebar(): SidebarContextInterface {
  const sidebarContext = useContext(SidebarContext)

  if (!sidebarContext) {
    throw Error("Need context")
  }

  return sidebarContext
}
