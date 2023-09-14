/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";
import AnimatedLink from "../components/animated/AnimatedLink";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col gap-3  items-center mx-auto min-h-[50vh] max-w-7xl 
    text-center leading-none  justify-center  "
    >
      <p
        className="text-[6rem] 
       md:text-[7rem] uppercase font-bold text-blue"
      >
        Pedro Felippe
      </p>
      <p className="text-[1.2rem] md:text-[2rem]  uppercase text-gray-100 tracking-[10px] font-light">
        FULL-STACK DEVELOPER
      </p>

      {/* <AnimatedLink
        href="/contact"
        className="text-[20px] px-9 text-center font-normal
          text-[#f5f5f5] leading-tight hover:bg-blue/90 transition-all 
           py-3  bg-blue rounded-full "
      >
        Get in touch
      </AnimatedLink> */}
      {/* <Links /> */}
    </motion.div>
  );
}
