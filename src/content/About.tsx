import { motion } from "framer-motion";
import React from "react";

import Skill from "../components/Skill";

type Props = {};

function About({}: Props) {
  return (
    <div
      className="flex flex-col  lg:flex-row  justify-between items-center text-left  py-20 max-lg-px-5 mx-5 xl:mx-auto
       max-w-7xl  "
    >
      <div className="flex flex-col space-y-8 justify-center  max-w-2xl">
        <h4 className="text-4xl font-semibold ">
          <span className="underline bg-[#000] text-[#fff] p-2 ">
            Quem sou eu
          </span>
        </h4>

        <p className="text-base md:text-xl">
          Sou um Web Developer com experiência em implementar componentes de
          interface de usuário responsivos e de qualidade. <br />
          <br />
          Consigo me comunicar bem em inglês (nível C2), sendo acostumado a
          participarem reuniões em inglês com membros de vários países.
          <br />
          <br />
          Minha stack principal é: React, Node e Typescript.
          <br />
        </p>
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
        className="overflow-hidden text-[#FFFFFFDE] p-5 rounded-xl   "
      >
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-5 ">
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
