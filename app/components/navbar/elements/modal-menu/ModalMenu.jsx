'use client'

import React from 'react'
import { links } from '@/lib/data'
import { motion, AnimatePresence } from "framer-motion"
import { FlipLink } from '@/app/components/scroll/elements/FlipLink'

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
                    className='absolute flex justify-center items-center inset-0 bg-indigo-300 min-h-screen z-50 overflow-hidden'
                >
                    <div className="flex flex-col w-[80%] justify-center items-start gap-0">
                        {links.map((link, index) => {

                            return (
                                <FlipLink key={index} href={'#'}>
                                    {link.name}
                                </FlipLink>
                            )
                        })}
                    </div>

                    <button
                        onClick={() => setIsVisible(false)}
                        className='absolute top-5 right-5 bg-red-500 text-white px-4 py-2 rounded-full'>
                        CERRAR
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
