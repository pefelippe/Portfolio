/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import Skills from "../components/Skills";

export default function About() {
  return (
    <motion.div
      className="flex justify-center w-full mx-auto  max-w-5xl  gap-8  max-xl:text-center
       max-xl:max-w-3xl max-xl:flex-col h-fit  items-start flex-col"
    >
      <h3 className="text-3xl font-semibold leading-[1.2] w-fit">
        Technologies 
      </h3>
      <Skills />
    </motion.div>
  );
}
