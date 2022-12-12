import { motion } from "framer-motion";
import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

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
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        src="https://media-exp1.licdn.com/dms/image/D4D03AQE28xUjOpRMFQ/profile-displayphoto-shrink_800_800/0/1670388183529?e=1675900800&v=beta&t=R9vyVJwpYIa8m4moXmVgDxFh988KmPx2PbrBf5QEw1o"
        className="mt-20 mb-20 md:mb-0 flex-shrink-0 h-56 w-56 rounded-lg object-cover z-20
         md:w-64 md:h-95 xl:w-[350px] xl:h-[450px] "
      />

      <div className="space-y-10  md:px-20 z-20">
        <h4 className="text-4xl font-semibold">
          {" "}
          Então, <br />
          <span className="underline decoration-[#F7AB0A]/50">
            quem sou eu?
          </span>
        </h4>
        <p className="text-xl">
          Sou um Web Developer com experiência em implementar componentes de
          interface de usuário responsivos e de qualidade. Minha Stack principal
          é React, Node, Next e Typescript. Consigo me comunicar bem em inglês
          (nível C2), sendo acostumado a participarem reuniões em inglês com
          membros de vários países.
        </p>

        <button
          className=" p-5 rounded-xl text-2xl w-[200px] 
          bg-[#0a0a0a] hover:bg-[#F7AB0A]/90 transition"
        >
          Currículo
        </button>
      </div>
    </div>
  );
}

export default About;
