import React, { PropsWithChildren } from "react"
import * as SC from "./styles"

export interface DocsSidebarSectionProps {
  readonly title: string
}

export function DocsSidebarSection({
  title,
  children,
}: PropsWithChildren<DocsSidebarSectionProps>) {
  return (
    <div>
      <SC.SidebarTitle>{title}</SC.SidebarTitle>
      {children}
    </div>
  )
}
