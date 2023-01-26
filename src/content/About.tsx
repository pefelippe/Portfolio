import { motion } from "framer-motion";
import React from "react";
import AnimatedBtn from "../components/motion/AnimatedBtn";

import { FaFileAlt, FaGithub, FaLinkedinIn } from "react-icons/fa";

type Props = {};

function About({}: Props) {
  return (
    <div className="flex flex-col space-y-12 max-lg:space-y-12">
      <h4 className="mt-2 w-full text-3xl font-bold tracking-tight text-center md:text-4xl ">
        <span className=" bg-[#000] text-[#fff]">Quem sou eu</span>
      </h4>

      <div className="flex  max-lg:flex-col xl:gap-12  items-center justify-center mx-auto lg:space-x-4  ">
        <motion.img
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.1 },
          }}
          transition={{
            duration: 0.5,
          }}
          alt="avatar-pefelippe"
          src="assets/avatar-pdr.png"
          className="rounded-full md:h-[250px] md:w-[250px] h-[200px] w-[200px] border-4 "
        />

        <motion.div
          initial={{
            opacity: 0,
            x: 200,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2.5,
          }}
          className="flex  flex-col max-xl:items-center justify-center  max-w-xl "
        >
          <span className="text-base md:text-xl   pt-5 space-y-4 text-[#e4e4e4]">
            <p>Me chamo Pedro Felippe, tenho 22 anos e moro no Brasil.</p>
            <p>Tenho por volta de 3 anos de experiência no mercado.</p>
            <p>
              Trabalho como Web Developer no{" "}
              <a
                href="https://www.atlantico.com.br/"
                className="font-semibold underline text-[#5865f2]"
              >
                Instituto Atlântico
              </a>
              .
            </p>
            <p> Consigo falar e entender bem a lingua inglesa (nível C2).</p>
          </span>
          <div className="flex gap-8 pt-5">
            <AnimatedBtn
              className="w-fittext-lg font-semibold"
              href="https://github.com/pefelippe"
            >
              <FaGithub className="h-7 w-7 hover:text-[#5865f2] " />
            </AnimatedBtn>

            <AnimatedBtn
              className="w-fit  text-lg font-semibold"
              href="https://www.linkedin.com/in/pedro-felippe/"
            >
              <FaLinkedinIn className="h-7 w-7 hover:text-[#5865f2] " />
            </AnimatedBtn>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
