import React, { FC } from "react"

import { RouteComponentProps } from "@reach/router"
import startCase from "lodash/startCase"
import { Sidebar } from "../../components/Sidebar"
import { ColumnLayout } from "../ColumnLayout"
import { IPageContext } from "../index"

export const PageLayout: FC<IPageContext & RouteComponentProps> = ({
  path,
  children,
}) => {
  const [, page] = path?.split("/")!

  return (
    <ColumnLayout
      title={startCase(page)}
      sidebar={Sidebar}
      content={children}
    />
  )
}
