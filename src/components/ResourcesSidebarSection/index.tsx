import React, { FC } from "react"
import * as SC from "./styles"

export interface IResourcesSidebarSectionProps {
  readonly title: string
}

export const ResourcesSidebarSection: FC<IResourcesSidebarSectionProps> = ({
  title,
  children,
}) => {
  return (
    <div>
      <SC.SidebarTitle>{title}</SC.SidebarTitle>
      {children}
    </div>
  )
}
