import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

import AnimatedBtn from "../components/motion/AnimatedBtn";

export default function Hero() {
  return (
    <motion.div
      className="relative px-6 mx-auto  w-full flex flex-col items-center 
      justify-center h-fit text-center shadow-md text-[#fff]"
    >
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full flex flex-col items-center justify-center md:gap-4"
      >
        {/* <motion.p
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
        </motion.p> */}

        <motion.img
          alt="avatar-pefelippe"
          src="assets/avatar-pdr.png"
          className="rounded-full h-[180px] transition-all shadow-md object-cover border-1 border-[#121212]"
        />
        <p
          className="text-[#5865f2] text-center uppercase font-bold 
        text-[2.5rem] tracking-tighter text-black lg:text-6xl"
        >
          Pedro Felippe
        </p>

        <p className=" text-[1.2rem] max-w-xl text-gray-200">
          Sou um{" "}
          <span className="text-[#5865f2]  font-semibold">Web Developer</span>{" "}
          com mais de três anos de experiência em construir soluções inovadoras
          na web.
        </p>

        {/* <AnimatedBtn
          href="https://github.com/pefelippe?tab=repositories"
          target="_blank"
          className="flex w-fit  mx-auto gap-2 items-center text-xl font-semibold text-center p-4 px-10 
           border-2 rounded-xl  text-[#5865f2] transition-all "
        >
          <span>Currículo</span> 
        </AnimatedBtn>*/}

        <div className="max-md:pt-4 flex gap-8  justify-center">
          <AnimatedBtn className=" " href="https://github.com/pefelippe">
            <FaGithub className="h-8 w-8 text-white hover:text-[#5865f2]" />
          </AnimatedBtn>

          <AnimatedBtn
            className=""
            href="https://www.linkedin.com/in/pedro-felippe/"
          >
            <FaLinkedinIn className="h-8 w-8 text-white hover:text-[#5865f2] " />
          </AnimatedBtn>

          <AnimatedBtn className="" href="https://resume.io/r/m2cn8pnqu">
            <FaFilePdf className="h-8 w-8 text-white hover:text-[#5865f2]" />
          </AnimatedBtn>
        </div>
      </motion.div>
    </motion.div>
  );
}
