import { motion } from "framer-motion";
import Image from "next/image";

import React from "react";
import Skill from "../atoms/Skill";

import Avatar from "../public/assets/eu-2.jpg";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.25 }}
      className="component-base"
    >
      <h3 className="component-title">Sobre</h3>
      <div className="flex flex-col lg:flex-row ">
        <Image
          src={Avatar}
          alt="pefelippe avatar"
          className="object-fit h-72 w-72 border border-[#000] rounded-lg mb-10"
        />

        <div className="px-10 ">
          <p className="text-sm text-left lg:text-2xl">
            Atuo na área de desenvolvimento Web, sendo a minha stack atual
            React, Node e Typescript.
            <br />
            <br />
            Já fui muitas vezes responsável por implementar componentes de
            interface de usuário responsivos e de qualidade, além de efetuar
            manutenções em códigos existentes, bem como testar e desenvolver
            novas funcionalidades.
            <br />
            <br />
            Consigo me comunicar bem em inglês (nível C2). Sou acostumado a
            participarem reuniões em inglês com membros de vários países.
          </p>
        </div>
      </div>

      {/* <div className="overflow-hidden flex">
        <div className="grid grid-cols-2 xl:grid-cols-10 gap-5 overflow-hidden">
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
      </div> */}
    </motion.div>
  );
}

export default About;
