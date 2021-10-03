import { useEffect, useState } from "react"

export function useMedia<Value extends unknown>(
  queries: string[],
  values: Value[],
  defaultValue: Value
) {
  const [currentValue, setCurrentValue] = useState(defaultValue)

  useEffect(() => {
    const windowGlobal = typeof window !== "undefined" && window

    if (!windowGlobal) return

    const mediaQueries = queries.map((query) => windowGlobal.matchMedia(query))

    const getCurrentValue = () => {
      const index = mediaQueries.findIndex((value) => value.matches)
      return values[index] || defaultValue
    }

    setCurrentValue(getCurrentValue)

    const handler = () => setCurrentValue(getCurrentValue)

    mediaQueries.forEach((query) => query.addEventListener("change", handler))

    return () =>
      mediaQueries.forEach((query) =>
        query.removeEventListener("change", handler)
      )
  }, [queries, values, defaultValue])

  return currentValue
}
