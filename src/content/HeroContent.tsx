/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="flex  w-full  text-start flex-col
    justify-start items-start gap-3 max-w-5xl mx-auto"
    >
      <span className="text-6xl md:text-9xl  font-bold leading-[1.2]">
        Pedro Felippe. <br />
      </span>
    </motion.div>
  );
}
