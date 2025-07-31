'use client'

import { useEffect, useState } from 'react'

export function useIsMobile(breakpoint = 1024) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    updateSize() // setear al cargar

    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [breakpoint])

  return isMobile
}
