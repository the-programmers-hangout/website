import React, { FC } from "react"
import packageJson from "../../../package.json"
import { Link } from "../Link"
import * as SC from "./styles"

export const Footer: FC = () => {
  return (
    <SC.FooterWrapper>
      <p>
        © {new Date().getFullYear()}, Built with
        {` `}
        <Link to="https://www.gatsbyjs.org">Gatsby</Link> - Source on{" "}
        <Link to={packageJson.repository.url}>GitHub</Link>
      </p>
    </SC.FooterWrapper>
  )
}
