import { motion } from "framer-motion";
import React from "react";
import { FaFileDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";

type Props = {};

function About({}: Props) {
  return (
    <div
      className="flex flex-col relative h-screen text-center  max-w-7xl px-10  justify-center mx-auto items-center
      md:text-left md:flex-row "
    >
      <h3 className="absolute top-28 sm:top-32 uppercase tracking-[20px] text-gray-300 text-2xl">
        Sobre
      </h3>

      <motion.img
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        src="https://media.licdn.com/dms/image/D4D03AQEV32TdI5A69Q/profile-displayphoto-shrink_800_800/0/1671222118350?e=1677110400&v=beta&t=CKLSno9x4-_2wVGR1-CR3jXBB8haYqRCn0F6jImvOF8"
        className="mt-20 mb-20 md:mb-0 flex-shrink-0 h-56 w-56 rounded-lg object-cover z-20
         md:w-64 md:h-95 xl:w-[350px] xl:h-[450px] "
      />

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="space-y-10  md:px-20 z-20"
      >
        <h4 className="text-4xl font-semibold">
          <span className="underline decoration-[#F7AB0A]/50">
            Então, quem sou eu?
          </span>
        </h4>
        <p className="text-xl">
          Sou um Web Developer com experiência em implementar componentes de
          interface de usuário responsivos e de qualidade. <br />
          <br />
          Minha Stack principal é React, Node, Next e Typescript. <br /> <br />
          Consigo me comunicar bem em inglês (nível C2), sendo acostumado a
          participarem reuniões em inglês com membros de vários países.
        </p>
        <div className="flex absolute space-x-6">
          <button
            className="flex p-5 rounded-lg text-2xl w-[200px] bg-[#000] hover:bg-[#000]/50
            justify-center"
          >
            <a href="#" className="flex items-center gap-2">
              <FaGithub className="h-6 w-6" /> <span>Github</span>
            </a>
          </button>

          <button
            className="flex p-5 rounded-lg text-2xl w-[200px] bg-[#000]  hover:bg-[#000]/50
            justify-center"
          >
            <a href="#" className="flex items-center gap-2">
              <FaLinkedinIn className="h-6 w-6 " /> <span>Linkedin</span>
            </a>
          </button>

          <button
            className="flex p-5 rounded-lg text-2xl w-[200px] bg-[#000]  hover:bg-[#000]/50
           justify-center"
          >
            <a href="#" className="flex items-center gap-2">
              <FaFileDownload className="h-6 w-6 " /> <span>Currículo</span>
            </a>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
