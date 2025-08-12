'use client'

import React, { useState, useEffect } from 'react'
import ModalMenu from './elements/modal-menu/ModalMenu'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function NavBar() {
    const [isVisible, setIsVisible] = useState(true)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            setHasScrolled(currentScrollY > 100)

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    return (
        <>
            {/* NAVBAR CONTENEDOR */}
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: isVisible ? 0 : -100 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className={`
                    w-full h-20 font-bold p-3 xl:p-8 flex justify-between items-center 
                    fixed top-0 z-50 transition-all duration-300
                    ${hasScrolled ? 'backdrop-blur-[1px] bg-black/10' : 'bg-transparent'}
                `}
            >
                <Image
                    src="/images/logos/logoverde.webp"
                    alt="logo"
                    width={200}
                    height={200}
                    className="w-[50px] h-[30px] md:w-[80px] md:h-[40px]"
                />

                {/* ESPACIO VACÍO PARA QUE EL BOTÓN ABSOLUTO NO SE PISE */}
                <div className="py-2 px-5 w-[100px] h-[40px]" />

                <Image
                    src="/images/logos/logoletrablanco.webp"
                    alt="logo"
                    width={200}
                    height={200}
                    className="hidden md:block md:w-[150px] md:h-[33px]"
                />
            </motion.div>

            {/* BOTÓN MENU SEPARADO */}
            <motion.button
                initial={{ y: -100 }}
                animate={{ y: isVisible ? 0 : -100 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 py-2 px-5 bg-[#e6e6e6] text-[#080a00] rounded-full cursor-pointer"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.9 }}
            >
                MENU
            </motion.button>

            <ModalMenu isVisible={isMenuOpen} setIsVisible={setIsMenuOpen} />
        </>
    )
}
