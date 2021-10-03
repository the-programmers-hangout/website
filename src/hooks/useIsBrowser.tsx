import { useEffect, useState } from "react"

export function useIsBrowser() {
  const isBrowserCheck = () => typeof window !== "undefined"

  const [isBrowser, setIsBrowser] = useState(isBrowserCheck)

  useEffect(() => setIsBrowser(isBrowserCheck), [])

  return isBrowser
}
