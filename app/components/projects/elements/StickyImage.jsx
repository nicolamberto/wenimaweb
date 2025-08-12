'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';

export default function StickyImage({ imgUrl }) {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <motion.div
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: `calc(100vh - ${0 * 2}px)`,
                top: 0,
                scale,
            }}
            ref={targetRef}
            className="sticky z-0 overflow-hidden"
        >
            <motion.div
                className="absolute inset-0 bg-neutral-950/40"
                style={{
                    opacity,
                }}
            />
        </motion.div>
    );
}
