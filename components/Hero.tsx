import Image from "next/image";
import React from "react";
import { Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Avatar from "../public/assets/desenho.png";
import SocialIcons from "./atoms/SocialIcons";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.25 }}
      className="component-base flex-col justify-center space-y-4"
    >
      <Image
        src={Avatar}
        alt="pefelippe avatar"
        className="object-fit relative rounded-full 
          h-[250px] w-[250px]
          xl:h-[350px] xl:w-[350px] shadow-xl"
      />

      <div className="flex flex-col items-center gap-4 pt-5">
        <h1 className="text-6xl sm:text-7xl ">
          <span>Pedro Felippe</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <h2 className="uppercase font-thin text-gray-400 text-xl  tracking-[5px]">
          Web Developer
        </h2>
        {/* <SocialIcons /> */}
      </div>
    </motion.div>
  );
}
