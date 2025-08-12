import React from 'react'
import { motion } from 'framer-motion'
import { useIsMobile } from '../hooks/useIsMobile'

const DURATION = 0.25
const STAGGER = 0.025

export const FlipLink = ({ children, onClick, className='' }) => {
  const isMobile = useIsMobile()

  if (isMobile) {
    // Versión mobile: texto plano
    return (
      <div
        onClick={onClick}
        className={`block whitespace-nowrap cursor-pointer `}
        style={{ lineHeight: 0.85 }}
      >
        {children}
      </div>
    )
  }

  // Versión desktop con animación
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      onClick={onClick}
      className={` ${className} relative block overflow-hidden whitespace-nowrap cursor-pointer`}
      style={{ lineHeight: 0.85 }}
    >
      <div>
        {children.split('').map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: '-100%' },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split('').map((l, i) => (
          <motion.span
            variants={{
              initial: { y: '100%' },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}
