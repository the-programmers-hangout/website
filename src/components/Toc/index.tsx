import React, { FC } from "react"
import { ITocItem } from "../../types"
import * as SC from "./styles"

interface ITocProps {
  header: React.ReactNode
  items: ITocItem[]
}

interface ITitle {
  prefix?: string
  title: string
}

function extractTitle(title: string): ITitle {
  const maybePrefix = title.match(/^(\w+\.)/)
  const rest = maybePrefix ? title.replace(maybePrefix[0], "") : title

  return {
    prefix: maybePrefix ? maybePrefix[0] : undefined,
    title: rest,
  }
}

export const Toc: FC<ITocProps> = ({ header, items }) => {
  const { pathname } = window.location
  return (
    <SC.TocWrapper>
      {header}
      {items.map(item => {
        const { prefix, title } = extractTitle(item.title)

        return (
          <SC.TocItem key={item.link} className={`depth-${item.depth}`}>
            {prefix}
            <SC.TocLink to={`${pathname}${item.link}`}>{title}</SC.TocLink>
          </SC.TocItem>
        )
      })}
    </SC.TocWrapper>
  )
}
