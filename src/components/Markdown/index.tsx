import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import React, { FC, useEffect, useRef } from "react"
import { cn } from "../../lib/cn"

interface IMarkdownProps {
  // Pre-rendered HTML (built at compile time from Markdown/MDX content).
  content: string
  className?: string
}

/*
  Marks code blocks that can scroll sideways: data-scroll-start when there is
  content to the left, data-scroll-end when there is more to the right. The
  CSS draws an edge fade for each (see .article-prose pre in global.css).
*/
function trackCodeScroll(container: HTMLElement): () => void {
  const blocks = Array.from(container.querySelectorAll("pre"))

  const update = (pre: HTMLElement) => {
    const maxScroll = pre.scrollWidth - pre.clientWidth
    pre.toggleAttribute("data-scroll-start", pre.scrollLeft > 1)
    pre.toggleAttribute("data-scroll-end", pre.scrollLeft < maxScroll - 1)
  }

  const onScroll = (event: Event) => update(event.currentTarget as HTMLElement)
  const updateAll = () => blocks.forEach(update)
  // Watch the <code> too: when the web font swaps in, the lines get wider
  // but the <pre> box keeps its size.
  const observer = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      const pre = entry.target.closest("pre")
      if (pre) update(pre)
    })
  })

  blocks.forEach((pre) => {
    update(pre)
    pre.addEventListener("scroll", onScroll, { passive: true })
    observer.observe(pre)
    const code = pre.querySelector("code")
    if (code) observer.observe(code)
  })
  document.fonts?.ready.then(updateAll)

  return () => {
    observer.disconnect()
    blocks.forEach((pre) => pre.removeEventListener("scroll", onScroll))
  }
}

/*
  Wraps Markdown-generated HTML, already syntax-highlighted at build time
  (lib/markdown.ts). `prose` (typography plugin) is the base and the
  `.markdown` layer (global.css) reproduces the TPH-specific design.
*/
export const Markdown: FC<IMarkdownProps> = ({ content, className }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(
    () => (ref.current ? trackCodeScroll(ref.current) : undefined),
    [content]
  )

  return (
    <div
      ref={ref}
      className={cn("markdown prose max-w-none", className)}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
