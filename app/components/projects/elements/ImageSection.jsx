'use client'

import React from 'react'
import StickyImage from './StickyImage';
import TextHeader from './TextHeader';
import { useIsMobile } from '@/app/hooks/useIsMobile';

export default function ImageSection ({ imgUrl, subheading, heading, children }) {

    const isMobile = useIsMobile();

    return (
        <div
            style={{
                paddingLeft: isMobile ? 0 : 22,
                paddingRight: isMobile ? 0 : 22,
            }}
        >
            <div className="relative h-[100vh] md:h-[150vh]">
                <StickyImage imgUrl={imgUrl} />
                <TextHeader heading={heading} subheading={subheading} />
            </div>
            {children}
        </div>
    );
};
