'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

export default function ElectricText({ text, className = '', delay = 0 }) {
    const textRef = useRef(null)

    useEffect(() => {
        const split = new SplitType(textRef.current, {
            types: 'chars',
        })

        const chars = split.chars

        gsap.set(chars, {
            opacity: 0,
            filter: 'blur(2px)',
            y: 10,
        })

        // Usamos requestAnimationFrame + setTimeout para asegurar que el layout esté listo
        requestAnimationFrame(() => {
            setTimeout(() => {
                ScrollTrigger.create({
                    trigger: textRef.current,
                    start: 'top 85%',
                    once: true,
                    onEnter: () => {
                        chars.forEach((char) => {
                            const randomDelay = Math.random() * 0.2

                            gsap.to(char, {
                                opacity: 1,
                                filter: 'blur(0px)',
                                y: 0,
                                duration: 0.05,
                                delay: delay + randomDelay,
                                repeat: 3,
                                yoyo: true,
                                ease: 'power1.inOut',
                                onComplete: () => {
                                    gsap.set(char, {
                                        opacity: 1,
                                        filter: 'none',
                                        y: 0,
                                    })
                                },
                            })
                        })
                    },
                })

                ScrollTrigger.refresh() // Recalcula después de que todo se cargó bien
            }, 100) // este delay ayuda a estabilizar el layout
        })

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }
    }, [delay])


    return (
        <p
            ref={textRef}
            className={`${className}`}
        >
            {text}
        </p>
    )
}
