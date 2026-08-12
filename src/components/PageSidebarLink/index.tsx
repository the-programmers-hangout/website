import React, { FC } from "react"
import { AppLink } from "../AppLink"
import { humanize } from "../../utils"

const linkClass =
  "text-main-fg no-underline break-words hover:underline focus:underline"

interface IPageSidebarLinkProps {
  href: string
  text?: string
  external?: boolean
  type?: "internal" | "external" | "anchor"
}

export const PageSidebarLink: FC<IPageSidebarLinkProps> = ({
  href,
  text,
  type = "internal",
}) => {
  if (type === "anchor") {
    return (
      <a href={href} className={linkClass}>
        {text}
      </a>
    )
  }

  if (type === "external") {
    return (
      <a href={href} target="_blank" className={linkClass}>
        {text}
      </a>
    )
  }

  const [internalText] = href.split("/").slice(-1)

  return (
    <AppLink to={`/resources/${href}.md`} className={linkClass}>
      {text || humanize(internalText)}
    </AppLink>
  )
}
