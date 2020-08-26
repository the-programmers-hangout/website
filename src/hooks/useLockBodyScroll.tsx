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
  const gatsbyNode =
    documentGlobal && document.querySelector<HTMLDivElement>("#___gatsby")
  if (body && gatsbyNode) {
    body.style.overflow = locked ? "hidden" : ""
    gatsbyNode.style.overflowY = locked ? "scroll" : ""
  }

  return { locked, lock, unlock }
}
