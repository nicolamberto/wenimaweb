import Image from 'next/image';
import React from 'react';
import { links } from '@/lib/data';
import { FlipLink } from '@/app/elements/FlipLink';
import { useIsMobile } from '@/app/hooks/useIsMobile';

export default function Footer() {

    const isMobile = useIsMobile();


    return (
        <div className={` ${isMobile ? 'block relative' : 'fixed'} bottom-0 w-full h-[50vh] sm:h-[40vh] lg:h-[60vh] 2xl:h-[75vh] bg-[#080a00] z-0 overflow-visible`}>
            <Image
                src={'/images/bg/bgfooter.webp'}
                alt='logo'
                width={isMobile ? 400 : 1920}
                height={isMobile ? 150 : 500}
                className='h-fit w-[200vw] md:w-full z-0'
            />
            <Image
                src={'/images/logos/footer.webp'}
                alt='logo'
                width={isMobile ? 300 : 1000}
                height={isMobile ? 150 : 500}
                className='md:w-[80%] opacity-100 absolute left-1/2 transform -translate-x-1/2 bottom-26 z-10'
            />
            <div className="absolute top-0 w-full pl-3 pt-10 gap-5 sm:gap-0 md:p-10 z-50 flex flex-col sm:flex-row justify-around items-start uppercase font-minima  sm:items-center bg-opacity-70  text-white/50">
                {links.map((link, index) => (
                    <div key={index} className="">
                        <FlipLink
                            className='text-[25px] text-white/50'
                            key={index}
                            onClick={() => {
                                setTimeout(() => {
                                    const section = document.querySelector(link.href);
                                    if (section) {
                                        const offset = -0; // por ejemplo, bajar 100px más
                                        const top = section.getBoundingClientRect().top + window.scrollY + offset;

                                        window.scrollTo({ top, behavior: 'smooth' });
                                    }
                                }, 600); // esperar a que termine la animación
                            }}
                        >
                            {link.name}
                        </FlipLink>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-4 w-full z-50 text-white/60 text-center text-[12px] sm:text-[20px] tracking-[2px]">
                <p>Desarrollado por we.nima ©  todos los derechos reservados</p>
            </div>
        </div>
    );
}
