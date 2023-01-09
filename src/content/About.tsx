import { motion } from "framer-motion";
import React from "react";
import { FaFileDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";

import Skill from "../components/Skill";

type Props = {};

function About({}: Props) {
  return (
    <div
      className="flex flex-col  xl:flex-row  justify-around  text-left  py-20 max-lg-px-5 mx-5 xl:mx-auto
       max-w-7xl  max-xl:space-y-6"
    >
      <motion.div
        initial={{
          opacity: 0,
          x: -200,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 2.5,
        }}
        className="flex flex-col max-xl:items-center justify-between  max-w-xl  h-[450px]"
      >
        <h4 className="text-4xl font-semibold ">
          <span className="underline bg-[#000] text-[#fff] p-2 ">
            Quem sou eu
          </span>
        </h4>

        <p className="text-base md:text-xl max-lg:pl-[20px]">
          Tenho experiência em implementar componentes de interface de usuário
          responsivos e de qualidade. <br />
          <br />
          Consigo me comunicar bem em inglês (nível C2), sendo acostumado a
          participarem reuniões em inglês com membros de vários países.
          <br />
          <br />
          Atuo como Web Developer no{" "}
          <a
            href="https://www.atlantico.com.br/"
            className="font-semibold underline text-[#5865f2]"
          >
            Instituto Atlântico
          </a>
          .
        </p>

        <nav className="flex flex-col justify-start items-start  ">
          <h3 className="text-4xl font-semibold underline bg-[#000] text-[#fff] p-2 ">
            Redes Sociais{" "}
          </h3>
          <div className="flex gap-5 pt-4">
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
          </div>
        </nav>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: 200,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 2.5,
        }}
        className="flex flex-col  max-xl:items-center justify-center overflow-hidden text-[#FFFFFFDE] max-w-xl space-y-8 "
      >
        <h4 className="text-4xl font-semibold p-2">
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
