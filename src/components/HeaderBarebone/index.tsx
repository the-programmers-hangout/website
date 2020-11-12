import React from "react"
import cx from "classnames"

import * as SC from "./styles"
import { Container } from "../Container"

interface IHeaderBareboneProps {
  above?: React.ReactNode
  title: string
  content?: React.ReactNode
  className?: string
}

interface IBoxedTitleProps {
  above?: React.ReactNode
  content?: React.ReactNode
}

const BoxedTitle: React.FC<IBoxedTitleProps> = (props) => {
  return (
    <SC.Box>
      {props.above}

      <SC.Title
        className={cx({
          "has-content-above": props.above,
          "has-content-below": props.content,
        })}
      >
        {props.children}
      </SC.Title>

      {props.content}
    </SC.Box>
  )
}

export const HeaderBarebone: React.FC<IHeaderBareboneProps> = (props) => {
  const isBoxed = props.above || props.content

  return (
    <SC.HeaderWrapper className={props.className}>
      <SC.Background />

      <Container>
        {isBoxed && (
          <BoxedTitle above={props.above} content={props.content}>
            {props.title}
          </BoxedTitle>
        )}

        {!isBoxed && <SC.SingleTitle>{props.title}</SC.SingleTitle>}
      </Container>
    </SC.HeaderWrapper>
  )
}
