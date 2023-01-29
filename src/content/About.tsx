import { motion } from "framer-motion";
import React from "react";
import ContentTitle from "../atoms/ContentTitle";

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

      <div className="flex flex-col xl:flex-row items-center justify-center gap-8 ">
        <div className="flex flex-col gap-8">
          <motion.img
            animate={{}}
            transition={{
              duration: 1.75,
              scale: 2,
            }}
            alt="avatar-pefelippe"
            src="assets/avatar-pdr.png"
            className="rounded-full h-[150px] w-[150px] border-4"
          />
        </div>

        <span className="flex flex-col w-fit max-w-2xl items-center  max-lg:text-center px-10">
          <div className="text-[1.1rem] text-grey-300 ">
            Iniciei minha carreira no final de 2020. Hoje trabalho como Web
            Developer no Instituto Atlântico. Sou estudante de Ciência da Computação
            na UFC. Consigo falar e entender bem Inglês (nível C2)
          </div>
        </span>
      </div>
    </motion.div>
  );
}

export default About;
