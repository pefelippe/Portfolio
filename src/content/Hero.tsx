import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <motion.div
      className="relative px-6 gap-4 mx-auto  w-screen snap-center
      flex flex-col items-center justify-center h-fit  py-20
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

        {/* <div className="w-full mt-4 flex flex-col max-sm:gap-3 gap-6 sm:flex-row items-center justify-center text-lg max-sm:px-8 font-semibold">
          <Link
            href="#projects"
            target=""
            className="w-full inline-flex  items-center justify-center rounded-md border-2 hover:underline bg-[#fff]  text-[#000] 
             px-6 font-semibold
            py-4 text-center  duration-200  lg:w-auto hover:rounded-2xl"
          >
            <span>Meus Projetos</span>
          </Link>

          <Link
            href="#contact"
            target=""
            className="w-full inline-flex  items-center justify-center px-6 py-4 border-2 rounded-md hover:rounded-2xl hover:underline 
            border-[#5865f2] bg-[#5865f2]  text-[#fff] 
            text-center text-black duration-200 focus:outline-none focus-visible:outline-gray-600 focus-visible:ring-gray-300 lg:w-auto font-semibold"
          >
            <span> Entre em contato </span>
          </Link>
        </div> */}
      </motion.div>
    </motion.div>
  );
}
