/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React, { PropsWithChildren } from "react"

import { GlobalStyles } from "../../globalStyles"
import { Container } from "../Container"
import { Footer } from "../Footer"
import { Header } from "../Header"
import * as SC from "./styles"

export function Layout({
  children,
  location,
}: PropsWithChildren<{ location: Location }>) {
  const isHome = location.pathname === "/"
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
    <SC.LayoutWrapper>
      <GlobalStyles />
      <Header />
      {!isHome && (
        <SC.MainContent>
          <Container>
            <h1>{data.site.siteMetadata.title}</h1>
            {children}
          </Container>
        </SC.MainContent>
      )}
      {!isHome && <Footer />}
    </SC.LayoutWrapper>
  )
}
