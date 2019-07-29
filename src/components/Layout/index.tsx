/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { PropsWithChildren } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Container } from "../Container"
import { Footer } from "../Footer"
import { Header } from "../Header"
import "./layout.scss"
import * as SC from "./styles"
import Scrollbar from "react-perfect-scrollbar"
import "react-perfect-scrollbar/dist/css/styles.css"

export function Layout({ children }: PropsWithChildren<{}>) {
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
      <SC.Main>
        <Header />
        <SC.MainContent>
          <Container>
            <h1>{data.site.siteMetadata.title}</h1>
            {children}
          </Container>
        </SC.MainContent>
      </SC.Main>
      <Footer />
    </Scrollbar>
  )
}
