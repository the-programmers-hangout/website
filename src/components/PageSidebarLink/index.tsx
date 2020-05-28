import React, { FC } from "react"

import { humanize } from "../../utils"
import * as SC from "./styles"

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
    return <SC.Anchor href={href}>{text}</SC.Anchor>
  }

  if (type === "external") {
    return (
      <SC.External href={href} target="_blank">
        {text}
      </SC.External>
    )
  }

  const [internalText] = href.split("/").slice(-1)

  return (
    <SC.Internal to={`/resources/${href}.md`}>
      {text || humanize(internalText)}
    </SC.Internal>
  )
}
