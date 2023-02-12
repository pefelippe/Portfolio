import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 2.5 }}
      className="mx-auto w-full flex flex-col items-center justify-center px-8 gap-4 max-w-4xl "
    >
      <div className="bg-[#5865f2] w-fit px-4 flex text-center justify-center tracking-[1px] text-[2.5rem]  font-bold ">
        Quem sou eu
      </div>

      <div className="flex flex-col justify-center w-full items-center mx-auto  gap-4 md:flex-row">
        <motion.img
          alt="avatar-pefelippe"
          src="assets/avatar-pdr.png"
          className="rounded-full h-[200px] w-[200px]  border-4 hover:border-0 transition-all "
        />

        <motion.span className=" flex flex-col w-fit items-center xl:text-left text-center text-[1.15rem]  text-gray-200 ">
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
