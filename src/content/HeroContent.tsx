/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import Links from "../components/Links";

export default function About() {
  return (
    <motion.div className="flex flex-col text-center items-center  rounded-3xl  w-full justify-around  gap-6 max-w-xl">
      <motion.img
        src="/assets/avatar-pdr.png"
        alt="me"
        className="h-[120px] w-[120px] rounded-full"
      />
      <p className="text-[2rem] sm:text-[2.5rem] md:text-[3rem]  text-white leading-tight font-semibold   max-w-xl pb-3">
        Hello 👋🏻 I'm a Software Engineer from Brazil
      </p>

      <Links />
    </motion.div>
  );
}
