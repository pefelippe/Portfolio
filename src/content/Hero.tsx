import { motion } from "framer-motion";
import React from "react";

export default function Hero() {
  return (
    <motion.div className="  flex flex-col mx-auto items-center justify-center  text-center   max-w-7xl space-y-8  ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="relative flex flex-col  mx-5  "
      >
        <div
          className="space-y-6 text-center text-4xl font-bold tracking-tight text-white sm:text-6xl 
        sm:tracking-tight text-[3rem] sm:text-[5rem] xl:text-[6rem] xl:tracking-tight 2xl:text-[6.5rem] "
        >
          <h1 className="w-full text-[#5865f2]">Pedro Felippe</h1>

          <p className="text-[3rem] sm:text-[4rem] xl:text-[5rem]">
            Web Developer{" "}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
