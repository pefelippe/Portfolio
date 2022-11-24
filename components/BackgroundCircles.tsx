import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Avatar from "../public/38574428.png";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 absolute " />
      <div className="border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 absolute" />
      <div className="border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 absolute " />
      <div className="border border-[#F7AB0A] rounded-full h-[650px] w-[650px] mt-52 absolute animate-pulse" />
      <div className="border border-[#333333] rounded-full h-[800px] w-[800px] mt-52 absolute " />
    </motion.div>
  );
}
