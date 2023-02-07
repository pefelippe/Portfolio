import { motion } from "framer-motion";
import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import ContentTitle from "../atoms/ContentTitle";
import Icons from "../atoms/Icons";
import AnimatedBtn from "../components/motion/AnimatedBtn";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      className="contentStyle px-5 "
      id="sobre"
    >
      <ContentTitle title="Quem sou" />
      <div className="mx-auto max-w-7xl w-full flex flex-col xl:flex-row  items-center justify-evenly">
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
          className="rounded-xl h-[200px] w-[200px] xl:h-[225px] xl:w-[225px] transition-all flex-shrink-0 "
        />
        <span
          className=" flex flex-col w-fit items-center max-lg:text-center text-[1rem] md:text-[1.3rem]
         text-gray-100 max-w-xl xl:max-w-4xl space-y-4 max-xl:pt-4"
        >
          <p className="px-10 ">
            Trabalho há 3 anos com Javascript e suas blibliotecas e frameworks,
            principalmente React e Node. Buscando evoluir a qualidade das minhas
            entregas, venho me especializando em DevOps (Docker, Terraform,
            AWS).
            <br />
            Atualmente trabalho como Web Developer no Instituto Atlântico.
          </p>
        </span>
      </div>
      <Icons />
    </motion.div>
  );
}

export default About;
