/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { PropsWithChildren } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Container from "../Container"
import Footer from "../Footer"
import Sidebar from "../Sidebar"
import "./layout.scss"
import * as SC from "./styles"
import Scrollbar from "react-perfect-scrollbar"
import "react-perfect-scrollbar/dist/css/styles.css"

function Layout({ children }: PropsWithChildren<{}>) {
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
        <SC.Main>
          <Sidebar />
          <SC.MainContent>
            <h1>{data.site.siteMetadata.title}</h1>
            {children}
          </SC.MainContent>
        </SC.Main>
      </Container>
      <Footer />
    </Scrollbar>
  )
}

export default Layout
