import { motion } from "framer-motion";
import React from "react";
import { FaFilePdf } from "react-icons/fa";

import AnimatedBtn from "../components/animated/AnimatedBtn";
import ContentTitle from "../components/ContentTitle";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-full flex flex-col justify-center gap-4 items-center mx-auto text-lg text-gray-100">
      <ContentTitle title="Quem sou" />
      <p className="text-lg text-gray-300">Um pouco sobre mim.</p>

      <div className="pt-8 flex max-lg:flex-col gap-6 lg:gap-16 item-center justify-center  text-center lg:text-start">
        <motion.img
          alt="avatar-pefelippe"
          src="assets/avatar-pdr.png"
          className=" rounded-full max-h-[200px] max-w-[200px] mx-auto transition-all object-cover "
        />
        <motion.span className="flex flex-col max-w-2xl text-md md:text-xl gap-4">
          <p>
            Meu nome é <b className=" ">Pedro Felippe</b> e eu sou um
            <b className=""> Web Developer</b> com mais de 3 anos de experiência
            de experiência de mercado na criação de componentes WEB
            reutilizáveis e escaláveis
          </p>

          <p className="w-full flex gap-2 max-sm:flex-col">
            Atualmente trabalho em tempo integral no{" "}
            <b className="text-[#5865f2]">
              <AnimatedBtn
                className=""
                href="https://institutoatlantico.gupy.io/"
              >
                <div className="hover:text-[#5865f2]/80 ">
                  Instituto Atlântico
                </div>
              </AnimatedBtn>
            </b>
          </p>
          <p>
            Estou finalizando minha graduação em{" "}
            <b className="">Ciência da Computação</b> na <b className="">UFC</b>
          </p>

          <span className=" text-gray-300 text-md flex gap-2 justify-end pt-5 ">
            Para maiores detalhes, visite meu{" "}
            <b className="text-[#5865f2] underline hover:text-[#5865f2]/80 ">
              <AnimatedBtn className="" href="https://resume.io/r/m2cn8pnqu">
                <div className=" ">Currículo</div>
              </AnimatedBtn>
            </b>
          </span>
        </motion.span>
      </div>
    </div>
  );
}
