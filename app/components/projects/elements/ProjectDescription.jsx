import React from 'react'
import ButtonCTA from '../../../elements/ButtonCTA'

export default function ProjectDescription({ title, description }) {
    return (
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 pb-24 pt-12 mb-12 md:grid-cols-12 relative">
            <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-[#451667]">
                {title}
            </h2>
            <div className="col-span-1 md:col-span-8">
                <p className="mb-4 text-xl md:text-2xl text-justify text-[#451667]/70">
                    {description}
                </p>
            </div>
            <ButtonCTA text="Quiero algo así" />
        </div>
    )
}
