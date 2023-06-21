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
      className="component  flex flex-col  text-start gap-10 md:gap-12 pt-32"
    >
      <motion.img
        src="/assets/avatar-pdr.png"
        alt="card image"
        className=" rounded-full object-cover w-24 h-24  hover:scale-105 ease-in-out transition-all "
      />
      <h1 className="font-bold text-[2.5rem] md:text-[3.5rem] lg:text-[5.5rem] leading-[1.2]  w-full ">
        I'm Pedro Felippe — web developer, dev ops enthusiast & coffe lover.
      </h1>

      <Socials />

      <motion.div className="flex w-full justify-between  items-start max-md:flex-col ">
        <motion.div
          className="h-fit flex w-full gap-10 flex-col justify-center 
         max-w-2xl  text-[#aaaa] font-[350] md:text-left  text-[1rem] md:text-[1.4rem] leading-normal"
        >
          <span className="">
            Hey. I'm{" "}
            <b className="font-medium text-white">
              Pedro Felippe — Web Developer
            </b>{" "}
            from Brazil with a strong background in IT, specializing in web
            development.
          </span>
          <span className="">
            Currently working as a full-time Web Developer at Instituto
            Atlântico.
          </span>
        </motion.div>

        <motion.img
          src="/assets/eu.jpg"
          alt="card image"
          className=" rounded-2xl object-cover max-w-xs h-fit hover:scale-105 ease-in-out transition-all mr-40"
        />
      </motion.div>
    </motion.div>
  );
}
