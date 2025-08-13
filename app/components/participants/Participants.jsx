'use client'

import React, { useEffect, useState } from 'react'
import { SectionTitle } from '@/app/elements/SectionTitle';
import { useIsMobile } from '@/app/hooks/useIsMobile';
import { participantes } from '@/lib/data';
import TextParticipants from './elements/TextParticipants';
import ParticipantsMobile from './elements/ParticipantsMobile';
import ParticipantsDesktop from './elements/ParticipantsDesktop';
import Image from 'next/image';

export default function Participants() {

    const isMobile = useIsMobile();

    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;


    return (
        <div id='nosotros' className='w-full pt-20 md:pt-60 pb-20 md:pb-60 -z-50 relative overflow-hidden'>

            <Image src="/images/bg/recursobgparticipants.png" alt="bgparticipantes" width={1000} height={1000} className='absolute opacity-10 top-32 left-1/2 transform -translate-x-1/2 top- w-[2400px] object-cover z-0' />

            <SectionTitle leftText="CONOCÉ" rightText="WE.NIMA" />

            {/* TEXT */}
            <TextParticipants />

            {isMobile ? (
                <ParticipantsMobile participantes={participantes} />
            ) : (
                <ParticipantsDesktop participantes={participantes} />
            )}

        </div>
    )
}
