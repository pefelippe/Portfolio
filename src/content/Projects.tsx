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
      link: "",
      repo: "https://github.com/pefelippe/PomodoroTunes",
      title: "Pomodoro Tunes",
      imgUrl: "assets/pomodorotunes.png",
      description: "A união de música calma e pomodoro.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 2 }}
      className=" flex  w-full flex-col justify-between items-center mx-auto  gap-4"
      id="projetos"
    >
      <ContentTitle title="Projetos" />

      <div className="relative w-fit grid grid-cols-1 gap-8 mx-auto px-8  w-4xl">
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

      <p className="italic font-md max-w-sm text-center">
        Acompanhe meus outros projetos no meu{" "}
        <a
          className="font-semibold underline"
          href="https://github.com/pefelippe"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        .
      </p>
    </motion.div>
  );
}

export default Projects;
