import React, { FC } from "react"
import * as SC from "./styles"

interface IMobileHeaderProps {
  openMenu: () => void
}

export const MobileHeader: FC<IMobileHeaderProps> = ({
  openMenu,
  children,
}) => {
  return (
    <SC.MobileHeaderWrapper>
      <SC.LogoWrapper>
        <SC.StyledLogo />
      </SC.LogoWrapper>
      {children}
      <SC.Burger onClick={openMenu} />
    </SC.MobileHeaderWrapper>
  )
}
