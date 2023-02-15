import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import ContentTitle from "../atoms/ContentTitle";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-fit mx-auto w-full flex flex-col items-center justify-center md:justify-start max-lg:px-8 max-w-xl md:max-w-2xl gap-4"
    >
      <ContentTitle title="quem sou eu" />

      <motion.img
        alt="avatar-pefelippe"
        src="assets/avatar-pdr.png"
        className="rounded-full h-[200px] w-[200px]  border-4 hover:border-0 transition-all "
      />

      <motion.span className=" flex flex-col w-fit items-center  text-center text-[1rem]  md:text-[1.15rem]  text-gray-200 max-w-3xl ">
        <p>
          Sou um{" "}
          <span className="text-[#5865f2]  font-semibold">Web Developer</span>{" "}
          com mais de três anos de experiência em construir soluções inovadoras
          na web. Possuo profundo conhecimento em tecnologias como{" "}
          <span className=" font-semibold underline decoration-[#5865f2]">
            React, Next Node, Typescript e AWS
          </span>
          .
        </p>
        <p>
          Atualmente finalizando meu diploma em{" "}
          <span className="font-semibold ">Ciência da Computação</span> na UFC.
          Além disso, trabalho como Web Developer no{" "}
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

      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.1 },
        }}
        className="px-6 text-center text-md md:text-xl  font-semibold rounded-xl p-4 transition-all
            border-2 border-[#5865f2]/80 bg-[#5865f2]  hover:underline hover:bg-[#5865f2] hover:border-[#5865f2] "
      >
        <Link href="/ContactPage" target="">
          <p>Visite meu Currículo</p>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default About;
