'use client'

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import "./globals.css";
import Footer from "./components/footer/Footer";
import { useIsMobile } from "./hooks/useIsMobile";



export default function RootLayout({ children }) {
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isMobile) { return; }


    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en" className="lenis">
      <body className={`antialiased overflow-x-hidden lg:pb-[60vh] 2xl:pb-[75vh]`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
