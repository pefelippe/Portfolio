import { motion } from "framer-motion";
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

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
    // {
    //   id: 3,
    //   link: "",
    //   repo: "https://github.com/pefelippe/PomodoroTunes",
    //   title: "Pomodoro-fi",
    //   imgUrl: "assets/pomodorotunes.png",
    //   stack: ["react", "tailwind", "next", "typescript"],
    //   description:
    //     "Nesse projeto tentei uno a tranquilidade do lo-fi com o poderoso método pomodoro.",
    // },
  ];

  return (
    <motion.div
      id="projects"
      className="relative mx-auto w-full items-center justify-center h-fit "
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="h-fit w-full flex flex-col justify-center items-center  gap-10"
      >
        <ContentTitle title="Projetos" />
        <div
          className="w-full max-w-7xl justify-center items-center relative 
        grid grid-cols-1 gap-10 md:gap-40 mx-auto  "
        >
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
        <AnimatedBtn
          href="https://github.com/pefelippe?tab=repositories"
          target="_blank"
          className="text-white  mt-20 flex w-fit hover:underline mx-auto gap-2 items-center text-xl font-semibold text-center rounded-full  hover:text-[#5865f2] transition-all "
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex gap-1 items-center justify-center"
          >
            <FaAngleRight className="h-8 w-8 " />
            <p>Ver mais projetos</p>
          </motion.span>
        </AnimatedBtn>
      </motion.div>
    </motion.div>
  );
}

export default Projects;
