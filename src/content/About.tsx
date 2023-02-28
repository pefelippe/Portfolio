import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import ContentTitle from "../atoms/ContentTitle";
import AnimatedBtn from "./../components/motion/AnimatedBtn";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className=" flex flex-col h-full w-full max-w-7xl  text-xl text-[#fff] mx-auto  snap-center"
    >
      <ContentTitle title="Quem sou" />

      <div
        className=" flex flex-col w-fit mx-auto
        items-center  rounded-2xl  shadow-md gap-8 p-10"
      >
        <motion.img
          alt="avatar-pefelippe"
          src="assets/avatar-pdr.png"
          className="rounded-full h-[200px] transition-all shadow-md object-cover border-1 border-[#121212]"
        />

        <motion.span className="max-w-xl flex flex-col w-fit justify-center text-center  text-[1rem]  md:text-[1.2rem]  text-gray-200  gap-8 ">
          <p>
            Sou um{" "}
            <span className="text-[#5865f2]  font-semibold">Web Developer</span>{" "}
            com mais de três anos de experiência em construir soluções
            inovadoras na web. Possuo profundo conhecimento em tecnologias como{" "}
            <span className=" font-semibold underline decoration-[#5865f2]">
              React, Next, Node, Typescript e AWS
            </span>
            . <br />
            <br />
            Atualmente finalizando meu diploma em{" "}
            <span className="font-semibold ">Ciência da Computação</span> na
            UFC. Além disso, trabalho como Web Developer no{" "}
            <a
              href="https://www.atlantico.com.br/"
              rel="noreferrer"
              target="_blank"
              className="text-[#5865f2] font-semibold underline"
            >
              Instituto Atlântico
            </a>
            .
          </p>

          <button className="w-full border-2 p-4 rounded-xl font-semibold transition-all hover:text-[#fff] hover:bg-[#5865f2] border-[#5865f2] text-[#5865f2] ">
            Currículo
          </button>
        </motion.span>
      </div>
    </motion.div>
  );
}

export default About;
