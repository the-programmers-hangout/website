import React, { useEffect, useState } from "react"
import { useDebounce, useWindowScroll } from "react-use"
import { cn } from "../../lib/cn"
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
  children?: React.ReactNode
}

const titleBase =
  "mt-0 mb-0 font-header text-[34px] leading-[41px] tracking-[-1.75px]"

const BoxedTitle: React.FC<IBoxedTitleProps> = (props) => {
  return (
    <div className="absolute bottom-10 -ml-4 inline-flex max-w-[650px] flex-col bg-main/70 p-4 backdrop-blur-[14px] max-[1200px]:right-8 max-[1200px]:left-8 max-[1200px]:ml-0 max-[1200px]:max-w-full max-md:static max-md:right-0 max-md:left-0 max-md:mx-0 max-md:my-8">
      {props.above}
      <h1
        className={cn(
          titleBase,
          props.above && "mt-2",
          props.content && "mb-2"
        )}
      >
        {props.children}
      </h1>
      {props.content}
    </div>
  )
}

const StickyBoxedTitle: React.FC<IBoxedTitleProps> = (props) => {
  return (
    <div className="absolute top-0 bottom-0 inline-flex w-full flex-col justify-center pl-16 text-base backdrop-blur-[14px] max-[1200px]:right-8 max-[1200px]:left-8 max-[1200px]:ml-0 max-[1200px]:max-w-full max-md:static max-md:my-8">
      {props.above}
      <h1
        className={cn(
          titleBase,
          "text-xl leading-none",
          props.above && "mb-2",
          props.content && "mb-4"
        )}
      >
        {props.children}
      </h1>
      {props.content}
    </div>
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
  const shifted = props.className

  const stickyHeader = (
    <div
      className={cn(
        "header-sticky fixed z-[1] flex h-[74px] w-full overflow-hidden before:absolute before:top-[14px] before:left-0 before:z-[1] before:block before:h-12 before:w-px before:bg-white/70 before:content-[''] [&.shifted]:w-[calc(100%-305px)] [&.shifted]:pr-[305px] max-[1200px]:w-full! max-[1200px]:pr-0!",
        shifted
      )}
    >
      <div className="header-bg" />
      <div className="m-0 w-full">
        <StickyBoxedTitle above={props.above}>{props.title}</StickyBoxedTitle>
      </div>
    </div>
  )

  return (
    <>
      <div
        className={cn(
          "relative flex h-[233px] w-full pt-[67px] [&.shifted]:w-[calc(100%-305px)] [&.shifted]:pr-[305px] max-[1200px]:w-full! max-[1200px]:pr-0! max-md:h-auto max-md:min-h-[233px] max-md:items-end",
          shifted
        )}
      >
        <div className="header-bg" />

        <Container>
          {isBoxed && (
            <BoxedTitle above={props.above} content={props.content}>
              {props.title}
            </BoxedTitle>
          )}

          {!isBoxed && (
            <h1
              className={cn(
                titleBase,
                "absolute bottom-[100px] text-white [text-shadow:0_3px_5px_rgba(0,0,0,0.3)] after:absolute after:top-full after:left-0 after:mt-2 after:h-[5px] after:w-[100px] after:bg-white after:content-['']"
              )}
            >
              {props.title}
            </h1>
          )}
        </Container>
      </div>
      {scrollY >= 270 && stickyHeader}
    </>
  )
}
