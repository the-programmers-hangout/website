import React, { FC } from "react"
import * as SC from "./styles"

interface ILinkProps {
  to: string
}

export const Link: FC<ILinkProps> = ({ children, to, ...props }) => {
  if (!to.match(/^(https?:\/\/)/)) {
    return (
      <SC.LinkInternal {...props} to={to}>
        {children}
      </SC.LinkInternal>
    )
  }

  return (
    <SC.LinkExternal {...props} rel="noreferrer" href={to} target="_blank">
      {children}
    </SC.LinkExternal>
  )
}
