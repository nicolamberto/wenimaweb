"use client"
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const WORDS_1 = [
  "Creatividad", "Innovación", "Diseño", "Web", "UX/UI", "Estrategia", "Marca", "Animación"
];
const WORDS_2 = [
  "Tecnología", "Experiencia", "Futuro", "Colaboración", "Ideas", "Impacto", "Soluciones", "Digital"
];
const WORDS_3 = [
  "Inspiración", "Tendencias", "Desarrollo", "Visión", "Arte", "Negocio", "Experiencia", "Crecimiento"
];

function InfiniteCarousel({ words, speed = 30, className = "" }) {
  const trackRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current) return;
    const ctx = gsap.context(() => {
      const width = trackRef.current.scrollWidth / 2;
      gsap.fromTo(
        trackRef.current,
        { x: 0 },
        {
          x: -width,
          duration: speed,
          ease: "none",
          repeat: -1,
        }
      );
    }, trackRef);
    return () => ctx.revert();
  }, [speed]);

  return (
    <div className={`overflow-hidden w-full h-8 md:h-16 flex items-center ${className}`}>
      <div
        ref={trackRef}
        className="flex whitespace-nowrap gap-0"
        style={{ willChange: "transform" }}
      >
        {[...words, ...words, ...words].map((word, i) => (
          <div key={i} className="flex items-center group px-2 select-none">
            <span className="text-2xl md:text-[40px] font-minima text-[#451667]/80 uppercase transition-colors duration-200 group-hover:text-white/30 group-hover:opacity-90">
              {word}
            </span>
            <span className="text-2xl md:text-[40px] font-bold text-[#451667]/40 ml-1">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TextCarousel() {
  return (
    <div className="w-full flex flex-col gap-0 py-18">
      <InfiniteCarousel words={WORDS_1} speed={22} />
      <InfiniteCarousel words={WORDS_2} speed={20} />
      <InfiniteCarousel words={WORDS_3} speed={24} />
    </div>
  );
}
