import React, { FC } from "react"

import startCase from "lodash/startCase"
import { Sidebar } from "../../components/Sidebar"
import { ColumnLayout } from "../ColumnLayout"

interface IPageLayoutProps {
  path?: string
}

export const PageLayout: FC<IPageLayoutProps> = ({ path, children }) => {
  const [, page] = (path ?? "").split("/")

  return (
    <ColumnLayout
      title={startCase(page)}
      sidebar={Sidebar}
      content={children}
    />
  )
}
