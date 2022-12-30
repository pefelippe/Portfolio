import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import ImageAvatar from "../../public/assets/avatar-pdr.png";

export default function Hero() {
  return (
    <div className="snap-start component-base min-h-fit h-fit text-center justify-center align-center max-w-7xl space-y-4 py-28">
      <Image
        alt="avatar-pefelippe"
        src={ImageAvatar}
        height={300}
        width={300}
        className="rounded-full border-8 border-[#202020] opacity-90 hover:opacity-100 transition-all"
      />
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative flex flex-col place-content-center space-y-4 "
      >
        <h1 className="text-6xl lg:text-7xl">Pedro Felippe</h1>

        <p className="text-2xl lg:text-3xl tracking-[5px]">Web Developer</p>

        <button className="font-bold mx-auto w-[200px] text-lg p-5 rounded-md text-[#fff] bg-[#ff4c60]/80 hover:bg-[#ff4c60] hover: transition-all ">
          <a href="#about">¿quem sou eu?</a>
        </button>
      </motion.div>
    </div>
  );
}
