import { motion } from "framer-motion";
import React from "react";

import Header from "../components/Header";

export default function Hero() {
  return (
    <>
      <div className="component-base h-[75vh] flex-row  items-center text-center min-h-full">
        <Header />
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex space-y-4 justify-center sm:justify-start max-w-7xl "
        >
          <div className=" space-y-6 text-center gap-10 px-40 ">
            <h1 className=" text-5xl font-bold md:text-8xl">Pedro Felippe</h1>

            <p className="text-3xl tracking-[5px]">Web Developer</p>

            <button className="font-medium text-xl p-5 rounded-md bg-[#F7AB0A] hover:bg-[#F7AB0A]/90 ">
              <a href="#about">Quem sou eu?</a>
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
