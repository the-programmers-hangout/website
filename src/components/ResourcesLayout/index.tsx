/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { PropsWithChildren } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { GlobalStyles } from "../../globalStyles"
import { ResourcesSidebar } from "../ResourcesSidebar"
import * as SC from "./styles"

export function ResourcesLayout({ children }: PropsWithChildren<{}>) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <GlobalStyles />
      <SC.Main>
        <ResourcesSidebar />
        <SC.MainContent>
          <SC.Container>
            <h1>{data.site.siteMetadata.title}</h1>
            {children}
          </SC.Container>
        </SC.MainContent>
      </SC.Main>
    </div>
  )
}
