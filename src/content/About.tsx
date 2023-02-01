import { motion } from "framer-motion";
import React from "react";

import { FaLinkedinIn, FaGithub, FaFilePdf } from "react-icons/fa";

import ContentTitle from "../atoms/ContentTitle";
import AnimatedBtn from "../components/motion/AnimatedBtn";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.75, delay: 2 }}
      className="contentStyle "
    >
      <ContentTitle title="Sobre" />

      <div className="mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-center lg:gap-12 w-full space-y-4 ">
          <motion.img
            animate={{}}
            transition={{
              duration: 1.75,
              scale: 2,
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 },
            }}
            alt="avatar-pefelippe"
            src="assets/avatar-pdr.png"
            className="rounded-xl h-[200px] w-[200px] md:h-[250px] md:w-[250px] border-4"
          /> 

        <div className=" flex flex-col space-y-4 w-fit text-center md:text-left max-lg:items-center ">
          <span className=" max-lg:px-10 text-[1.1rem] md:text-[1.2rem] text-gray-100"
          >
            Trabalho há 3 anos me comunicando diariamente em inglês com pessoas do mundo inteiro.
            Minha principal stack hoje é Javascript e suas blibliotecas e frameworks, principalmente React e Node.
            Buscando evoluir a qualidade das minhas entregas, venho me especializando em DevOps (Docker, Terraform, AWS).
          </span>

          <div className="flex gap-4 ">
            <AnimatedBtn
              className="w-fit rounded-xl text-md font-semibold  flex  py-4 px-4 border-[#fff] border-2 hover:bg-[#3f4de9]"
              href="https://github.com/pefelippe"
            >
              <FaGithub className=" h-7 w-7 " />
            </AnimatedBtn>

            <AnimatedBtn
              className="w-fit rounded-xl text-md font-semibold  py-4 px-4 border-[#fff] border-2 hover:bg-[#3f4de9]  "
              href="https://www.linkedin.com/in/pedro-felippe/"
            >
              <FaLinkedinIn className=" h-7 w-7 " />
            </AnimatedBtn>
            <AnimatedBtn
            className="w-fit text-md font-semibold border-2 border-[#fff] rounded-xl hover:bg-[#3f4de9]"
            href="https://resume.io/r/m2cn8pnqu"
          >
            <div className="flex space-x-2 justify-center items-center py-4 px-4">
              <FaFilePdf className="h-7 w-7 text-[#fff] " /> <p>Currículo</p>
            </div>
          </AnimatedBtn>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default About;
