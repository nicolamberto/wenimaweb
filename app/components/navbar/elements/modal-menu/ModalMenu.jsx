'use client'

import React from 'react'
import { links } from '@/lib/data'
import { motion, AnimatePresence } from "framer-motion"
import { FlipLink } from '@/app/elements/FlipLink'
import Image from 'next/image'

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
                    className='fixed flex justify-start items-start sm:items-center inset-0 bg-[#333333] pt-40 sm:pt-0 px-4 min-h-screen z-50 overflow-hidden font-minima'
                >
                    <Image src="/images/bg/recursobgparticipants.png" alt="bgparticipantes" width={1000} height={1000} className='absolute opacity-10 top-32 left-1/2 transform -translate-x-1/2 w-[3500px] z-0' />

                    <div className="flex flex-col w-[100%] justify-center items-start gap-5 text-[#d6ff00] md:p-20">
                        {links.map((link, index) => (
                            <div className="w-fit relative">
                                <FlipLink
                                    className='text-[50px] uppercase sm:text-[80px] md:text-[120px] lg:text-[120px]'
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
                                <Image src={link.icon} width={50} height={50} className='w-[20px] absolute -top-3 -right-5' />
                            </div>

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
                        className='absolute top-4 right-3 bg-[#e6e6e6] text-[#333333] px-4 py-2 rounded-full cursor-pointer'>
                        CERRAR
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
