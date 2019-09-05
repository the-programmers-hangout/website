import React, { PropsWithChildren } from "react"
import * as SC from "./styles"

export function DiscordButton({ children }: PropsWithChildren<{}>) {
  return (
    <SC.DiscordButtonWrapper>
      <SC.StyledDiscordLogo /> {children}
    </SC.DiscordButtonWrapper>
  )
}
