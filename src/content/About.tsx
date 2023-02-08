import { motion } from "framer-motion";
import React from "react";
import ContentTitle from "../atoms/ContentTitle";

type Props = {};

function About({}: Props) {
  return (
    <div className="mx-auto max-w-7xl w-full flex flex-col   items-center justify-center ">
      
      <ContentTitle title="Quem sou" />
    <motion.img
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        alt="avatar-pefelippe"
        src="assets/avatar-pdr.png"
        className="rounded-full h-[200px] w-[200px]  flex-shrink-0 "
    />
    <motion.span
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=" flex flex-col w-fit items-center text-center text-[1rem] md:text-[1.3rem]
        text-gray-100 max-w-xl space-y-4 max-xl:pt-4 "
    >

      <p className="">
      Trabalho há 3 anos com Javascript e suas blibliotecas e frameworks,
      principalmente React e Node. Buscando evoluir a qualidade das minhas
      entregas, venho me especializando em DevOps (Docker, Terraform,
      AWS).
      <br />
      <br />
      Atualmente trabalho como Web Developer no Instituto Atlântico.
      </p>
      <button className="w-[250px] border-2 rounded-xl p-3 hover:text-[#586ff5f2] border-[#5865f2]">Currículo</button>
    </motion.span>
    </div>
  );
}

export default About;
