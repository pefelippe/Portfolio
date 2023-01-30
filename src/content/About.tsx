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

      <div className="flex flex-col md:flex-row items-center justify-center xl:gap-20 w-full  ">
          <motion.img
            animate={{}}
            transition={{
              duration: 1.75,
              scale: 2,
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            alt="avatar-pefelippe"
            src="assets/avatar-pdr.png"
            className="rounded-xl h-[200px] w-[200px] md:h-[250px] md:w-[250px] border-4"
          />

        <span className="pt-5 flex flex-col w-fit max-w-2xl items-center 
         text-center md:text-left max-lg:px-10 text-[1.1rem] md:text-[1.3rem] text-grey-300 space-y-4"
        >
          Iniciei minha carreira como desenvolvedor no final de 2020. Atualmente
          trabalho como Web Developer no Instituto Atlântico. Sou estudante de
          Ciência da Computação na UFC. Consigo falar e entender bem Inglês
          (nível C2).
   
        </span>
      </div>
    </motion.div>
  );
}

export default About;
