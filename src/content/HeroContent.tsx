/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="flex flex-col justify-center gap-12 w-full mx-auto  max-w-7xl
      min-h-[50vh] max-lg:py-5 lg:min-h-screen max-lg:text-center items-center lg:items-start  "
    >
      <motion.span
        initial={{ opacity: 0, x: -75 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
        className="text-[20px] font-regular w-full md:w-[420px]"
      >
        Hello! I’m a UI/UX designer strongly focused on creating beautiful,
        functional UI’s.
      </motion.span>
    </motion.div>
  );
}
