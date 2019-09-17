import React, { FC } from "react"
import { Container } from "../Container"
import * as SC from "./styles"

export const Footer: FC = () => {
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
