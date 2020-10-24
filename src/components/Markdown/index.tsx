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
import { MDXRenderer } from "gatsby-plugin-mdx"
import * as SC from "./styles"
import "./env";

interface IMarkdownProps {
  content: string
}

/*
  This component is used as a wrapper around Markdown generated content,
  mainly to provide styles to the html generated.
*/
export const Markdown: FC<IMarkdownProps> = ({ content, ...restProps }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <SC.MarkdownWrapper
      {...restProps}
    >
      <MDXRenderer>{content}</MDXRenderer>
    </SC.MarkdownWrapper>
  )
}
