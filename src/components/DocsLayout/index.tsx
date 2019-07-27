/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { PropsWithChildren } from "react"
import { useStaticQuery, graphql } from "gatsby"

import DocsSidebar from "../DocsSidebar"
import Footer from "../Footer"
import * as SC from "./styles"

const DocsLayout = ({ children }: PropsWithChildren<{}>) => {
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
      <SC.Main>
        <DocsSidebar />
        <SC.MainContent>
          <h1>{data.site.siteMetadata.title}</h1>
          {children}
        </SC.MainContent>
      </SC.Main>
      <Footer />
    </div>
  )
}

export default DocsLayout
