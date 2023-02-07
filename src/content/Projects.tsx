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
      imgUrl: "assets/portfolio.png",
      description: "Meu portfolio pessoal.",
    },
    {
      id: 2,
      link: "https://portfolio-pefelippe.vercel.app/",
      imgUrl: "assets/portfolio.png",
      description: "Meu portfolio pessoal.",
    },
    {
      id: 3,
      link: "https://portfolio-pefelippe.vercel.app/",
      imgUrl: "assets/portfolio.png",
      description: "Meu portfolio pessoal.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 2 }}
      className="contentStyle justify-center items-center mx-auto px-8"
    >
      <ContentTitle title="Meus Projetos" />

      <div className="relative max-w-7xl w-full grid lg:grid-cols-3  grid-cols-1 gap-8  justify-center items-center mx-auto ">
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
      {/* <p className=" text-xl flex justify-center cursor-pointer w-full mx-auto border-2 px-20 py-2 rounded-lg transition-all hover:underline hover:bg-[#e5e5e5]">
        Ver Mais
      </p> */}
    </motion.div>
  );
}

export default Projects;
