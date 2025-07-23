'use client'

import React from 'react'
import { links } from '@/lib/data'
import { motion, AnimatePresence } from "framer-motion"
import { FlipLink } from '@/app/elements/FlipLink'

export default function ModalMenu({ isVisible, setIsVisible }) {

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{
                        y: '100vh',
                        clipPath: 'ellipse(100% 10% at 50% 100%)',
                    }}
                    animate={{
                        y: 0,
                        clipPath: 'ellipse(100% 100% at 50% 50%)',
                    }}
                    exit={{
                        y: '-100vh',
                        clipPath: 'ellipse(100% 10% at 50% 0%)',
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 80,
                        damping: 15,
                    }}
                    className='fixed flex justify-start items-start sm:items-center inset-0 bg-[#451667] pt-40 sm:pt-0 px-4 min-h-screen z-50 overflow-hidden font-minima'
                >
                    <div className="flex flex-col w-[100%] justify-center items-start gap-5 text-[#e8c8f2]">
                        {links.map((link, index) => (
                            <FlipLink
                                key={index}
                                onClick={() => {
                                    setIsVisible(false); // cerrar modal

                                    setTimeout(() => {
                                        const section = document.querySelector(link.href);
                                        if (section) {
                                            const offset = -100; // por ejemplo, bajar 100px más
                                            const top = section.getBoundingClientRect().top + window.scrollY + offset;

                                            window.scrollTo({ top, behavior: 'smooth' });
                                        }
                                    }, 600); // esperar a que termine la animación
                                }}
                            >
                                {link.name}
                            </FlipLink>
                        ))}

                    </div>

                    <motion.button
                        whileHover={{
                            scale: 1.05,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                        onClick={() => setIsVisible(false)}
                        className='absolute top-5 right-5 bg-[#0b153a] text-white px-4 py-2 rounded-full cursor-pointer'>
                        CERRAR
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
