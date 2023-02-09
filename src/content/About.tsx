import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import ContentTitle from "../atoms/ContentTitle";
import Icons from "../atoms/Icons";
import Skills from "./Skills";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ y: 25 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 2 }}
      className="mx-auto  w-full flex flex-col items-center justify-center space-y-4 "
    >
      <ContentTitle title="Quem sou" />
      <div className="flex flex-col w-full items-center space-y-12">
        <div className="max-w-4xl flex flex-col xl:flex-row w-full justify-between items-center mx-auto  gap-6 xl:gap-12">
          <motion.img
            alt="avatar-pefelippe"
            src="assets/avatar-pdr.png"
            className="rounded-full h-[200px] w-[200px]  "
          />

          <motion.span
            className=" flex flex-col w-fit items-center xl:text-left text-center text-[1.15rem] md:text-[1.2rem]
          text-gray-200  max-w-3xl  max-xl:px-8"
          >
            Sou um Web Developer com 3 anos de experiência em resolver problemas
            usando Javascript e suas blibliotecas e frameworks. Estou sempre
            buscando novos desafios e experiências.
            <br />
            <br />
            Atualmente, trabalho como Web Developer no Instituto Atlântico.{" "}
          </motion.span>
        </div>

        <Skills />

        <Link
          href="/Contact"
          target=""
          className="px-10  text-center text-xl  font-semibold rounded-xl p-5 transition-all bg-[#5865f2]/80 hover:bg-[#5865f2]"
        >
          Vamos Conversar!
        </Link>
      </div>
    </motion.div>
  );
}

export default About;
