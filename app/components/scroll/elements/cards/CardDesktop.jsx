import React from 'react'
import Image from 'next/image'

export default function CardDesktop({ card }) {
    return (
        <div className="group relative h-[80vh] w-[100vw] mx-0 md:w-[650px] lg:w-[750px] shrink-0 overflow-hidden flex flex-col justify-between border border-white/10 bg-[#451667]/40">
            <div className="flex-1 flex flex-col items-start justify-start px-10 pt-10 md:pt-20 gap-10 relative">
                <div className="w-fit relative">
                    <h3 className="text-[29px] sm:text-[45px] font-minima font-bold text-white/90 leading-tight uppercase pl-10">
                        {card.title}
                    </h3>
                    <Image src={card.iconText} className='absolute -left-5 top-1/2 transform -translate-y-1/2 md:w-[40px]' alt="creativo" width={40} height={40} />
                </div>


                <ul className="space-y-3">
                    {card.features.map((feature, idx) => (
                        <li
                            key={idx}
                            className="text-white/60 text-base sm:text-lg pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-[#f1eaf0] before:pr-2"
                        >
                            {feature}
                        </li>
                    ))}
                </ul>

                <button className="absolute bottom-10 left-10 bg-[#f1eaf0] text-[#451667] px-4 py-2 rounded-full font-minima font-bold text-base sm:text-lg shadow hover:bg-[#f1eaf0]/80 transition-colors duration-200">
                    Contacta!
                </button>
            </div>
        </div>
    );
}
