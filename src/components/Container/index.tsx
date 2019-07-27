import React, { PropsWithChildren } from "react"
import * as SC from "./styles"

function Container({
  children,
  ...restProps
}: PropsWithChildren<{}>): JSX.Element {
  return <SC.ContainerWrapper {...restProps}>{children}</SC.ContainerWrapper>
}

export default Container
