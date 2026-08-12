import React, { FC } from "react"
import { AppLink } from "../AppLink"
import { cn } from "../../lib/cn"

interface ILinkProps {
  to: string
  className?: string
}

export const Link: FC<ILinkProps> = ({ children, to, className, ...props }) => {
  if (!to.match(/^(https?:\/\/)/)) {
    return (
      <AppLink {...props} to={to} className={cn("link-gradient", className)}>
        {children}
      </AppLink>
    )
  }

  return (
    <a
      {...props}
      rel="noreferrer"
      href={to}
      target="_blank"
      className={cn("link-gradient", className)}
    >
      {children}
    </a>
  )
}
