import { RefObject, useEffect } from "react"

/*
  Drives the `top` of a `position: sticky` element that may be taller than the
  viewport. If it fits, it sticks `gutter` px from the top. If it does not, it
  follows the scroll direction: scrolling down it rides up until its bottom is
  `gutter` px above the viewport bottom, scrolling up it rides back down until
  its top is `gutter` px from the top. Every part stays reachable.
*/
export function useScrollAwareSticky(
  ref: RefObject<HTMLElement>,
  gutter: number
) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    let lastY = window.scrollY
    let top = gutter

    const apply = (delta: number) => {
      const minTop = Math.min(
        gutter,
        window.innerHeight - el.offsetHeight - gutter
      )
      top = Math.min(gutter, Math.max(minTop, top - delta))
      el.style.top = `${top}px`
    }

    const onScroll = () => {
      const y = window.scrollY
      apply(y - lastY)
      lastY = y
    }
    const onResize = () => apply(0)

    apply(0)
    const observer = new ResizeObserver(onResize)
    observer.observe(el)
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize)
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
    }
  }, [ref, gutter])
}
