import React from 'react'
import Image from 'next/image'

export default function TitleScrollServices() {
    return (
        <div className="flex flex-col gap-0 text-[45px] sm:text-[80px] lg:text-[90px] xl:text-[100px] 2xl:text-[100px] px-3 sm:px-10  font-minima leading-12 sm:leading-18 lg:leading-21 pt-0 md:pt-20 lg:pt-30">
            <div className="w-fit relative md:ml-24">
                <p className="text-[#f1eaf0]">SERVICIOS</p>
                <Image src="/images/text-icons/titulos.webp" className='absolute -bottom-7 -right-5 md:-top-3 md:-left-8 w-[20px] md:w-[25px]' alt="creativo" width={40} height={40} />
            </div>
            <p className="text-[#f1eaf0]">DIGITALES</p>
        </div>)
}
