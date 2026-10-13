import React, { FC, HTMLAttributes } from "react"

import startCase from "lodash/startCase"
import { Sidebar } from "../../components/Sidebar"
import { ColumnLayout } from "../ColumnLayout"

interface IPageLayoutProps {
  path?: string
}

// Mobile header label: the page slug, with acronyms kept upper case.
const TITLES: Record<string, string> = { faq: "FAQ" }

const PageSidebar: FC<HTMLAttributes<HTMLDivElement>> = (props) => (
  <Sidebar variant="card" {...props} />
)

export const PageLayout: FC<IPageLayoutProps> = ({ path, children }) => {
  const [, page] = (path ?? "").split("/")

  return (
    <ColumnLayout
      title={TITLES[page] ?? startCase(page)}
      sidebar={PageSidebar}
      content={children}
      variant="card"
    />
  )
}
