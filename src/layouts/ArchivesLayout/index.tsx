import React, { FC } from "react"

import { ArchivesSidebar } from "../../components/ArchivesSidebar"
import { ColumnLayout } from "../ColumnLayout"

export const ArchivesLayout: FC = ({ children }) => {
  return <ColumnLayout sidebar={ArchivesSidebar} content={children} />
}
