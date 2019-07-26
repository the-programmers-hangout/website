/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { PropsWithChildren } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "../Navbar"
import "./layout.scss"
import { MainContent } from "./styles";
import Scrollbar from "react-perfect-scrollbar"
import "react-perfect-scrollbar/dist/css/styles.css";

const Layout = ({ children }: PropsWithChildren<{}>) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Scrollbar>
      <Navbar siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <MainContent>{children}</MainContent>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </Scrollbar>
  )
}

export default Layout
