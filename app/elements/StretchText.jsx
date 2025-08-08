'use client';

import React from 'react';
import TypewriterText from './TypewriterText';

export const StretchText = ({ text, delay, className = '' }) => {
  const words = text.replace(/[.,]/g, '').split(' ');

  return (
    <div
      className={`flex justify-between w-full uppercase text-[18px] px-2 2xl:px-10 text-white/50 pointer-events-none ${className}`}
    >
      {words.map((word, index) => (
        <TypewriterText
          key={index}
          text={word}
          typeSpeed={60}
          delay={delay}
          className=""
          once={true} // o false si querés que se repita al hacer scroll
        />
      ))}
    </div>
  );
};
