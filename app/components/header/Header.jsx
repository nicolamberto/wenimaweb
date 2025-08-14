'use client'

import React from 'react'
import { StretchText } from '@/app/elements/StretchText';
import Image from 'next/image';
import ButtonCTA from '@/app/elements/ButtonCTA';
import ElectricText from '@/app/elements/ElectricText';
import { motion } from 'framer-motion';
import ElectricReveal from '@/app/elements/ElectricReveal';

const MotionImage = motion(Image)

export default function Header() {

    const text = "Tu idea, con forma y alma.";

    return (
        <div
            id='inicio'
            className='h-[90vh] xl:h-[100vh] w-full relative overflow-hidden z-30 bg-black'>

            {/* Imagen de fondo */}
            <Image
                src="/images/banner/bannerdesktop.webp"
                alt="Banner de fondo"
                fill
                objectFit="cover"
                quality={100}
                priority
                className="absolute inset-0 z-[-10] opacity-50"
            />

            {/* boxes */}

            <div className=" w-full flex flex-col min-h-[90vh] xl:min-h-fit  xl:flex-row justify-around items-end absolute px-3 xl:px-20 xl:mt-[250px]  border-yellow-400">
                {/* texto principal */}
                <div className="flex w-full relative flex-col text-[clamp(35px,10vw,50px)] sm:text-[50px] md:text-[60px] xl:text-[70px] 2xl:text-[100px] leading-10 sm:leading-12 md:leading-14 xl:leading-24 2xl:-tracking-[0px] font-minima">
                    <ElectricText text={'DESARROLLO'} className={'text-start text-[#e6e6e6] pointer-events-none select-none'} />
                    <ElectricText text={'DIGITAL'} className={'text-start text-[#e6e6e6] pointer-events-none select-none'} delay={0.35} />
                    <div className="w-fit relative">
                        <ElectricText text={'CREATIVO'} className={'text-start text-[#e6e6e6] pointer-events-none select-none'} delay={0.70} />
                        <MotionImage
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.2 }}
                            src="/images/text-icons/titulos.webp"
                            className='absolute -top-3 -right-5 w-[15px] md:w-[25px]'
                            alt="creativo"
                            width={40}
                            height={40}
                        />
                    </div>
                    <div className="">

                    </div>
                    <ButtonCTA href='#contacto' text="CONTACTAR" className='absolute text-[13px] left-0 -bottom-16 leading-8 py-1 hover:border hover:border-[#d6ff00]' />

                </div>

                {/* texto descriptivo lateral */}
                <div className="block h-full text-center px-1">
                    <ElectricReveal flickers={3} delay={400} className="text-[#d6ff00] max-w-[550px] text-justify leading-6 sm:leading-8 relative">
                        <div className="absolute -top-8 right-0 z-10">
                            <Image src="/images/text-icons/iconoflecha.webp" alt="flecha" width={40} height={40} className='-rotate-90 w-[15px] md:w-[25px]' />
                        </div>
                        <p className='text-justify text-[13px] md:text-[20px] tracking-[3px] leading-5'>
                            Potenciamos marcas con diseño y tecnología. Creamos sitios web modernos y funcionales, desarrollamos identidades visuales sólidas y te acompañamos a construir una presencia digital que te diferencie y genere resultados reales.
                        </p>
                    </ElectricReveal>

                </div>

            </div>

            {/* texto estirado */}
            <StretchText text={text} delay={2500} className={'absolute bottom-10 text-white/50 pointer-events-none'} />
        </div>
    )
}
