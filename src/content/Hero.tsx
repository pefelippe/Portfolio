/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaArrowRight,
  FaFilePdf,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import AnimatedBtn from "../components/animated/AnimatedBtn";
import Socials from "../components/Socials";

const wordsList = ["CoffeEnjoyer.tsx"];

const imgUrl = "";

export default function About() {
  const [text] = useTypewriter({
    words: wordsList,
    loop: 0,
    typeSpeed: 75,
  });

  return (
    <motion.div className=" flex flex-col h-fit w-full  ">
      <motion.img
        src="/assets/avatar-pdr.png"
        alt="card image"
        className="rounded-full object-fit h-24 w-24 hover:scale-105 ease-in-out transition-all mb-5"
      />
      <span className="font-bold  text-[2.5rem] md:text-[3.5rem] leading-[1.2] flex w-full">
        Bridging technology and creativity to craft exceptional web experiences.
      </span>

      <span className=" text-gray-300  font-normal text-left w-full text-[1.1rem] py-14">
        I'm <b>Pedro Felippe</b>, a <b>Web Developer</b> from Brazil with a
        strong background in IT, specializing in web development. Currently
        working as a full-time Web Developer at <b>Instituto Atlântico</b>.
        <br />
        <br />
        With fluency in English and proficiency in modern web development tools,
        I thrive on contributing to project success and continuously expanding
        my expertise.
      </span>
      <Socials />
    </motion.div>
  );
}
