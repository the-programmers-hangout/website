import { useEffect } from "react"
import useLocation from "../../hooks/useLocation"

export default function useMatchingPath(path: string, callback: () => void) {
  const { isMatchingPath } = useLocation()

  useEffect(() => {
    if (isMatchingPath(path)) {
      callback()
    }
  }, [path, isMatchingPath, callback])
}
