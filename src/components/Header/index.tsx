import React from "react"
import cx from "classnames"
import { PreviewCard } from "@base-ui/react/preview-card"

import { HeaderBarebone } from "../HeaderBarebone"
import { Breadcrumb } from "../Breadcrumb"
import { StackedAvatars } from "../StackedAvatars"

interface IHeaderProps {
  relativePath: string
  basePath: string
  title: string
  authors?: {
    avatar: string
    hash: string
    name: string
  }[]
  createdAt: string
  timeToRead: number
  shifted: boolean
}

export const Header: React.FC<IHeaderProps> = ({
  basePath,
  relativePath,
  title,
  authors,
  createdAt,
  timeToRead,
  shifted,
}) => {
  const date = new Date(createdAt)
  const month = date.toLocaleString("default", { month: "long" })
  const day = date.getDate()
  const year = date.getUTCFullYear()
  const dateToHuman = `${month} ${day}, ${year}`

  return (
    <HeaderBarebone
      above={<Breadcrumb relativePath={relativePath} basePath={basePath} />}
      title={title}
      className={cx({ shifted })}
      content={
        <div className="flex items-center max-[1200px]:flex-col max-[1200px]:items-start">
          {authors && (
            <div className="header-meta">
              <StackedAvatars authors={authors} />
              {authors.length > 1 ? (
                <PreviewCard.Root delay={0} closeDelay={0}>
                  <PreviewCard.Trigger className="cursor-default border-b border-dashed border-main-fg/90">
                    {authors.length} contributor{authors.length > 1 && "s"}
                  </PreviewCard.Trigger>
                  <PreviewCard.Portal>
                    <PreviewCard.Positioner sideOffset={8}>
                      <PreviewCard.Popup className="rounded bg-main/70 p-2 text-main-fg backdrop-blur-[14px]">
                        <PreviewCard.Arrow className="data-[side=bottom]:top-[-8px] data-[side=bottom]:rotate-180">
                          <svg width="16" height="8" viewBox="0 0 16 8">
                            <path
                              d="M8 0 L16 8 L0 8 Z"
                              className="fill-[color-mix(in_oklab,var(--main-bg)_70%,transparent)]"
                            />
                          </svg>
                        </PreviewCard.Arrow>
                        {authors
                          .map((author) => `${author.name}#${author.hash}`)
                          .join(", ")}
                      </PreviewCard.Popup>
                    </PreviewCard.Positioner>
                  </PreviewCard.Portal>
                </PreviewCard.Root>
              ) : (
                `${authors[0].name}#${authors[0].hash}`
              )}
            </div>
          )}
          {dateToHuman && <div className="header-meta">{dateToHuman}</div>}
          <div className="header-meta">
            {timeToRead} minute{timeToRead !== 1 && "s"} read time
          </div>
        </div>
      }
    />
  )
}
