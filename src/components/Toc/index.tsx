import cx from "classnames"
import React, { FC } from "react"
import Scrollspy from "react-scrollspy"
import { PageSidebarLink } from "../PageSidebarLink"
import { ITocItem } from "../../types"
import { cn } from "../../lib/cn"

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

const ScrollspyWrapper: FC<{ className?: string }> = ({
  className,
  ...props
}) => <div {...props} className={cn("flex flex-col", className)} />

export const Toc: FC<ITocProps> = ({ header, items }) => {
  const [scrollSpyCache, setScrollSpyCache] = React.useState<string>()

  return (
    <div className="flex flex-col">
      {header}
      <Scrollspy
        items={items.map((item) => item.link.substring(1))}
        currentClassName="scrollspy-current"
        scrolledPastClassName="scrollspy-past"
        componentTag={ScrollspyWrapper}
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
            <div
              key={item.link}
              className={cx("toc-item", `depth-${item.depth}`, {
                "scrollspy-cached": scrollSpyCache === item.link.substring(1),
              })}
            >
              {prefix}
              <PageSidebarLink href={item.link} text={title} type="anchor" />
            </div>
          )
        })}
      </Scrollspy>
    </div>
  )
}
