/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";

import AnimatedBtn from "../src/components/animated/AnimatedBtn";
import Socials from "../src/components/Socials";
import Skills from "../src/content/Skills";
import CallToContact from "./contact";

const wordsList = ["CoffeEnjoyer.tsx"];

const imgUrl = "";

export default function Home() {
  const [text] = useTypewriter({
    words: wordsList,
    loop: 0,
    typeSpeed: 75,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="component  flex flex-col  text-start gap-10 "
    >
      <h1 className="font-bold text-[2.5rem] md:text-[3.5rem] lg:text-[4.7rem] leading-[1.2]  w-full ">
        Nice to meet you. Lets build something great together.
      </h1>

      <motion.div className="flex w-full gap-10  max-md:flex-col justify-center max-w-4xl md:items-center ">
        <span className="text-gray-700 font-[350] md:text-left w-full text-[1rem] md:text-[1.5rem] leading-normal">
          Hey. I'm <b className="font-medium">Pedro Felippe — Web Developer</b>{" "}
          from Brazil with a strong background in IT, specializing in web
          development. Currently working as a full-time Web Developer at
          Instituto Atlântico.
        </span>
      </motion.div>
    </motion.div>
  );
}
