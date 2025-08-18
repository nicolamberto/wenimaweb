import ButtonCTA from '@/app/elements/ButtonCTA'
import Image from 'next/image'
import React from 'react'

export default function CardMobile({ card, i }) {
    return (
        <div
            key={i}
            className="flex-none w-[92vw] sm:w-[400px] h-[520px] border border-[#d6ff00]/20 bg-[#333333]/50 p-6 flex flex-col justify-between py-10"
            style={{
                willChange: 'transform',
                transform: 'translateZ(0)'
            }}
        >
            <div className="w-fit relative">
                <h3 className="text-[20px] font-minima font-bold text-white/90 uppercase pl-10">{card.title}</h3>
                <Image src={card.iconText} className='absolute -left-2 -top-1 translate-y-[43%] w-[20px]' alt="creativo" width={40} height={40} />
            </div>
            <ul className="space-y-2 mt-0">
                {card.features.map((feature, idx) => (
                    <li key={idx} className="text-white/60 tracking-[2px] text-sm pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-[#f1eaf0] before:pr-2">
                        {feature}
                    </li>
                ))}
            </ul>
            <ButtonCTA href='#contacto' text={'CONTACTAR'} className=' w-[200px] md:w-[225px]' />
        </div>
    )
}
