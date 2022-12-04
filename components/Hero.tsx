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
        x: -100,
      }}
      animate={{ x: 0, opacity: 1 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="component-base xl:flex-row justify-center xl:justify-around space-y-4"
    >
      <div>
        <Image
          src={Avatar}
          alt="pefelippe avatar"
          className="object-fit relative rounded-full 
          h-[250px] w-[250px]
          xl:h-[450px] xl:w-[450px] shadow-xl"
        />
      </div>
      <div className="flex flex-col items-center space-y-2.5">
        <h2 className="uppercase font-thin text-gray-400  tracking-[5px]">
          Olá, eu sou o
        </h2>
        <h1 className="text-6xl sm:text-8xl ">
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
