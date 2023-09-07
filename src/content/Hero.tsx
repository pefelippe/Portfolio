import { motion } from "framer-motion";

import React from "react";
import LinksDetailed from "../components/LinksDetailed";

export default function About() {
  return (
    <motion.div className="relative items-center text-center leading-none  flex flex-col gap-2 md:gap-6 min-h-fit max-w-screen-2xl  mx-auto">
      <p className="text-[4rem] sm:text-[6rem] md:text-[8rem] 2xl:text-[14rem]  uppercase font-bold text-yellow-500">
        FULL STACK DEVELOPER
      </p>
      <p className="text-[1.3rem] sm:text-[1.8rem] max-w-md sm:max-w-2xl font-light text-gray-100">
        I'm Pedro Felippe. A passionate software engineer based in Brazil. 📍
      </p>
      <LinksDetailed />
    </motion.div>
  );
}
