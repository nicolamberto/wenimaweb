
import React from "react";
import { projects } from "@/lib/data";
import { SectionTitle } from "@/app/elements/SectionTitle";
import ImageSection from "./elements/ImageSection";
import ProjectDescription from "./elements/ProjectDescription";


export const Projects = () => {

    return (
        <div className=" w-full ">
            <SectionTitle leftText="NUESTROS" rightText="PROYECTOS" className="py-20 pt-[100px] md:pt-[200px] text-[#080a00]" />
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
