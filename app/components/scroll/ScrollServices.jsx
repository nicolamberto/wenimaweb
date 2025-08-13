'use client'

import { useIsMobile } from "@/app/hooks/useIsMobile";
import { StretchText } from "@/app/elements/StretchText";
import TitleScrollServices from "./elements/TitleScrollServices";
import ServicesMobile from "./elements/ServicesMobile";
import ServicesDesktop from "./elements/ServicesDesktop";
import Image from "next/image";

export const ScrollServices = () => {

  const isMobile = useIsMobile();

  return (
    <div             id="servicios"
 className="flex flex-col pb-18 relative">
      {/* TITULO */}
      <TitleScrollServices />
      <Image src="/images/bg/recursobgparticipants.png" alt="bgparticipantes" width={1000} height={1000} className='absolute opacity-10 -top-0 right-0  w-[1000px] object-cover z-0' />


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


