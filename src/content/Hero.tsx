import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import ImageAvatar from "../../public/assets/avatar-pdr.png";
import AnimatedText from "../components/AnimatedText";

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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 1.5 }}
      className=" flex flex-col items-center md:flex-row justify-evenly  text-center md:text-left mx-auto py-10 md:py-32  max-w-7xl space-y-8"
    >
      <Image
        alt="avatar-pefelippe"
        src={ImageAvatar}
        height={350}
        width={350}
        className="rounded-full h-[250px] w-[250px] lg:h-[350px] lg:w-[350px]"
      />
      <div className="relative flex flex-col  space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl">Olá, me chamo</h2>

          <h1 className="text-6xl lg:text-8xl font-semibold">Pedro Felippe</h1>
          <p className="text-4xl lg:text-6xl ">Sou um Web Developer.</p>
        </div>

        <div className="flex gap-4">
          <button className=" w-fit p-4 px-8  bg-[#5865f2] hover:bg-[#5865f2]/70 transition-all rounded-lg font-semibold text-xl mx-auto md:mx-0">
            <a href="#about">Quem sou eu?</a>
          </button>

          <button
            className=" w-fit p-4 px-4 border-2
            hover:border-[#5865f2]/70 hover:text-[#5865f2]/70 transition-all 
            rounded-lg font-semibold text-xl mx-auto md:mx-0"
          >
            <a href="#about">Entre em contato</a>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
