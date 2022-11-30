import Image from "next/image";
import React from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";

import { motion } from "framer-motion";

import Avatar from "../public/desenho.png";
import { SocialIcon } from "react-social-icons";
type Props = {};

function Hero({}: Props) {
  return (
    <div className="component-base flex-row max-md:flex-col max-md:justify-center">
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
          rotate: -100,
        }}
        animate={{ x: 0, opacity: 1, rotate: 0 }}
        transition={{ duration: 1.25 }}
      >
        <Image
          src={Avatar}
          alt="pefelippe avatar"
          className="object-fit  relative mx-auto h-72 w-72 rounded-full border border-spacing-1 z-0 max-md:h-56 max-md:w-56 max-md:items-center"
        />
      </motion.div>

      <motion.div
        initial={{
          // x: 100,
          opacity: 0,
        }}
        animate={{
          // x: 0,
          opacity: 1,
        }}
        transition={{ duration: 1.25 }}
      >
        <div className="flex flex-col items-center space-y-2.5">
          <h1 className="text-7xl max-md:text-4xl font-scroll-px-10">
            <span className="">Pedro Felippe</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>
          <h2 className="uppercase font-thin text-gray-400  tracking-[5px]">
            Web Developer
          </h2>
          <div>
            <SocialIcon
              url="https://github.com/pefelippe"
              fgColor="#f9fafb"
              bgColor="transparent"
              className="socialMediaIcon"
            />

            <SocialIcon
              url="https://www.linkedin.com/in/pedro-felippe"
              fgColor="#f9fafb"
              bgColor="transparent"
              className="socialMediaIcon"
            />

            <SocialIcon
              url="#"
              fgColor="#f9fafb"
              bgColor="transparent"
              className="hover:bg-gray-800 rounded-lg cursor-pointer "
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
