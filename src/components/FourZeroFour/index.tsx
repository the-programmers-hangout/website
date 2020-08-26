import React, { FC } from "react"
import * as SC from "./styles"

interface IPossibleCorrections {
  title: string
}

export const FourZeroFour: FC<IPossibleCorrections> = ({ children }) => {
  return (
    <SC.Wrapper>
      <SC.Title>NOT FOUND</SC.Title>
      <SC.Text>
        You just hit a route that doesn&#39;t exist... the sadness.
      </SC.Text>
      {children && <SC.Spacer />}
      {children}
    </SC.Wrapper>
  )
}
