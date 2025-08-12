import React from 'react'
import Image from 'next/image'
import ButtonCTA from '@/app/elements/ButtonCTA';

export default function CardDesktop({ card }) {
    return (
        <div className=" relative h-[80vh] w-[100vw] mx-0 md:w-[650px] lg:w-[750px] shrink-0 overflow-hidden flex flex-col justify-between border border-[#d6ff00]/20 bg-[#333333]/50">
            <div className="flex-1 flex flex-col items-start justify-start px-10 pt-10 md:pt-20 gap-10 relative">
                <div className="w-fit relative">
                    <h3 className="text-[29px] sm:text-[45px] font-minima font-bold text-white/90 leading-tight uppercase pl-20 relative">
                        {card.title}
                        <Image
                            src={card.iconText}
                            alt="creativo"
                            width={40}
                            height={40}
                            className="absolute left-0 top-0 translate-y-[20%] md:w-[40px]"
                        />
                    </h3>
                </div>



                <ul className="space-y-3">
                    {card.features.map((feature, idx) => (
                        <li
                            key={idx}
                            className="text-white/60 text-base sm:text-lg xl:text-[20px] pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-[#f1eaf0] before:pr-2"
                        >
                            {feature}
                        </li>
                    ))}
                </ul>

                <ButtonCTA text={'quiero algo asi'} className='absolute bottom-10 left-10 py-4' />
            </div>
        </div>
    );
}
