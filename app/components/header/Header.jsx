import React from 'react'
import { Boxes } from './background-boxes/background-boxes';
import { StretchText } from '@/app/elements/StretchText';
import Image from 'next/image';

export default function Header() {

    const text = "Tu idea, con forma y alma.";

    return (
        <div className='h-[100vh] w-full relative overflow-hidden z-30 bg-[#0b153a]'>

            {/* boxes */}
            <div className="absolute inset-0 z-0 pointer-events-auto hidden md:block">
                <Boxes />
            </div>

            {/* texto principal */}
            <div className="flex flex-col text-[40px] sm:text-[50px] md:text-[60px] xl:text-[70px] 2xl:text-[70px] leading-10 sm:leading-12 md:leading-14 xl:leading-16 2xl:-tracking-[0px] absolute left-3 md:left-20 pt-[170px] 2xl:pt-[200px] text-[#f1eaf0] pointer-events-none font-minima">
                <p className='text-start'>DESARROLLO</p>
                <p className='text-start'>DIGITAL</p>
                <div className="w-fit relative">
                    <p className='text-start'>CREATIVO.</p>
                    <Image src="/images/text-icons/titulos.webp" className='absolute -top-3 -right-5 w-[15px] md:w-[25px]' alt="creativo" width={40} height={40} />
                </div>
            </div>

            <div className=" flex-col hidden 2xl:absolute lg:block right-3 md:right-20 pointer-events-none">
                <div className="pointer-events-none 2xl:pt-[200px] text-[#f1eaf0]/60 max-w-[400px] text-justify leading-6">
                    <p className=' text-justify'>
                        Potenciamos marcas con diseño y tecnología. Creamos sitios web modernos y funcionales, desarrollamos identidades visuales sólidas y te acompañamos a construir una presencia digital que te diferencie y genere resultados reales.
                    </p>
                </div>
            </div>

            {/* texto estirado */}
            <StretchText text={text} className={'absolute bottom-10 text-white/50 pointer-events-none'} />

        </div>
    )
}
