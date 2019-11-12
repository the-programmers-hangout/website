import React, { FC } from "react"
import * as SC from "./styles"

interface IHomeMobileHeaderProps {
  openMenu: () => void
}

export const HomeMobileHeader: FC<IHomeMobileHeaderProps> = ({ openMenu }) => {
  return (
    <SC.HomeMobileHeaderWrapper>
      <SC.LogoWrapper>
        <SC.StyledLogo />
      </SC.LogoWrapper>
      Resources
      <SC.Burger onClick={openMenu} />
    </SC.HomeMobileHeaderWrapper>
  )
}
