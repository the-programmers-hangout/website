import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import icon from "./icon.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#ba1a2e`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <img src={icon} style={{ width: "70px" }} />
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              paddingLeft: 25,
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </div>

  </header >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
