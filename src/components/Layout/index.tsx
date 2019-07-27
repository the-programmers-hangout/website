/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { PropsWithChildren } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Container from "../Container"
import Sidebar from "../Sidebar"
import "./layout.scss"
import { Main, MainContent } from "./styles"
import Scrollbar from "react-perfect-scrollbar"
import "react-perfect-scrollbar/dist/css/styles.css"

const Layout = ({ children }: PropsWithChildren<{}>) => {
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
      <Container>
        <Main>
          <Sidebar />
          <MainContent>
            <h1>{data.site.siteMetadata.title}</h1>
            {children}
          </MainContent>
        </Main>
      </Container>
      <footer>
        <Container>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Container>
      </footer>
    </Scrollbar>
  )
}

export default Layout
