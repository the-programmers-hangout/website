import React, { PropsWithChildren } from "react"
import * as SC from "./styles"

export interface IResourcesSidebarSectionProps {
  readonly title: string
}

export function ResourcesSidebarSection({
  title,
  children,
}: PropsWithChildren<IResourcesSidebarSectionProps>) {
  return (
    <div>
      <SC.SidebarTitle>{title}</SC.SidebarTitle>
      {children}
    </div>
  )
}
