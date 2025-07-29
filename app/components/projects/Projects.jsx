"use client"

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "@/lib/data";
import { SectionTitle } from "@/app/elements/SectionTitle";

export const Projects = () => {
    return (
        <div className=" w-full">
            <SectionTitle leftText="NUESTROS" rightText="PROYECTOS" className="py-20" />
            {
                projects.map((project, index) => (
                    <TextParallaxContent
                        key={index}
                        imgUrl={project.image}
                        subheading={project.techs}
                        heading={project.name}
                    >
                        <ExampleContent title={project.description} description={project.longdescription} />
                    </TextParallaxContent>
                ))
            }

        </div>
    );
};

const IMG_PADDING = 0;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
    return (
        <div
            style={{
                paddingLeft: IMG_PADDING,
                paddingRight: IMG_PADDING,
            }}
        >
            <div className="relative h-[150vh]">
                <StickyImage imgUrl={imgUrl} />
                <OverlayCopy heading={heading} subheading={subheading} />
            </div>
            {children}
        </div>
    );
};

const StickyImage = ({ imgUrl }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <motion.div
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: `calc(100vh - ${IMG_PADDING * 2}px)`,
                top: IMG_PADDING,
                scale,
            }}
            ref={targetRef}
            className="sticky z-0 overflow-hidden"
        >
            <motion.div
                className="absolute inset-0 bg-neutral-950/70"
                style={{
                    opacity,
                }}
            />
        </motion.div>
    );
};

const OverlayCopy = ({ subheading, heading }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
        <motion.div
            style={{
                y,
                opacity,
            }}
            ref={targetRef}
            className="absolute left-0 top-0 flex h-screen w-full flex-col-reverse items-center justify-center text-white gap-10"
        >
            <div className="flex flex-row flex-wrap gap-3 sm:gap-8 md:gap-10 justify-center items-center">
                            {
                subheading.map((tech, index) => (
                    <p key={index} className="mb-2 text-center text-[11px] md:mb-4 md:text-[20px] text-white/70 font-poppins-eli">
                        {tech}
                    </p>
                ))
            }
            </div>

            
            <p className="text-center text-4xl font-bold md:text-7xl uppercase font-minima">{heading}</p>
        </motion.div>
    );
};

const ExampleContent = ({ title, description }) => (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 pb-24 pt-12 mb-12 md:grid-cols-12 relative">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-[#451667]">
            {title}
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl md:text-2xl text-justify text-[#451667]/70">
                {description}
            </p>
        </div>
        <button className=" rounded-full bg-[#451667] uppercase font-minima px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 absolute bottom-0 right-4">
            Quiero algo asi
        </button>
    </div>
);