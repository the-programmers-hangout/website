import React from "react"
import { Container } from "../Container"
import * as SC from "./styles"

export function Footer() {
  return (
    <SC.FooterWrapper>
      <Container>
        <p>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </p>
      </Container>
    </SC.FooterWrapper>
  )
}
