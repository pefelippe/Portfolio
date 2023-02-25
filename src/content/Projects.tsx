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
      id="projects"
      className="relative mx-auto px-8 w-screen items-center justify-center h-fit text-center snap-start"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-fit w-full flex flex-col justify-center items-center py-10  "
      >
        <ContentTitle title="Projetos" />
        <div className="w-full max-w-7xl py-10 justify-center items-center relative grid md:grid-cols-2 grid-cols-1 gap-10 mx-auto  ">
          {projects?.map((proj) => {
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
        <AnimatedBtn
          href="https://github.com/pefelippe?tab=repositories"
          target="_blank"
          className="flex w-fit  mx-auto gap-2 items-center text-lg font-semibold text-center p-4 px-  border-2 rounded-full  text-[#5865f2] transition-all "
        >
          <span>Repositórios no GitHub</span>
        </AnimatedBtn>
      </motion.div>
    </motion.div>
  );
}

export default Projects;
