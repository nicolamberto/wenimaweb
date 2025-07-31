'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaArrowRight } from "react-icons/fa6";

export default function ButtonCTA({ text }) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.button
            className="group rounded-full bg-[#d6ff00] py-4 uppercase font-minima text-[12px] md:text-[20px] text-[#080a00] overflow-hidden absolute bottom-0 right-4 cursor-pointer"
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
                        className="absolute inset-0 bg-[#333333] z-0"
                    />
                )}
            </AnimatePresence>

            {/* Texto que cambia de color */}
            <div className="relative transition-colors flex flex-row justify-between items-center px-5">
                <span className=" z-10  duration-300 px-4 group-hover:text-[#d6ff00]">
                    {text}
                </span>
                <motion.div 
                    animate={{ rotate: isHovered ? 90 : 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.2 }}
                >
                    <FaArrowRight className="text-[#080a00] text-[25px] group-hover:text-[#d6ff00]" />
                </motion.div>
            </div>

        </motion.button>
    )
}
