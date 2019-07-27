import React, { PropsWithChildren } from "react"
import * as SC from "./styles"

const Container = ({
  children,
  ...restProps
}: PropsWithChildren<{}>): JSX.Element => (
  <SC.ContainerWrapper {...restProps}>{children}</SC.ContainerWrapper>
)

export default Container
