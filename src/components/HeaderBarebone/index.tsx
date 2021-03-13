import React, { Component } from "react"
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

type HeaderBareboneState = {
  scrollY: number
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
  return <SC.StickyContainerWrapper {...restProps}>{children}</SC.StickyContainerWrapper>
}

const debounce = (fn) => {
  let frame
  return (...params) => {
    if (frame) {
      cancelAnimationFrame(frame)
    }
    frame = requestAnimationFrame(() => {
      fn(...params)
    })
  }
}

export class HeaderBarebone extends Component<IHeaderBareboneProps, HeaderBareboneState> {
  controller: AbortController
  state: HeaderBareboneState = {
    scrollY: 0
  }

  constructor(props) {
    super(props)
    this.tick = this.tick.bind(this)
  }

  tick() {
    if (typeof window !== 'undefined') {
      this.setState({
        scrollY: window.scrollY
      })
    }
  }

  componentDidMount() {
    this.controller = new AbortController()
    document.addEventListener('scroll', debounce(this.tick), { passive: true, signal: this.controller.signal })
    this.tick()
  }

  componentWillUnmount() {
    this.controller.abort()
  }

  render() {
    const props = this.props;
    const isBoxed = props.above || props.content

    if (this.state.scrollY <= 250) {
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
    } else {
      return (
        <SC.HeaderWrapperSticky className={props.className}>
          <SC.Background />

          <StickyContainer>
            {isBoxed && (
              <StickyBoxedTitle above={props.above}>
                {props.title}
              </StickyBoxedTitle>
            )}

            {!isBoxed && <SC.SingleTitle>{props.title}</SC.SingleTitle>}
          </StickyContainer>
        </SC.HeaderWrapperSticky>
      )
    }
  }
}
