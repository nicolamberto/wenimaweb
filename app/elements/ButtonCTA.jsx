'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaArrowRight } from "react-icons/fa6";

export default function ButtonCTA({ text, className = '' }) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.button
            className={`group rounded-full bg-[#d6ff00] py-1 uppercase font-minima text-[12px] md:text-[20px] text-[#080a00] cursor-pointer overflow-hidden ${className}    `}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Fondo blanco animado */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: '0%' }}
                        exit={{ y: '-100%' }}
                        transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.1 }}
                        className="absolute inset-0 bg-[#333333] z-0 w-[400px] h-full -left-1"
                    />
                )}
            </AnimatePresence>

            {/* Texto que cambia de color */}
            <div className="relative transition-colors flex flex-row justify-between items-center px-5">
                <motion.span 
                initial={{ x: 17 }}
                animate={{
                    x: 0,
                }}
                transition={{
                    x: { duration: 0.1, ease: 'easeInOut', delay: 1.7 },
                }}
                className=" z-10  duration-300 px-4 group-hover:text-[#d6ff00]">
                    {text}
                </motion.span>
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{
                        rotate: isHovered ? 90 : 0,
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{
                        x: { duration: 0.2, ease: 'easeInOut', delay: 2 },
                        opacity: { duration: 0.2, ease: 'easeInOut', delay: 2 },
                        rotate: { duration: 0.2, ease: 'easeInOut', delay: 0.2 },
                    }}
                >
                    <FaArrowRight className="text-[#080a00] text-[20px] sm:text-[25px] group-hover:text-[#d6ff00]" />
                </motion.div>
            </div>

        </motion.button>
    )
}
