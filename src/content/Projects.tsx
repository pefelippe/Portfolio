import { motion } from "framer-motion";

import React from "react";

import ContentTitle from "../atoms/ContentTitle";
import ProjectCard from "../components/ProjectCard";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      id: 1,
      link: "https://portfolio-pefelippe.vercel.app/",
      imgUrl: "assets/portfolio.png",
      description: "Meu portfolio pessoal.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="contentStyle justify-center items-center mx-auto px-8"
    >
      <ContentTitle title="E meus Projetos?" />

      <div className="relative w-full grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8 z-20 justify-center items-center mx-auto ">
        {projects.map((proj) => {
          return (
            <ProjectCard
              key={proj.id}
              description={proj.description}
              imgUrl={proj.imgUrl}
              link={proj.link}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default Projects;
