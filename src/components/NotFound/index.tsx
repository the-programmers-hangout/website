import React, { FC } from "react"
import { levenshteinDistance } from "../../lib/levenshtein"
import { humanize, sentenceCase } from "../../utils"
import { AppLink } from "../AppLink"
import { Article } from "../Article"

interface INotFoundProps {
  title: string
  // Section the missing page was looked up in, e.g. "/resources"; omitted for
  // the site-wide 404.
  basePath?: string
  sectionTitle?: string
  // Content paths in that section (relative to basePath) to suggest from.
  candidates?: string[]
  // Close enough to suggest: below this many single-character edits.
  threshold?: number
}

function currentPath(): string {
  return typeof window !== "undefined" ? window.location.pathname : ""
}

export const NotFound: FC<INotFoundProps> = ({
  title,
  basePath,
  sectionTitle,
  candidates = [],
  threshold = 8,
}) => {
  const search = currentPath()
    .replace(basePath ? `${basePath}/` : "/", "")
    .replace(/\/$/, "")
    .toLowerCase()
  const suggestions = search
    ? candidates.filter(
        (path) => levenshteinDistance(search, path.toLowerCase()) < threshold
      )
    : []

  const crumbs =
    basePath && sectionTitle ? [{ path: basePath, title: sectionTitle }] : []
  const back = basePath
    ? { path: basePath, label: `Browse all ${sectionTitle?.toLowerCase()}` }
    : { path: "/", label: "Go to the home page" }

  return (
    <Article title={title} crumbs={crumbs}>
      <div className="markdown prose article-prose max-w-none">
        <p>You just hit a route that doesn&apos;t exist... the sadness.</p>
        {suggestions.length > 0 && (
          <>
            <p>You may have meant:</p>
            <ul>
              {suggestions.map((path) => (
                <li key={path}>
                  <AppLink to={`${basePath ?? ""}/${path}`}>
                    {sentenceCase(humanize(path.replace(/\//g, " / ")))}
                  </AppLink>
                </li>
              ))}
            </ul>
          </>
        )}
        <p>
          <AppLink to={back.path}>{back.label}</AppLink>
        </p>
      </div>
    </Article>
  )
}
