import React, { FC } from "react"
import * as SC from "./styles"

interface IMobileHeaderProps {
  openMenu: () => void
}

export const MobileHeader: FC<IMobileHeaderProps> = ({ openMenu }) => {
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
