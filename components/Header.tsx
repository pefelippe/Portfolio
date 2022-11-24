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
          fgColor="#f9fafb"
          bgColor="transparent"
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
        <button className="heroBtn">Sobre</button>
        <button className="heroBtn">Experiência</button>
        <button className="heroBtn">Habilidades</button>
        <button className="heroBtn">Projetos</button>
      </motion.div>
    </header>
  );
}
