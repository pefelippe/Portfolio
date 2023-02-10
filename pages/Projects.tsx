import { motion } from "framer-motion";
import React from "react";

import ContentTitle from "../src/atoms/ContentTitle";
import AnimatedBtn from "../src/components/motion/AnimatedBtn";
import ProjectCard from "../src/components/ProjectCard";

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

    // {
    //   id: 2,
    //   link: "https://portfolio-pefelippe.vercel.app/",
    //   repo: "https://github.com/pefelippe",
    //   title: "Portfolio",
    //   imgUrl: "assets/portfolio.png",
    //   description: "Uma radio lo-fi.",
    // },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 1.5 }}
      className=" flex flex-col justify-center items-center mx-auto gap-8"
      id="projetos"
    >
      <ContentTitle title="Meus projetos" />

      <div className="relative w-fit grid xl:grid-cols-1 grid-cols-1 gap-12 mx-auto ">
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
