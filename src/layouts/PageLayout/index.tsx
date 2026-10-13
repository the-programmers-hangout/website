import React, { FC } from "react"

import startCase from "lodash/startCase"
import { Sidebar } from "../../components/Sidebar"
import { ColumnLayout } from "../ColumnLayout"

interface IPageLayoutProps {
  path?: string
}

// Mobile header label: the page slug, with acronyms kept upper case.
const TITLES: Record<string, string> = { faq: "FAQ" }

export const PageLayout: FC<IPageLayoutProps> = ({ path, children }) => {
  const [, page] = (path ?? "").split("/")

  return (
    <ColumnLayout
      title={TITLES[page] ?? startCase(page)}
      sidebar={Sidebar}
      content={children}
    />
  )
}
