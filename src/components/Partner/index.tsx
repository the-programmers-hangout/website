import React, { FC } from "react"
import * as SC from "./styles"

export const Partner: FC = () => {
  return (
    <SC.PartnerWrapper>
      Member of
      <SC.StyledJetBrainsLogo alt="JetBrains" />
      Supported user groups
    </SC.PartnerWrapper>
  )
}
