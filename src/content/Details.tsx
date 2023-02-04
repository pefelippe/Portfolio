import { motion } from "framer-motion";
import React from "react";

import ContentTitle from "../atoms/ContentTitle";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 2 }}
      className="contentStyle max-lg:px-5"
    >
      <div className="mx-auto max-w-7xl  w-full flex flex-col lg:flex-row items-center justify-center lg:gap-20  ">
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
          className="rounded-xl  h-[200px] w-[200px] xl:h-[250px] xl:w-[250px]  border-4 hover:border-0 transition-all flex-shrink-0 "
        />

        <span
          className=" flex flex-col w-fit  text-center lg:text-left 
           text-[1rem] md:text-[1.2rem] text-gray-100 max-w-2xl "
        >
          <ContentTitle title="Quem sou?" />
          <p>
            Trabalho há 3 anos com Javascript e suas blibliotecas e frameworks,
            principalmente React e Node. Buscando evoluir a qualidade das minhas
            entregas, venho me especializando em DevOps (Docker, Terraform,
            AWS). <br />
            Atualmente trabalho como Web Developer no Instituto Atlântico.
          </p>
        </span>
      </div>
    </motion.div>
  );
}

export default About;
