import { motion } from "framer-motion";
import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "../../src/components/ProjectCard";
import { projects } from "../../src/constants";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="work"
      className="component "
    >
      <span className="font-bold text-[3rem] md:text-[3.5rem] xl:text-[4.5rem] leading-[1.2] flex w-full">
        Creating powerful products that are utilized by millions of people every
        day.
      </span>
      <div className="flex flex-col w-full pt-40 gap-40">
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
