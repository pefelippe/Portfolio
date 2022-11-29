import { motion } from "framer-motion";
import Image from "next/image";

import React from "react";
import { SocialIcon } from "react-social-icons";
import Avatar from "../public/desenho.png";

type Props = {};

function About({}: Props) {
  return (
    <div
      className="h-screen flex flex-col relative 
    text-center max-w-7xl px-10 justify-evenly mx-auto 
    items-center space-y-5 "
    >
      <motion.div
        initial={{
          x: -300,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.25,
        }}
        className="h-screen flex flex-col justify-center mx-auto"
      >
        <h4 className="text-4xl font-semibold">
          Um <span className="underline decoration-[#F7AB0A]">pouco</span> sobre
          mim
        </h4>

        <div className="flex items-center justify-center p-10">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image
              src={Avatar}
              alt="pefelippe avatar"
              className="object-fit relative mx-auto h-60 w-60 border-2 border-gray-900 rounded-lg "
            />
          </motion.div>

          <div className="space-y-10 px-0 md:px-10">
            <p className="text-2xl text-left md:text-md">
              Sou o Pedro Felippe! <br />
              Sou um Desenvolvedor Web, sendo a principal stack React, Node e
              Typescript. <br />
              Consigo me expressar bem em inglês (Nível C2)
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
