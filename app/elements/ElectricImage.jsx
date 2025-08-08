'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function ElectricImage({ src, alt, width, height, className = '', delay = 0 }) {
    const imageRef = useRef(null)

    useEffect(() => {
        const el = imageRef.current

        gsap.set(el, {
            opacity: 0,
            filter: 'blur(0px)',
            scale: 1,
        })

        requestAnimationFrame(() => {
            setTimeout(() => {
                ScrollTrigger.create({
                    trigger: el,
                    start: 'top 85%',
                    once: true,
                    onEnter: () => {
                        const timeline = gsap.timeline()

                        // Simula parpadeo eléctrico
                        for (let i = 0; i < Math.floor(Math.random() * (6 - 2 + 1)) + 2; i++) {
                            timeline.to(el, {
                                opacity: Math.random() * 0.8 + 0.2,
                                duration: 0.03,
                                filter: 'blur(0px)',
                                ease: 'power1.inOut',
                            }).to(el, {
                                opacity: 0,
                                duration: 0.02,
                            })
                        }

                        // Animación final limpia
                        timeline.to(el, {
                            opacity: 1,
                            filter: 'none',
                            scale: 1,
                            duration: 0.01,
                            ease: 'power2.out',
                            delay: delay,
                        })
                    },
                })

                ScrollTrigger.refresh()
            }, 100)
        })

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }
    }, [delay])

    return (
        <div ref={imageRef} className={`inline-block ${className}`}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="w-full h-auto"
            />
        </div>
    )
}
