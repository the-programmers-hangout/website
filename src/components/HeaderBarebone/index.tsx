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
  scrollY: Number
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

  constructor(props) {
    super(props)
    this.tick = this.tick.bind(this)
  }

  tick() {
    this.setState({
      scrollY: window.scrollY
    })
  }

  componentWillMount() {
    this.tick()
  }

  componentDidMount() {
    document.addEventListener('scroll', debounce(this.tick), { passive: true })
  }

  render() {
    const props = this.props;
    const isBoxed = props.above || props.content

    return (
        <SC.HeaderWrapper className={props.className}>
        <SC.Background />

        <Container>
            {(isBoxed && this.state.scrollY < 30) && (
            <BoxedTitle above={props.above} content={props.content}>
                {props.title}
            </BoxedTitle>
            )}

            {!isBoxed && <SC.SingleTitle>{props.title}</SC.SingleTitle>}
        </Container>
        </SC.HeaderWrapper>
    )
  }
}
