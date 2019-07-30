import React, { PropsWithChildren } from "react"
import * as SC from "./styles"

export interface ResourcesSidebarSectionProps {
  readonly title: string
}

export function ResourcesSidebarSection({
  title,
  children,
}: PropsWithChildren<ResourcesSidebarSectionProps>) {
  return (
    <div>
      <SC.SidebarTitle>{title}</SC.SidebarTitle>
      {children}
    </div>
  )
}
