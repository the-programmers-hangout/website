import { RefObject, useEffect } from "react"

type Mode = "top" | "bottom" | "ride"

/*
  For a `position: sticky` element (set by its classes) that may be taller
  than the viewport. If it fits, it sticks `gutter` px from the top. If not,
  it follows the scroll direction: scrolling down it rides up with the page
  until its bottom is `gutter` px above the viewport bottom, scrolling up it
  rides back down until its top is `gutter` px from the top.

  While riding, the element is switched to `position: relative` at its current
  spot so the browser scrolls it natively; styles change only when it reaches
  one of the two stops, never on every scroll event.
*/
export function useScrollAwareSticky(
  ref: RefObject<HTMLElement>,
  gutter: number
) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    let mode: Mode = "top"
    let lastY = window.scrollY
    let isSticky = false

    const fits = () => el.offsetHeight + 2 * gutter <= window.innerHeight

    const stick = (top: number, next: Mode) => {
      mode = next
      el.style.position = ""
      el.style.top = `${top}px`
    }

    // Freeze the element where it currently is: its relative offset is the
    // current position minus its in-flow position.
    const ride = () => {
      const visualTop = el.getBoundingClientRect().top
      el.style.position = "relative"
      el.style.top = "0px"
      const flowTop = el.getBoundingClientRect().top
      el.style.top = `${visualTop - flowTop}px`
      mode = "ride"
    }

    const onScroll = () => {
      const y = window.scrollY
      if (y === lastY) return
      const down = y > lastY
      lastY = y
      if (!isSticky) return

      if (fits()) {
        if (mode !== "top") stick(gutter, "top")
        return
      }
      if (mode === "ride") {
        const rect = el.getBoundingClientRect()
        const viewport = window.innerHeight
        if (down && rect.bottom <= viewport - gutter) {
          stick(viewport - el.offsetHeight - gutter, "bottom")
        } else if (!down && rect.top >= gutter) {
          stick(gutter, "top")
        }
      } else if ((mode === "top" && down) || (mode === "bottom" && !down)) {
        ride()
      }
    }

    // Size or viewport changed. Re-read whether the classes make it sticky at
    // this width (the aside is only sticky from 1200px), then keep it where it
    // is on screen so a growing tree does not jump under the pointer.
    const onResize = () => {
      const position = el.style.position
      const top = el.style.top
      el.style.position = ""
      el.style.top = ""
      isSticky = getComputedStyle(el).position === "sticky"
      if (!isSticky) {
        mode = "top"
        return
      }
      el.style.position = position
      el.style.top = top
      if (fits()) stick(gutter, "top")
      else ride()
    }

    onResize()
    const observer = new ResizeObserver(onResize)
    observer.observe(el)
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize)
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
      el.style.position = ""
      el.style.top = ""
    }
  }, [ref, gutter])
}
