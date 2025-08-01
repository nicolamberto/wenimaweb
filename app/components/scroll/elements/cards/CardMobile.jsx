import ButtonCTA from '@/app/elements/ButtonCTA'
import Image from 'next/image'
import React from 'react'

export default function CardMobile({ card, i }) {
    return (
        <div
            key={i}
            className="flex-none w-[92vw] h-[520px] border border-[#d6ff00]/20 bg-[#333333]/50 p-6 flex flex-col justify-between"
            style={{
                willChange: 'transform',
                transform: 'translateZ(0)'
            }}
        >
            <div className="w-fit relative">
                <h3 className="text-[23px] font-minima font-bold text-white/90 uppercase pl-12">{card.title}</h3>
                <Image src={card.iconText} className='absolute -left-2 top-1/2 transform -translate-y-1/2 w-[35px]' alt="creativo" width={40} height={40} />

            </div>
            <ul className="space-y-2 mt-4">
                {card.features.map((feature, idx) => (
                    <li key={idx} className="text-white/60 text-sm pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-[#f1eaf0] before:pr-2">
                        {feature}
                    </li>
                ))}
            </ul>
            <ButtonCTA text={'CONTACTAR'} className=' w-[60%]'/>
        </div>)
}
