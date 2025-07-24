'use client'


import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionTitle } from '@/app/elements/SectionTitle';

const participantes = [
    {
        name: 'Nicolás Lamberto',
        role: 'Web Developer',
        image: '/images/participants/nico.jpeg'
    },
    {
        name: 'Martina Daniele',
        role: 'Ui/UX Designer',
        image: '/images/participants/marti.jpeg'
    },
    {
        name: 'Pablo Sans',
        role: 'Marketing Strategist',
        image: '/images/participants/pablo.jpeg'
    },

]

export default function Participants() {

    const [hoverParticipant, setHoverParticipant] = useState(false);


    return (
        <div id='nosotros' className='w-full mt-20 md:mt-60 mb-20 md:mb-60 z-30'>

            <SectionTitle leftText="CONOCE" rightText="WE.NIMA" />

            {/* TEXT */}
            <div className="w-full flex flex-row justify-end md:justify-around text-black/60 md:px-5 tracking-tighter py-10 md:py-40 text-[20px] leading-7">
                <p className=' max-w-[500px] font-semibold hidden md:block'>Enjoy 18 exclusive and inspirational talks and keynotes by
                    world-renowned creative leaders and business visionaries, which
                    will enlighten us on key and trending topics such as Artificial
                    Intelligence, Digital Marketing, UX/UI, Branding Strategy, 3D Motion
                    and Animation, Web 3.0, Immersive Experiences, Business for
                    creatives and much more.
                </p>
                <p className='uppercase md:max-w-[250px] text-justify text-[15px] md:text-[20px] pr-5 md:pr-0 leading-5 md:leading-normal'>Be inspired by the <br /> world's most creative <br /> and influential minds.</p>
            </div>


            {/* PARTICIPANTS DESKTOP */}
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

            {/* PARTICIPANTS MOBILE */}
            <div className="flex flex-col justify-center items-center w-full relative xl:hidden p-8 gap-5 ">
                {
                    participantes.map((participant, index) => (

                        <div className='w-full flex flex-row h-[140px] sm:h-[250px]'>
                            <div className=" w-[25vw]">
                                <Image
                                    src={participant.image}
                                    alt='img-participant'
                                    width={200}
                                    height={250}
                                    className="h-full w-auto object-cover"
                                />
                            </div>
                            <div className=" flex flex-col justify-between pl-5 py-3 sm:py-6 uppercase border-2">
                                <p className=' font-semibold text-black/90 text-[21px] sm:text-[35px] md:text-[45px] -tracking-[1px]'>{participant.name}</p>
                                <p className='font-light text-black/60 text-[13px] sm:text-[18px]'>{participant.role}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
