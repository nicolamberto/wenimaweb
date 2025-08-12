import React from 'react'
import Image from 'next/image';
import TypewriterText from '@/app/elements/TypewriterText';
import ElectricImage from '@/app/elements/ElectricImage';
export default function ParticipantsMobile({ participantes }) {


    return (
        <div className="flex flex-col justify-center items-center w-full relative p-3 gap-10 ">
            {
                participantes.map((participant, index) => (

                    <div key={index} className='w-full flex flex-row h-[140px] sm:h-[250px] '>
                        <div className="relative h-full w-[25vw] overflow-hidden ">
                            <ElectricImage
                                src={participant.image}
                                alt="Logo eléctrico"
                                height={600}
                                width={600}
                                fill
                                className="object-cover w-[30vw]"
                            />
                        </div>


                        <div className="flex flex-col justify-between pl-3 sm:pl-10 py-4 sm:py-8 uppercase">

                            <TypewriterText
                                text={participant.name}
                                typeSpeed={30}
                                delay={1000}
                                className="font-semibold text-black/60 text-[19px] sm:text-[30px] md:text-[45px] -tracking-[1px] font-minima"
                                once={true} // o false si querés que se repita al hacer scroll
                            />

                            <p className='font-light text-black/60 text-[13px] sm:text-[18px] tracking-[2px]'>
                                {participant.role}
                            </p>


                        </div>
                    </div>
                ))
            }

            <div className="relative font-semibold block text-justify px-4 mt-20 md:hidden tracking-[2px] text-black/60">
                <p className=''>
                    Somos un pequeño estudio creativo enfocado en potenciar marcas a través del <span className='text-black'>diseño y la
                        tecnología</span> . Nos especializamos en crear sitios web visuales, funcionales y alineados con la esencia de cada proyecto Creemos en las <span className='text-black'>ideas simples, los procesos claros y las soluciones
                            que realmente suman.</span>  Nos apasiona trabajar con personas que tienen algo para contar y
                    acompañarlas en el desafío de destacarse en lo digital.
                </p>
                <ElectricImage
                    src={'/images/text-icons/icononegro.webp'}
                    alt="Logo eléctrico"
                    height={30}
                    width={30}
                    fill
                    className="absolute -top-10 left-3 opacity-10"
                />
            </div>

        </div>)
}
