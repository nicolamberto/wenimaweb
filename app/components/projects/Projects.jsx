'use client'

import React from "react";
import { projects } from "@/lib/data";
import ImageSection from "./elements/ImageSection";
import ProjectDescription from "./elements/ProjectDescription";
import ElectricText from "@/app/elements/ElectricText";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionImage = motion(Image);


export const Projects = () => {

    return (
        <div
            className="w-full"
            id='proyectos'
        >
            <div
                className={`font-minima leading-9 sm:leading-16 w-full  flex flex-col xl:flex-row justify-between text-[#333333] text-[40px] sm:text-[70px] lg:text-[80px] xl:text-[70px] 2xl:text-[100px] px-3 sm:px-10 py-10 pt-[100px] md:pt-[200px]`}
            >
                <ElectricText text={'NUESTROS'} className="w-full text-start" />
                <div className="relative w-full text-end ">
                    <ElectricText text={'PROYECTOS'} className="" delay={0.35} />
                    <MotionImage
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        src="/images/text-icons/asterisconegro.webp" className='absolute -top-4 -right-2 md:-top-10 md:-right-8 w-[20px] md:w-[40px]' alt="creativo" width={40} height={40} />
                </div>
            </div>
            {
                projects.map((project, index) => (
                    <ImageSection
                        key={index}
                        imgUrl={project.image}
                        subheading={project.techs}
                        heading={project.name}
                    >
                        <ProjectDescription url={project.url} title={project.description} description={project.longdescription} name={project.name} />
                    </ImageSection>
                ))
            }

        </div>
    );
};
