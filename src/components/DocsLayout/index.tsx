/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { PropsWithChildren } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Container from "../Container"
import DocsSidebar from "../DocsSidebar"
import { Main, MainContent } from "./styles"
import Scrollbar from "react-perfect-scrollbar"
import "react-perfect-scrollbar/dist/css/styles.css"

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
    <Scrollbar>
      <Main>
        <DocsSidebar />
        <MainContent>
          <h1>{data.site.siteMetadata.title}</h1>
          {children}
        </MainContent>
      </Main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Scrollbar>
  )
}

export default DocsLayout
