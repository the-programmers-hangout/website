import Prism from "prismjs"
import "prismjs/components/prism-markup-templating"
import "prismjs/components/prism-php"
import "prismjs/components/prism-python"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import React from "react"
import * as SC from "./styles"

interface IMarkdownProps {
  content: string
}

/*
  This component is used as a wrapper around Markdown generated content,
  mainly to provide styles to the html generated.
*/
export function Markdown({
  content,
  ...restProps
}: MarkdownProps): JSX.Element {
  React.useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <SC.MarkdownWrapper
      dangerouslySetInnerHTML={{ __html: content }}
      {...restProps}
    />
  )
}
