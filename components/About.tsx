import { motion } from "framer-motion";
import Image from "next/image";

import React from "react";
import SocialIcons from "../atoms/SocialIcons";

import Avatar from "../public/assets/eu-2.jpg";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.25 }}
      className="h-screen flex relative overflow-hidden flex-col 
      text-left max-w-7xl justify-center mx-auto items-center"
    >
      <h1
        className="absolute top-28  font-semibold text-5xl mb-28
       text-gray-800"
      >
        Sobre
      </h1>

      <div className=" flex flex-col xl:flex-row">
        <div className="flex flex-col mx-20 "></div>
      </div>
    </motion.div>
  );
}

export default About;
