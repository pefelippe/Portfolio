/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="flex  w-full   flex-col  text-start gap-2
    items-start  max-w-7xl mx-auto"
    >
      <motion.span
        initial={{ opacity: 0, x: -75 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
        className="text-[16px] md:text-[20px] font-regular w-full md:w-[420px]"
      >
        Hello! I’m a UI/UX designer strongly focused on creating beautiful,
        functional UI’s.
      </motion.span>
    </motion.div>
  );
}
