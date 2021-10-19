/* globals window */
import { useEffect, useState } from "react"

export const useLocalStorage = <Value extends unknown = unknown>(
  name: string,
  initialValue: Value
) => {
  const windowGlobal = typeof window !== "undefined" && window

  const [value, setValue] = useState<Value>(() => {
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

  return [value, setValue] as const
}
