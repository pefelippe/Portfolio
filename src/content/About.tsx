import { motion } from "framer-motion";
import React from "react";

import AboutIcons from "../components/atoms/AboutIcons";
import AboutImg from "../components/atoms/AboutImg";

type Props = {};

function About({}: Props) {
  return (
    <div
      className="flex flex-col  xl:flex-row  justify-between  max-xl:items-center text-left  py-20 max-lg-px-5 mx-5 xl:mx-auto
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
      >
        <AboutImg />
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
        className="flex flex-col justify-center max-xl:items-center   max-w-3xl "
      >
        <h4 className=" text-4xl font-semibold">
          <span className=" text-[#000] ">Quem sou eu</span>
        </h4>

        <p className="text-base md:text-xl max-lg:p-[20px] max-lg:text-center pt-5">
          Tenho experiência em implementar componentes de interface de usuário
          responsivos e de qualidade. <br />
          <br />
          Consigo me comunicar bem em inglês (nível C2), sendo acostumado a
          participarem reuniões em inglês com membros de vários países.
          <br />
          <br />
          Atualmente como Web Developer no{" "}
          <a
            href="https://www.atlantico.com.br/"
            className="font-semibold underline text-[#5865f2]"
          >
            Instituto Atlântico
          </a>
        </p>
      </motion.div>
    </div>
  );
}

export default About;
