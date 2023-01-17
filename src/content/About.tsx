import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "./../components/motion/AnimatedBtn";

type Props = {};

function About({}: Props) {
  return (
    <div
      className="h-max flex flex-col  xl:flex-row justify-center xl:justify-between  
      max-xl:px-5 xl:mx-auto items-center max-w-7xl  "
    >
      <motion.div
        initial={{
          opacity: 0,
          x: 100,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-col justify-center max-xl:items-center xl:h-[300px] space-y-4"
      >
        <h4 className="mt-2 w-full  max-lg:text-center text-3xl font-bold tracking-tight  md:text-5xl lg:text-5xl underline decoration-[#5865f2]">
          Então, quem sou eu?
        </h4>

        <span className="text-base md:text-xl  max-lg:text-center max-w-3xl space-y-4">
          <p>
            Sou um Web Developer com experiência em implementar componentes de
            interface de usuário responsivos e de qualidade.{" "}
          </p>
          <p>
            {" "}
            Sou Web Developer no{" "}
            <a
              href="https://www.atlantico.com.br/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold  text-[#5865f2]"
            >
              Instituto Atlântico
            </a>
          </p>
          <p>
            Consigo me comunicar bem em inglês (nível C2), sendo acostumado a
            participarem reuniões em inglês com membros de vários países.
          </p>
        </span>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: -100,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.5,
        }}
      >
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
          className="rounded-xl h-[250px] w-[250px] md:h-[300px] md:w-[300px] xl:h-[300px] xl:w-[300px] max-xl:hidden "
        />
      </motion.div>
    </div>
  );
}

export default About;
