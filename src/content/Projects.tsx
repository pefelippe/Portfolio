import { motion } from "framer-motion";
import React from "react";

import ContentTitle from "../atoms/ContentTitle";
import AnimatedBtn from "../components/motion/AnimatedBtn";
import ProjectCard from "../components/ProjectCard";

interface ProjectCard {
  id: number;
  description: string;
  imgUrl: string;
  link: string;
  title: string;
  repo: string;
}

type ProjectsType = {
  projects?: ProjectCard[];
};

function Projects() {
  const projects = [
    {
      id: 1,
      link: "https://portfolio-pefelippe.vercel.app/",
      repo: "https://github.com/pefelippe/Portfolio",
      title: "Portfolio",
      imgUrl: "assets/portfolio.png",
      stack: ["react", "tailwind", "next", "typescript"],
      description:
        "Meu primeiro portfolio pessoal, com objetivo de mostrar meus projetos, habilidades e um pouco mais sobre mim. ",
    },
    {
      id: 2,
      link: "",
      repo: "https://github.com/pefelippe/PomodoroTunes",
      title: "Pomodoro-fi",
      imgUrl: "assets/pomodorotunes.png",
      stack: ["react", "tailwind", "next", "typescript"],
      description:
        "Nesse projeto tentei uno a tranquilidade do lo-fi com o poderoso método pomodoro.",
    },
  ];

  return (
    <motion.div
      id="projects"
      className="relative mx-auto  w-full items-center justify-center h-fit text-center snap-start"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-fit w-full flex flex-col justify-center items-center  gap-10 xl:gap-20 "
      >
        <ContentTitle title="Projetos" />
        <div className="w-full max-w-7xl justify-center items-center relative grid grid-cols-1 gap-20 xl:gap-32 mx-auto  ">
          {projects?.map((proj) => {
            return (
              <ProjectCard
                key={proj.id}
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
        {/* <AnimatedBtn
          href="https://github.com/pefelippe?tab=repositories"
          target="_blank"
          className="flex w-fit  mx-auto gap-2 items-center text-lg font-semibold text-center p-4 px-6  border-2 rounded-full  text-[#5865f2] transition-all "
        >
          <span>Repositórios no GitHub</span>
        </AnimatedBtn> */}
      </motion.div>
    </motion.div>
  );
}

export default Projects;
