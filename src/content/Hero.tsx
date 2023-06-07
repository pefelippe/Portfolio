import { motion } from "framer-motion";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import SocialLinks from "../components/SocialLinks";
import Image from "next/image";
import Link from "next/link";

const wordsList = ["Web Developer", "Viciado em café.tsx"];
const heroDescription =
  "Sou um desenvolvedor web, amante de filmes e fascinado por tecnologia.";

export default function About() {
  const [text] = useTypewriter({
    words: wordsList,
    loop: 0,
    typeSpeed: 75,
  });

  return (
    <motion.div className="flex  w-full  justify-left gap-14  ">
      {/* <Image
        src="/assets/avatar-pdr.png"
        width={400}
        height={300}
        className="rounded-xl"
        alt="avatar-r"
      /> */}

      <motion.div className="mx-auto flex flex-col h-fit  max-w-3xl w-full text-center items-center justify-center ">
        <h2
          className="flex text-[1.6rem]  font-medium text-center w-fit
       items-left text-gray-500"
        >
          {text}
          <Cursor cursorColor="blue" />
        </h2>

        <span
          className=" text-[3.5rem] md:text-[4rem] font-bold w-fit
       leading-normal "
        >
          Olá! Eu sou{" "}
          <span className="text-blue">
            <br />
            Pedro Felippe
          </span>
        </span>

        <p className="flex text-[1.2rem] md:text-[1.45rem] text-gray-300  max-w-xl pb-5">
          {heroDescription}
        </p>

        <SocialLinks />

        <div className="w-full flex gap-5 items-center justify-center max-w-2xl">
          <Link
            href="/blog"
            className="w-fit px-10 p-3 text-xl font-medium bg-blue 
          hover:bg-blue/90 text-white rounded-full hover:underline transition-all drop-shadow-md"
          >
            Quem sou?
          </Link>
          {/* <Link
            href="/contact"
            className="w-fit  px-6 p-3 text-xl font-medium bg-blue 
          hover:bg-blue/90 text-white rounded-full hover:underline transition-all drop-shadow-md"
          >
            Contato
          </Link> */}
        </div>
      </motion.div>
    </motion.div>
  );
}
