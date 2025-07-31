import React from 'react'
import Image from 'next/image';

export default function ParticipantsMobile({participantes}) {


  return (
    <div className="flex flex-col justify-center items-center w-full relative xl:hidden p-8 gap-5 ">
    {
        participantes.map((participant, index) => (

            <div key={index} className='w-full flex flex-row h-[140px] sm:h-[250px]'>
                <div className=" w-[25vw]">
                    <Image
                        src={participant.image}
                        alt='img-participant'
                        width={200}
                        height={250}
                        className="h-full w-auto object-cover"
                    />
                </div>
                <div className=" flex flex-col justify-between pl-5 py-3 sm:py-6 uppercase">
                    <p className=' font-semibold text-black/90 text-[21px] sm:text-[35px] md:text-[45px] -tracking-[1px]'>{participant.name}</p>
                    <p className='font-light text-black/60 text-[13px] sm:text-[18px]'>{participant.role}</p>
                </div>
            </div>
        ))
    }
</div>  )
}
