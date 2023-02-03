import { motion } from "framer-motion";
import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import ContentTitle from "../atoms/ContentTitle";
import AnimatedBtn from "../components/motion/AnimatedBtn";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      className="contentStyle"
    >
      <ContentTitle title="Sobre" />

      <div className="mx-auto max-w-4xl w-full flex flex-col md:flex-row items-center justify-center md:gap-10  max-md:space-y-4 ">
        <motion.img
          animate={{}}
          transition={{
            duration: 1.75,
            scale: 2,
          }}
          whileHover={{
            scale: 1.05,
          }}
          alt="avatar-pefelippe"
          src="assets/avatar-pdr.png"
          className="rounded-full h-[175px] w-[175px]  border-4 hover:border-0 transition-all flex-shrink-0"
        />
        <span
          className=" flex flex-col w-fit  text-center md:text-left 
           text-[1rem] md:text-[1.2rem] text-gray-100"
        >
          <p>
            Trabalho há 3 anos com Javascript e suas blibliotecas e frameworks,
            principalmente React e Node. Buscando evoluir a qualidade das minhas
            entregas, venho me especializando em DevOps (Docker, Terraform,
            AWS). Atualmente trabalho como Web Developer no Instituto Atlântico.
          </p>

          <div className="flex w-full justify-center md:justify-start  items-center gap-8 ">
            <AnimatedBtn
              className="w-fit rounded-xl text-lg font-semibold"
              href="https://www.linkedin.com/in/pedro-felippe/"
            >
              <div className="flex gap-2  hover:text-[#3f4de9] pt-5 rounded-lg transition-all">
                <FaFilePdf className=" h-7 w-7 " /> <p>Currículo</p>
              </div>
            </AnimatedBtn>
          </div>
        </span>
      </div>
    </motion.div>
  );
}

export default About;
