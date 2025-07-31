'use client'

import React, { useEffect, useState } from 'react'
import { SectionTitle } from '@/app/elements/SectionTitle';
import { useIsMobile } from '@/app/hooks/useIsMobile';
import { participantes } from '@/lib/data';
import TextParticipants from './elements/TextParticipants';
import ParticipantsMobile from './elements/ParticipantsMobile';
import ParticipantsDesktop from './elements/ParticipantsDesktop';

export default function Participants() {

    const isMobile = useIsMobile();

    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;


    return (
        <div id='nosotros' className='w-full mt-20 md:mt-60 mb-20 md:mb-60 z-30'>

            <SectionTitle leftText="CONOCE" rightText="WE.NIMA" />

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
