import React from "react"
import * as SC from "./styles"
import { Container } from "../Container"

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
