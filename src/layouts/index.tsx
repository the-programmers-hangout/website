import React, { PropsWithChildren } from "react"
import { Layout } from "../components/Layout"
import { ResourcesLayout } from "../components/ResourcesLayout"

export default function BaseLayout({
  children,
  pageContext,
}: PropsWithChildren<{
  pageContext: {
    layout?: string
  }
}>) {
  if (pageContext.layout === "resources") {
    return <ResourcesLayout>{children}</ResourcesLayout>
  }

  return <Layout>{children}</Layout>
}
