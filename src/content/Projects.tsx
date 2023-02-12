import { motion } from "framer-motion";
import React from "react";

import ContentTitle from "../atoms/ContentTitle";
import AnimatedBtn from "../components/motion/AnimatedBtn";
import ProjectCard from "../components/ProjectCard";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      id: 1,
      link: "https://portfolio-pefelippe.vercel.app/",
      repo: "https://github.com/pefelippe/Portfolio",
      title: "Portfolio",
      imgUrl: "assets/portfolio.png",
      description: "Meu portfolio pessoal.",
    },

    {
      id: 2,
      link: "https://portfolio-pefelippe.vercel.app/",
      repo: "https://github.com/pefelippe",
      title: "Portfolio",
      imgUrl: "assets/portfolio.png",
      description: "Uma agregador lo-fi.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 2 }}
      className=" flex  w-full flex-col justify-between items-center mx-auto  "
      id="projetos"
    >
      <div className="bg-[#5865f2] w-fit px-4 flex text-center justify-center tracking-[1px] text-[2.5rem]  font-bold">
        Meus projetos
      </div>

      <div className="mt-10 relative w-fit grid grid-cols-1 gap-12 mx-auto px-8">
        {projects.map((proj) => {
          return (
            <ProjectCard
              key={proj.id}
              description={proj.description}
              imgUrl={proj.imgUrl}
              link={proj.link}
              title={proj.title}
              repo={proj.repo}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default Projects;
