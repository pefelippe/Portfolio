/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="flex  w-full   flex-col h-[50vh] lg:h-[60vh] text-center
    justify-center items-center  max-w-7xl mx-auto"
    >
      <motion.span
        initial={{ opacity: 0, x: -75 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
        className="text-5xl lg:text-8xl font-semibold leading-1 lg:leading-[1.2] max-w-3xl "
      >
        Pedro Felippe <br />
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: -75 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
        className="text-3xl text-[#888]  font-light leading-[1.1] max-w-lg"
      >
        A designer and developer building digital products.
      </motion.span>
    </motion.div>
  );
}
