import Image from "next/image";
import React from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";

import { motion } from "framer-motion";

import Avatar from "../public/38574428.png";
import { SocialIcon } from "react-social-icons";
type Props = {};

function Hero({}: Props) {
  return (
    <>
      <motion.div
        animate={{
          scale: [0.8, 1],
        }}
        transition={{
          duration: 1.25,
        }}
        className="h-screen flex flex-col space-y-10 items-center justify-center text-center overflow-hidden mx-auto  m-32 z-10"
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Image
            src={Avatar}
            alt="pefelippe avatar"
            className="object-fit relative mx-auto h-56 w-56  rounded-full border"
          />
        </motion.div>
        <h1 className="text-6xl  max-sm:text-4xl font-scroll-px-10">
          <span className="mr-3">
            <Typewriter
              words={["Eu sou o Pedro!"]}
              loop={true}
              delaySpeed={2000}
              typeSpeed={75}
              deleteSpeed={75}
            />
          </span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <h2 className="text-xl uppercase semibold text-gray-500 tracking-[5px]">
          Web Developer
        </h2>
        <div className="flex flex-row items-center text-gray-100 cursor-pointer">
          <SocialIcon
            url="https://github.com/pefelippe"
            fgColor="#f9fafb"
            bgColor="transparent"
            className="text-red"
          />

          <SocialIcon
            url="https://www.linkedin.com/in/pedro-felippe"
            fgColor="#f9fafb"
            bgColor="transparent"
          />

          <SocialIcon
            url="#"
            network="email"
            fgColor="#f9fafb"
            bgColor="transparent"
          />
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
