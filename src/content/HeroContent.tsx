/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import Links from "../components/Links";

export default function About() {
  return (
    <motion.div
      className="flex  w-full  text-start flex-col h-[50vh] lg:h-[60vh] max-lg:text-center
    justify-center items-center lg:items-start gap-4 lg:gap-6 max-w-7xl mx-auto"
    >
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
