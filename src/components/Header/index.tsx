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
      <Container>
        <SC.InnerWrapper>
          <Link to="/">
            <Logo />
          </Link>
          <SC.Menu>
            <MenuItem to="/about">about</MenuItem>
            <MenuItem to="/rules">rules</MenuItem>
            <MenuItem to="/">faq</MenuItem>
            <MenuItem to="/">hotbot</MenuItem>
            <MenuItem to="/resources">resources</MenuItem>
            <MenuItem to="/">tech spotlight</MenuItem>
          </SC.Menu>
        </SC.InnerWrapper>
      </Container>
    </SC.HeaderWrapper>
  )
}
