import React from 'react'
import Image from 'next/image'
import ButtonCTA from '@/app/elements/ButtonCTA';

export default function CardDesktop({ card, i }) {
    return (
        <div key={i} className=" relative h-[650px] xl:h-[700px] 2xl:h-[730px] w-[100vw] mx-0 md:w-[650px] lg:w-[750px] shrink-0 overflow-hidden flex flex-col justify-between border border-[#d6ff00]/20 bg-[#333333]/50">
            <div className="flex-1 flex flex-col items-start justify-start px-10 pt-20 gap-20  relative">
                <div className="w-fit relative">
                    <h3 className="lg:text-[35px] 2xl:text-[35px] font-minima font-bold text-white/90 leading-tight uppercase pl-14 relative">
                        {card.title}
                        <Image
                            src={card.iconText}
                            alt="creativo"
                            width={40}
                            height={40}
                            className="absolute left-0 top-0 translate-y-[19%] lg:w-[30px]"
                        />
                    </h3>
                </div>



                <ul className="space-y-3">
                    {card.features.map((feature, idx) => (
                        <li
                            key={idx}
                            className="text-white/60 text-base xl:text-[19px] pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-[#f1eaf0] tracking-[2px] before:pr-2"
                        >
                            {feature}
                        </li>
                    ))}
                </ul>

                <ButtonCTA href='#contacto' text={'contactar'} className='absolute bottom-20 left-10 py-4 hover:border hover:border-[#d6ff00]' />
            </div>
        </div>
    );
}
