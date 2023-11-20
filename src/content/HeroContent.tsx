/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import Links from "../components/Links";

export default function About() {
  return (
    <motion.div
      className="flex  w-full  text-start flex-col h-[40vh] lg:h-screen 
    justify-center items-start gap-4 lg:gap-6 max-w-7xl mx-auto"
    >
      <motion.img
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 1 }}
        src="/assets/avatar-pdr.png"
        alt="me"
        className=" object-cover rounded-full w-28"
      />
      <motion.span
        initial={{ opacity: 0, x: -75 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
        className="text-5xl lg:text-8xl font-semibold leading-1 lg:leading-[1.2] max-w-3xl "
      >
        Hi, I am Pedro Felippe.{" "}
        <span className="animate animate-bounce">👋</span>
        <br />
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: -75 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
        className="text-xl text-[#888]  font-light leading-[1.1] max-w-xl mb-2"
      >
        A designer and developer building digital products.
      </motion.span>
      <Links />
    </motion.div>
  );
}
