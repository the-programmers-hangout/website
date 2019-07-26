import { Link } from "gatsby";
import React from "react";
import icon from "./icon.png";
import { NavbarWrapper, NavbarItems } from "./styles";

// @todo maybe find alternative type for data
const Navbar = ({ siteTitle }: any) => (
  <HeaderWrapper>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        {/* <img src={icon} style={{ width: "70px" }} /> */}
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </div>

  </HeaderWrapper>
)

Navbar.propTypes = {
  siteTitle: String
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar;
