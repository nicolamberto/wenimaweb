'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ElectricReveal({
  children,
  className = '',
  delay = 0,
  flickers = 3,
}) {
  const elRef = useRef(null)

  useEffect(() => {
    const el = elRef.current

    // Estado inicial
    gsap.set(el, {
      opacity: 0,
      filter: 'blur(2px)',
      scale: 1,
    })

    // Esperamos que se monte
    requestAnimationFrame(() => {
      setTimeout(() => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            const tl = gsap.timeline()

            for (let i = 0; i < flickers * 2; i++) {
              const isOn = i % 2 === 0
              tl.to(el, {
                opacity: isOn ? Math.random() * 0.8 + 0.2 : 0,
                filter: 'blur(1px)',
                duration: 0.04,
                ease: 'power1.inOut',
              })
            }

            // Estado final
            tl.to(el, {
              opacity: 1,
              filter: 'none',
              scale: 1,
              duration: 0.1,
              ease: 'power2.out',
              delay: delay / 1000, // en segundos
            })
          },
        })

        ScrollTrigger.refresh()
      }, 50)
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [delay, flickers])

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  )
}
