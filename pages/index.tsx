/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";

import Socials from "../src/components/Socials";
import Skills from "../src/content/Skills";
import CallToContact from "./contact";

const wordsList = ["CoffeEnjoyer.tsx"];

export default function Home() {
  const [text] = useTypewriter({
    words: wordsList,
    loop: 0,
    typeSpeed: 75,
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: -75 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75 }}
      className="md:h-[80vh] max-w-7xl mx-auto flex flex-col  text-start  leading-[1.1] py-10   "
    >
      <motion.img
        src="/assets/avatar-pdr.png"
        alt="card image"
        className="max-md:mx-auto rounded-full object-cover w-24 h-24  hover:scale-105 ease-in-out transition-all "
      />

      <motion.h1 className="max-md:text-center font-bold text-[2.7rem] lg:text-[5.5rem]  w-full py-10 md:pb-20 ">
        I'm <span className="text-blue">Pedro Felippe</span> — web developer,
        dev ops enthusiast & coffee lover.
      </motion.h1>

      <Skills />

      {/* <motion.div
        initial={{ opacity: 0, x: -75 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
        className="flex justify-start w-full items-center gap-10 bg-gray-900 text-[#000]  p-6 rounded-md"
      >
        <motion.img
          src="/assets/eu.jpg"
          alt="card image"
          className="xl:h-[350px] rounded-md  object-cover  "
        />

        <span
          className="flex w-full max-md:flex-col  gap-4  flex-col 
           text-[#f8f8f8] "
        >
          <p className="flex w-full text-[2.2rem] leading-normal font-bold  text-center  items-center">
            Passionate Web Developer
          </p>
          <p>
            In recent years, I've been focused on programming, building a solid
            frontend stack and creating exciting projects that solve real-world
            problems.
          </p>
          <p>
            Take a look at my work below to see what I'm working on, and get in
            touch if you'd like to work together!
          </p>
        </span>
      </motion.div> */}

      {/* <CallToContact /> */}
    </motion.div>
  );
}
