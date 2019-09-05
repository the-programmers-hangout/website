import React from "react"
import * as SC from "./styles"

interface IMobileHeaderProps {
  openMenu: () => void
}

export function MobileHeader({ openMenu }: IMobileHeaderProps) {
  return (
    <SC.MobileHeaderWrapper>
      <SC.LogoWrapper>
        <SC.StyledLogo />
      </SC.LogoWrapper>
      Resources
      <SC.Burger onClick={openMenu} />
    </SC.MobileHeaderWrapper>
  )
}
