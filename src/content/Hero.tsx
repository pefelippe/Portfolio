import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

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
    <motion.div className=" flex flex-col items-center md:flex-row justify-evenly  text-center md:text-left mx-auto py-10 md:py-32  max-w-7xl space-y-8">
      <motion.img
        alt="avatar-pefelippe"
        src="assets/avatar-pdr.png"
        height={350}
        width={350}
        animate={{
          scale: [1, 1.3, 1],
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
        className="rounded-full h-[250px] w-[250px] lg:h-[350px] lg:w-[350px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 2.5 }}
        className="relative flex flex-col  space-y-8"
      >
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl">Olá, me chamo</h2>

          <h1 className="text-6xl lg:text-8xl font-semibold">
            Pedro Felippe<span className="animate-pulse">_</span>
          </h1>

          <p className="text-4xl lg:text-6xl ">Web Developer</p>
        </div>

        <div className="flex gap-8">
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            className=" w-fit p-4 px-8  bg-[#5865f2] hover:bg-[#5865f2]/70 transition-all hover:underline rounded-xl font-semibold text-xl mx-auto md:mx-0"
          >
            <a href="#about">Quem sou eu?</a>
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            className=" w-fit p-4 px-4 border-2
            hover:border-[#5865f2]/70 hover:text-[#5865f2]/70 transition-all hover:underline
            rounded-xl font-semibold text-xl mx-auto md:mx-0"
          >
            <a href="#contact">Entre em contato</a>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
