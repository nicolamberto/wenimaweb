import TypewriterText from '@/app/elements/TypewriterText'
import React from 'react'

export default function TextParticipants() {

    return (
        <div className="w-full flex flex-row justify-end md:justify-around text-black/60 md:px-5 tracking-tighter py-10 md:py-40 text-[20px] leading-7">
            <p className=' max-w-[500px] font-semibold hidden md:block'>Enjoy 18 exclusive and inspirational talks and keynotes by
                world-renowned creative leaders and business visionaries, which
                will enlighten us on key and trending topics such as Artificial
                Intelligence, Digital Marketing, UX/UI, Branding Strategy, 3D Motion
                and Animation, Web 3.0, Immersive Experiences, Business for
                creatives and much more.
            </p>
            {/*             <TypewriterText
                text="Be inspired by the <br /> world's most creative <br /> and influential minds."
                typeSpeed={60}
                delay={1000}
                className="uppercase text-justify md:max-w-[250px] text-[15px] md:text-[20px] pr-5 md:pr-0 leading-5 md:leading-normal text-wrap"
                once={true} // o false si querés que se repita al hacer scroll
            /> */}
            <p className='uppercase md:max-w-[250px] text-justify text-[15px] md:text-[20px] pr-5 md:pr-0 leading-5 md:leading-normal'>Be inspired by the <br /> world's most creative <br /> and influential minds.</p>
        </div>
    )

}
