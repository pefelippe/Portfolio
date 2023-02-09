import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import ContentTitle from "../atoms/ContentTitle";
import Icons from "../atoms/Icons";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ y: 25 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 2 }}
      className="mx-auto max-w-4xl w-full flex flex-col items-center justify-center space-y-4 "
    >
      <ContentTitle title="Quem sou" />

      <motion.img
        alt="avatar-pefelippe"
        src="assets/avatar-pdr.png"
        className="rounded-full h-[200px] w-[200px] flex-shrink-0 "
      />

      <motion.span
        className=" flex flex-col w-fit items-center text-center text-[1rem] md:text-[1.3rem]
        text-gray-100 max-w-xl space-y-4  px-8 "
      >
        Trabalho há 3 anos com Javascript e suas blibliotecas e frameworks,
        principalmente React e Node. Buscando evoluir a qualidade das minhas
        entregas, venho me especializando em DevOps (Docker, Terraform, AWS).
        <br />
        Atualmente trabalho como Web Developer no Instituto Atlântico.
        <Link
          href="/Contact"
          target=""
          className="w-full text-xl  font-semibold rounded-xl p-5 transition-all bg-[#5865f2]/80 hover:bg-[#5865f2]"
        >
          Vamos Conversar!
        </Link>
      </motion.span>
    </motion.div>
  );
}

export default About;
