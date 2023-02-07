import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import ContentTitle from "../atoms/ContentTitle";
import AnimatedBtn from "../components/motion/AnimatedBtn";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 2 }}
      className="contentStyle max-lg:px-5"
    >
      <ContentTitle title="Sobre mim" />
      <div className="mx-auto max-w-7xl max-xl:space-y-4 w-full flex flex-col lg:flex-row items-center justify-center lg:gap-20  ">
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
          className="rounded-full  h-[200px] w-[200px] xl:h-[225px] xl:w-[225px]  border-4 hover:border-0 transition-all flex-shrink-0 "
        />

        <span
          className=" flex flex-col w-fit  text-center lg:text-left 
           text-[1rem] md:text-[1.2rem] text-gray-100 max-w-2xl"
        >
          <p className=" max-md:px-10 ">
            Trabalho há 3 anos com Javascript e suas blibliotecas e frameworks,
            principalmente React e Node. Buscando evoluir a qualidade das minhas
            entregas, venho me especializando em DevOps (Docker, Terraform,
            AWS). <br />
            Atualmente trabalho como Web Developer no Instituto Atlântico.
          </p>

          {/* <div className="flex md:justify-start justify-center gap-8 pt-4">
            <AnimatedBtn
              className="w-fit rounded-xl text-lg font-semibold  "
              href="https://github.com/pefelippe"
            >
              <FaGithub className=" h-8 w-8  hover:text-[#5865f2] text-[#fff] " />
            </AnimatedBtn>

            <AnimatedBtn
              className="w-fit rounded-xl  text-lg font-semibold"
              href="https://www.linkedin.com/in/pedro-felippe/"
            >
              <FaLinkedinIn className=" h-8 w-8  hover:text-[#5865f2] text-[#fff]" />
            </AnimatedBtn>
          </div> */}
        </span>
      </div>
    </motion.div>
  );
}

export default About;
