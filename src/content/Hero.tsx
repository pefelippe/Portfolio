import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaAngleDoubleRight, FaFilePdf, FaLinkedinIn } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

import AnimatedBtn from "../components/motion/AnimatedBtn";

export default function Hero() {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2.5 }}
      className=" min-h-[70vh] relative flex w-full flex-col  items-center justify-center
       mx-auto max-w-4xl px-8 "
    >
      <motion.p
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="text-[22px] tracking-[2.2px] font-semibold text-center uppercase text-[#a3a3a3]"
      >
        <Typewriter
          words={[
            "SOFTWARE ENGINEER",
            "FRONT END",
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
        className="rounded-full h-[180px] w-[180px] mt-4"
      />
      <div className="flex flex-col items-center justify-items-center">
        <p className=" text-[#5865f2] text-center uppercase text-[2rem] md:text-[4rem] font-bold tracking-[5px]">
          Pedro Felippe
        </p>

        <p className=" text-gray-400 text-center max-w-xl mx-auto text-[1rem] md:text-[1.15rem]">
          Sou um{" "}
          <span className="text-[#5865f2] font-semibold">Web Developer</span>{" "}
          com mais de três anos de experiência em construir soluções inovadoras
          na web. Possuo profundo conhecimento em tecnologias como{" "}
          <span className=" font-semibold">
            React, Next, Node, Typescript e AWS
          </span>
          .
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href="/Contact"
          target=""
          className=" items-center justify-center flex gap-2 p-4 px-8 my-4
        w-fit text-lg md:text-xl mx auto rounded-full font-semibold 
        transition-all   hover:bg-[#5865f2]/70 bg-[#5865f2]   hover:underline"
        >
          <p>Envie uma mensagem</p>
        </Link>
      </div>
    </motion.div>
  );
}
