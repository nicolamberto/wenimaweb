'use client'

import { useIsMobile } from "@/app/hooks/useIsMobile";
import { StretchText } from "@/app/elements/StretchText";
import TitleScrollServices from "./elements/TitleScrollServices";
import ServicesMobile from "./elements/ServicesMobile";
import ServicesDesktop from "./elements/ServicesDesktop";

export const ScrollServices = () => {

  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col pb-18 relative">
      {/* TITULO */}
      <TitleScrollServices />

      {/* MOBILE SCROLL NATIVO */}
      {isMobile ? (
        <ServicesMobile />
      ) : (
        // DESKTOP SCROLL CONTROLADO POR FRAMER MOTION
        <ServicesDesktop />
      )}
      <StretchText text={'diseno identidad marca proyecto'} className={'absolute bottom-10 md:bottom-20 text-white/50 pointer-events-none'} />
    </div>
  );
};


