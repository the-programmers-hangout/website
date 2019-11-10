import React, { FC } from "react"
import * as SC from "./styles"

interface IColumnLinkProps {
  to: string
}

export const ColumnLink: FC<IColumnLinkProps> = ({ children, to }) => {
  if (!to.match(/^(https?:\/\/)/)) {
    return <SC.ColumnLinkInternal to={to}>{children}</SC.ColumnLinkInternal>
  }

  return (
    <SC.ColumnLinkExternal href={to} target="_blank">
      {children}
    </SC.ColumnLinkExternal>
  )
}
