import React from "react"
import * as SC from "./styles"
import Container from "../Container"

const Footer = () => {
  return (
    <SC.FooterWrapper>
      <Container>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Container>
    </SC.FooterWrapper>
  )
}

export default Footer
