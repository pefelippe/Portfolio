import { motion } from "framer-motion";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

import SocialLinks from "../components/SocialLinks";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto w-full flex justify-start 
       items-center max-md:items-center max-w-7xl text-white min-h-[50vh]"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="w-fit flex flex-col items-center md:items-start gap-6"
      >
        <motion.p
          className="text-[22px] tracking-[2.2px]   font-semibold 
          uppercase text-[#a3a3a3] "
        >
          <Typewriter
            words={[
              "Web Developer",
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
          className="text-[#fff] text-center uppercase font-bold 
        text-4xl lg:text-7xl bg-[#5865f2]  
        "
        >
          Pedro Felippe
        </p>

        <p
          className="w-full flex flex-col h-full max-md:text-center gap-10
     text-[1.1rem]  text-gray-100 max-w-xl"
        >
          Sou um Web Developer com mais de três anos de experiência em construir
          soluções de qualidade para web.
        </p>

        <SocialLinks />
      </motion.div>

      {/* <motion.img
        alt="avatar-pefelippe"
        src="assets/avatar-pdr.png"
        className="rounded-full h-full max-h-[250px] transition-all shadow-md object-fit "
      /> */}
    </motion.div>
  );
}
