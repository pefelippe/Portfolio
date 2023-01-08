import { motion } from "framer-motion";
import React from "react";
import { FaFileDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";

import Skill from "../components/Skill";

type Props = {};

function About({}: Props) {
  return (
    <div
      className="flex flex-col  xl:flex-row  justify-between items-center text-left  py-20 max-lg-px-5 mx-5 xl:mx-auto
       max-w-7xl  "
    >
      <div className="flex flex-col space-y-8 justify-center  max-w-2xl max-lg:items-center">
        <h4 className="text-4xl font-semibold ">
          <span className="underline bg-[#000] text-[#fff] p-2 ">
            Quem sou eu
          </span>
        </h4>

        <p className="text-base md:text-xl max-lg:pl-[20px]">
          Sou um Web Developer com experiência em implementar componentes de
          interface de usuário responsivos e de qualidade. <br />
          <br />
          Consigo me comunicar bem em inglês (nível C2), sendo acostumado a
          participarem reuniões em inglês com membros de vários países.
          <br />
        </p>
        <nav className="flex justify-start items-start  gap-5  pb-10">
          <a
            href="https://github.com/pefelippe"
            className="border-2 border-[#fff] hover:border-[#222] p-2 rounded-xl transition-all"
          >
            <FaGithub className="relative socialMediaIcon" />
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-felippe/"
            className="border-2 border-[#fff] hover:border-[#222] p-2 rounded-xl transition-all"
          >
            <FaLinkedinIn className="socialMediaIcon " />
          </a>
          <a
            href=""
            className="border-2 border-[#fff] hover:border-[#222] p-2 rounded-xl transition-all"
          >
            <FaFileDownload className="socialMediaIcon " />
          </a>
        </nav>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          x: 200,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-col overflow-hidden text-[#FFFFFFDE] p-5 rounded-xl space-y-8  justify-center "
      >
        <h4 className="text-4xl font-semibold mx-auto">
          <span className="underline bg-[#000] text-[#fff] p-2 ">Skills</span>
        </h4>
        <div className="grid grid-cols-4 md:grid-cols-6  xl:grid-cols-4 gap-5 max-lg:pt-5">
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
      </motion.div>
    </div>
  );
}

export default About;
