'use client'

import React, { useState } from 'react'
import ModalMenu from './elements/modal-menu/ModalMenu';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function NavBar() {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className='w-full h-20 bg-transparent font-bold p-3 xl:p-14 flex justify-between items-center absolute top-0 z-50'>
            <Image src={'/images/logos/logoverde.webp'} alt='logo' width={200} height={200} className='w-[50px] h-[30px] md:w-[100px] md:h-[50px]' />
            <Image src={'/images/logos/logoletrablanco.webp'} alt='logo' width={200} height={200} className='hidden md:block md:w-[200px] md:h-[50px]' />
            <div className="">
                <motion.button 
                onClick={() => setIsVisible(!isVisible)} className='py-2 px-5 bg-[#e6e6e6] text-[#080a00] rounded-full cursor-pointer'
                whileHover={{scale:1.06}}
                whileTap={{scale:0.9}}
                >
                    MENU
                </motion.button>
            </div>
            <ModalMenu isVisible={isVisible} setIsVisible={setIsVisible} />
        </div>
    )
}
