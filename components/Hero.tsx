import Image from "next/image";
import React from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";

import { motion } from "framer-motion";


import Avatar from "../public/38574428.png";
type Props = {};

function Hero({}: Props) {
  return (
    <motion.div
      animate={{
        scale: [0.75, 1],
      }}
      transition={{
        duration: 3,
      }}
      className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"
    >
      <Image
        src={Avatar}
        alt="pefelippe avatar"
        className="object-fit relative mx-auto h-48 w-48 border border-[#f9fafb] rounded-full "
      />

      <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
        Software Engineer
      </h2>
      <h1 className="text-4xl lg:text-6xl font-semibold scroll-px-10">
        <span className="mr-3">
          <Typewriter
            words={[
              "Eu sou o Pedro!",
              "Web Developer",
              "Aventureiro em DevOps",
            ]}
            loop={true}
            delaySpeed={1000}
            typeSpeed={70}
            deleteSpeed={50}
          />
        </span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>

      <div>
        <button className="heroBtn">About</button>
        <button className="heroBtn">Experience</button>
        <button className="heroBtn">Skills</button>
        <button className="heroBtn">Projects</button>
      </div>
    </motion.div>
  );
}

export default Hero;
