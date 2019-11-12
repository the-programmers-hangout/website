import React, { FC } from "react"
import * as SC from "./styles"

export const HomePartner: FC = () => {
  return (
    <SC.HomePartnerWrapper>
      Member of
      <SC.StyledJetBrainsLogo alt="JetBrains" />
      Supported user groups
    </SC.HomePartnerWrapper>
  )
}
