
import React from "react";
import { projects } from "@/lib/data";
import ImageSection from "./elements/ImageSection";
import ProjectDescription from "./elements/ProjectDescription";
import ElectricText from "@/app/elements/ElectricText";

export const Projects = () => {

    return (
        <div
            className="w-full"
            id='proyectos'
        >
            <div
                className={`font-minima leading-9 sm:leading-16 w-full flex flex-col xl:flex-row justify-between text-[#333333] text-[40px] sm:text-[70px] lg:text-[80px] xl:text-[70px] 2xl:text-[100px] px-3 sm:px-10 py-10 pt-[100px] md:pt-[200px]`}
            >
                <ElectricText text={'NUESTROS'} className="w-full text-start" />
                <ElectricText text={'PROYECTOS'} className="w-full text-end" delay={0.35} />
            </div>
            {
                projects.map((project, index) => (
                    <ImageSection
                        key={index}
                        imgUrl={project.image}
                        subheading={project.techs}
                        heading={project.name}
                    >
                        <ProjectDescription title={project.description} description={project.longdescription} name={project.name} />
                    </ImageSection>
                ))
            }

        </div>
    );
};
