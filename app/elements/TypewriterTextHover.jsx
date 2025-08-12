'use client'

import React, { useEffect, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

export default function TypewriterTextHover({
  text,
  className = '',
  typeSpeed = 80,
  delay = 1500,
  once = true, // si querés que no se repita al volver a ver en scroll
}) {
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [completed, setCompleted] = useState(false)

  // Reanimar cada vez que `text` cambia y no está vacío
  useEffect(() => {
    if (text) {
      setShouldAnimate(true)
      setCompleted(false)
    } else {
      setShouldAnimate(false)
    }
  }, [text])

  return (
    <motion.div
      className={`${className} inline-block`}
      initial={{ opacity: 0 }}
      animate={{ opacity: text ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      key={text} // 🔑 fuerza reinicio de animación cuando cambia
    >
      {shouldAnimate && !completed ? (
        <Typewriter
          words={[text]}
          loop={1}
          typeSpeed={typeSpeed}
          deleteSpeed={0}
          delaySpeed={delay}
          onTypeDone={() => setCompleted(true)}
        />
      ) : (
        <span>{text}</span>
      )}
    </motion.div>
  )
}
