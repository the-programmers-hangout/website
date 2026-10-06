import React, { FC, ReactNode } from "react"

import type { Author } from "../../appTypes"
import ChevronRight from "../../icons/chevron-right.svg?react"
import ChevronRightSmall from "../../icons/chevron-right-sm.svg?react"
import { IExternalResource, ITocItem } from "../../types"
import { humanize, traversePaths } from "../../utils"
import { AppLink } from "../AppLink"
import { flattenTrail } from "../Breadcrumb"
import { PageSidebarLink } from "../PageSidebarLink"
import { Toc } from "../Toc"

interface IResourceArticleProps {
  relativePath: string
  basePath: string
  title: string
  authors?: Author[]
  createdAt: string
  timeToRead: number
  toc?: ITocItem[]
  recommendedReading?: string[]
  externalResources?: IExternalResource[]
  // Article body (the Markdown), and what follows it (prev/next, footer).
  children: ReactNode
  after?: ReactNode
}

function sentenceCase(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

// Home > Resources > language (link) > deeper folders (text). The page itself
// is the <h1> below, so it is not repeated here.
const ResourceBreadcrumb: FC<{ relativePath: string; basePath: string }> = ({
  relativePath,
  basePath,
}) => {
  const trail = flattenTrail([traversePaths(relativePath.split("/"), basePath)])
  let folderDepth = 0
  const items = [
    { path: "/", title: "home", link: true },
    { path: basePath, title: basePath.replace(/\//, ""), link: true },
    ...trail
      .filter((item) => item.type === "folder")
      .map((item) => {
        folderDepth++
        return { path: item.path, title: item.title, link: folderDepth === 1 }
      }),
  ]

  return (
    <nav aria-label="Breadcrumb" className="pl-[23px] max-md:pl-0">
      <ol className="flex flex-wrap items-center gap-x-[6px] text-base leading-[21px] font-medium tracking-[-0.75px] text-main-fg/90">
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center gap-x-[7px]">
            {index > 0 && (
              <ChevronRightSmall aria-hidden="true" className="shrink-0" />
            )}
            {item.link ? (
              <AppLink
                to={item.path}
                className="text-inherit underline decoration-from-font hover:text-main-fg"
              >
                {sentenceCase(humanize(item.title))}
              </AppLink>
            ) : (
              <span>{sentenceCase(humanize(item.title))}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

const listFormat = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
})
const dateFormat = new Intl.DateTimeFormat("en-US", { dateStyle: "long" })

const ArticleMeta: FC<{
  authors?: Author[]
  createdAt: string
  timeToRead: number
}> = ({ authors = [], createdAt, timeToRead }) => {
  const date = createdAt ? new Date(createdAt) : null
  const hasDate = date !== null && !Number.isNaN(date.getTime())
  const names = authors.map((author) => author.name)

  const parts: ReactNode[] = []
  if (names.length > 0) {
    parts.push(
      <span key="by" className="text-base">
        by{" "}
        {listFormat.formatToParts(names).map((part, index) =>
          part.type === "element" ? (
            <span key={index} className="font-medium">
              {part.value}
            </span>
          ) : (
            <React.Fragment key={index}>{part.value}</React.Fragment>
          )
        )}
      </span>
    )
  }
  if (hasDate) {
    parts.push(
      <time key="date" dateTime={date.toISOString()} className="text-sm">
        {dateFormat.format(date)}
      </time>
    )
  }
  parts.push(
    <span key="time" className="text-sm">
      {timeToRead} minute read time
    </span>
  )

  return (
    <div className="mt-[6.5px] flex items-center gap-[13px] pl-[21px] max-md:pl-0">
      {authors.length > 0 && (
        <div className="flex shrink-0">
          {authors.map((author, index) => (
            <img
              key={`${author.name}#${author.hash}`}
              src={author.avatar}
              alt=""
              width={32}
              height={32}
              className="relative size-8 rounded-full border-2 border-avatar-ring not-first:-ml-5"
              style={{ zIndex: index }}
            />
          ))}
        </div>
      )}
      <p className="m-0 flex flex-wrap items-center gap-x-[11px] leading-[21px] font-light tracking-[-0.75px] text-main-fg/90">
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <span aria-hidden="true" className="text-sm">
                •
              </span>
            )}
            {part}
          </React.Fragment>
        ))}
      </p>
    </div>
  )
}

