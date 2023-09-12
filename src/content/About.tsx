import { motion } from "framer-motion";
import React from "react";

import Skills from "./Skills";

export default function About() {
  return (
    <motion.div className="w-full mx-auto max-w-7xl text-start justify-center items-start flex flex-col min-h-fit">
      <div className="flex flex-col gap-10 w-1/2 font-thin">
        <p className="text-3xl">Im Pedro Felippe.</p>
        <Skills />
      </div>
    </motion.div>
  );
}
