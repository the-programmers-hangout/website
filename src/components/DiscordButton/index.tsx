import React, { FC } from "react"
import DiscordLogo from "../../images/discord-logo"
import { cn } from "../../lib/cn"

interface DiscordButtonProps {
  className?: string
}

export const DiscordButton: FC<DiscordButtonProps> = ({
  children,
  className,
}) => {
  return (
    <a
      className={cn(
        "button inline-flex cursor-pointer items-center rounded-[5px] bg-discord px-7 py-[18px] font-header text-2xl font-bold uppercase text-white no-underline [box-shadow:0_3px_18px_rgba(0,0,0,0.3)] transition-colors duration-300 hover:bg-discord-darker",
        className
      )}
      rel="noreferrer"
      href="https://discord.gg/programming"
    >
      <DiscordLogo className="mr-[13px] h-[30px] w-[30px]" /> {children}
    </a>
  )
}
