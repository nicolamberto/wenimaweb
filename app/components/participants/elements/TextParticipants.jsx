import React from 'react'

export default function TextParticipants() {

    return (
        <div className="w-full flex flex-col-reverse xl:flex-row gap-10 xl:gap-0 justify-end md:justify-around text-black/60 md:px-14 xl:px-0 py-20 md:py-40 text-[18px] tracking-[2px] leading-6 ">
            <p className='xl:max-w-[600px] font-semibold hidden md:block text-justify'>Somos un estudio creativo que combina diseño y tecnología para llevar las marcas al siguiente nivel. Creamos sitios web visuales, funcionales y fieles a la esencia de cada proyecto, cuidando cada detalle como si fuera propio. Apostamos por ideas claras, procesos directos y soluciones que realmente hacen la diferencia. Nos encanta trabajar con personas que tienen algo para contar y acompañarlas en el reto de brillar en lo digital… porque cuando se trata de cumplir expectativas, venimos con todas las herramientas.
            </p>
            <p className='uppercase xl:max-w-[250px] text-[15px] md:text-[20px] px-5 md:px-0 md:pr-0 leading-5 md:leading-normal'>Impulsá tu marca con ideas creativas y <span className='text-black font-bold'>mentes estratégicas</span>.
            </p>
        </div>
    )

}
