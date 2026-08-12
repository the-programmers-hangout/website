import React, { FC } from "react"

import { IExternalResource, ITocItem } from "../../types"
import { Container } from "../Container"
import { PageSidebarLink } from "../PageSidebarLink"
import { Toc } from "../Toc"

interface IPageContentProps {
  content: JSX.Element
  toc?: ITocItem[]
  recommendedReading?: string[]
  externalResources?: IExternalResource[]
}

const sidebarHeader = "mt-0 mb-2 font-header text-lg font-bold"

export const PageContent: FC<IPageContentProps> = ({
  content,
  toc = [],
  recommendedReading,
  externalResources,
}) => {
  return (
    <>
      <div className="w-[calc(100%-305px)] flex-[1_1_calc(1vw-305px)] py-16 max-[1200px]:w-full max-[1200px]:flex-[auto]">
        <Container>{content}</Container>
      </div>

      <div className="sticky top-[100px] my-16 w-60 flex-[0_1_240px] border-l border-l-content-border px-8 text-[#172129] empty:hidden dark:text-[#f9f9f9] max-[1200px]:w-auto max-[1200px]:flex-[auto] max-[1200px]:p-16 max-md:hidden">
        {toc.length > 0 && (
          <Toc
            header={<div className={sidebarHeader}>Table of Contents</div>}
            items={toc}
          />
        )}

        {recommendedReading && (
          <div className="mt-8 flex flex-col first:mt-0">
            <div className={sidebarHeader}>Recommended reading</div>
            {recommendedReading.map((item) => {
              return <PageSidebarLink key={item} href={item} type="internal" />
            })}
          </div>
        )}

        {externalResources && (
          <div className="mt-8 flex flex-col first:mt-0">
            <div className={sidebarHeader}>External Resources</div>
            {externalResources.map((item) => {
              return (
                <PageSidebarLink
                  key={item.href}
                  href={item.href}
                  text={item.text}
                  type="external"
                />
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}
