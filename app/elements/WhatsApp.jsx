import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { useIsMobile } from '../hooks/useIsMobile';



export default function WhatsApp() {

    const isMobile = useIsMobile();

    return (
        <a
            href="https://api.whatsapp.com/send?phone=5493518783602&text=Hola!%20Quiero%20averiguar%20mas%20sobre%20We%20Nima%20!%20" // Cambiá por tu número en formato internacional
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-[#d6ff00] text-[#333333] p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
        >
            <FaWhatsapp size={isMobile ? 32 : 51} />
        </a>
    );
}
