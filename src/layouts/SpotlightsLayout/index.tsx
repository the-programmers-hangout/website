import React, { FC } from "react"

import { SpotlightsSidebar } from "../../components/SpotlightsSidebar"
import { ColumnLayout } from "../ColumnLayout"

export const SpotlightsLayout: FC = ({ children }) => {
  return (
    <ColumnLayout
      title="Spotlights"
      sidebar={SpotlightsSidebar}
      content={children}
    />
  )
}
