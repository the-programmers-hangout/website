import Prism from "prismjs"
import "prismjs/components/prism-bash"
import "prismjs/components/prism-c"
import "prismjs/components/prism-clojure"
import "prismjs/components/prism-cpp"
import "prismjs/components/prism-elixir"
import "prismjs/components/prism-graphql"
import "prismjs/components/prism-haskell"
import "prismjs/components/prism-java"
import "prismjs/components/prism-kotlin"
import "prismjs/components/prism-markup-templating"
import "prismjs/components/prism-php"
import "prismjs/components/prism-python"
import "prismjs/components/prism-yaml"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import React, { FC, useEffect } from "react"
import "./env"

interface IMarkdownProps {
  // Pre-rendered HTML (built at compile time from Markdown/MDX content).
  content: string
}

/*
  Wraps Markdown-generated HTML. `prose` (typography plugin) is the base and the
  `.markdown` layer (global.css) reproduces the TPH-specific design.
*/
export const Markdown: FC<IMarkdownProps> = ({ content }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [content])

  return (
    <div
      className="markdown prose max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
