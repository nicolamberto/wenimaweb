'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ParticipantsDesktop({ participantes }) {
    const [hoverParticipant, setHoverParticipant] = useState(false);


    return (
        <div className="hidden xl:flex flex-row justify-between w-full relative">
            <div className="flex flex-col gap-0 w-full">
                {
                    participantes.map((participant, index) => (

                        <div
                            onMouseEnter={() => setHoverParticipant(participant)}
                            onMouseLeave={() => setHoverParticipant(false)}
                            className="flex flex-row justify-between items-center pl-10 relative leading-16 2xl:leading-20 z-10">
                            <div className=" flex flex-row 2xl:gap-20 uppercase justify-center items-center">
                                <p className='text-black/50 font-poppins-eli 2xl:w-[200px]'>{hoverParticipant.role === participant.role ? `${participant.role}` : ''}</p>
                                <motion.p
                                    animate={{ x: hoverParticipant && hoverParticipant.name === participant.name ? 50 : 0 }}
                                    transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
                                    className={`text-[50px] 2xl:text-[70px] font-minima tracking-tighter ${hoverParticipant.name === participant.name ? 'text-[#451667]/80' : 'text-black/20'} cursor-pointer`}
                                >{participant.name}
                                </motion.p>
                            </div>


                        </div>
                    ))
                }

            </div>
            {hoverParticipant && (
                <div className="absolute right-10 top-1/2 -translate-y-1/2 z-0 pointer-events-none w-[370px] h-[500px] 2xl:w-[400px] 2xl:h-[500px]">
                    <Image
                        src={hoverParticipant.image}
                        alt='img'
                        width={400}
                        height={500}
                        className='object-cover'
                    />
                </div>
            )}


        </div>
    )
}
