import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div
      className="flex flex-col relative h-screen 
      justify-center mx-auto items-center text-center 
      xl:text-left  "
    >
      <h3 className="relative uppercase tracking-[20px] text-gray-300 text-2xl">
        Sobre
      </h3>

      <div className="flex flex-col xl:flex-row justify-center items-center space-y-5 mx-10 xl:space-x-20 max-xl:max-w-xl xl:max-w-7xl ">
        <motion.img
          initial={{ y: -150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          src="https://avatars.githubusercontent.com/u/38574428?v=4"
          className="flex-shrink-1 h-56 w-56 rounded-full object-cover z-20
          xl:w-[350px] xl:h-[350px] "
        />

        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col space-y-10 justify-center xl:h-[450px] max-md:mx-auto"
        >
          <h4 className="text-4xl font-semibold">
            <span className="underline decoration-[#F7AB0A]/50 ">
              Então, quem sou eu?
            </span>
          </h4>
          <p className="text-base md:text-xl">
            Sou um Web Developer com experiência em implementar componentes de
            interface de usuário responsivos e de qualidade. <br />
            <br />
            Minha stack principal é: React, Node e Typescript.
            <br />
            <br />
            Consigo me comunicar bem em inglês (nível C2), sendo acostumado a
            participarem reuniões em inglês com membros de vários países.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
