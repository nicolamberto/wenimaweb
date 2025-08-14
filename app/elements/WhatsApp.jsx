'use client';

import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { useIsMobile } from '../hooks/useIsMobile';
import { motion } from 'framer-motion';

export default function WhatsApp() {
  const isMobile = useIsMobile();

  return (
    <motion.a
      href="https://api.whatsapp.com/send?phone=5493518783602&text=Hola!%20Quiero%20averiguar%20mas%20sobre%20We%20Nima%20!%20"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 flex items-center justify-center rounded-full shadow-lg z-50 overflow-hidden"
      style={{
        backgroundColor: '#d6ff00',
        color: '#333333',
        width: isMobile ? 56 : 76,
        height: isMobile ? 56 : 76,
      }}
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      {/* Fondo animado inverso */}
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{
          backgroundColor: '#333333',
          zIndex: 0,
          scale: 0,
          originX: 0.5,
          originY: 0.5,
        }}
        variants={{
          rest: { scale: 0 },
          hover: { scale: 1.5, transition: { duration: 0.2, ease: 'easeInOut' } }
        }}
      />

      {/* Icono */}
      <motion.div
        className="relative z-10 flex items-center justify-center"
        variants={{
          rest: { color: '#333333' },
          hover: { color: '#d6ff00', transition: { duration: 0.1 } }
        }}
      >
        <FaWhatsapp size={isMobile ? 32 : 51} />
      </motion.div>

      {/* "Borde" ultra fino con box-shadow */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        variants={{
          rest: { boxShadow: '0 0 0 0 transparent' },
          hover: { boxShadow: '2 2 2 2.5px #d6ff00', transition: { duration: 0.1 } }
        }}
      />
    </motion.a>
  );
}
