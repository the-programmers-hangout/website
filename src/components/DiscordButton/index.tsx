import React, { FC } from "react"
import * as SC from "./styles"

export const DiscordButton: FC = ({ children }) => {
  return (
    <SC.DiscordButtonWrapper>
      <SC.StyledDiscordLogo /> {children}
    </SC.DiscordButtonWrapper>
  )
}
