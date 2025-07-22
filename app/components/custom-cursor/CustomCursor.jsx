'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '@/app/cursor-context/CursorContext';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const { cursorStyle, cursorContent } = useCursor();

    // Actualiza la posición con el movimiento del mouse
    useEffect(() => {
        const move = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, []);

    return (
        <motion.div
            className="fixed -top-1 -left-1 pointer-events-none z-[40] overflow-hidden"
            animate={{
                x: position.x - cursorStyle.width / 2,
                y: position.y - cursorStyle.height / 2,
                width: cursorStyle.width,
                height: cursorStyle.height,
            }}
            transition={{ type: 'tween', ease: 'backOut' }}
        >
            {/* Fondo con opacidad */}
            <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                    backgroundColor: cursorStyle.backgroundColor,
                    borderRadius: cursorStyle.borderRadius,
                    opacity: 0.3, // opacidad solo del fondo
                }}
            />

            {/* Contenido sin opacidad */}
            {cursorContent && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="relative w-full h-full flex items-center justify-center pointer-events-none"
                >
                    {cursorContent}
                </motion.div>
            )}
        </motion.div>

    );
}