// Recommended reading points at other resources by path; an "intro" page is
// named after its folder ("javascript/callbacks/intro" reads "Callbacks").
function recommendedLabel(path: string): string {
  const segments = path.split("/")
  const last = segments[segments.length - 1]
  const name =
    last === "intro" && segments.length > 1
      ? segments[segments.length - 2]
      : last
  return sentenceCase(humanize(name))
}

const asideHeader =
  "m-0 mb-2.5 text-lg leading-[23px] font-bold text-main-fg/90"

const ResourceAside: FC<{
  toc: ITocItem[]
  recommendedReading?: string[]
  externalResources?: IExternalResource[]
}> = ({ toc, recommendedReading, externalResources }) => {
  return (
    <aside className="resource-aside flex flex-col gap-[56.5px] pl-2 empty:hidden min-[1200px]:sticky min-[1200px]:top-9 min-[1200px]:-mt-px min-[1200px]:col-start-2 min-[1200px]:row-span-2 min-[1200px]:row-start-2 min-[1200px]:self-start max-[1199px]:mt-16">
      {toc.length > 0 && (
        <nav aria-label="On this page" className="max-[1199px]:hidden">
          <Toc header={null} items={toc} />
        </nav>
      )}

      {recommendedReading && recommendedReading.length > 0 && (
        <section>
          <h2 className={asideHeader}>Recommended reading</h2>
          <ul className="m-0 flex list-none flex-col items-start gap-[5px] p-0">
            {recommendedReading.map((item) => (
              <li key={item} className="resource-link">
                <PageSidebarLink
                  href={item}
                  text={recommendedLabel(item)}
                  type="internal"
                />
                <ChevronRight aria-hidden="true" className="shrink-0" />
              </li>
            ))}
          </ul>
        </section>
      )}

      {externalResources && externalResources.length > 0 && (
        <section>
          <h2 className={asideHeader}>External resources</h2>
          <ul className="m-0 flex list-none flex-col items-start gap-[5px] p-0">
            {externalResources.map((item) => (
              <li key={item.href} className="resource-link">
                <PageSidebarLink
                  href={item.href}
                  text={item.text}
                  type="external"
                />
                <ChevronRight aria-hidden="true" className="shrink-0" />
              </li>
            ))}
          </ul>
        </section>
      )}
    </aside>
  )
}

/*
  Resource page from the 2026 redesign: header (breadcrumb, title, meta), the
  article column, and a sticky aside (table of contents, recommended reading).
  At 1440 the article column is 677px wide and the group is centred in the
  space right of the sidebar card; below 1200 the aside drops under the
  article and the table of contents is hidden.
*/
export const ResourceArticle: FC<IResourceArticleProps> = ({
  relativePath,
  basePath,
  title,
  authors,
  createdAt,
  timeToRead,
  toc = [],
  recommendedReading,
  externalResources,
  children,
  after,
}) => {
  return (
    <div className="grid grid-cols-[minmax(0,677px)] justify-center px-5 pt-[100px] pb-16 md:px-8 lg:pt-[63px] min-[1200px]:grid-cols-[minmax(0,677px)_204px] min-[1200px]:gap-x-[clamp(40px,6vw,86px)]">
      <header className="pb-10 md:pb-[60px] min-[1200px]:col-start-1">
        <ResourceBreadcrumb relativePath={relativePath} basePath={basePath} />
        <h1 className="m-0 mt-[-1px] pl-[21px] font-header text-[48px] leading-[58.5px] font-bold tracking-[-0.75px] text-main-fg max-md:pl-0 max-md:text-[36px] max-md:leading-[44px]">
          {title}
        </h1>
        <ArticleMeta
          authors={authors}
          createdAt={createdAt}
          timeToRead={timeToRead}
        />
      </header>

      <div className="pr-2.5 pl-[18px] max-md:px-0 min-[1200px]:col-start-1">
        {children}
      </div>

      <ResourceAside
        toc={toc}
        recommendedReading={recommendedReading}
        externalResources={externalResources}
      />

      {after && (
        <div className="pr-2.5 pl-[18px] max-md:px-0 min-[1200px]:col-start-1">
          {after}
        </div>
      )}
    </div>
  )
}
