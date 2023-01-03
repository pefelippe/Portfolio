import { motion } from "framer-motion";

import React from "react";

import ImageAvatar from "../../public/assets/euIA.png";

export default function Hero() {
  return (
    <div className="snap-start component-base  text-center justify-center align-center space-y-4 py-32 min-mx-5 w-full  h-[80vh] bg-ImageAvatar">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative flex flex-col place-content-center space-y-4 "
      >
        <h1 className="text-7xl sm:text-8xl">Pedro Felippe</h1>

        <p className="text-2xl sm:text-4xl tracking-[5px] pb-2">
          Web Developer
        </p>

        <button className="p-4 px-12 bg-[#EA4A60] hover:bg-[#EA4A60]/90 rounded-full mx-auto w-fit font-semibold text-xl">
          <a href="#about">Quem sou eu</a>
        </button>
      </motion.div>
    </div>
  );
}
