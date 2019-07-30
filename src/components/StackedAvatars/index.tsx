import React from "react"

import * as SC from "./styles"

interface StackedAvatarsProps {
  authors: any
}

export function StackedAvatars({ authors }: StackedAvatarsProps) {
  return (
    <SC.StackedAvatarsWrapper count={authors.length}>
      {authors.map((author, index) => (
        <SC.AuthorAvatar src={author.avatar} index={index} />
      ))}
    </SC.StackedAvatarsWrapper>
  )
}
