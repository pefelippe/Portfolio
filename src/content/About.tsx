import { motion } from "framer-motion";
import React from "react";

import ContentTitle from "../components/ContentTitle";

type Props = {};

export default function About({}: Props) {
  return (
    <div className=" flex flex-col gap-2">
      <ContentTitle title="Quem sou" />

      <p className="text-lg text-gray-300 max-md:mx-auto">
        Um pouco sobre mim.
      </p>

      <div
        className=" flex flex-col w-full mx-auto md:flex-row pt-2
    items-center justify-start  rounded-2xl  shadow-md gap-20 max-md:gap-6  "
      >
        <div className="flex flex-col gap-2">
          <motion.img
            alt="avatar-pefelippe"
            src="assets/avatar-pdr.png"
            className="rounded-xl h-full max-h-[350px]  max-lg:h-[200px] max-lg:rounded-full
          transition-all shadow-md object-fit border-2"
          />

          <button
            className="w-full  p-4 rounded-md font-semibold transition-all
             hover:bg-[#5865f2]/80 text-[#fff] border-2 hover:border-[#5865f2]/80"
          >
            Currículo
          </button>
        </div>

        <motion.span
          className="w-full flex flex-col h-full max-lg:text-center gap-10
     text-[1.2rem]  lg:text-[1.3rem] text-gray-100"
        >
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
        </motion.span>
      </div>
    </div>
  );
}
