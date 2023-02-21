import { motion } from "framer-motion";
import React from "react";

import ContentTitle from "../src/atoms/ContentTitle";
import AnimatedBtn from "../src/components/motion/AnimatedBtn";
import ProjectCard from "../src/components/ProjectCard";

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
      className="relative px-6 mx-auto  w-screen
      items-center justify-center h-fit 
      text-center bg-[#fefefe] shadow-md  border-[#242424]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="min-h-[80vh] h-fit w-full flex flex-col justify-center items-center py-10"
      >
        <ContentTitle title="Projetos" />

        <p className="italic text-sm pt-4">Clique no card para ver detalhes</p>
        <div className="py-10 justify-center items-center relat.ive grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 mx-auto  ">
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
          className="flex w-fit  mx-auto gap-2 items-center text-md font-semibold text-center p-4 px-8 border-2 rounded-full  bg-[#5865f2] transition-all text-[#fff]"
        >
          <span>Visite meu Github para mais projetos</span>
        </AnimatedBtn>
      </motion.div>
    </motion.div>
  );
}

export default Projects;
