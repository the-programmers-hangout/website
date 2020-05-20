import React, { FC } from "react"
import * as SC from "./styles"

export const HomePartner: FC = () => {
  return (
    <SC.HomePartnerWrapper>
      Member of
      <a rel="noreferrer" target="_blank" href="https://jetbrains.com">
        <SC.StyledJetBrainsLogo alt="JetBrains" />
      </a>
      Supported user groups
    </SC.HomePartnerWrapper>
  )
}
