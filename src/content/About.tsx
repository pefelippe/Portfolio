import { motion } from "framer-motion";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div
      className="flex flex-col relative h-screen space-x-20 max-w-7xl 
      justify-center mx-auto items-center text-center w-fit 
      md:text-left lg:flex-row  "
    >
      <h3 className="absolute top-28 sm:top-32 uppercase tracking-[20px] text-gray-300 text-2xl">
        Sobre
      </h3>

      <motion.img
        initial={{ y: -150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        src="https://avatars.githubusercontent.com/u/38574428?v=4"
        className="flex-shrink-1 h-56 w-56 rounded-full object-cover z-20
          xl:w-[350px] xl:h-[350px]  max-xl:mr-20"
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
          Minha Stack principal é: React, Node e Typescript.
          <br />
          <br /> Consigo me comunicar bem em inglês (nível C2), sendo acostumado
          a participarem reuniões em inglês com membros de vários países.
        </p>
        {/* <div className="flex max-md:mx-auto max-md:space-y-5 md:space-x-6 justify-center sm:justify-start flex-row"> */}
        {/* <button
            className="flex p-5 rounded-lg text-2xl  bg-[#000] hover:bg-[#000]/50
            justify-center"
          >
            <a href="#" className="flex items-center gap-2">
              <FaGithub className="h-6 w-6" />
              <span className="max-md:hidden">Github</span>
            </a>
          </button>

          <button
            className="flex p-5 rounded-lg text-2xl w-[200px] bg-[#000]  hover:bg-[#000]/50
            justify-center"
          >
            <a href="#" className="flex items-center gap-2">
              <FaLinkedinIn className="h-6 w-6 " />
              <span>Linkedin</span>
            </a>
          </button> */}

        {/* <button
            className="flex p-5 rounded-lg text-2xl w-[200px] bg-[#000]  hover:bg-[#000]/50
           justify-center"
          >
            <a href="#" className="flex items-center gap-2">
              <FaFileDownload className="h-6 w-6 " />
              <span>Currículo</span>
            </a>
          </button> */}
        {/* </div> */}
      </motion.div>
    </div>
  );
}

export default About;
