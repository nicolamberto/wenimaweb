'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

export default function ElectricText({ text, className = '', delay = 0 }) {
    const textRef = useRef(null)

    useEffect(() => {
        if (!textRef.current) return

        let split
        const ctx = gsap.context(() => {
            split = new SplitType(textRef.current, { types: 'chars' })
            const chars = split.chars

            // Estado inicial
            gsap.set(chars, {
                opacity: 0,
                filter: 'blur(2px)',
                y: 5,
            })

            const initAnimation = () => {
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

                ScrollTrigger.refresh()
            }

            // Espera a que las fuentes carguen antes de iniciar
            if (document.fonts && document.fonts.ready) {
                document.fonts.ready.then(() => {
                    requestAnimationFrame(initAnimation)
                })
            } else {
                requestAnimationFrame(initAnimation)
            }
        }, textRef)

        return () => {
            ctx.revert() // Limpia todo al desmontar
            if (split) split.revert() // Revierte el split del texto
        }
    }, [delay])

    return (
        <p
            ref={textRef}
            className={className}
        >
            {text}
        </p>
    )
}
