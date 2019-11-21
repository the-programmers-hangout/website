import React, { FC } from "react"

import { ArchivesSidebar } from "../../components/ArchivesSidebar"
import { ColumnLayout } from "../ColumnLayout"

export const ArchivesLayout: FC = ({ children }) => {
  return (
    <ColumnLayout
      title="Archives"
      sidebar={ArchivesSidebar}
      content={children}
    />
  )
}
