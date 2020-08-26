import cx from "classnames"
import React, { FC } from "react"
import Scrollspy from "react-scrollspy"
import { PageSidebarLink } from "../PageSidebarLink"
import { ITocItem } from "../../types"
import * as SC from "./styles"

interface ITocProps {
  header: React.ReactNode
  items: ITocItem[]
}

interface ITitle {
  prefix: string | null
  title: string
}

function extractTitle(title: string): ITitle {
  const maybePrefix = title.match(/^(\w+\.)/)
  const rest = maybePrefix ? title.replace(maybePrefix[0], "") : title

  return {
    prefix: maybePrefix ? `${maybePrefix[0]} ` : null,
    title: rest.trim(),
  }
}

export const Toc: FC<ITocProps> = ({ header, items }) => {
  const [scrollSpyCache, setScrollSpyCache] = React.useState<string>()

  return (
    <SC.TocWrapper>
      {header}
      <Scrollspy
        items={items.map((item) => item.link.substring(1))}
        currentClassName="scrollspy-current"
        scrolledPastClassName="scrollspy-past"
        componentTag={SC.ScrollspyWrapper}
        onUpdate={(updatedElement: HTMLDivElement) => {
          // @ts-ignore
          const id = updatedElement?.id
          if (id) {
            setScrollSpyCache(id)
          }
        }}
      >
        {items.map((item) => {
          const { prefix, title } = extractTitle(item.title)

          return (
            <SC.TocItem
              key={item.link}
              className={cx(`depth-${item.depth}`, {
                "scrollspy-cached": scrollSpyCache === item.link.substring(1),
              })}
            >
              {prefix}
              <PageSidebarLink href={item.link} text={title} type="anchor" />
            </SC.TocItem>
          )
        })}
      </Scrollspy>
    </SC.TocWrapper>
  )
}
