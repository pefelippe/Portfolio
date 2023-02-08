import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center  mx-auto
     w-full max-w-7xl  text-center space-y-8 "
     >

      <div
        className="space-y-6  text-4xl font-bold tracking-tight text-white sm:text-6xl 
         text-[4rem] sm:text-[5rem] xl:text-[7rem] "
      >
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
          transition={{ duration: 1 }}
          className="w-full text-[#5865f2]"
        >
          Pedro Felippe
        </motion.h1>

        <motion.p
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="text-[3rem] sm:text-[4rem] "
        >
          Web Developer{" "}
        </motion.p>

        <motion.div  initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 2 }} className="flex gap-8 justify-center">

          <motion.button className="text-xl rounded-xl border-2 border-[#5865f2] transition-all
           hover:bg-[#5865f2] hover:underline px-6 p-4"> 
          
            <Link
              className="w-fit rounded-xl   font-semibold "
              href="/projects"
            >
              <p>Meus Projetos</p>
            </Link>
          </motion.button>
       
        </motion.div>

        </div>


    </motion.div>
  );
}
