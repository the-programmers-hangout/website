import { Link } from "gatsby"
import React, { PropsWithChildren } from "react"
import { Container } from "../Container"
import Logo from "../../images/tph-logo.svg"
import * as SC from "./styles"

function MenuItem({ children, to }: PropsWithChildren<{ to: string }>) {
  return (
    <SC.MenuItem to={to} activeClassName="active">
      {children}
    </SC.MenuItem>
  )
}

export function Header() {
  return (
      <SC.HeaderWrapper>
        <Link to="/" style={{ position: "absolute", left: "80px" }}>
          <Logo />
        </Link>
        <Container>
          <SC.InnerWrapper>
            <SC.Menu>
              <MenuItem to="/">about</MenuItem>
              <MenuItem to="/rules">rules</MenuItem>
              <MenuItem to="/faq">faq</MenuItem>
              <MenuItem to="/hotbot">hotbot</MenuItem>
              <MenuItem to="/resources">resources</MenuItem>
              <MenuItem to="/tech">tech spotlight</MenuItem>
            </SC.Menu>
          </SC.InnerWrapper>
        </Container>
      </SC.HeaderWrapper>
  )
}
