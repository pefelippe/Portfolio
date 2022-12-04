import { motion } from "framer-motion";
import Image from "next/image";

import React from "react";
import Skill from "../atoms/Skill";

import Avatar from "../public/assets/eu-2.jpg";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.25 }}
      className="component-base"
    >
      <h1 className="font-semibold text-5xl mb-28 text-gray-800">Sobre</h1>

      <div className="flex flex-col lg:flex-row h-max x">
        <Image
          src={Avatar}
          alt="pefelippe avatar"
          className="object-fit xl:h-[400px] xl:w-[400px] h-40 w-40
          shadow-xl rounded-[30px]"
        />

        <div className="relative ml-20 xl:ml-40 mt-8">
          <p className="text-sm text-left lg:text-2xl">
            Web Developer com experiência em implementar componentes de
            interface de usuário responsivos e de qualidade. <br />
            <br />
            Minha Stack principal é React, Node, Next e Typescript. <br />
            <br />
            Consigo me comunicar bem em inglês (nível C2), sendo acostumado a
            participarem reuniões em inglês com membros de vários países.
          </p>

          <button
            className="absolute bottom-0 text-base bg-gray-800 text-white
          border rounded-[20px] p-6 font-semibold flex mt-10 hover:bg-gray-700  transition"
          >
            Download CV
            <svg
              className="w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
