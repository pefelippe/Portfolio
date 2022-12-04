import { motion } from "framer-motion";
import Image from "next/image";

import React from "react";
import SocialIcons from "../atoms/SocialIcons";

import Avatar from "../public/assets/eu-2.jpg";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.25 }}
      className="h-screen flex relative overflow-hidden flex-col text-left 
      max-w-7xl justify-center mx-auto items-center"
    >
      <h1 className="absolute top-36 font-semibold text-5xl mb-28 text-gray-800">
        Sobre
      </h1>

      <div className="relative flex flex-col xl:flex-row top-20 xl:top-10">
        <Image
          src={Avatar}
          alt="pefelippe avatar"
          className="relative object-fit xl:h-[350px] xl:w-[350px] h-48 w-48 rounded-[30px] mx-auto hover:shadow"
        />

        <div className="flex flex-col mx-20 ">
          <div className="flex justify-evenly">
            <p className="text-base xl:text-2xl my-4 text-center xl:text-left">
              Web Developer com experiência em implementar componentes de
              interface de usuário responsivos e de qualidade. <br />
              <br />
              Minha Stack principal é React, Node, Next e Typescript. <br />
              <br />
              Consigo me comunicar bem em inglês (nível C2), sendo acostumado a
              participarem reuniões em inglês com membros de vários países.
            </p>
          </div>
          <div className=" flex justify-center xl:justify-start my-auto">
            <button
              className=" text-base bg-gray-800 text-white hover:bg-gray-900 hover:text-gray-100 
            border rounded-[20px] p-6 font-semibold flex 
            transition duration-300 "
            >
              <svg
                className="w-6 h-6 mr-2 "
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
              Download CV
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
