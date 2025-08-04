'use client';

import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { contact } from '@/lib/data';

export default function Contact() {

    const [hovered, setHovered] = useState(false);

    return (
        <div className='w-full min-h-[100vh] bg-[#333333] flex flex-col items-center justify-center relative px-3 xl:px-14 pt-[200px] pb-[50px] xl:pt-[400px] xl:pb-[200px] overflow-hidden'>
            <Image src={'/images/text-icons/w-fluo.webp'} alt='logo doble v' width={100} height={100} className='absolute top-5 right-5 xl:top-10 xl:right-10 w-[50px] sm:w-[70px]' />
            <Image src="/images/bg/recursobgparticipants.png" alt="bgparticipantes" width={1000} height={1000} className='absolute opacity-10 -top-44 left-1/2 transform -translate-x-1/2  w-[2400px] object-cover z-0' />

            <form className="w-full relative">

                <p className='absolute text-[#e6e6e6] text-[40px] sm:text-[60px] md:text-[70px] xl:text-[100px] font-minima -top-14 md:-top-25 xl:-top-40 left-0'>
                    CONTANOS
                </p>
                <p className='absolute text-[#e6e6e6] text-[35px] sm:text-[60px] md:text-[70px] xl:text-[100px] font-minima -bottom-13 md:-bottom-25 xl:-bottom-40 right-0 '>
                    TU IDEA
                </p>

                <div className="flex flex-col gap-4 md:gap-10">
                    {/* Contenedor 2 columnas */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                        {/* Columna 1: Nombre y Email */}
                        <div className="flex flex-col w-full md:w-1/2 gap-4 md:gap-7">
                            <input
                                type="text"
                                placeholder="NOMBRE"
                                className="w-full bg-[#e6e6e6] text-[20px] focus:border-2 p-2 focus:outline-none focus:border-[#d6ff00] transition h-full"
                            />
                            <input
                                type="email"
                                placeholder="EMAIL"
                                className="w-full bg-[#e6e6e6] text-[20px] focus:border-2 p-2 focus:outline-none focus:border-[#d6ff00] h-full"
                            />
                        </div>

                        {/* Columna 2: Mensaje */}
                        <div className="w-full md:w-1/2">
                            <textarea
                                placeholder="MENSAJE"
                                className="w-full h-full min-h-[150px] bg-[#e6e6e6] text-[20px] focus:border-2 p-2 resize-none focus:outline-none focus:border-[#d6ff00]"
                            />
                        </div>
                    </div>

                    {/* Botón animado con framer-motion */}
                    <motion.button
                        type="submit"
                        onHoverStart={() => setHovered(true)}
                        onHoverEnd={() => setHovered(false)}
                        className="w-full bg-[#d6ff00] text-[#333333] font-minima py-3 uppercase text-[20px] md:text-[30px] cursor-pointer flex justify-center items-center relative overflow-hidden"
                    >
                        <motion.span
                            animate={{ x: hovered ? -20 : 0 }}
                            transition={{ type: 'tween', duration: 0.2 }}
                            className="mr-2"
                        >
                            CONTACTAR
                        </motion.span>
                        <motion.div
                            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -20 }}
                            transition={{ type: 'tween', duration: 0.2 }}
                        >
                            <FaArrowRightLong size={28} />
                        </motion.div>
                    </motion.button>
                </div>
            </form>
            <div className="w-full px-3 py-8 mt-[80px] sm:mt-[120px] lg:mt-[250px] flex justify-center items-center">
                <div className="flex flex-wrap justify-between w-full gap-6">
                    {contact.map((item, idx) => (
                        <div key={idx} className="flex items-center lg:justify-center gap-4 w-full sm:w-[48%] lg:w-[23%]">
                            <div className="p-3 bg-[#d6ff00] rounded-full text-[#333333] text-[20px]">
                                {item.icon}
                            </div>
                            <span className="text-[#d6ff00] text-base md:text-[22px] lg:text-[20px] font-medium">
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
