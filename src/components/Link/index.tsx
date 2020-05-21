import React, { FC } from "react"
import * as SC from "./styles"

interface ILinkProps {
  to: string
}

export const Link: FC<ILinkProps> = ({ children, to }) => {
  if (!to.match(/^(https?:\/\/)/)) {
    return <SC.LinkInternal to={to}>{children}</SC.LinkInternal>
  }

  return (
    <SC.LinkExternal rel="noreferrer" href={to} target="_blank">
      {children}
    </SC.LinkExternal>
  )
}
