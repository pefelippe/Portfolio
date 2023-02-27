import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <motion.div
      className="relative px-6 gap-4 mx-auto  w-full snap-center
      flex flex-col items-center justify-center h-fit 
      text-center shadow-md text-[#fff]"
    >
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full flex flex-col items-center justify-center gap-4"
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

        <p
          className="text-[#5865f2] text-center uppercase font-bold 
        text-4xl tracking-tighter text-black lg:text-7xl"
        >
          Pedro Felippe
        </p>

        <p
          className=" text-center uppercase font-bold 
        text-3xl tracking-tighter text-semibold lg:text-4xl"
        >
          Web Developer
        </p>
      </motion.div>
    </motion.div>
  );
}
