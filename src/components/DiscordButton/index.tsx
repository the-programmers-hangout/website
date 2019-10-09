import React, { FC } from "react"
import * as SC from "./styles"

export const DiscordButton: FC = ({ children }) => {
  return (
    <SC.DiscordButtonWrapper href="https://discord.gg/programming">
      <SC.StyledDiscordLogo /> {children}
    </SC.DiscordButtonWrapper>
  )
}
