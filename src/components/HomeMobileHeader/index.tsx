import React, { FC } from "react"
import * as SC from "./styles"

interface IHomeMobileHeaderProps {
  openMenu: () => void
}

export const HomeMobileHeader: FC<IHomeMobileHeaderProps> = ({
  openMenu,
  children,
}) => {
  return (
    <SC.HomeMobileHeaderWrapper>
      <SC.LogoWrapper>
        <SC.StyledLogo />
      </SC.LogoWrapper>
      {children}
      <SC.Burger onClick={openMenu} />
    </SC.HomeMobileHeaderWrapper>
  )
}
