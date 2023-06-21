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
      className="component  flex flex-col  text-start gap-10 md:gap-12 pt-24"
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

      <motion.div className="flex w-full justify-between  items-start max-md:flex-col  gap-10">
        <motion.div
          className="h-fit flex w-full gap-10 flex-col justify-center 
         max-w-2xl  text-[#aaaa] font-[450] md:text-left  text-[1rem] md:text-[1.4rem] leading-normal"
        >
          <span className="">
            Hey. I'm <b className="font-medium text-white">Pedro Felippe</b> — a
            Web Developer from Brazil with a strong background in IT,
            specializing in web development. I am passionate about creating
            dynamic and user-friendly websites that provide a seamless browsing
            experience.
          </span>

          <span className="">
            Currently, I am working as a full-time{" "}
            <b className="font-medium text-white">Web Developer</b> at{" "}
            <b className="font-medium text-white">Instituto Atlântico</b>, where
            I have the opportunity to apply my technical expertise and
            contribute to the development of cutting-edge web applications. I
            thrive in fast-paced environments and enjoy tackling complex
            challenges to deliver high-quality solutions that exceed client
            expectations.
          </span>

          <AnimatedBtn
            href="https://drive.google.com/file/d/1KhRdrl_j_ilCKoFHqYn1eG-tHJrxd8wF/view?usp=sharing"
            className="p-3 px-8 rounded-full border text-2xl items-center text-center cursor-pointer hover:underline"
          >
            <p>Resume</p>
          </AnimatedBtn>
        </motion.div>

        <motion.img
          src="/assets/eu.jpg"
          alt="card image"
          className="h-[400px] rounded-2xl  object-cover  mr-20 max-xl:hidden"
        />
      </motion.div>
    </motion.div>
  );
}
