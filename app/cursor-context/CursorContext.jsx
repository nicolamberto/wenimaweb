'use client';
import { createContext, useContext, useState } from 'react';

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {

    const [cursorStyle, setCursorStyle] = useState({
        width: 16,
        height: 16,
        backgroundColor: '#00491f',
        borderRadius: '50%',
    });

    const [cursorContent, setCursorContent] = useState(null)

    return (
        <CursorContext.Provider value={{ cursorStyle, setCursorStyle, cursorContent, setCursorContent }}>
            {children}
        </CursorContext.Provider>
    );
};

export const useCursor = () => useContext(CursorContext);
