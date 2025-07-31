import React from 'react'
import { services } from '@/lib/data'
import CardMobile from './cards/CardMobile'

export default function ServicesMobile() {
    return (
        <section
            id="servicios"
            className="w-full overflow-x-scroll no-scrollbar py-10"
            style={{
                WebkitOverflowScrolling: 'touch',
            }}
        >
            <div className="inline-flex gap-4 px-4 pb-4">
                {services.map((card, i) => (
                    <CardMobile card={card} i={i} />
                ))}
            </div>
        </section>)
}
