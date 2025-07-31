'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';

export default function TextHeader({ subheading, heading }) {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
        <motion.div
            style={{
                y,
                opacity,
            }}
            ref={targetRef}
            className="absolute left-0 top-0 flex h-screen w-full flex-col-reverse items-center justify-center text-white gap-2 md:gap-4"
        >
            <div className="flex flex-row flex-wrap gap-3 sm:gap-8 md:gap-7 justify-center items-center">
                {
                    subheading.map((tech, index) => (
                        <p key={index} className="mb-2 text-center text-[11px] md:mb-4 md:text-[20px] text-white/70 font-poppins-eli">
                            {tech}
                        </p>
                    ))
                }
            </div>


            <p className="text-center text-[43px] font-bold md:text-[50px] uppercase font-minima leading-10">{heading}</p>
        </motion.div>
    );
}
