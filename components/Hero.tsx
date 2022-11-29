import Image from "next/image";
import React from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";

import { motion } from "framer-motion";

import Avatar from "../public/desenho.png";
import { SocialIcon } from "react-social-icons";
type Props = {};

function Hero({}: Props) {
  return (
    <>
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 1.25 }}
        className="h-screen flex items-center justify-evenly text-center overflow-hidden mx-auto m-32 z-10"
      >
        <div className="flex flex-col space-y-6">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image
              src={Avatar}
              alt="pefelippe avatar"
              className="object-fit relative mx-auto h-56 w-56 rounded-full border z-0"
            />
          </motion.div>

          <h1 className="text-7xl  max-sm:text-4xl font-scroll-px-10">
            <span className="">Pedro Felippe</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>
          <h2 className="uppercase font-thin text-gray-400  tracking-[5px]">
            Web Developer
          </h2>
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
