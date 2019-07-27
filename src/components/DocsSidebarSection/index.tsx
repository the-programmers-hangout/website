import React from "react"
import * as SC from "./styles"

export interface DocsSidebarSectionProps {
  readonly title: string
}

const DocsSidebarSection = ({
  title,
  children,
}: React.PropsWithChildren<DocsSidebarSectionProps>) => {
  return (
    <div>
      <SC.SidebarTitle>{title}</SC.SidebarTitle>
      {children}
    </div>
  )
}

export default DocsSidebarSection
