import React, { FC } from "react"
import * as SC from "./styles"

export const HomePartner: FC = () => {
  return (
    <SC.HomePartnerWrapper>
      Member of
      <SC.JetBrainsLogoWrapper href="https://jetbrains.com">
        <SC.StyledJetBrainsLogo alt="JetBrains" />
      </SC.JetBrainsLogoWrapper>
      Supported user groups
    </SC.HomePartnerWrapper>
  )
}
