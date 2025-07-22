import React from 'react'
import { Boxes } from './background-boxes/background-boxes';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {

    const text = "Tu idea, con forma y alma.";
    const words = text.replace(/[.,]/g, '').split(' ');

    return (
        <div className='h-[100vh] w-full relative overflow-hidden'>

            <Image
                width={200}
                height={200}
                src="/images/banner/banner1nima.jpg"
                alt="Background Image"
                className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80"

            />

            {/* boxes */}
            <div className="absolute inset-0 z-0 pointer-events-auto hidden md:block">
                <Boxes />
            </div>

            {/* texto principal */}
            <div className="flex flex-col text-[50px] 2xl:text-[130px] leading-10 2xl:leading-30 2xl:-tracking-[6px] absolute left-3 2xl:left-20 pt-[140px] 2xl:pt-[200px] font-bold text-[#f1eaf0] pointer-events-none">
                <p>DISEÑO</p>
                <p className='pl-16'>CODIGO</p>
                <p>PASION</p>
            </div>

            <div className="flex flex-col absolute right-3 2xl:right-20 pointer-events-none">
                <div className="pointer-events-none pt-[140px] 2xl:pt-[200px] text-[#f1eaf0]/60 max-w-[500px] text-justify leading-6">
                    <p className=''>
                        Enjoy 18 exclusive and inspirational talks and keynotes by
                        world-renowned creative leaders and business visionaries, which
                        will enlighten us on key and trending topics such as Artificial
                        Intelligence, Digital Marketing, UX/UI, Branding Strategy, 3D Motion
                        and Animation, Web 3.0, Immersive Experiences, Business for
                        creatives and much more.
                    </p>
                </div>

            </div>

            {/* texto estirado */}
            <div className="flex justify-between w-full uppercase text-[20px] px-2 2xl:px-10 absolute bottom-10 text-white/50 pointer-events-none">
                {words.map((word, index) => (
                    <span key={index}>{word}</span>
                ))}
            </div>

        </div>
    )
}
