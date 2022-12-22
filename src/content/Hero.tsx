import { motion } from "framer-motion";
import React from "react";
import { FaFileDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="component-base justify-center  items-center space-y-8">
      <motion.img
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        src="https://avatars.githubusercontent.com/u/38574428?v=4"
        alt="pefelippe github avatar"
        className="object-fit relative sm:h-[350px] sm:w-[350px] h-[300px] w-[300px] rounded-full"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=""
      >
        <h1 className="flex text-7xl">Pedro Felippe</h1>
        <h2 className="flex text-4xl">Web Developer</h2>
      </motion.div>
    </div>
  );
}
