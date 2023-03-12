import { motion } from "framer-motion";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import SocialLinks from "../components/SocialLinks";

export default function Hero() {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative mx-auto w-full flex justify-start md:justify-center items-center max-w-7xl md:py-20 text-white "
    >
      <motion.img
        alt="avatar-pefelippe"
        src="assets/avatar-pdr.png"
        className="rounded-full  max-h-[300px]  md:mr-20 max-md:hidden
      transition-all shadow-md object-fit border-1 border-[#121212]"
      />

      <div className="flex flex-col justify-start md:justify-center items-start ">
        <motion.p
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[22px] tracking-[2.2px] font-semibold text-start uppercase text-[#a3a3a3] my-4"
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
        text-5xl lg:text-7xl bg-[#5865f2]
        "
        >
          Pedro Felippe
        </p>

        <SocialLinks />
      </div>
    </motion.div>
  );
}
