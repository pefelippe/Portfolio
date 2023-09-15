/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import BlogPosts from "../components/BlogPosts";
import Links from "../components/Links";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col  items-center mx-auto min-h-screen  max-w-7xl
    text-center leading-none  justify-center   "
    >
      <p
        className="text-[5rem] md:text-[7rem] max-w-3xl 
        uppercase font-bold text-blue"
      >
        Pedro Felippe
      </p>
      <p className="ml-2 text-[1.4rem] md:text-[1.6rem] uppercase text-gray-100 tracking-[5px] md:tracking-[10px] font-normal py-4">
        FULL-STACK DEVELOPER
      </p>
      <Links />

      <BlogPosts />
    </motion.div>
  );
}
