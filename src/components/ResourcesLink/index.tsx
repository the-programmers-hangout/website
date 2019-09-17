import React, { PropsWithChildren } from "react"
import * as SC from "./styles"

export function ResourcesLink({
  children,
  to,
}: PropsWithChildren<{
  to: string
}>) {
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
