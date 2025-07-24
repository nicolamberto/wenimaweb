'use client';

import { SectionTitle } from "@/app/elements/SectionTitle";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { services } from "@/lib/data";

export const ScrollServices = () => {
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

    handleResize(); // Ejecutar al inicio
    window.addEventListener("resize", handleResize); // Actualizar al redimensionar

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["0%", endX]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-0 text-[45px] sm:text-[80px] lg:text-[90px] xl:text-[100px] 2xl:text-[100px] px-3 sm:px-10  font-minima leading-12 sm:leading-18 lg:leading-21 pt-0 md:pt-20 lg:pt-30">
        <p className="text-[#f1eaf0] md:pl-24">
          SERVICIOS
        </p>
        <p className="text-[#f1eaf0] ">
          DIGITALES
        </p>
      </div>

      <section id='servicios' ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden px-0 md:px-4 w-[100vw] py-40">
          <motion.div style={{ x }} className="flex gap-8">
            {services.map((card, i) => (
              <Card card={card} key={i} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>


  );
};

const Card = ({ card }) => {
  return (
    <div className="group relative h-[80vh] w-[100vw] mx-0 md:w-[650px] lg:w-[750px] shrink-0 overflow-hidden flex flex-col justify-between border border-white/10 bg-[#451667]/40">
      <div className="flex-1 flex flex-col items-start justify-start px-10 pt-10 md:pt-20 gap-10 relative">
        <h3 className="text-[29px] sm:text-[45px] font-minima font-bold text-white/90 leading-tight uppercase">
          {card.title}
        </h3>

        <ul className="space-y-3">
          {card.features.map((feature, idx) => (
            <li
              key={idx}
              className="text-white/60 text-base sm:text-lg pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-[#f1eaf0] before:pr-2"
            >
              {feature}
            </li>
          ))}
        </ul>

        <button className="absolute bottom-10 left-10 bg-[#f1eaf0] text-[#451667] px-4 py-2 rounded-full font-minima font-bold text-base sm:text-lg shadow hover:bg-[#f1eaf0]/80 transition-colors duration-200">
          Contacta!
        </button>
      </div>
    </div>
  );
};


