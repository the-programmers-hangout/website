import React, { FC } from "react"
import packageJson from "../../../package.json"
import { Link } from "../Link"

export const Footer: FC = () => {
  return (
    <footer className="mt-16">
      <p>
        © {new Date().getFullYear()}, Built with
        {` `}
        <Link to="https://astro.build">Astro</Link> - Source on{" "}
        <Link to={packageJson.repository.url}>GitHub</Link>
      </p>
    </footer>
  )
}
