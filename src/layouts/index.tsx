import { WindowLocation } from "@reach/router"
import React, { PropsWithChildren } from "react"
import { LocationProvider } from "../LocationProvider"
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
  return (
    <LocationProvider location={location}>
      {pageContext.layout === "resources" ? (
        <ResourcesLayout>{children}</ResourcesLayout>
      ) : (
        <Layout>{children}</Layout>
      )}
    </LocationProvider>
  )
}
