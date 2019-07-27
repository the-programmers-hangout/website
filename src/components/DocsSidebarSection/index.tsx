import React from "react"
import { SidebarTitle } from "./style"

export interface DocsSidebarSectionProps {
  readonly title: string
}

const DocsSidebarSection = ({
  title,
  children,
}: React.PropsWithChildren<DocsSidebarSectionProps>) => {
  return (
    <div>
      <SidebarTitle>{title}</SidebarTitle>
      {children}
    </div>
  )
}

export default DocsSidebarSection
