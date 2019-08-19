import React from "react"

import * as SC from "./styles"

interface IStackedAvatarsProps {
  authors: any
}

export function StackedAvatars({ authors }: IStackedAvatarsProps) {
  return (
    <SC.StackedAvatarsWrapper count={authors.length}>
      {authors.map((author, index) => (
        <SC.AuthorAvatar key={index} src={author.avatar} index={index} />
      ))}
    </SC.StackedAvatarsWrapper>
  )
}
