
import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { services } from '@/lib/data'
import CardDesktop from './cards/CardDesktop'

export default function ServicesDesktop() {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    const [endX, setEndX] = useState("-80%");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setEndX("-82%");
            } else if (window.innerWidth < 1024) {
                setEndX("-77%");
            } else if (window.innerWidth < 1280) {
                setEndX("-76%");
            } else if (window.innerWidth < 1536) {
                setEndX("-65%");
            } else {
                setEndX("-54%");
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const x = useTransform(scrollYProgress, [0, 1], ["0%", endX]);

    return (
        <section ref={targetRef} className="relative h-[300vh]">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden px-0 md:px-4 py-40">
                <motion.div style={{ x }} className="flex gap-8">
                    {services.map((card, i) => (
                        <CardDesktop card={card} key={i} i={i} />
                    ))}
                </motion.div>
            </div>
        </section>
        )
}
