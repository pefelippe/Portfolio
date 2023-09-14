import { motion } from "framer-motion";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

import ProjectCard from "../../src/components/ProjectCard";
import { projects } from "../../src/constants";
import AnimatedLink from "../components/animated/AnimatedLink";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="work"
      className=" mx-auto flex max-lg:flex-col-reverse text-start  
      w-full items-center  max-w-7xl justify-center lg:gap-20 rounded-[30px]"
    >
      <div className="leading-1 gap-2 flex flex-col justify-between items-start  max-w-lg w-full">
        <h1 className="text-7xl font-thin xs:text-4xl  leading-tight text-gray-100 tracking-[5px]">
          selected work
        </h1>
        <h3 className="text-[1.4rem] max-w-2xl text-[#BABABA] leading-tight">
          Explore the following projects to get a glimpse of my job experience.
        </h3>

        {/* <AnimatedLink
          href="/projects"
          className="text-[1.4rem] max-w-2xl text-gray-500 leading-tight transition-all
            rounded-full underline hover:text-blue pt-full"
        >
          <div className="flex gap-2 items-center ">
            <p>See my projects</p>
          </div>
        </AnimatedLink> */}
      </div>

      <div className="grid h-full  gap-10 xl:gap-14 justify-center ">
        {projects?.map((proj) => {
          return (
            <ProjectCard
              key={proj.id}
              id={proj.id}
              description={proj.description}
              imgUrl={proj.imgUrl}
              link={proj.link}
              title={proj.title}
              repo={proj.repo}
              stack={proj.stack}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default Projects;
