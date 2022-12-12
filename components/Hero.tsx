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
        className="component-base xl:flex-row justify-between items-center place-content-center "
      >
        <div className="flex  flex-col items-left gap-4 pt-5 text-6xl space-y-5">
          <h2 className="">Olá, </h2>
          <h1 className="">
            Me chamo{" "}
            <span className="bg-[#F7AB0A] font-semibold">Pedro Felippe</span>.
          </h1>
          <h2 className="">Sou um Web Developer.</h2>
          <button className=" p-5 border-2 border-[#F7AB0A] rounded-lg text-xl w-[300px]">
            Descubra Mais!
          </button>
        </div>

        <Image
          src={Avatar}
          alt="pefelippe avatar"
          className="object-fit relative 
            h-[200px] w-[200px]
            rounded-full
            lg:h-[400px] lg:w-[400px] "
        />
      </motion.div>
    </>
  );
}
