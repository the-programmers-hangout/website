import React, { FC, Fragment } from "react"

import { ITocItem } from "../../types"
import { humanize } from "../../utils"
import { Container } from "../Container"
import { Toc } from "../Toc"
import * as SC from "./styles"

interface IPageContentProps {
  content: JSX.Element
  toc?: ITocItem[]
  recommendedReading?: string[]
  externalResources?: string[]
}

function ExtraLink({
  item,
  external = false,
}: {
  item: string
  external?: boolean
}) {
  const Inner = ({ text }: { text: string }) => (
    <Fragment>
      <SC.ExtraLinkText>{text}</SC.ExtraLinkText>
    </Fragment>
  )

  if (external) {
    return (
      <SC.ExtraLinkExternal href={item} target="_blank">
        <Inner text={item} />
      </SC.ExtraLinkExternal>
    )
  }

  const [internalText] = item.split("/").slice(-1)

  return (
    <SC.ExtraLinkInternal to={`/resources/${item}.md`}>
      <Inner text={humanize(internalText)} />
    </SC.ExtraLinkInternal>
  )
}

export const PageContent: FC<IPageContentProps> = ({
  content,
  toc = [],
  recommendedReading,
  externalResources,
}) => {
  return (
    <>
      <SC.Content>
        <Container>{content}</Container>
      </SC.Content>

      <SC.Sidebar>
        {toc.length > 0 && (
          <Toc
            header={<SC.SidebarHeader>Table of Contents</SC.SidebarHeader>}
            items={toc}
          />
        )}

        {recommendedReading && (
          <SC.RecommendedReading>
            <SC.SidebarHeader>Recommended reading</SC.SidebarHeader>
            {recommendedReading.map(item => {
              return <ExtraLink key={item} item={item} />
            })}
          </SC.RecommendedReading>
        )}

        {externalResources && (
          <SC.ExternalResources>
            <SC.SidebarHeader>External Resources</SC.SidebarHeader>
            {externalResources.map(item => {
              return <ExtraLink key={item} item={item} external />
            })}
          </SC.ExternalResources>
        )}
      </SC.Sidebar>
    </>
  )
}
