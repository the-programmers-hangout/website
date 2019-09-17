import React, { PropsWithChildren } from "react"
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
  location: Location
}>) {
  if (pageContext.layout === "resources") {
    return <ResourcesLayout>{children}</ResourcesLayout>
  }

  return <Layout location={location}>{children}</Layout>
}
