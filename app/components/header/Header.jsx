import React from 'react'
import { Boxes } from './background-boxes/background-boxes';
import { StretchText } from '@/app/elements/StretchText';
import Image from 'next/image';

export default function Header() {

    const text = "Tu idea, con forma y alma.";

    return (
        <div className='h-[100vh] w-full relative overflow-hidden z-30 bg-black'>

            {/* Imagen de fondo */}
            <Image
                src="/images/banner/bannerdesktop.jpg"
                alt="Banner de fondo"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
                className="absolute inset-0 z-[-10] opacity-50"
            />

            {/* boxes */}
            <div className="absolute inset-0 z-0 pointer-events-auto hidden md:block">
                <Boxes />
            </div>

            <div className=" w-full flex justify-between items-center absolute px-3 md:px-20 mt-[170px] 2xl:mt-[200px] pointer-events-none border-yellow-400">
                {/* texto principal */}
                <div className="flex flex-col text-[40px] sm:text-[50px] md:text-[60px] xl:text-[70px] 2xl:text-[100px] leading-10 sm:leading-12 md:leading-14 xl:leading-24 2xl:-tracking-[0px] font-minima">
                    <p className='text-start text-[#e6e6e6]'>DESARROLLO</p>
                    <p className='text-start text-[#e6e6e6]'>DIGITAL</p>
                    <div className="w-fit relative">
                        <p className='text-start text-[#e6e6e6]'>CREATIVO.</p>
                        <Image
                            src="/images/text-icons/titulos.webp"
                            className='absolute -top-3 -right-5 w-[15px] md:w-[25px]'
                            alt="creativo"
                            width={40}
                            height={40}
                        />
                    </div>
                </div>

                {/* texto descriptivo lateral */}
                <div className="hidden lg:block h-full text-center">
                    <div className="text-[#d6ff00] max-w-[400px] text-justify leading-10">
                        <p className='text-justify'>
                            Potenciamos marcas con diseño y tecnología. Creamos sitios web modernos y funcionales, desarrollamos identidades visuales sólidas y te acompañamos a construir una presencia digital que te diferencie y genere resultados reales.
                        </p>
                    </div>
                </div>

            </div>

            {/* texto estirado */}
            <StretchText text={text} className={'absolute bottom-10 text-white/50 pointer-events-none'} />
        </div>
    )
}
