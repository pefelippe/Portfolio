/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Links from "../components/Links";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col gap-4  items-start mx-auto md:min-h-[90vh] min-h-[60vh] max-w-7xl
    text-center leading-none  justify-end pb-[20vh]  "
    >
      <p
        className="text-[3rem] md:text-[9rem]
        uppercase font-bold text-blue"
      >
        Pedro Felippe
      </p>
      <p className="ml-2 text-[1.2rem] md:text-[2rem]  uppercase text-gray-100 tracking-[5px] md:tracking-[10px] font-light">
        FULL-STACK DEVELOPER
      </p>
      <Links />
    </motion.div>
  );
}
