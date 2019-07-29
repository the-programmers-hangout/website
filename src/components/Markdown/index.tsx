import React from "react"
import * as SC from "./styles"

interface MarkdownProps {
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
  return (
    <SC.MarkdownWrapper
      dangerouslySetInnerHTML={{ __html: content }}
      {...restProps}
    />
  )
}
