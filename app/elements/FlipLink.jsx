import React from 'react'
import { motion } from 'framer-motion';

const DURATION = 0.25;
const STAGGER = 0.025;


export const FlipLink = ({ children, onClick }) => {
    
    return (
        <motion.div
            initial="initial"
            whileHover="hovered"
            onClick={onClick}
            className="relative block overflow-hidden whitespace-nowrap text-[50px] uppercase sm:text-[80px] md:text-[120px] lg:text-[120px] cursor-pointer"
            style={{
                lineHeight: 0.85,
            }}
        >
            <div>
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: { y: 0 },
                            hovered: { y: "-100%" },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0">
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: { y: "100%" },
                            hovered: { y: 0 },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
};

