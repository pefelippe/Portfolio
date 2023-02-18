import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFilePdf, FaLinkedinIn, FaAngleDoubleRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

import AnimatedBtn from "../components/motion/AnimatedBtn";

export default function Hero() {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="min-h-fit h-[40vh] relative flex w-full justify-center mx-auto  max-md:flex-col max-w-4xl px-8 "
    >
      <div className="flex w-full flex-col text-center items-center justify-center mx-auto ">
        {/* <motion.img
          alt="avatar-pefelippe"
          src="assets/avatar-pdr.png"
          className="rounded-full h-[150px] w-[150px]  border-4 hover:border-0 transition-all "
        /> */}

        <motion.p
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="text-[22px] tracking-[2.2px] font-semibold uppercase text-[#a3a3a3]"
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

        <h1 className=" text-[#5865f2] uppercase text-[3rem] md:text-[4.5rem] font-semibold tracking-[2.2px]">
          Pedro Felippe
        </h1>

        <p className=" text-gray-400 max-w-xl mx-auto text-[0.8rem] md:text-[1.1rem]">
          Sou um{" "}
          <span className="text-[#5865f2]  font-semibold">Web Developer</span>{" "}
          com mais de três anos de experiência em construir soluções inovadoras
          na web. Possuo profundo conhecimento em tecnologias como{" "}
          <span className=" font-semibold">
            React, Next Node, Typescript e AWS
          </span>
          .
        </p>
        <div className="pt-4 flex gap-6 ">
          <div className="flex gap-3">
            <AnimatedBtn
              className="iconHeader"
              href="https://github.com/pefelippe"
            >
              <FaGithub className="h-8 w-8  " />
            </AnimatedBtn>

            <AnimatedBtn
              className="iconHeader"
              href="https://www.linkedin.com/in/pedro-felippe/"
            >
              <FaLinkedinIn className="h-8 w-8  text-[#fff]" />
            </AnimatedBtn>

            <AnimatedBtn
              className="iconHeader"
              href="https://resume.io/r/m2cn8pnqu"
            >
              <div className="flex items-center space-x-2">
                <FaFilePdf className="h-8 w-8  text-[#fff]" />
              </div>
            </AnimatedBtn>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
