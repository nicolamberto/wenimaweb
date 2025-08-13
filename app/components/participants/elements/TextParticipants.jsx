import TypewriterText from '@/app/elements/TypewriterText'
import React from 'react'

export default function TextParticipants() {

    return (
        <div className="w-full flex flex-row justify-end md:justify-around text-black/60 md:px-5 py-20 md:py-40 text-[18px] tracking-[2px] leading-6 text-justify">
            <p className=' max-w-[500px] font-semibold hidden md:block'>Somos un estudio creativo que combina diseño y tecnología para llevar las marcas al siguiente nivel. Creamos sitios web visuales, funcionales y fieles a la esencia de cada proyecto, cuidando cada detalle como si fuera propio. Apostamos por ideas claras, procesos directos y soluciones que realmente hacen la diferencia. Nos encanta trabajar con personas que tienen algo para contar y acompañarlas en el reto de brillar en lo digital… porque cuando se trata de cumplir expectativas, venimos con todas las herramientas.
            </p>
            {/*             <TypewriterText
                text="Be inspired by the <br /> world's most creative <br /> and influential minds."
                typeSpeed={60}
                delay={1000}
                className="uppercase text-justify md:max-w-[250px] text-[15px] md:text-[20px] pr-5 md:pr-0 leading-5 md:leading-normal text-wrap"
                once={true} // o false si querés que se repita al hacer scroll
            /> */}
            <p className='uppercase md:max-w-[250px] text-justify text-[15px] md:text-[20px] px-5 md:px-0 md:pr-0 leading-5 md:leading-normal'>Impulsá tu marca con ideas creativas y <span className='text-black font-bold'>MENTES INFLUYENTES</span>.

</p>
        </div>
    )

}
