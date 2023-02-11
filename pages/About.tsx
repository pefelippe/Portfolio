import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import ContentTitle from "../src/atoms/ContentTitle";
import Skills from "../src/content/Skills";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" mx-auto w-full flex flex-col items-center justify-center px-8  py-20  gap-10"
    >
      <ContentTitle title="Quem sou?" />
      <div className="flex flex-col justify-center w-full items-center  mx-auto gap-6  xl:flex-row ">
        <motion.img
          alt="avatar-pefelippe"
          src="assets/avatar-pdr.png"
          className="rounded-full h-[225px] w-[225px] border-4 hover:border-0 transition-all "
        />

        <motion.span
          className=" flex flex-col  w-fit items-center xl:text-left text-center max-md:text-[1.15rem] text-[1.25rem]
          text-gray-200  max-w-2xl"
        >
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

      {/* <Link
        href="/Contact"
        target=""
        className="px-6 text-center text-xl  font-semibold rounded-xl p-5 transition-all bg-[#5865f2]/80  hover:underline hover:bg-[#5865f2]"
      >
        Entre em contato!
      </Link> */}
    </motion.div>
  );
}

export default About;
