import React, { PropsWithChildren } from "react"
import * as SC from "./styles"

function DiscordButton({ children }: PropsWithChildren<{}>) {
  return (
    <SC.DiscordButtonWrapper>
      <SC.StyledDiscordLogo /> {children}
    </SC.DiscordButtonWrapper>
  )
}

export default DiscordButton
