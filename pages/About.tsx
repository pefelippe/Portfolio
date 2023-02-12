import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import AnimatedBtn from "../src/components/motion/AnimatedBtn";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" mx-auto w-full flex flex-col items-center justify-center px-8 max-w-2xl "
    >
      <div className="mb-4 bg-[#5865f2] w-fit px-4 flex text-center justify-center tracking-[1px] text-[2rem]  font-bold ">
        Quem sou eu
      </div>

      <div className="flex flex-col justify-center w-full items-center mx-auto  gap-4 ">
        <motion.img
          alt="avatar-pefelippe"
          src="assets/avatar-pdr.png"
          className="rounded-full h-[200px] w-[200px]  border-4 hover:border-0 transition-all "
        />

        <motion.span className=" flex flex-col w-fit items-center  text-center text-[1.15rem]  text-gray-200 ">
          <p>
            Sou um{" "}
            <span className="text-[#5865f2]  font-semibold">Web Developer</span>{" "}
            com mais de três anos de experiência em construir soluções
            inovadoras na web. Possuo profundo conhecimento em tecnologias como{" "}
            <span className=" font-semibold ">
              React, Node, Typescript e AWS
            </span>
            .
          </p>
          <p>
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
        </motion.span>
      </div>
    </motion.div>
  );
}

export default About;
