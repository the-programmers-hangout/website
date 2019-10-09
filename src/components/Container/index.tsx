import React, { FC } from "react"
import * as SC from "./styles"

export const Container: FC = ({ children, ...restProps }) => {
  return <SC.ContainerWrapper {...restProps}>{children}</SC.ContainerWrapper>
}
