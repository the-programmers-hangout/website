import React, { FC, HTMLAttributes } from "react"
import { Footer } from "../Footer"
import { Markdown } from "../Markdown"
import { ResourcesList } from "../ResourcesList"
import * as SC from "./styles"

interface IResourcesHomeContent extends HTMLAttributes<HTMLDivElement> {
  language: string
  body: any
}

export const ResourcesHomeContent: FC<IResourcesHomeContent> = (props) => {
  return (
    <>
      <SC.Title>Resources</SC.Title>
      <SC.Intro>
        Written by and for TPH members, short introduction topics to commonly
        answered questions.
      </SC.Intro>
      <ResourcesList relativeDirectory={props.language} />
      <SC.Box>
        <SC.Title>Extra resources</SC.Title>
        <Markdown content={props.body} />
      </SC.Box>
      <Footer />
    </>
  )
}
