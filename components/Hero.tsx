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
        scale: [0.8, 1],
      }}
      transition={{
        duration: 1.25,
      }}
      className=" h-screen flex flex-col space-y-10 items-center justify-center text-center overflow-hidden mx-auto"
    >
      <Image
        src={Avatar}
        alt="pefelippe avatar"
        className="object-fit relative mx-auto h-52 w-52 rounded-full "
      />

      <h2 className="text-xl uppercase semibold text-gray-500 tracking-[5px]">
        Web Developer
      </h2>

      <h1 className="text-6xl  max-sm:text-4xl font-scroll-px-10">
        <span className="mr-3">
          <Typewriter
            words={["Eu sou o Pedro!", "Aventureiro em DevOps"]}
            loop={true}
            delaySpeed={1000}
            typeSpeed={70}
            deleteSpeed={50}
          />
        </span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </motion.div>
  );
}

export default Hero;
