/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import { FaArrowRight } from "react-icons/fa";

const wordsList = ["Web Developer", "CoffeEnjoyer.tsx"];

export default function About() {
  const [text] = useTypewriter({
    words: wordsList,
    loop: 0,
    typeSpeed: 75,
  });

  return (
    <motion.div className="mx-auto flex flex-col h-fit w-full text-left items-left justify-left gap-7">
      <h2 className="flex text-[1.6rem]  font-medium text-left w-fit items-left text-gray-500">
        {text}
        <Cursor cursorColor="blue" />
      </h2>

      <span className="font-bold  text-[2rem] md:text-[2.7rem] w-fit leading-[1.2] ">
        Web developer passionate about crafting powerful{" "}
        <span className="border-b border-dashed text-[#BBF7D0]">tools</span> and
        visually stunning{" "}
        <span className="border-b border-dashed text-[#3b83f6d8]">
          user interfaces
        </span>
      </span>

      <span className=" text-[1.2rem] md:text-[1.4rem] text-gray-300  font-normal">
        Hi, I'm{" "}
        <span className="font-semibold text-blue "> Pedro Felippe </span>- a
        frontend web developer based in BR with experience working on both
        frontend and backend development projects.
      </span>

      <Link
        href="/about"
        className="w-fit text-xl font-medium flex items-center justify-center gap-2  md:text-[1.4rem]
          underline transition-all drop-shadow-md  hover:text-blue"
      >
        More about me <FaArrowRight />
      </Link>
    </motion.div>
  );
}
