'use client'

import React, { useState } from 'react'
import ModalMenu from './elements/modal-menu/ModalMenu';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function NavBar() {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className='w-full h-20 bg-transparent font-bold p-3 md:p-14 flex justify-between items-center absolute top-0 z-50'>
            <Image src={'/images/logos/logocompleto.png'} alt='logo' width={200} height={200} />
            <div className="">
                <motion.button 
                onClick={() => setIsVisible(!isVisible)} className='py-2 px-5 bg-[#f1eaf0] text-[#451667] rounded-full cursor-pointer'
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
