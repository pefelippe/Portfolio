import { motion } from "framer-motion";
import React from "react";
import { FaFilePdf } from "react-icons/fa";

import AnimatedBtn from "./../components/motion/AnimatedBtn";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.75 }}
      className="flex flex-col items-center gap-6 px-8"
    >
      <h4 className="mx-auto text-center w-full text-3xl font-bold tracking-tight md:text-4xl ">
        <span className=" bg-[#000] text-[#fff]">Quem sou eu</span>
      </h4>

      <motion.img
        transition={{
          duration: 1.75,
        }}
        alt="avatar-pefelippe"
        src="assets/avatar-pdr.png"
        className="rounded-full h-[250px] w-[250px]  border-4"
      />

      <span className="text-center text-[1rem] md:text-xl max-w-xl  text-[#e4e4e4] space-y-2">
        <p>Sou um Web Dev com 3 anos de experiência no mercado. </p>
        <p> Consigo falar e entender bem a lingua inglesa (nível C2).</p>
        <p>
          Trabalho como Web Developer no{" "}
          <a
            href="https://www.atlantico.com.br/"
            className="font-semibold  text-[#5865f2]"
            target="_blank"
            rel="noreferrer"
          >
            Instituto Atlântico
          </a>
          .
        </p>
      </span>
    </motion.div>
  );
}

export default About;
