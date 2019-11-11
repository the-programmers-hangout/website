import { WindowLocation } from "@reach/router"
import React, { PropsWithChildren, useMemo } from "react"
import { LocationProvider } from "../LocationProvider"
import { ArchivesLayout } from "./ArchivesLayout"
import { Layout } from "./Layout"
import { ResourcesLayout } from "./ResourcesLayout"

export default function BaseLayout({
  children,
  location,
  pageContext,
}: PropsWithChildren<{
  pageContext: {
    layout?: string
  }
  location: WindowLocation
}>) {
  const ResolvedLayout = useMemo(() => {
    switch (pageContext.layout) {
      case "resources":
        return ResourcesLayout
      case "archives":
        return ArchivesLayout
      default:
        return Layout
    }
  }, [pageContext.layout])

  return (
    <LocationProvider location={location}>
      <ResolvedLayout>{children}</ResolvedLayout>
    </LocationProvider>
  )
}
