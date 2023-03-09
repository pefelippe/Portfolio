import { motion } from "framer-motion";
import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import AnimatedBtn from "../components/animated/AnimatedBtn";
import SocialLinks from "../components/SocialLinks";

export default function Hero() {
  return (
    <motion.div
      className="relative px-6 mx-auto  w-full flex flex-col items-center 
      justify-center text-center shadow-md text-[#fff]"
    >
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full flex flex-col items-center justify-center gap-4"
      >
        <motion.img
          alt="avatar-pefelippe"
          src="assets/avatar-pdr.png"
          className="rounded-full h-[180px] 
          transition-all shadow-md object-fit  border-[#fff] border-2"
        />

        <p
          className="text-[#fff] text-center uppercase font-bold 
        text-[2.5rem] lg:text-5xl"
        >
          Pedro Felippe
        </p>

        {/* <motion.p
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[22px] tracking-[2.2px] font-semibold text-center uppercase text-[#a3a3a3] my-4"
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
        </motion.p> */}
        <SocialLinks />
      </motion.div>
    </motion.div>
  );
}
