/* globals document */
import { useState } from "react"

export const useLockBodyScroll = () => {
  const documentGlobal = typeof document !== "undefined" && document
  const [locked, setLocked] = useState<boolean>(false)

  function lock() {
    setLocked(true)
  }

  function unlock() {
    setLocked(false)
  }

  const body = documentGlobal && document.querySelector("body")
  const rootNode =
    documentGlobal &&
    document.querySelector<HTMLElement>("#___tph, astro-island")
  if (body) {
    body.style.overflow = locked ? "hidden" : ""
    if (rootNode) {
      rootNode.style.overflowY = locked ? "scroll" : ""
    }
  }

  return { locked, lock, unlock }
}
