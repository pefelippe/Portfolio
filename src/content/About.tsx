import { motion } from "framer-motion";
import React from "react";

import Skills from "./Skills";

export default function About() {
  return (
    <motion.div className="min-h-fit w-full mx-auto max-w-screen-2xl justify-center items-center flex flex-col py-40">
      <Skills />
      <div className="w-full bg-[#272727] rounded-[20px] "></div>
    </motion.div>
  );
}
