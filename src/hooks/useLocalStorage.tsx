/* globals window */
import { useEffect, useState } from "react"

export const useLocalStorage = (name: string, initialValue: string) => {
  const windowGlobal = typeof window !== "undefined" && window
  const [value, setValue] = useState(() => {
    if (windowGlobal) {
      const currentValue = windowGlobal.localStorage.getItem(name)
      return currentValue ? JSON.parse(currentValue) : initialValue
    }
    return initialValue
  })

  useEffect(() => {
    if (windowGlobal) {
      windowGlobal.localStorage.setItem(name, JSON.stringify(value))
    }
  }, [name, value, windowGlobal])

  return [value, setValue]
}
