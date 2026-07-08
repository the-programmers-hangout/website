import React, { FC, ReactNode } from "react"
import { LocationProvider } from "../LocationProvider"
import { ResourceDataProvider } from "../context/ResourceDataContext"
import { ResourcesLayout } from "../layouts/ResourcesLayout"
import { SpotlightsLayout } from "../layouts/SpotlightsLayout"
import { PageLayout } from "../layouts/PageLayout"
import type { ResourceDataShape } from "../lib/content"

export type LayoutName = "resources" | "spotlights" | "regular"

interface ShellProps {
  layout: LayoutName
  pathname: string
  resourceData: ResourceDataShape
  children: ReactNode
}

/*
  Replaces gatsby-plugin-layout: wraps a page's content in the correct
  layout (which itself provides ThemeProvider / SidebarProvider) plus the
  Location + ResourceData contexts the components rely on.
*/
export const Shell: FC<ShellProps> = ({
  layout,
  pathname,
  resourceData,
  children,
}) => {
  const Layout =
    layout === "resources"
      ? ResourcesLayout
      : layout === "spotlights"
      ? SpotlightsLayout
      : PageLayout

  return (
    <LocationProvider location={{ pathname }}>
      <ResourceDataProvider value={resourceData}>
        <Layout path={pathname}>{children}</Layout>
      </ResourceDataProvider>
    </LocationProvider>
  )
}
