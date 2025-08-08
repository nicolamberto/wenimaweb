'use client'

import React, { useEffect, useState, useRef } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { motion, useInView } from 'framer-motion'

export default function TypewriterText({
  text,
  className = '',
  typeSpeed = 80,
  delay = 1500,
  once = true,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once })

  const [showTypewriter, setShowTypewriter] = useState(false)
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    if (isInView) {
      setShowTypewriter(true)
      setCompleted(false)
    } else if (!once) {
      setShowTypewriter(false)
      setCompleted(false)
    }
  }, [isInView, once])

  return (
    <motion.div
      ref={ref}
      className={`${className} inline-block`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {showTypewriter && !completed ? (
        <Typewriter
          words={[text]}
          loop={1}
          typeSpeed={typeSpeed}
          deleteSpeed={50}
          delaySpeed={delay}
          onLoopDone={() => setCompleted(true)}
        />
      ) : (
        text
      )}
    </motion.div>
  )
}
