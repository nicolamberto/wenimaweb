"use client"
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registro de plugin
if (typeof window !== "undefined" && gsap.core && !gsap.core.globals()["ScrollTrigger"]) {
    gsap.registerPlugin(ScrollTrigger);
}

const participantes = [
    {
        name: "Nicolás Lamberto",
        role: "Web Developer",
        image: "/images/participants/nico.jpeg",
    },
    {
        name: "Martina Daniele",
        role: "Ui/UX Designer",
        image: "/images/participants/marti.jpeg",
    },
    {
        name: "Pablo Sans",
        role: "Marketing Strategist",
        image: "/images/participants/pablo.jpeg",
    },
    {
        name: "Nicolás Lamberto",
        role: "Web Developer",
        image: "/images/participants/nico.jpeg",
    },

];

export default function Scroll() {
    const containerRef = useRef(null);
    const groupRef = useRef(null);

    // Configuración de cartas
    const numCards = 4;
    const gap = 24; // px
    const cardWidth = 420; // px
    const cardHeight = 680; // px
    // Calcula el ancho total ocupado por las cartas y gaps
    const totalWidth = numCards * cardWidth + (numCards - 1) * gap;

    useEffect(() => {
        if (!containerRef.current || !groupRef.current) return;
        // Movimiento diagonal más sutil y menos pronunciado
        gsap.fromTo(
            groupRef.current,
            { x: 300, y: 100 },
            {
                x: -400, // Menos a la izquierda
                y: -120, // Menos arriba
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "bottom top",
                    scrub: true,
                },
            }
        );
        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[140vh] md:min-h-[120vh] w-full flex flex-col items-center justify-center overflow-x-hidden border-2 border-black"
        >
            <h2 className="text-[#451667] text-4xl md:text-6xl font-black tracking-tight mb-16 text-center select-none drop-shadow-sm z-20 relative">
                Nuestro Equipo
            </h2>
            <div
                ref={groupRef}
                className="relative w-full max-w-[1400px] h-[520px] flex items-center justify-center"
            >
                {participantes.slice(0, 4).map((p, i) => (
                    <div
                        key={i}
                        className="absolute z-10 shadow-2xl rounded-2xl transition-all duration-20"
                        style={{
                            width: `${cardWidth}px`,
                            height: `${cardHeight}px`,
                            left: `calc(50% - ${totalWidth / 2}px + ${(cardWidth + gap) * i}px)` ,
                            top: `0px`,
                            boxShadow: "0 8px 32px 0 rgba(69,22,103,0.18)",
                            filter: "blur(0px)",
                            background: "rgba(255,255,255,0.7)",
                            backdropFilter: "blur(2px)",
                        }}
                    >
                        <Image
                            src={p.image}
                            alt={p.name}
                            width={cardWidth}
                            height={cardHeight}
                            className="w-full h-full object-cover rounded-2xl border-4 border-white/80"
                            draggable={false}
                            priority={i < 3}
                        />
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/80 rounded px-3 py-1 text-xs font-semibold text-[#451667] shadow-md text-center pointer-events-none">
                            {p.name}
                            <span className="block text-[10px] font-normal text-black/50">{p.role}</span>
                        </div>
                    </div>
                ))}
            </div>
            {/* Responsive: en mobile, las cartas se apilan */}
        </section>
    );
}
