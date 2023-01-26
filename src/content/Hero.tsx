import { motion } from "framer-motion";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaFileAlt } from "react-icons/fa";

import AnimatedBtn from "../components/motion/AnimatedBtn";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="relative  flex flex-col mx-auto 
     text-center  w-full  max-w-7xl justify-center items-center space-y-10"
    >
      <div
        className="space-y-6 text-center text-4xl font-bold tracking-tight text-white sm:text-6xl 
         text-[4rem] sm:text-[5rem] xl:text-[6rem]  2xl:text-[6.5rem] "
      >
        <h1 className="w-full text-[#5865f2]">Pedro Felippe</h1>

        <p className="text-[3rem] sm:text-[4rem] xl:text-[5rem]">
          Web Developer{" "}
        </p>

        <p className="text-[1.5rem] sm:text-[2rem] text-center text-[#a3a3a3]">
          <Typewriter
            words={[
              "ViciadoEmCafé.tsx",
              "Tailwind <3",
              "i write coffe code and drink javascript",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={75}
            deleteSpeed={75}
            delaySpeed={2000}
          />
        </p>
        {/* <div className="w-full flex justify-center gap-8">
          <AnimatedBtn className="" href="https://read.cv/felippe_fernandes">
            <button className="w-[150px] flex  justify-center items-center rounded-xl  text-lg font-semibold px-4 py-3 mt-4 border-2">
              <p>Sobre Mim</p>
            </button>
          </AnimatedBtn>
          <AnimatedBtn className="" href="https://read.cv/felippe_fernandes">
            <button className=" flex items-center space-x-2 rounded-xl  text-lg font-semibold px-4 py-3 mt-4 border-2">
              <FaFileAlt className=" h-6 w-6 " /> <p>Currículo</p>
            </button>
          </AnimatedBtn>
        </div> */}
      </div>
    </motion.div>
  );
}
