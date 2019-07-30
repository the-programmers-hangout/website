/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { PropsWithChildren } from "react"

import { GlobalStyles } from "../../globalStyles"
import { ResourcesSidebar } from "../ResourcesSidebar"
import * as SC from "./styles"
import { SidebarProvider } from "../../SidebarProvider"

export function ResourcesLayout({ children }: PropsWithChildren<{}>) {
  return (
    <SidebarProvider>
      <GlobalStyles />
      <SC.Main>
        <ResourcesSidebar />
        <SC.MainContent>
          <SC.Container>{children}</SC.Container>
        </SC.MainContent>
      </SC.Main>
    </SidebarProvider>
  )
}
