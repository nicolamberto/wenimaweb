import React from 'react'
import StickyImage from './StickyImage';
import TextHeader from './TextHeader';

export default function ImageSection ({ imgUrl, subheading, heading, children }) {
    return (
        <div
            style={{
                paddingLeft: 0,
                paddingRight: 0,
            }}
        >
            <div className="relative h-[150vh]">
                <StickyImage imgUrl={imgUrl} />
                <TextHeader heading={heading} subheading={subheading} />
            </div>
            {children}
        </div>
    );
};
