import React, { FC } from "react"
import * as SC from "./styles"

interface IResourcesLinkProps {
  to: string
}

export const ResourcesLink: FC<IResourcesLinkProps> = ({ children, to }) => {
  if (!to.match(/^(https?:\/\/)/)) {
    return (
      <SC.ResourcesLinkInternal to={to}>{children}</SC.ResourcesLinkInternal>
    )
  }

  return (
    <SC.ResourcesLinkExternal href={to} target="_blank">
      {children}
    </SC.ResourcesLinkExternal>
  )
}
