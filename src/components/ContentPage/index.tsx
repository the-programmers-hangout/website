import React from "react"
import * as SC from "./styles"

export const ContentPage: React.FC = ({ children, ...restProps }) => {
  return (
    <SC.ContentPageWrapper {...restProps}>{children}</SC.ContentPageWrapper>
  )
}
