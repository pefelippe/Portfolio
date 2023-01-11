import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import AboutIcons from "../components/atoms/AboutIcons";

import AnimatedBtn from "../components/motion/AnimatedBtn";

export default function Hero() {
  const heroText = [
    { type: "heading1", text: "Olá, me chamo" },
    {
      type: "heading2",
      text: "Pedro Felippe",
    },
    {
      type: "heading3",
      text: "Sou um Web Developer.",
    },
  ];

  return (
    <motion.div className=" flex flex-col items-center md:flex-row justify-between  text-center md:text-left mx-auto  py-40  max-w-7xl max-md:space-y-6 ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 2.5 }}
        className="relative flex flex-col  space-y-8"
      >
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl">Olá, me chamo</h2>

          <h1 className="text-6xl lg:text-8xl font-semibold">Pedro Felippe</h1>

          <p className="text-4xl lg:text-6xl ">Sou um Web Developer.</p>
        </div>

        <div className="flex max-md:flex-col gap-8">
          <AnimatedBtn className=" w-fit p-4 px-8  bg-[#5865f2] hover:bg-[#5865f2]/70 transition-all hover:underline rounded-full font-semibold text-xl mx-auto md:mx-0">
            <a href="#about">Descubra Mais</a>
          </AnimatedBtn>
          <AnimatedBtn className=" w-fit p-4 px-6 border-2 border-[#5865f2] transition-all hover:underline rounded-full font-semibold text-xl mx-auto md:mx-0">
            <a href="#about">Entre em contato</a>
          </AnimatedBtn>
        </div>
      </motion.div>
      <div className="flex flex-col items-center ">
        <motion.img
          alt="avatar-pefelippe"
          src="assets/avatar-pdr.png"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 0, 0],
            x: 0,
          }}
          initial={{
            x: 0,
          }}
          transition={{
            duration: 2.25,
            ease: "easeInOut",
          }}
          className="rounded-full h-[250px] w-[250px] lg:h-[350px] lg:w-[350px] max-md:hidden "
        />
        <AboutIcons />
      </div>
    </motion.div>
  );
}
