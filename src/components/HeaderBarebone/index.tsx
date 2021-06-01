import React, { useEffect, useState } from "react"
import { useDebounce, useWindowScroll } from "react-use"
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

const StickyBoxedTitle: React.FC<IBoxedTitleProps> = (props) => {
  return (
    <SC.StickyBox>
      {props.above}

      <SC.StickyTitle
        className={cx({
          "has-content-above": props.above,
          "has-content-below": props.content,
        })}
      >
        {props.children}
      </SC.StickyTitle>

      {props.content}
    </SC.StickyBox>
  )
}

const StickyContainer: React.FC = ({ children, ...restProps }) => {
  return (
    <SC.StickyContainerWrapper {...restProps}>
      {children}
    </SC.StickyContainerWrapper>
  )
}

export const HeaderBarebone = (props: IHeaderBareboneProps) => {
  const { y } = useWindowScroll()
  const [scrollY, setScrollY] = useState(0)

  const [, cancel] = useDebounce(
    () => {
      setScrollY(y)
    },
    10,
    [y]
  )

  useEffect(() => {
    return () => {
      cancel()
    }
  }, [cancel])

  const isBoxed = props.above || props.content

  const stickyHeader = (
    <SC.HeaderWrapperSticky className={props.className}>
      <SC.Background />

      <StickyContainer>
        <StickyBoxedTitle above={props.above}>{props.title}</StickyBoxedTitle>
      </StickyContainer>
    </SC.HeaderWrapperSticky>
  )

  return (
    <>
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
      {scrollY >= 270 && stickyHeader}
    </>
  )
}
