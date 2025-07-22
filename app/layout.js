'use client'

import { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Lenis from "@studio-freight/lenis";

import "./globals.css";
import CustomCursor from "./components/custom-cursor/CustomCursor";
import { CursorProvider } from "./cursor-context/CursorContext";
import Footer from "./components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  useEffect(() => {
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        <CursorProvider>
          <CustomCursor />
          {children}
          <Footer/>
        </CursorProvider>
      </body>
    </html>
  );
}
