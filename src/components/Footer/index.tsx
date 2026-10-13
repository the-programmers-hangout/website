import React, { FC } from "react"
import packageJson from "../../../package.json"
import { Link } from "../Link"

export const Footer: FC = () => {
  return (
    // Secondary text, in the meta line's type (16/21, tight tracking, 90%).
    <footer className="mt-16 text-base leading-[21px] tracking-[-0.75px] text-main-fg/90">
      <p>
        © {new Date().getFullYear()}, Built with
        {` `}
        <Link to="https://astro.build">Astro</Link> - Source on{" "}
        <Link to={packageJson.repository.url}>GitHub</Link>
      </p>
    </footer>
  )
}
