import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <header className="flex sticky top-0 flex-items-start p-5 justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <motion.div
          initial={{
            y: -50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
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
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 1.25 }}
          className="flex flex-row items-center text-gray-100 cursor-pointer"
        >
          <button className="headerBtn">
            <a href="#hero"> Home </a>
          </button>
          <button className="headerBtn">
            <a href="#about"> Sobre </a>
          </button>
          <button className="headerBtn">
            <a href="#hero">Experiência</a>
          </button>

          <button className="headerBtn">
            <a href="#hero">Projetos</a>
          </button>
        </motion.div>
      </header>
    </>
  );
}
