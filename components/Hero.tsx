import Image from "next/image";
import React from "react";
import { Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Avatar from "../public/assets/desenho.png";
import SocialIcons from "../atoms/SocialIcons";

export default function Home() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.25 }}
      className="flex flex-col relative 
      text-center max-w-7xl justify-center mx-auto 
      items-center  space-y-5 h-screen "
    >
      <Image
        src={Avatar}
        alt="pefelippe avatar"
        className="object-fit relative h-72 w-72 rounded-full max-md:h-56 max-md:w-56 "
      />

      <div className="flex flex-col items-center space-y-2.5">
        <h1 className="text-7xl max-md:text-4xl font-scroll-px-10">
          <span className="">Pedro Felippe</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <h2 className="uppercase font-thin text-gray-400  tracking-[5px]">
          Web Developer
        </h2>
        <SocialIcons />
      </div>
    </motion.div>
  );
}
