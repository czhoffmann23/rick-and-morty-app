import { useEffect, useState } from 'react'

const useDebounce = (value: unknown, delay = 500): unknown => {
  const [debouncedValue, setDebouncedValue] = useState<unknown>(value)

  useEffect(() => {
    const handler: NodeJS.Timeout = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
