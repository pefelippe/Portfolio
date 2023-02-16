import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

import AnimatedBtn from "../components/motion/AnimatedBtn";
import Icons from "./../atoms/Icons";

export default function Hero() {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="min-h-[70vh] flex flex-col justify-center w-full text-center  mx-auto items-center h-fit py-10"
    >
      <div className=" font-bold tracking-tight text-white  ">
        <motion.p
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="text-[1.5rem] sm:text-[2rem]  text-[#a3a3a3]"
        >
          <Typewriter
            words={[
              "ViciadoEmCafé.tsx",
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
        <motion.h1
          className="w-full text-[#5865f2] sm:text-6xl
          text-[3.5rem] sm:text-[5rem] md:text-[6rem] xl:text-[7rem]"
        >
          Pedro Felippe
        </motion.h1>

        <motion.p
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.5 }}
          className="text-[2.5rem] sm:text-[4.5rem] "
        >
          Web Developer
        </motion.p>

        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="flex gap-6 justify-center  items-center pt-6"
        >
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            className="cursor-pointer px-4 md:px-6  text-center text-md md:text-xl  font-semibold rounded-xl  p-3 md:p-4 transition-all
            border-2 border-[#5865f2]  hover:underline"
          >
            <Link href="/AboutPage" target="">
              <p>Quem sou eu</p>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            className=" px-4 md:px-6 text-center text-md md:text-xl  font-semibold rounded-xl p-3 md:p-4 transition-all
            border-2 border-[#5865f2]/80 bg-[#5865f2]  hover:underline hover:bg-[#5865f2] hover:border-[#5865f2] "
          >
            <Link href="/Contact" target="">
              <p>Entre em contato!</p>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
