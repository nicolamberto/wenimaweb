'use client'

import React, { useEffect, useState } from 'react'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import { useIsMobile } from './hooks/useIsMobile';
import Lenis from "@studio-freight/lenis";
import WhatsApp from './elements/WhatsApp';
import { useScrollToTopOnLoad } from './hooks/useScrollToTopOnLoad';
export default function ClientLayout({ children }) {

    const isMobile = useIsMobile()

    const [lenisInstance, setLenisInstance] = useState(null);

    useEffect(() => {
        if (typeof window === 'undefined' || isMobile) return;

        try {
            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smooth: true,
                smoothTouch: false, // Desactivar explícitamente en touch devices
                touchMultiplier: 1,
            });

            let rafId = null;
            const raf = (time) => {
                lenis.raf(time);
                rafId = requestAnimationFrame(raf);
            };

            rafId = requestAnimationFrame(raf);
            setLenisInstance(lenis);

            return () => {
                if (rafId) {
                    cancelAnimationFrame(rafId);
                }
                lenis.destroy();
                setLenisInstance(null);
            };
        } catch (error) {
            console.error('Error al inicializar Lenis:', error);
        }
    }, [isMobile]);

    useScrollToTopOnLoad();

    return (
        <div>
            <NavBar />
            {children}
            <WhatsApp />
            <Footer />
        </div>
    )
}
