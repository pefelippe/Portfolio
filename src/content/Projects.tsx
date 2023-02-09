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
      repo: "https://github.com/pefelippe",
      title: "Portfolio",
      imgUrl: "assets/portfolio.png",
      description: "Meu portfolio pessoal.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="contentStyle justify-center items-center mx-auto px-8 space-y-8"
      id="projetos"
    >
      <ContentTitle title="Conheça meus projetos" />

      <div className="relative w-full max-w-5xl grid grid-cols-1 gap-12  justify-center items-center mx-auto ">
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
      {/* <p
        className=" text-xl flex justify-center cursor-pointer w-xl mx-auto  rounded-lg transition-all
       hover:underline "
      >
        Ver Mais
      </p> */}
    </motion.div>
  );
}

export default Projects;
