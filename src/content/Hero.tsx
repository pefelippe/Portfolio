import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import {
  FaAngleDoubleRight,
  FaFilePdf,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

import AnimatedBtn from "../components/motion/AnimatedBtn";

export default function Hero() {
  return (
    <motion.div
      className="relative px-6 gap-4 mx-auto min-h-[80vh] w-screen
      flex flex-col items-center justify-center h-fit py-6 md:flex-row
      text-center  shadow-md text-[#fff]"
    >
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center gap-4"
      >
        <motion.p
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[22px] tracking-[2.2px] font-semibold text-center uppercase text-[#a3a3a3]"
        >
          <Typewriter
            words={[
              "SOFTWARE ENGINEER",
              "FRONT END",
              "and BACK END TOO",
              "Tailwind <3",
              "i write coffe",
              "i drink javascript",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={75}
            deleteSpeed={75}
            delaySpeed={2000}
          />
        </motion.p>

        <motion.img
          alt="avatar-pefelippe"
          src="assets/avatar-pdr.png"
          className="rounded-full h-[180px] w-[180px] "
        />
        <p
          className="text-[#5865f2] text-center uppercase font-bold 
        text-4xl tracking-tighter text-black lg:text-5xl"
        >
          Pedro Felippe
        </p>

        <p className="w-full max-w-xl  text-lg tracking-tight text-gray-600">
          Sou um{" "}
          <span className="text-[#5865f2] font-semibold">Web Developer</span>{" "}
          com mais de três anos de experiência em construir soluções inovadoras
          na web. Possuo profundo conhecimento em tecnologias como{" "}
          <span className=" font-semibold">
            React, Next, Node, Typescript e AWS
          </span>
          .
        </p>

        <div className="w-full mt-2 flex flex-col max-sm:gap-3 gap-6 sm:flex-row items-center justify-center text-lg max-sm:px-8 font-semibold">
          <Link
            href="/Projects"
            target=""
            className="w-full inline-flex  items-center justify-center rounded-xl border-2 hover:underline bg-[#fff] hover:border-[#5865f2] text-[#000]  px-6 font-semibold
            py-4 text-center  duration-200  lg:w-auto"
          >
            <span>Meus Projetos</span>
          </Link>

          <Link
            href="/Contact"
            target=""
            className="w-full inline-flex  items-center justify-center px-6 py-4 border-2  rounded-xl hover:underline 
            border-[#5865f2] bg-[#5865f2] hover:border-[#fff] text-[#fff] 
            text-center text-black duration-200 focus:outline-none focus-visible:outline-gray-600 focus-visible:ring-gray-300 lg:w-auto font-semibold"
          >
            <span> Entre em contato </span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
