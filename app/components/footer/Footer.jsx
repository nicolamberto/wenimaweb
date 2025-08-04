import Image from 'next/image';
import React from 'react';

export default function Footer() {
    return (
        <div className="fixed top-0 w-full h-[100vh] bg-[#080a00] z-0">
            <Image src={'/images/logos/logoverde.webp'} alt='logo' width={200} height={200} className='w-[50px] h-full md:w-full opacity-5' />
            <Image src={'/images/logos/logofooter.webp'} alt='logo' width={200} height={200} className=' md:w-[80%] opacity-100 absolute left-1/2 transform -translate-x-1/2 bottom-40' />

        </div>
    );
}
