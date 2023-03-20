import { motion } from "framer-motion";
import React from "react";

import ContentTitle from "../components/ContentTitle";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-full flex flex-col justify-center gap-4 items-center mx-auto text-lg text-gray-100">
      <ContentTitle title="Quem sou" />
      <p className="text-lg text-gray-300">Um pouco sobre mim.</p>

      <motion.img
        alt="avatar-pefelippe"
        src="assets/avatar-pdr.png"
        className=" rounded-full max-h-[220px] transition-all object-cover "
      />
      <div className="flex item-center justify-center text-center">
        <motion.span className=" max-w-xl text-xl">
          Meu nome é <b className="">Pedro Felippe</b> e eu sou um Web Developer
          com mais de 3 anos de experiência na criação de componentes
          reutilizáveis e escaláveis. Entre as tecnologias as quais trabalho
          destaco: <span className=" ">React, Node, Typescript e Next.js.</span>
          <br />
          <br />
          Atualmente trabalho em tempo integral no{" "}
          <b className="">Instituto Atlântico</b>. Além disso, estou finalizando
          minha graduação em <b className="">Ciência da Computação</b> na{" "}
          <b className="">Universidade Federal do Ceará</b>.
        </motion.span>
      </div>
    </div>
  );
}
