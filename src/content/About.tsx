import { motion } from "framer-motion";
import React from "react";

import ContentTitle from "../components/ContentTitle";

type Props = {};

export default function About({}: Props) {
  return (
    <div className=" flex flex-col gap-2 justify-center item-center mx-auto">
      <ContentTitle title="Quem sou" />

      <p className="text-lg text-gray-300 max-md:mx-auto">
        Um pouco sobre mim.
      </p>

      <div
        className=" flex max-lg:flex-col w-full mx-auto pt-2
    items-center justify-start  rounded-2xl  shadow-md gap-10 lg:gap-20 max-md:gap-6  "
      >
        <motion.span
          className="h-full w-full flex flex-col text-start gap-10
     text-[1.15rem]  lg:text-[1.5rem] text-gray-100 max-w-4xl "
        >
          Meu nome é Pedro Felippe e eu sou um desenvolvedor web com mais de 3
          anos de experiência na criação de componentes reutilizáveis e
          escaláveis.
        </motion.span>
      </div>
    </div>
  );
}
