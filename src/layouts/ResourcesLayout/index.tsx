import React, { FC } from "react"

import { ResourcesSidebar } from "../../components/ResourcesSidebar"
import { ColumnLayout } from "../ColumnLayout"

export const ResourcesLayout: FC = ({ children }) => {
  return (
    <ColumnLayout
      title="Resources"
      sidebar={ResourcesSidebar}
      content={children}
    />
  )
}
