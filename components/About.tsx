import { motion } from "framer-motion";
import Image from "next/image";

import React from "react";
import { SocialIcon } from "react-social-icons";
import Avatar from "../public/eu.png";

type Props = {};

function About({}: Props) {
  return (
    <div
      className="h-screen flex flex-col relative 
    text-center max-w-7xl px-10 justify-evenly mx-auto 
    items-center space-y-5 max-md:justify-center"
    >
      <motion.div
        initial={{
          y: 200,
          opacity: 0,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.25,
        }}
        className="h-screen flex flex-col justify-center mx-auto max-md:justify-center"
      >
        <h4 className="text-3xl font-semibold">
          Um <span className="underline decoration-[#F7AB0A]">pouco</span> sobre
          mim
        </h4>

        <div className="flex items-center justify-around p-10 max-md:flex-col max-md:justify-evenly">
          {/* <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image
              src={Avatar}
              alt="pefelippe avatar"
              className="object-fit relative mx-auto h-60 w-60 border-2 border-gray-900 rounded-lg mb-5 "
            />
          </motion.div> */}

          <div className="space-y-10 md:px-10">
            <p className="text-xl text-left max-md:text-sm">
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
      </motion.div>
    </div>
  );
}

export default About;
