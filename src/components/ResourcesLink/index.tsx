import React, { PropsWithChildren } from "react"
import * as SC from "./styles"

export function ResourcesLink({
  children,
  to,
}: PropsWithChildren<{
  to: string
}>) {
  return <SC.ResourcesLinkWrapper to={to}>{children}</SC.ResourcesLinkWrapper>
}
