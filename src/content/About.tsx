import { motion } from "framer-motion";
import React from "react";
import ContentTitle from "../atoms/ContentTitle";

type Props = {};

function About({}: Props) {
  return (
    <div className="mx-auto max-w-7xl w-full flex flex-col xl:flex-row  items-center justify-center ">
    <motion.img
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        alt="avatar-pefelippe"
        src="assets/avatar-pdr.png"
        className="rounded-xl h-[200px] w-[200px] xl:h-[350px] xl:w-[350px] flex-shrink-0 "
    />
    <motion.span
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=" flex flex-col w-fit items-center max-lg:text-center text-[1rem] md:text-[1.3rem]
        text-gray-100 max-w-xl xl:max-w-3xl space-y-4 max-xl:pt-4 px-10 "
    >
        <ContentTitle title="Quem sou" />
        <p className="">
        Trabalho há 3 anos com Javascript e suas blibliotecas e frameworks,
        principalmente React e Node. Buscando evoluir a qualidade das minhas
        entregas, venho me especializando em DevOps (Docker, Terraform,
        AWS).
        <br />
        <br />
        Atualmente trabalho como Web Developer no Instituto Atlântico.
        </p>
        <button className="w-full border-2 rounded-xl p-3">Currículo</button>
    </motion.span>
    </div>
  );
}

export default About;
