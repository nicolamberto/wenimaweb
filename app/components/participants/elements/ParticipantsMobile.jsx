import React from 'react'
import Image from 'next/image';
import TypewriterText from '@/app/elements/TypewriterText';
import ElectricImage from '@/app/elements/ElectricImage';
export default function ParticipantsMobile({ participantes }) {


    return (
        <div className="flex flex-col justify-center items-center w-full relative xl:hidden p-8 gap-5 ">
            {
                participantes.map((participant, index) => (

                    <div key={index} className='w-full flex flex-row h-[140px] sm:h-[250px]'>
                        <div className=" w-[25vw]">
                            <ElectricImage
                                src={participant.image}
                                alt="Logo eléctrico"
                                width={200}
                                height={250}
                                className="h-full w-auto object-cover"
                            />
                        </div>
                        <div className=" flex flex-col justify-between pl-5 py-3 sm:py-6 uppercase">

                            <TypewriterText
                                text={participant.name}
                                typeSpeed={30}
                                delay={1000}
                                className="font-semibold text-black/90 text-[21px] sm:text-[35px] md:text-[45px] -tracking-[1px]"
                                once={true} // o false si querés que se repita al hacer scroll
                            />

                            <TypewriterText
                                text={participant.role}
                                typeSpeed={60}
                                delay={1000}
                                className="font-light text-black/60 text-[13px] sm:text-[18px]"
                                once={true} // o false si querés que se repita al hacer scroll
                            />

                        </div>
                    </div>
                ))
            }
        </div>)
}
