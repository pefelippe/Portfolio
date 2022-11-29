import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <motion.header
        initial={{
          y: -50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 1 }}
        className="flex top-0 sticky justify-evenly p-4 mx-auto z-10 bg-[#161618]"
      >
        <h2 className=" px-6 py-4 text-xl">pefelippe.dev</h2>
        <nav
          className="flex cursor-pointer items-center 
        max-sm:flex max-sm:text-xl max-sm:relative drop-shadow-xl"
        >
          <a className="headerBtn" href="#hero">
            Home
          </a>
          <a className="headerBtn" href="#about">
            Sobre
          </a>
          <a className="headerBtn" href="#experience">
            Experiência
          </a>
          <a className="headerBtn" href="#contact">
            Contato
          </a>
        </nav>

        <div>
          <SocialIcon
            url="https://github.com/pefelippe"
            fgColor="#f9fafb"
            bgColor="transparent"
            className="socialMediaIcon"
          />

          <SocialIcon
            url="https://www.linkedin.com/in/pedro-felippe"
            fgColor="#f9fafb"
            bgColor="transparent"
            className="socialMediaIcon"
          />

          <SocialIcon
            url="#"
            fgColor="#f9fafb"
            bgColor="transparent"
            className="hover:bg-gray-800 rounded-lg cursor-pointer "
          />
        </div>
      </motion.header>
    </>
  );
}
