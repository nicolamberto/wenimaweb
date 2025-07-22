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

  // Duplico las palabras para loop perfecto
  return (
    <div className={`overflow-hidden w-full h-16 flex items-center ${className}`}>
      <div
        ref={trackRef}
        className="flex whitespace-nowrap gap-0"
        style={{ willChange: "transform" }}
      >
        {[...words, ...words, ...words].map((word, i) => (
          <span
            key={i}
            className="text-2xl md:text-3xl font-bold text-[#451667]/30 px-2 select-none drop-shadow-sm uppercase"
          >
             {word} /
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TextCarousel() {
  return (
    <div className="w-full flex flex-col gap-0">
      <InfiniteCarousel words={WORDS_1} speed={18} className="" />
      <InfiniteCarousel words={WORDS_2} speed={12} className="" />
      <InfiniteCarousel words={WORDS_3} speed={24} className="" />
    </div>
  );
}
