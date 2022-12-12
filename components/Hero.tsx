import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

import Avatar from "../public/assets/desenho.png";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25 }}
        className="component-base sm:flex-row justify-evenly sm:justify-between items-center place-content-center "
      >
        <Image
          src={Avatar}
          alt="pefelippe avatar"
          className="object-fit relative 
            h-[200px] w-[200px]
            rounded-full
            lg:h-[400px] lg:w-[400px] "
        />

        <div className="flex flex-col  gap-4 pt-5 text-6xl space-y-5">
          <h2 className="text-left">Olá, </h2>
          <h1 className="">
            Me chamo{" "}
            <span className="bg-[#F7AB0A] font-semibold">Pedro Felippe</span>.
          </h1>
          <h2 className="">Sou um Web Developer.</h2>
          <button
            className=" p-5 rounded-lg text-2xl w-[250px]
          bg-[#F7AB0A]/90 hover:bg-[#F7AB0A]/80 transition "
          >
            <a href="#about">Descubra Mais!</a>
          </button>
        </div>
      </motion.div>
    </>
  );
}
