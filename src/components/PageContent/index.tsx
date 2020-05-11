import React, { FC, Fragment } from "react"

import { humanize } from "../../utils"
import * as SC from "./styles"
import { Container } from "../Container"

interface IPageContentProps {
  content: JSX.Element
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
  recommendedReading,
  externalResources,
}) => {
  return (
    <>
      <SC.Content>
        <Container>{content}</Container>
      </SC.Content>

      <SC.Sidebar>
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
