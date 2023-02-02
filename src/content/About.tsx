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
      transition={{ duration: 1.75, delay: 2 }}
      className="contentStyle"
    >
      <ContentTitle title="Sobre" />

      <div className="mx-auto max-w-5xl w-full flex flex-col md:flex-row items-center justify-evenly  max-md:space-y-8 ">
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
          className="rounded-full  h-[175px] w-[175px]  border-4 hover:border-0 transition-all flex-shrink-0"
        />
        <span
          className=" flex flex-col  w-fit  text-center md:text-left items-center max-w-xl 
           text-[1rem] md:text-[1.2rem] text-gray-100"
        >
          Trabalho há 3 anos com Javascript e suas blibliotecas e frameworks,
          principalmente React e Node. Buscando evoluir a qualidade das minhas
          entregas, venho me especializando em DevOps (Docker, Terraform, AWS).
          Atualmente trabalho como Web Developer no Instituto Atlântico.
        </span>
      </div>
    </motion.div>
  );
}

export default About;
