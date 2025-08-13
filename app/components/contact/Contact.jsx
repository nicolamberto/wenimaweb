'use client';

import React, { useState, useRef } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { contact } from '@/lib/data';
import { SectionTitle } from '@/app/elements/SectionTitle';
import ElectricText from '@/app/elements/ElectricText';
import ElectricReveal from '@/app/elements/ElectricReveal';
import emailjs from 'emailjs-com';

export default function Contact() {
    const [hovered, setHovered] = useState(false);
    const [loading, setLoading] = useState(false);
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            'service_nq4vsml',
            'template_1kv5zc8',
            formRef.current,
            'R6vv-DGFwoNEPAlSG'
        )
            .then(() => {
                alert('Mensaje enviado correctamente ✅');
                formRef.current.reset();
            })
            .catch((error) => {
                console.error(error);
                alert('Hubo un problema al enviar el mensaje ❌');
            })
            .finally(() => setLoading(false));
    };

    return (
        <div
            id='contacto'
            className='w-full min-h-[100vh] bg-[#333333] flex flex-col items-center justify-center relative px-3 xl:px-14 pt-[200px] pb-[50px] xl:pt-[400px] xl:pb-[50px] overflow-hidden'>

            {/* Icono esquina */}
            <Image src={'/images/text-icons/w-fluo.webp'} alt='logo doble v' width={500} height={500} className='absolute top-5 right-5 xl:top-10 xl:right-10 w-[50px] sm:w-[70px] xl:w-[140px]' />
            {/* Fondo */}
            <Image src="/images/bg/recursobgparticipants.png" alt="bgparticipantes" width={1000} height={1000} className='absolute opacity-10 -top-44 left-1/2 transform -translate-x-1/2  w-[2400px] object-cover z-0' />

            <form ref={formRef} onSubmit={handleSubmit} className="w-full relative">
                <div className="font-minima leading-9 sm:leading-16 w-full flex flex-col lg:flex-row lg:justify-between text-[#e6e6e6] text-[45px] sm:text-[80px] lg:text-[70px] xl:text-[80px] 2xl:text-[100px] px-3 sm:px-4 lg:px-10 text-nowrap pb-10">
                    <ElectricText text={'CONTANOS'} className="w-full text-start" />
                    <ElectricText text={'TU IDEA'} className="w-full text-start lg:text-end" delay={0.35} />
                </div>

                <div className="flex flex-col gap-4 md:gap-10">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                        <div className="flex flex-col w-full md:w-1/2 gap-4 md:gap-7">
                            <input
                                type="text"
                                name="name"
                                placeholder="NOMBRE"
                                required
                                className="w-full bg-[#e6e6e6] text-[20px] focus:border-2 p-2 focus:outline-none focus:border-[#d6ff00] transition h-full"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="EMAIL"
                                required
                                className="w-full bg-[#e6e6e6] text-[20px] focus:border-2 p-2 focus:outline-none focus:border-[#d6ff00] h-full"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <textarea
                                name="message"
                                placeholder="MENSAJE"
                                required
                                className="w-full h-full min-h-[150px] bg-[#e6e6e6] text-[20px] focus:border-2 p-2 resize-none focus:outline-none focus:border-[#d6ff00]"
                            />
                        </div>
                    </div>

                    <motion.button
                        type="submit"
                        disabled={loading}
                        onHoverStart={() => setHovered(true)}
                        onHoverEnd={() => setHovered(false)}
                        className="w-full bg-[#d6ff00] text-[#333333] font-minima py-3 uppercase text-[20px] md:text-[30px] cursor-pointer flex justify-center items-center relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <motion.span
                            animate={{ x: hovered ? -20 : 0 }}
                            transition={{ type: 'tween', duration: 0.2 }}
                            className="mr-2"
                        >
                            {loading ? 'ENVIANDO...' : 'CONTACTAR'}
                        </motion.span>
                        {!loading && (
                            <motion.div
                                animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -20 }}
                                transition={{ type: 'tween', duration: 0.2 }}
                            >
                                <FaArrowRightLong size={28} />
                            </motion.div>
                        )}
                    </motion.button>
                </div>
            </form>

            {/* Bloque de contactos */}
            <div className="w-full px-3 py-8 mt-[80px] sm:mt-[120px] lg:mt-[250px] flex justify-center items-center">
                <div className="flex flex-wrap justify-between w-full gap-6">
                    {contact.map((item, idx) => (
                        <ElectricReveal key={idx} flickers={3} delay={400} className="flex items-center lg:justify-center gap-4 w-full sm:w-[48%] lg:w-[23%]">
                            <div className="p-3 bg-[#d6ff00] rounded-full text-[#333333] text-[20px]">
                                {item.icon}
                            </div>
                            <span className="text-[#d6ff00] text-base md:text-[22px] lg:text-[20px] font-medium">
                                {item.text}
                            </span>
                        </ElectricReveal>
                    ))}
                </div>
            </div>
        </div>
    );
}
