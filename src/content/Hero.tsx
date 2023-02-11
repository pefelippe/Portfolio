import { motion } from "framer-motion";
import Link from "next/link";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <motion.div className="flex flex-col w-full max-w-7xl  text-center  ">
      <div className="xl:space-y-6 font-bold tracking-tight text-white  ">
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
              "i write coffe code and drink javascript",
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
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2.5 }}
          className="w-full text-[#5865f2] sm:text-6xl
          text-[4rem] sm:text-[5rem] xl:text-[8rem]"
        >
          Pedro Felippe
        </motion.h1>

        <motion.p
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.5 }}
          className="text-[3rem] sm:text-[4.5rem] "
        >
          Web Developer{" "}
        </motion.p>

        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="flex gap-8 justify-center items-center"
        >
          <Link
            href="/About"
            target=""
            className="px-6  text-center text-xl  font-semibold rounded-xl p-5 transition-all  hover:underline text-[#5865f2]"
          >
            Quem sou?
          </Link>

          <Link
            href="/Contact"
            target=""
            className="px-6 text-center text-xl  font-semibold rounded-xl p-5 transition-all bg-[#5865f2]/80  hover:underline hover:bg-[#5865f2]"
          >
            Entre em contato
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
