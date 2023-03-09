import { motion } from "framer-motion";
import React from "react";
import {
  SiAmazonaws,
  SiDocker,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import ContentTitle from "../src/components/ContentTitle";
import Experience from "../src/content/Experience";
import SkillBox from "../src/content/SkillBox";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className=" flex flex-col h-full w-full max-w-7xl  text-xl text-[#fff] mx-auto  snap-center gap-10 lg:gap-20"
    >
      <ContentTitle title="Quem sou" />

      <div
        className=" flex flex-col w-full mx-auto lg:flex-row
        items-center justify-start  rounded-2xl  shadow-md gap-4 lg:gap-20 "
      >
        <motion.img
          alt="avatar-pefelippe"
          src="assets/avatar-pdr.png"
          className="rounded-xl h-full  max-lg:h-[200px] max-lg:rounded-full
          transition-all shadow-md object-fit border-1 border-[#121212]"
        />

        <motion.span
          className="w-full flex flex-col  max-lg:text-center gap-10
         text-[1.2rem]  lg:text-[1.3rem] text-gray-100 "
        >
          <p>
            Sou um{" "}
            <span className="text-[#5865f2]  font-semibold">Web Developer</span>{" "}
            com mais de três anos de experiência em construir soluções
            inovadoras na web. Possuo profundo conhecimento em tecnologias como{" "}
            <span className=" font-semibold underline decoration-[#5865f2]">
              React, Next, Node, Typescript e AWS
            </span>
            . <br />
            <br />
            Atualmente finalizando meu diploma em{" "}
            <span className="font-semibold ">Ciência da Computação</span> na
            UFC. Além disso, trabalho como Web Developer no{" "}
            <a
              href="https://www.atlantico.com.br/"
              rel="noreferrer"
              target="_blank"
              className="text-[#5865f2] font-semibold underline"
            >
              Instituto Atlântico
            </a>
            .
          </p>

          <button className="w-full border-2 p-4 rounded-xl font-semibold transition-all hover:text-[#fff] hover:bg-[#5865f2] border-[#5865f2] text-[#5865f2] ">
            Currículo
          </button>
        </motion.span>
      </div>


      {/* <Experience /> */}
    </motion.div>
  );
}

export default About;
