/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import Socials from "../src/components/Socials";
import { useTypewriter } from "react-simple-typewriter";
import CallToContact from "./contact";
import Skills from "../src/content/Skills";

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
      className="component pb-20 max-md:pt-10 max-xl:px-8 flex flex-col text-start gap-10 "
    >
      <motion.img
        src="/assets/avatar-pdr.png"
        alt="card image"
        className="rounded-full object-fit w-28 h-28  hover:scale-110 ease-in-out transition-all "
      />
      <span className="font-bold text-[3rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[1.2] flex w-full max-w-3xl">
        I'm Pedro Felippe, <br /> a web developer.
      </span>

      <motion.div className="flex w-full gap-8 md:gap-14 max-md:flex-col justify-center max-w-3xl md:items-center ">
        <span className=" text-gray-500 font-normal text-left w-full text-[1.2rem] ">
          Hi. I'm <b>Pedro Felippe</b>, a <b>Web Developer</b> from Brazil with
          a strong background in IT, specializing in web development. Currently
          working as a full-time Web Developer at <b>Instituto Atlântico</b>.
          <br />
          <br />
          With fluency in English and proficiency in modern web development
          tools, I thrive on contributing to project success and continuously
          expanding my expertise.
        </span>
      </motion.div>

      <Socials />
      {/* <Skills /> */}
      {/* <CallToContact /> */}
    </motion.div>
  );
}
