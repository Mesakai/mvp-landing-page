import { useState, useEffect } from 'react'

export function useOrientation() {
  const [isLandscape, setIsLandscape] = useState(
    window.matchMedia('(orientation: landscape)').matches
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(orientation: landscape)')

    const handleChange = (e: MediaQueryListEvent) => {
      setIsLandscape(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return isLandscape
}
