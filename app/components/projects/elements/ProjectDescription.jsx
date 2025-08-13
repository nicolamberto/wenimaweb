import React from 'react';
import ButtonCTA from '../../../elements/ButtonCTA';
export default function ProjectDescription({ title, description, name }) {
    return (
        <div className="mx-auto max-w-full px-5 md:px-16 lg:px-20 pb-24 2xl:pb-32 pt-5 lg:pt-20 mb-12 relative">
            <div className="flex flex-col 2xl:flex-row justify-between gap-6">
                <div className="flex flex-col gap-2 lg:gap-5 2xl:max-w-[600px] pb-5 md:pb-0">
                    <h2 className="text-[25px] md:text-[30px] lg:text-[40px] font-bold text-[#080a00] font-minima leading-7 md:leading-8 2xl:leading-13">
                        {title}
                    </h2>
                    <p className='text-[#080a00]/70 text-[20px] lg:text-[30px] font-minima'>- {name}</p>
                </div>

                <p className="text-[18px] md:text-[23px] text-justify text-[#080a00]/70 2xl:max-w-[850px] tracking-[2px]">
                    {description}
                </p>
            </div>
            <ButtonCTA href='#contacto' text="Quiero algo así" className='absolute bottom-0 2xl:right-20 py-2 2xl:py-4' />
        </div>
    );
}
