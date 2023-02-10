import { motion } from "framer-motion";
import React from "react";

import ContentTitle from "../atoms/ContentTitle";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ y: 25 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 2 }}
      className="mx-auto w-full flex flex-col items-center justify-center px-8"
    >
      <ContentTitle title="Sobre mim" />
      <div className="flex flex-col md:flex-row  justify-center w-full items-center  mx-auto gap-4 md:gap-8">
        <motion.img
          alt="avatar-pefelippe"
          src="assets/avatar-pdr.png"
          className="rounded-full h-[225px] w-[225px] border-4 hover:border-0 transition-all "
        />

        <motion.span
          className=" flex flex-col  w-fit items-center  text-center text-[1.25rem]
          text-gray-200  max-w-2xl md:text-left  gap-2"
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
            UFC. Além diss, trabalho como Web Developer no{" "}
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

// Estou em busca de novas oportunidades para
//             colocar meus conhecimentos em prática e contribuir para o sucesso de
//             projetos desafiadores.
