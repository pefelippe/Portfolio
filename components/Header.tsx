import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex sticky top-0 flex-items-start p-5 justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.25 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://github.com/pefelippe"
          fgColor="#f5f5f5"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://www.linkedin.com/in/pedro-felippe"
          fgColor="#f5f5f5"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.25 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="#f5f5f5"
          bgColor="transparent"
        />

        <p className="uppercase hidden md:inline-flex text-sm text-#f5f5f5-400">
          Entre em contato!
        </p>
      </motion.div>
    </header>
  );
}
