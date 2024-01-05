/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import Skills from "../components/Skills";

export default function About() {
  return (
    <motion.div
      className="flex justify-center w-full mx-auto    gap-10  max-xl:text-center py-20 border-t
       max-xl:max-w-3xl max-xl:flex-col h-fit  items-start flex-col"
    >
      <h1 className="text-5xl xl:text-6xl  font-bold leading-[1.2]  w-fit ">
        Tools that i use.
      </h1>
      <Skills />
    </motion.div>
  );
}
