import cx from "classnames"
import React, { FC } from "react"
import ScrollspyModule from "react-scrollspy"
import { PageSidebarLink } from "../PageSidebarLink"
import { ITocItem } from "../../types"
import { cn } from "../../lib/cn"

// react-scrollspy is CommonJS with `exports.default`. Bundlers unwrap it,
// but Node's import during the server render returns the exports object.
const Scrollspy =
  (ScrollspyModule as unknown as { default?: typeof ScrollspyModule })
    .default ?? ScrollspyModule

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
  // Start on the first heading, which is where scrollspy lands for a page
  // opened at the top. Without it the server HTML has no active item, and
  // the bold active style reflows the list when scrollspy mounts.
  const [scrollSpyCache, setScrollSpyCache] = React.useState<
    string | undefined
  >(() => items[0]?.link.substring(1))

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
