import React, { FC } from "react"
import * as SC from "./styles"

interface IRoleProps {
  color: string
}

export const Role: FC<IRoleProps> = ({ children, color, ...props }) => {
  return (
    <SC.RoleWrapper {...props} color={color}>
      {children}
    </SC.RoleWrapper>
  )
}
