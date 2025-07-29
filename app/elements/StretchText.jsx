'use client';

import React from 'react';


export const StretchText = ({ text, className = '' }) => {
  const words = text.replace(/[.,]/g, '').split(' ');

  return (
    <div
      className={`flex justify-between w-full uppercase text-[20px] px-2 2xl:px-10 text-white/50 pointer-events-none ${className}`}
    >
      {words.map((word, index) => (
        <span key={index}>{word}</span>
      ))}
    </div>
  );
};
