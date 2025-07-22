'use client'


import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';


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
        <div className='w-full mt-20 md:mt-60 md:pb-[500px] z-30'>

            {/* TITULO */}
            <div className="leading-12 sm:leading-16 w-full flex flex-col md:flex-row justify-between text-[#451667] font-bold text-[60px] sm:text-[80px] lg:text-[90px] xl:text-[100px] 2xl:text-[130px] px-3 sm:px-10 tracking-tighter">
                <p className='w-full text-start'>CONOCE A</p>
                <p className='w-full text-end'>WE NIMA</p>
            </div>

            {/* TEXT */}
            <div className="w-full flex flex-row justify-end md:justify-around text-black/60 md:px-5 tracking-tighter py-10 md:py-40 text-[20px] leading-7">
                <p className=' max-w-[500px] font-semibold hidden md:block'>Enjoy 18 exclusive and inspirational talks and keynotes by
                    world-renowned creative leaders and business visionaries, which
                    will enlighten us on key and trending topics such as Artificial
                    Intelligence, Digital Marketing, UX/UI, Branding Strategy, 3D Motion
                    and Animation, Web 3.0, Immersive Experiences, Business for
                    creatives and much more.</p>
                <p className='uppercase md:max-w-[250px] text-justify text-[15px] md:text-[20px] pr-5 md:pr-0 leading-5 md:leading-normal'>Be inspired by the <br /> world's most creative <br /> and influential minds.</p>
            </div>


            {/* PARTICIPANTS DESKTOP */}
            <div className="hidden md:flex flex-row justify-between w-full relative ">
                <div className="flex flex-col gap-0 w-full">
                    {
                        participantes.map((participant, index) => (

                            <div
                                onMouseEnter={() => setHoverParticipant(participant)}
                                onMouseLeave={() => setHoverParticipant(false)}
                                className="flex flex-row justify-between items-center pl-10 relative leading-20 z-10">
                                <div className=" flex flex-row gap-20 uppercase justify-center items-center">
                                    <p className='text-black/50 font-bold w-[200px]'>{hoverParticipant.role === participant.role ? `${participant.role}` : ''}</p>
                                    <motion.p
                                        animate={{ x: hoverParticipant && hoverParticipant.name === participant.name ? 50 : 0 }}
                                        transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
                                        className={`text-[90px] font-bold tracking-tighter ${hoverParticipant.name === participant.name ? 'text-[#451667]/80' : 'text-black/20'} cursor-pointer`}
                                    >{participant.name}
                                    </motion.p>
                                </div>


                            </div>
                        ))
                    }

                </div>
                {hoverParticipant && (
                    <div className="absolute right-10 top-0 z-0 pointer-events-none">
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
            <div className="flex flex-col justify-center items-center w-full relative md:hidden p-8 gap-5 ">
                {
                    participantes.map((participant, index) => (

                        <div className='w-full flex flex-row h-[140px]'>
                            <div className="">
                                <Image
                                    src={participant.image}
                                    alt='img-participant'
                                    width={200}
                                    height={250}
                                    className="h-full w-auto object-cover"
                                />                            </div>
                            <div className=" flex flex-col justify-between pl-5 py-3 uppercase">
                                <p className=' font-semibold text-[21px] -tracking-[1px]'>{participant.name}</p>
                                <p className='font-light text-black/60'>{participant.role}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
