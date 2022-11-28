import { motion } from "framer-motion";
import Image from "next/image";

import React from "react";
import Avatar from "../public/eu.png";

type Props = {};

function About({}: Props) {
  return (
    <div
      className="h-screen flex flex-col relative 
    text-center 
    max-w-7xl px-10 justify-evenly mx-auto 
    items-center space-y-5 max-h-fit"
    >
      <motion.div
        initial={{
          x: -300,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
        }}
      >
        <div className="flex justify-evenly space-x-4 items-center max-md:flex-col ">
          <Image
            src={Avatar}
            alt="pefelippe avatar"
            className="object-fit relative mx-auto h-56 w-56 border rounded-lg"
          />

          <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl  font-semibold">
              Um{" "}
              <span className="underline decoration-[#F7AB0A]/50">pouco</span>{" "}
              sobre mim
            </h4>
            <p className="text-lg md:text-md">
              Atuo na área de desenvolvimento Web, sendo a minha stack
              principal: React, Node e Typescript. <br />
              <br />
              Já fui muitas vezes responsável por implementar componentes de
              interface de usuário responsivos e de qualidade, além de efetuar
              manutenções em códigos existentes, bem como testar e desenvolver
              novas funcionalidades.
              <br />
              <br /> Consigo me comunicar bem em inglês (C2), sendo acostumado a
              participarem reuniões em inglês com membros de vários países.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
